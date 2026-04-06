import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8b0000]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#4c1d95]/10 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="font-jp text-[#ff1a1a] text-sm tracking-[0.3em] mb-4">// 自己紹介</p>
          <h2 className="font-anime text-4xl md:text-6xl font-black text-white tracking-wider">
            THE <span className="text-gradient">BUILDER</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Character Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b0000]/40 to-[#4c1d95]/40" />
              <div 
                className="absolute inset-[3px] bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80")',
                  clipPath: 'polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%)'
                }}
              />
              {/* Energy Aura */}
              <div className="absolute -inset-4 bg-[#ff1a1a]/10 animate-pulse" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%)' }} />
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <p className="font-anime text-2xl md:text-3xl text-white leading-relaxed font-bold">
                "I build <span className="text-[#ff1a1a]">systems</span> that solve real-world <span className="text-[#4c1d95]">chaos</span>."
              </p>
              
              <p className="text-white/60 leading-relaxed text-lg border-l-2 border-[#ff1a1a]/30 pl-4">
                Full-stack developer with a passion for creating powerful, scalable applications. 
                Specializing in modern web technologies, database architecture, and system design.
              </p>

              <p className="text-white/60 leading-relaxed border-l-2 border-[#4c1d95]/30 pl-4">
                From complex backend systems to immersive frontend experiences, 
                I transform ideas into reality. Every line of code is crafted with precision, 
                every architecture designed for scale.
              </p>

              {/* Attributes - SHARP */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="border-2 border-white/10 p-4 hover:border-[#ff1a1a]/50 transition-all duration-300 violent-shake" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                  <p className="font-anime text-[#ff1a1a] text-2xl font-black">99%</p>
                  <p className="font-anime text-xs text-white/40 tracking-[0.2em] mt-1">DEDICATION</p>
                </div>
                <div className="border-2 border-white/10 p-4 hover:border-[#4c1d95]/50 transition-all duration-300 violent-shake" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                  <p className="font-anime text-[#4c1d95] text-2xl font-black">100%</p>
                  <p className="font-anime text-xs text-white/40 tracking-[0.2em] mt-1">COMMITMENT</p>
                </div>
                <div className="border-2 border-white/10 p-4 hover:border-[#00f0ff]/50 transition-all duration-300 violent-shake" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                  <p className="font-anime text-[#00f0ff] text-2xl font-black">∞</p>
                  <p className="font-anime text-xs text-white/40 tracking-[0.2em] mt-1">LEARNING</p>
                </div>
                <div className="border-2 border-white/10 p-4 hover:border-[#ff1a1a]/50 transition-all duration-300 violent-shake" style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}>
                  <p className="font-anime text-[#ff1a1a] text-2xl font-black">0</p>
                  <p className="font-anime text-xs text-white/40 tracking-[0.2em] mt-1">EXCUSES</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
