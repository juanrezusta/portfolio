import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Timeline.module.css'

export default function Timeline({ experiencia }) {
  const ref = useScrollReveal()

  return (
    <section className={styles.section} id="experiencia">
      <div className={`reveal ${styles.inner}`} ref={ref}>
        <p className={styles.label}>Trayectoria</p>
        <h2 className={styles.title}>Experiencia</h2>

        <div className={styles.timeline}>
          {experiencia.map((item, idx) => (
            <div key={item.id}>
              {idx === 1 && (
                <div className={styles.pivotRow}>
                  <span className={styles.pivotLine} />
                  <span className={styles.pivotText}>Pivot hacia tecnología</span>
                  <span className={styles.pivotLine} />
                </div>
              )}
              <div className={styles.item}>
                <div className={`${styles.dot} ${item.actual ? styles.dotCurrent : ''}`} />
                <div className={styles.itemContent}>
                  <span className={styles.periodo}>{item.periodo}</span>
                  <h3 className={styles.rol}>{item.rol}</h3>
                  <p className={styles.empresa}>{item.empresa}</p>
                  <p className={styles.desc}>{item.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
