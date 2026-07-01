'use client';

import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { Sparkles, Send, Bot, User } from 'lucide-react';

interface ChatMessage {
  id: number;
  role: 'user' | 'jyoti';
  content: string;
}

const sampleMessages: ChatMessage[] = [
  {
    id: 1,
    role: 'user',
    content: 'What crystal should I use for anxiety?',
  },
  {
    id: 2,
    role: 'jyoti',
    content:
      'For anxiety, I recommend Amethyst — it connects to your Third Eye and Crown chakras, calming the mind and promoting inner peace. Pair it with deep breathing for best results. 💜',
  },
  {
    id: 3,
    role: 'user',
    content: 'How do I cleanse it?',
  },
];

const messageVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.4,
      duration: 0.5,
      ease: [0, 0, 0.2, 1] as const,
    },
  }),
};

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      className="flex items-start gap-3"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-mystic-600 to-spirit-600 flex items-center justify-center">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.06]">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block w-2 h-2 rounded-full bg-mystic-400"
              animate={{
                y: [0, -6, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function AIGuideTeaser() {
  const [inputValue, setInputValue] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-4 sm:px-6 bg-cosmic-950 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-mystic-400 text-sm font-body tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            SPIRITUAL AI
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="text-divine-400">✦</span> Meet Jyoti, Your AI
            Spiritual Guide
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-xl mx-auto">
            Ask about crystals, chakras, astrology, meditation, and your
            spiritual path
          </p>
        </motion.div>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl overflow-hidden shadow-2xl shadow-mystic-500/10">
            {/* Chat header */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/[0.06] bg-white/[0.02]">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mystic-600 to-spirit-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-cosmic-900" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm font-body">
                  Jyoti AI
                </p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-body">
                    Online
                  </span>
                </div>
              </div>
              <div className="ml-auto">
                <Sparkles className="w-5 h-5 text-mystic-400/50" />
              </div>
            </div>

            {/* Chat messages */}
            <div className="px-5 py-6 space-y-5 min-h-[320px]">
              {sampleMessages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  custom={index}
                  variants={messageVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  className={`flex items-start gap-3 ${
                    msg.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.role === 'jyoti'
                        ? 'bg-gradient-to-br from-mystic-600 to-spirit-600'
                        : 'bg-gradient-to-br from-divine-500 to-amber-600'
                    }`}
                  >
                    {msg.role === 'jyoti' ? (
                      <Bot className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-white" />
                    )}
                  </div>

                  {/* Message bubble */}
                  <div
                    className={`max-w-[80%] px-4 py-3 text-sm font-body leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-mystic-600/20 border border-mystic-500/20 rounded-2xl rounded-tr-sm text-gray-200'
                        : 'bg-white/[0.06] border border-white/[0.06] rounded-2xl rounded-tl-sm text-gray-300'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isInView && <TypingIndicator />}
            </div>

            {/* Input bar */}
            <div className="px-4 py-4 border-t border-white/[0.06] bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask your spiritual question..."
                  className="flex-1 bg-white/[0.05] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-gray-300 font-body placeholder:text-gray-500 focus:outline-none focus:border-mystic-500/40 focus:ring-1 focus:ring-mystic-500/20 transition-colors"
                />
                <button className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-r from-mystic-600 to-mystic-500 flex items-center justify-center text-white hover:shadow-lg hover:shadow-mystic-500/30 transition-all duration-300 hover:scale-105 active:scale-95">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 2.0, ease: 'easeOut' }}
          className="text-center mt-8"
        >
          <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mystic-500/10 border border-mystic-500/20 text-mystic-400 font-semibold font-body hover:bg-mystic-500/20 hover:border-mystic-500/30 transition-all duration-300">
            Open Full Guide
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
