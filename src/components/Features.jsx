import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Cpu, Rocket, Shield, Workflow, Layers } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Generative Workflows',
    desc: 'Compose multi‑step AI agents with tool use, memory and guards.'
  },
  {
    icon: Cpu,
    title: 'Edge‑class Inference',
    desc: 'Ultra‑low latency with smart batching and streaming tokens.'
  },
  {
    icon: Layers,
    title: 'Vector Cognition',
    desc: 'Hybrid RAG pipeline with semantic caching and feedback loops.'
  },
  {
    icon: Shield,
    title: 'Safety by Design',
    desc: 'Policy shields, content filters, and observability built‑in.'
  },
  {
    icon: Workflow,
    title: 'No‑code to Pro‑code',
    desc: 'Visual orchestration that smoothly graduates to code.'
  },
  {
    icon: Rocket,
    title: 'Scale Effortlessly',
    desc: 'From prototype to planet‑scale with one platform.'
  }
]

export default function Features() {
  return (
    <section className="relative bg-[#090a13] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,.15),transparent_40%),radial-gradient(ellipse_at_top_left,rgba(168,85,247,.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Neon‑glass capabilities</h2>
          <p className="mt-3 text-white/60">Everything you need to craft cinematic AI experiences.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-violet-500/20 blur-xl" />

              <div className="relative flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/10 border border-white/10 text-cyan-300">
                  <f.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{f.desc}</p>
                </div>
              </div>

              <div className="relative mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="mt-6 flex items-center gap-3 text-xs text-white/60">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,.7)]" />
                <span>Hover to feel the glow</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
