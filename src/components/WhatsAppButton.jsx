import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, ArrowRight } from 'lucide-react';

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappMsg = encodeURIComponent('Hello Ramoorhy Construction & Development, I would like to discuss my construction project.');

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-5 right-4 md:bottom-6 md:right-6 z-[900] flex flex-col items-end gap-3">
          {/* Popup card */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="rounded-2xl border border-white/15 overflow-hidden shadow-2xl w-[260px] md:w-[280px]"
                style={{ background: 'linear-gradient(135deg, #0f1729, #1a2540)' }}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-emerald-600">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageCircle size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-xs leading-tight">Ramoorhy Construction</p>
                      <p className="text-white/70 text-[10px]">Typically replies quickly</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-white/70 hover:text-white transition-colors"
                    id="whatsapp-popup-close-btn"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Body */}
                <div className="p-4">
                  <div className="bg-white/8 rounded-xl p-3 mb-4">
                    <p className="text-white/80 text-xs leading-relaxed">
                      👋 नमस्ते! I'm Gorang Joshi from Ramoorhy Construction.
                    </p>
                    <p className="text-white/60 text-xs mt-1">
                      How can we help build your dream home? 🏠
                    </p>
                  </div>

                  <a
                    href={`https://wa.me/919672100707?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs transition-all duration-300"
                    id="whatsapp-popup-chat-btn"
                  >
                    <span>Start Chat</span>
                    <ArrowRight size={14} />
                  </a>

                  <div className="mt-3 flex items-center gap-2 justify-center">
                    <Phone size={12} className="text-white/30" />
                    <a href="tel:9672100707" className="text-white/40 hover:text-white/70 text-xs transition-colors">
                      9672100707
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main floating button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.2 }}
            onClick={() => setOpen(!open)}
            className="whatsapp-float"
            aria-label="Open WhatsApp chat"
            id="whatsapp-float-btn"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={24} color="white" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.122 1.525 5.857L.057 23.625l5.922-1.449A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.933 0-3.74-.52-5.285-1.426L2.5 21.5l.946-4.127A9.95 9.95 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
