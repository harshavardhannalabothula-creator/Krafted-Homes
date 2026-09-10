'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, User, Phone, Mail, CheckCircle2, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    facing: 'Type A East Facing (2,262 sq.ft BUA)',
    date: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg bg-[#F4F0E7] p-6 sm:p-8 rounded-xs border border-[#D5D0C6] shadow-2xl text-[#202631]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#202631]/60 hover:text-[#111722] p-1 rounded-full hover:bg-[#DED8CC]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#B18A4A]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#B18A4A] font-bold">
                  EXCLUSIVE VIP INQUIRY
                </span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#111722] mb-2">
                Schedule Private Villa Tour
              </h3>
              <p className="text-[#202631]/80 text-xs font-light mb-6 leading-relaxed">
                Experience Antelia Groves in person. Book a guided walkthrough of our 10-acre estate and split-level Type A model villa.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#202631] font-mono font-bold mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#202631]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mahesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#DED8CC]/40 border border-[#D5D0C6] rounded-xs pl-10 pr-4 py-2.5 text-xs text-[#202631] placeholder-[#202631]/50 focus:outline-none focus:border-[#111722]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#202631] font-mono font-bold mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#202631]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#DED8CC]/40 border border-[#D5D0C6] rounded-xs pl-10 pr-4 py-2.5 text-xs text-[#202631] placeholder-[#202631]/50 focus:outline-none focus:border-[#111722]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#202631] font-mono font-bold mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#202631]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="mahesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#DED8CC]/40 border border-[#D5D0C6] rounded-xs pl-10 pr-4 py-2.5 text-xs text-[#202631] placeholder-[#202631]/50 focus:outline-none focus:border-[#111722]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#202631] font-mono font-bold mb-1.5">
                    Preferred Villa Configuration
                  </label>
                  <select
                    value={formData.facing}
                    onChange={(e) => setFormData({ ...formData, facing: e.target.value })}
                    className="w-full bg-[#DED8CC]/40 border border-[#D5D0C6] rounded-xs px-3 py-2.5 text-xs text-[#202631] focus:outline-none focus:border-[#111722]"
                  >
                    <option value="Type A East Facing (2,262 sq.ft BUA)">Type A East Facing (2,262 sq.ft BUA)</option>
                    <option value="Type A West Facing (2,262 sq.ft BUA)">Type A West Facing (2,262 sq.ft BUA)</option>
                    <option value="Type B 4 BHK Grand Villa (3,000 sq.ft BUA)">Type B 4 BHK Grand Villa (3,000 sq.ft BUA)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#202631] font-mono font-bold mb-1.5">
                    Preferred Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#202631]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#DED8CC]/40 border border-[#D5D0C6] rounded-xs pl-10 pr-4 py-2.5 text-xs text-[#202631] focus:outline-none focus:border-[#111722]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 rounded-xs text-xs font-bold font-mono uppercase tracking-widest text-white bg-[#111722] hover:bg-[#B18A4A] hover:text-[#111722] transition-all shadow-sm"
                >
                  Confirm Visit Request
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#F4F0E7] border border-[#B18A4A] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#B18A4A]" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#111722] mb-2">Tour Reserved!</h3>
              <p className="text-[#202631]/80 text-xs font-light mb-6">
                Thank you, <span className="text-[#B18A4A] font-bold">{formData.name}</span>. Our luxury estate manager will contact you at {formData.phone} shortly to finalize your private tour of Antelia Groves.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-bold font-mono uppercase tracking-widest bg-[#111722] text-white hover:bg-[#B18A4A] hover:text-[#111722] transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
