import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WavingCharacter from '../components/WavingCharacter';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    if (showCalendly) {
      // Load Calendly script when modal opens
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [showCalendly]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-base text-primary">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 border-b border-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6">
              Let's Talk <span className="text-highlight">About Your AI Future</span>
            </h1>
              <p className="text-xl text-primaryLight max-w-3xl mx-auto">
              Schedule a free consultation and discover how we can transform your business with AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">
          {/* Waving Character - Hidden on mobile, visible on tablet+ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:flex items-center justify-center"
          >
            <WavingCharacter />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-12">Quick Contact Info</h2>

            <div className="space-y-8">
              <div>
                  <p className="text-highlight font-bold text-lg mb-2">Phone</p>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+917026000565" className="text-primaryLight hover:text-highlight transition">
                  +91 7026000565
                    </a>
                  </div>
              </div>

              <div>
                  <p className="text-highlight font-bold text-lg mb-2">Email</p>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-highlight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:sapiencehq@gmail.com" className="text-primaryLight hover:text-highlight transition">
                  sapiencehq@gmail.com
                    </a>
                  </div>
              </div>

              <div>
                  <p className="text-highlight font-bold text-lg mb-2">Office</p>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-highlight mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <p className="text-primaryLight">
                  D-1, 213, CHS, Datt Mandir Road, RSC- 37, Gorai-2, Borivali West, Mumbai- 400 092
                    </p>
                  </div>
              </div>

              <div>
                  <p className="text-highlight font-bold text-lg mb-4">Availability</p>
                  <p className="text-primaryLight mb-2">
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST<br />
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM IST<br />
                  <strong>Sunday:</strong> Closed
                </p>
              </div>

              <div className="pt-8 border-t border-secondary">
                <p className="text-highlight font-bold text-lg mb-4">Schedule a Call</p>
                  <button
                    onClick={() => setShowCalendly(true)}
                    className="w-full px-8 py-4 bg-highlight text-base font-bold rounded-full hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center text-white"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book a 30-Min Call
                  </button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface border border-secondary rounded-2xl p-10 shadow-medium md:col-span-1"
          >
            {!submitted ? (
              <>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-primaryLight mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-base border border-secondary text-primary placeholder-primaryLight/50 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primaryLight mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-base border border-secondary text-primary placeholder-primaryLight/50 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primaryLight mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-base border border-secondary text-primary placeholder-primaryLight/50 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primaryLight mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-base border border-secondary text-primary placeholder-primaryLight/50 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition"
                      placeholder="+91  
 	
8591132269"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primaryLight mb-2">How can we help? *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-xl bg-base border border-secondary text-primary placeholder-primaryLight/50 focus:outline-none focus:border-highlight focus:ring-2 focus:ring-highlight/20 transition resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-highlight text-base font-bold rounded-full hover:shadow-lg transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                  <p className="text-primaryLight">
                  Your message has been sent. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Calendly Booking Modal */}
      {showCalendly && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowCalendly(false)}
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden border border-secondary/50"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-secondary/30 bg-gradient-to-r from-highlight/5 to-transparent">
              <h2 className="text-xl sm:text-2xl font-bold text-primary">Schedule Consultation</h2>
              <button
                onClick={() => setShowCalendly(false)}
                className="text-primaryLight hover:text-highlight transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Calendly Widget Container */}
            <div className="p-4 sm:p-6 max-h-[calc(90vh-100px)] overflow-y-auto">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/team-patilventure/1-1-consult"
                style={{ minWidth: '100%', height: '600px' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
