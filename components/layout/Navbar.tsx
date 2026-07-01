'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Sparkles, User } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'Shop', href: '/shop' },
  { label: 'Services', href: '/services' },
  { label: 'Horoscope', href: '/horoscope' },
  { label: 'AI Guide', href: '/ai-guide' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

const menuOverlayVariants = {
  hidden: { opacity: 0, y: '-100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: '-100%',
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const linkStaggerContainer = {
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35 } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ──────────── Desktop / Mobile Top Bar ──────────── */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'bg-cosmic-950/80 backdrop-blur-xl shadow-lg shadow-purple-950/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-1.5 select-none">
            <span className="font-heading text-2xl tracking-wide text-divine-400">
              ✦ JyotishTantra
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group relative font-body text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-mystic-400 to-divine-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right Actions ── */}
          <div className="flex items-center gap-3">
            {/* Ask Jyoti CTA */}
            <a
              href="/ai-guide"
              className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-mystic-500 to-purple-600 px-5 py-2 font-body text-sm font-semibold text-white shadow-lg shadow-mystic-500/30 transition-all duration-300 hover:shadow-mystic-500/50 hover:brightness-110 sm:inline-flex"
            >
              <Sparkles className="h-4 w-4" />
              Ask Jyoti ✦
            </a>

            {/* Cart */}
            <a
              href="/cart"
              className="relative inline-flex items-center justify-center rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Shopping cart"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white ring-2 ring-cosmic-950">
                3
              </span>
            </a>

            {/* User / Login */}
            <a
              href="/account"
              className="inline-flex items-center justify-center rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ──────────── Mobile Full-Screen Overlay ──────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col bg-cosmic-950/95 backdrop-blur-2xl lg:hidden"
          >
            {/* Spacer so links don't sit under the top bar */}
            <div className="h-20 shrink-0" />

            <motion.ul
              variants={linkStaggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-1 flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.li key={link.label} variants={linkItemVariants}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-heading text-3xl tracking-wider text-white/80 transition-colors hover:text-divine-400"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}

              {/* CTA inside mobile menu */}
              <motion.li variants={linkItemVariants}>
                <a
                  href="/ai-guide"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-mystic-500 to-purple-600 px-8 py-3 font-body text-base font-semibold text-white shadow-lg shadow-mystic-500/30 transition-all hover:shadow-mystic-500/50 hover:brightness-110"
                >
                  <Sparkles className="h-5 w-5" />
                  Ask Jyoti ✦
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
