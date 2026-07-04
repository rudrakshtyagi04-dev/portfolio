import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 2.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/70 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xl font-bold tracking-tighter text-foreground">
            RT
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://github.com/rudrakshtyagi04-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </a>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-foreground/80">Available for work</span>
          </div>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background border-b border-white/10 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-lg font-medium text-left text-foreground"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <a
              href="https://github.com/rudrakshtyagi04-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Available</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
