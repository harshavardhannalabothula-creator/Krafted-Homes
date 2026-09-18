'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

export default function AboutUsVision() {
  const storyItems = [
    {
      label: 'FROM INDIVIDUAL HOMES',
      title: 'Small beginnings shaped our approach.',
    },
    {
      label: 'TO A COMPLETE COMMUNITY',
      title: 'A larger vision built around space, nature and meaningful everyday living.',
    },
    {
      label: 'TO ANTELIA GROVES',
      title: 'A 10-acre gated villa community designed for a more considered way of life.',
    },
  ];

  const projectFacts = [
    {
      label: 'LAND SCALE',
      value: '10+ ACRES',
      desc: 'Gated villa community',
    },
    {
      label: 'PLANNED HOMES',
      value: '189 VILLAS',
      desc: 'Thoughtfully planned homes',
    },
    {
      label: 'GREEN SPACES',
      value: '70% OPEN',
      desc: 'Green and open spaces',
    },
    {
      label: 'CLUBHOUSE',
      value: '15K SQ.FT',
      desc: 'Clubhouse experience',
    },
  ];

  return (
    <section id="vision" className="w-full bg-white py-12 lg:py-16 relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPACT TOP ROW: HEADING & SUBTITLE & CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 lg:mb-10 pb-6 border-b border-slate-200/70">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-3"
            >
              <span>01 — THE VISION</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F172A] leading-[1.16] tracking-tight mb-3"
            >
              A Vision Built Around <span className="text-[#F97316]">Better Living</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl"
            >
              Antelia Groves is the next chapter of Krafted Homes — evolving from individual homes into a thoughtfully planned 10-acre villa community where architecture, nature and everyday living come together.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="shrink-0"
          >
            <a 
              href="#masterplan"
              className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Discover Our Vision</span>
              <ArrowRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* MAIN COMPOSITION: 3 BALANCED COLUMNS ALIGNED VERTICALLY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT COLUMN: COMPACT VISION STORY (Span 4) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 bg-slate-50/70 p-6 sm:p-7 rounded-[24px] border border-slate-200/80 flex flex-col justify-between"
          >
            <div className="relative pl-6 space-y-6">
              {/* Thin Vertical Connecting Line */}
              <div className="absolute top-2 bottom-2 left-2.5 w-[2px] bg-slate-200" />

              {storyItems.map((item, idx) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + (idx * 0.1) }}
                  className="relative"
                >
                  {/* Small Orange Marker */}
                  <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-[#F97316] ring-4 ring-orange-50 shadow-sm" />
                  
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316] block mb-0.5">
                    {item.label}
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-snug">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider">
              <span>Antelia Groves Evolution</span>
              <span className="text-[#F97316] font-extrabold">Est. Krafted Homes</span>
            </div>
          </motion.div>

          {/* CENTRE COLUMN: MAIN ARCHITECTURAL VISUAL (Span 5) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative h-[360px] sm:h-[400px] lg:h-auto rounded-[24px] overflow-hidden shadow-lg border-2 border-white bg-slate-900 group flex flex-col justify-between"
          >
            <img 
              src="/images/hero_resort_clubhouse.png" 
              alt="Antelia Groves Architectural Vision" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

            {/* Top Label over Image */}
            <div className="relative z-10 p-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0F172A] text-[10px] font-extrabold uppercase tracking-wider border border-white/60 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#F97316]" />
                <span>ANTELIA GROVES / 10-ACRE COMMUNITY</span>
              </span>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 p-5 text-white">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316]">
                  ARCHITECTURAL SANCTUARY
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                Architecture, nature and everyday living — brought together.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: VISION HIGHLIGHTS FACTS PANEL (Span 3) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 bg-white p-5 sm:p-6 rounded-[24px] border border-slate-200/90 shadow-sm flex flex-col justify-between divide-y divide-slate-200/80 space-y-4"
          >
            {projectFacts.map((fact, idx) => (
              <div key={fact.label} className={idx > 0 ? 'pt-4' : ''}>
                <span className="text-[9px] font-extrabold text-[#F97316] uppercase tracking-widest block mb-0.5">
                  {fact.label}
                </span>
                <div className="text-2xl lg:text-[26px] font-extrabold text-[#0F172A] tracking-tight leading-none mb-1">
                  {fact.value}
                </div>
                <div className="text-[11px] font-semibold text-slate-500 leading-snug">
                  {fact.desc}
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}




