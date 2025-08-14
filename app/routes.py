from flask import (
    Blueprint, render_template, request, redirect, url_for,
    flash, current_app, make_response, Response
)
from flask_login import login_user, logout_user, login_required, current_user
from sqlalchemy import func
from app import db, mail, limiter
from app.models import User, Appointment, EmailLog
from flask_mail import Message
from datetime import datetime
import uuid
import io
import csv
import os
import re

main = Blueprint("main", __name__)

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


# -------------------------
# Util: crear contenido ICS
# -------------------------
def build_ics(appt: Appointment) -> str:
    """Genera un .ics básico para añadir la cita al calendario."""
    try:
        if appt.datum and appt.tijd:
            dt = datetime.strptime(f"{appt.datum} {appt.tijd}", "%Y-%m-%d %H:%M")
        else:
            dt = datetime.utcnow()
    except Exception:
        dt = datetime.utcnow()

    uid = f"{uuid.uuid4()}@medicalsupporte.com"
    dtstamp = datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")
    dtlocal = dt.strftime("%Y%m%dT%H%M%S")

    summary = "Afspraak - MedicalSupporte"
    description = (
        f"Naam: {appt.klantnaam or appt.name or ''}\\n"
        f"E-mail: {appt.email or ''}\\n"
        f"Opmerkingen: {(appt.opmerkingen or appt.message or '').replace(chr(10), ' ')}"
    )
    location = "MedicalSupporte"

    ics = f"""BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//MedicalSupporte//NL
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:{uid}
DTSTAMP:{dtstamp}
DTSTART;TZID=Europe/Amsterdam:{dtlocal}
SUMMARY:{summary}
DESCRIPTION:{description}
LOCATION:{location}
END:VEVENT
END:VCALENDAR
"""
    return ics


# -------------------------
# HOME
# -------------------------
@main.route("/")
def home():
    return render_template("home.html")


# -------------------------
# LOGIN / LOGOUT
# -------------------------
@main.route("/login", methods=["GET", "POST"])
@limiter.limit("8 per minute")
def login():
    if request.method == "POST":
        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")

        # Validaciones rápidas
        if not email or not password or len(email) > 150 or len(password) > 200:
            flash("Ongeldige gegevens.", "danger")
            current_app.logger.warning(f"LOGIN invalid fields user={email} ip={request.remote_addr}")
            return redirect(url_for("main.login"))

        user = User.query.filter(func.lower(User.email) == email).first()
        if user and user.check_password(password):
            login_user(user)
            flash("Inloggen succesvol.", "success")
            current_app.logger.info(f"LOGIN ok user={email}")
            return redirect(url_for("main.dashboard"))

        flash("Ongeldige inloggegevens.", "danger")
        current_app.logger.warning(f"LOGIN fail user={email} ip={request.remote_addr}")

    return render_template("login.html")


@main.route("/logout")
@login_required
def logout():
    logout_user()
    flash("Succesvol uitgelogd.", "success")
    return redirect(url_for("main.home"))


# -------------------------
# DASHBOARD (resumen)
# -------------------------
@main.route("/dashboard")
@login_required
def dashboard():
    appointments_count = db.session.query(func.count(Appointment.id)).scalar() or 0
    chatbot_responses = 0  # placeholder
    emails_sent = db.session.query(func.count(EmailLog.id)).scalar() if EmailLog else 0

    return render_template(
        "dashboard.html",
        user=current_user,
        appointments_today=appointments_count,
        chatbot_responses=chatbot_responses,
        emails_sent=emails_sent or 0,
    )


