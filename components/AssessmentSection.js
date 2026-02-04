import { motion } from 'framer-motion';
import { useState } from 'react';

const assessments = [
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'New to AI',
    description: 'AI Starting Point Finder',
    details: 'Not sure where to begin? This quick assessment helps you understand if AI can help your business and where to start.',
    cta: 'Find AI Solution',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: 'Startups',
    description: 'Startup AI Accelerator',
    details: 'Moving fast with limited resources? Find the right AI approach for your stage without overengineering.',
    cta: 'Find AI Solution',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Growing Business',
    description: 'Operational Efficiency Analyzer',
    details: 'Identify cost and time leakage in your operations. See exactly where AI delivers the highest ROI.',
    cta: 'Find AI Solution',
  },
  {
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Enterprise',
    description: 'Enterprise AI Strategy Navigator',
    details: 'Assess readiness, identify governance gaps, and plan your enterprise AI journey strategically.',
    cta: 'Find AI Solution',
  },
];

export default function AssessmentSection() {
  return (
    <section id="assessment" className="py-24 bg-base text-primary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Not Sure Where to Start<br />
            <span className="text-primaryLight">With AI?</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primaryLight">Find Your AI Starting Point</h3>
            <p className="text-base text-primaryLight leading-relaxed">
              Not sure where to begin? Most businesses know AI matters but struggle with where to start. We help you find the right starting point for your situation.
            </p>
          </div>
        </motion.div>

        {/* Assessment Cards - Cleaner Layout */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {assessments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-surface border border-secondary rounded-2xl p-8 h-full hover:border-highlight hover:shadow-medium transition-all duration-300">
                <div className="text-highlight mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-lg font-bold mb-1 text-primary">{item.title}</h3>
                <p className="text-xs text-highlight font-semibold uppercase tracking-wider mb-4">{item.description}</p>
                <p className="text-sm text-primaryLight mb-6 leading-relaxed min-h-12">{item.details}</p>
                <button className="text-primaryLight hover:text-highlight font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200">
                  {item.cta} →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <a
            href="/assessment"
            className="px-10 py-3.5 bg-highlight text-base font-semibold rounded-full hover:shadow-lg transition-all duration-200 text-white"
          >
            Find Your Starting Point
          </a>
          <a
            href="/contact"
            className="px-10 py-3.5 border-2 border-primaryLight text-primary font-semibold rounded-full hover:border-highlight hover:text-highlight transition-colors duration-200"
          >
            Talk to Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
