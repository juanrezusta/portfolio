import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Certifications.module.css'

const certs = [
  {
    titulo: 'Python',
    plataforma: 'Coderhouse',
    fecha: 'Junio 2022',
    horas: '52hs · 13 semanas',
    badge: null,
  },
  {
    titulo: 'Python Programming',
    plataforma: 'EducaciónIT',
    fecha: 'Febrero 2023',
    horas: '18hs',
    badge: null,
  },
  {
    titulo: 'JavaScript Flex',
    plataforma: 'Coderhouse',
    fecha: 'Junio 2024',
    horas: '20hs · 10 semanas',
    badge: 'TOP 10',
  },
]

export default function Certifications() {
  const ref = useScrollReveal()

  return (
    <section className={styles.section} id="certificaciones">
      <div className={`reveal ${styles.inner}`} ref={ref}>
        <p className={styles.label}>Formación certificada</p>
        <h2 className={styles.title}>Certificaciones</h2>
        <div className={styles.list}>
          {certs.map(c => (
            <div key={c.titulo + c.plataforma} className={styles.item}>
              <div className={styles.itemLeft}>
                <span className={styles.icono}>📄</span>
                <div>
                  <div className={styles.certTitulo}>
                    {c.titulo}
                    {c.badge && <span className={styles.top10}>{c.badge}</span>}
                  </div>
                  <div className={styles.plataforma}>{c.plataforma}</div>
                </div>
              </div>
              <div className={styles.itemRight}>
                <div className={styles.fecha}>{c.fecha}</div>
                <div className={styles.horas}>{c.horas}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
