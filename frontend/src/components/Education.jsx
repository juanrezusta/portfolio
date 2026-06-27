import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Timeline.module.css'

const educacion = [
  {
    id: 1,
    periodo: '2026 — Presente',
    rol: 'Tecnicatura Universitaria en Programación',
    empresa: 'UTN — Universidad Tecnológica Nacional',
    descripcion: 'Cursando la carrera en la Comisión 22, Cohorte Marzo 2026. Formación formal en programación complementando el aprendizaje autodidacta previo.',
    actual: true,
  },
  {
    id: 2,
    periodo: 'Junio 2024',
    rol: 'JavaScript Flex · TOP 10',
    empresa: 'Coderhouse — Certificado por PedidosYa',
    descripcion: '20hs dictadas a lo largo de 10 semanas. Finalizado entre el top 10 del curso.',
    actual: false,
  },
  {
    id: 3,
    periodo: 'Febrero 2023',
    rol: 'Python Programming',
    empresa: 'EducaciónIT',
    descripcion: '18hs cronológicas. Aprobó todos los requisitos para la certificación.',
    actual: false,
  },
  {
    id: 4,
    periodo: 'Junio 2022',
    rol: 'Python',
    empresa: 'Coderhouse',
    descripcion: '52hs dictadas a lo largo de 13 semanas. Primer certificado formal en programación.',
    actual: false,
  },
]

export default function Education() {
  const ref = useScrollReveal()

  return (
    <section className={styles.section} id="educacion">
      <div className={`reveal ${styles.inner}`} ref={ref}>
        <p className={styles.label}>Formación</p>
        <MatrixTitle text="Educación" className={styles.title} />
        <div className={styles.timeline}>
          {educacion.map(item => (
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
