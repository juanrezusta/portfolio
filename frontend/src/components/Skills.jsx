import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Skills.module.css'

const iconos = {
  Backend: '⚙️',
  Frontend: '🖥️',
  Herramientas: '🛠️',
  Dominio: '🚛',
}

export default function Skills({ skills }) {
  const ref = useScrollReveal()

  return (
    <section className={styles.section} id="skills">
      <div className={`reveal ${styles.inner}`} ref={ref}>
        <p className={styles.label}>Stack técnico</p>
        <MatrixTitle text="Skills" className={styles.title} />
        <div className={styles.grid}>
          {skills.map(s => (
            <div key={s.categoria} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icono}>{iconos[s.categoria] || '📦'}</span>
                <span className={styles.cardTitle}>{s.categoria}</span>
              </div>
              <div className={styles.tags}>
                {s.tags.map(t => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
