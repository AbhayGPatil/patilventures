import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    // Reduce vertical padding for call-to-action
    <section id="contact" className="py-14 md:py-16 bg-primary text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-semibold text-base mb-4"
        >
          Let’s build something extraordinary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-secondary mb-6"
        >
          Reach out to discuss your project, explore possibilities or simply say hello.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="#"
          className="inline-block px-10 py-4 bg-highlight text-primary font-semibold rounded-full shadow hover:bg-primaryLight hover:text-base transition-colors"
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}