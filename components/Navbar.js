import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when scrolling
    const handleScroll = () => setMobileMenuOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/80 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap md:flex-nowrap justify-between items-center gap-2 sm:gap-4">
        {/* Logo and title */}
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Sapience Agentic Systems logo" className="h-10 sm:h-12 md:h-14 w-auto" />
          <a href="#top" className="text-lg sm:text-2xl font-display font-bold text-primary hidden sm:inline">Sapience</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary hover:text-highlight transition-colors p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation links */}
        <div className="hidden md:flex space-x-4 lg:space-x-6 text-xs lg:text-sm font-medium">
          <a href="/#hero" className="hover:text-highlight transition">Home</a>
          <a href="/#assessment" className="hover:text-highlight transition">Assessment</a>
          <a href="/#services" className="hover:text-highlight transition">Services</a>
          <a href="/#industries" className="hover:text-highlight transition">Industries</a>
          <a href="/#case-studies" className="hover:text-highlight transition">Case Studies</a>
          <a href="/#cta" className="hover:text-highlight transition">Solutions</a>
          <a href="/contact" className="hover:text-highlight transition">Contact</a>
        </div>

        {/* Desktop Mail contact */}
        <p className="hidden lg:block text-xs text-primaryLight whitespace-nowrap">
          Reach us at: <a href="mailto:sapiencehq@gmail.com" className="underline hover:text-highlight">sapiencehq@gmail.com</a>
        </p>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-base/95 backdrop-blur border-t border-secondary"
        >
          <div className="px-4 py-4 space-y-3">
            <a href="/#hero" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-primary hover:text-highlight transition py-2">Home</a>
            <a href="/#assessment" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-primary hover:text-highlight transition py-2">Assessment</a>
            <a href="/#services" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-primary hover:text-highlight transition py-2">Services</a>
            <a href="/#industries" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-primary hover:text-highlight transition py-2">Industries</a>
            <a href="/#case-studies" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-primary hover:text-highlight transition py-2">Case Studies</a>
            <a href="/#cta" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-primary hover:text-highlight transition py-2">Solutions</a>
            <a href="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm text-primary hover:text-highlight transition py-2">Contact</a>
            <a href="mailto:sapiencehq@gmail.com" className="block text-xs text-primaryLight hover:text-highlight transition py-2 border-t border-secondary pt-3 mt-2">
              office@patilventures.digital
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}