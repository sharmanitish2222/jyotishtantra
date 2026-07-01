'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, ArrowRight, BookOpen } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  readTime: string;
  tag: string;
  tagColor: string;
  gradient: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: '7 Crystals Every Beginner Should Own',
    excerpt:
      'Start your crystal journey with these essential stones that every healer and seeker should have in their collection for balance and protection.',
    readTime: '5 min read',
    tag: 'Crystal Healing',
    tagColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    gradient: 'from-purple-700 via-violet-600 to-fuchsia-600',
  },
  {
    id: 2,
    title: 'Understanding Your Moon Sign: A Complete Guide',
    excerpt:
      'Your Moon sign reveals your emotional world and inner self. Learn how to decode this powerful aspect of your astrological chart.',
    readTime: '8 min read',
    tag: 'Astrology',
    tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
    gradient: 'from-indigo-700 via-blue-600 to-cyan-600',
  },
  {
    id: 3,
    title: 'Morning Meditation Routine for Inner Peace',
    excerpt:
      'Discover a simple yet powerful morning meditation routine that will ground your energy and set a peaceful tone for the entire day.',
    readTime: '4 min read',
    tag: 'Meditation',
    tagColor: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
    gradient: 'from-teal-700 via-emerald-600 to-green-600',
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
    transition: { duration: 0.55, ease: [0, 0, 0.2, 1] as const },
  },
};

export default function BlogPreview() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-teal-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3">
            Sacred Wisdom Blog
          </h2>
          <p className="text-gray-400 font-body text-base sm:text-lg max-w-lg mx-auto">
            Explore guides, insights, and spiritual knowledge
          </p>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-500 to-teal-400 mx-auto mt-5" />
        </motion.div>

        {/* Blog cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              className="group glass-card rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-colors duration-300"
            >
              {/* Gradient image area */}
              <div
                className={`relative h-40 bg-gradient-to-br ${post.gradient} flex items-center justify-center overflow-hidden`}
              >
                <BookOpen className="w-12 h-12 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5" />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Tag badge */}
                <span
                  className={`inline-block text-xs font-body font-medium px-3 py-1 rounded-full border ${post.tagColor} mb-3`}
                >
                  {post.tag}
                </span>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-purple-300 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 font-body text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-gray-500 text-xs font-body">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <button className="flex items-center gap-1 text-purple-400 text-sm font-heading font-semibold hover:text-purple-300 transition-colors group/link">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-purple-500/50 text-purple-300 font-heading text-sm font-semibold tracking-wide hover:bg-purple-500/10 transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
