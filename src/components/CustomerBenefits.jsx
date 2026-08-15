import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { IndianRupee, Package, CalendarCheck, X, ArrowRight } from 'lucide-react';

const benefits = [
  {
    id: 'site-visit',
    icon: IndianRupee,
    highlight: '₹1',
    title: 'Initial Site Visit',
    titleHi: 'प्रारंभिक साइट विज़िट',
    desc: 'आज ही कॉल करें और Initial Site Visit का लाभ उठाएं — चार्जेज मात्र',
    descEnd: '₹1/-',
    cta: 'Book Now',
  },
  {
    id: 'bulk-discount',
    icon: Package,
    highlight: '%',
    title: 'Bulk Order Discount',
    titleHi: 'बल्क ऑर्डर पर छूट',
    desc: 'मटेरियल के Bulk Order और Cash Payment पर आकर्षक छूट।',
    descEnd: '',
    cta: 'Know More',
  },
  {
    id: 'pre-booking',
    icon: CalendarCheck,
    highlight: '📅',
    title: 'Advance Pre-Booking',
    titleHi: 'एडवांस बुकिंग सुविधा',
    desc: 'मटेरियल की Advance Booking सुविधा उपलब्ध।',
    descEnd: '',
    cta: 'Book Now',
  },
];

function LeadFormModal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative w-full max-w-lg rounded-2xl border border-white/15 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f1729, #1a2540)' }}
      >
        {/* Header */}
        <div className="px-7 py-5 border-b border-white/10 flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-xl font-serif">Book Your Site Visit</h3>
            <p className="text-gold-400 text-sm mt-0.5">मात्र ₹1 में — आज ही बुक करें</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/15 transition-all"
            id="lead-modal-close-btn"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-7">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Full Name *"
                className="form-input"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                id="lead-form-name"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                className="form-input"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                id="lead-form-phone"
              />
              <select
                className="form-input"
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                id="lead-form-service"
              >
                <option value="">Select Service</option>
                <option value="site-visit">Initial Site Visit (₹1)</option>
                <option value="designing">House Designing</option>
                <option value="construction">New Construction</option>
                <option value="renovation">Renovation & Repairing</option>
                <option value="materials">Building Materials</option>
              </select>
              <textarea
                placeholder="Additional message (optional)"
                className="form-input resize-none"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                id="lead-form-message"
              />
              <button type="submit" className="btn-primary justify-center mt-1" id="lead-form-submit-btn">
                <span>Book Site Visit</span>
                <ArrowRight size={16} />
              </button>
              <p className="text-white/30 text-xs text-center">
                Our team will call you back to confirm your visit.
              </p>
            </form>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h4 className="text-white font-bold text-xl font-serif mb-2">Booking Received!</h4>
              <p className="text-white/60 text-sm">
                Thank you! Our team will contact you shortly to confirm your site visit.
              </p>
              <p className="text-gold-400 font-semibold text-sm mt-3">📞 9672100707 — Gorang Joshi</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CustomerBenefits() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1200 0%, #0a0f1e 40%, #1a1200 100%)' }}>
      {/* Gold glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gold-400/5 blur-3xl rounded-full" />
      </div>

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label justify-center text-gold-400">Special Offer</span>
          <h2 className="heading-lg text-white mb-4">
            Special Benefits for Our{' '}
            <span className="gold-text">Customers</span>
          </h2>
          <span className="gold-line-center block" />
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.15 }}
                className="group relative rounded-2xl border border-gold-400/25 bg-gold-400/5 p-8 hover:border-gold-400/50 hover:bg-gold-400/10 transition-all duration-400 hover:-translate-y-2 cursor-default text-center overflow-hidden"
              >
                {/* Background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gold-400/10 blur-2xl rounded-full pointer-events-none group-hover:bg-gold-400/20 transition-all duration-500" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-gold-400" strokeWidth={1.5} />
                </div>

                {/* Highlight */}
                {b.id === 'site-visit' ? (
                  <div className="mb-4">
                    <span className="text-5xl md:text-6xl font-black text-gold-400 font-serif leading-none">₹1</span>
                    <span className="block text-white/50 text-xs mt-1">Initial Site Visit</span>
                  </div>
                ) : b.id === 'bulk-discount' ? (
                  <div className="mb-4">
                    <span className="text-5xl md:text-6xl font-black text-gold-400 font-serif leading-none">💰</span>
                    <span className="block text-white/50 text-xs mt-1">Attractive Savings</span>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span className="text-5xl md:text-6xl font-black text-gold-400 font-serif leading-none">📅</span>
                    <span className="block text-white/50 text-xs mt-1">Easy Booking</span>
                  </div>
                )}

                <h3 className="text-white font-bold text-lg mb-1 font-serif">{b.title}</h3>
                <p className="text-gold-400/70 text-xs mb-4">{b.titleHi}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {b.desc}
                  {b.descEnd && <strong className="text-gold-400"> {b.descEnd}</strong>}
                </p>

                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-primary w-full justify-center text-xs py-3"
                  id={`benefit-${b.id}-cta-btn`}
                >
                  <span>{b.cta}</span>
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom WhatsApp strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-3">
            Questions? Connect directly with our team.
          </p>
          <a
            href="https://wa.me/919672100707?text=Hello%20Ramoorhy%20Construction%20%26%20Development%2C%20I%20would%20like%20to%20know%20about%20your%20special%20offers."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
          >
            <span className="text-lg">💬</span>
            WhatsApp: 9672100707
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && <LeadFormModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
