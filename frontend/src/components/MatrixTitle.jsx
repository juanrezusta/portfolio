import { useRef, useState, useEffect } from 'react'
import { useMatrixText } from '../hooks/useMatrixText'
import styles from './MatrixTitle.module.css'

export default function MatrixTitle({ text, tag = 'h2', className = '', delay = 0, duration = 600 }) {
  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const displayed = useMatrixText(triggered ? text : '', duration, delay)
  const Tag = tag

  return (
    <Tag ref={ref} className={`${styles.matrixTitle} ${className}`}>
      {triggered ? displayed : text}
    </Tag>
  )
}
