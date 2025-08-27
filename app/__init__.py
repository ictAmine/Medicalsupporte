from __future__ import annotations

import os
import logging
from logging.handlers import RotatingFileHandler
from dotenv import load_dotenv
from flask import Flask, request, g, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_mail import Mail
from flask_wtf import CSRFProtect
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_talisman import Talisman

from config import Config

db = SQLAlchemy()
login_manager = LoginManager()
migrate = Migrate()
mail = Mail()
csrf = CSRFProtect()
limiter = Limiter(key_func=get_remote_address, storage_uri="memory://")
talisman = Talisman()

def _setup_logging(app: Flask) -> None:
    os.makedirs("logs", exist_ok=True)
    log_path = os.path.join("logs", "app.log")
    handler = RotatingFileHandler(log_path, maxBytes=5_000_000, backupCount=5)
    handler.setFormatter(logging.Formatter("[%(asctime)s] %(levelname)s in %(module)s: %(message)s"))
    handler.setLevel(logging.INFO)
    app.logger.setLevel(logging.INFO)
    if not any(isinstance(h, RotatingFileHandler) for h in app.logger.handlers):
        app.logger.addHandler(handler)

def _setup_security(app: Flask) -> None:
    csp = {
        "default-src": ["'self'"],
        "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
        "font-src": ["'self'", "https://fonts.gstatic.com", "data:"],
        "script-src": ["'self'", "'unsafe-inline'"],
        "img-src": ["'self'", "data:"],
        "connect-src": ["'self'"],
        "frame-ancestors": ["'self'"],
        "base-uri": ["'self'"],
        "form-action": ["'self'"],
    }
    force_https = os.environ.get("FLASK_ENV", "").lower() == "production"
    talisman.init_app(
        app,
        content_security_policy=csp,
        force_https=force_https,
        session_cookie_secure=force_https,
        strict_transport_security=force_https,
        frame_options="SAMEORIGIN",
        referrer_policy="no-referrer",
    )
    app.config.update(
        SESSION_COOKIE_HTTPONLY=True,
        REMEMBER_COOKIE_HTTPONLY=True,
        SESSION_COOKIE_SAMESITE="Lax",
    )

def create_app() -> Flask:
    load_dotenv()
    app = Flask(__name__, static_folder="static", template_folder="templates")
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    mail.init_app(app)
    csrf.init_app(app)
    limiter.init_app(app)

    login_manager.init_app(app)
    login_manager.login_view = "main.login"
    login_manager.login_message = "Log eerst in om door te gaan."
    login_manager.login_message_category = "warning"

    _setup_logging(app)
    _setup_security(app)

    from app import models  # noqa: F401
    from app.routes import main
    app.register_blueprint(main)

    @app.before_request
    def attach_user():
        from flask_login import current_user
        g.user = current_user if current_user.is_authenticated else None

    @app.after_request
    def add_cache_headers(resp):
        if request.path.startswith("/static/"):
            resp.headers.setdefault("Cache-Control", "public, max-age=604800, immutable")
        return resp

    @app.errorhandler(404)
    def not_found(e):
        try:
            return render_template("errors/404.html"), 404
        except Exception:
            return "404 Niet gevonden", 404

    @app.errorhandler(429)
    def too_many(e):
        try:
            return render_template("errors/429.html"), 429
        except Exception:
            return "429 Te veel verzoeken", 429

    @app.errorhandler(500)
    def server_err(e):
        app.logger.exception("Internal server error: %s", e)
        try:
            return render_template("errors/500.html"), 500
        except Exception:
            return "500 Interne fout", 500

    return app
