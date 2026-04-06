import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'FRONTEND ARTS',
      jpCategory: 'フロントエンド術',
      skills: [
        { name: 'React', level: 5, color: 'blood-red' },
        { name: 'TypeScript', level: 5, color: 'blood-red' },
        { name: 'Tailwind CSS', level: 5, color: 'blood-red' },
        { name: 'Next.js', level: 4, color: 'neon-purple' },
        { name: 'Framer Motion', level: 4, color: 'neon-purple' },
      ],
    },
    {
      category: 'BACKEND POWER',
      jpCategory: 'バックエンド力',
      skills: [
        { name: 'Node.js', level: 5, color: 'blood-red' },
        { name: 'Python', level: 4, color: 'neon-purple' },
        { name: 'PostgreSQL', level: 4, color: 'neon-purple' },
        { name: 'MongoDB', level: 4, color: 'neon-purple' },
        { name: 'FastAPI', level: 3, color: 'electric-blue' },
      ],
    },
    {
      category: 'SYSTEM TOOLS',
      jpCategory: 'システムツール',
      skills: [
        { name: 'Git', level: 5, color: 'blood-red' },
        { name: 'Docker', level: 4, color: 'neon-purple' },
        { name: 'AWS', level: 3, color: 'electric-blue' },
        { name: 'Linux', level: 4, color: 'neon-purple' },
        { name: 'Figma', level: 4, color: 'neon-purple' },
      ],
    },
  ]

  const renderPowerBars = (level, color) => {
    const bars = []
    const maxBars = 5
    
    for (let i = 0; i < maxBars; i++) {
      bars.push(
        <div
          key={i}
          className={`h-2 w-8 ${
            i < level
              ? color === 'blood-red'
                ? 'bg-[#ff1a1a] shadow-[0_0_15px_#ff1a1a]'
                : color === 'neon-purple'
                ? 'bg-[#4c1d95] shadow-[0_0_15px_#4c1d95]'
                : 'bg-[#00f0ff] shadow-[0_0_15px_#00f0ff]'
              : 'bg-white/10'
          }`}
          style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 3px 100%, 0 calc(100% - 3px))' }}
        />
      )
    }
    return bars
  }

  const getPowerTitle = (level) => {
    switch (level) {
      case 5: return 'MASTER'
      case 4: return 'EXPERT'
      case 3: return 'ADEPT'
      case 2: return 'NOVICE'
      default: return 'LEARNER'
    }
  }

  return (
    <section id="skills" className="relative py-32 bg-[#050505] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#4c1d95]/5 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-jp text-[#4c1d95] text-sm tracking-[0.3em] mb-4">// スキル</p>
          <h2 className="font-anime text-4xl md:text-6xl font-black text-white tracking-wider">
            POWER <span className="text-[#ff1a1a]">LEVELS</span>
          </h2>
          <p className="text-white/40 mt-4 font-anime text-sm tracking-[0.2em]">
            CURRENT ABILITY METRICS
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
              className="border-2 border-white/10 bg-[#0a0a0a]/80 backdrop-blur-sm p-8 hover:border-[#ff1a1a]/30 transition-all duration-500 violent-shake"
              style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
            >
              {/* Category Header */}
              <div className="mb-8 pb-4 border-b-2 border-white/10">
                <p className="font-jp text-white/30 text-xs mb-1 tracking-wider">{category.jpCategory}</p>
                <h3 className="font-anime text-xl text-white font-black tracking-wider">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.2 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-anime text-sm text-white group-hover:text-[#ff1a1a] transition-colors tracking-wider">
                        {skill.name}
                      </span>
                      <span className={`font-anime text-xs tracking-wider ${
                        skill.color === 'blood-red' ? 'text-[#ff1a1a]' :
                        skill.color === 'neon-purple' ? 'text-[#4c1d95]' : 'text-[#00f0ff]'
                      }`}>
                        {getPowerTitle(skill.level)}
                      </span>
                    </div>
                    
                    {/* Power Bars */}
                    <div className="flex gap-1">
                      {renderPowerBars(skill.level, skill.color)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="border-2 border-[#ff1a1a]/30 bg-[#ff1a1a]/5 p-4 text-center violent-shake" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}>
            <p className="font-anime text-3xl text-[#ff1a1a] font-black drop-shadow-[0_0_10px_rgba(255,26,26,0.5)]">15+</p>
            <p className="font-anime text-xs text-white/40 tracking-wider mt-1">TECH</p>
          </div>
          <div className="border-2 border-[#4c1d95]/30 bg-[#4c1d95]/5 p-4 text-center violent-shake" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}>
            <p className="font-anime text-3xl text-[#4c1d95] font-black drop-shadow-[0_0_10px_rgba(76,29,149,0.5)]">5+</p>
            <p className="font-anime text-xs text-white/40 tracking-wider mt-1">YEARS</p>
          </div>
          <div className="border-2 border-[#00f0ff]/30 bg-[#00f0ff]/5 p-4 text-center violent-shake" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}>
            <p className="font-anime text-3xl text-[#00f0ff] font-black drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">50+</p>
            <p className="font-anime text-xs text-white/40 tracking-wider mt-1">PROJECTS</p>
          </div>
          <div className="border-2 border-white/20 bg-white/5 p-4 text-center violent-shake" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}>
            <p className="font-anime text-3xl text-white font-black">∞</p>
            <p className="font-anime text-xs text-white/40 tracking-wider mt-1">POWER</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
