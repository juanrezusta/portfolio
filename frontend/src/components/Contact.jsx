import MatrixTitle from './MatrixTitle'
import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Contact.module.css'

export default function Contact({ info }) {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setEnviado(true)
    } catch {
      alert('Error al enviar. Intentá de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.section} id="contacto">
      <div className={`reveal ${styles.inner}`} ref={ref}>
        <p className={styles.label}>Hablemos</p>
        <MatrixTitle text="Contacto" className={styles.title} />

        <div className={styles.layout}>
          <div className={styles.links}>
            {info.github && (
              <a href={info.github} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                <span className={styles.linkIcon}>🐙</span>
                <div>
                  <div className={styles.linkLabel}>GitHub</div>
                  <div className={styles.linkValue}>juanrezusta</div>
                </div>
              </a>
            )}
            {info.linkedin && (
              <a href={info.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                <span className={styles.linkIcon}>💼</span>
                <div>
                  <div className={styles.linkLabel}>LinkedIn</div>
                  <div className={styles.linkValue}>Ver perfil</div>
                </div>
              </a>
            )}
            <div className={styles.linkItem}>
              <span className={styles.linkIcon}>📍</span>
              <div>
                <div className={styles.linkLabel}>Ubicación</div>
                <div className={styles.linkValue}>{info.ubicacion}</div>
              </div>
            </div>
          </div>

          {enviado ? (
            <div className={styles.success}>
              <p>✅ Mensaje enviado. Te respondo pronto.</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                className={styles.input}
                name="nombre"
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={handleChange}
                required
              />
              <input
                className={styles.input}
                name="email"
                type="email"
                placeholder="Tu email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                className={styles.textarea}
                name="mensaje"
                placeholder="Tu mensaje"
                rows={4}
                value={form.mensaje}
                onChange={handleChange}
                required
              />
              <button className={styles.btnSubmit} type="submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
