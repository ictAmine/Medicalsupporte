from app import create_app

app = create_app()

# Opcional: healthcheck
@app.get("/health")
def health():
    return {"status": "ok"}, 200
