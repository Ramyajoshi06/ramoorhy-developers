import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const hotspots = [
  {
    id: 'foundation',
    label: 'Foundation',
    labelHi: 'नींव',
    info: 'Strong Footing & RCC',
    desc: 'PCC, proper depth footing, and strong RCC foundation for long-lasting structural support.',
    x: '50%',
    y: '88%',
    color: '#d97706',
    svgArea: 'foundation',
  },
  {
    id: 'walls',
    label: 'Walls',
    labelHi: 'दीवारें',
    info: 'Quality Brick Work',
    desc: 'Expert brick work, plastering and finishing for strong, smooth and beautiful walls.',
    x: '30%',
    y: '65%',
    color: '#60a5fa',
    svgArea: 'wall-left',
  },
  {
    id: 'roof',
    label: 'Roof',
    labelHi: 'छत',
    info: 'Strong Slab & Waterproofing',
    desc: 'RCC slab with proper mix ratios and advanced tank waterproofing to prevent leakage.',
    x: '50%',
    y: '28%',
    color: '#f59e0b',
    svgArea: 'roof',
  },
  {
    id: 'interior',
    label: 'Interior',
    labelHi: 'इंटीरियर',
    info: 'Tile / Marble / Granite',
    desc: 'Premium tile, marble and granite fitting for floors, bathrooms, kitchens and living areas.',
    x: '50%',
    y: '65%',
    color: '#34d399',
    svgArea: 'interior',
  },
  {
    id: 'plumbing',
    label: 'Plumbing',
    labelHi: 'प्लंबिंग',
    info: 'Complete Plumbing Solutions',
    desc: 'Full plumbing with quality pipes, taps, and fittings for water supply and drainage.',
    x: '70%',
    y: '65%',
    color: '#38bdf8',
    svgArea: 'wall-right',
  },
  {
    id: 'electrical',
    label: 'Electrical',
    labelHi: 'विद्युत',
    info: 'Electrical Installation',
    desc: 'Safe and proper electrical wiring, switch boards, and electrical equipment installation.',
    x: '80%',
    y: '50%',
    color: '#facc15',
    svgArea: 'electrical',
  },
];

