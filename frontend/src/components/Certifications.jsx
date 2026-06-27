import MatrixTitle from './MatrixTitle'
import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Certifications.module.css'

const certs = [
  {
    titulo: 'JavaScript Flex',
    plataforma: 'Coderhouse',
    fecha: 'Junio 2024',
    horas: '20hs · 10 semanas',
    badge: 'TOP 10',
    img: '/assets/cert_js.jpg',
  },
  {
    titulo: 'Python Programming',
    plataforma: 'EducaciónIT',
    fecha: 'Febrero 2023',
    horas: '18hs',
    badge: null,
    img: '/assets/cert_python_eit.jpg',
  },
  {
    titulo: 'Python',
    plataforma: 'Coderhouse',
    fecha: 'Junio 2022',
    horas: '52hs · 13 semanas',
    badge: null,
    img: '/assets/cert_python_ch.jpg',
  },
]

export default function Certifications() {
  const ref = useScrollReveal()
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section className={styles.section} id="certificaciones">
      <div className={`reveal ${styles.inner}`} ref={ref}>
        <p className={styles.label}>Formación certificada</p>
        <MatrixTitle text="Certificaciones" className={styles.title} />
        <div className={styles.list}>
          {certs.map(c => (
            <div
              key={c.titulo + c.plataforma}
              className={styles.item}
              onClick={() => setSelected(c)}
            >
              <div className={styles.thumb}>
                <img src={c.img} alt={c.titulo} className={styles.thumbImg} />
              </div>
              <div className={styles.itemInfo}>
                <div className={styles.certTitulo}>
                  {c.titulo}
                  {c.badge && <span className={styles.top10}>{c.badge}</span>}
                </div>
                <div className={styles.plataforma}>{c.plataforma}</div>
              </div>
              <div className={styles.itemRight}>
                <div className={styles.fecha}>{c.fecha}</div>
                <div className={styles.horas}>{c.horas}</div>
              </div>
              <span className={styles.verBtn}>Ver →</span>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className={styles.overlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setSelected(null)}>✕</button>
            <img src={selected.img} alt={selected.titulo} className={styles.modalImg} />
            <div className={styles.modalInfo}>
              <span className={styles.modalTitulo}>{selected.titulo}</span>
              <span className={styles.modalPlat}>{selected.plataforma} · {selected.fecha}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
