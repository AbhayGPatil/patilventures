export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-base text-primary border-t border-secondary py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-display font-semibold text-xl mb-4">Sapience Agentic Systems</h3>
            <p className="text-sm text-primaryLight mb-4">
              Enterprise AI Systems Engineering. Designing, deploying, and stewarding agentic AI systems that transform business operations.
            </p>
            <div className="space-y-2">
              <p className="text-xs text-primaryLight">
                <a href="tel:+1234567890" className="hover:text-highlight">+91 8591132269</a>
              </p>
              <p className="text-xs text-primaryLight">
                <a href="mailto:hello@patilventures.com" className="hover:text-highlight">sapiencehq@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm text-primaryLight">
              <li><a href="/services" className="hover:text-highlight transition">AI Automation</a></li>
              <li><a href="/services" className="hover:text-highlight transition">Conversational AI</a></li>
              <li><a href="/services" className="hover:text-highlight transition">Decision Intelligence</a></li>
              <li><a href="/services" className="hover:text-highlight transition">Agentic Systems</a></li>
              <li><a href="/services" className="hover:text-highlight transition">Knowledge AI</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2 text-sm text-primaryLight">
              <li><a href="#industries" className="hover:text-highlight transition">Healthcare</a></li>
              <li><a href="#industries" className="hover:text-highlight transition">Finance</a></li>
              <li><a href="#industries" className="hover:text-highlight transition">Retail</a></li>
              <li><a href="#industries" className="hover:text-highlight transition">Insurance</a></li>
              <li><a href="#industries" className="hover:text-highlight transition">Enterprise</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-sm text-primaryLight">
              <li><a href="#" className="hover:text-highlight transition">About Us</a></li>
              <li><a href="/case-studies" className="hover:text-highlight transition">Case Studies</a></li>
              <li><a href="#" className="hover:text-highlight transition">Blog</a></li>
              <li><a href="#" className="hover:text-highlight transition">Careers</a></li>
              <li><a href="/contact" className="hover:text-highlight transition">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary py-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-primaryLight mb-4 md:mb-0">
              © {year} Patil Ventures. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-primaryLight">
              <a href="#" className="hover:text-highlight">Privacy Policy</a>
              <a href="#" className="hover:text-highlight">Terms of Service</a>
              <a href="#" className="hover:text-highlight">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}