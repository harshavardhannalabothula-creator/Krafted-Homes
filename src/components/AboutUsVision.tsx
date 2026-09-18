'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      label: 'OPEN SPACES',
      value: '70% OPEN',
      desc: 'Landscape and open spaces',
    },
    {
      label: 'CLUBHOUSE',
      value: '15K SQ.FT',
      desc: 'Resort-style clubhouse',
    },
  ];

  return (
    <section id="vision" className="w-full bg-white py-16 lg:py-24 relative overflow-hidden border-t border-slate-100">
      
      {/* Subtle Background Accent Lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP EDITORIAL HEADING AREA */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-4"
          >
            <span>01 — THE VISION</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] leading-[1.18] tracking-tight mb-4"
          >
            A Vision Built Around <br />
            <span className="text-[#F97316]">Better Living</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl"
          >
            Antelia Groves is the next chapter of Krafted Homes — evolving from individual homes into a thoughtfully planned 10-acre villa community where architecture, nature and everyday living come together.
          </motion.p>

          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-14 h-1 bg-[#F97316] rounded-full mt-5 origin-left" 
          />
        </div>

        {/* MAIN EDITORIAL COMPOSITION: STORYLINE & OVERLAPPING IMAGES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 lg:mb-20">
          
          {/* LEFT COLUMN: VERTICAL STORYLINE & CTA (Span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            {/* VERTICAL STORYLINE ITEMS */}
            <div className="relative pl-8 space-y-8">
              {/* Thin Vertical Connecting Line */}
              <div className="absolute top-3 bottom-3 left-3 w-[2px] bg-slate-200" />

              {storyItems.map((item, idx) => (
                <motion.div 
                  key={item.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.15) }}
                  className="relative"
                >
                  {/* Small Orange Marker */}
                  <span className="absolute -left-8 top-1 w-3.5 h-3.5 rounded-full bg-[#F97316] ring-4 ring-orange-50 shadow-sm" />
                  
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316] block mb-0.5">
                    {item.label}
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold text-[#0F172A] leading-snug">
                    {item.title}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* SINGLE REFINED NAVY CTA */}
            <div className="pt-2">
              <a 
                href="#masterplan"
                className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-extrabold uppercase tracking-wider px-7 py-4 rounded-full inline-flex items-center gap-3 transition-all shadow-lg shadow-slate-950/10 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Discover Our Vision</span>
                <ArrowRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: OVERLAPPING ARCHITECTURAL IMAGES (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            {/* Main Large Architectural Image */}
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[480px] rounded-[32px] overflow-hidden shadow-xl border-4 border-white group">
              <img 
                src="/images/hero_resort_clubhouse.png" 
                alt="Antelia Groves Architectural Vision" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              
              {/* Floating Pill Badge */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0F172A] text-[11px] font-extrabold uppercase tracking-wider border border-white/60 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                <span>10-Acre Architectural Sanctuary</span>
              </div>
            </div>

            {/* Smaller Overlapping Detail Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -left-4 sm:-bottom-10 sm:-left-8 w-44 sm:w-56 h-32 sm:h-40 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block group/sub"
            >
              <img 
                src="/images/close_up_material.png" 
                alt="Villa Material & Craftsmanship Detail" 
                className="w-full h-full object-cover group-hover/sub:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
              <div className="absolute bottom-2 left-3 right-3 text-[10px] font-bold text-white bg-slate-950/70 backdrop-blur-sm px-2 py-0.5 rounded text-center truncate">
                Material &amp; Craftsmanship
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* PROJECT FACTS STRIP BELOW VISUAL COMPOSITION */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full bg-slate-50/90 rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/90 gap-6 md:gap-0">
            {projectFacts.map((fact, idx) => (
              <div 
                key={fact.label}
                className={`flex flex-col justify-center ${
                  idx === 0 ? 'md:pr-6' : idx === projectFacts.length - 1 ? 'md:pl-6' : 'md:px-6'
                } ${idx > 1 ? 'pt-4 md:pt-0' : idx > 0 ? 'pt-4 md:pt-0' : ''}`}
              >
                <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-widest">
                  {fact.label}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-1 mb-0.5">
                  {fact.value}
                </div>
                <div className="text-xs font-semibold text-slate-600">
                  {fact.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}



