import React from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'HOTEL FINDER',
      jpTitle: 'ホテルファインダー',
      description: 'A comprehensive hotel booking system with real-time availability, interactive maps, and seamless booking flows. Built with React and Node.js.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Maps API'],
      link: 'https://hotel-finder-red.vercel.app/',
      power: 'SS-RANK',
    },
    {
      id: 2,
      title: 'GUESTHOUSE OS',
      jpTitle: 'ゲストハウスOS',
      description: 'Full-stack guest house management system with booking management, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
      tags: ['Python', 'FastAPI', 'PostgreSQL', 'React'],
      link: 'https://chitwanguesthouse.vercel.app/',
      power: 'S-RANK',
    },
    {
      id: 3,
      title: 'ANIME PORTFOLIO',
      jpTitle: 'ポートフォリオ',
      description: 'This very site - an immersive anime-inspired portfolio with cinematic effects and intense visual design.',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80',
      tags: ['React', 'Framer Motion', 'Tailwind', 'Vite'],
      link: '#',
      power: 'S-RANK',
    },
  ]

  return (
    <section id="projects" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-jp text-[#ff1a1a] text-sm tracking-[0.3em] mb-4">// プロジェクト</p>
          <h2 className="font-anime text-4xl md:text-6xl font-black text-white tracking-wider">
            MISSION <span className="text-[#4c1d95]">LOG</span>
          </h2>
          <p className="text-white/40 mt-4 font-anime text-sm tracking-[0.2em]">
            DEPLOYED SYSTEMS & OPERATIONAL MODULES
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="anime-card relative overflow-hidden">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url("${project.image}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                  
                  {/* Power Rank Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="font-anime text-xs text-[#ff1a1a] border-2 border-[#ff1a1a]/50 px-3 py-1 bg-[#050505]/90 tracking-wider">
                      {project.power}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="font-jp text-white/30 text-xs mb-1 tracking-wider">{project.jpTitle}</p>
                  <h3 className="font-anime text-xl text-white font-black mb-3 group-hover:text-[#ff1a1a] transition-colors tracking-wider">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/50 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs font-anime text-white/40 border border-white/20 px-2 py-1 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-anime text-sm text-[#ff1a1a] hover:text-white transition-colors tracking-wider"
                    whileHover={{ x: 5 }}
                  >
                    <span>ACCESS SYSTEM</span>
                    <span>→</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/rahul-gc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-anime text-white/40 hover:text-[#ff1a1a] transition-colors tracking-wider text-sm border-b-2 border-white/20 hover:border-[#ff1a1a] pb-2"
            whileHover={{ y: -2 }}
          >
            VIEW ALL MISSIONS →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
