from datetime import datetime
from flask_login import UserMixin
from app import db, login_manager

# ---------- MODELOS ----------

class Clinic(db.Model, UserMixin):
    __tablename__ = "clinic"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(200), unique=True, nullable=False, index=True)
    password = db.Column(db.String(300), nullable=False)

    # relaciones
    chatbot_responses = db.relationship("ChatbotResponse", backref="clinic", lazy=True)
    emails = db.relationship("EmailLog", backref="clinic", lazy=True)

    def get_id(self):
        return str(self.id)


class ChatbotResponse(db.Model):
    __tablename__ = "chatbot_response"

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(300))
    answer = db.Column(db.String(1000))
    clinic_id = db.Column(db.Integer, db.ForeignKey("clinic.id"), nullable=False)


class Appointment(db.Model):
    __tablename__ = "appointment"

    id = db.Column(db.Integer, primary_key=True)
    klantnaam = db.Column(db.String(160))  # nombre del paciente
    email = db.Column(db.String(200))
    datum = db.Column(db.String(20))       # YYYY-MM-DD
    tijd = db.Column(db.String(10))        # HH:MM
    opmerkingen = db.Column(db.Text)       # mensaje / notas
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class EmailLog(db.Model):
    __tablename__ = "email_log"

    id = db.Column(db.Integer, primary_key=True)
    clinic_id = db.Column(db.Integer, db.ForeignKey("clinic.id"), nullable=True)
    to_email = db.Column(db.String(200))
    subject = db.Column(db.String(200))
    status = db.Column(db.String(50))  # sent/failed
    error = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


# ---------- Flask-Login ----------

@login_manager.user_loader
def load_user(user_id: str):
    return Clinic.query.get(int(user_id))
