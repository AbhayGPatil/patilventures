import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
        {/* Logo and title */}
        <div className="flex items-center space-x-2">
          {/* Increase logo size for better visibility on all screens */}
          <img src="/assets/logo.png" alt="Patil Ventures logo" className="h-14 w-auto md:h-14" />
          <a href="#top" className="text-2xl font-display font-bold text-primary">Patil Ventures</a>
        </div>
        {/* Navigation links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#hero" className="hover:text-highlight">Home</a>
          <a href="#services" className="hover:text-highlight">Services</a>
          <a href="#portfolio" className="hover:text-highlight">Solutions</a>
          <a href="#experience" className="hover:text-highlight">Impact</a>
          <a href="#testimonials" className="hover:text-highlight">Clients</a>
          <a href="#blogs" className="hover:text-highlight">Blog</a>
          {/* Removed Research section per user request */}
          <a href="#about" className="hover:text-highlight">About</a>
          <a href="#contact" className="hover:text-highlight">Contact</a>
        </div>
        {/* Mail contact */}
        <p className="hidden md:block text-xs text-primaryLight whitespace-nowrap">
          Reach us at: <a href="mailto:office@patilventures.digital" className="underline hover:text-highlight">office@patilventures.digital</a>
        </p>
      </div>
    </motion.nav>
  );
}