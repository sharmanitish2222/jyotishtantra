'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Stars, Flame, Brain, Clock, IndianRupee } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  glowColor: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Astrology Consultation',
    description:
      'Unlock your birth chart with personalized Vedic & Western astrology reading',
    duration: '60 min',
    price: 1999,
    icon: Stars,
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/15 border-violet-500/20',
    glowColor: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]',
  },
  {
    id: 2,
    title: 'Energy Healing Session',
    description:
      'Reiki and chakra balancing to restore your vital energy flow',
    duration: '45 min',
    price: 1499,
    icon: Flame,
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/15 border-orange-500/20',
    glowColor: 'hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]',
  },
  {
    id: 3,
    title: 'Meditation & Breathwork',
    description:
      'Guided meditation and pranayama for inner peace and clarity',
    duration: '30 min',
    price: 999,
    icon: Brain,
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/15 border-cyan-500/20',
    glowColor: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-teal-400 mb-4">
            ✦ Divine Guidance ✦
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Sacred Services
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Expert guidance for your spiritual awakening
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className={`group glass-card relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 text-center transition-all duration-500 hover:border-white/20 hover:-translate-y-2 ${service.glowColor}`}
              >
                {/* Decorative corner glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-white/[0.03] to-transparent" />

                {/* Icon */}
                <div className="relative z-10 flex justify-center mb-6">
                  <div
                    className={`w-20 h-20 rounded-full ${service.iconBg} border flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
                  >
                    <IconComponent
                      className={`w-9 h-9 ${service.iconColor} transition-all duration-500 group-hover:drop-shadow-[0_0_12px_currentColor]`}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-heading text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
                  {service.description}
                </p>

                {/* Duration + Price */}
                <div className="relative z-10 flex items-center justify-center gap-6 mb-6 text-sm">
                  <span className="flex items-center gap-1.5 text-gray-300">
                    <Clock className="w-4 h-4 text-gray-500" />
                    {service.duration}
                  </span>
                  <span className="w-px h-4 bg-white/10" />
                  <span className="flex items-center gap-1 text-amber-400 font-semibold">
                    <IndianRupee className="w-3.5 h-3.5" />
                    {service.price.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* CTA Button */}
                <button className="relative z-10 w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_24px_rgba(124,58,237,0.4)] active:scale-[0.98] group/btn">
                  Book Now
                  <span className="inline-block ml-1 transition-transform group-hover/btn:translate-x-1">
                    →
                  </span>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
