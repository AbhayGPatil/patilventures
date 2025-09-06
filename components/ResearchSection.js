import { motion } from 'framer-motion';

const researchTopics = [
  {
    title: 'LLM Optimisation',
    description:
      'Exploring techniques for fine‑tuning large language models to deliver domain‑specific performance.',
  },
  {
    title: 'Agent Alignment',
    description:
      'Researching ways to ensure autonomous agents act in accordance with user intent and ethical guidelines.',
  },
  {
    title: 'Responsible AI',
    description:
      'Studying methods to build transparent, fair and accountable AI systems.',
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 md:py-28 bg-base text-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-semibold text-center mb-12"
        >
          Research & Experiments
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {researchTopics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 bg-surface border border-secondary rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-display font-semibold mb-3">{topic.title}</h3>
              <p className="text-primaryLight text-sm leading-relaxed">
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}