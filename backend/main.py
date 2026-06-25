from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import projects, contact

app = FastAPI(title="Portfolio API - Juan Rezusta")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(projects.router, prefix="/api")
app.include_router(contact.router, prefix="/api")

@app.get("/")
def root():
    return {"mensaje": "Portfolio API funcionando"}
