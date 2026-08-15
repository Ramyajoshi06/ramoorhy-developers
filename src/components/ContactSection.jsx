import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, User, MessageSquare, ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';

const services = [
  'House Designing',
  'New Construction',
  'Renovation & Repairing',
  'Building Materials',
  'Engineering Support',
  'Bank Loan Support',
  'Site Visit (₹1)',
  'Other',
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', location: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const whatsappMsg = encodeURIComponent('Hello Ramoorhy Construction & Development, I would like to discuss my construction project.');

  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-400/3 blur-3xl rounded-full pointer-events-none" />

      <div className="section-wrapper">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">Get In Touch</span>
          <h2 className="heading-lg text-white mb-4">
            Let's Build <span className="gold-text">Together</span>
          </h2>
          <span className="gold-line-center block" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="heading-md text-white mb-2 font-serif">
              Contact Us Directly
            </h3>
            <p className="text-white/50 text-sm mb-8 leading-relaxed">
              Have questions about construction, materials, or your project? Reach out — we're happy to help.
            </p>

            {/* Contact Items */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: User,
                  label: 'Contact Person',
                  value: 'Gorang Joshi',
                  sub: 'Ramoorhy Construction & Development',
                  color: '#f59e0b',
                },
                {
                  icon: Phone,
                  label: 'Phone / WhatsApp',
                  value: '9672100707',
                  href: 'tel:9672100707',
                  color: '#34d399',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'joshgorang@gmail.com',
                  href: 'mailto:joshgorang@gmail.com',
                  color: '#60a5fa',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Dungarpur, Rajasthan',
                  color: '#c084fc',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: item.color + '15', border: `1.5px solid ${item.color}30` }}
                    >
                      <Icon size={18} style={{ color: item.color }} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white font-semibold text-base hover:text-gold-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold text-base">{item.value}</p>
                      )}
                      {item.sub && <p className="text-white/40 text-xs mt-0.5">{item.sub}</p>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp direct */}
            <div className="mt-10 p-6 rounded-2xl border border-emerald-400/20 bg-emerald-400/5">
              <p className="text-white/60 text-sm mb-3">Prefer to chat? Message us on WhatsApp:</p>
              <a
                href={`https://wa.me/919672100707?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm text-emerald-400 border border-emerald-400/30 bg-emerald-400/8 hover:bg-emerald-400/15 transition-all duration-300 hover:scale-105"
                id="contact-whatsapp-btn"
              >
                <MessageCircle size={18} />
                WhatsApp: 9672100707
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/3 p-7 md:p-8 backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <h3 className="text-white font-bold text-xl font-serif mb-2">Send Enquiry</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/50 text-xs font-medium mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="form-input"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        id="contact-form-name"
                      />
                    </div>
                    <div>
                      <label className="text-white/50 text-xs font-medium mb-1.5 block">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        className="form-input"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                        id="contact-form-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="form-input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      id="contact-form-email"
                    />
                  </div>

                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Service Required</label>
                    <select
                      className="form-input"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      id="contact-form-service"
                    >
                      <option value="">Select a service...</option>
                      {services.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Plot / Project Location</label>
                    <input
                      type="text"
                      placeholder="Location of your plot or project"
                      className="form-input"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      id="contact-form-location"
                    />
                  </div>

                  <div>
                    <label className="text-white/50 text-xs font-medium mb-1.5 block">Your Message</label>
                    <textarea
                      placeholder="Tell us about your project, requirements, or questions..."
                      className="form-input resize-none"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      id="contact-form-message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary justify-center mt-1 relative"
                    disabled={loading}
                    id="contact-form-submit-btn"
                  >
                    {loading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <p className="text-white/25 text-xs text-center">
                    We'll respond within 24 hours. Your information is safe with us.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-emerald-400/15 border-2 border-emerald-400/40 flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={36} className="text-emerald-400" strokeWidth={1.5} />
                  </motion.div>
                  <h4 className="text-white font-bold text-2xl font-serif mb-3">Enquiry Sent!</h4>
                  <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-5">
                    Thank you for reaching out! Our team will contact you shortly to discuss your project.
                  </p>
                  <p className="text-gold-400 font-semibold text-sm mb-2">📞 9672100707 — Gorang Joshi</p>
                  <p className="text-white/30 text-xs">Ramoorhy Construction & Development, Dungarpur</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', location: '', message: '' }); }}
                    className="mt-6 text-white/40 hover:text-white/70 text-sm underline transition-colors"
                  >
                    Submit another enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
