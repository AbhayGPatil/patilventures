import { motion } from 'framer-motion';

const securityBadges = [
  {
    title: 'SOC 2',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    label: 'Enterprise Security',
    description: 'Type II certified for security, availability, and confidentiality controls'
  },
  {
    title: 'GDPR',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Data Privacy',
    description: 'Full GDPR compliance for data protection and privacy rights'
  },
  {
    title: 'HIPAA',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Healthcare Compliance',
    description: 'HIPAA certified for protected health information handling'
  },
  {
    title: 'ISO 27001',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Information Security',
    description: 'ISO 27001 certified for information security management'
  },
];

export default function SecuritySection() {
  return (
    <section id="security" className="py-24 bg-base text-primary">
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
            Enterprise-Grade <span className="text-primaryLight">Security & Compliance</span>
          </h2>
          <p className="text-lg text-primaryLight max-w-2xl mx-auto leading-relaxed">
            Trusted by Fortune 500 companies worldwide. Security and compliance are embedded at the system architecture level, not added post-deployment.
          </p>
        </motion.div>

        {/* Security Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 bg-surface border border-secondary rounded-2xl hover:shadow-soft transition-all duration-300 group"
            >
              <div className="text-highlight mb-6 group-hover:scale-110 transition-transform duration-300">{badge.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary">{badge.title}</h3>
              <p className="text-sm text-highlight font-bold uppercase tracking-wider mb-3">{badge.label}</p>
              <p className="text-sm text-primaryLight leading-relaxed">{badge.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-base border border-secondary/50 rounded-4xl p-16 mb-16"
        >
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-bold text-highlight mb-2">10+</p>
              <p className="text-primaryLight/80 font-semibold text-sm">Projects Delivered</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-highlight mb-2">24/7</p>
              <p className="text-primaryLight/80 font-semibold text-sm">Support & Monitoring</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-highlight mb-2">40%</p>
              <p className="text-primaryLight/80 font-semibold text-sm">Avg Cost Savings</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-highlight mb-2">99.9%</p>
              <p className="text-primaryLight/80 font-semibold text-sm">Uptime Guarantee</p>
            </div>
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-12 bg-base border-2 border-highlight rounded-3xl text-center"
        >
          <p className="text-sm text-highlight font-bold uppercase tracking-wider mb-3">Did you know?</p>
          <p className="text-xl font-bold text-primary leading-relaxed">
            AI can process documents <span className="text-highlight">100x faster</span> than humans while maintaining <span className="text-highlight">99% accuracy</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
