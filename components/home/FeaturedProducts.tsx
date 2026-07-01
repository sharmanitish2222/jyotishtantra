'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ShoppingBag, Star, Sparkles, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  badge?: string;
  emoji: string;
  gradient: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Amethyst Cluster',
    price: 1299,
    category: 'Crystal Healing',
    rating: 4.9,
    badge: 'AI Recommended',
    emoji: '♦',
    gradient: 'from-purple-900 to-indigo-800',
  },
  {
    id: 2,
    name: 'Sacred Sage Bundle',
    price: 599,
    category: 'Cleansing',
    rating: 4.8,
    badge: 'Bestseller',
    emoji: '🌿',
    gradient: 'from-emerald-900 to-green-800',
  },
  {
    id: 3,
    name: 'Tibetan Singing Bowl',
    price: 2499,
    category: 'Meditation',
    rating: 4.9,
    emoji: '🔔',
    gradient: 'from-amber-900 to-yellow-800',
  },
  {
    id: 4,
    name: 'Rose Quartz Heart',
    price: 899,
    category: 'Love & Healing',
    rating: 4.7,
    badge: 'AI Recommended',
    emoji: '💎',
    gradient: 'from-pink-900 to-rose-800',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
  },
};

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [wishlisted, setWishlisted] = useState<Set<number>>(new Set());

  const toggleWishlist = (id: number) => {
    setWishlisted((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-purple-400 mb-4">
            <Sparkles className="w-4 h-4" />
            Handpicked for You
            <Sparkles className="w-4 h-4" />
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Sacred Collection
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Curated spiritual tools for your journey
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              className="group glass-card product-card rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] hover:-translate-y-1"
            >
              {/* Image Area */}
              <div
                className={`relative bg-gradient-to-br ${product.gradient} h-48 rounded-t-xl flex items-center justify-center overflow-hidden`}
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

                <span className="text-5xl drop-shadow-lg select-none">
                  {product.emoji}
                </span>

                {/* Wishlist Icon */}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-black/50 transition-colors"
                  aria-label={`Toggle wishlist for ${product.name}`}
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      wishlisted.has(product.id)
                        ? 'fill-rose-500 text-rose-500'
                        : 'text-white/70 hover:text-rose-400'
                    }`}
                  />
                </button>

                {/* Badge */}
                {product.badge && (
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm border ${
                      product.badge === 'AI Recommended'
                        ? 'bg-purple-500/30 border-purple-400/40 text-purple-200'
                        : 'bg-amber-500/30 border-amber-400/40 text-amber-200'
                    }`}
                  >
                    {product.badge === 'AI Recommended' && (
                      <Sparkles className="w-3 h-3 inline mr-1 -mt-0.5" />
                    )}
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-4 space-y-3">
                {/* Category Tag */}
                <span className="inline-block text-[11px] font-medium tracking-wider uppercase text-teal-400/80 bg-teal-500/10 px-2 py-0.5 rounded-md">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="font-heading text-base sm:text-lg font-semibold text-white leading-tight line-clamp-1">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-sm text-amber-300 font-medium">
                    {product.rating}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({Math.floor(Math.random() * 200 + 50)})
                  </span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-lg font-bold text-divine-400 text-amber-400">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-600/80 hover:bg-purple-500 text-white text-xs font-semibold transition-all duration-200 hover:shadow-[0_0_16px_rgba(124,58,237,0.4)] active:scale-95">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="/products"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-lg group/cta transition-colors"
          >
            View All Products
            <span className="inline-block transition-transform group-hover/cta:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
