import { useEffect, useRef, useState } from 'react'
import { useTyping } from '../hooks/useTyping'
import { useMatrixText } from '../hooks/useMatrixText'
import styles from './Hero.module.css'

const frases = [
  'Backend Developer · Python',
  'FastAPI · Django · PostgreSQL',
  'Automatización de procesos',
  'Dev con raíces en logística',
]

function useCounter(target, duration = 1200, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

export default function Hero({ info }) {
  const texto = useTyping(frases, 75, 2200)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); observer.disconnect() }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const años = useCounter(10, 1000, started)
  const certs = useCounter(3, 800, started)
  const desde = useCounter(2022, 1100, started)

  const badgeText = useMatrixText('Disponible para trabajar', 500, 300)
  const nombre1 = useMatrixText('Juan', 600, 100)
  const nombre2 = useMatrixText('Rezusta', 700, 300)

  return (
    <section className={styles.hero} id="sobre-mi" ref={ref}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          {badgeText}
        </div>

        <div className={styles.top}>
          <div className={styles.text}>
            <h1 className={styles.nombre}>
              {nombre1}<br />
              <span className={styles.apellido}>{nombre2}</span>
            </h1>
            <p className={styles.typing}>
              {texto}
              <span className={styles.cursor}>|</span>
            </p>
            <p className={styles.desc}>
              Backend Developer con más de una década en gestión operativa y logística.
              Desde 2022 estudiando tecnologías de forma sostenida para dar un vuelco
              deliberado hacia la industria del software.
            </p>

            <div className={styles.counters}>
              <div className={styles.counter}>
                <span className={styles.counterNum}>{started ? `${años}+` : '0+'}</span>
                <span className={styles.counterLabel}>años en operaciones</span>
              </div>
              <div className={styles.counterDivider} />
              <div className={styles.counter}>
                <span className={styles.counterNum}>{started ? certs : '0'}</span>
                <span className={styles.counterLabel}>certificados</span>
              </div>
              <div className={styles.counterDivider} />
              <div className={styles.counter}>
                <span className={styles.counterNum}>{started ? desde : '0'}</span>
                <span className={styles.counterLabel}>aprendiendo código</span>
              </div>
            </div>

            <div className={styles.ctas}>
              <a href="#proyectos" className={styles.btnPrimary}>Ver proyectos</a>
              <a href="/assets/cv.pdf" download className={styles.btnGhost}>Descargar CV</a>
            </div>
          </div>

          <div className={styles.fotoWrap}>
            <img src="/assets/foto.jpeg" alt="Juan Rezusta" className={styles.foto} />
            <div className={styles.fotoGlow} />
          </div>
        </div>
      </div>
    </section>
  )
}
