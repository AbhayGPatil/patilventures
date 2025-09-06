import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Patil Ventures delivered an AI solution that streamlined our operations and delighted our customers. Their expertise in GenAI is unparalleled.',
    name: 'Rajesh Kumar',
    role: 'CEO, TechWave',
  },
  {
    quote:
      'The team crafted a seamless web application for us, on time and beyond expectations. Their attention to detail is remarkable.',
    name: 'Ayesha Singh',
    role: 'Founder, Startify',
  },
  {
    quote:
      'Working with Patil Ventures felt like having an in‑house partner. They took our vision and turned it into reality using AI agents.',
    name: 'John Matthews',
    role: 'Product Lead, NovaHealth',
  },
];

export default function TestimonialsSection() {
  return (
    // Reduce vertical padding for testimonials
    <section className="py-14 md:py-16 bg-base text-primary" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-semibold text-center mb-6"
        >
          Happy Clients
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 bg-surface border border-secondary rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <p className="text-primaryLight italic mb-4 relative pl-8">
                <span className="absolute -left-3 top-0 text-4xl text-highlight">“</span>
                {item.quote}
              </p>
              <div className="mt-4">
                <p className="text-primary font-semibold">{item.name}</p>
                <p className="text-sm text-primaryLight">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}