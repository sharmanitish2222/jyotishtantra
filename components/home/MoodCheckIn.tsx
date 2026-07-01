'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Heart,
  Sparkles,
  Send,
  Leaf,
  Wind,
  Sun,
  Zap,
  Mountain,
  BookOpen,
  ShoppingBag,
} from 'lucide-react';

interface MoodResult {
  energyState: string;
  score: number;
  icon: React.ReactNode;
  affirmation: string;
  suggestedProduct: string;
  suggestedPractice: string;
  color: string;
  gradient: string;
}

const mockResult: MoodResult = {
  energyState: 'Flowing',
  score: 75,
  icon: <Wind className="w-6 h-6" />,
  color: 'text-teal-400',
  gradient: 'from-teal-500 to-cyan-400',
  affirmation:
    'Your energy flows like a sacred river. Trust your intuition today — it is your compass.',
  suggestedProduct: 'Clear Quartz Point — Amplify your flowing energy',
  suggestedPractice: '5-minute gratitude meditation',
};

const MAX_CHARS = 500;

export default function MoodCheckIn() {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const charCount = text.length;
  const charPercent = (charCount / MAX_CHARS) * 100;

  const handleSubmit = () => {
    if (text.trim().length === 0) return;
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setSubmitted(true);
    }, 1800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setText('');
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
            ✦ How Is Your Energy Today?
          </h2>
          <p className="text-gray-400 font-body text-base sm:text-lg mb-10">
            Share how you feel and receive personalized guidance
          </p>
        </motion.div>

        {/* Glass card container */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 sm:p-8"
        >
          <AnimatePresence mode="wait">
            {/* ───── Input State ───── */}
            {!submitted && !isAnalyzing && (
              <motion.div
                key="input"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
              >
                {/* Quick mood icons row */}
                <div className="flex justify-center gap-3 mb-6">
                  {[
                    { icon: <Sun className="w-5 h-5" />, label: 'Radiant', color: 'text-amber-400 hover:bg-amber-400/15' },
                    { icon: <Wind className="w-5 h-5" />, label: 'Flowing', color: 'text-teal-400 hover:bg-teal-400/15' },
                    { icon: <Zap className="w-5 h-5" />, label: 'Electric', color: 'text-yellow-300 hover:bg-yellow-300/15' },
                    { icon: <Leaf className="w-5 h-5" />, label: 'Grounded', color: 'text-green-400 hover:bg-green-400/15' },
                    { icon: <Mountain className="w-5 h-5" />, label: 'Still', color: 'text-slate-400 hover:bg-slate-400/15' },
                    { icon: <Heart className="w-5 h-5" />, label: 'Loving', color: 'text-rose-400 hover:bg-rose-400/15' },
                  ].map((mood) => (
                    <button
                      key={mood.label}
                      type="button"
                      title={mood.label}
                      onClick={() => setText((prev) => (prev ? `${prev} — feeling ${mood.label.toLowerCase()}` : `I'm feeling ${mood.label.toLowerCase()} today`))}
                      className={`p-2.5 rounded-xl border border-white/10 bg-white/5 transition-colors ${mood.color}`}
                    >
                      {mood.icon}
                    </button>
                  ))}
                </div>

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    rows={4}
                    maxLength={MAX_CHARS}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write about how you are feeling today..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder-gray-500 font-body text-sm sm:text-base resize-none p-4 focus:outline-none focus:ring-2 focus:ring-purple-500/60 transition-shadow"
                  />
                  {/* Character counter */}
                  <div className="flex items-center justify-between mt-2 px-1">
                    <div className="h-1.5 flex-1 rounded-full bg-white/10 mr-4 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${charPercent > 90 ? 'bg-rose-500' : 'bg-gradient-to-r from-purple-500 to-teal-400'}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${charPercent}%` }}
                        transition={{ duration: 0.25 }}
                      />
                    </div>
                    <span className={`text-xs font-body tabular-nums ${charPercent > 90 ? 'text-rose-400' : 'text-gray-500'}`}>
                      {charCount}/{MAX_CHARS}
                    </span>
                  </div>
                </div>

                {/* Submit button */}
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  disabled={text.trim().length === 0}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white font-heading text-sm font-semibold tracking-wide shadow-lg shadow-purple-700/30 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                >
                  <Sparkles className="w-4 h-4" />
                  Analyze My Energy ✦
                  <Send className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}

            {/* ───── Analyzing State ───── */}
            {isAnalyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                  className="mb-6"
                >
                  <Sparkles className="w-10 h-10 text-purple-400" />
                </motion.div>
                <p className="text-white font-heading text-lg">Reading your energy…</p>
                <div className="mt-4 flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-2 h-2 rounded-full bg-purple-400"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* ───── Result State ───── */}
            {submitted && !isAnalyzing && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="text-left space-y-6"
              >
                {/* Energy state header */}
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${mockResult.gradient} shadow-lg`}>
                    {mockResult.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-body">
                      Your Energy State
                    </p>
                    <h3 className={`text-2xl font-heading font-bold ${mockResult.color}`}>
                      {mockResult.energyState}
                    </h3>
                  </div>
                </div>

                {/* Energy score bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400 font-body">Energy Score</span>
                    <span className={`text-sm font-semibold font-body ${mockResult.color}`}>
                      {mockResult.score}/100
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${mockResult.gradient}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${mockResult.score}%` }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                    />
                  </div>
                </div>

                {/* Affirmation */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-widest text-purple-400 font-body mb-2">
                    ✦ Affirmation
                  </p>
                  <p className="text-white/90 font-body text-base leading-relaxed italic">
                    &ldquo;{mockResult.affirmation}&rdquo;
                  </p>
                </div>

                {/* Suggestions */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <ShoppingBag className="w-5 h-5 text-purple-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-body mb-1">
                        Suggested Product
                      </p>
                      <p className="text-white/80 font-body text-sm">
                        {mockResult.suggestedProduct}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                    <Leaf className="w-5 h-5 text-teal-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500 font-body mb-1">
                        Suggested Practice
                      </p>
                      <p className="text-white/80 font-body text-sm">
                        {mockResult.suggestedPractice}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-purple-500/50 text-purple-300 font-heading text-sm font-semibold tracking-wide hover:bg-purple-500/10 transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Save to Journal
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleReset}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 font-heading text-sm font-semibold tracking-wide hover:bg-white/10 transition-colors"
                  >
                    Try Again
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
