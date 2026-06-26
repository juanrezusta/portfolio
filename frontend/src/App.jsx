import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import SoftSkills from './components/SoftSkills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import ParticlesBg from './components/ParticlesBg'

const fallback = {
  info: {
    nombre: 'Juan Rezusta',
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
    { categoria: 'Backend', icono: 'server', tags: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'SQLite', 'SQLAlchemy'] },
    { categoria: 'Frontend', icono: 'layout', tags: ['React', 'Vite', 'JavaScript', 'Tkinter', 'HTML/CSS'] },
    { categoria: 'Herramientas', icono: 'tool', tags: ['Git', 'GitHub', 'Linux', 'Telegram API', 'Mercado Pago'] },
    { categoria: 'Dominio', icono: 'truck', tags: ['Logística', 'Gestión operativa', 'Procesos', 'Automatización'] },
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
      const [info, proyectos, skills] = await Promise.all([
        fetchData('/api/info'),
        fetchData('/api/proyectos'),
        fetchData('/api/skills'),
      ])
      setData({
        info: info ?? fallback.info,
        proyectos: proyectos ?? fallback.proyectos,
        skills: skills ?? fallback.skills,
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
        <Education />
        <Projects proyectos={data.proyectos} />
        <Timeline />
        <SoftSkills />
        <Certifications />
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
        © 2026 Juan Rezusta · rezustack.com
      </footer>
    </>
  )
}
