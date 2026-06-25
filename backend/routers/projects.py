from fastapi import APIRouter
from data import proyectos, experiencia, skills, info

router = APIRouter()

@router.get("/proyectos")
def get_proyectos():
    return proyectos

@router.get("/experiencia")
def get_experiencia():
    return experiencia

@router.get("/skills")
def get_skills():
    return skills

@router.get("/info")
def get_info():
    return info
