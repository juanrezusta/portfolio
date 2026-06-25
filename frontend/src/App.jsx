import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import ParticlesBg from './components/ParticlesBg'

// Datos de fallback (se usan si el backend no está corriendo)
const fallback = {
  info: {
    nombre: 'Juan Rezusta',
    rol: 'Backend Python · FastAPI · Automatización de procesos',
    disponible: true,
    ubicacion: 'Buenos Aires, AR',
    github: 'https://github.com/juanrezusta',
    linkedin: '',
    email: '',
  },
  proyectos: [
    {
      id: 1,
      titulo: 'Sistema de conciliación de cobros',
      descripcion: 'Herramienta real construida para Alejandro Negro S.R.L. que unifica pagos de Mercado Pago y transferencias bancarias con reportes automáticos vía Telegram. En evolución hacia un SaaS para logística.',
      stack: ['FastAPI', 'PostgreSQL', 'React', 'Vite', 'JWT', 'Telegram Bot', 'Mercado Pago API'],
      destacado: true,
      estado: 'MVP · En desarrollo',
      repo: null,
    },
    {
      id: 2,
      titulo: 'Gestor de países',
      descripcion: 'App de consola Python para gestionar un dataset de países con CRUD completo. Desarrollada con Tomas Rebottaro para UTN.',
      stack: ['Python', 'Consola', 'CSV'],
      destacado: false,
      estado: 'TUP · Programación 1',
      repo: 'https://github.com/juanrezusta/TPI_programacion1',
    },
    {
      id: 3,
      titulo: 'Documentación BPMN + app',
      descripcion: 'Paquete integrador completo: diagrama BPMN, README técnico, código comentado y documentación para el proceso de conciliación de pagos.',
      stack: ['Python', 'Tkinter', 'BPMN', 'Telegram Bot'],
      destacado: false,
      estado: 'TUP · Org. Empresarial',
      repo: null,
    },
  ],
  skills: [
    { categoria: 'Backend', icono: 'server', tags: ['Python', 'FastAPI', 'PostgreSQL', 'JWT Auth', 'SQLAlchemy'] },
    { categoria: 'Frontend', icono: 'layout', tags: ['React', 'Vite', 'JavaScript', 'Tkinter', 'HTML/CSS'] },
    { categoria: 'Herramientas', icono: 'tool', tags: ['Git', 'GitHub', 'Telegram API', 'Mercado Pago', 'BPMN'] },
    { categoria: 'Dominio', icono: 'truck', tags: ['Logística', 'Gestión operativa', 'Procesos', 'Automatización'] },
  ],
  experiencia: [
    {
      id: 1,
      periodo: '2026 — Presente',
      rol: 'Estudiante · Desarrollador en formación',
      empresa: 'UTN · Tecnicatura Universitaria en Programación',
      descripcion: 'Cursando la carrera mientras construyo proyectos reales. Combino formación académica con desarrollo de un MVP de SaaS propio.',
      actual: true,
    },
    {
      id: 2,
      periodo: 'Más de 10 años',
      rol: 'Gestión de operaciones logísticas',
      empresa: 'Alejandro Negro S.R.L.',
      descripcion: 'Administración integral de operaciones logísticas y de distribución. Gestión de procesos administrativos, coordinación de cobros y seguimiento de pagos.',
      actual: false,
    },
  ],
}

async function fetchData(endpoint) {
  try {
    const res = await fetch(endpoint)
    if (!res.ok) throw new Error()
    return await res.json()
  } catch {
    return null
  }
}

export default function App() {
  const [data, setData] = useState(fallback)

  useEffect(() => {
    async function loadAll() {
      const [info, proyectos, skills, experiencia] = await Promise.all([
        fetchData('/api/info'),
        fetchData('/api/proyectos'),
        fetchData('/api/skills'),
        fetchData('/api/experiencia'),
      ])
      setData({
        info: info ?? fallback.info,
        proyectos: proyectos ?? fallback.proyectos,
        skills: skills ?? fallback.skills,
        experiencia: experiencia ?? fallback.experiencia,
      })
    }
    loadAll()
  }, [])

  return (
    <>
      <ParticlesBg />
      <Navbar />
      <main>
        <Hero info={data.info} />
        <Skills skills={data.skills} />
        <Projects proyectos={data.proyectos} />
        <Timeline experiencia={data.experiencia} />
        <Contact info={data.info} />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '1.5rem',
        fontSize: '12px',
        color: '#1E3A5F',
        borderTop: '0.5px solid rgba(30,58,95,0.4)',
        position: 'relative',
        zIndex: 1,
      }}>
        © 2026 Juan Rezusta · Construido con FastAPI + React
      </footer>
    </>
  )
}
