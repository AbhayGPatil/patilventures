import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

const caseStudiesList = [
  {
    id: 1,
    category: 'Healthcare',
    title: 'Healthcare Document Automation',
    client: 'Regional Hospital Network',
    image: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    challenge: 'Manual patient intake and insurance verification taking 3+ days, causing delays and errors',
    solution: 'AI-powered document processing with automated data extraction and verification',
    quote: 'The transformation was remarkable. What took days now takes hours.',
    author: 'Chief Operations Officer',
    results: [
      { metric: '85%', label: 'Faster Processing' },
      { metric: '95%', label: 'Accuracy Rate' },
      { metric: '$2.4M', label: 'Annual Savings' },
    ],
    details: 'Implementation took 6 weeks. The hospital processed 50,000+ patient records with 99.2% accuracy in the first month.',
  },
  {
    id: 2,
    category: 'Finance',
    title: 'Loan Processing Automation',
    client: 'Mid-Size Credit Union',
    image: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    challenge: 'Slow loan approval process losing customers to faster competitors',
    solution: 'End-to-end loan processing with AI-powered credit analysis and document verification',
    quote: 'We went from losing deals to winning them because of speed.',
    author: 'VP of Lending',
    results: [
      { metric: '60%', label: 'Cost Reduction' },
      { metric: '4x', label: 'Faster Approval' },
      { metric: '35%', label: 'More Applications' },
    ],
    details: 'Average approval time reduced from 5 days to 1.2 days. Customer satisfaction increased by 42%.',
  },
  {
    id: 3,
    category: 'Retail',
    title: 'Retail Inventory Intelligence',
    client: 'E-commerce Platform',
    image: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    challenge: 'Stockouts and overstock costing millions in lost revenue and wasted inventory',
    solution: 'AI demand forecasting with automated inventory optimization and real-time analytics',
    quote: 'Finally, we can predict demand instead of reacting to it.',
    author: 'Director of Operations',
    results: [
      { metric: '3x', label: 'Faster Decisions' },
      { metric: '40%', label: 'Less Stockouts' },
      { metric: '$1.8M', label: 'Inventory Savings' },
    ],
    details: 'Forecast accuracy improved to 94%. Inventory carrying costs decreased by 31% while sales increased 18%.',
  },
  {
    id: 4,
    category: 'Insurance',
    title: 'Claims Processing Acceleration',
    client: 'Large Insurance Provider',
    image: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    challenge: 'Manual claims processing creating 30-day average resolution time and high operational costs',
    solution: 'Intelligent document processing and automated validation with fraud detection',
    quote: 'We reduced claims processing time from 30 days to 3 days.',
    author: 'Chief Technology Officer',
    results: [
      { metric: '90%', label: 'Time Reduction' },
      { metric: '98%', label: 'Fraud Detection' },
      { metric: '$3.2M', label: 'Annual Savings' },
    ],
    details: 'Processed 100,000+ claims in first quarter with zero critical errors. Customer satisfaction: 98%.',
  },
];

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(0);

  return (
    <div className="min-h-screen bg-base text-primary">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 border-b border-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
              Real Results, <span className="text-highlight">Real Impact</span>
            </h1>
            <p className="text-xl text-primaryLight max-w-3xl mx-auto">
              See how businesses across industries have transformed their operations with our AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {caseStudiesList.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelectedStudy(idx)}
                className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                  selectedStudy === idx
                    ? 'bg-surface border-highlight shadow-2xl glow-border'
                    : 'bg-surface border-secondary hover:border-highlight'
                }`}
              >
                <div className="h-48 bg-gradient-to-br from-highlight/15 to-base/50 flex items-center justify-center text-highlight">
                  {study.image}
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-highlight uppercase tracking-widest">{study.category}</span>
                  <h3 className="text-2xl font-bold mt-2 mb-2">{study.title}</h3>
                  <p className="text-primaryLight text-sm mb-4">{study.client}</p>
                  <p className="text-primaryLight mb-6 line-clamp-2">{study.challenge}</p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-secondary">
                    {study.results.map((r, i) => (
                      <div key={i} className="text-center">
                        <p className="text-highlight font-bold text-lg">{r.metric}</p>
                        <p className="text-xs text-primaryLight mt-1">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed View */}
          <motion.div
            key={selectedStudy}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-surface border border-secondary rounded-2xl overflow-hidden shadow-medium"
          >
              <div className="h-64 bg-gradient-to-r from-highlight/15 to-base/40 flex items-center justify-center text-highlight">
              {caseStudiesList[selectedStudy].image}
            </div>
            
            <div className="p-12">
              <span className="text-xs font-bold text-highlight uppercase tracking-widest">
                {caseStudiesList[selectedStudy].category}
              </span>
              <h2 className="text-4xl font-bold mt-3 mb-2">{caseStudiesList[selectedStudy].title}</h2>
              <p className="text-primaryLight font-semibold mb-8">{caseStudiesList[selectedStudy].client}</p>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-lg font-bold text-highlight mb-4">Challenge</h3>
                  <p className="text-primaryLight leading-relaxed mb-8">{caseStudiesList[selectedStudy].challenge}</p>
                  
                  <h3 className="text-lg font-bold text-highlight mb-4">Solution</h3>
                  <p className="text-primaryLight leading-relaxed">{caseStudiesList[selectedStudy].solution}</p>
                </div>

                <div>
                  <div className="bg-base/60 rounded-2xl p-8 mb-6 border border-secondary">
                    <p className="text-sm text-primaryLight mb-2">Client Quote</p>
                    <p className="text-xl font-semibold italic text-primary mb-4">"{caseStudiesList[selectedStudy].quote}"</p>
                    <p className="text-sm font-bold text-highlight">— {caseStudiesList[selectedStudy].author}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {caseStudiesList[selectedStudy].results.map((r, i) => (
                      <div key={i} className="bg-base/60 rounded-2xl p-4 text-center border border-secondary">
                        <p className="text-highlight font-bold text-2xl mb-1">{r.metric}</p>
                        <p className="text-xs text-primaryLight">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-secondary">
                <h3 className="text-lg font-bold mb-4">Implementation Details</h3>
                <p className="text-primaryLight leading-relaxed mb-8">{caseStudiesList[selectedStudy].details}</p>
                
                <a
                  href="/contact"
                  className="px-8 py-3 bg-highlight text-base font-bold rounded-full hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center"
                >
                  Get Similar Results
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
