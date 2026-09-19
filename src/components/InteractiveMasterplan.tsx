'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Home, Trees, Sparkles, ArrowRight, Compass } from 'lucide-react';

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
      subtitle: 'Grand gated entrance & main boulevard',
      desc: '40ft wide boulevard with 24/7 RFID security entrance & visitor plaza.',
      image: '/images/hero_community.png',
      x: 20, // percentage X position on masterplan board
      y: 68, // percentage Y position on masterplan board
      icon: MapPin,
    },
    {
      id: 1,
      num: '02',
      code: '02 — VILLA NEIGHBOURHOODS',
      title: 'VILLA NEIGHBOURHOODS',
      subtitle: 'Private villa clusters surrounded by greenery',
      desc: '189 split-level vastu-compliant 3 & 4 BHK luxury residences.',
      image: '/images/hero_villa_facade.png',
      x: 42,
      y: 32,
      icon: Home,
    },
    {
      id: 2,
      num: '03',
      code: '03 — CLUBHOUSE',
      title: 'CLUBHOUSE',
      subtitle: '15,000 sq.ft community & wellness destination',
      desc: 'Resort swimming pool, banquet hall, fitness wing & café terrace.',
      image: '/images/hero_resort_clubhouse.png',
      x: 78,
      y: 44,
      icon: Sparkles,
    },
    {
      id: 3,
      num: '04',
      code: '04 — OPEN LANDSCAPE',
      title: 'OPEN LANDSCAPE',
      subtitle: '70% open green environment',
      desc: 'Central botanical parks, lotus reflection ponds & natural buffers.',
      image: '/images/journey_03_masterplan.jpg',
      x: 62,
      y: 76,
      icon: Trees,
    },
    {
      id: 4,
      num: '05',
      code: '05 — WALKWAYS',
      title: 'WALKWAYS',
      subtitle: 'Connected pedestrian paths & gardens',
      desc: 'Car-free walking loops, rubberized jogging tracks & shaded pergolas.',
      image: '/images/clubhouse.jpg',
      x: 28,
      y: 22,
      icon: Compass,
    },
  ];

  const current = guideItems[activeItem];

  return (
    <section id="masterplan" className="w-full bg-white py-6 md:py-8 relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Ambient Light */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
        
        {/* COMPACT SECTION HEADER & SUBTEXT */}
        <div className="max-w-3xl">
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
            className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F172A] leading-[1.16] tracking-tight mb-1.5"
          >
            Designed as a Community. <span className="text-[#F97316]">Planned as a Landscape.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl"
          >
            Explore how villas, open landscapes, roads, gardens, the clubhouse and community spaces come together across the 10-acre Antelia Groves community.
          </motion.p>
        </div>

        {/* ================================================================= */}
        {/* MAIN COMPOSITION (DESKTOP: 72% MASTERPLAN BOARD + 28% GUIDE PANEL) */}
        {/* ================================================================= */}
        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          
          {/* LEFT 72% — TOP-DOWN 3D REALISTIC MASTERPLAN VISUAL BOARD */}
          <div className="w-full lg:w-[72%] relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 group select-none min-h-[340px] sm:min-h-[420px] lg:min-h-[450px] flex flex-col justify-between p-4">
            
            {/* Base Aerial Architectural Visual */}
            <img 
              src="/images/hero_main_aerial.png" 
              alt="Antelia Groves 10-Acre Masterplan Layout" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40 pointer-events-none" />

            {/* Top Board Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full border border-white/20">
                10-ACRE MASTERPLAN • REALISTIC TOP-DOWN VIEW
              </span>

              <span className="bg-[#F97316] text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs">
                RERA APPROVED
              </span>
            </div>

            {/* Subtle On-Map Zone Labels */}
            <div className="absolute inset-0 pointer-events-none z-10 p-5 flex flex-col justify-between">
              <div className="mt-10 flex items-center justify-between">
                <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-xs transition-colors ${
                  activeItem === 0 ? 'bg-[#F97316] text-white' : 'bg-slate-950/70 text-slate-300 border border-white/10'
                }`}>
                  MAIN GATED ENTRY
                </span>
                <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-xs transition-colors ${
                  activeItem === 1 ? 'bg-[#F97316] text-white' : 'bg-slate-950/70 text-slate-300 border border-white/10'
                }`}>
                  NORTH &amp; SOUTH VILLA GROVES
                </span>
              </div>

              <div className="flex items-center justify-between mb-8">
                <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-xs transition-colors ${
                  activeItem === 3 ? 'bg-[#F97316] text-white' : 'bg-slate-950/70 text-slate-300 border border-white/10'
                }`}>
                  70% OPEN GREENERY
                </span>
                <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded backdrop-blur-xs transition-colors ${
                  activeItem === 2 ? 'bg-[#F97316] text-white' : 'bg-slate-950/70 text-slate-300 border border-white/10'
                }`}>
                  15K SQ.FT CLUBHOUSE
                </span>
              </div>
            </div>

            {/* 5 ELEGANT NUMBERED ORANGE MARKERS DIRECTLY ON MASTERPLAN */}
            {guideItems.map((item) => {
              const isActive = activeItem === item.id;

              return (
                <div
                  key={item.num}
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  <button
                    onClick={() => setActiveItem(item.id)}
                    onMouseEnter={() => setActiveItem(item.id)}
                    className={`relative w-7 h-7 rounded-full flex items-center justify-center font-black text-xs transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-[#F97316] text-white scale-125 shadow-lg ring-4 ring-orange-200' 
                        : 'bg-[#0F172A] text-white hover:bg-[#F97316] hover:scale-110 shadow-md border-2 border-white'
                    }`}
                  >
                    <span>{item.num}</span>

                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-[#F97316] animate-ping opacity-40 pointer-events-none" />
                    )}
                  </button>

                  {/* Connected Information Callout Tooltip */}
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
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                          {item.subtitle}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
                  {current.code} — {current.title}
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

          {/* RIGHT 28% — SLIM VERTICAL MASTERPLAN GUIDE PANEL */}
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

              {/* 5 COMPACT GUIDE LIST ITEMS WITH THUMBNAILS */}
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
                      {/* Supporting Thumbnail Image */}
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

            {/* Quick Helper Note */}
            <div className="pt-3 mt-3 border-t border-slate-200/80 text-[10px] font-semibold text-slate-500 flex items-center justify-between">
              <span>Hover markers to inspect zones</span>
              <span className="text-[#F97316] font-bold">5 KEY ZONES</span>
            </div>
          </div>

        </div>

        {/* ================================================================= */}
        {/* BOTTOM INTEGRATED PROJECT FACTS STRIP                              */}
        {/* ================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <div className="grid grid-cols-2 sm:flex items-center gap-4 sm:gap-8 text-[11px] font-extrabold text-[#0F172A] uppercase tracking-wider w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
              <span>10+ ACRES</span>
              <span className="text-slate-300 hidden sm:inline">|</span>
            </div>

            <div className="flex items-center gap-2">
              <Home className="w-3.5 h-3.5 text-[#F97316]" />
              <span>189 VILLAS</span>
              <span className="text-slate-300 hidden sm:inline">|</span>
            </div>

            <div className="flex items-center gap-2">
              <Trees className="w-3.5 h-3.5 text-[#F97316]" />
              <span>70% OPEN</span>
              <span className="text-slate-300 hidden sm:inline">|</span>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>15K SQ.FT CLUBHOUSE</span>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="text-[11px] font-extrabold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-orange-200 shadow-2xs hover:shadow-xs"
          >
            <span>BOOK A SITE VISIT</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
