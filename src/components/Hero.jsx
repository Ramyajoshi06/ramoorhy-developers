import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, PlayCircle } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const next = document.getElementById('about');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Modern construction project background"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/75 to-navy-950/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-navy-950/60" />
      </div>

      {/* Video slot (drop a video file here in the future) */}
      {/* <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline poster={heroBg}>
        <source src="/hero-video.mp4" type="video/mp4" />
      </video> */}

      {/* Architectural grid pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent z-10 opacity-60" />

      {/* Content */}
      <div className="relative z-10 section-wrapper w-full pt-32 pb-24 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/40 bg-gold-400/10 text-gold-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            CONSTRUCTION • DEVELOPMENT • MATERIALS
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="mb-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h1
            className="heading-xl text-white mb-2"
            variants={fadeUp}
            custom={0.4}
          >
            Building Your{' '}
            <span className="gold-text">Vision.</span>
          </motion.h1>
          <motion.h1
            className="heading-xl text-white"
            variants={fadeUp}
            custom={0.55}
          >
            Building Your{' '}
            <span className="gold-text">Future.</span>
          </motion.h1>
        </motion.div>

        {/* Hindi Subheading */}
        <motion.p
          className="text-white/60 text-base md:text-lg font-medium mt-4 mb-3"
          style={{ fontFamily: 'Inter, sans-serif' }}
          variants={fadeUp}
          custom={0.65}
          initial="hidden"
          animate="visible"
        >
          आपके सपनों का घर, मजबूती और सटीकता के साथ।
        </motion.p>

        {/* English Supporting Text */}
        <motion.p
          className="text-white/55 text-base md:text-lg max-w-2xl mt-2 leading-relaxed"
          variants={fadeUp}
          custom={0.75}
          initial="hidden"
          animate="visible"
        >
          From house designing and new construction to renovation and quality
          building materials — complete solutions under one roof.
        </motion.p>

        {/* Location Tag */}
        <motion.div
          className="mt-4 mb-10"
          variants={fadeUp}
          custom={0.85}
          initial="hidden"
          animate="visible"
        >
          <span className="text-gold-400/80 text-sm font-medium tracking-widest uppercase">
            📍 Dungarpur, Rajasthan
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center"
          variants={fadeUp}
          custom={0.95}
          initial="hidden"
          animate="visible"
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary text-sm px-8 py-4"
            id="hero-start-project-btn"
          >
            <span>Start Your Project</span>
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-outline text-sm px-8 py-4"
            id="hero-explore-services-btn"
          >
            <PlayCircle size={16} />
            <span>Explore Services</span>
          </a>
        </motion.div>

        {/* Stats row — icon-based only, no fake numbers */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-lg md:max-w-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
        >
          {[
            { icon: '🏗️', label: 'New Construction' },
            { icon: '🔨', label: 'Renovation' },
            { icon: '🧱', label: 'Quality Materials' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="text-2xl md:text-3xl">{item.icon}</span>
              <span className="text-white/50 text-xs font-medium text-center leading-tight">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-gold-400 transition-colors cursor-pointer bg-transparent border-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        aria-label="Scroll down"
        id="hero-scroll-btn"
      >
        <span className="text-xs tracking-[0.2em] uppercase font-medium">Scroll</span>
        <ChevronDown size={20} className="animate-scroll-bounce" />
      </motion.button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent z-5 pointer-events-none" />
    </section>
  );
}
