import React, { useRef, useEffect } from 'react'

// Lightweight animated particle background using canvas with neon glow
export default function ParticleField({ color = '#22d3ee', density = 0.00012 }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)

    const resize = () => {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      initParticles()
    }

    const initParticles = () => {
      const count = Math.min(300, Math.floor(width * height * density))
      particlesRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.8 + 0.4,
        a: Math.random() * Math.PI * 2,
      }))
    }

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const loop = () => {
      ctx.clearRect(0, 0, width, height)

      // subtle gradient background tint for glow
      const grd = ctx.createRadialGradient(
        mouseRef.current.x || width / 2,
        mouseRef.current.y || height / 2,
        10,
        width / 2,
        height / 2,
        Math.max(width, height)
      )
      grd.addColorStop(0, 'rgba(34, 211, 238, 0.05)')
      grd.addColorStop(1, 'rgba(168, 85, 247, 0.02)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, width, height)

      const parts = particlesRef.current
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i]
        p.x += p.vx
        p.y += p.vy
        p.a += 0.005

        // wrap around
        if (p.x < 0) p.x = width
        if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        if (p.y > height) p.y = 0

        // mouse repulsion
        const dx = (mouseRef.current.x || width / 2) - p.x
        const dy = (mouseRef.current.y || height / 2) - p.y
        const dist = Math.hypot(dx, dy)
        if (dist < 120) {
          p.vx -= dx / 1200
          p.vy -= dy / 1200
        }

        // draw with glow
        ctx.beginPath()
        ctx.fillStyle = color
        ctx.globalAlpha = 0.7
        ctx.shadowBlur = 12
        ctx.shadowColor = color
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.globalAlpha = 1
      }

      // connecting lines
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < i + 20 && j < parts.length; j++) {
          const p1 = parts[i]
          const p2 = parts[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const d2 = dx * dx + dy * dy
          if (d2 < 120 * 120) {
            ctx.strokeStyle = color
            ctx.globalAlpha = 0.07
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      rafRef.current = requestAnimationFrame(loop)
    }

    initParticles()
    rafRef.current = requestAnimationFrame(loop)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouse)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [color, density])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70"
      style={{ filter: 'saturate(140%) blur(0.2px)' }}
      aria-hidden
    />
  )
}
