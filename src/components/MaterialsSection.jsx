import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Layers, Paintbrush, Droplets, Zap, ChevronDown, MessageCircle } from 'lucide-react';

const categories = [
  {
    id: 'structural',
    icon: Layers,
    title: 'Structural Materials',
    titleHi: 'संरचनात्मक सामग्री',
    color: '#f59e0b',
    colorBg: 'rgba(245,158,11,0.08)',
    colorBorder: 'rgba(245,158,11,0.25)',
    items: [
      'Branded Cement', 'Rebar / Sariya', 'Bricks', 'Gitti / Concrete',
      'Sand', 'Stone', 'RCC Ply',
    ],
  },
  {
    id: 'finishing',
    icon: Paintbrush,
    title: 'Finishing Materials',
    titleHi: 'फिनिशिंग सामग्री',
    color: '#60a5fa',
    colorBg: 'rgba(96,165,250,0.08)',
    colorBorder: 'rgba(96,165,250,0.25)',
    items: [
      'Tiles', 'Temple Tiles', 'Kitchen Tiles', 'Bathroom Tiles',
      'Hall Tiles', 'General Tiles', 'Construction Chemicals',
    ],
  },
  {
    id: 'plumbing',
    icon: Droplets,
    title: 'Plumbing',
    titleHi: 'प्लंबिंग',
    color: '#34d399',
    colorBg: 'rgba(52,211,153,0.08)',
    colorBorder: 'rgba(52,211,153,0.25)',
    items: [
      'Taps', 'Water Pipes', 'Plumbing Accessories',
    ],
  },
  {
    id: 'electrical',
    icon: Zap,
    title: 'Electrical',
    titleHi: 'विद्युत',
    color: '#c084fc',
    colorBg: 'rgba(192,132,252,0.08)',
    colorBorder: 'rgba(192,132,252,0.25)',
    items: [
      'Light Switches', 'Switch Boards', 'Wires', 'Electrical Pipes', 'Electrical Equipment',
    ],
  },
];

function MaterialCard({ cat, index }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = cat.icon;

  const whatsappMsg = encodeURIComponent(`Hello Ramoorhy Construction & Development, I would like to enquire about ${cat.title}.`);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12 }}
      className="rounded-2xl border overflow-hidden transition-all duration-400"
      style={{
        background: expanded ? cat.colorBg : 'rgba(15,23,42,0.6)',
        borderColor: expanded ? cat.colorBorder : 'rgba(255,255,255,0.08)',
      }}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 p-6 text-left group"
        id={`material-${cat.id}-toggle`}
        aria-expanded={expanded}
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
          style={{ background: cat.colorBg, border: `1.5px solid ${cat.colorBorder}` }}
        >
          <Icon size={22} style={{ color: cat.color }} strokeWidth={1.5} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-lg font-serif">{cat.title}</h3>
          <p className="text-sm font-medium" style={{ color: cat.color + 'aa' }}>{cat.titleHi}</p>
        </div>

        <div className="flex items-center gap-3">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-bold"
            style={{ background: cat.colorBg, color: cat.color, border: `1px solid ${cat.colorBorder}` }}
          >
            {cat.items.length} items
          </span>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={18} className="text-white/40" />
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="w-full h-px mb-5" style={{ background: `linear-gradient(90deg, ${cat.colorBorder}, transparent)` }} />

              {/* Items grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6">
                {cat.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                    className="px-3 py-2 rounded-lg text-xs font-medium text-center"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'rgba(255,255,255,0.8)',
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

              {/* Enquire Now */}
              <a
                href={`https://wa.me/919672100707?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: cat.colorBg,
                  color: cat.color,
                  border: `1.5px solid ${cat.colorBorder}`,
                }}
                id={`material-${cat.id}-enquire-btn`}
              >
                <MessageCircle size={16} />
                Enquire Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function MaterialsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  return (
    <section id="materials" className="py-16 md:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label justify-center">Materials</span>
          <h2 className="heading-lg text-white mb-4">
            Quality Building <span className="gold-text">Materials</span>
          </h2>
          <span className="gold-line-center block" />
          <p className="text-white/55 text-base mt-5 max-w-2xl mx-auto">
            उच्च गुणवत्ता का मटेरियल —{' '}
            <span className="text-gold-400 font-medium">एक ही छत के नीचे</span>
          </p>
          <p className="text-white/40 text-sm mt-2 max-w-xl mx-auto">
            From structural materials to finishing touches — all under one roof at Ramoorhy.
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat, i) => (
            <MaterialCard key={cat.id} cat={cat} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-white/30 text-sm text-center mt-10"
        >
          Click on any category to explore available materials and enquire via WhatsApp.
        </motion.p>
      </div>
    </section>
  );
}
