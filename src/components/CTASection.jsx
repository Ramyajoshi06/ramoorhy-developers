import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const whatsappMsg = encodeURIComponent('Hello Ramoorhy Construction & Development, I am ready to build my dream home. Please get in touch!');

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(180,83,9,0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(245,158,11,0.1) 0%, transparent 60%),
            linear-gradient(135deg, #060b18 0%, #0f1729 50%, #060b18 100%)
          `,
        }}
      />

      {/* Architectural lines decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-8 left-8 w-32 h-32 border-t-2 border-l-2 border-gold-400/15 rounded-tl-3xl" />
        <div className="absolute bottom-8 right-8 w-32 h-32 border-b-2 border-r-2 border-gold-400/15 rounded-br-3xl" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      </div>

      <div className="section-wrapper relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Label */}
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/40 bg-gold-400/8 text-gold-400 text-xs font-bold tracking-[0.2em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              Let's Build Together
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="heading-lg text-white mb-4">
            Ready to Build Your{' '}
            <span className="gold-text">Dream Home?</span>
          </h2>

          {/* Hindi */}
          <p className="text-white/60 text-lg mb-3">
            अपने सपनों का घर बनाने के लिए तैयार हैं?
          </p>

          {/* Description */}
          <p className="text-white/50 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Let our team help you turn your plan into a strong, beautiful and well-engineered home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-10">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary px-8 py-4 text-sm"
              id="cta-book-visit-btn"
            >
              <span>Book Site Visit</span>
              <ArrowRight size={16} />
            </a>
            <a
              href={`https://wa.me/919672100707?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded font-bold text-sm uppercase tracking-wide text-emerald-400 border-[1.5px] border-emerald-400/40 bg-emerald-400/8 hover:bg-emerald-400/15 hover:border-emerald-400/60 transition-all duration-300 hover:-translate-y-1"
              id="cta-whatsapp-btn"
            >
              <MessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Phone number */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/40 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-gold-400" />
              <a href="tel:9672100707" className="hover:text-gold-400 transition-colors font-medium">
                9672100707
              </a>
            </div>
            <span className="hidden sm:block text-white/20">|</span>
            <span>Gorang Joshi, Dungarpur, Rajasthan</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
