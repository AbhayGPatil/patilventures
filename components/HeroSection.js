import { motion } from 'framer-motion';
import FloatingWords from './FloatingWords';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* Floating words overlay on larger screens, scattered across the right half */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <FloatingWords />
      </div>

      {/* Headline and CTA (anchored LEFT) */}
      <div className="relative z-10 max-w-xl mr-auto text-left md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6"
        >
          Create
          <br />
          <span className="text-primaryLight">Intelligent </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primaryLight max-w-md mb-8"
        >
          We build AI agents, generative models and web solutions that
          captivate and perform. Let’s shape the future together.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#services"
          className="inline-block bg-primaryLight text-base px-8 py-3 rounded-full text-white shadow hover:bg-primary transition-colors"
        >
          Explore Services
        </motion.a>
      </div>
    </section>
  );
}
