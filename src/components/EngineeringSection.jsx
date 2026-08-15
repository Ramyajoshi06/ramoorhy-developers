import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2, Layers, Zap } from 'lucide-react';

const checklistItems = [
  { text: 'सही सीमेंट-सैंड और कंक्रीट रेश्यो का पालन', en: 'Correct Cement-Sand-Concrete Ratio' },
  { text: 'सटीक Plumb, Level और Right Angle', en: 'Accurate Plumb, Level & Right Angle' },
  { text: 'मजबूत RCC Structures', en: 'Strong RCC Structures' },
  { text: 'PCC और सही गहराई की Footing', en: 'PCC & Proper Depth Footing' },
  { text: 'मजबूत Columns, Slab, Beams और Lintels', en: 'Strong Columns, Slab, Beams & Lintels' },
  { text: 'बेहतर Brick Work और Smooth Plaster', en: 'Quality Brick Work & Smooth Plaster' },
  { text: 'Advanced Tank Waterproofing', en: 'Advanced Tank Waterproofing' },
  { text: 'Tile, Marble और Granite Fitting', en: 'Tile, Marble & Granite Fitting' },
  { text: 'Basic Termite Treatment', en: 'Basic Termite Treatment' },
];

function CheckItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="checklist-item group"
    >
      <CheckCircle2
        size={20}
        className="text-gold-400 shrink-0 group-hover:scale-110 transition-transform duration-300"
        strokeWidth={2}
      />
      <div className="flex-1 min-w-0">
        <p className="text-white/90 text-sm font-medium leading-snug">{item.text}</p>
        <p className="text-white/40 text-xs mt-0.5">{item.en}</p>
      </div>
    </motion.div>
  );
}

export default function EngineeringSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section className="py-24 md:py-32 bg-navy-950 relative overflow-hidden">
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96,165,250,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96,165,250,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-gold-400/20 pointer-events-none" />
      <div className="absolute top-8 right-8 w-20 h-20 border-t-2 border-r-2 border-gold-400/20 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-2 border-l-2 border-gold-400/20 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-gold-400/20 pointer-events-none" />

      <div className="section-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Title + Visual */}
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -50 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Quality Standard</span>
            <h2 className="heading-lg text-white mb-4">
              Built With{' '}
              <span className="gold-text">Precision</span>
            </h2>
            <span className="gold-line block mb-6" />
            <p className="text-white/65 text-base leading-relaxed mb-4">
              तकनीकी रूप से सटीक काम
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-10">
              Every construction project at Ramoorhy follows strict civil engineering principles.
              Our team ensures quality at every step — from the foundation to the final finishing.
            </p>

            {/* Blueprint SVG House Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-blue-400/20 bg-navy-800/60 p-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-400/70" />
                <div className="w-3 h-3 rounded-full bg-gold-400/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                <span className="ml-2 text-white/30 text-xs font-mono">construction-blueprint.dwg</span>
              </div>

              {/* Simple SVG Blueprint */}
              <svg viewBox="0 0 300 200" className="w-full max-w-sm mx-auto" fill="none">
                {/* Grid */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(96,165,250,0.2)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="300" height="200" fill="url(#grid)" />

                {/* Foundation */}
                <motion.rect
                  x="30" y="165" width="240" height="20" rx="2"
                  fill="rgba(180,83,9,0.5)" stroke="#d97706" strokeWidth="1.5"
                  initial={{ scaleX: 0 }} animate={titleInView ? { scaleX: 1 } : {}}
                  style={{ transformOrigin: 'center' }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                {/* Walls */}
                <motion.rect
                  x="45" y="110" width="30" height="55" rx="1"
                  fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.6)" strokeWidth="1"
                  initial={{ scaleY: 0 }} animate={titleInView ? { scaleY: 1 } : {}}
                  style={{ transformOrigin: 'bottom' }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                />
                <motion.rect
                  x="225" y="110" width="30" height="55" rx="1"
                  fill="rgba(96,165,250,0.2)" stroke="rgba(96,165,250,0.6)" strokeWidth="1"
                  initial={{ scaleY: 0 }} animate={titleInView ? { scaleY: 1 } : {}}
                  style={{ transformOrigin: 'bottom' }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                />
                <motion.rect
                  x="45" y="110" width="210" height="8" rx="1"
                  fill="rgba(96,165,250,0.15)" stroke="rgba(96,165,250,0.4)" strokeWidth="1"
                  initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.4 }}
                />
                {/* Roof */}
                <motion.path
                  d="M 30 110 L 150 55 L 270 110 Z"
                  fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="2"
                  initial={{ opacity: 0, pathLength: 0 }} animate={titleInView ? { opacity: 1, pathLength: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.7 }}
                />
                {/* Door */}
                <motion.rect
                  x="130" y="130" width="40" height="35" rx="2"
                  fill="rgba(180,83,9,0.3)" stroke="#d97706" strokeWidth="1"
                  initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.1, duration: 0.3 }}
                />
                {/* Windows */}
                {[65, 185].map((x) => (
                  <motion.rect
                    key={x} x={x} y="120" width="28" height="22" rx="2"
                    fill="rgba(147,210,255,0.2)" stroke="rgba(147,210,255,0.5)" strokeWidth="1"
                    initial={{ opacity: 0 }} animate={titleInView ? { opacity: 1 } : {}}
                    transition={{ delay: 1.2, duration: 0.3 }}
                  />
                ))}
                {/* Dimension lines */}
                <motion.line x1="30" y1="185" x2="270" y2="185" stroke="rgba(245,158,11,0.4)" strokeWidth="0.5" strokeDasharray="4,3"
                  initial={{ pathLength: 0 }} animate={titleInView ? { pathLength: 1 } : {}} transition={{ delay: 1.3, duration: 0.5 }} />
                <text x="148" y="198" fontSize="8" fill="rgba(245,158,11,0.7)" textAnchor="middle">WIDTH</text>
              </svg>

              <div className="flex items-center justify-center gap-2 mt-3">
                <Layers size={14} className="text-blue-400" />
                <span className="text-blue-400/70 text-xs font-mono">Blueprint — Design Phase</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Checklist */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <Zap size={20} className="text-gold-400" />
              <h3 className="text-white font-bold text-lg font-serif">
                Our Construction Quality Checklist
              </h3>
            </motion.div>

            <div className="flex flex-col gap-3">
              {checklistItems.map((item, i) => (
                <CheckItem key={item.en} item={item} index={i} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8 p-5 rounded-xl border border-gold-400/20 bg-gold-400/5"
            >
              <p className="text-gold-400 font-semibold text-sm mb-1">Quality Promise</p>
              <p className="text-white/60 text-sm leading-relaxed">
                आपके सपनों के घर को सिविल इंजीनियरिंग के सटीक नियमों, आधुनिक तकनीकों,
                मजबूती और सटीकता से निर्धारित समय पर बनवाना हुआ आसान।
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
