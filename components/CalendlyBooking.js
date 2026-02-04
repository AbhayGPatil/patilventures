import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function CalendlyBooking() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Load Calendly script when modal opens
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center justify-center px-8 py-4 bg-highlight text-base font-bold rounded-full hover:shadow-lg transition-all duration-200 text-white"
      >
        Schedule Consultation
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </motion.button>

      {/* Calendly Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden border border-secondary"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-secondary">
              <h2 className="text-2xl font-bold text-primary">Schedule Your Consultation</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primaryLight hover:text-highlight transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Calendly Widget Container */}
            <div className="p-6 max-h-[600px] overflow-y-auto">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/team-patilventure/1-1-consult"
                style={{ minWidth: '320px', height: '650px' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
