import { motion } from 'framer-motion';

const services = [
  {
    title: 'Agentic AI & GenAI',
    description: 'We design and deploy autonomous agents and generative AI solutions tuned for your domain.',
    number: '01',
  },
  {
    title: 'Next‑Gen Web Apps',
    description: 'Building performant and delightful web applications using modern frameworks and best practices.',
    number: '02',
  },
  {
    title: 'Product Strategy',
    description: 'We help you find product‑market fit with AI‑powered insights and data‑driven strategy.',
    number: '03',
  },
  {
    title: 'Growth & Support',
    description: 'Long‑term partnerships focused on continuous improvement and scaling.',
    number: '04',
  },
];

export default function ServicesSection() {
  return (
    // Reduce vertical padding to tighten spacing between sections
    <section id="services" className="py-14 md:py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Reduce bottom margin on section heading
          className="text-3xl md:text-4xl font-display font-semibold text-primary text-center mb-6"
        >
          Our Capabilities
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 bg-white border border-secondary rounded-2xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="text-primary text-3xl font-bold mb-4">{service.number}</div>
              <h3 className="text-xl font-display font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-primaryLight text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}