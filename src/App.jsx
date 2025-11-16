import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import ParticleField from './components/ParticleField'

function App() {
  return (
    <div className="min-h-screen bg-[#070711] text-white">
      <div className="fixed inset-0 -z-0">{/* background particles */}
        <ParticleField />
      </div>
      <Hero />
      <Features />
      <Demo />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
