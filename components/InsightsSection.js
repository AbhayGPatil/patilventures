import { motion } from 'framer-motion';

const insights = [
  {
    title: 'Exploratory Research',
    description:
      'We dive deep into the latest LLMs and generative models to uncover opportunities for your business.',
    img: '/assets/portfolio-1.jpg',
  },
  {
    title: 'Human‑Centric Design',
    description:
      'Our designs are grounded in empathy and usability, creating experiences that resonate.',
    img: '/assets/portfolio-2.jpg',
  },
  {
    title: 'Proven Impact',
    description:
      'Our work delivers measurable results—boosting engagement, efficiency and growth for our clients.',
    img: '/assets/case-1.jpg',
  },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="py-20 md:py-28 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-semibold text-primary text-center mb-12"
        >
          Innovation & Research
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-10">
          {insights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >
              <div className="relative h-64 sm:h-72 md:h-80">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity text-center px-4">
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primaryLight text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}