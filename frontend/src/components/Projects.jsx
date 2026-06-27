import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Projects.module.css'

export default function Projects({ proyectos }) {
  const ref = useScrollReveal()

  return (
    <section className={styles.section} id="proyectos">
      <div className={`reveal ${styles.inner}`} ref={ref}>
        <p className={styles.label}>Lo que construí</p>
        <MatrixTitle text="Proyectos" className={styles.title} />
        <div className={styles.grid}>
          {proyectos.map(p => (
            <div
              key={p.id}
              className={`${styles.card} ${p.destacado ? styles.featured : ''}`}
            >
              <div className={styles.cardTop}>
                <span className={`${styles.badge} ${p.destacado ? styles.badgeGreen : ''}`}>
                  {p.estado}
                </span>
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" className={styles.repoLink}>
                    GitHub →
                  </a>
                )}
              </div>
              <h3 className={styles.cardTitle}>{p.titulo}</h3>
              <p className={styles.cardDesc}>{p.descripcion}</p>
              <div className={styles.stack}>
                {p.stack.map(t => (
                  <span key={t} className={styles.stackTag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
