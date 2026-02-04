import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-br from-base via-surface to-base overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20"></div>
        <div className="absolute top-20 right-10 w-40 sm:w-72 h-40 sm:h-72 bg-highlight/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 sm:w-96 h-48 sm:h-96 bg-highlight/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-highlight/10 text-highlight px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="hidden sm:inline">AI Systems Engineering & Intelligence</span>
              <span className="sm:hidden">AI Systems</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
              Not Sure Where to Start
              <span className="block text-highlight mt-1 sm:mt-2">With AI?</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-primaryLight mb-8 leading-relaxed">
              You're not alone. Most businesses know AI matters but struggle with where to begin.{' '}
              <span className="font-semibold text-primary">We help you find the right starting point for your situation.</span>
            </p>

            {/* USP Strip */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 rounded-full bg-surface/80 text-primaryLight text-sm font-semibold border border-secondary">
                AI Launchpad Blueprint
              </span>
              <span className="px-4 py-2 rounded-full bg-surface/80 text-primaryLight text-sm font-semibold border border-secondary">
                Industry-Specific Playbooks
              </span>
              <span className="px-4 py-2 rounded-full bg-surface/80 text-primaryLight text-sm font-semibold border border-secondary">
                Measurable Outcomes First
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a
                href="/assessment"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-highlight text-white rounded-lg font-semibold hover:brightness-110 transition-all shadow-medium hover:shadow-large group text-sm sm:text-base"
              >
                Find Your Starting Point
                <svg className="w-4 sm:w-5 h-4 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-primaryLight text-primary rounded-lg font-semibold hover:border-highlight hover:text-highlight transition-all text-sm sm:text-base"
              >
                Talk to Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-primary/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-3xl font-bold text-primary mb-1">10+</p>
                <p className="text-sm text-primaryLight font-medium">Projects Delivered</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-3xl font-bold text-primary mb-1">24/7</p>
                <p className="text-sm text-primaryLight font-medium">AI Support</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-3xl font-bold text-primary mb-1">40%</p>
                <p className="text-sm text-primaryLight font-medium">Cost Savings</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Interactive Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Main Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-surface rounded-2xl shadow-large p-8 border border-secondary glow-border"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-highlight/15 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary mb-2">Did you know?</h3>
                  <p className="text-sm text-primaryLight leading-relaxed">
                    AI can process documents <span className="font-bold text-highlight">100x faster</span> than humans while maintaining{' '}
                    <span className="font-bold text-highlight">99% accuracy</span>
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-3">
                <a href="/assessment" className="block p-4 bg-base/60 rounded-lg hover:bg-base/80 transition-colors group border border-secondary">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary mb-1">AI Starting Point Finder</p>
                      <p className="text-sm text-primaryLight">Take quick assessment →</p>
                    </div>
                    <svg className="w-5 h-5 text-primaryLight group-hover:text-highlight group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>

                <a href="/case-studies" className="block p-4 bg-base/60 rounded-lg hover:bg-base/80 transition-colors group border border-secondary">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary mb-1">Real Results, Real Impact</p>
                      <p className="text-sm text-primaryLight">View case studies →</p>
                    </div>
                    <svg className="w-5 h-5 text-primaryLight group-hover:text-highlight group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
              className="absolute -top-4 -right-4 bg-highlight text-base px-4 py-2 rounded-full text-sm font-bold shadow-large"
            >
              Free Consultation
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
