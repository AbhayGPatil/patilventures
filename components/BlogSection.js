import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Harnessing LLMs for Customer Delight',
    excerpt: 'Discover how large language models can transform customer engagement and support.',
    date: 'Aug 2025',
    category: 'Gen AI',
  },
  {
    title: 'Designing Human‑Centric AI Agents',
    excerpt: 'A guide to building AI agents that feel intuitive, friendly and approachable.',
    date: 'Jul 2025',
    category: 'AI Agents',
  },
  {
    title: 'Scaling Web Apps with Modern Stacks',
    excerpt: 'Lessons learned from deploying high‑performance web apps to millions of users.',
    date: 'Jun 2025',
    category: 'Web Apps',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-base">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-semibold text-primary text-center mb-12"
        >
          Insights & Stories
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-6 bg-white border border-secondary rounded-2xl shadow hover:shadow-lg transition-shadow flex flex-col"
            >
              <span className="text-secondary text-xs uppercase font-semibold mb-2">{post.category}</span>
              <h3 className="text-lg font-display font-semibold text-primary mb-2">{post.title}</h3>
              <p className="text-primaryLight flex-grow">
                {post.excerpt}
              </p>
              <div className="mt-4 text-sm text-secondary">{post.date}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}