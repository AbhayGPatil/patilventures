import { motion } from 'framer-motion';

const items = [
  {
    title: 'AI Dashboard',
    description: 'Interactive analytics dashboard powered by generative AI.',
    img: '/assets/portfolio-1.jpg',
  },
  {
    title: 'Mobile AI App',
    description: 'A sleek mobile experience with integrated AI assistant.',
    img: '/assets/portfolio-2.jpg',
  },
];

export default function PortfolioSection() {
  return (
    // Adjust vertical padding for balanced spacing
    <section id="portfolio" className="py-14 md:py-16 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          // Reduce bottom margin below section heading
          className="text-3xl md:text-4xl font-display font-semibold text-primary text-center mb-6"
        >
          Solutions at a Glance
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="overflow-hidden rounded-3xl shadow-lg group"
            >
              <div className="relative h-64 sm:h-80 md:h-96">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primaryLight text-sm mb-4 text-center max-w-xs">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block px-6 py-2 bg-highlight text-primary font-semibold rounded-full shadow hover:bg-primaryLight hover:text-base transition-colors"
                  >
                    View Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}