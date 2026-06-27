import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Timeline.module.css'

const experiencia = [
  {
    id: 1,
    periodo: 'Más de 10 años',
    rol: 'Gestión de operaciones logísticas',
    empresa: 'Alejandro Negro S.R.L.',
    descripcion: 'Administración integral de operaciones logísticas y de distribución. Gestión de procesos administrativos, coordinación de cobros y seguimiento de pagos — experiencia que hoy aplico directamente en los sistemas que desarrollo.',
    actual: false,
  },
]

export default function Timeline() {
  const ref = useScrollReveal()

  return (
    <section className={styles.section} id="experiencia">
      <div className={`reveal ${styles.inner}`} ref={ref}>
        <p className={styles.label}>Trayectoria</p>
        <MatrixTitle text="Experiencia" className={styles.title} />
        <div className={styles.timeline}>
          {experiencia.map(item => (
            <div key={item.id} className={styles.item}>
              <div className={`${styles.dot} ${item.actual ? styles.dotCurrent : ''}`} />
              <div className={styles.itemContent}>
                <span className={styles.periodo}>{item.periodo}</span>
                <h3 className={styles.rol}>{item.rol}</h3>
                <p className={styles.empresa}>{item.empresa}</p>
                <p className={styles.desc}>{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
