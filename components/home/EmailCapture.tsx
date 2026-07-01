'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Gift, Sparkles, Check } from 'lucide-react';

const zodiacSigns = [
  'Aries',
  'Taurus',
  'Gemini',
  'Cancer',
  'Leo',
  'Virgo',
  'Libra',
  'Scorpio',
  'Sagittarius',
  'Capricorn',
  'Aquarius',
  'Pisces',
] as const;

interface SparkleParticle {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: number;
  duration: number;
  opacity: number;
}

const sparkleParticles: SparkleParticle[] = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 4 + 2}px`,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 3,
  opacity: Math.random() * 0.5 + 0.15,
}));

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [zodiac, setZodiac] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !zodiac) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950/80 to-violet-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-600/5 to-transparent" />

      {/* Sparkle particles */}
      {sparkleParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-purple-300 pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 10, -10, 5, 0],
            opacity: [p.opacity, p.opacity * 2, p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            repeat: Infinity,
            duration: p.duration,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Larger decorative orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Decorative icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-amber-400 blur-xl opacity-30" />
            <div className="relative p-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <Gift className="w-10 h-10 text-amber-400" />
            </div>
            {/* Orbiting sparkle */}
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-purple-300" />
            </motion.div>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4"
        >
          Free Crystal Guide by Zodiac Sign
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 font-body text-base sm:text-lg max-w-xl mx-auto mb-10"
        >
          Discover which healing crystals align with your zodiac energy. Download
          our exclusive guide.
        </motion.p>

        {/* Form / Success state */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-0 max-w-2xl mx-auto"
            >
              {/* Email input */}
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full h-12 sm:h-14 pl-11 pr-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-gray-500 font-body text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/60 transition-shadow"
                />
              </div>

              {/* Zodiac dropdown */}
              <select
                required
                value={zodiac}
                onChange={(e) => setZodiac(e.target.value)}
                className="h-12 sm:h-14 px-4 border-t sm:border-t-0 border-l-0 sm:border-l border border-white/10 bg-white/5 backdrop-blur-sm text-white font-body text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/60 appearance-none cursor-pointer rounded-none"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%239ca3af\' stroke-width=\'2\'%3E%3Cpath d=\'m6 9 6 6 6-6\'/%3E%3C/svg%3E")',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  paddingRight: '36px',
                }}
              >
                <option value="" disabled className="bg-gray-900 text-gray-400">
                  Zodiac Sign
                </option>
                {zodiacSigns.map((sign) => (
                  <option key={sign} value={sign} className="bg-gray-900 text-white">
                    {sign}
                  </option>
                ))}
              </select>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="h-12 sm:h-14 px-6 sm:px-8 rounded-xl sm:rounded-l-none sm:rounded-r-xl bg-gradient-to-r from-purple-600 to-rose-500 text-white font-heading text-sm font-semibold tracking-wide shadow-lg shadow-purple-700/30 hover:shadow-purple-600/40 disabled:opacity-60 disabled:cursor-wait transition-all whitespace-nowrap flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    >
                      <Sparkles className="w-4 h-4" />
                    </motion.div>
                    Sending…
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Get Free Guide ✦
                  </>
                )}
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-green-500/30 bg-green-500/10 backdrop-blur-sm"
            >
              <div className="p-1.5 rounded-full bg-green-500">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-green-300 font-heading text-lg font-semibold">
                Check your inbox! ✦
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Privacy text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-gray-600 font-body text-xs mt-5"
        >
          We respect your privacy. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}
