'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useCallback, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'The AI guide helped me understand my Moon sign in ways no book ever could.',
    name: 'Priya S.',
    location: 'Mumbai',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'My amethyst cluster from JyotishTantra changed my meditation practice completely.',
    name: 'Rahul M.',
    location: 'Delhi',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'The horoscope reading was incredibly accurate and deeply personal.',
    name: 'Ananya K.',
    location: 'Bangalore',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'Jyoti AI is like having a spiritual mentor available 24/7.',
    name: 'Vikram P.',
    location: 'Pune',
    rating: 4,
  },
  {
    id: 5,
    quote:
      'The mood journal feature helped me track my energy patterns over months.',
    name: 'Meera R.',
    location: 'Chennai',
    rating: 5,
  },
  {
    id: 6,
    quote:
      'Beautiful products, fast delivery, and the AI recommendations were spot on.',
    name: 'Arjun T.',
    location: 'Hyderabad',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-transparent text-gray-600'
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Number of visible cards based on breakpoint (we'll use CSS to show/hide but track for dots)
  // On mobile 1, sm 2, lg 3 — we base logic on 1 for simplicity and let CSS handle multi-card display
  const totalSlides = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex((index + totalSlides) % totalSlides);
    },
    [totalSlides],
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  // Auto-scroll every 5 seconds, pause on hover
  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      goNext();
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, goNext]);

  // Compute which cards to show: wrap-around window of 3
  const getVisibleIndices = () => {
    const indices: number[] = [];
    for (let offset = 0; offset < 3; offset++) {
      indices.push((currentIndex + offset) % totalSlides);
    }
    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
            Words from Our Seekers
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-teal-400 mx-auto" />
        </motion.div>

        {/* Carousel container */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleIndices.map((tIdx, posIdx) => {
              const t = testimonials[tIdx];
              return (
                <motion.div
                  key={`${t.id}-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: posIdx * 0.1 }}
                  className={`testimonial-card relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between ${
                    posIdx >= 1 ? 'hidden sm:flex' : 'flex'
                  } ${posIdx >= 2 ? 'sm:hidden lg:flex' : ''}`}
                >
                  {/* Large Quote icon */}
                  <Quote className="absolute top-5 right-5 w-10 h-10 text-purple-400 opacity-20" />

                  {/* Quote text */}
                  <p className="text-white/85 font-body text-base leading-relaxed mb-6 relative z-10">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Bottom: rating + person */}
                  <div className="mt-auto">
                    <StarRating rating={t.rating} />
                    <div className="mt-3 flex items-center gap-3">
                      {/* Avatar placeholder */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-teal-400 flex items-center justify-center text-white font-heading font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-heading text-sm font-semibold">
                          {t.name}
                        </p>
                        <p className="text-gray-500 font-body text-xs">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 hover:bg-white/10 hover:text-white transition-colors z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 p-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 hover:bg-white/10 hover:text-white transition-colors z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? 'w-8 bg-gradient-to-r from-purple-500 to-teal-400'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
