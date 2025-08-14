from app import create_app, db
from app.models import User

app = create_app()
with app.app_context():
    if not User.query.filter_by(email="demo@medicalsupporte.nl").first():
        u = User(email="demo@medicalsupporte.nl")
        u.set_password("welkom123")
        db.session.add(u)
        db.session.commit()
        print("✅ Demo user: demo@medicalsupporte.nl / welkom123")
    else:
        print("ℹ️ El usuario demo ya existe.")
