import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import PortfolioSection from '../components/PortfolioSection';
import AboutSection from '../components/AboutSection';
import AdvertiseSection from '../components/AdvertiseSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import RobotOverlay from '../components/RobotOverlay';
import TestimonialsSection from '../components/TestimonialsSection';
import BlogsSection from '../components/BlogsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div id="top">
      <Head>
        <title>Patil Ventures — Intelligent Experiences</title>
        <meta
          name="description"
          content="Patil Ventures crafts AI agents and next‑generation web experiences with unrivaled design and engineering."
        />
      </Head>
      <Navbar />
      <RobotOverlay />
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <AdvertiseSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonialsSection />
        <BlogsSection />
        <AboutSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}