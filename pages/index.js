import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AssessmentSection from '../components/AssessmentSection';
import IntelligenceSection from '../components/IntelligenceSection';
import IndustrySection from '../components/IndustrySection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import FloatingWidgets from '../components/FloatingWidgets';

export default function Home() {
  return (
    <div id="top">
      <Head>
        <title>Patil Ventures — Enterprise AI Systems Engineering</title>
        <meta
          name="description"
          content="Design, deploy, and steward agentic AI systems that transform business operations. Web applications, AI agents, and intelligent experiences with unrivaled design and engineering."
        />
      </Head>
      <Navbar />
      <FloatingWidgets />
      <main>
        <HeroSection />
        <AssessmentSection />
        <IntelligenceSection />
        <IndustrySection />
        <CaseStudiesSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}