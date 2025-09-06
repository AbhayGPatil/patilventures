import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Harnessing Agentic AI for Customer Support',
    description: 'Explore how autonomous agents can revolutionise support workflows and drive customer satisfaction.',
    date: 'Aug 25, 2025',
    img: '/assets/blog-1.jpg',
  },
  {
    title: 'Building Modern Web Apps that Scale',
    description: 'Our insights on architecture patterns, tools and best practices for high‑growth startups.',
    date: 'Jul 17, 2025',
    img: '/assets/portfolio-1.jpg',
  },
  {
    title: 'GenAI: From Prototype to Production',
    description: 'Lessons learned from deploying generative models in real‑world applications.',
    date: 'May 9, 2025',
    img: '/assets/portfolio-2.jpg',
  },
];

export default function BlogsSection() {
  return (
    // Shorten vertical spacing of blog section
    <section id="blogs" className="py-14 md:py-16 bg-surface text-primary">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-display font-semibold text-center mb-6"
        >
          Latest Insights
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-base border border-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="h-48 sm:h-56 md:h-52 overflow-hidden">
                <img src={post.img} alt={post.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <p className="text-xs text-primaryLight mb-1">{post.date}</p>
                <h3 className="text-lg font-display font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-primaryLight mb-4">{post.description}</p>
                <a href="#" className="text-primaryLight font-medium hover:text-highlight">Read more →</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}