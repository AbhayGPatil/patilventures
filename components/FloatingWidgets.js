import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingWidgets() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    if (showCalendly) {
      // Load Calendly script when modal opens
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [showCalendly]);

  return (
    <>
      {/* Floating Action Widgets - Bottom Right */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col gap-2 sm:gap-3">
        {/* Schedule Consultation Widget - Primary CTA */}
        <motion.button
          onClick={() => setShowCalendly(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-highlight text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-large font-semibold text-xs sm:text-sm flex items-center gap-2 hover:brightness-110 transition-colors whitespace-nowrap"
        >
          <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          SCHEDULE
        </motion.button>

        {/* Guide Me Widget */}
        <motion.a
          href="/assessment"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-surface text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-large font-semibold text-xs sm:text-sm flex items-center gap-2 border border-secondary hover:border-highlight transition-colors whitespace-nowrap"
        >
          <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <span className="hidden sm:inline">GUIDE ME</span>
          <span className="sm:hidden">GUIDE</span>
        </motion.a>

        {/* AI Tools Widget */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-base text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-large font-semibold text-xs sm:text-sm flex items-center gap-2 border border-secondary hover:border-highlight transition-colors whitespace-nowrap"
        >
          <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="hidden sm:inline">AI TOOLS</span>
          <span className="sm:hidden">TOOLS</span>
        </motion.button>

        {/* Contact Widget */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-base text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-large font-semibold text-xs sm:text-sm flex items-center gap-2 border border-secondary hover:border-highlight transition-colors whitespace-nowrap"
        >
          <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="hidden sm:inline">TALK TO US</span>
          <span className="sm:hidden">TALK</span>
        </motion.a>
      </div>

      {/* AI Tools Popup */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="fixed bottom-72 right-8 z-50 bg-surface rounded-2xl shadow-large p-6 w-80 border border-secondary"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-primary">AI Tools & Resources</h3>
            <button onClick={() => setIsOpen(false)} className="text-primaryLight hover:text-highlight">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-3">
            <a href="/assessment" className="block p-3 rounded-lg hover:bg-base/60 transition-colors border border-secondary">
              <p className="font-semibold text-sm text-primary">AI Starting Point Finder</p>
              <p className="text-xs text-primaryLight mt-1">Find your perfect AI solution</p>
            </a>
            <a href="/services" className="block p-3 rounded-lg hover:bg-base/60 transition-colors border border-secondary">
              <p className="font-semibold text-sm text-primary">Service Explorer</p>
              <p className="text-xs text-primaryLight mt-1">Browse all AI services</p>
            </a>
            <a href="/case-studies" className="block p-3 rounded-lg hover:bg-base/60 transition-colors border border-secondary">
              <p className="font-semibold text-sm text-primary">ROI Calculator</p>
              <p className="text-xs text-primaryLight mt-1">Estimate your AI impact</p>
            </a>
          </div>
        </motion.div>
      )}

      {/* Top Banner - "Did you know?" */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-highlight to-highlight/70 text-base py-1.5 sm:py-2 px-3 sm:px-4 text-center text-xs sm:text-sm font-medium"
      >
        <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          <svg className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="hidden sm:inline">Did you know? AI can process documents 100x faster than humans while maintaining 99% accuracy</span>
          <span className="sm:hidden">AI processes documents 100x faster with 99% accuracy</span>
        </div>
      </motion.div>

      {/* Calendly Booking Modal */}
      {showCalendly && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCalendly(false)}
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden border border-secondary/50"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-secondary/30 bg-gradient-to-r from-highlight/5 to-transparent">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Schedule Consultation</h2>
              <button
                onClick={() => setShowCalendly(false)}
                className="text-primaryLight hover:text-highlight transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Calendly Widget Container */}
            <div className="p-4 sm:p-6 max-h-[calc(90vh-100px)] overflow-y-auto">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/team-patilventure/1-1-consult"
                style={{ minWidth: '100%', height: '600px' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