# -------------------------
# AFSPRAKEN (Citas) con validación UX
# -------------------------
@main.route("/afspraken", methods=["GET", "POST"])
@login_required
@limiter.limit("6 per minute")
def afspraken():
    if request.method == "POST":
        naam = (request.form.get("naam") or "").strip()
        email = (request.form.get("email") or "").strip()
        datum = (request.form.get("datum") or "").strip()
        tijd = (request.form.get("tijd") or "").strip()
        opmerkingen = (request.form.get("opmerkingen") or "").strip()

        errors = {}
        if not naam:
            errors["naam"] = "Naam is verplicht."
        elif len(naam) > 120:
            errors["naam"] = "Naam is te lang (max. 120)."

        if not email:
            errors["email"] = "E-mailadres is verplicht."
        elif len(email) > 120 or not EMAIL_RE.match(email):
            errors["email"] = "Voer een geldig e-mailadres in."

        if not datum:
            errors["datum"] = "Datum is verplicht."
        if not tijd:
            errors["tijd"] = "Tijd is verplicht."

        if opmerkingen and len(opmerkingen) > 2000:
            errors["opmerkingen"] = "Opmerkingen zijn te lang (max. 2000)."

        if errors:
            flash("Controleer de invoervelden alstublieft.", "warning")
            formdata = type("F", (), dict(naam=naam, email=email, datum=datum, tijd=tijd, opmerkingen=opmerkingen))
            return render_template("afspraken.html", errors=errors, formdata=formdata), 400

        appt = Appointment(
            klantnaam=naam, email=email, datum=datum, tijd=tijd, opmerkingen=opmerkingen
        )
        db.session.add(appt)
        db.session.commit()
        current_app.logger.info(f"APPT created id={appt.id} naam={naam} datum={datum} tijd={tijd}")

        base_url = os.getenv("BASE_URL", "")
        try:
            bevestiging_url = (base_url.rstrip("/") if base_url else "") + url_for("main.afspraak_bevestiging", appointment_id=appt.id)
        except Exception:
            bevestiging_url = None

        ics_data = build_ics(appt)

        mail_ok = (
            current_app.config.get("MAIL_SERVER")
            and current_app.config.get("MAIL_USERNAME")
            and current_app.config.get("MAIL_PASSWORD")
        )
        if mail_ok:
            try:
                # Paciente
                msg_p = Message(
                    subject="Bevestiging afspraak - MedicalSupporte",
                    recipients=[email],
                )
                msg_p.body = (
                    f"Beste {naam},\n\n"
                    f"Uw afspraak is bevestigd.\n"
                    f"Datum: {datum}\nTijd: {tijd}\n\n"
                    f"Opmerkingen: {opmerkingen or '—'}\n\n"
                    "Met vriendelijke groet,\nMedicalSupporte"
                )
                msg_p.html = render_template(
                    "emails/email_patient.html",
                    naam=naam, datum=datum, tijd=tijd,
                    opmerkingen=opmerkingen, bevestiging_url=bevestiging_url
                )
                msg_p.attach("afspraak.ics", "text/calendar", ics_data)

                # Clínica
                clinic_to = current_app.config.get("MAIL_DEFAULT_SENDER", "info@medicalsupporte.com")
                msg_c = Message(
                    subject=f"Nieuwe afspraak van {naam}",
                    recipients=[clinic_to],
                )
                msg_c.body = (
                    f"Nieuwe afspraak:\n"
                    f"Naam: {naam}\nEmail: {email}\n"
                    f"Datum: {datum}\nTijd: {tijd}\n"
                    f"Opmerkingen: {opmerkingen or '—'}\n"
                )
                msg_c.html = render_template(
                    "emails/email_clinic.html",
                    naam=naam, email=email, datum=datum, tijd=tijd,
                    opmerkingen=opmerkingen, bevestiging_url=bevestiging_url
                )
                msg_c.attach("afspraak.ics", "text/calendar", ics_data)

                mail.send(msg_p)
                mail.send(msg_c)

                db.session.add(EmailLog(to=email, subject=msg_p.subject, body_preview=msg_p.body[:300]))
                db.session.add(EmailLog(to=clinic_to, subject=msg_c.subject, body_preview=msg_c.body[:300]))
                db.session.commit()
            except Exception:
                db.session.rollback()
                current_app.logger.exception(f"MAIL error for appt_id={appt.id}")
                flash("Afspraak opgeslagen, maar e-mail kon niet worden verzonden.", "warning")
        else:
            flash("Afspraak opgeslagen. E-mail verzenden is nog niet geconfigureerd.", "info")

        return redirect(url_for("main.afspraak_bevestiging", appointment_id=appt.id))

    return render_template("afspraken.html", errors=None, formdata=None)


@main.route("/afspraak/bevestiging/<int:appointment_id>")
@login_required
def afspraak_bevestiging(appointment_id: int):
    appt = Appointment.query.get_or_404(appointment_id)
    return render_template("afspraak_bevestiging.html", appt=appt)


@main.route("/afspraak/<int:appointment_id>/ics")
@login_required
def afspraak_ics(appointment_id: int):
    appt = Appointment.query.get_or_404(appointment_id)
    ics = build_ics(appt)
    return Response(
        ics,
        mimetype="text/calendar",
        headers={"Content-Disposition": f'attachment; filename="afspraak-{appointment_id}.ics"'}
    )


# -------------------------
# DASHBOARD: listado de citas + export CSV
# -------------------------
@main.route("/dashboard/afspraken")
@login_required
def dashboard_afspraken():
    afspraken = Appointment.query.order_by(Appointment.id.desc()).all()
    return render_template("dashboard_afspraken.html", afspraken=afspraken)


@main.route("/dashboard/afspraken/export")
@login_required
def export_afspraken_csv():
    afspraken = Appointment.query.order_by(Appointment.id.desc()).all()
    si = io.StringIO()
    cw = csv.writer(si)
    cw.writerow(["id", "klantnaam", "email", "datum", "tijd", "opmerkingen", "name", "phone", "message"])
    for a in afspraken:
        cw.writerow([
            a.id,
            getattr(a, "klantnaam", None),
            getattr(a, "email", None),
            getattr(a, "datum", None),
            getattr(a, "tijd", None),
            (getattr(a, "opmerkingen", None) or "").replace("\n", " ").strip() if getattr(a, "opmerkingen", None) else "",
            getattr(a, "name", None),
            getattr(a, "phone", None),
            (getattr(a, "message", None) or "").replace("\n", " ").strip() if getattr(a, "message", None) else "",
        ])
    output = make_response(si.getvalue())
    output.headers["Content-Disposition"] = "attachment; filename=afspraken.csv"
    output.headers["Content-type"] = "text/csv; charset=utf-8"
    return output


# -------------------------
# PANEL (placeholder)
# -------------------------
@main.route("/panel", methods=["GET", "POST"])
@login_required
def panel():
    responses = []
    flash("Chatbot beheer is in ontwikkeling.", "info")
    return render_template("panel.html", responses=responses)


# -------------------------
# E-MAILS (histórico)
# -------------------------
@main.route("/emails")
@login_required
def emails():
    logs = EmailLog.query.order_by(EmailLog.sent_at.desc()).all()
    return render_template("emails.html", emails=logs)
