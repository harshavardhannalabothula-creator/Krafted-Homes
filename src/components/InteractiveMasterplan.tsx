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
      code: '01 — ARRIVAL',
      title: 'ARRIVAL',
      subtitle: 'Grand gated entrance & landscaped boulevard',
      desc: '40ft wide boulevard with 24/7 RFID security portal.',
      image: '/images/hero_community.png',
      x: 20, // percentage X position on masterplan board
      y: 68, // percentage Y position on masterplan board
    },
    {
      id: 1,
      num: '02',
      code: '02 — VILLA NEIGHBOURHOODS',
      title: 'VILLA NEIGHBOURHOODS',
      subtitle: 'Thoughtfully planned villa clusters surrounded by greenery',
      desc: '189 split-level vastu-compliant 3 & 4 BHK residences.',
      image: '/images/hero_villa_facade.png',
      x: 42,
      y: 34,
    },
    {
      id: 2,
      num: '03',
      code: '03 — CLUBHOUSE',
      title: 'CLUBHOUSE',
      subtitle: 'Community, recreation and wellness destination',
      desc: '15,000 sq.ft clubhouse with resort swimming pool.',
      image: '/images/hero_resort_clubhouse.png',
      x: 78,
      y: 45,
    },
    {
      id: 3,
      num: '04',
      code: '04 — OPEN LANDSCAPE',
      title: 'OPEN LANDSCAPE',
      subtitle: 'Large green spaces, gardens and community areas',
      desc: '70% open green environment with reflection ponds.',
      image: '/images/journey_03_masterplan.jpg',
      x: 62,
      y: 76,
    },
    {
      id: 4,
      num: '05',
      code: '05 — WALKWAYS',
      title: 'WALKWAYS',
      subtitle: 'Connected pedestrian paths through landscape and gardens',
      desc: 'Car-free walking loops, jogging trails & shaded pergolas.',
      image: '/images/clubhouse.jpg',
      x: 28,
      y: 22,
    },
  ];

  const current = guideItems[activeItem];

  return (
    <section id="masterplan" className="w-full bg-white py-6 md:py-8 relative overflow-hidden border-t border-slate-100 text-[#0F172A]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
        
        {/* ================================================================= */}
        {/* TOP ROW: HEADING & TOP-RIGHT ARCHITECTURAL COMPASS / STATS         */}
        {/* ================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-3 border-b border-slate-200/80">
          
          {/* LEFT: INTRO HEADING */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[10px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-2"
            >
              <span>02 — THE MASTERPLAN</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold leading-[1.16] tracking-tight mb-1.5"
            >
              <span className="text-[#0F172A] block">Designed as a Community.</span>
              <span className="text-[#F97316] block">Planned as a Landscape.</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed"
            >
              Explore how 10 acres of villas, open landscape, roads, gardens and shared spaces come together as one connected living environment.
            </motion.p>
          </div>

          {/* RIGHT: COMPACT ARCHITECTURAL COMPASS & QUICK STATS */}
          <div className="flex items-center gap-4 shrink-0 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 text-xs font-extrabold text-[#0F172A]">
              <Compass className="w-4 h-4 text-[#F97316] animate-spin-slow" />
              <div className="flex flex-col text-[10px] leading-tight">
                <span className="text-[#F97316] font-black">N ✦ 10 ACRES</span>
                <span className="text-slate-500 font-bold">189 VILLAS</span>
              </div>
            </div>

            <div className="h-6 w-px bg-slate-200" />

            <button
              onClick={onOpenBooking}
              className="text-[11px] font-extrabold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1 cursor-pointer uppercase tracking-wider bg-white px-3 py-1.5 rounded-full border border-orange-200 shadow-2xs hover:shadow-xs transition-colors"
            >
              <span>EXPLORE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* ================================================================= */}
        {/* MAIN COMPOSITION (DESKTOP: 72% MASTERPLAN BOARD + 28% GUIDE PANEL) */}
        {/* ================================================================= */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          
          {/* LEFT 72% — 3D REALISTIC MASTERPLAN VISUALIZATION BOARD */}
          <div className="w-full lg:w-[72%] relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 group select-none min-h-[340px] sm:min-h-[420px] lg:min-h-[450px] flex flex-col justify-between p-4">
            
            {/* Aerial Masterplan Render */}
            <img 
              src="/images/hero_main_aerial.png" 
              alt="Antelia Groves 10-Acre Masterplan Visual Presentation" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40 pointer-events-none" />

            {/* Top Board Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border border-white/20">
                10-ACRE AERIAL MASTERPLAN VISUALIZATION
              </span>

              <span className="bg-[#F97316] text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-2xs">
                RERA APPROVED
              </span>
            </div>

            {/* SUBTLE SVG CONNECTOR ROUTE LINE (01 -> 02 -> 03 -> 04 -> 05) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" fill="none">
              <motion.path 
                d="M 20% 68% L 42% 34% L 78% 45% L 62% 76% L 28% 22%" 
                stroke="#F97316" 
                strokeWidth="2" 
                strokeDasharray="5 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
              />
            </svg>

            {/* 5 ELEGANT NUMBERED ORANGE MARKERS PLACED DIRECTLY OVER RELEVANT LOCATIONS */}
            {guideItems.map((item) => {
              const isActive = activeItem === item.id;

              return (
                <div
                  key={item.num}
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  <div className="relative flex flex-col items-center">
                    
                    {/* Marker Button with Orange Circle + White Label + Navy Text */}
                    <button
                      onClick={() => setActiveItem(item.id)}
                      onMouseEnter={() => setActiveItem(item.id)}
                      className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all duration-300 cursor-pointer shadow-md border ${
                        isActive
                          ? 'bg-[#F97316] text-white border-[#F97316] scale-110 shadow-orange-500/30 ring-4 ring-orange-200'
                          : 'bg-white/95 text-[#0F172A] border-white/80 hover:bg-[#F97316] hover:text-white hover:scale-105'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center font-black text-[10px] ${
                        isActive ? 'bg-white text-[#F97316]' : 'bg-[#F97316] text-white'
                      }`}>
                        {item.num}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider">
                        {item.title}
                      </span>
                    </button>

                    {/* Popover Callout Tooltip */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 5, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute z-40 w-56 bg-white rounded-xl p-3 border border-slate-200 shadow-xl pointer-events-auto ${
                            item.x > 60 ? 'right-0 text-right' : 'left-0 text-left'
                          } ${item.y > 60 ? 'bottom-9' : 'top-9'}`}
                        >
                          <div className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-wider mb-0.5">
                            {item.code}
                          </div>
                          <h4 className="text-xs font-extrabold text-[#0F172A] mb-1">
                            {item.subtitle}
                          </h4>
                          <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                </div>
              );
            })}

            {/* Bottom Floating Visual Caption */}
            <div className="relative z-10 bg-slate-950/85 backdrop-blur-md p-3 rounded-xl border border-white/15 text-white mt-auto max-w-sm flex items-center justify-between">
              <div>
                <span className="text-[9px] font-extrabold text-[#F97316] uppercase tracking-wider block">
                  SELECTED ZONE
                </span>
                <span className="text-xs font-extrabold text-white">
                  {current.code} — {current.subtitle}
                </span>
              </div>

              <button
                onClick={onOpenBooking}
                className="text-[10px] font-extrabold text-[#F97316] hover:text-white uppercase tracking-wider inline-flex items-center gap-1 transition-colors cursor-pointer bg-white/10 px-2.5 py-1 rounded-full border border-white/20"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </div>

          {/* RIGHT 28% — NARROW MASTERPLAN GUIDE PANEL */}
          <div className="w-full lg:w-[28%] bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200">
                <span className="text-[11px] font-extrabold text-[#0F172A] uppercase tracking-wider">
                  MASTERPLAN GUIDE
                </span>
                <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-wider">
                  01 — 05
                </span>
              </div>

              {/* 5 COMPACT GUIDE LIST ITEMS WITH PREMIUM THUMBNAILS */}
              <div className="space-y-2">
                {guideItems.map((item) => {
                  const isSelected = activeItem === item.id;

                  return (
                    <div
                      key={item.num}
                      onClick={() => setActiveItem(item.id)}
                      onMouseEnter={() => setActiveItem(item.id)}
                      className={`p-2.5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                        isSelected 
                          ? 'bg-white border-[#F97316] shadow-sm ring-1 ring-[#F97316]' 
                          : 'bg-white/60 hover:bg-white border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      {/* Premium Thumbnail */}
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-11 h-11 rounded-lg object-cover shrink-0 border border-slate-200"
                      />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className={`text-[10px] font-black ${
                            isSelected ? 'text-[#F97316]' : 'text-slate-400'
                          }`}>
                            {item.num}
                          </span>
                          <span className={`text-[11px] font-extrabold uppercase tracking-tight truncate ${
                            isSelected ? 'text-[#F97316]' : 'text-[#0F172A]'
                          }`}>
                            {item.title}
                          </span>
                        </div>

                        <p className="text-[10px] text-slate-500 font-medium leading-tight line-clamp-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Helper Note */}
            <div className="pt-3 mt-3 border-t border-slate-200/80 text-[10px] font-semibold text-slate-500 flex items-center justify-between">
              <span>Hover markers to inspect zones</span>
              <span className="text-[#F97316] font-bold">5 KEY ZONES</span>
            </div>
          </div>

        </div>

        {/* ================================================================= */}
        {/* BOTTOM HORIZONTAL STATISTICS STRIP                                */}
        {/* ================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full bg-slate-50 rounded-xl px-4 py-3 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4 sm:gap-8 w-full sm:w-auto">
            <div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0F172A] tracking-tight">
                <span className="text-[#F97316]">10+</span> ACRES
              </div>
              <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                Total Project Area
              </div>
            </div>

            <div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0F172A] tracking-tight">
                <span className="text-[#F97316]">189</span> VILLAS
              </div>
              <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                Premium Residences
              </div>
            </div>

            <div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0F172A] tracking-tight">
                <span className="text-[#F97316]">70%</span> OPEN
              </div>
              <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                Green &amp; Landscape
              </div>
            </div>

            <div>
              <div className="text-xs sm:text-sm font-extrabold text-[#0F172A] tracking-tight">
                <span className="text-[#F97316]">15K</span> SQ.FT
              </div>
              <div className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">
                Clubhouse &amp; Wellness
              </div>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="text-xs font-extrabold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 uppercase tracking-wider bg-white px-4 py-2 rounded-full border border-orange-200 shadow-2xs hover:shadow-xs"
          >
            <span>EXPLORE THE MASTERPLAN</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
