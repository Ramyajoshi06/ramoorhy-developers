import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Ruler, Building2, Layers3, MapPin } from 'lucide-react';

const highlights = [
  {
    icon: Ruler,
    title: 'Engineering Precision',
    titleHi: 'इंजीनियरिंग सटीकता',
    desc: 'Civil engineering principles and accurate execution at every stage of construction.',
    color: 'from-amber-500/20 to-amber-600/5',
    border: 'border-amber-500/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: Building2,
    title: 'Quality Construction',
    titleHi: 'उच्च गुणवत्ता निर्माण',
    desc: 'Focus on strong, reliable construction practices from foundation to finishing.',
    color: 'from-blue-500/20 to-blue-600/5',
    border: 'border-blue-400/30',
    iconColor: 'text-blue-300',
  },
  {
    icon: Layers3,
    title: 'Complete Solutions',
    titleHi: 'संपूर्ण समाधान',
    desc: 'Design, construction, renovation and quality building materials — all at one place.',
    color: 'from-emerald-500/20 to-emerald-600/5',
    border: 'border-emerald-400/30',
    iconColor: 'text-emerald-300',
  },
  {
    icon: MapPin,
    title: 'Local Expertise',
    titleHi: 'स्थानीय विशेषज्ञता',
    desc: 'Proudly serving homeowners and clients in Dungarpur, Rajasthan.',
    color: 'from-rose-500/20 to-rose-600/5',
    border: 'border-rose-400/30',
    iconColor: 'text-rose-300',
  },
];

function HighlightCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative p-7 rounded-2xl border bg-gradient-to-br ${item.color} ${item.border} hover:scale-[1.03] transition-all duration-400 cursor-default`}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl bg-navy-800/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={24} className={item.iconColor} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-lg mb-1 font-serif">{item.title}</h3>
      <p className={`text-sm font-medium mb-3 ${item.iconColor} opacity-80`}>{item.titleHi}</p>

      {/* Description */}
      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-6 right-6 h-0.5 ${item.border.replace('border-', 'bg-').replace('/30', '/50')} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`} />
    </motion.div>
  );
}

export default function IntroSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-24 md:py-32 bg-navy-950 relative overflow-hidden">
      {/* Subtle bg decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-400/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-500/3 blur-3xl pointer-events-none" />

      <div className="section-wrapper">
        {/* Section Label + Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <span className="section-label">About Us</span>
          <h2 className="heading-lg text-white mb-5">
            From Concept to{' '}
            <span className="gold-text">Completion</span>
          </h2>
          <span className="gold-line block mb-5" />
          <p className="text-white/65 text-base md:text-lg leading-relaxed mb-4">
            आपके घर की कल्पना से लेकर उसके निर्माण और फिनिशिंग तक, रामोर्ही कंस्ट्रक्शन एंड
            डेवलपमेंट आपको एक ही स्थान पर संपूर्ण समाधान प्रदान करता है।
          </p>
          <p className="text-white/50 text-sm leading-relaxed">
            भवन निर्माण से लेकर बेहतरीन सामग्री तक का पूरा समाधान, एक ही स्थान!
          </p>
        </motion.div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <HighlightCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Company tagline strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 py-6 px-8 rounded-2xl border border-gold-400/20 bg-gold-400/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-gold-400 font-serif font-semibold text-lg">"निर्माणम् प्रगतिः, भवनं भाग्यम्"</p>
            <p className="text-white/50 text-sm mt-1">Construction is Progress, Building is Destiny</p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary whitespace-nowrap text-xs px-6 py-3"
          >
            <span>Talk to Our Team</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
