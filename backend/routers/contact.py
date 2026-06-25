from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class MensajeContacto(BaseModel):
    nombre: str
    email: str
    mensaje: str

@router.post("/contacto")
def enviar_contacto(datos: MensajeContacto):
    # Acá podés conectar un envío de email o Telegram
    print(f"Mensaje de {datos.nombre} ({datos.email}): {datos.mensaje}")
    return {"ok": True, "mensaje": "Mensaje recibido. Juan te va a responder pronto."}
