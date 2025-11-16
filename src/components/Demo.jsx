import React from 'react'
import { motion } from 'framer-motion'

export default function Demo() {
  return (
    <section id="demo" className="relative bg-[#0a0b16] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,.14),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">See NovaMind in motion</h2>
          <p className="mt-3 text-white/60">A glimpse of the experience and micro‑interactions.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative mt-12 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-fuchsia-400/10 to-violet-400/10" />
          <div className="aspect-video w-full relative">
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative w-[86%] h-[86%] rounded-2xl border border-white/10 bg-black/60 shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-9 bg-white/5 border-b border-white/10 rounded-t-2xl flex items-center gap-1 px-4">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <div className="absolute inset-0 pt-9 p-6 grid gap-3 text-white/80 text-sm">
                  <div className="h-3 w-24 rounded bg-white/10" />
                  <div className="h-3 w-1/2 rounded bg-white/10" />
                  <div className="h-3 w-2/3 rounded bg-white/10" />
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div key={i} whileHover={{ scale: 1.03 }} className="h-24 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
