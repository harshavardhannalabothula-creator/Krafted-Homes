'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

interface ThreeStepsSectionProps {
  onOpenBooking?: () => void;
}

export default function ThreeStepsSection({ onOpenBooking }: ThreeStepsSectionProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      num: '01',
      tag: 'DISCOVER',
      title: 'Explore Your Villa',
      desc: 'Explore the Antelia Groves community, understand the villa collections and discover the home that fits your lifestyle.',
      actionText: 'Explore Villas →',
      actionHref: '#featured-villas',
      image: '/images/hero_villa_facade.png',
      badge: 'Exterior & Masterplan View',
    },
    {
      id: 1,
      num: '02',
      tag: 'EXPERIENCE',
      title: 'Visit the Community',
      desc: 'Schedule a guided site visit, experience the villa spaces, explore the clubhouse and understand the community first-hand.',
      actionText: 'Plan a Visit →',
      actionHref: '#booking',
      image: '/images/clubhouse.jpg',
      badge: 'Resort Clubhouse & Walkthrough',
    },
    {
      id: 2,
      num: '03',
      tag: 'OWN',
      title: 'Begin Your Journey',
      desc: 'Move forward with a clear and guided booking process, supported by our team from documentation through the next steps.',
      actionText: 'Talk to Our Team →',
      actionHref: '#booking',
      image: '/images/handing_keys.png',
      badge: 'Transparent Handover Process',
    },
  ];

  const projectFacts = [
    {
      value: '10+ ACRES',
      desc: 'Community scale',
    },
    {
      value: '189 VILLAS',
      desc: 'Planned homes',
    },
    {
      value: '70% OPEN',
      desc: 'Green & open spaces',
    },
    {
      value: '15K SQ.FT',
      desc: 'Clubhouse',
    },
  ];

  const currentStep = steps[activeStep];

  return (
    <section id="steps" className="w-full bg-white py-12 lg:py-16 relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION INTRO / COMPACT HEADER */}
        <div className="max-w-3xl mb-8 lg:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-3"
          >
            <span>05 — YOUR VILLA JOURNEY</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F172A] leading-[1.16] tracking-tight mb-3"
          >
            From First Visit <br className="hidden sm:inline" />
            <span className="text-[#F97316]">to Your New Home</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-xl"
          >
            A simple, guided journey from discovering Antelia Groves to stepping into your new villa.
          </motion.p>
        </div>

        {/* MAIN COMPOSITION: 45% IMAGE LEFT + 55% VERTICAL JOURNEY TIMELINE RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-10 lg:mb-12">
          
          {/* LEFT COLUMN: MAIN ARCHITECTURAL VISUAL (45% Width / Span 5) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative min-h-[340px] sm:min-h-[400px] lg:h-auto rounded-[24px] overflow-hidden shadow-lg border-2 border-white bg-slate-900 group flex flex-col justify-between"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentStep.image}
                src={currentStep.image}
                alt={currentStep.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1.00 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

            {/* Top Floating Badge */}
            <div className="relative z-10 p-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest text-white block">
                  ANTELIA GROVES
                </span>
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-wider">
                  10-ACRE VILLA COMMUNITY
                </span>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0F172A] text-[10px] font-extrabold uppercase tracking-wider border border-white/60 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#F97316]" />
                <span>{currentStep.badge}</span>
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 p-5 text-white">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316]">
                  STEP {currentStep.num} — {currentStep.tag}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                Your journey begins here.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: VERTICAL JOURNEY TIMELINE (55% Width / Span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-4"
          >
            <div className="relative pl-6 space-y-4">
              {/* Thin Vertical Connecting Line */}
              <div className="absolute top-4 bottom-4 left-3 w-[2px] bg-[#F97316]" />

              {steps.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.num}
                    onClick={() => setActiveStep(idx)}
                    onMouseEnter={() => setActiveStep(idx)}
                    className={`relative p-5 sm:p-6 rounded-[20px] border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-orange-50/40 border-[#F97316] shadow-sm ring-1 ring-[#F97316] border-l-4 border-l-[#F97316]' 
                        : 'bg-slate-50/50 hover:bg-white border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    {/* Orange Connecting Marker Node */}
                    <span className={`absolute -left-6 top-7 w-3.5 h-3.5 rounded-full transition-transform duration-300 ${
                      isActive 
                        ? 'bg-[#F97316] ring-4 ring-orange-100 scale-125 shadow-sm' 
                        : 'bg-white border-2 border-slate-300'
                    }`} />

                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-7 h-7 rounded-lg text-xs font-black flex items-center justify-center transition-colors ${
                          isActive ? 'bg-[#F97316] text-white' : 'bg-slate-200 text-slate-700'
                        }`}>
                          {step.num}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316]">
                          {step.tag}
                        </span>
                      </div>

                      {isActive && (
                        <span className="text-[10px] font-extrabold text-[#F97316] bg-white px-2.5 py-0.5 rounded-full border border-orange-200 shadow-2xs">
                          Active Phase
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] mb-1.5 tracking-tight">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-3">
                      {step.desc}
                    </p>

                    {/* Simple Text Link with Arrow (NOT a large button) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (step.actionHref === '#booking' && onOpenBooking) {
                          onOpenBooking();
                        } else {
                          const el = document.querySelector(step.actionHref);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-xs font-extrabold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1.5 transition-colors cursor-pointer group"
                    >
                      <span>{step.actionText}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* BOTTOM SLIM ARCHITECTURAL SPECIFICATION STRIP */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full bg-slate-50/90 rounded-[20px] p-5 sm:p-6 border border-slate-200/90 shadow-sm mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/90 gap-4 md:gap-0">
            {projectFacts.map((fact, idx) => (
              <div 
                key={fact.value}
                className={`flex flex-col justify-center ${
                  idx === 0 ? 'md:pr-5' : idx === projectFacts.length - 1 ? 'md:pl-5' : 'md:px-5'
                } ${idx > 1 ? 'pt-3 md:pt-0' : idx > 0 ? 'pt-3 md:pt-0' : ''}`}
              >
                <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight mb-0.5">
                  {fact.value}
                </div>
                <div className="text-xs font-semibold text-slate-500">
                  {fact.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FINAL SINGLE PRIMARY NAVY CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onOpenBooking}
            className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-extrabold uppercase tracking-wider px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
          >
            <span>Start Your Villa Journey</span>
            <ArrowRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}



