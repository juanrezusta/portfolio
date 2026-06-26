import { useTyping } from '../hooks/useTyping'
import styles from './Hero.module.css'

const frases = [
  'Backend Developer · Python',
  'FastAPI · Django · PostgreSQL',
  'Automatización de procesos',
  'Dev con raíces en logística',
]

export default function Hero({ info }) {
  const texto = useTyping(frases, 75, 2200)

  return (
    <section className={styles.hero} id="sobre-mi">
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Disponible para trabajar
        </div>

        <div className={styles.top}>
          <div className={styles.text}>
            <h1 className={styles.nombre}>
              Juan<br />
              <span className={styles.apellido}>Rezusta</span>
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
            <div className={styles.ctas}>
              <a href="#proyectos" className={styles.btnPrimary}>
                Ver proyectos
              </a>
              <a href="/assets/cv.pdf" download className={styles.btnGhost}>
                Descargar CV
              </a>
            </div>
          </div>

          <div className={styles.fotoWrap}>
            <img
              src="/assets/foto.jpeg"
              alt="Juan Rezusta"
              className={styles.foto}
            />
            <div className={styles.fotoGlow} />
          </div>
        </div>
      </div>
    </section>
  )
}
