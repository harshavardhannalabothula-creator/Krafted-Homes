'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  CalendarCheck2, 
  KeyRound, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';

interface ThreeStepsSectionProps {
  onOpenBooking?: () => void;
}

export default function ThreeStepsSection({ onOpenBooking }: ThreeStepsSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Explore & Choose Your Villa',
      desc: 'Browse our curated collection of 3 & 4 BHK split-level villas with double-height living rooms and private backyard gardens.',
      icon: Building2,
      tag: 'Step 01 • Custom Floorplans',
      badge: 'Interactive CAD Preview',
    },
    {
      num: '02',
      title: 'Schedule a Guided Site Visit',
      desc: 'Pick your preferred date for a private walkthrough of the 10-acre township, sample villa models, and resort clubhouse.',
      icon: CalendarCheck2,
      tag: 'Step 02 • VIP Tour',
      badge: 'Instant Slot Confirmation',
    },
    {
      num: '03',
      title: 'Transparent Booking & Move-In',
      desc: 'Complete clear RERA documentation with zero hidden fees and enjoy a seamless handover process for your dream home.',
      icon: KeyRound,
      tag: 'Step 03 • Hassle-Free Handover',
      badge: '100% RERA Approved',
    },
  ];

  return (
    <section id="steps" className="w-full bg-white py-16 lg:py-24 relative overflow-hidden border-t border-slate-100">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: VISUAL EXPERIENCE IMAGE CARD (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full h-[460px] sm:h-[540px] rounded-[36px] overflow-hidden shadow-xl border-4 border-white group">
              <img 
                src="/images/teak_backyard_deck.jpg" 
                alt="Sunken Courtyard & Private Teak Deck at Antelia Groves" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Subtle Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Top Pill Badge */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0F172A] text-[11px] font-extrabold uppercase tracking-wider shadow-md border border-white/50">
                <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                <span>Sunken Courtyard &amp; Private Deck</span>
              </div>

              {/* Bottom Clean Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#F97316] flex items-center justify-center text-white shrink-0 shadow-md">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Private Lawn &amp; Sunken Deck</div>
                    <div className="text-[10px] text-slate-300 font-medium">Included with Every 3 &amp; 4 BHK Villa</div>
                  </div>
                </div>

                <span className="text-[10px] font-bold bg-white/10 px-2.5 py-1 rounded-full text-white border border-white/20">
                  RERA Approved
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3 INTERACTIVE STEPS (7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-100 mb-4 w-fit">
              ✦ BOOKING MADE SIMPLE
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] leading-[1.15] tracking-tight mb-4">
              Own Your Villa In <br />
              <span className="text-[#F97316]">3 Seamless Steps</span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed mb-8 max-w-xl">
              We have eliminated complex paperwork and waiting times. Experience a stress-free journey from site visit to keys handover.
            </p>

            {/* STEP CARDS FLOW */}
            <div className="space-y-4 mb-8">
              {steps.map((step, idx) => {
                const IconComponent = step.icon;
                const isActive = activeStep === idx;
                
                return (
                  <motion.div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    whileHover={{ scale: 1.01 }}
                    className={`p-5 sm:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-white border-[#F97316] shadow-xl shadow-orange-500/10 ring-1 ring-[#F97316]' 
                        : 'bg-white/70 hover:bg-white border-slate-200/80 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* Step Number + Icon Badge */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isActive ? 'bg-[#F97316] text-white shadow-md' : 'bg-orange-50 text-[#F97316]'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-[#F97316]">
                            {step.tag}
                          </span>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {step.badge}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-1.5 tracking-tight">
                          {step.title}
                        </h4>
                        
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ACTION & HOTLINE BLOCK */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book Your Villa Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a 
                href="tel:+919876543210"
                className="px-5 py-3.5 bg-white border border-slate-200 hover:border-orange-200 rounded-2xl flex items-center justify-center gap-3 text-slate-700 hover:text-[#F97316] transition-all text-xs font-bold shadow-sm"
              >
                <div className="w-7 h-7 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span>Call Hotline: +91 98765 43210</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

