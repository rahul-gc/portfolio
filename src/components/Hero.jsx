import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [glitchActive, setGlitchActive] = useState(false)
  const phrases = ['FULL STACK DEV', 'SYSTEM BUILDER', 'PROBLEM SOLVER', 'DOMAIN EXPANDER']
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Trigger glitch randomly
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000 + Math.random() * 2000)
    return () => clearInterval(glitchInterval)
  }, [])

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[phraseIndex]
      
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else {
        setTypedText(currentPhrase.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      }

      let typeSpeed = isDeleting ? 30 : 80

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 1500
        setIsDeleting(true)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setPhraseIndex((prev) => (prev + 1) % phrases.length)
        typeSpeed = 300
      }

      setTimeout(type, typeSpeed)
    }

    const timer = setTimeout(type, 500)
    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, phraseIndex, phrases])

  // Speed lines effect
  const [speedLines, setSpeedLines] = useState([])
  
  const addSpeedLine = useCallback(() => {
    const newLine = {
      id: Date.now(),
      top: Math.random() * 100,
      delay: Math.random() * 0.2,
    }
    setSpeedLines(prev => [...prev.slice(-5), newLine])
    setTimeout(() => {
      setSpeedLines(prev => prev.filter(line => line.id !== newLine.id))
    }, 500)
  }, [])

  useEffect(() => {
    const interval = setInterval(addSpeedLine, 800)
    return () => clearInterval(interval)
  }, [addSpeedLine])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1920&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b0000]/30 via-transparent to-[#4c1d95]/30" />
      </div>

      {/* Speed Lines */}
      {speedLines.map((line) => (
        <div
          key={line.id}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff1a1a]/60 to-transparent"
          style={{ 
            top: `${line.top}%`,
            animation: `speed-lines 0.3s ease-out ${line.delay}s forwards`
          }}
        />
      ))}

      {/* Intense Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        <div className="absolute inset-0 bg-[#8b0000]/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute inset-20 bg-[#ff1a1a]/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        
        {/* Aggressive Vertical JP Text */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 hidden sm:block"
        >
          <p className="font-jp text-vertical text-[#ff1a1a]/40 text-lg tracking-[0.5em] font-bold">
            領域展開
          </p>
        </motion.div>

        {/* Main Heading - AGGRESSIVE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          className="mb-6"
        >
          <h1 
            className={`font-anime text-7xl md:text-9xl lg:text-[10rem] font-black tracking-wider leading-none ${
              glitchActive ? 'glitch-text' : ''
            }`}
            data-text="I AM RAHUL"
          >
            <span className="text-white">I AM</span>
            <span className="text-[#ff1a1a] drop-shadow-[0_0_30px_rgba(255,26,26,0.8)]"> RAHUL</span>
          </h1>
        </motion.div>

        {/* Subheading - RAW POWER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <p className="font-anime text-xl md:text-3xl text-[#00f0ff] tracking-[0.3em] font-bold">
            {typedText}
            <span className="animate-pulse text-[#ff1a1a]">_</span>
          </p>
        </motion.div>

        {/* JP Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-jp text-[#ff1a1a]/60 text-base mb-12 tracking-[0.3em] font-bold"
        >
          混沌より創造を
        </motion.p>

        {/* CTA Buttons - SHARP */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.a
            href="#projects"
            className="anime-btn group violent-shake"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">ENTER DOMAIN</span>
          </motion.a>
          
          <motion.a
            href="#contact"
            className="font-anime text-sm text-white/70 border-2 border-white/30 px-10 py-5 hover:border-[#ff1a1a] hover:text-[#ff1a1a] transition-all duration-200 tracking-[0.3em] font-bold violent-shake"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            MAKE CONTACT
          </motion.a>
        </motion.div>

        {/* Stats - SHARP EDGES */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center gap-8 md:gap-16"
        >
          <div className="text-center group cursor-default">
            <p className="font-anime text-4xl md:text-5xl text-[#ff1a1a] font-black drop-shadow-[0_0_10px_rgba(255,26,26,0.8)] group-hover:scale-110 transition-transform">
              5+
            </p>
            <p className="font-anime text-xs text-white/40 tracking-[0.3em] mt-2">YEARS</p>
          </div>
          <div className="text-center group cursor-default">
            <p className="font-anime text-4xl md:text-5xl text-[#4c1d95] font-black drop-shadow-[0_0_10px_rgba(76,29,149,0.8)] group-hover:scale-110 transition-transform">
              50+
            </p>
            <p className="font-anime text-xs text-white/40 tracking-[0.3em] mt-2">PROJECTS</p>
          </div>
          <div className="text-center group cursor-default">
            <p className="font-anime text-4xl md:text-5xl text-[#00f0ff] font-black drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] group-hover:scale-110 transition-transform">
              ∞
            </p>
            <p className="font-anime text-xs text-white/40 tracking-[0.3em] mt-2">POWER</p>
          </div>
        </motion.div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#ff1a1a]/50" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#ff1a1a]/50" />
    </section>
  )
}

export default Hero