export default function InteractiveHouse() {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  const active = hotspots.find(h => h.id === activeHotspot);

  return (
    <section className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(96,165,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">Interactive</span>
          <h2 className="heading-lg text-white mb-4">
            Explore Your <span className="gold-text">Dream Home</span>
          </h2>
          <span className="gold-line-center block" />
          <p className="text-white/50 text-base mt-5 max-w-xl mx-auto">
            Click or hover on different parts of the house to see our complete construction solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive House SVG */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <svg
                viewBox="0 0 400 350"
                className="w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid background */}
                <defs>
                  <pattern id="housegrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(96,165,250,0.15)" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="400" height="350" fill="url(#housegrid)" />

                {/* Foundation */}
                <rect
                  x="60" y="295" width="280" height="35" rx="3"
                  fill={activeHotspot === 'foundation' ? 'rgba(180,83,9,0.6)' : 'rgba(120,60,10,0.4)'}
                  stroke={activeHotspot === 'foundation' ? '#f59e0b' : '#78350f'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveHotspot(activeHotspot === 'foundation' ? null : 'foundation')}
                />
                <text x="200" y="317" fontSize="11" fill="rgba(245,158,11,0.7)" textAnchor="middle" className="pointer-events-none select-none">FOUNDATION</text>

                {/* Left Wall */}
                <rect
                  x="60" y="200" width="60" height="95" rx="2"
                  fill={activeHotspot === 'walls' ? 'rgba(96,165,250,0.3)' : 'rgba(96,165,250,0.1)'}
                  stroke={activeHotspot === 'walls' ? '#60a5fa' : 'rgba(96,165,250,0.3)'}
                  strokeWidth="1.5"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveHotspot(activeHotspot === 'walls' ? null : 'walls')}
                />

                {/* Right Wall */}
                <rect
                  x="280" y="200" width="60" height="95" rx="2"
                  fill={activeHotspot === 'plumbing' ? 'rgba(56,189,248,0.3)' : 'rgba(96,165,250,0.1)'}
                  stroke={activeHotspot === 'plumbing' ? '#38bdf8' : 'rgba(96,165,250,0.3)'}
                  strokeWidth="1.5"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveHotspot(activeHotspot === 'plumbing' ? null : 'plumbing')}
                />

                {/* Interior center area */}
                <rect
                  x="120" y="200" width="160" height="95" rx="2"
                  fill={activeHotspot === 'interior' ? 'rgba(52,211,153,0.2)' : 'rgba(52,211,153,0.05)'}
                  stroke={activeHotspot === 'interior' ? '#34d399' : 'rgba(96,165,250,0.2)'}
                  strokeWidth="1"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveHotspot(activeHotspot === 'interior' ? null : 'interior')}
                />
                <text x="200" y="252" fontSize="9" fill="rgba(52,211,153,0.5)" textAnchor="middle" className="pointer-events-none select-none">INTERIOR</text>

                {/* Door */}
                <rect x="175" y="250" width="50" height="45" rx="3"
                  fill="rgba(120,60,10,0.5)" stroke="rgba(180,83,9,0.6)" strokeWidth="1.5"
                  className="pointer-events-none"
                />
                <circle cx="220" cy="275" r="3" fill="rgba(245,158,11,0.6)" className="pointer-events-none" />

                {/* Windows */}
                {[80, 245].map((wx, idx) => (
                  <rect
                    key={wx} x={wx} y="215" width="36" height="30" rx="3"
                    fill="rgba(147,210,255,0.15)" stroke="rgba(147,210,255,0.4)" strokeWidth="1.5"
                    className="pointer-events-none"
                  />
                ))}

                {/* Roof */}
                <path
                  d="M 40 200 L 200 80 L 360 200 Z"
                  fill={activeHotspot === 'roof' ? 'rgba(245,158,11,0.35)' : 'rgba(245,158,11,0.12)'}
                  stroke={activeHotspot === 'roof' ? '#f59e0b' : 'rgba(245,158,11,0.5)'}
                  strokeWidth="2.5"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveHotspot(activeHotspot === 'roof' ? null : 'roof')}
                />
                <text x="200" y="160" fontSize="10" fill="rgba(245,158,11,0.7)" textAnchor="middle" className="pointer-events-none select-none">ROOF / SLAB</text>

                {/* Chimney/Electrical symbol */}
                <rect
                  x="290" y="120" width="30" height="80" rx="4"
                  fill={activeHotspot === 'electrical' ? 'rgba(250,204,21,0.25)' : 'rgba(250,204,21,0.05)'}
                  stroke={activeHotspot === 'electrical' ? '#facc15' : 'rgba(250,204,21,0.2)'}
                  strokeWidth="1.5"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveHotspot(activeHotspot === 'electrical' ? null : 'electrical')}
                />
                <text x="305" y="168" fontSize="9" fill="rgba(250,204,21,0.5)" textAnchor="middle" className="pointer-events-none select-none" transform="rotate(-90, 305, 168)">ELEC</text>

                {/* Hotspot dots */}
                {hotspots.map((h) => {
                  const cx = parseFloat(h.x) / 100 * 400;
                  const cy = parseFloat(h.y) / 100 * 350;
                  return (
                    <g key={h.id} onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)} className="cursor-pointer">
                      <circle cx={cx} cy={cy} r="12" fill="rgba(0,0,0,0.4)" stroke={h.color} strokeWidth="1.5" opacity={activeHotspot === h.id ? 1 : 0.7} />
                      <circle cx={cx} cy={cy} r="5" fill={h.color} opacity={activeHotspot === h.id ? 1 : 0.8}>
                        {activeHotspot !== h.id && (
                          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                        )}
                      </circle>
                      {activeHotspot === h.id && (
                        <circle cx={cx} cy={cy} r="18" fill="none" stroke={h.color} strokeWidth="1" opacity="0.5">
                          <animate attributeName="r" values="18;26" dur="0.8s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.5;0" dur="0.8s" repeatCount="indefinite" />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
                  style={{
                    background: activeHotspot === h.id ? h.color + '20' : 'rgba(255,255,255,0.06)',
                    color: activeHotspot === h.id ? h.color : 'rgba(255,255,255,0.5)',
                    border: `1px solid ${activeHotspot === h.id ? h.color + '50' : 'rgba(255,255,255,0.1)'}`,
                  }}
                  id={`house-hotspot-${h.id}-btn`}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: h.color }} />
                  {h.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {active ? (
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="p-8 rounded-2xl border"
                  style={{
                    background: `linear-gradient(135deg, ${active.color}10, rgba(15,23,42,0.9))`,
                    borderColor: active.color + '30',
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: active.color + '20', border: `1.5px solid ${active.color}40` }}
                  >
                    <span className="text-2xl">🏠</span>
                  </div>
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="text-white font-bold text-2xl font-serif">{active.label}</h3>
                    <span className="text-sm font-medium" style={{ color: active.color + 'aa' }}>{active.labelHi}</span>
                  </div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-5"
                    style={{ background: active.color + '20', color: active.color, border: `1px solid ${active.color}40` }}
                  >
                    {active.info}
                  </div>
                  <p className="text-white/65 text-base leading-relaxed mb-6">{active.desc}</p>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="btn-primary inline-flex text-xs py-3"
                    id={`house-${active.id}-enquire-btn`}
                  >
                    <span>Enquire About {active.label}</span>
                  </a>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 rounded-2xl border border-white/8 bg-white/3 flex flex-col items-center justify-center text-center min-h-[280px]"
                >
                  <div className="text-5xl mb-4 animate-float">🏠</div>
                  <h3 className="text-white font-serif font-bold text-xl mb-2">Explore Your Home</h3>
                  <p className="text-white/40 text-sm max-w-xs">
                    Click on any part of the house illustration to discover our complete construction solutions.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2 justify-center">
                    {hotspots.map(h => (
                      <span key={h.id} className="w-2 h-2 rounded-full" style={{ background: h.color }} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* All features list */}
            <div className="mt-6 grid grid-cols-2 gap-2">
              {hotspots.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(activeHotspot === h.id ? null : h.id)}
                  className="flex items-center gap-2 p-3 rounded-xl text-left transition-all duration-300 hover:bg-white/5 border"
                  style={{
                    borderColor: activeHotspot === h.id ? h.color + '40' : 'transparent',
                    background: activeHotspot === h.id ? h.color + '08' : 'transparent',
                  }}
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: h.color }} />
                  <div>
                    <p className="text-white/80 text-xs font-semibold">{h.label}</p>
                    <p className="text-white/35 text-[10px]">{h.info}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
