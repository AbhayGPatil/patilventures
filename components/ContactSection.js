import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [status, setStatus] = useState('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, we just set status to success
    setStatus('success');
  };
  return (
    // Trim spacing for contact section
    <section id="contact" className="py-14 md:py-16 bg-base">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-bold text-primary mb-6"
        >
          Let’s Create Something Remarkable
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-primaryLight mb-6"
        >
          Fill out the form below and we’ll get back to you to discuss your project.
        </motion.p>
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
          <input
            required
            type="text"
            placeholder="Name"
            className="p-3 border border-surface rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="p-3 border border-surface rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-3 border border-surface rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
          />
          <input
            type="text"
            placeholder="Company"
            className="p-3 border border-surface rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
          />
          <select
            className="p-3 border border-surface rounded-md focus:outline-none focus:ring-2 focus:ring-highlight md:col-span-2"
          >
            <option value="" disabled selected>
              Budget Range
            </option>
            <option value="1">5k – 15k</option>
            <option value="2">15k – 50k</option>
            <option value="3">50k+</option>
          </select>
          <textarea
            placeholder="Project Details"
            rows="4"
            className="p-3 border border-surface rounded-md focus:outline-none focus:ring-2 focus:ring-highlight md:col-span-2"
          />
          {status === 'success' ? (
            <p className="md:col-span-2 text-highlight font-medium">Thank you! We’ll be in touch shortly.</p>
          ) : (
            <button
              type="submit"
              className="md:col-span-2 mt-4 px-8 py-3 bg-primary text-surface rounded-full font-semibold shadow hover:bg-primaryLight transition-colors"
            >
              Send Message
            </button>
          )}
        </form>
      </div>
    </section>
  );
}