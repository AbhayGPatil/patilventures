import { motion } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    category: 'Healthcare',
    title: 'Healthcare Document Automation',
    client: 'Regional Hospital Network',
    challenge: 'Manual patient intake and insurance verification taking 3+ days',
    solution: 'AI-powered document processing with automated data extraction',
    quote: 'The transformation was remarkable. What took days now takes hours.',
    quoteAuthor: 'Chief Operations Officer',
    results: [
      { metric: '85%', label: 'Faster Processing' },
      { metric: '95%', label: 'Accuracy Rate' },
      { metric: '$2.4M', label: 'Annual Savings' },
    ],
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    id: 2,
    category: 'Finance',
    title: 'Loan Processing Automation',
    client: 'Mid-Size Credit Union',
    challenge: 'Slow loan approval process losing customers to faster competitors',
    solution: 'End-to-end loan processing with AI-powered credit analysis',
    quote: 'We went from losing deals to winning them because of speed.',
    quoteAuthor: 'VP of Lending',
    results: [
      { metric: '60%', label: 'Cost Reduction' },
      { metric: '4x', label: 'Faster Approval' },
      { metric: '35%', label: 'More Applications' },
    ],
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    id: 3,
    category: 'Retail',
    title: 'Retail Inventory Intelligence',
    client: 'E-commerce Platform',
    challenge: 'Stockouts and overstock costing millions in lost revenue',
    solution: 'AI demand forecasting with automated inventory optimization',
    quote: 'Finally, we can predict demand instead of reacting to it.',
    quoteAuthor: 'Director of Operations',
    results: [
      { metric: '3x', label: 'Faster Decisions' },
      { metric: '40%', label: 'Less Stockouts' },
      { metric: '$1.8M', label: 'Inventory Savings' },
    ],
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 bg-gradient-to-br from-base to-surface text-primary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 leading-tight">
            Real Results, <span className="text-primaryLight">Real Impact</span>
          </h2>
          <p className="text-lg text-primaryLight max-w-2xl mx-auto leading-relaxed">
            See how businesses across industries have transformed their operations with our AI solutions.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-surface border border-secondary rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-300 group cursor-pointer"
            >
              {/* Icon header */}
              <div className="h-48 bg-gradient-to-br from-highlight/15 to-base/40 flex items-center justify-center text-highlight group-hover:scale-110 transition-transform duration-300">
                {study.icon}
              </div>

              {/* Content */}
              <div className="p-10">
                <div className="mb-6">
                  <span className="text-xs font-bold text-highlight uppercase tracking-widest mb-3 block">
                    {study.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{study.title}</h3>
                  <p className="text-sm text-primaryLight font-semibold">{study.client}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="space-y-5 mb-8 pb-8 border-b border-secondary">
                  <div>
                    <p className="text-xs text-highlight font-bold uppercase tracking-widest mb-2">Challenge</p>
                    <p className="text-sm text-primaryLight leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs text-highlight font-bold uppercase tracking-widest mb-2">Solution</p>
                    <p className="text-sm text-primaryLight leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-8 pb-8 border-b border-secondary">
                  <p className="text-sm italic text-primaryLight mb-2 leading-relaxed">"{study.quote}"</p>
                  <p className="text-xs font-bold text-highlight uppercase tracking-wider">— {study.quoteAuthor}</p>
                </div>

                {/* Results */}
                <div className="space-y-4 mb-8">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm text-primaryLight font-medium">{result.label}</span>
                      <span className="text-2xl font-bold text-highlight">{result.metric}</span>
                    </div>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="/case-studies"
                  className="w-full block px-4 py-3 border-2 border-highlight text-highlight font-semibold rounded-full text-sm text-center hover:bg-base/60 transition-colors duration-200"
                >
                  Read Full Case Study →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a href="/case-studies" className="inline-block px-10 py-3.5 bg-highlight text-base font-semibold rounded-full hover:shadow-lg transition-all duration-200 text-white">
            View All Case Studies
          </a>
        </motion.div>
      </div>
    </section>
  );
}
