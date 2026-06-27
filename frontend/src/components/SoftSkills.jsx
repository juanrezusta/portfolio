import MatrixTitle from './MatrixTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './SoftSkills.module.css'

const softskills = [
  {
    icono: '🎯',
    titulo: 'Criterio técnico-operativo',
    desc: 'Capacidad para evaluar soluciones desde el negocio, no solo desde el código. Formado en más de una década gestionando operaciones reales en logística y distribución.',
  },
  {
    icono: '📈',
    titulo: 'Trayectoria consistente',
    desc: 'Desde 2022 estudiando tecnologías de forma sostenida — Python, Django, FastAPI, SQL, JavaScript — combinando formación académica con cursos certificados y proyectos propios.',
  },
  {
    icono: '🔄',
    titulo: 'Adaptabilidad',
    desc: 'Transición deliberada desde la gestión operativa hacia el desarrollo de software, aplicando experiencia de negocio real al diseño de soluciones técnicas.',
  },
  {
    icono: '🤖',
    titulo: 'Integración criteriosa de IA',
    desc: 'Integración criteriosa de IA en el flujo de desarrollo, utilizándola como acelerador en áreas fuera de mi especialidad sin delegar la comprensión ni la toma de decisiones técnicas.',
  },
]

export default function SoftSkills() {
  const ref = useScrollReveal()

  return (
    <section className={styles.section} id="softskills">
      <div className={`reveal ${styles.inner}`} ref={ref}>
        <p className={styles.label}>Perfil profesional</p>
        <MatrixTitle text="Soft Skills" className={styles.title} />
        <div className={styles.grid}>
          {softskills.map(s => (
            <div key={s.titulo} className={styles.card}>
              <span className={styles.icono}>{s.icono}</span>
              <h3 className={styles.cardTitle}>{s.titulo}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
