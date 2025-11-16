import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  {
    quote: 'NovaMind turns concepts into cinematic experiences. Our users noticed instantly.',
    author: 'Ayla Chen',
    role: 'Head of Product, Polaris'
  },
  {
    quote: 'The neon‑glass UI and fluid performance set a new bar for AI tools.',
    author: 'Marco Ruiz',
    role: 'Founder, Atlas Labs'
  },
  {
    quote: 'From prototype to production in days. Micro‑interactions are chef’s kiss.',
    author: 'Priya Nair',
    role: 'Design Lead, Lumen'
  }
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative bg-[#0b0c18] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,.12),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white">Loved by visionary teams</h2>
        <div className="mt-10 relative h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <p className="text-xl md:text-2xl text-white/80">“{items[index].quote}”</p>
              <p className="mt-4 text-white/60">{items[index].author} • {items[index].role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button key={i} aria-label={`Go to slide ${i+1}`} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition ${i===index?'bg-white':'bg-white/30'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
