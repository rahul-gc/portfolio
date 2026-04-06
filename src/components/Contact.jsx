import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const socialLinks = [
    { name: 'GITHUB', icon: 'GH', url: 'https://github.com/rahul-gc', color: 'blood-red' },
    { name: 'LINKEDIN', icon: 'LI', url: 'https://linkedin.com/in/rahul-gc-1a10452b7/', color: 'neon-purple' },
    { name: 'UPWORK', icon: 'UW', url: 'https://www.upwork.com/freelancers/~0109f1891b3815e801', color: 'electric-blue' },
    { name: 'EMAIL', icon: 'EM', url: 'mailto:gcrahul561@gmail.com', color: 'blood-red' },
  ]

  return (
    <section id="contact" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#ff1a1a]/5 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-jp text-[#00f0ff] text-sm tracking-[0.3em] mb-4">// 連絡先</p>
          <h2 className="font-anime text-4xl md:text-6xl font-black text-white tracking-wider">
            INITIATE <span className="text-[#ff1a1a]">CONTACT</span>
          </h2>
          <p className="text-white/40 mt-4 font-anime text-sm tracking-[0.2em]">
            ESTABLISH SECURE COMMUNICATION CHANNEL
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-2 border-white/10 bg-[#050505]/90 backdrop-blur-sm p-8 md:p-12"
          style={{ clipPath: 'polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))' }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <p className="font-anime text-3xl text-[#ff1a1a] mb-4 font-black tracking-wider">TRANSMISSION COMPLETE</p>
              <p className="text-white/60">Message received. Awaiting response protocol.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="block font-anime text-xs text-white/40 tracking-[0.2em] mb-2">
                    CODENAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border-2 border-white/20 px-4 py-4 text-white font-anime focus:border-[#ff1a1a] focus:outline-none focus:shadow-[0_0_30px_rgba(255,26,26,0.3)] transition-all tracking-wider"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                    placeholder="ENTER DESIGNATION"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block font-anime text-xs text-white/40 tracking-[0.2em] mb-2">
                    FREQUENCY
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border-2 border-white/20 px-4 py-4 text-white font-anime focus:border-[#ff1a1a] focus:outline-none focus:shadow-[0_0_30px_rgba(255,26,26,0.3)] transition-all tracking-wider"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                    placeholder="SIGNAL@FREQ.COM"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block font-anime text-xs text-white/40 tracking-[0.2em] mb-2">
                  TRANSMISSION
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#0a0a0a] border-2 border-white/20 px-4 py-4 text-white font-anime focus:border-[#ff1a1a] focus:outline-none focus:shadow-[0_0_30px_rgba(255,26,26,0.3)] transition-all resize-none tracking-wider"
                  style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}
                  placeholder="COMPOSE TRANSMISSION..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full anime-btn disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                <span className="relative z-10 tracking-wider">
                  {isSubmitting ? 'TRANSMITTING...' : 'SEND TRANSMISSION'}
                </span>
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-center font-anime text-xs text-white/30 tracking-[0.2em] mb-6">
            ALTERNATIVE CHANNELS
          </p>
          
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative w-16 h-16 border-2 border-white/20 flex items-center justify-center font-anime text-sm font-bold transition-all duration-300 violent-shake ${
                  link.color === 'blood-red' ? 'hover:border-[#ff1a1a] hover:text-[#ff1a1a] hover:shadow-[0_0_30px_rgba(255,26,26,0.4)]' :
                  link.color === 'neon-purple' ? 'hover:border-[#4c1d95] hover:text-[#4c1d95] hover:shadow-[0_0_30px_rgba(76,29,149,0.4)]' :
                  'hover:border-[#00f0ff] hover:text-[#00f0ff] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]'
                }`}
                style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)' }}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{link.icon}</span>
                
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-anime text-white/40 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap tracking-wider">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="font-jp text-white/20 text-sm tracking-wider">
            混沌を制し、秩序を創造する
          </p>
          <p className="font-anime text-white/30 text-xs tracking-[0.2em] mt-4">
            2024 RAHUL GC // ALL SYSTEMS OPERATIONAL
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
