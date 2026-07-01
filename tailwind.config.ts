import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#080415',
          900: '#0f0a1e',
          850: '#130d28',
          800: '#1a0a2e',
          700: '#231245',
          600: '#2e1a5e',
          500: '#3d2278',
        },
        mystic: {
          50: '#f3e8ff',
          100: '#e9d5ff',
          200: '#d8b4fe',
          300: '#c084fc',
          400: '#a855f7',
          500: '#7c3aed',
          600: '#6d28d9',
          700: '#5b21b6',
        },
        divine: {
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#d4a017',
          500: '#b8860b',
          600: '#92700c',
        },
        spirit: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#e11d48',
          600: '#be123c',
        },
        aura: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#0d9488',
          600: '#0f766e',
        },
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #080415 0%, #1a0a2e 30%, #231245 60%, #0f0a1e 100%)',
        'mystic-gradient': 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #d8b4fe 100%)',
        'divine-glow': 'radial-gradient(ellipse at center, rgba(212,160,23,0.15) 0%, transparent 70%)',
        'card-glass': 'linear-gradient(135deg, rgba(124,58,237,0.08) 0%, rgba(212,160,23,0.04) 100%)',
      },
      boxShadow: {
        'mystic': '0 0 30px rgba(124, 58, 237, 0.15)',
        'divine': '0 0 30px rgba(212, 160, 23, 0.15)',
        'glow': '0 0 60px rgba(124, 58, 237, 0.25)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(124, 58, 237, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
