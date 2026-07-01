'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star } from 'lucide-react';

const floatingDots = [
  { top: '12%', left: '8%', delay: 0, size: 4 },
  { top: '20%', right: '12%', delay: 0.5, size: 3 },
  { top: '65%', left: '5%', delay: 1.2, size: 5 },
  { top: '75%', right: '8%', delay: 0.8, size: 3 },
  { top: '40%', left: '15%', delay: 1.5, size: 4 },
  { top: '30%', right: '18%', delay: 0.3, size: 6 },
  { top: '85%', left: '20%', delay: 1.0, size: 3 },
  { top: '50%', right: '5%', delay: 1.8, size: 4 },
  { top: '10%', left: '45%', delay: 0.6, size: 3 },
  { top: '90%', right: '25%', delay: 1.4, size: 5 },
];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-950">
      {/* Cosmic gradient background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-950 via-cosmic-900 to-cosmic-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,23,0.08)_0%,transparent_50%)]" />

      {/* Animated Sacred Geometry Mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-[700px] h-[700px] md:w-[900px] md:h-[900px] opacity-[0.07] animate-[spin_120s_linear_infinite]"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circles */}
          <circle cx="250" cy="250" r="240" stroke="url(#mandala-grad)" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="200" stroke="url(#mandala-grad)" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="160" stroke="url(#mandala-grad)" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="120" stroke="url(#mandala-grad)" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="80" stroke="url(#mandala-grad)" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="40" stroke="url(#mandala-grad)" strokeWidth="0.8" />

          {/* Petals / Radial lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 250 + 40 * Math.cos(angle);
            const y1 = 250 + 40 * Math.sin(angle);
            const x2 = 250 + 240 * Math.cos(angle);
            const y2 = 250 + 240 * Math.sin(angle);
            return (
              <line
                key={`line-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#mandala-grad)"
                strokeWidth="0.5"
              />
            );
          })}

          {/* Inner flower-of-life circles */}
          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const cx = 250 + 80 * Math.cos(angle);
            const cy = 250 + 80 * Math.sin(angle);
            return (
              <circle
                key={`flower-${i}`}
                cx={cx}
                cy={cy}
                r="80"
                stroke="url(#mandala-grad)"
                strokeWidth="0.4"
                fill="none"
              />
            );
          })}

          {/* Mid-ring petal arcs */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const cx = 250 + 160 * Math.cos(angle);
            const cy = 250 + 160 * Math.sin(angle);
            return (
              <circle
                key={`mid-${i}`}
                cx={cx}
                cy={cy}
                r="40"
                stroke="url(#mandala-grad)"
                strokeWidth="0.3"
                fill="none"
              />
            );
          })}

          {/* Diamond / rotated square */}
          <rect
            x="145"
            y="145"
            width="210"
            height="210"
            stroke="url(#mandala-grad)"
            strokeWidth="0.5"
            fill="none"
            transform="rotate(45 250 250)"
          />
          <rect
            x="175"
            y="175"
            width="150"
            height="150"
            stroke="url(#mandala-grad)"
            strokeWidth="0.4"
            fill="none"
            transform="rotate(22.5 250 250)"
          />

          <defs>
            <linearGradient id="mandala-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="50%" stopColor="#d4a017" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Counter-rotating inner mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] opacity-[0.05] animate-[spin_90s_linear_infinite_reverse]"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const cx = 250 + 120 * Math.cos(angle);
            const cy = 250 + 120 * Math.sin(angle);
            return (
              <circle
                key={`inner-${i}`}
                cx={cx}
                cy={cy}
                r="60"
                stroke="#d4a017"
                strokeWidth="0.5"
                fill="none"
              />
            );
          })}
          <circle cx="250" cy="250" r="120" stroke="#d4a017" strokeWidth="0.5" />
          <circle cx="250" cy="250" r="60" stroke="#d4a017" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Floating sparkle dots */}
      {floatingDots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-mystic-400/40 animate-float pointer-events-none"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            width: dot.size,
            height: dot.size,
            animationDelay: `${dot.delay}s`,
          } as React.CSSProperties}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + dot.delay, duration: 0.6 }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-mystic-500/20 bg-mystic-500/5 text-mystic-400 text-sm font-body tracking-wide backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            AI-Powered Spiritual Guidance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6 text-shimmer bg-gradient-to-r from-divine-400 via-yellow-200 to-divine-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer"
        >
          Illuminate Your
          <br />
          Spiritual Journey
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-400 font-body max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Discover crystals, unlock your birth chart, and connect with our AI
          spiritual guide — all in one sacred space.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <button className="glow-btn group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-mystic-600 to-spirit-600 text-white font-semibold text-lg shadow-lg shadow-mystic-500/25 hover:shadow-mystic-500/40 transition-all duration-300 hover:scale-[1.03]">
            Explore Shop
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-mystic-500/30 text-mystic-400 font-semibold text-lg hover:bg-mystic-500/10 backdrop-blur-sm transition-all duration-300 hover:border-mystic-500/50">
            Talk to AI Guide
            <Sparkles className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Trust text */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-1.5 text-sm text-gray-500 font-body"
        >
          <Star className="w-4 h-4 text-divine-400 fill-divine-400" />
          <span className="text-gray-400">4.8 rating</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-400">5,000+ seekers</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-400">200+ sacred products</span>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cosmic-950 to-transparent pointer-events-none" />
    </section>
  );
}
