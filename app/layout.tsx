import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JyotishTantra — AI-Powered Spiritual Guidance & Sacred Products",
  description:
    "Discover crystals, unlock your birth chart, and connect with our AI spiritual guide Jyoti. Shop sacred products, book healing sessions, and explore your cosmic blueprint.",
  keywords: [
    "spiritual products",
    "crystals",
    "astrology",
    "birth chart",
    "AI spiritual guide",
    "chakra healing",
    "meditation",
    "tarot",
    "numerology",
    "vedic astrology",
  ],
  openGraph: {
    title: "JyotishTantra — Illuminate Your Spiritual Journey",
    description:
      "AI-powered spiritual guidance, sacred products, and personalized horoscope readings.",
    type: "website",
    url: "https://jyotishtantra.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${cinzel.variable} font-body antialiased bg-cosmic-950 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
