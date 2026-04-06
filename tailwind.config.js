/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'anime-black': '#050505',
        'anime-dark': '#0a0a0a',
        'blood-red': '#ff1a1a',
        'neon-purple': '#4c1d95',
        'electric-blue': '#00f0ff',
        'void-gray': '#111111',
        'deep-red': '#8b0000',
      },
      fontFamily: {
        'anime': ['Orbitron', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'jp': ['Noto Sans JP', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'flicker': 'flicker 3s linear infinite',
        'glitch': 'glitch 1s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px #ff1a1a, 0 0 40px #7c3aed' },
          '50%': { boxShadow: '0 0 40px #ff1a1a, 0 0 80px #7c3aed' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
          '52%': { opacity: '0.3' },
          '54%': { opacity: '1' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'anime-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0a 50%, #0d0d1a 100%)',
      },
    },
  },
  plugins: [],
}
