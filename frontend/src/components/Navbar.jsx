import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#skills', label: 'Skills' },
  { href: '#educacion', label: 'Educación' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#softskills', label: 'Soft Skills' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleLink = () => setOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <span className={styles.logo}>JR</span>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Menú"
        >
          <span /><span /><span />
          <div className={styles.halo} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {links.map((l, i) => (
            <li
              key={l.href}
              className={styles.mobileLinkItem}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <a href={l.href} onClick={handleLink}>
                {l.label}
                <span className={styles.linkGlow} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)} />}
    </>
  )
}
