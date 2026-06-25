# Portfolio — Juan Rezusta

Portfolio personal con backend FastAPI y frontend React + Vite.

## Estructura

```
portfolio/
├── backend/          # FastAPI API
└── frontend/         # React + Vite
```

---

## Correr el backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

La API queda en: http://localhost:8000  
Docs automáticas: http://localhost:8000/docs

---

## Correr el frontend

```bash
cd frontend
npm install
npm run dev
```

El portfolio queda en: http://localhost:5173

> El frontend hace proxy de `/api` al backend automáticamente (vite.config.js).
> Si el backend no está corriendo, el frontend igual funciona con datos de fallback.

---

## Personalizar

### Agregar LinkedIn / email
Editar `backend/data.py`:
```python
info = {
    ...
    "linkedin": "https://linkedin.com/in/tu-usuario",
    "email": "tu@email.com",
}
```

### Agregar foto de CV descargable
Colocar el archivo en `frontend/public/assets/cv.pdf`

### Agregar proyectos
Editar la lista `proyectos` en `backend/data.py`

---

## Stack

- **Backend:** Python 3.11+, FastAPI, Uvicorn
- **Frontend:** React 18, Vite, CSS Modules
- **Efectos:** tsParticles (partículas), custom hooks (typing + scroll reveal)
