import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';

const services = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'AI Automation Services',
    description: 'End-to-end workflow automation that transforms manual processes into intelligent, self-improving systems.',
    features: ['Process Mining', 'Workflow Optimization', 'Real-time Analytics', 'Scalable Deployment'],
    timeline: '4-8 weeks',
    savings: '80% Less Manual Work',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Conversational AI',
    description: 'Deploy intelligent voice agents and chatbots that handle customer interactions naturally.',
    features: ['Natural Language Processing', 'Multi-language Support', '24/7 Availability', 'Custom Training'],
    timeline: '2-4 weeks',
    savings: '40% Cost Reduction',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Decision Intelligence',
    description: 'Make data-driven decisions faster with AI that analyzes complex patterns.',
    features: ['Predictive Analytics', 'Pattern Recognition', 'Real-time Insights', 'Custom Models'],
    timeline: '3-6 weeks',
    savings: '3x Faster Decisions',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: 'Autonomous Agentic Systems',
    description: 'Deploy self-governing AI agents that autonomously execute complex workflows.',
    features: ['Self-Learning', 'Continuous Improvement', 'Error Handling', 'Audit Trail'],
    timeline: '6-12 weeks',
    savings: '80% Manual Work Eliminated',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Enterprise Knowledge Intelligence',
    description: 'Transform your enterprise data into actionable knowledge with RAG systems.',
    features: ['RAG Systems', 'Knowledge Management', 'Search Optimization', 'Data Security'],
    timeline: '4-8 weeks',
    savings: '99% Information Accuracy',
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: 'Computer Vision Solutions',
    description: 'Advanced image and video analysis for quality control, inspection, and automation.',
    features: ['Real-time Detection', 'Quality Assurance', 'Defect Analysis', 'Custom Training'],
    timeline: '3-6 weeks',
    savings: '85% Faster Detection',
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <div className="min-h-screen bg-base text-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 border-b border-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
              Our <span className="text-highlight">Services</span>
            </h1>
            <p className="text-xl text-primaryLight max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI solutions designed to transform your business operations and drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelectedService(idx)}
                className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  selectedService === idx
                    ? 'bg-surface border-highlight shadow-2xl glow-border'
                    : 'bg-surface border-secondary hover:border-highlight'
                }`}
              >
                <div className="text-highlight mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-primaryLight mb-4 leading-relaxed">{service.description}</p>
                <div className="pt-4 border-t border-secondary">
                  <p className="text-sm text-highlight font-bold">Timeline: {service.timeline}</p>
                  <p className="text-sm text-highlight font-bold mt-1">Impact: {service.savings}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Service View */}
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 p-12 bg-surface border border-secondary rounded-2xl shadow-medium"
          >
            <div className="flex items-start gap-6 mb-8">
              <span className="text-highlight">{services[selectedService].icon}</span>
              <div>
                <h2 className="text-4xl font-bold mb-3">{services[selectedService].title}</h2>
                <p className="text-lg text-primaryLight leading-relaxed">
                  {services[selectedService].description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-highlight">Key Features</h3>
                <ul className="space-y-3">
                  {services[selectedService].features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-highlight text-xl">✓</span>
                      <span className="text-primaryLight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-highlight">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-base/60 rounded-xl border border-secondary">
                    <p className="text-highlight font-bold text-lg">{services[selectedService].timeline}</p>
                    <p className="text-sm text-primaryLight">Typical Implementation</p>
                  </div>
                  <div className="p-4 bg-base/60 rounded-xl border border-secondary">
                    <p className="text-highlight font-bold text-lg">{services[selectedService].savings}</p>
                    <p className="text-sm text-primaryLight">Expected Impact</p>
                  </div>
                  <a
                    href="/contact"
                    className="w-full mt-4 px-6 py-3 bg-highlight text-base font-bold rounded-full hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center"
                  >
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
