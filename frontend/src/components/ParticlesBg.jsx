import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBg() {
  const init = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={init}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          number: { value: 55, density: { enable: true, area: 900 } },
          color: { value: '#3B82F6' },
          opacity: { value: { min: 0.04, max: 0.18 } },
          size: { value: { min: 1, max: 2.5 } },
          links: {
            enable: true,
            color: '#3B82F6',
            opacity: 0.07,
            distance: 140,
            width: 0.8,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            outModes: { default: 'bounce' },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
