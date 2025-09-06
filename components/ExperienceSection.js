import { motion } from 'framer-motion';

const metrics = [
  {
    value: '5+',
    label: 'Projects Delivered',
  },
  {
    value: '7+',
    label: 'Years of Combined Experience',
  },
  {
    value: '100%',
    label: 'Client Satisfaction',
  },
];

export default function ExperienceSection() {
  return (
    // Trim padding for this metrics/impact section
    <section id="experience" className="py-14 md:py-16 bg-surface text-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Decrease the bottom spacing below the heading
          className="text-3xl md:text-4xl font-display font-semibold text-center mb-6"
        >
          Our Impact
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                {metric.value}
              </div>
              <p className="text-primaryLight text-sm uppercase tracking-wide">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}