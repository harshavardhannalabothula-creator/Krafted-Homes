'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MapPin, Home, Trees, Sparkles } from 'lucide-react';

interface InteractiveMasterplanProps {
  onOpenBooking?: () => void;
}

export default function InteractiveMasterplan({ onOpenBooking }: InteractiveMasterplanProps) {
  const [activeHotspot, setActiveHotspot] = useState<number>(0);

  const hotspots = [
    {
      id: 0,
      num: '01',
      tag: 'ARRIVAL',
      title: '01 — ARRIVAL',
      desc: 'Grand gated entrance with landscaped approach.',
      x: 16, // percentage X on masterplan canvas
      y: 72, // percentage Y on masterplan canvas
    },
    {
      id: 1,
      num: '02',
      tag: 'VILLA NEIGHBOURHOODS',
      title: '02 — VILLA NEIGHBOURHOODS',
      desc: 'Thoughtfully arranged villa clusters surrounded by greenery.',
      x: 42,
      y: 34,
    },
    {
      id: 2,
      num: '03',
      tag: 'CLUBHOUSE',
      title: '03 — CLUBHOUSE',
      desc: '15,000 sq.ft community and wellness destination.',
      x: 74,
      y: 44,
    },
    {
      id: 3,
      num: '04',
      tag: 'OPEN LANDSCAPE',
      title: '04 — OPEN LANDSCAPE',
      desc: '70% open environment with gardens and shared spaces.',
      x: 58,
      y: 74,
    },
    {
      id: 4,
      num: '05',
      tag: 'WALKWAYS',
      title: '05 — WALKWAYS',
      desc: 'Connected pedestrian paths through gardens and community spaces.',
      x: 25,
      y: 24,
    },
  ];

  const currentHotspot = hotspots[activeHotspot];

  return (
    <section id="masterplan" className="w-full bg-white py-6 md:py-8 text-[#0F172A] relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
        
        {/* ================================================================= */}
        {/* 1. COMPACT TIGHT HEADER (HEADING ON LEFT, QUICK STATS ON FAR RIGHT) */}
        {/* ================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-3 border-b border-slate-200/80">
          
          {/* LEFT: COMPACT INTRO */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[10px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-1.5"
            >
              <span>02 — THE MASTERPLAN</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold leading-[1.15] tracking-tight mb-1"
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
              10 acres where villas, landscape, movement and community spaces are planned as one connected environment.
            </motion.p>
          </div>

          {/* FAR RIGHT: TIGHT HEADER STATS ROW */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200/90 text-xs font-extrabold text-[#0F172A]">
            <div className="text-center">
              <span className="text-base sm:text-lg font-black text-[#0F172A] block leading-none">10</span>
              <span className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">ACRES</span>
            </div>

            <div className="h-6 w-px bg-slate-200" />

            <div className="text-center">
              <span className="text-base sm:text-lg font-black text-[#0F172A] block leading-none">189</span>
              <span className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">VILLAS</span>
            </div>

            <div className="h-6 w-px bg-slate-200" />

            <div className="text-center">
              <span className="text-base sm:text-lg font-black text-[#F97316] block leading-none">70%</span>
              <span className="text-[9px] font-extrabold uppercase text-slate-400 tracking-wider">OPEN</span>
            </div>
          </div>

        </div>

        {/* ================================================================= */}
        {/* 2. MAIN MASTERPLAN VISUAL CANVAS (FULL WIDTH IMMERSIVE 3D VIEW)   */}
        {/* ================================================================= */}
        <div className="w-full relative rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-950 shadow-md aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8] group select-none flex flex-col justify-between p-4">
          
          {/* Aerial 3D Top-Down Architectural Render */}
          <img 
            src="/images/hero_main_aerial.png" 
            alt="Antelia Groves Community Seen From Above" 
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-101 transition-transform duration-700 ease-out"
          />

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-slate-950/30 pointer-events-none" />

          {/* TOP CONCEPT BADGE */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-3.5 py-1 rounded-full border border-white/20 tracking-wider">
              THE COMMUNITY, SEEN FROM ABOVE • 10-ACRE AERIAL VIEW
            </span>

            <span className="bg-[#F97316] text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-2xs">
              RERA APPROVED
            </span>
          </div>

          {/* SUBTLE DASHED CONNECTOR ROUTE LINE (01 -> 02 -> 03 -> 04 -> 05) */}
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

          {/* 3. FIVE NUMBERED HOTSPOTS DIRECTLY ON THE MASTERPLAN CANVAS */}
          {hotspots.map((item, idx) => {
            const isActive = activeHotspot === idx;

            return (
              <div
                key={item.num}
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <div className="relative flex flex-col items-center">
                  
                  {/* Hotspot White Pill with Orange Number Circle + Navy Text */}
                  <button
                    onClick={() => setActiveHotspot(idx)}
                    onMouseEnter={() => setActiveHotspot(idx)}
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

                  {/* FLOATING DESCRIPTION TOOLTIP APPEARING CLOSE TO ACTUAL LOCATION */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className={`absolute z-40 w-56 bg-white rounded-xl p-3 border border-slate-200 shadow-xl text-left pointer-events-auto ${
                          item.x > 60 ? 'right-0 text-right' : 'left-0 text-left'
                        } ${item.y > 60 ? 'bottom-9' : 'top-9'}`}
                      >
                        <div className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-wider mb-0.5">
                          {item.title}
                        </div>
                        <p className="text-[11px] text-slate-600 font-semibold leading-relaxed">
                          &ldquo;{item.desc}&rdquo;
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>
            );
          })}

          {/* ACTIVE HOTSPOT CALLOUT CAPTION AT BOTTOM LEFT */}
          <div className="relative z-10 bg-slate-950/85 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-white max-w-sm flex items-center justify-between">
            <div>
              <span className="text-[9px] font-extrabold text-[#F97316] uppercase tracking-wider block">
                ACTIVE ZONE HOTSPOT
              </span>
              <span className="text-xs font-extrabold text-white">
                {currentHotspot.title}
              </span>
            </div>

            <button
              onClick={onOpenBooking}
              className="text-[10px] font-extrabold text-[#F97316] hover:text-white uppercase tracking-wider inline-flex items-center gap-1 transition-colors cursor-pointer bg-white/10 px-2.5 py-1 rounded-full border border-white/20"
            >
              <span>INQUIRE</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>

        {/* MOBILE HORIZONTAL HOTSPOT CONTROLS (VISIBLE ON MOBILE & TABLET) */}
        <div className="flex lg:hidden items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
          {hotspots.map((h, idx) => (
            <button
              key={h.num}
              onClick={() => setActiveHotspot(idx)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                activeHotspot === idx
                  ? 'bg-[#F97316] text-white shadow-xs'
                  : 'bg-slate-100 text-[#0F172A] border border-slate-200'
              }`}
            >
              {h.num} {h.tag}
            </button>
          ))}
        </div>

        {/* ================================================================= */}
        {/* 4. BOTTOM ARCHITECTURAL DATA STRIP (SLIM HORIZONTAL STRIP)        */}
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
                <div className="text-xs sm:text-sm font-black text-[#0F172A] tracking-tight">15K SQ.FT</div>
                <div className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Clubhouse &amp; Wellness</div>
              </div>
            </div>

          </div>

          {/* OUTLINED CTA BUTTON */}
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
