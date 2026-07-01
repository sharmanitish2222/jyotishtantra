'use client';

import {
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

/* Inline SVG social icons (lucide-react doesn't include branded icons) */
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);

interface FooterLink {
  label: string;
  href: string;
}

const quickLinks: FooterLink[] = [
  { label: 'Shop', href: '/shop' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
];

const aiFeatures: FooterLink[] = [
  { label: 'AI Guide', href: '/ai-guide' },
  { label: 'Horoscope', href: '/horoscope' },
  { label: 'Mood Journal', href: '/mood-journal' },
  { label: 'Recommendations', href: '/recommendations' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/jyotishtantra',
    icon: InstagramIcon,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/jyotishtantra',
    icon: TwitterIcon,
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@jyotishtantra',
    icon: YoutubeIcon,
  },
] as const;

const paymentMethods = ['Razorpay', 'Stripe', 'UPI'] as const;

export default function Footer() {
  return (
    <footer className="relative bg-cosmic-950">
      {/* Top gradient border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-mystic-500/60 to-transparent" />

      {/* ──────────── Main Grid ──────────── */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* ── Column 1: Brand ── */}
        <div className="space-y-5">
          <a href="/" className="inline-block select-none">
            <span className="font-heading text-2xl tracking-wide text-divine-400">
              ✦ JyotishTantra
            </span>
          </a>
          <p className="max-w-xs font-body text-sm leading-relaxed text-white/50">
            Illuminate your spiritual journey with curated products, AI-powered
            guidance, and a community rooted in cosmic wisdom.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-1">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-mystic-500/50 hover:bg-mystic-500/10 hover:text-mystic-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Column 2: Quick Links ── */}
        <div>
          <h4 className="mb-4 font-heading text-sm uppercase tracking-widest text-white/80">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body text-sm text-white/50 transition-colors hover:text-divine-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 3: AI Features ── */}
        <div>
          <h4 className="mb-4 font-heading text-sm uppercase tracking-widest text-white/80">
            AI Features
          </h4>
          <ul className="space-y-3">
            {aiFeatures.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body text-sm text-white/50 transition-colors hover:text-divine-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Column 4: Connect ── */}
        <div>
          <h4 className="mb-4 font-heading text-sm uppercase tracking-widest text-white/80">
            Connect
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-body text-sm text-white/50 transition-colors hover:text-divine-400"
              >
                <Phone className="h-4 w-4 shrink-0" />
                WhatsApp: +91 99999 99999
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@jyotishtantra.in"
                className="inline-flex items-center gap-2.5 font-body text-sm text-white/50 transition-colors hover:text-divine-400"
              >
                <Mail className="h-4 w-4 shrink-0" />
                hello@jyotishtantra.in
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/jyotishtantra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-body text-sm text-white/50 transition-colors hover:text-divine-400"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" />
                @jyotishtantra
              </a>
            </li>
            <li className="inline-flex items-start gap-2.5 font-body text-sm text-white/50">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Mumbai, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ──────────── Bottom Bar ──────────── */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          {/* Copyright & Legal */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
            <span className="font-body text-xs text-white/40">
              © 2024 JyotishTantra. All rights reserved.
            </span>
            <a
              href="/privacy"
              className="font-body text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="font-body text-xs text-white/40 transition-colors hover:text-white/70"
            >
              Terms of Service
            </a>
          </div>

          {/* Payment Method Badges */}
          <div className="flex items-center gap-3">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-body text-[11px] font-medium text-white/40"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
