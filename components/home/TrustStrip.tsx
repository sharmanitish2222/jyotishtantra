'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Users, Package, Star, Heart } from 'lucide-react';

interface Metric {
  icon: React.ReactNode;
  target: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const metrics: Metric[] = [
  {
    icon: <Users className="w-6 h-6 text-mystic-400" />,
    target: 5000,
    suffix: '+',
    label: 'Happy Seekers',
  },
  {
    icon: <Package className="w-6 h-6 text-mystic-400" />,
    target: 200,
    suffix: '+',
    label: 'Sacred Products',
  },
  {
    icon: <Star className="w-6 h-6 text-divine-400 fill-divine-400" />,
    target: 4.8,
    suffix: '',
    label: 'Star Rating',
    decimals: 1,
  },
  {
    icon: <Heart className="w-6 h-6 text-mystic-400" />,
    target: 50,
    suffix: '+',
    label: 'Healing Sessions',
  },
];

function AnimatedCounter({
  target,
  suffix,
  decimals = 0,
  isInView,
}: {
  target: number;
  suffix: string;
  decimals?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    const increment = target / totalFrames;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      // Ease-out cubic for smooth deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = easedProgress * target;

      if (currentFrame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(currentValue);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [isInView, target]);

  const displayValue =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString();

  return (
    <span className="text-3xl md:text-4xl font-heading font-bold text-white">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function TrustStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-12 md:py-16 px-4 sm:px-6 bg-cosmic-950">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-5xl mx-auto"
      >
        <div className="glass-card rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 shadow-2xl shadow-mystic-500/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="relative flex flex-col items-center text-center">
                {/* Divider (desktop only, not on first item) */}
                {index > 0 && (
                  <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-mystic-500/20 to-transparent" />
                )}

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: 'easeOut',
                  }}
                  className="mb-3 p-3 rounded-xl bg-mystic-500/10 border border-mystic-500/10"
                >
                  {metric.icon}
                </motion.div>

                <AnimatedCounter
                  target={metric.target}
                  suffix={metric.suffix}
                  decimals={metric.decimals}
                  isInView={isInView}
                />

                <span className="mt-1 text-sm text-gray-400 font-body tracking-wide">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
