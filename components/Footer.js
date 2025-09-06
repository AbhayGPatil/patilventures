export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface text-primary py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left space-y-1">
          <h3 className="font-display font-semibold text-xl">Patil Ventures</h3>
          <p className="text-sm">© {year} Patil Ventures. All rights reserved.</p>
          <p className="text-xs text-primaryLight">
            Patil Ventures is a sole proprietorship owned and operated by Abhay &amp; Vaishnavi Patil
          </p>
        </div>
        <div className="flex space-x-6 text-sm">
          <a href="#services" className="hover:text-highlight">Services</a>
          <a href="#portfolio" className="hover:text-highlight">Solutions</a>
          <a href="#experience" className="hover:text-highlight">Impact</a>
          <a href="#blogs" className="hover:text-highlight">Blog</a>
          <a href="#research" className="hover:text-highlight">Research</a>
          <a href="#about" className="hover:text-highlight">About</a>
          <a href="#contact" className="hover:text-highlight">Contact</a>
        </div>
      </div>
    </footer>
  );
}