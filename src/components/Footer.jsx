import React from 'react'

export default function Footer() {
  return (
    <footer className="relative bg-[#0e0f1f] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-fuchsia-400" />
          <span className="text-white font-semibold">NovaMind AI</span>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} NovaMind Labs. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
