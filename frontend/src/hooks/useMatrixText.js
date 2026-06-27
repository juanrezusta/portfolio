import { useState, useEffect } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&'

export function useMatrixText(text, duration = 700, delay = 0) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (!text) return
    let timeout
    timeout = setTimeout(() => {
      const steps = 12
      const stepTime = duration / steps
      let step = 0

      const interval = setInterval(() => {
        step++
        const progress = step / steps
        const resolvedChars = Math.floor(progress * text.length)

        const result = text.split('').map((char, i) => {
          if (char === ' ') return ' '
          if (i < resolvedChars) return char
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        }).join('')

        setDisplayed(result)

        if (step >= steps) {
          clearInterval(interval)
          setDisplayed(text)
        }
      }, stepTime)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, duration, delay])

  return displayed || text.replace(/[^ ]/g, CHARS[0])
}
