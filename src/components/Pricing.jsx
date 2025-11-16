import React from 'react'
import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: 'Free', features: ['1 workspace', 'Basic prompts', 'Community support'], cta: 'Get started' },
  { name: 'Pro', price: '$29', features: ['Unlimited projects', 'Advanced RAG', 'Priority support'], cta: 'Upgrade' },
  { name: 'Enterprise', price: 'Custom', features: ['SLA + SSO', 'Security reviews', 'Dedicated success'], cta: 'Contact sales' }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0c0d1b] py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,.1),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Choose your glow</h2>
          <p className="mt-3 text-white/60">Simple plans that scale with ambition.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 ${i===1?'ring-2 ring-cyan-300/40':''}`}
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-fuchsia-400/10 to-violet-400/10 blur-xl" />
              <div className="relative">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <div className="mt-2 text-4xl font-bold text-white">{t.price}</div>
                <ul className="mt-6 space-y-2 text-white/70">
                  {t.features.map((f) => (<li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />{f}</li>))}
                </ul>
                <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} href="#" className="mt-8 inline-flex items-center justify-center w-full rounded-xl px-4 py-2 text-black font-semibold relative">
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-300" />
                  <span className="absolute inset-0 rounded-xl blur-lg opacity-60 bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-violet-300" />
                  <span className="relative">{t.cta}</span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
