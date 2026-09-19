'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ThreeStepsSectionProps {
  onOpenBooking?: () => void;
}

export default function ThreeStepsSection({ onOpenBooking }: ThreeStepsSectionProps) {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 0,
      num: '01',
      tag: 'DISCOVER',
      title: 'Explore Antelia Groves',
      shortDesc: 'Explore Antelia Groves',
      desc: 'Master-planned 10-acre community arrival & grand entrance.',
      image: '/images/hero_main_aerial.png',
    },
    {
      id: 1,
      num: '02',
      tag: 'EXPERIENCE',
      title: 'Walk through the community',
      shortDesc: 'Walk through the community',
      desc: 'Landscaped garden trails, green parks & 15,000 sq.ft clubhouse.',
      image: '/images/clubhouse.jpg',
    },
    {
      id: 2,
      num: '03',
      tag: 'CHOOSE',
      title: 'Find your villa',
      shortDesc: 'Find your villa',
      desc: 'Vastu-compliant 3 & 4 BHK split-level architectural elevations.',
      image: '/images/hero_villa_facade.png',
    },
    {
      id: 3,
      num: '04',
      tag: 'BEGIN',
      title: 'Start your journey',
      shortDesc: 'Start your journey',
      desc: 'Transparent booking experience & warm key handover arrival.',
      image: '/images/handing_keys.png',
    },
  ];

  return (
    <section id="steps" className="w-full bg-white py-6 md:py-8 relative overflow-hidden border-t border-slate-100">
      
      {/* Subtle Ambient Background Light */}
      <div className="absolute top-1/3 right-12 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================================= */}
        {/* DESKTOP LAYOUT — ARCHITECTURAL MAGAZINE EDITORIAL COLLAGE          */}
        {/* ================================================================= */}
        <div className="hidden md:block">
          
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8 mb-5">
            
            {/* LEFT COLUMN — APPROXIMATELY 30% WIDTH */}
            <div className="w-full lg:w-[30%] flex flex-col justify-between py-1">
              <div>
                {/* Section Label */}
                <motion.div 
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[10px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-2.5"
                >
                  <span>05 — YOUR VILLA JOURNEY</span>
                </motion.div>

                {/* Compact & Elegant Headline */}
                <h2 className="text-2xl lg:text-[32px] font-extrabold text-[#0F172A] leading-[1.15] tracking-tight mb-2.5">
                  From First Visit <span className="text-[#F97316]">to Your New Home</span>
                </h2>

                {/* Short Introduction Text */}
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-5 max-w-xs">
                  Discover the community, experience the spaces, choose your villa, and begin your journey.
                </p>

                {/* SIMPLE TEXT NAVIGATION SEQUENCE (No cards, no boxes) */}
                <div className="space-y-2.5 pt-1">
                  {stages.map((stage, idx) => {
                    const isActive = activeStage === idx;
                    return (
                      <button
                        key={stage.num}
                        onClick={() => setActiveStage(idx)}
                        onMouseEnter={() => setActiveStage(idx)}
                        className="flex items-center gap-3 text-left transition-all duration-300 group cursor-pointer w-full py-1 border-b border-slate-100/80 last:border-0"
                      >
                        <span className={`text-xs font-black transition-colors duration-300 ${
                          isActive ? 'text-[#F97316]' : 'text-slate-400 group-hover:text-slate-600'
                        }`}>
                          {stage.num}
                        </span>
                        
                        <div className="flex flex-col">
                          <span className={`text-xs font-extrabold uppercase tracking-wider transition-colors duration-300 ${
                            isActive ? 'text-[#F97316]' : 'text-[#0F172A] group-hover:text-[#F97316]'
                          }`}>
                            {stage.tag}
                          </span>
                          
                          {isActive && (
                            <motion.span 
                              initial={{ opacity: 0, x: -3 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-[11px] font-medium text-slate-500 mt-0.5"
                            >
                              {stage.shortDesc}
                            </motion.span>
                          )}
                        </div>

                        {isActive && (
                          <span className="ml-auto text-[#F97316] font-bold text-xs">→</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Stage Indicator Line */}
              <div className="pt-3 border-t border-slate-100 hidden lg:block">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                  Selected Phase
                </div>
                <div className="text-xs font-extrabold text-[#0F172A] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                  <span>{stages[activeStage].num} — {stages[activeStage].tag}</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — APPROXIMATELY 70% WIDTH EDITORIAL COLLAGE */}
            <div className="w-full lg:w-[70%] relative">
              
              {/* Thin Architectural Orange Connecting Line (01 -> 02 -> 03 -> 04) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" fill="none">
                <path 
                  d="M 32% 30% L 72% 25% L 72% 70% L 35% 82%" 
                  stroke="#F97316" 
                  strokeWidth="1.2" 
                  strokeDasharray="4 4"
                  strokeOpacity="0.65"
                />
              </svg>

              {/* EDITORIAL ASYMMETRIC 4-IMAGE GRID COMPOSITION */}
              <div className="grid grid-cols-12 grid-rows-6 gap-2 h-[410px] lg:h-[440px]">
                
                {/* LARGE DOMINANT IMAGE 01 — Masterplan / Entrance */}
                <div 
                  onClick={() => setActiveStage(0)}
                  onMouseEnter={() => setActiveStage(0)}
                  className={`col-span-7 row-span-4 relative rounded-xl overflow-hidden border-2 transition-all duration-500 cursor-pointer ${
                    activeStage === 0 
                      ? 'border-[#F97316] shadow-md ring-2 ring-orange-200/50' 
                      : 'border-slate-200/70 opacity-90 hover:opacity-100'
                  } group`}
                >
                  <img 
                    src={stages[0].image} 
                    alt={stages[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
                  
                  {/* Tiny Typography Label */}
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                      activeStage === 0 ? 'bg-[#F97316] text-white' : 'bg-slate-900/80 text-white'
                    }`}>
                      01
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-slate-950/70 backdrop-blur-xs px-2 py-0.5 rounded">
                      DISCOVER
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 z-10">
                    <p className={`text-xs font-bold transition-colors ${activeStage === 0 ? 'text-orange-300' : 'text-slate-200'}`}>
                      {stages[0].title}
                    </p>
                  </div>
                </div>

                {/* MEDIUM IMAGE 02 — Gardens & Clubhouse */}
                <div 
                  onClick={() => setActiveStage(1)}
                  onMouseEnter={() => setActiveStage(1)}
                  className={`col-span-5 row-span-3 relative rounded-xl overflow-hidden border-2 transition-all duration-500 cursor-pointer ${
                    activeStage === 1 
                      ? 'border-[#F97316] shadow-md ring-2 ring-orange-200/50' 
                      : 'border-slate-200/70 opacity-90 hover:opacity-100'
                  } group`}
                >
                  <img 
                    src={stages[1].image} 
                    alt={stages[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                      activeStage === 1 ? 'bg-[#F97316] text-white' : 'bg-slate-900/80 text-white'
                    }`}>
                      02
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-slate-950/70 backdrop-blur-xs px-2 py-0.5 rounded">
                      EXPERIENCE
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 z-10">
                    <p className={`text-xs font-bold transition-colors ${activeStage === 1 ? 'text-orange-300' : 'text-slate-200'}`}>
                      {stages[1].title}
                    </p>
                  </div>
                </div>

                {/* MEDIUM IMAGE 03 — Villa Exterior */}
                <div 
                  onClick={() => setActiveStage(2)}
                  onMouseEnter={() => setActiveStage(2)}
                  className={`col-span-5 row-span-3 relative rounded-xl overflow-hidden border-2 transition-all duration-500 cursor-pointer ${
                    activeStage === 2 
                      ? 'border-[#F97316] shadow-md ring-2 ring-orange-200/50' 
                      : 'border-slate-200/70 opacity-90 hover:opacity-100'
                  } group`}
                >
                  <img 
                    src={stages[2].image} 
                    alt={stages[2].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                      activeStage === 2 ? 'bg-[#F97316] text-white' : 'bg-slate-900/80 text-white'
                    }`}>
                      03
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-slate-950/70 backdrop-blur-xs px-2 py-0.5 rounded">
                      CHOOSE
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 z-10">
                    <p className={`text-xs font-bold transition-colors ${activeStage === 2 ? 'text-orange-300' : 'text-slate-200'}`}>
                      {stages[2].title}
                    </p>
                  </div>
                </div>

                {/* SMALL DETAIL IMAGE 04 — Warm Entrance / Handover */}
                <div 
                  onClick={() => setActiveStage(3)}
                  onMouseEnter={() => setActiveStage(3)}
                  className={`col-span-7 row-span-2 relative rounded-xl overflow-hidden border-2 transition-all duration-500 cursor-pointer ${
                    activeStage === 3 
                      ? 'border-[#F97316] shadow-md ring-2 ring-orange-200/50' 
                      : 'border-slate-200/70 opacity-90 hover:opacity-100'
                  } group`}
                >
                  <img 
                    src={stages[3].image} 
                    alt={stages[3].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent" />
                  
                  <div className="absolute top-2 left-2.5 z-10 flex items-center gap-1.5">
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                      activeStage === 3 ? 'bg-[#F97316] text-white' : 'bg-slate-900/80 text-white'
                    }`}>
                      04
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-white bg-slate-950/70 backdrop-blur-xs px-2 py-0.5 rounded">
                      BEGIN
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-3 right-3 z-10">
                    <p className={`text-xs font-bold transition-colors ${activeStage === 3 ? 'text-orange-300' : 'text-slate-200'}`}>
                      {stages[3].title}
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* DESKTOP BOTTOM EDITORIAL INFORMATION RAIL */}
          <motion.div 
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="w-full bg-slate-50 border-t border-b border-slate-200/90 px-4 py-2 flex items-center justify-between"
          >
            <div className="flex items-center gap-8 text-[11px] font-extrabold text-[#0F172A] uppercase tracking-wider">
              <span>10+ ACRES</span>
              <span className="text-slate-300">•</span>
              <span>189 VILLAS</span>
              <span className="text-slate-300">•</span>
              <span>70% OPEN</span>
              <span className="text-slate-300">•</span>
              <span>15K SQ.FT CLUBHOUSE</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="text-[11px] font-extrabold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1.5 transition-colors cursor-pointer uppercase tracking-wider"
            >
              <span>BOOK A SITE VISIT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

        </div>


        {/* ================================================================= */}
        {/* MOBILE / PHONE LAYOUT — COMPACT 2x2 ARCHITECTURAL COLLAGE GRID    */}
        {/* ================================================================= */}
        <div className="block md:hidden space-y-3.5">
          
          {/* COMPACT MOBILE HEADER */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[10px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-1.5">
              <span>05 — YOUR VILLA JOURNEY</span>
            </div>

            <h2 className="text-2xl font-extrabold text-[#0F172A] leading-tight tracking-tight mb-1">
              From First Visit <span className="text-[#F97316]">to Your New Home</span>
            </h2>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Discover the community, experience the spaces, choose your villa, and begin your journey.
            </p>
          </div>

          {/* COMPACT 2x2 ARCHITECTURAL COLLAGE GRID */}
          <div className="grid grid-cols-2 gap-1.5 h-[340px]">
            
            {/* IMAGE 01 (Left column, 2 rows) */}
            <div 
              onClick={() => setActiveStage(0)}
              className={`col-span-1 row-span-2 relative rounded-lg overflow-hidden border transition-all ${
                activeStage === 0 ? 'border-[#F97316] ring-2 ring-orange-200' : 'border-slate-200'
              }`}
            >
              <img src={stages[0].image} alt="01 DISCOVER" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2">
                <span className="text-[9px] font-black text-white bg-[#F97316] px-1.5 py-0.5 rounded mr-1">01</span>
                <span className="text-[10px] font-extrabold text-white uppercase">DISCOVER</span>
                <p className="text-[10px] text-slate-200 font-medium truncate mt-0.5">Explore Antelia Groves</p>
              </div>
            </div>

            {/* IMAGE 02 (Top right) */}
            <div 
              onClick={() => setActiveStage(1)}
              className={`col-span-1 row-span-1 relative rounded-lg overflow-hidden border transition-all ${
                activeStage === 1 ? 'border-[#F97316] ring-2 ring-orange-200' : 'border-slate-200'
              }`}
            >
              <img src={stages[1].image} alt="02 EXPERIENCE" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-1.5 left-1.5 right-1.5">
                <span className="text-[9px] font-black text-white bg-[#F97316] px-1.5 py-0.5 rounded mr-1">02</span>
                <span className="text-[10px] font-extrabold text-white uppercase">EXPERIENCE</span>
                <p className="text-[10px] text-slate-200 font-medium truncate mt-0.5">Walk through community</p>
              </div>
            </div>

            {/* IMAGE 03 (Middle right) */}
            <div 
              onClick={() => setActiveStage(2)}
              className={`col-span-1 row-span-1 relative rounded-lg overflow-hidden border transition-all ${
                activeStage === 2 ? 'border-[#F97316] ring-2 ring-orange-200' : 'border-slate-200'
              }`}
            >
              <img src={stages[2].image} alt="03 CHOOSE" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-1.5 left-1.5 right-1.5">
                <span className="text-[9px] font-black text-white bg-[#F97316] px-1.5 py-0.5 rounded mr-1">03</span>
                <span className="text-[10px] font-extrabold text-white uppercase">CHOOSE</span>
                <p className="text-[10px] text-slate-200 font-medium truncate mt-0.5">Find your villa</p>
              </div>
            </div>

            {/* IMAGE 04 (Bottom row spanning both columns) */}
            <div 
              onClick={() => setActiveStage(3)}
              className={`col-span-2 row-span-1 relative rounded-lg overflow-hidden border transition-all h-[95px] ${
                activeStage === 3 ? 'border-[#F97316] ring-2 ring-orange-200' : 'border-slate-200'
              }`}
            >
              <img src={stages[3].image} alt="04 BEGIN" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-black text-white bg-[#F97316] px-1.5 py-0.5 rounded mr-1">04</span>
                  <span className="text-[10px] font-extrabold text-white uppercase">BEGIN</span>
                  <p className="text-[10px] text-slate-200 font-medium">Start your journey towards your new home</p>
                </div>
              </div>
            </div>

          </div>

          {/* MOBILE STATS RAIL & CTA */}
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2.5">
            <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-[#0F172A]">
              <span>10+ ACRES</span>
              <span className="text-slate-300">·</span>
              <span>189 VILLAS</span>
              <span className="text-slate-300">·</span>
              <span>70% OPEN</span>
              <span className="text-slate-300">·</span>
              <span>15K SQ.FT</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full text-center py-2 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>BOOK A SITE VISIT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
