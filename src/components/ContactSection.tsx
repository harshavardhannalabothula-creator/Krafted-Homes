'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  onOpenBooking?: () => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    villaType: '4 BHK Grand Villa',
    timeframe: 'Within 30 Days',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        villaType: '4 BHK Grand Villa',
        timeframe: 'Within 30 Days',
        message: '',
      });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full bg-white py-16 text-[#0F172A] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#F97316] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-3">
            Let&apos;s Build Your Dream Villa Together
          </h2>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            Have questions about floorplans, pricing, or customized layout options? Speak directly with our luxury villa specialists or schedule a VIP site tour.
          </p>
        </div>

        {/* 2-COLUMN MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTACT INFORMATION & QUICK ACTION CARDS (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Call & WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#F97316]/50 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F97316] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316] block mb-1">
                    Direct Concierge Hotline
                  </span>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-1">+91 98765 43210</h3>
                  <p className="text-xs text-slate-500 mb-4">Available 9:00 AM – 8:00 PM (Mon - Sun)</p>
                  
                  <div className="flex items-center gap-3">
                    <a 
                      href="tel:+919876543210" 
                      className="px-4 py-2 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call Now
                    </a>
                    <a 
                      href="https://wa.me/919876543210" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Support Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#F97316]/50 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 block mb-1">
                    Official Support Email
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1">sales@kraftedhomes.com</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Typical response time: under 15 minutes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Center / Site Location Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#F97316]/50 hover:shadow-md transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                    Experience Center &amp; Site
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A] mb-1">Krafted Homes Experience Hub</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-2">
                    Sarjapur Main Road, Near Wipro Campus, Bengaluru, KA 560035
                  </p>
                  <button 
                    onClick={onOpenBooking}
                    className="text-xs font-bold text-[#F97316] hover:underline flex items-center gap-1 mt-1 cursor-pointer"
                  >
                    <span>Schedule In-Person Site Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: INQUIRY FORM (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">Thank You for Reaching Out!</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Your inquiry has been received. Our luxury sales advisor will get in touch with you on your registered phone number shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-4 mb-2">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-1">Send Us a Direct Message</h3>
                  <p className="text-xs text-slate-500">Fill in your details to receive customized villa brochures &amp; pricing structure.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Harsha Vardhan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Villa Configuration */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Interested Villa Type</label>
                    <select
                      value={formData.villaType}
                      onChange={(e) => setFormData({ ...formData, villaType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="3 BHK Premium Villa">3 BHK Premium Villa (2,400 sq.ft)</option>
                      <option value="4 BHK Grand Villa">4 BHK Grand Villa (3,200 sq.ft)</option>
                      <option value="5 BHK Presidential Estate">5 BHK Presidential Estate (4,800 sq.ft)</option>
                    </select>
                  </div>

                  {/* Timeframe */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Expected Purchase Timeframe</label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors cursor-pointer"
                    >
                      <option value="Immediate">Immediate / Site Visit Ready</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="1 - 3 Months">1 – 3 Months</option>
                      <option value="Planning Phase">Planning Phase</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Specific Requirements / Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your preferred plot direction, customization needs, or site visit date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F97316] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry &amp; Request Pricing</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
