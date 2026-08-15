import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.jpg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Materials', href: '#materials' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'House Designing',
  'New Construction',
  'Renovation & Repairing',
  'Building Materials',
];

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="text-white/45 hover:text-gold-400 transition-colors duration-300 text-sm"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  const whatsappMsg = encodeURIComponent('Hello Ramoorhy Construction & Development, I would like to discuss my construction project.');

  return (
    <footer className="bg-navy-950 border-t border-white/8 relative overflow-hidden">
      {/* Top gold line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="section-wrapper pt-12 md:pt-16 pb-8 md:pb-10" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom, 0px))' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="Ramoorhy Construction Logo" className="w-12 h-12 object-contain rounded-lg" />
              <div>
                <p className="text-white font-bold text-sm font-serif leading-tight">RAMOORHY</p>
                <p className="text-gold-400 text-[10px] tracking-[0.15em] uppercase font-semibold leading-tight">
                  Construction & Development
                </p>
              </div>
            </div>
            <p className="text-gold-400/80 font-serif text-sm mb-2 leading-relaxed">
              "निर्माणम् प्रगतिः, भवनं भाग्यम्"
            </p>
            <p className="text-white/35 text-xs mb-5 leading-relaxed">
              Construction is Progress, Building is Destiny.
            </p>
            <p className="text-white/35 text-xs leading-relaxed">
              आपके सपनों के घर को सिविल इंजीनियरिंग के सटीक नियमों के साथ बनवाना हुआ आसान।
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Services</h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-white/45 hover:text-gold-400 transition-colors duration-300 text-sm"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-white/70 font-semibold text-sm">Gorang Joshi</p>
                <p className="text-white/35 text-xs">Ramoorhy Construction & Development</p>
              </div>
              <a href="tel:9672100707" className="flex items-center gap-2 text-white/50 hover:text-gold-400 transition-colors text-sm group">
                <Phone size={14} className="text-gold-400/60 group-hover:text-gold-400 transition-colors" strokeWidth={1.5} />
                9672100707
              </a>
              <a href="mailto:joshgorang@gmail.com" className="flex items-center gap-2 text-white/50 hover:text-gold-400 transition-colors text-sm group break-all">
                <Mail size={14} className="text-gold-400/60 group-hover:text-gold-400 transition-colors shrink-0" strokeWidth={1.5} />
                joshgorang@gmail.com
              </a>
              <div className="flex items-start gap-2 text-white/50 text-sm">
                <MapPin size={14} className="text-gold-400/60 shrink-0 mt-0.5" strokeWidth={1.5} />
                Dungarpur, Rajasthan
              </div>
              <a
                href={`https://wa.me/919672100707?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-xs text-emerald-400 border border-emerald-400/25 bg-emerald-400/6 hover:bg-emerald-400/12 transition-all duration-300 mt-1"
                id="footer-whatsapp-btn"
              >
                <MessageCircle size={14} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © 2026 Ramoorhy Construction and Development. All Rights Reserved.
          </p>
          <p className="text-white/20 text-xs">
            Dungarpur, Rajasthan, India
          </p>
        </div>
      </div>
    </footer>
  );
}
