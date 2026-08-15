import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  MessageSquare, MapPin, Pencil, Cog, HardHat, Sparkles, Home,
} from 'lucide-react';

const steps = [
  { step: '01', icon: MessageSquare, title: 'Consultation', titleHi: 'परामर्श', desc: 'Initial discussion about your vision, requirements, budget and plot details.' },
  { step: '02', icon: MapPin, title: 'Site Visit', titleHi: 'साइट विज़िट', desc: 'Our team visits your plot to assess site conditions and feasibility.' },
  { step: '03', icon: Pencil, title: 'Planning & Design', titleHi: 'योजना और डिज़ाइन', desc: 'House map, elevation design and layout planning as per your requirements.' },
  { step: '04', icon: Cog, title: 'Engineering', titleHi: 'इंजीनियरिंग', desc: 'Structural engineering, material planning and technical preparation.' },
  { step: '05', icon: HardHat, title: 'Construction', titleHi: 'निर्माण', desc: 'Quality construction from foundation to slab, walls and roof.' },
  { step: '06', icon: Sparkles, title: 'Finishing', titleHi: 'फिनिशिंग', desc: 'Tile, marble, plaster, paint, plumbing and electrical finishing work.' },
  { step: '07', icon: Home, title: 'Completion', titleHi: 'पूर्णता', desc: 'Final inspection, handover of your completed dream home.' },
];

function TimelineStep({ step, index, total }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = step.icon;
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center text-center relative"
    >
      {/* Connector line (desktop) */}
      {!isLast && (
        <motion.div
          className="absolute top-7 left-1/2 w-full h-px hidden md:block"
          style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.5), rgba(245,158,11,0.1))' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        />
      )}

      {/* Circle */}
      <div
        className="relative w-14 h-14 rounded-full border-2 border-gold-400/40 flex items-center justify-center mb-4 z-10 transition-all duration-400 group hover:border-gold-400 hover:scale-110 cursor-default"
        style={{ background: 'rgba(15,23,42,0.95)' }}
      >
        <Icon size={22} className="text-gold-400" strokeWidth={1.5} />
        {/* Step number badge */}
        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold-400 text-navy-900 text-[10px] font-black flex items-center justify-center leading-none">
          {step.step}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-white font-bold text-sm md:text-base mb-1 font-serif">{step.title}</h3>
      <p className="text-gold-400/70 text-xs mb-2">{step.titleHi}</p>
      <p className="text-white/45 text-xs leading-relaxed max-w-[120px] md:max-w-[130px]">{step.desc}</p>
    </motion.div>
  );
}

function MobileTimelineStep({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="flex gap-5 items-start"
    >
      {/* Left: Number + Icon + Line */}
      <div className="flex flex-col items-center shrink-0">
        <div className="relative w-12 h-12 rounded-full border-2 border-gold-400/40 bg-navy-800 flex items-center justify-center">
          <Icon size={18} className="text-gold-400" strokeWidth={1.5} />
          <span className="absolute -top-2 -right-1.5 w-5 h-5 rounded-full bg-gold-400 text-navy-900 text-[9px] font-black flex items-center justify-center">
            {step.step}
          </span>
        </div>
        {index < steps.length - 1 && (
          <motion.div
            className="w-px flex-1 mt-2"
            style={{ background: 'linear-gradient(to bottom, rgba(245,158,11,0.4), rgba(245,158,11,0.05))', minHeight: '40px' }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ delay: index * 0.08 + 0.3, duration: 0.4 }}
          />
        )}
      </div>
      {/* Right: Content */}
      <div className="pb-8">
        <h3 className="text-white font-bold text-base font-serif">{step.title}</h3>
        <p className="text-gold-400/70 text-xs mb-2">{step.titleHi}</p>
        <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function ProcessTimeline() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0f1e 0%, #0f1729 50%, #0a0f1e 100%)' }}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-gold-400/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-label justify-center">How We Work</span>
          <h2 className="heading-lg text-white mb-4">
            Our Construction <span className="gold-text">Journey</span>
          </h2>
          <span className="gold-line-center block" />
          <p className="text-white/50 text-base mt-5 max-w-xl mx-auto">
            A transparent, step-by-step process so you always know what's happening with your project.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:grid grid-cols-7 gap-4 relative">
          {steps.map((step, i) => (
            <TimelineStep key={step.step} step={step} index={i} total={steps.length} />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="flex flex-col md:hidden">
          {steps.map((step, i) => (
            <MobileTimelineStep key={step.step} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
