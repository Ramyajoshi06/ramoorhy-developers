import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { PencilRuler, Building2, Hammer, HeartHandshake, ArrowRight, ChevronRight } from 'lucide-react';

const services = [
  {
    id: 'designing',
    icon: PencilRuler,
    title: 'House Designing',
    titleHi: 'गृह डिजाइनिंग',
    desc: 'प्लॉट के अनुसार बेहतरीन नक्शा (Map) और Elevation तैयार करने में विशेषज्ञ सहयोग।',
    descEn: 'Expert assistance in creating the best layout map and elevation design according to your plot requirements.',
    tags: ['Map', 'Elevation', 'Planning'],
    accent: '#f59e0b',
    accentBg: 'rgba(245,158,11,0.08)',
    accentBorder: 'rgba(245,158,11,0.3)',
    gradient: 'from-amber-900/30 to-navy-900/60',
  },
  {
    id: 'construction',
    icon: Building2,
    title: 'New Construction',
    titleHi: 'नई निर्माण',
    desc: 'आपके सपनों के भवन का शून्य से लेकर पूर्णता तक उच्च गुणवत्ता के साथ निर्माण।',
    descEn: 'High-quality construction of your dream building from foundation to full completion.',
    tags: ['Foundation', 'Structure', 'Finishing'],
    accent: '#60a5fa',
    accentBg: 'rgba(96,165,250,0.08)',
    accentBorder: 'rgba(96,165,250,0.3)',
    gradient: 'from-blue-900/30 to-navy-900/60',
  },
  {
    id: 'renovation',
    icon: Hammer,
    title: 'Renovation & Repairing',
    titleHi: 'नवीनीकरण और मरम्मत',
    desc: 'पुराने घर को नया रूप देना, मरम्मत और आधुनिक नवीनीकरण के कार्य।',
    descEn: 'Transform your old home with modern renovation, repairs and upgrades.',
    tags: ['Repair', 'Remodel', 'Modernize'],
    accent: '#34d399',
    accentBg: 'rgba(52,211,153,0.08)',
    accentBorder: 'rgba(52,211,153,0.3)',
    gradient: 'from-emerald-900/30 to-navy-900/60',
  },
  {
    id: 'support',
    icon: HeartHandshake,
    title: 'Complete Support',
    titleHi: 'संपूर्ण सहायता',
    desc: 'घर बनाने की शुरुआत से लेकर अंत तक इंजीनियरिंग सपोर्ट और बैंक लोन में पूर्ण मदद।',
    descEn: 'End-to-end engineering support and complete assistance with bank loans from start to finish.',
    tags: ['Planning', 'Engineering', 'Loan Support'],
    accent: '#c084fc',
    accentBg: 'rgba(192,132,252,0.08)',
    accentBorder: 'rgba(192,132,252,0.3)',
    gradient: 'from-purple-900/30 to-navy-900/60',
  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-500 cursor-default"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${service.accentBg}, rgba(10,15,30,0.95))`
          : 'rgba(15,23,42,0.8)',
        borderColor: hovered ? service.accentBorder : 'rgba(255,255,255,0.08)',
        transform: hovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
        boxShadow: hovered ? `0 20px 60px ${service.accentBg}` : 'none',
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full transition-all duration-500"
        style={{ background: hovered ? service.accent : 'rgba(255,255,255,0.05)' }}
      />

      <div className="p-7 flex flex-col flex-1">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-400"
          style={{
            background: hovered ? service.accentBg : 'rgba(255,255,255,0.06)',
            border: `1.5px solid ${hovered ? service.accentBorder : 'rgba(255,255,255,0.08)'}`,
          }}
        >
          <Icon
            size={26}
            strokeWidth={1.5}
            style={{ color: hovered ? service.accent : 'rgba(255,255,255,0.7)', transition: 'color 0.4s' }}
          />
        </div>

        {/* Titles */}
        <h3 className="text-white font-bold text-xl mb-1 font-serif">{service.title}</h3>
        <p className="text-sm font-medium mb-4 transition-colors duration-300" style={{ color: service.accent + 'cc' }}>
          {service.titleHi}
        </p>

        {/* Description */}
        <p className="text-white/65 text-sm leading-relaxed mb-5 flex-1">{service.desc}</p>

        {/* Tags */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-5"
            >
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: service.accentBg,
                      color: service.accent,
                      border: `1px solid ${service.accentBorder}`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
          style={{ color: hovered ? service.accent : 'rgba(255,255,255,0.4)' }}
          id={`service-${service.id}-enquire-btn`}
        >
          Enquire Now
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-16 md:py-32 bg-navy-900 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(245,158,11,0.6) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="section-label justify-center">
            What We Do
          </span>
          <h2 className="heading-lg text-white mb-4">
            Our Core <span className="gold-text">Services</span>
          </h2>
          <span className="gold-line-center block" />
          <p className="text-white/55 text-base md:text-lg mt-5 max-w-2xl mx-auto">
            सफाई से लेकर समापन तक —{' '}
            <span className="text-gold-400 font-medium">Concept to Completion</span>
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-white/40 text-sm mb-4">
            Need a custom solution? Let's talk about your project.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-outline inline-flex"
            id="services-contact-btn"
          >
            <span>Get Free Consultation</span>
            <ChevronRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
