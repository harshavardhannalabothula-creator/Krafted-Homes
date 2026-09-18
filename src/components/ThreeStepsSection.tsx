'use client';

import { motion } from 'framer-motion';
import { 
  Compass, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface ThreeStepsSectionProps {
  onOpenBooking?: () => void;
}

export default function ThreeStepsSection({ onOpenBooking }: ThreeStepsSectionProps) {
  const steps = [
    {
      num: '01',
      tag: 'STEP 01 — DISCOVER',
      title: 'Explore Your Villa',
      desc: 'Explore the Antelia Groves community, understand the villa collections, view the master plan and choose the home that fits your lifestyle.',
      image: '/images/journey_03_masterplan.jpg',
      badge: 'Master Plan & Architecture',
      icon: Compass,
      isNavy: true,
    },
    {
      num: '02',
      tag: 'STEP 02 — EXPERIENCE',
      title: 'Visit & Personalise',
      desc: 'Schedule a guided site visit, walk through the villa spaces, experience the clubhouse and understand the details of your future home.',
      image: '/images/clubhouse.jpg',
      badge: 'Guided Tour & Clubhouse',
      icon: MapPin,
      isNavy: false,
    },
    {
      num: '03',
      tag: 'STEP 03 — BEGIN',
      title: 'Book With Confidence',
      desc: 'Move forward with clear documentation, transparent communication and a guided booking process from our team.',
      image: '/images/handing_keys.png',
      badge: 'Transparent Handover Process',
      icon: ShieldCheck,
      isNavy: false,
    },
  ];

  return (
    <section id="steps" className="w-full bg-slate-50/70 py-16 lg:py-24 relative overflow-hidden border-t border-slate-200/80">
      
      {/* ELEGANT SUBTLE ARCHITECTURAL BLUEPRINT BACKGROUND VECTOR */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-center">
        <svg className="w-full h-full text-[#0F172A]" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100H1200M0 200H1200M0 300H1200M0 400H1200M0 500H1200" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M200 0V600M400 0V600M600 0V600M800 0V600M1000 0V600" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="600" cy="300" r="240" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 8" />
          <circle cx="600" cy="300" r="380" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M250 150L950 450M250 450L950 150" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* Subtle Ambient Light Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPACT BALANCED HEADER AREA */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-3"
          >
            <span>05 — YOUR VILLA JOURNEY</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] leading-[1.18] tracking-tight mb-4"
          >
            Own Your Villa In <br className="hidden sm:inline" />
            <span className="text-[#F97316]">3 Seamless Steps</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto"
          >
            From your first conversation to the day you receive your keys, we make your villa journey clear, personal and effortless.
          </motion.p>
        </div>

        {/* CONNECTED HORIZONTAL JOURNEY TIMELINE CONTAINER */}
        <div className="relative">
          
          {/* DESKTOP TIMELINE CONNECTING LINE */}
          <div className="hidden lg:block absolute top-[88px] left-[15%] right-[15%] h-[2px] bg-slate-200 z-0">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="h-full bg-gradient-to-r from-[#F97316] via-[#F97316] to-[#F97316] origin-left"
            />
          </div>

          {/* MOBILE / TABLET VERTICAL TIMELINE CONNECTING LINE */}
          <div className="lg:hidden absolute top-8 bottom-8 left-[31px] sm:left-[39px] w-[2px] bg-slate-200 z-0">
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full bg-gradient-to-b from-[#F97316] via-[#F97316] to-[#F97316] origin-top h-full"
            />
          </div>

          {/* 3 STEP CARDS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 relative z-10">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.7, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15 + (idx * 0.25)
                  }}
                  className="relative group"
                >
                  {/* Step Connecting Arrow Badge for Desktop */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-5 top-[76px] z-20 w-7 h-7 rounded-full bg-white border border-slate-200 items-center justify-center text-[#F97316] shadow-sm group-hover:scale-110 transition-transform">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  )}

                  <div 
                    className={`h-full p-6 sm:p-8 rounded-[30px] border transition-all duration-500 flex flex-col justify-between ${
                      step.isNavy 
                        ? 'bg-[#0F172A] border-slate-800 text-white shadow-xl shadow-slate-950/20' 
                        : 'bg-white border-slate-200/90 text-[#0F172A] shadow-sm hover:shadow-xl hover:border-orange-200/80'
                    }`}
                  >
                    <div>
                      {/* Top Header: Step Number Pill & Icon */}
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <span className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm transition-transform duration-300 group-hover:scale-105 ${
                            step.isNavy 
                              ? 'bg-[#F97316] text-white shadow-md shadow-orange-500/30' 
                              : 'bg-orange-50 text-[#F97316] border border-orange-100'
                          }`}>
                            {step.num}
                          </span>
                          <span className={`text-xs font-black uppercase tracking-wider ${
                            step.isNavy ? 'text-[#F97316]' : 'text-[#F97316]'
                          }`}>
                            {step.tag}
                          </span>
                        </div>

                        <div className={`p-2.5 rounded-xl ${
                          step.isNavy ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-700'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className={`text-xl sm:text-2xl font-extrabold mb-3 tracking-tight ${
                        step.isNavy ? 'text-white' : 'text-[#0F172A]'
                      }`}>
                        {step.title}
                      </h3>

                      <p className={`text-xs sm:text-sm font-medium leading-relaxed ${
                        step.isNavy ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {step.desc}
                      </p>
                    </div>

                    {/* Step Visual Thumbnail Card */}
                    <div className="mt-6 pt-4 border-t border-slate-200/20">
                      <div className={`relative h-44 sm:h-48 rounded-2xl overflow-hidden border ${
                        step.isNavy ? 'border-white/10' : 'border-slate-100'
                      }`}>
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className={`absolute inset-0 ${
                          step.isNavy 
                            ? 'bg-gradient-to-t from-slate-950/80 via-transparent to-transparent' 
                            : 'bg-gradient-to-t from-slate-950/60 via-transparent to-transparent'
                        }`} />
                        
                        {/* Overlay Category Pill */}
                        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border ${
                            step.isNavy 
                              ? 'bg-slate-950/85 text-white border-white/20' 
                              : 'bg-white/90 text-[#0F172A] border-white/60'
                          }`}>
                            <Sparkles className="w-3 h-3 text-[#F97316]" />
                            <span>{step.badge}</span>
                          </span>

                          <span className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM REFINED SINGLE CTA AREA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 lg:mt-18 text-center flex flex-col items-center justify-center"
        >
          <button
            onClick={onOpenBooking}
            className="px-9 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-2xl inline-flex items-center gap-3 transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Plan Your Villa Visit</span>
            <ArrowRight className="w-4.5 h-4.5" />
          </button>

          <p className="mt-3.5 text-xs sm:text-sm text-slate-500 font-medium">
            Let’s take the next step towards your home at Antelia Groves.
          </p>
        </motion.div>

      </div>
    </section>
  );
}


