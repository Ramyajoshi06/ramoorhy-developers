import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Ruler, ShieldCheck, Layers3, Eye, Users, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Ruler,
    title: 'Engineering Precision',
    titleHi: 'इंजीनियरिंग सटीकता',
    desc: 'Built according to proper civil engineering principles with accurate measurements and structural integrity.',
    color: '#f59e0b',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Materials',
    titleHi: 'उच्च गुणवत्ता सामग्री',
    desc: 'Focus on quality construction and material selection for long-lasting results.',
    color: '#60a5fa',
  },
  {
    icon: Layers3,
    title: 'Complete Solutions',
    titleHi: 'संपूर्ण समाधान',
    desc: 'From design and construction to finishing and building materials — everything under one roof.',
    color: '#34d399',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    titleHi: 'पारदर्शी प्रक्रिया',
    desc: 'We clearly communicate each stage of the project so you always know what\'s happening.',
    color: '#c084fc',
  },
  {
    icon: Users,
    title: 'Expert Workmanship',
    titleHi: 'विशेषज्ञ कारीगरी',
    desc: 'Skilled team dedicated to delivering high-quality construction and finishing work.',
    color: '#fb923c',
  },
  {
    icon: MapPin,
    title: 'Local Support',
    titleHi: 'स्थानीय सहायता',
    desc: 'Dedicated support and service for customers in Dungarpur, Rajasthan.',
    color: '#f472b6',
  },
];

function ReasonCard({ reason, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = reason.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex gap-5 p-6 rounded-2xl border border-white/6 hover:border-white/15 transition-all duration-400 hover:-translate-y-1 hover:bg-white/3 cursor-default"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{ background: reason.color + '15', border: `1.5px solid ${reason.color}30` }}
      >
        <Icon size={22} style={{ color: reason.color }} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-bold text-base mb-0.5 font-serif">{reason.title}</h3>
        <p className="text-xs font-medium mb-3" style={{ color: reason.color + 'aa' }}>{reason.titleHi}</p>
        <p className="text-white/55 text-sm leading-relaxed">{reason.desc}</p>
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f1729 0%, #060b18 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-gold-400/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full bg-blue-500/4 blur-3xl pointer-events-none" />

      <div className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left: Title */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -40 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <span className="section-label">Why Us</span>
            <h2 className="heading-lg text-white mb-5">
              Why Choose{' '}
              <span className="gold-text">Ramoorhy?</span>
            </h2>
            <span className="gold-line block mb-6" />
            <p className="text-white/55 text-base leading-relaxed mb-8">
              We are committed to delivering quality construction and honest service to every customer in Dungarpur.
            </p>

            {/* Company card */}
            <div className="p-6 rounded-2xl border border-gold-400/20 bg-gold-400/5">
              <p className="text-gold-400 font-serif font-semibold mb-1">Gorang Joshi</p>
              <p className="text-white/40 text-sm mb-3">Ramoorhy Construction & Development</p>
              <a
                href="tel:9672100707"
                className="flex items-center gap-2 text-white/70 hover:text-gold-400 transition-colors text-sm font-medium"
              >
                📞 9672100707
              </a>
              <p className="text-white/40 text-xs mt-1">📍 Dungarpur, Rajasthan</p>
            </div>
          </motion.div>

          {/* Right: Reason Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <ReasonCard key={reason.title} reason={reason} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
