import { useState, useEffect } from 'react'

export function useTyping(phrases, speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex(i => i + 1), speed)
      return () => clearTimeout(t)
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex(i => i - 1), speed / 2)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setPhraseIndex(i => (i + 1) % phrases.length)
    }
  }, [charIndex, deleting, phraseIndex, phrases, speed, pause])

  useEffect(() => {
    setDisplayed(phrases[phraseIndex].slice(0, charIndex))
  }, [charIndex, phraseIndex, phrases])

  return displayed
}
