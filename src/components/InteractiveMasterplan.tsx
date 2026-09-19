'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, ArrowRight, MapPin, Home, Trees, Sparkles } from 'lucide-react';

interface InteractiveMasterplanProps {
  onOpenBooking?: () => void;
}

export default function InteractiveMasterplan({ onOpenBooking }: InteractiveMasterplanProps) {
  const [activeItem, setActiveItem] = useState<number>(0);

  const guideItems = [
    {
      id: 0,
      num: '01',
      tag: 'ARRIVAL',
      title: 'ARRIVAL',
      subtitle: 'Grand gated entrance & boulevard with landscaped approach.',
      image: '/images/hero_community.png',
      x: 16, // percentage X position on masterplan board
      y: 72, // percentage Y position on masterplan board
    },
    {
      id: 1,
      num: '02',
      tag: 'VILLA NEIGHBOURHOODS',
      title: 'VILLA NEIGHBOURHOODS',
      subtitle: 'Thoughtfully planned villa clusters surrounded by greenery.',
      image: '/images/hero_villa_facade.png',
      x: 42,
      y: 34,
    },
    {
      id: 2,
      num: '03',
      tag: 'CLUBHOUSE',
      title: 'CLUBHOUSE',
      subtitle: '15,000 sq.ft community and wellness destination.',
      image: '/images/hero_resort_clubhouse.png',
      x: 74,
      y: 44,
    },
    {
      id: 3,
      num: '04',
      tag: 'OPEN LANDSCAPE',
      title: 'OPEN LANDSCAPE',
      subtitle: '70% open green environment with gardens and community spaces.',
      image: '/images/journey_03_masterplan.jpg',
      x: 58,
      y: 74,
    },
    {
      id: 4,
      num: '05',
      tag: 'WALKWAYS',
      title: 'WALKWAYS',
      subtitle: 'Connected pedestrian paths and gardens.',
      image: '/images/clubhouse.jpg',
      x: 25,
      y: 24,
    },
  ];

  const current = guideItems[activeItem];

  return (
    <section id="masterplan" className="w-full bg-white py-6 sm:py-8 text-[#0F172A] relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
        
        {/* ================================================================= */}
        {/* TOP ROW: HEADING & TOP-RIGHT ARCHITECTURAL COMPASS / STATS         */}
        {/* ================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-3 border-b border-slate-200/80">
          
          {/* LEFT: INTRO HEADING */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-2"
            >
              <span>02 — THE MASTERPLAN</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold leading-[1.15] tracking-tight mb-1.5"
            >
              <span className="text-[#0F172A] block">Designed as a Community.</span>
              <span className="text-[#F97316] block">Planned as a Landscape.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-xl"
            >
              Explore how 10 acres of villas, open landscape, roads, gardens and shared spaces come together as one connected living environment.
            </motion.p>
          </div>

          {/* RIGHT: COMPACT ARCHITECTURAL COMPASS & QUICK STATS */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 pt-2 lg:pt-0">
            {/* Compass Icon */}
            <div className="relative w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center text-slate-700 bg-white shadow-2xs shrink-0">
              <Compass className="w-5 h-5 text-[#0F172A] animate-spin-slow" />
              <span className="absolute -top-1.5 text-[9px] font-black text-[#F97316]">N</span>
            </div>

            <div className="h-8 w-px bg-slate-200" />

            {/* 10 ACRES */}
            <div className="text-center">
              <span className="text-lg font-black text-[#0F172A] block leading-none">10</span>
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">ACRES</span>
            </div>

            <div className="h-8 w-px bg-slate-200" />

            {/* 189 VILLAS */}
            <div className="text-center">
              <span className="text-lg font-black text-[#0F172A] block leading-none">189</span>
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">VILLAS</span>
            </div>

            <div className="h-8 w-px bg-slate-200 hidden sm:block" />

            {/* EXPLORE THE MASTERPLAN BUTTON */}
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold text-[#F97316] hover:text-[#EA580C] uppercase tracking-wider bg-white px-4 py-2 rounded-full border border-orange-200 shadow-2xs hover:shadow-xs transition-colors cursor-pointer"
            >
              <span>EXPLORE THE MASTERPLAN</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* ================================================================= */}
        {/* MAIN CONTENT ROW (LEFT: 74% 3D MASTERPLAN VISUAL, RIGHT: GUIDE PANEL) */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* LEFT COLUMN (Span 8 or ~74% width) — 3D AERIAL MASTERPLAN VISUAL */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-sm aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] group select-none">
            
            {/* Aerial Masterplan Cutout Visual Rendering */}
            <img 
              src="/images/hero_main_aerial.png" 
              alt="Antelia Groves 3D Masterplan Layout" 
              className="w-full h-full object-cover object-center group-hover:scale-101 transition-transform duration-700 ease-out"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/20 pointer-events-none" />

            {/* SUBTLE SVG CONNECTOR ROUTE LINE (01 -> 02 -> 03 -> 04 -> 05) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" fill="none">
              <motion.path 
                d="M 16% 72% Q 30% 65% 42% 34% Q 55% 42% 74% 44% Q 65% 65% 58% 74% Q 40% 50% 25% 24%" 
                stroke="#F97316" 
                strokeWidth="2.5" 
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
            </svg>

            {/* 5 NUMBERED PILL MARKERS DIRECTLY ON MASTERPLAN AERIAL VISUAL */}
            {guideItems.map((item, idx) => {
              const isActive = activeItem === idx;

              return (
                <div
                  key={item.num}
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  <button
                    onClick={() => setActiveItem(idx)}
                    onMouseEnter={() => setActiveItem(idx)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer border ${
                      isActive
                        ? 'bg-[#F97316] text-white border-[#F97316] scale-110 shadow-orange-500/40 ring-4 ring-orange-200'
                        : 'bg-white text-[#0F172A] border-white/90 hover:bg-[#F97316] hover:text-white'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center font-black text-[10px] ${
                      isActive ? 'bg-white text-[#F97316]' : 'bg-[#F97316] text-white'
                    }`}>
                      {item.num}
                    </span>
                    <span className="truncate">{item.tag}</span>
                  </button>
                </div>
              );
            })}

            {/* Active Marker Floating Caption */}
            <div className="absolute bottom-3 left-3 z-10 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider">
                0{activeItem + 1} — {guideItems[activeItem].tag}
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN (Span 4) — MASTERPLAN GUIDE PANEL */}
          <div className="lg:col-span-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs space-y-2.5">
            
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
                MASTERPLAN GUIDE
              </span>
              <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-wider">
                01 — 05
              </span>
            </div>

            {/* 5 COMPACT GUIDE ITEMS WITH THUMBNAILS */}
            <div className="space-y-2">
              {guideItems.map((item, idx) => {
                const isSelected = activeItem === idx;

                return (
                  <div
                    key={item.num}
                    onClick={() => setActiveItem(idx)}
                    onMouseEnter={() => setActiveItem(idx)}
                    className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                      isSelected 
                        ? 'bg-white border-[#F97316] shadow-sm ring-1 ring-[#F97316]' 
                        : 'bg-slate-50/70 hover:bg-white border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    {/* Thumbnail Image */}
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-14 h-12 rounded-lg object-cover shrink-0 border border-slate-200"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                          isSelected ? 'bg-[#F97316] text-white' : 'bg-orange-50 text-[#F97316]'
                        }`}>
                          {item.num}
                        </span>
                        <span className={`text-[11px] font-extrabold uppercase tracking-tight truncate ${
                          isSelected ? 'text-[#F97316]' : 'text-[#0F172A]'
                        }`}>
                          {item.title}
                        </span>
                      </div>

                      <p className="text-[10px] text-slate-500 font-semibold leading-tight line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* ================================================================= */}
        {/* BOTTOM HORIZONTAL STATISTICS STRIP                                */}
        {/* ================================================================= */}
        <div className="w-full bg-slate-50/90 rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4 sm:gap-6 w-full sm:w-auto">
            
            {/* 10+ ACRES */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-[#0F172A] tracking-tight">10+ ACRES</div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Total Project Area</div>
              </div>
            </div>

            {/* 189 VILLAS */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] shrink-0">
                <Home className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-[#0F172A] tracking-tight">189 VILLAS</div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Premium Residences</div>
              </div>
            </div>

            {/* 70% OPEN */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] shrink-0">
                <Trees className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-[#0F172A] tracking-tight">70% OPEN</div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Green &amp; Landscape</div>
              </div>
            </div>

            {/* 15K SQ.FT CLUBHOUSE */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/80 flex items-center justify-center text-[#F97316] shrink-0">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-black text-[#0F172A] tracking-tight">15K SQ.FT CLUBHOUSE</div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Recreation &amp; Wellness</div>
              </div>
            </div>

          </div>

          {/* RIGHT LINK */}
          <button
            onClick={onOpenBooking}
            className="text-xs font-black text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1.5 transition-colors cursor-pointer uppercase tracking-wider bg-white px-4 py-2 rounded-full border border-orange-200 shadow-2xs hover:shadow-xs shrink-0"
          >
            <span>EXPLORE THE MASTERPLAN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
