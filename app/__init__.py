from flask import Flask, request, render_template, g
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_mail import Mail
from flask_wtf import CSRFProtect
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_talisman import Talisman
from dotenv import load_dotenv
import os
import logging
from logging.handlers import RotatingFileHandler
from config import Config

db = SQLAlchemy()
login_manager = LoginManager()
migrate = Migrate()
mail = Mail()
csrf = CSRFProtect()
limiter = Limiter(key_func=get_remote_address, storage_uri="memory://")
talisman = Talisman()


def _setup_logging(app: Flask):
    os.makedirs("logs", exist_ok=True)
    log_path = os.path.join("logs", "app.log")
    handler = RotatingFileHandler(log_path, maxBytes=5_000_000, backupCount=5)
    fmt = "[%(asctime)s] %(levelname)s in %(module)s: %(message)s"
    handler.setFormatter(logging.Formatter(fmt))
    handler.setLevel(logging.INFO)
    app.logger.setLevel(logging.INFO)
    if not any(isinstance(h, RotatingFileHandler) for h in app.logger.handlers):
        app.logger.addHandler(handler)


def _setup_security(app: Flask):
    # CSP compatible con la UI actual
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

    # HSTS sólo en producción
    force_https = os.getenv("FLASK_ENV", "development") == "production"
    talisman.init_app(
        app,
        content_security_policy=csp,
        force_https=force_https,
        strict_transport_security=force_https,
        session_cookie_secure=force_https,
        frame_options="SAMEORIGIN",
        referrer_policy="strict-origin-when-cross-origin",
    )


def create_app():
    load_dotenv()
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    login_manager.init_app(app)
    migrate.init_app(app, db)
    mail.init_app(app)
    csrf.init_app(app)
    limiter.init_app(app)

    login_manager.login_view = "main.login"

    _setup_security(app)
    _setup_logging(app)

    @app.before_request
    def _before():
        g._client_ip = request.headers.get("X-Forwarded-For", request.remote_addr)
        app.logger.info(f"REQ {request.method} {request.path} ip={g._client_ip}")

    @app.after_request
    def _after(resp):
        app.logger.info(f"RES {request.method} {request.path} status={resp.status_code}")
        return resp

    # Blueprints
    from app.routes import main
    app.register_blueprint(main)

    from app import models  # noqa

    @login_manager.user_loader
    def load_user(user_id: str):
        from app.models import User
        try:
            return User.query.get(int(user_id))
        except Exception:
            return None

    # Páginas de error
    @app.errorhandler(404)
    def not_found(e):
        return render_template("errors/404.html"), 404

    @app.errorhandler(500)
    def server_error(e):
        app.logger.exception("Server error")
        return render_template("errors/500.html"), 500

    @app.errorhandler(429)
    def ratelimit_handler(e):
        return render_template("errors/429.html"), 429

    return app
