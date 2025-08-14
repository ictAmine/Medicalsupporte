from app import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.sql import func


# ----------------------------
# Usuario (para login)
# ----------------------------
class User(UserMixin, db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(300), nullable=False)

    chatbot_responses = db.relationship("ChatbotResponse", backref="owner", lazy=True)

    def set_password(self, raw_password: str):
        self.password_hash = generate_password_hash(raw_password)

    def check_password(self, raw_password: str) -> bool:
        return check_password_hash(self.password_hash, raw_password)


# ----------------------------
# Citas (campos flexibles NL + legacy)
# ----------------------------
class Appointment(db.Model):
    __tablename__ = "appointment"

    id = db.Column(db.Integer, primary_key=True)

    # Esquema "nuevo" (NL)
    klantnaam = db.Column(db.String(120), nullable=True)
    datum = db.Column(db.String(50), nullable=True)   # YYYY-MM-DD
    tijd = db.Column(db.String(50), nullable=True)    # HH:MM
    opmerkingen = db.Column(db.Text, nullable=True)

    # Esquema "antiguo" (compatibilidad)
    name = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), nullable=True)
    phone = db.Column(db.String(50), nullable=True)
    message = db.Column(db.Text, nullable=True)


# ----------------------------
# Respuestas del chatbot
# ----------------------------
class ChatbotResponse(db.Model):
    __tablename__ = "chatbot_response"

    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.Text, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=True)


# ----------------------------
# Log de e-mails enviados
# ----------------------------
class EmailLog(db.Model):
    __tablename__ = "email_log"

    id = db.Column(db.Integer, primary_key=True)
    to = db.Column(db.String(255), nullable=False)
    subject = db.Column(db.String(255), nullable=False)
    body_preview = db.Column(db.String(300), nullable=True)
    sent_at = db.Column(db.DateTime(timezone=True), server_default=func.now(), nullable=False)
