import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.jpg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Materials', href: '#materials' },
  { label: 'Projects', href: '#projects' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-500 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-900/98 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
        style={{ zIndex: 500 }}
      >
        <div className="section-wrapper">
          <div className="flex items-center justify-between h-16 md:h-24">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Ramoorhy Construction Logo"
                  className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs md:text-base leading-tight tracking-wide font-serif">
                  RAMOORHY
                </span>
                <span className="text-gold-400 text-[9px] md:text-xs font-semibold tracking-[0.12em] md:tracking-[0.15em] uppercase leading-tight">
                  Construction & Development
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded ${
                      isActive
                        ? 'text-gold-400'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:9672100707"
                className="flex items-center gap-2 text-white/70 hover:text-gold-400 transition-colors duration-300 text-sm"
              >
                <Phone size={14} className="text-gold-400" />
                9672100707
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="btn-primary text-xs px-5 py-3"
              >
                <span>Free Consultation</span>
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-400 flex flex-col bg-navy-900/99 backdrop-blur-xl lg:hidden"
            style={{ zIndex: 400 }}
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-10 h-10 object-contain rounded" />
                <div>
                  <div className="text-white font-bold text-sm font-serif">RAMOORHY</div>
                  <div className="text-gold-400 text-[10px] tracking-widest uppercase">Construction & Development</div>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white/70 hover:text-white"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col px-6 py-8 gap-2" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`py-4 text-lg font-semibold border-b border-white/8 transition-colors duration-200 flex items-center justify-between ${
                    activeSection === link.href.slice(1) ? 'text-gold-400' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  <ChevronRight size={16} className="text-white/30" />
                </motion.a>
              ))}
            </nav>

            <div className="px-6 mt-auto pb-10 flex flex-col gap-3">
              <a href="tel:9672100707" className="flex items-center gap-3 text-white/70 text-sm py-3">
                <Phone size={16} className="text-gold-400" />
                9672100707 — Gorang Joshi
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                className="btn-primary justify-center w-full"
              >
                <span>Get Free Consultation</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
