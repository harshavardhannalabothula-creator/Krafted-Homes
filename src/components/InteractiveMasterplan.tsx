'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Home, Trees, Sparkles, Compass, ArrowRight } from 'lucide-react';

interface InteractiveMasterplanProps {
  onOpenBooking?: () => void;
}

export default function InteractiveMasterplan({ onOpenBooking }: InteractiveMasterplanProps) {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const markers = [
    {
      id: 0,
      num: '01',
      code: '01 ARRIVAL',
      title: 'GRAND GATED ENTRANCE & BOULEVARD',
      badge: '40ft Wide Boulevard & 24/7 RFID Portal',
      x: 20, // Percentage X
      y: 68, // Percentage Y
    },
    {
      id: 1,
      num: '02',
      code: '02 VILLAS',
      title: '189 LUXURY VILLA PLOTS',
      badge: 'Split-Level 3 & 4 BHK Vastu Residences',
      x: 42,
      y: 32,
    },
    {
      id: 2,
      num: '03',
      code: '03 CLUBHOUSE',
      title: '15,000 SQ.FT CLUBHOUSE',
      badge: 'Resort Swimming Pool & Wellness Wing',
      x: 78,
      y: 44,
    },
    {
      id: 3,
      num: '04',
      code: '04 LANDSCAPE',
      title: '70% OPEN GREENERY',
      badge: 'Botanical Gardens & Lotus Reflection Ponds',
      x: 62,
      y: 76,
    },
    {
      id: 4,
      num: '05',
      code: '05 WALKWAYS',
      title: 'PEDESTRIAN TRAILS & JOGGING LOOPS',
      badge: 'Car-Free Shaded Walkability Network',
      x: 28,
      y: 22,
    },
  ];

  return (
    <section id="masterplan" className="w-full bg-white py-6 md:py-9 relative overflow-hidden border-t border-slate-100 text-[#0F172A]">
      
      {/* Ambient Background Light */}
      <div className="absolute top-1/3 right-12 w-80 h-80 bg-orange-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
        
        {/* ================================================================= */}
        {/* COMPACT LEFT-ALIGNED SECTION INTRO                                 */}
        {/* ================================================================= */}
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
            One Community. <span className="text-[#F97316]">Everything Connected.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl"
          >
            Antelia Groves brings villas, landscape, wellness and everyday experiences together across 10 thoughtfully planned acres.
          </motion.p>
        </div>

        {/* ================================================================= */}
        {/* HERO VISUAL — THE 10-ACRE WORLD PANORAMIC 3D AERIAL MASTERPLAN    */}
        {/* ================================================================= */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-950 group select-none min-h-[360px] sm:min-h-[460px] lg:min-h-[490px]"
        >
          {/* Panoramic Aerial Photography */}
          <img 
            src="/images/hero_main_aerial.png" 
            alt="Antelia Groves 10-Acre World Aerial Masterplan"
            className={`w-full h-full object-cover transition-all duration-700 ease-out ${
              activeMarker !== null ? 'scale-102 brightness-95' : 'group-hover:scale-101'
            }`}
          />

          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-slate-950/30 pointer-events-none" />

          {/* TOP CONCEPT LABEL */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
            <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-3.5 py-1 rounded-full border border-white/20 tracking-wider">
              THE 10-ACRE WORLD • PANORAMIC MASTERPLAN
            </span>

            <span className="bg-[#F97316] text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-xs">
              RERA APPROVED
            </span>
          </div>

          {/* CINEMATIC JOURNEY LINE OVERLAY (01 ARRIVAL -> 02 VILLAS -> 03 CLUBHOUSE -> 04 LANDSCAPE -> 05 WALKWAYS) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" fill="none">
            <motion.path 
              d="M 20% 68% L 42% 32% L 78% 44% L 62% 76% L 28% 22%" 
              stroke="#F97316" 
              strokeWidth="2" 
              strokeDasharray="6 4"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </svg>

          {/* 5 ELEGANT NUMBERED LOCATION MARKERS DIRECTLY ON AERIAL SCENE */}
          {markers.map((m) => {
            const isActive = activeMarker === m.id;

            return (
              <div
                key={m.num}
                style={{ left: `${m.x}%`, top: `${m.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <div className="relative flex flex-col items-center">
                  
                  {/* Numbered Marker Button (White Label + Orange Number) */}
                  <button
                    onClick={() => setActiveMarker(isActive ? null : m.id)}
                    onMouseEnter={() => setActiveMarker(m.id)}
                    onMouseLeave={() => setActiveMarker(null)}
                    className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all duration-300 cursor-pointer shadow-md border ${
                      isActive
                        ? 'bg-[#F97316] text-white border-[#F97316] scale-110 shadow-orange-500/40 ring-4 ring-orange-200/50'
                        : 'bg-white/95 text-[#0F172A] border-white/80 hover:bg-[#F97316] hover:text-white hover:scale-105'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center font-black text-[10px] ${
                      isActive ? 'bg-white text-[#F97316]' : 'bg-[#F97316] text-white'
                    }`}>
                      {m.num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">
                      {m.code.replace(/^\d+\s*/, '')}
                    </span>
                  </button>

                  {/* Gentle Illuminated Callout Tag when Active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 bg-slate-950/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg border border-orange-400/80 shadow-xl whitespace-nowrap text-center pointer-events-none"
                      >
                        <div className="text-[9px] font-extrabold text-[#F97316] uppercase tracking-widest">
                          {m.code}
                        </div>
                        <div className="text-[11px] font-extrabold text-white">
                          {m.title}
                        </div>
                        <div className="text-[10px] text-slate-300 font-medium">
                          {m.badge}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            );
          })}

          {/* ACTIVE HOVER ILLUMINATION BADGE AT BOTTOM LEFT */}
          <div className="absolute bottom-4 left-4 z-10">
            {activeMarker !== null ? (
              <div className="bg-slate-950/90 backdrop-blur-md text-white px-4 py-2.5 rounded-xl border border-orange-400/80 shadow-md max-w-sm">
                <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-wider block">
                  ✦ {markers[activeMarker].code}
                </span>
                <h4 className="text-xs font-extrabold text-white">
                  {markers[activeMarker].title}
                </h4>
                <p className="text-[11px] text-slate-300 font-medium">
                  {markers[activeMarker].badge}
                </p>
              </div>
            ) : (
              <div className="bg-slate-950/75 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full border border-white/20 text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
                <span>Hover markers 01–05 to inspect zones</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* ================================================================= */}
        {/* COMPACT BOTTOM INFORMATION BAR                                    */}
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
              <span className="text-slate-300 hidden sm:inline">•</span>
            </div>

            <div className="flex items-center gap-2">
              <Home className="w-3.5 h-3.5 text-[#F97316]" />
              <span>189 VILLAS</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
            </div>

            <div className="flex items-center gap-2">
              <Trees className="w-3.5 h-3.5 text-[#F97316]" />
              <span>70% OPEN</span>
              <span className="text-slate-300 hidden sm:inline">•</span>
            </div>

            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>15K SQ.FT CLUBHOUSE</span>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto text-center py-2 px-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-[11px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <span>EXPLORE THE COMMUNITY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
