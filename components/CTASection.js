import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-base to-surface">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface rounded-2xl shadow-large p-12 border border-secondary"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primaryLight max-w-2xl mx-auto">
              Let's discuss how AI can help you achieve your goals. <span className="font-semibold text-primary">No pressure, just clarity.</span>
            </p>
          </div>

          {/* Why Talk to Us */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-secondary">
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-base/60 border border-secondary"
            >
              <div className="w-12 h-12 bg-highlight/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-primary font-bold mb-2">Free Consultation</p>
              <p className="text-sm text-primaryLight">Understand your options before committing</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-base/60 border border-secondary"
            >
              <div className="w-12 h-12 bg-highlight/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <p className="text-primary font-bold mb-2">Honest Assessment</p>
              <p className="text-sm text-primaryLight">We'll tell you if AI is right for your situation</p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-xl bg-base/60 border border-secondary"
            >
              <div className="w-12 h-12 bg-highlight/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-primary font-bold mb-2">Clear Next Steps</p>
              <p className="text-sm text-primaryLight">Walk away with actionable recommendations</p>
            </motion.div>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center p-6 border border-secondary rounded-xl bg-base/40">
              <p className="text-sm text-primaryLight uppercase tracking-wider mb-2">Contact Us Directly</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg className="w-5 h-5 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18573656167" className="text-primary font-semibold hover:text-highlight">+1 857-365-6167</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contact@patilventures.com" className="text-primary font-semibold hover:text-highlight">contact@patilventures.com</a>
              </div>
            </div>
            <div className="text-center p-6 bg-base/50 rounded-xl border border-secondary">
              <p className="text-sm text-primary uppercase tracking-wider mb-3 font-bold">Or Send Us a Message</p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-highlight text-white rounded-lg font-semibold hover:bg-blue-600 transition-all group"
              >
                Go to Contact Form
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="/assessment"
              className="inline-flex items-center justify-center px-8 py-4 bg-highlight text-white rounded-lg font-semibold hover:bg-blue-600 transition-all shadow-medium group"
            >
              Take Free Assessment
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primaryLight text-primary rounded-lg font-semibold hover:border-highlight hover:text-highlight transition-all"
            >
              View Case Studies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
