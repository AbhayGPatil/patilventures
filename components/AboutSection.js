import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    // Tighten spacing for about section
    <section id="about" className="py-14 md:py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-6">
            More than a software studio
          </h2>
          <p className="text-primaryLight mb-4 leading-relaxed">
            Patil Ventures combines human‑centric design and cutting‑edge engineering to build products that are both beautiful and intelligent. As a proprietor‑led studio, we stay close to every project, ensuring quality and creativity at every step.
          </p>
          <p className="text-primaryLight mb-4 leading-relaxed">
            Our mission is to redefine how businesses use Agentic AI and web technology to drive growth. We partner with forward‑thinking companies to craft solutions that engage, inspire and deliver results.
          </p>
          <ul className="list-disc ml-5 space-y-2 text-primaryLight">
            <li>Proven success across AI & web initiatives</li>
            {/* Emphasise insights and innovation instead of research & experiments */}
            <li>Tailored solutions built on insights and innovation</li>
            <li>Dedicated support from ideation to scaling</li>
          </ul>
        </motion.div>
        {/* Visual placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-64 sm:h-80 md:h-96 w-full relative"
        >
          {/* Use the AI sphere image again or new illustration; we reuse portfolio-2 as placeholder for now */}
          <img
            src="/assets/portfolio-2.jpg"
            alt="About visual"
            className="object-cover w-full h-full rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}