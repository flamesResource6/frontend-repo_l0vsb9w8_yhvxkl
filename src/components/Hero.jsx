import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#070711]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,211,238,.12)_0%,rgba(147,51,234,.12)_35%,rgba(2,6,23,1)_70%)]" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-30 pointer-events-none" style={{background:"conic-gradient(from 0deg, rgba(59,130,246,.1), rgba(168,85,247,.18), rgba(34,211,238,.12), rgba(99,102,241,.12), rgba(59,130,246,.1))"}} />
      </div>

      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/5">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,.6)]" />
            <span className="text-xs tracking-wider text-white/70">Introducing</span>
            <span className="text-xs font-semibold tracking-wider text-white">NovaMind AI</span>
          </div>

          <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">
            The Cinematic Brain for Your Apps
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70">
            Build, think, and scale with a luminous AI engine. Live 3D, micro‑interactions, and neon‑glass aesthetics — crafted for product teams who demand magic.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} href="#pricing" className="relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-black font-semibold">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-300" />
              <span className="absolute inset-0 rounded-xl blur-lg opacity-60 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-300" />
              <span className="relative">Get NovaMind</span>
            </motion.a>
            <motion.a whileHover={{ x: 2 }} href="#demo" className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-cyan-300 border border-cyan-400/30 bg-white/5 backdrop-blur">
              <span className="i-lucide-play" />
              <span className="group-hover:text-white transition">Watch demo</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
