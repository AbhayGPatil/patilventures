import { motion } from 'framer-motion';

const industries = [
  {
    name: 'Healthcare',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    description: 'Transform patient care with AI-powered diagnostics and intelligent workflows',
    stats: ['85% Faster Processing', '$2.4M Annual Savings', '95% Accuracy Rate'],
    useCases: [
      { title: 'Patient Intake Automation', result: '75% faster registration' },
      { title: 'Medical Document Processing', result: '95% accuracy rate' },
      { title: 'Clinical Decision Support', result: '30% better diagnoses' },
      { title: 'Insurance Verification', result: 'Real-time eligibility' },
      { title: 'Appointment Scheduling', result: '40% fewer no-shows' },
      { title: 'Lab Result Analysis', result: 'Instant interpretations' },
    ],
  },
  {
    name: 'Finance & Fintech',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Accelerate lending and financial operations with intelligent automation',
    stats: ['60% Cost Reduction', '4x Faster Approval', '35% More Applications'],
    useCases: [
      { title: 'Loan Processing Automation', result: '4x faster approvals' },
      { title: 'Credit Risk Analysis', result: '85% more accurate' },
      { title: 'Fraud Detection', result: '99.2% detection rate' },
      { title: 'Document Verification', result: '90% automation' },
      { title: 'Customer Onboarding', result: '50% faster KYC' },
      { title: 'Portfolio Management', result: 'Real-time insights' },
    ],
  },
  {
    name: 'Retail & E-commerce',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: 'Optimize inventory and customer experience with predictive AI',
    stats: ['3x Faster Decisions', '40% Less Stockouts', '$1.8M Inventory Savings'],
    useCases: [
      { title: 'Demand Forecasting', result: 'Predict instead of react' },
      { title: 'Inventory Optimization', result: '40% less stockouts' },
      { title: 'Customer Personalization', result: '35% higher conversion' },
      { title: 'Price Optimization', result: '18% revenue increase' },
      { title: 'Supply Chain Prediction', result: 'Real-time visibility' },
      { title: 'Return Prediction', result: '85% accuracy' },
    ],
  },
  {
    name: 'Insurance',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    description: 'Streamline claims and underwriting with intelligent automation',
    stats: ['72% Faster Claims', '90% Cost Reduction', '$3.2M Annual Savings'],
    useCases: [
      { title: 'Claims Processing', result: '72% faster resolution' },
      { title: 'Fraud Detection', result: '98% detection rate' },
      { title: 'Underwriting Automation', result: '80% of cases auto-approved' },
      { title: 'Document Extraction', result: '98% accuracy' },
      { title: 'Risk Assessment', result: 'Real-time evaluation' },
      { title: 'Policy Renewal', result: '55% automated' },
    ],
  },
];

export default function IndustrySection() {
  return (
    <section id="industries" className="py-24 bg-base text-primary">
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
            AI Solutions Tailored to <br />
            <span className="text-primaryLight">Your Industry</span>
          </h2>
          <p className="text-lg text-primaryLight max-w-2xl mx-auto leading-relaxed">
            We understand the unique challenges of your sector. Explore our proven solutions with real results from businesses like yours.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-surface border border-secondary rounded-2xl overflow-hidden hover:shadow-medium transition-all duration-300 group"
            >
              {/* Header */}
              <div className="p-10 border-b border-secondary">
                <div className="text-highlight mb-6">{industry.icon}</div>
                <h3 className="text-3xl font-bold mb-3 text-primary">{industry.name}</h3>
                <p className="text-lg text-primaryLight leading-relaxed">{industry.description}</p>
              </div>

              {/* Stats */}
              <div className="px-10 py-8 border-b border-secondary bg-base/40">
                <div className="grid grid-cols-3 gap-4">
                  {industry.stats.map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-highlight font-bold text-lg">{stat.split(' ')[0]}</p>
                      <p className="text-xs text-primaryLight font-semibold uppercase tracking-wide mt-1">
                        {stat.split(' ').slice(1).join(' ')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div className="p-10">
                <h4 className="font-bold mb-6 text-xs uppercase tracking-widest text-primaryLight">Key Use Cases & Results</h4>
                <div className="space-y-4 mb-8">
                  {industry.useCases.map((useCase, i) => (
                    <motion.div
                      key={i}
                      className="flex justify-between items-start group/case cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-semibold text-primary leading-tight">{useCase.title}</span>
                      <span className="text-xs text-highlight font-bold whitespace-nowrap ml-4">{useCase.result}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  href="/case-studies"
                  className="w-full block px-4 py-3 bg-highlight text-base font-semibold text-sm text-center rounded-full hover:shadow-lg transition-all duration-200 text-white"
                >
                  Explore Solutions →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
