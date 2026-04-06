import React from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import GrainOverlay from './components/GrainOverlay'
import FloatingParticles from './components/FloatingParticles'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <div className="relative min-h-screen bg-anime-black overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Effects */}
      <GrainOverlay />
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
