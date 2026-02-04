import { motion } from 'framer-motion';
import { useState } from 'react';

const intelligences = [
  {
    id: 1,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Operational Intelligence',
    description: 'Streamline operations with AI-driven insights that optimize workflows, reduce bottlenecks, and improve efficiency across your organization.',
    stats: ['72% Cycle Time Reduction', '98% SLA Adherence', '$1.4M Annual Savings'],
  },
  {
    id: 2,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Conversational Intelligence',
    description: 'Deploy intelligent voice agents and chatbots that handle customer interactions naturally, improving satisfaction and reducing support costs.',
    stats: ['95% Automation Rate', '40% Cost Reduction', '24/7 Availability'],
  },
  {
    id: 3,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Decision Intelligence',
    description: 'Make data-driven decisions faster with AI that analyzes complex patterns and provides actionable insights for your business.',
    stats: ['3x Faster Decisions', '85% Higher Accuracy', '$2.1M Annual Savings'],
  },
  {
    id: 4,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Autonomous Agentic Systems',
    description: 'Deploy self-governing AI agents that autonomously execute complex workflows, adapt to changing conditions, and improve continuously.',
    stats: ['80% Manual Work Eliminated', '4-8 Weeks Deploy Time', 'Zero Data Entry Errors'],
  },
  {
    id: 5,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Enterprise Knowledge Intelligence',
    description: 'Transform your enterprise data into actionable knowledge with RAG systems and AI-powered knowledge management.',
    stats: ['99% Information Accuracy', '10x Faster Search', '$1.8M Productivity Gains'],
  },
];

export default function IntelligenceSection() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <section id="services" className="py-24 bg-base text-primary">
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
            Our Intelligence
          </h2>
          <h3 className="text-2xl font-semibold text-primaryLight mb-4">Five Dimensions of AI Intelligence</h3>
          <p className="text-base text-primaryLight max-w-2xl mx-auto leading-relaxed">
            We specialize in five core areas of AI intelligence, each designed to solve specific business challenges and drive measurable outcomes.
          </p>
        </motion.div>

        {/* Pill Navigation - Cleaner */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {intelligences.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedId(item.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm flex items-center ${
                selectedId === item.id
                  ? 'bg-highlight text-white shadow-lg'
                  : 'border border-primary/20 text-primaryLight hover:bg-surface'
              }`}
            >
              <span className="mr-2 inline-flex w-5 h-5">{item.icon}</span>
              {item.title}
            </motion.button>
          ))}
        </div>

        {/* Content Card - Larger, More Prominent */}
        <motion.div
          key={selectedId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-surface border border-secondary rounded-2xl p-12 shadow-soft"
        >
          {intelligences.map((item) => (
            selectedId === item.id && (
              <div key={item.id}>
                <div className="flex items-start gap-6 mb-8">
                  <div className="text-highlight flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-4xl font-bold mb-3">{item.title}</h3>
                    <p className="text-lg text-primaryLight leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-secondary">
                  {item.stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="text-center md:text-left"
                    >
                      <p className="text-highlight font-bold text-2xl mb-1">{stat}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  href="/services"
                  className="mt-10 inline-flex items-center justify-center px-8 py-3.5 bg-highlight text-white font-semibold rounded-lg hover:bg-blue-600 hover:shadow-lg transition-all duration-200 group"
                >
                  Explore {item.title}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            )
          ))}
        </motion.div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-surface rounded-2xl shadow-medium p-8 border border-secondary"
        >
          <h3 className="text-2xl font-bold text-primary mb-3">Not sure which service fits?</h3>
          <p className="text-primaryLight mb-6">Take our quick assessment or talk to an AI expert.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/assessment" className="inline-flex items-center justify-center px-6 py-3 bg-highlight text-white rounded-lg font-semibold hover:bg-blue-600 transition-all">
              Take Assessment
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-primaryLight text-primary rounded-lg font-semibold hover:border-highlight hover:text-highlight transition-all">
              Schedule Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
