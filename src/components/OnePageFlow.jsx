import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import ParticleField from './ParticleField'
import Aurora from './Aurora'

// A single immersive canvas-like section with layered parallax bands
export default function OnePageFlow() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const yAurora = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])
  const yCards = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.2])

  useEffect(() => {
    // lock body background to deep black to enhance cinematic look
    document.documentElement.style.background = '#070711'
  }, [])

  return (
    <section ref={ref} className="relative min-h-[320vh] bg-[#070711] text-white">
      {/* base particle field */}
      <div className="fixed inset-0 -z-30">
        <ParticleField />
      </div>

      {/* aurora ribbons */}
      <motion.div className="fixed inset-0 -z-20" style={{ y: yAurora, opacity: glow }}>
        <Aurora />
      </motion.div>

      {/* Spline hero as deep background layer */}
      <motion.div className="fixed inset-0 -z-10" style={{ y: yHero }}>
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" />
      </motion.div>

      {/* Content layers stacked vertically but visually continuous */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HERO COPY */}
        <div className="pt-[18vh] md:pt-[22vh] lg:pt-[26vh] text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/5">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_3px_rgba(34,211,238,.6)]" />
              <span className="text-xs tracking-wider text-white/70">Introducing</span>
              <span className="text-xs font-semibold tracking-wider text-white">NovaMind AI</span>
            </div>
            <h1 className="mt-8 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">
              The Cinematic Brain for Your Apps
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
              One seamless canvas. Neon glass. Breathtaking motion. Built for teams who want a sense of wonder.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <motion.a whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} href="#pricing" className="relative inline-flex items-center gap-2 rounded-xl px-6 py-3 text-black font-semibold">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-300" />
                <span className="absolute inset-0 rounded-xl blur-lg opacity-60 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-300" />
                <span className="relative">Start Creating</span>
              </motion.a>
              <motion.a whileHover={{ x: 2 }} href="#flow-cards" className="group inline-flex items-center gap-2 rounded-xl px-6 py-3 text-cyan-300 border border-cyan-400/30 bg-white/5 backdrop-blur">
                <span className="group-hover:text-white transition">Explore</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* FEATURE RAIL as one flowing strip */}
        <div id="flow-cards" className="mt-[30vh]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            style={{ boxShadow: '0 10px 60px rgba(56,189,248,0.15)' }}
          >
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['Generative Workflows', 'Compose multi‑step AI agents with tool use, memory and guards.'],
                ['Vector Cognition', 'Hybrid RAG pipeline with semantic caching and feedback loops.'],
                ['Edge‑class Inference', 'Ultra‑low latency with smart batching and streaming tokens.'],
                ['Safety by Design', 'Policy shields, content filters, and observability built‑in.'],
                ['No‑code to Pro‑code', 'Visual orchestration that smoothly graduates to code.'],
                ['Scale Effortlessly', 'From prototype to planet‑scale with one platform.'],
              ].map(([t, d], i) => (
                <motion.div
                  key={t}
                  whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/10 to-violet-500/20 blur-xl" />
                  <div className="relative">
                    <h3 className="text-lg font-semibold text-white">{t}</h3>
                    <p className="mt-1 text-sm text-white/60">{d}</p>
                  </div>
                  <motion.div
                    className="absolute -right-8 -bottom-8 h-24 w-24 rounded-full bg-cyan-400/20"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* DEMO STRIP with parallax rise */}
        <motion.div style={{ y: yCards }} className="mt-[18vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
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
        </motion.div>

        {/* PRICING STRIP */}
        <div id="pricing" className="mt-[18vh]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3, once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              ['Starter', 'Free', ['1 workspace', 'Basic prompts', 'Community support'], 'Get started'],
              ['Pro', '$29', ['Unlimited projects', 'Advanced RAG', 'Priority support'], 'Upgrade'],
              ['Enterprise', 'Custom', ['SLA + SSO', 'Security reviews', 'Dedicated success'], 'Contact sales'],
            ].map(([name, price, feats, cta], i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 ${i===1?'ring-2 ring-cyan-300/40':''}`}
              >
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-fuchsia-400/10 to-violet-400/10 blur-xl" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-white">{name}</h3>
                  <div className="mt-2 text-4xl font-bold text-white">{price}</div>
                  <ul className="mt-6 space-y-2 text-white/70">
                    {feats.map((f) => (<li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />{f}</li>))}
                  </ul>
                  <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#" className="mt-8 inline-flex items-center justify-center w-full rounded-xl px-4 py-2 text-black font-semibold relative">
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-300" />
                    <span className="absolute inset-0 rounded-xl blur-lg opacity-60 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-300" />
                    <span className="relative">{cta}</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FOOTER MINI */}
        <div className="h-[20vh]" />
        <div className="relative z-20 pb-16 text-center text-white/60">
          <div className="inline-flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-fuchsia-400" />
            <span className="text-white font-semibold">NovaMind AI</span>
          </div>
          <p className="mt-3 text-sm">© {new Date().getFullYear()} NovaMind Labs. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
