import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

// Animated aurora ribbons using SVG paths and gradient strokes
export default function Aurora({ className = '' }) {
  const gradients = useMemo(() => [
    ['#22d3ee', '#a78bfa'],
    ['#f0abfc', '#60a5fa'],
    ['#34d399', '#22d3ee']
  ], [])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <svg className="absolute -top-24 left-0 w-[140%] h-[140%] opacity-40" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          {gradients.map((g, i) => (
            <linearGradient key={i} id={`aurora-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={g[0]} />
              <stop offset="100%" stopColor={g[1]} />
            </linearGradient>
          ))}
        </defs>

        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={
              i === 0
                ? 'M0,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400'
                : i === 1
                ? 'M0,500 C250,650 450,350 700,500 C900,620 1050,420 1200,520'
                : 'M0,300 C220,200 480,420 700,320 C920,220 1050,380 1200,260'
            }
            stroke={`url(#aurora-${i})`}
            strokeWidth={i === 1 ? 80 : 60}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3 + i, ease: 'easeInOut' }}
            style={{ filter: 'blur(20px)' }}
          />
        ))}
      </svg>

      <div className="absolute inset-0 backdrop-blur-3xl mix-blend-screen" />
    </div>
  )
}
