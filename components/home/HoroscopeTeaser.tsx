'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Sun, Moon, Sparkles } from 'lucide-react';

const zodiacSymbols = [
  '♈', '♉', '♊', '♋', '♌', '♍',
  '♎', '♏', '♐', '♑', '♒', '♓',
];

export default function HoroscopeTeaser() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    tob: '',
    city: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — integrate with actual reading API
    console.log('Birth chart reading request:', formData);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ===== Left Side: Content + Form ===== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Heading */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-purple-400 mb-4">
                <Star className="w-4 h-4" />
                Cosmic Insight
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                ✦ Discover Your{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                  Cosmic Blueprint
                </span>
              </h2>
              <p className="text-gray-400 text-lg">
                Get a personalized AI-powered birth chart reading
              </p>
            </div>

            {/* Form Card */}
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="horoscope-name"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Full Name
                </label>
                <input
                  id="horoscope-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-sm"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="horoscope-dob"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Date of Birth
                </label>
                <input
                  id="horoscope-dob"
                  name="dob"
                  type="date"
                  required
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-sm [color-scheme:dark]"
                />
              </div>

              {/* Time of Birth */}
              <div>
                <label
                  htmlFor="horoscope-tob"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Time of Birth
                </label>
                <input
                  id="horoscope-tob"
                  name="tob"
                  type="time"
                  value={formData.tob}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-sm [color-scheme:dark]"
                />
              </div>

              {/* City */}
              <div>
                <label
                  htmlFor="horoscope-city"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  City of Birth
                </label>
                <input
                  id="horoscope-city"
                  name="city"
                  type="text"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="e.g. Mumbai, Delhi, Varanasi"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all text-sm"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="glow-btn w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:from-purple-500 hover:via-pink-500 hover:to-rose-500 text-white font-bold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_32px_rgba(168,85,247,0.45)] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Generate My Reading ✦
              </button>

              {/* Disclaimer */}
              <p className="text-center text-xs text-gray-500">
                Free preview · Full reading with email signup
              </p>
            </form>
          </motion.div>

          {/* ===== Right Side: Zodiac Wheel ===== */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Outer decorative rings */}
              <div className="absolute inset-0 rounded-full border border-white/5" />
              <div className="absolute inset-4 rounded-full border border-white/[0.07]" />
              <div className="absolute inset-8 rounded-full border border-purple-500/10" />

              {/* Spinning Zodiac Ring */}
              <div className="absolute inset-0 animate-[spin_90s_linear_infinite]">
                {zodiacSymbols.map((symbol, index) => {
                  const angle = (index * 360) / 12;
                  const radians = (angle * Math.PI) / 180;
                  // Position symbols at 46% radius from center
                  const radius = 46;
                  const x = 50 + radius * Math.cos(radians - Math.PI / 2);
                  const y = 50 + radius * Math.sin(radians - Math.PI / 2);

                  return (
                    <div
                      key={index}
                      className="absolute text-xl sm:text-2xl transition-all duration-300"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                      }}
                    >
                      <span className="inline-block animate-[spin_90s_linear_infinite_reverse] text-purple-300/60 hover:text-purple-200 transition-colors drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]">
                        {symbol}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Middle ring with celestial icons */}
              <div className="absolute inset-[30%] rounded-full border border-indigo-500/15 flex items-center justify-center">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <Sun className="w-4 h-4 text-amber-400/50" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <Moon className="w-4 h-4 text-blue-300/50" />
                </div>
                <div className="absolute top-1/2 -left-2 -translate-y-1/2">
                  <Star className="w-3.5 h-3.5 text-purple-400/50" />
                </div>
                <div className="absolute top-1/2 -right-2 -translate-y-1/2">
                  <Star className="w-3.5 h-3.5 text-pink-400/50" />
                </div>
              </div>

              {/* Center glow orb */}
              <div className="absolute inset-[38%] rounded-full bg-gradient-to-br from-purple-600/40 via-indigo-500/30 to-pink-500/20 blur-sm animate-pulse" />
              <div className="absolute inset-[40%] rounded-full bg-gradient-to-br from-purple-500/60 via-indigo-400/40 to-pink-400/30 flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.5)]">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white/80 animate-pulse" />
              </div>

              {/* Floating particles */}
              <div className="absolute top-[15%] left-[18%] w-1.5 h-1.5 rounded-full bg-purple-400/40 animate-[float_4s_ease-in-out_infinite]" />
              <div className="absolute top-[70%] right-[15%] w-1 h-1 rounded-full bg-pink-400/40 animate-[float_5s_ease-in-out_infinite_1s]" />
              <div className="absolute bottom-[20%] left-[25%] w-1 h-1 rounded-full bg-indigo-400/40 animate-[float_3.5s_ease-in-out_infinite_0.5s]" />
              <div className="absolute top-[25%] right-[22%] w-0.5 h-0.5 rounded-full bg-amber-400/50 animate-[float_6s_ease-in-out_infinite_2s]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
