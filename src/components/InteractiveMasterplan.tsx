'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Compass, Layers, ArrowRight, CheckCircle2, Navigation } from 'lucide-react';

interface InteractiveMasterplanProps {
  onOpenBooking?: () => void;
}

export default function InteractiveMasterplan({ onOpenBooking }: InteractiveMasterplanProps) {
  const [activeMarker, setActiveMarker] = useState<number>(0);
  const [filterMode, setFilterMode] = useState<string>('ALL');

  const markers = [
    {
      id: 0,
      num: '01',
      code: '01 — ARRIVAL',
      title: 'Grand Gated Entrance & Boulevard',
      desc: '24/7 RFID security portal, visitor lounge, and 40ft wide tree-lined arrival boulevard.',
      stats: '40 FT WIDE BOULEVARD',
      category: 'ENTRANCE',
      x: 18, // percentage X
      y: 68, // percentage Y
      anchorPos: 'bottom-left',
    },
    {
      id: 1,
      num: '02',
      code: '02 — VILLA NEIGHBOURHOODS',
      title: '189 Luxury Villa Plots',
      desc: 'North & South Grove split-level vastu-compliant 3 & 4 BHK residences.',
      stats: '189 EXCLUSIVE PLOTS',
      category: 'VILLAS',
      x: 42,
      y: 32,
      anchorPos: 'top-left',
    },
    {
      id: 2,
      num: '03',
      code: '03 — CLUBHOUSE',
      title: '15,000 Sq.Ft Resort Hub',
      desc: 'Grand banquet, lap pool, fitness wing, indoor games & poolside café terrace.',
      stats: '15,000 SQ.FT CLUBHOUSE',
      category: 'CLUBHOUSE',
      x: 78,
      y: 42,
      anchorPos: 'top-right',
    },
    {
      id: 3,
      num: '04',
      code: '04 — OPEN LANDSCAPE',
      title: '70% Green Sanctuary',
      desc: 'Central botanical gardens, lotus reflection ponds, and native fruit groves.',
      stats: '70% OPEN LANDSCAPE',
      category: 'LANDSCAPE',
      x: 62,
      y: 75,
      anchorPos: 'bottom-right',
    },
    {
      id: 4,
      num: '05',
      code: '05 — COMMUNITY WALKWAYS',
      title: 'Tree-Lined Pedestrian Trails',
      desc: 'Car-free walking loops, rubberized jogging tracks & shaded pergolas.',
      stats: '2.5 KM WALKWAY LOOP',
      category: 'WALKWAYS',
      x: 28,
      y: 22,
      anchorPos: 'top-left',
    },
  ];

  const active = markers[activeMarker];

  return (
    <section id="masterplan" className="w-full bg-white py-6 md:py-10 relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Accent Light */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPACT SECTION HEADER & SUBTEXT */}
        <div className="max-w-3xl mb-4 md:mb-6">
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
            className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#0F172A] leading-[1.16] tracking-tight mb-2"
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
            Explore how 10 acres of villas, open landscape, roads, gardens and shared spaces come together as one connected living environment.
          </motion.p>
        </div>

        {/* HERO OBJECT: ARCHITECTURAL MASTERPLAN DISPLAY BOARD (~75–80% WIDTH ON DESKTOP) */}
        <div className="max-w-6xl mx-auto">
          
          {/* ARCHITECTURAL CONTROL BAR */}
          <div className="bg-slate-50 border border-slate-200 rounded-t-2xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#F97316]" />
              <span className="font-extrabold text-[#0F172A] uppercase tracking-wider text-[11px]">
                EXPLORE THE MASTERPLAN →
              </span>
            </div>

            {/* Stage Selector Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setFilterMode('ALL')}
                className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                  filterMode === 'ALL'
                    ? 'bg-[#0F172A] text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                ALL ZONES
              </button>

              {markers.map((m) => (
                <button
                  key={m.num}
                  onClick={() => {
                    setActiveMarker(m.id);
                    setFilterMode(m.category);
                  }}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer shrink-0 ${
                    activeMarker === m.id
                      ? 'bg-[#F97316] text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {m.num}
                </button>
              ))}
            </div>
          </div>

          {/* MAIN ARCHITECTURAL SITE PLAN CANVAS CONTAINER */}
          <div className="relative w-full rounded-b-2xl border-x border-b border-slate-200 overflow-hidden bg-[#FAFBFD] shadow-sm select-none">
            
            {/* Horizontal Scroll Wrapper for Mobile Viewports */}
            <div className="w-full overflow-x-auto scrollbar-none">
              <div className="min-w-[700px] sm:min-w-0 relative aspect-[16/9] w-full max-h-[480px] bg-[#F8FAFC]">
                
                {/* SVG VECTOR ARCHITECTURAL DEVELOPMENT DRAWING */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 562" fill="none">
                  
                  {/* Subtle Grid Lines */}
                  <defs>
                    <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="0.6" strokeDasharray="2 2" />
                    </pattern>
                  </defs>
                  <rect width="1000" height="562" fill="url(#archGrid)" />

                  {/* 10-Acre Development Outer Boundary Contour */}
                  <path 
                    d="M 100 80 L 880 70 L 920 480 L 120 490 Z" 
                    fill="#FFFFFF" 
                    stroke="#0F172A" 
                    strokeWidth="2.5" 
                  />

                  {/* Subtle Topographic Contour Lines */}
                  <path d="M 120 160 Q 500 120 860 170" stroke="#E2E8F0" strokeWidth="1" />
                  <path d="M 130 260 Q 480 230 870 270" stroke="#E2E8F0" strokeWidth="1" />
                  <path d="M 110 380 Q 510 360 890 390" stroke="#E2E8F0" strokeWidth="1" />

                  {/* GREEN OPEN LANDSCAPE MASSES (70% GREENERY) */}
                  <path 
                    d="M 520 320 Q 620 280 720 340 Q 680 440 540 430 Z" 
                    fill="#F0FDF4" 
                    stroke="#BBF7D0" 
                    strokeWidth="1.5" 
                  />
                  <path 
                    d="M 220 110 Q 340 100 380 180 Q 280 200 200 160 Z" 
                    fill="#F0FDF4" 
                    stroke="#BBF7D0" 
                    strokeWidth="1.5" 
                  />
                  
                  {/* Water Reflection Pond Geometry */}
                  <path 
                    d="M 600 360 Q 650 340 680 370 Q 640 400 590 380 Z" 
                    fill="#EFF6FF" 
                    stroke="#BFDBFE" 
                    strokeWidth="1.5" 
                  />

                  {/* MAIN ARRIVAL BOULEVARD ROAD (40 FT WIDE) */}
                  <path 
                    d="M 100 380 L 320 370 L 450 180 L 780 180 L 880 250" 
                    stroke="#E2E8F0" 
                    strokeWidth="24" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 100 380 L 320 370 L 450 180 L 780 180 L 880 250" 
                    stroke="#CBD5E1" 
                    strokeWidth="22" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M 100 380 L 320 370 L 450 180 L 780 180 L 880 250" 
                    stroke="#FFFFFF" 
                    strokeWidth="2" 
                    strokeDasharray="6 6" 
                  />

                  {/* VILLA PLOT NEIGHBOURHOOD GRID (189 PLOTS) */}
                  {/* North Grove Villa Grid */}
                  <g opacity="0.85">
                    <rect x="360" y="110" width="35" height="45" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" rx="2" />
                    <rect x="400" y="110" width="35" height="45" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" rx="2" />
                    <rect x="440" y="110" width="35" height="45" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" rx="2" />
                    <rect x="480" y="110" width="35" height="45" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" rx="2" />
                    <rect x="520" y="110" width="35" height="45" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" rx="2" />

                    {/* South Grove Villa Grid */}
                    <rect x="250" y="240" width="40" height="50" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" rx="2" />
                    <rect x="295" y="240" width="40" height="50" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" rx="2" />
                    <rect x="340" y="240" width="40" height="50" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" rx="2" />
                    <rect x="385" y="240" width="40" height="50" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" rx="2" />
                  </g>

                  {/* 15,000 SQ.FT CLUBHOUSE BUILDING FOOTPRINT */}
                  <rect x="740" y="210" width="110" height="80" fill="#0F172A" rx="6" />
                  <rect x="760" y="230" width="70" height="40" fill="#F97316" rx="4" />
                  <text x="795" y="254" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle">CLUBHOUSE</text>

                  {/* SUBTLE ANIMATED ORANGE ROUTE LINE (01 -> 02 -> 03 -> 04 -> 05) */}
                  <path 
                    d="M 180 380 Q 280 240 420 180 Q 620 220 780 240 Q 620 420 280 120" 
                    stroke="#F97316" 
                    strokeWidth="2.5" 
                    strokeDasharray="6 4"
                    className="animate-pulse"
                  />
                </svg>

                {/* 5 NUMBERED ORANGE MARKERS PLACED DIRECTLY ON MASTERPLAN */}
                {markers.map((m) => {
                  const isActive = activeMarker === m.id;

                  return (
                    <div
                      key={m.num}
                      style={{ left: `${m.x}%`, top: `${m.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group"
                    >
                      {/* Interactive Marker Pin */}
                      <button
                        onClick={() => setActiveMarker(m.id)}
                        onMouseEnter={() => setActiveMarker(m.id)}
                        className={`relative w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? 'bg-[#F97316] text-white scale-125 shadow-lg shadow-orange-500/30 ring-4 ring-orange-200' 
                            : 'bg-[#0F172A] text-white hover:bg-[#F97316] hover:scale-110 shadow-md border-2 border-white'
                        }`}
                      >
                        <span>{m.num}</span>

                        {/* Pulse Effect */}
                        {isActive && (
                          <span className="absolute inset-0 rounded-full bg-[#F97316] animate-ping opacity-40 pointer-events-none" />
                        )}
                      </button>

                      {/* Floating Marker Label (Mini) */}
                      <div className="absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-900/90 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded backdrop-blur-xs border border-white/20 shadow-sm pointer-events-none">
                        {m.category}
                      </div>

                      {/* ELEGANT ANCHORED INFORMATION POPOVER */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute z-40 w-64 bg-white rounded-xl p-3.5 border border-slate-200 shadow-xl pointer-events-auto ${
                              m.x > 60 ? 'right-0 text-right' : 'left-0 text-left'
                            } ${m.y > 60 ? 'bottom-11' : 'top-11'}`}
                          >
                            <div className="flex items-center gap-1.5 mb-1 text-[10px] font-extrabold text-[#F97316] uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                              <span>{m.code}</span>
                            </div>

                            <h4 className="text-xs font-extrabold text-[#0F172A] mb-1">
                              {m.title}
                            </h4>

                            <p className="text-[11px] text-slate-600 font-medium leading-relaxed mb-2">
                              {m.desc}
                            </p>

                            <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-extrabold text-[#0F172A] uppercase">
                              <span className="text-[#F97316]">{m.stats}</span>
                              <button
                                onClick={onOpenBooking}
                                className="inline-flex items-center gap-1 text-[#0F172A] hover:text-[#F97316] transition-colors cursor-pointer"
                              >
                                <span>INQUIRE</span>
                                <ArrowRight className="w-3 h-3" />
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* COMPACT FLOATING MAP LEGEND AT BOTTOM RIGHT */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-slate-200 shadow-sm text-[10px] space-y-1 z-20 hidden sm:block">
                  <div className="font-extrabold text-[#0F172A] uppercase tracking-wider mb-1">
                    SITE PLAN LEGEND
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#0F172A]" />
                    <span>Clubhouse (15K Sq.Ft)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <span className="w-2.5 h-2.5 rounded-xs bg-emerald-100 border border-emerald-300" />
                    <span>70% Open Landscape</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <span className="w-2.5 h-2.5 rounded-xs bg-amber-100 border border-amber-300" />
                    <span>189 Villa Neighborhoods</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* COMPACT INTEGRATED HORIZONTAL INFORMATION RAIL IMMEDIATELY BELOW MASTERPLAN */}
          <motion.div 
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="w-full bg-slate-900 rounded-b-2xl text-white px-5 py-3 border-t border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 mt-0.5"
          >
            <div className="grid grid-cols-2 sm:flex items-center gap-4 sm:gap-8 text-[11px] font-extrabold uppercase tracking-wider w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <span className="text-[#F97316]">10+ ACRES</span>
                <span className="text-slate-700 hidden sm:inline">|</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-white">189 VILLAS</span>
                <span className="text-slate-700 hidden sm:inline">|</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-white">70% OPEN</span>
                <span className="text-slate-700 hidden sm:inline">|</span>
              </div>

              <div>
                <span className="text-white">15K SQ.FT CLUBHOUSE</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto text-center py-2 px-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-[11px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shrink-0"
            >
              <span>BOOK A SITE VISIT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
