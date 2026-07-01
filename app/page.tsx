import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/home/Hero";
import AIGuideTeaser from "@/components/home/AIGuideTeaser";
import TrustStrip from "@/components/home/TrustStrip";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HoroscopeTeaser from "@/components/home/HoroscopeTeaser";
import Services from "@/components/home/Services";
import MoodCheckIn from "@/components/home/MoodCheckIn";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import EmailCapture from "@/components/home/EmailCapture";

export default function Home() {
  return (
    <main className="min-h-screen bg-cosmic-950 relative">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust Strip */}
      <TrustStrip />

      {/* Divider */}
      <div className="section-divider" />

      {/* AI Guide Teaser */}
      <section className="py-20 md:py-28 sacred-bg">
        <AIGuideTeaser />
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Featured Products */}
      <section className="py-20 md:py-28">
        <FeaturedProducts />
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Horoscope Teaser */}
      <section className="py-20 md:py-28 sacred-bg">
        <HoroscopeTeaser />
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Services */}
      <section className="py-20 md:py-28">
        <Services />
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Mood Check-In */}
      <section className="py-20 md:py-28 sacred-bg">
        <MoodCheckIn />
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <Testimonials />
      </section>

      {/* Divider */}
      <div className="section-divider" />

      {/* Blog Preview */}
      <section className="py-20 md:py-28 sacred-bg">
        <BlogPreview />
      </section>

      {/* Email Capture */}
      <EmailCapture />

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}
