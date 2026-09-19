'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Home, Trees, Sparkles, Compass, ArrowRight, Layers } from 'lucide-react';

interface InteractiveMasterplanProps {
  onOpenBooking?: () => void;
}

export default function InteractiveMasterplan({ onOpenBooking }: InteractiveMasterplanProps) {
  const [activeMarker, setActiveMarker] = useState<number>(0);

  const zones = [
    {
      id: 0,
      num: '01',
      code: '01 — ARRIVAL',
      title: 'Grand Gated Entrance',
      desc: 'A clear arrival experience with a 40ft wide landscaped boulevard leading smoothly into the community.',
      highlightTag: 'MAIN ENTRY BOULEVARD',
      stats: '40ft Wide Boulevard',
      x: 18, // SVG percentage X
      y: 70, // SVG percentage Y
    },
    {
      id: 1,
      num: '02',
      code: '02 — VILLA NEIGHBOURHOODS',
      title: 'Thoughtfully Planned Homes',
      desc: 'Residential clusters arranged around landscape and internal streets with 189 split-level vastu-compliant plots.',
      highlightTag: '189 VILLA PLOTS',
      stats: 'North & South Enclaves',
      x: 44,
      y: 32,
    },
    {
      id: 2,
      num: '03',
      code: '03 — CLUBHOUSE',
      title: 'Community & Recreation',
      desc: 'A central destination for recreation, gathering and everyday experiences spanning 15,000 sq.ft with lap pool.',
      highlightTag: '15,000 SQ.FT CLUBHOUSE',
      stats: 'Resort Hub & Pool',
      x: 78,
      y: 44,
    },
    {
      id: 3,
      num: '04',
      code: '04 — LANDSCAPE',
      title: 'Open Green Spaces',
      desc: 'Gardens, greenery and quiet outdoor spaces woven throughout the 70% open green community.',
      highlightTag: '70% OPEN GREENERY',
      stats: 'Botanical Parks & Ponds',
      x: 62,
      y: 76,
    },
    {
      id: 4,
      num: '05',
      code: '05 — WALKWAYS',
      title: 'Connected Everyday Living',
      desc: 'Pedestrian paths connecting homes, landscape and shared spaces without vehicle interference.',
      highlightTag: 'PEDESTRIAN TRAILS',
      stats: 'Car-Free Jogging Loops',
      x: 28,
      y: 22,
    },
  ];

  const activeZone = zones[activeMarker];

  return (
    <section id="masterplan" className="w-full bg-white py-6 md:py-10 relative overflow-hidden border-t border-slate-100 text-[#0F172A]">
      
      {/* Subtle Ambient Background Light */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
        
        {/* ================================================================= */}
        {/* COMPACT ARCHITECTURAL SECTION HEADER                              */}
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
            Designed as a Community. <span className="text-[#F97316]">Planned as a Landscape.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl"
          >
            Explore how villas, open landscape, roads, gardens, clubhouse spaces and everyday experiences come together across the 10-acre Antelia Groves community.
          </motion.p>
        </div>

        {/* ================================================================= */}
        {/* MAIN ARCHITECTURAL SITE-PLAN DIAGRAM BOARD (CLEAN & NEAT)         */}
        {/* ================================================================= */}
        <div className="bg-slate-50/90 rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 space-y-4">
          
          {/* TOP DIAGRAM CONTROL TOOLBAR */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200/80 text-xs">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#F97316]" />
              <span className="font-extrabold text-[#0F172A] uppercase tracking-wider text-[11px]">
                10-ACRE SITE PLAN DRAWING
              </span>
            </div>

            {/* Zone Selector Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {zones.map((z) => {
                const isSelected = activeMarker === z.id;
                return (
                  <button
                    key={z.num}
                    onClick={() => setActiveMarker(z.id)}
                    className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all cursor-pointer shrink-0 ${
                      isSelected
                        ? 'bg-[#F97316] text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {z.num} {z.code.replace(/^\d+\s*—\s*/, '')}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ARCHITECTURAL TOP-DOWN BLUEPRINT CANVAS */}
          <div className="relative w-full rounded-xl overflow-hidden bg-white border border-slate-200 shadow-inner select-none min-h-[340px] sm:min-h-[420px] lg:min-h-[450px]">
            
            {/* VECTOR ARCHITECTURAL SITE PLAN SVG */}
            <svg className="w-full h-full min-h-[340px] sm:min-h-[420px] lg:min-h-[450px]" viewBox="0 0 1000 560" fill="none">
              
              {/* Architectural Grid Pattern */}
              <defs>
                <pattern id="cleanArchGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2E8F0" strokeWidth="0.7" strokeDasharray="3 3" />
                </pattern>
              </defs>
              <rect width="1000" height="560" fill="url(#cleanArchGrid)" />

              {/* 10-Acre Perimeter Outer Boundary Drawing */}
              <path 
                d="M 90 70 L 890 60 L 930 490 L 110 500 Z" 
                fill="#FAFAFC" 
                stroke="#0F172A" 
                strokeWidth="2.5" 
              />

              {/* Topographic Elevation Curves */}
              <path d="M 110 150 Q 500 110 880 160" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 120 270 Q 480 230 890 280" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 100 400 Q 510 370 910 410" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4 4" />

              {/* GREEN OPEN LANDSCAPE ZONES (70% OPEN) */}
              <path 
                d="M 520 330 Q 640 280 740 350 Q 690 450 540 440 Z" 
                fill={activeMarker === 3 ? '#DCFCE7' : '#F0FDF4'} 
                stroke={activeMarker === 3 ? '#22C55E' : '#86EFAC'} 
                strokeWidth={activeMarker === 3 ? '2.5' : '1.5'} 
                className="transition-colors duration-300"
              />
              <path 
                d="M 210 110 Q 340 100 390 180 Q 280 200 190 160 Z" 
                fill="#F0FDF4" 
                stroke="#86EFAC" 
                strokeWidth="1.5" 
              />
              
              {/* Lotus Reflection Pond */}
              <path 
                d="M 610 370 Q 660 350 690 380 Q 650 410 600 390 Z" 
                fill="#EFF6FF" 
                stroke="#93C5FD" 
                strokeWidth="1.5" 
              />

              {/* 40FT WIDE MAIN BOULEVARD ROAD */}
              <path 
                d="M 90 390 L 320 380 L 450 180 L 780 180 L 890 250" 
                stroke={activeMarker === 0 ? '#FED7AA' : '#E2E8F0'} 
                strokeWidth="24" 
                strokeLinecap="round" 
              />
              <path 
                d="M 90 390 L 320 380 L 450 180 L 780 180 L 890 250" 
                stroke={activeMarker === 0 ? '#F97316' : '#94A3B8'} 
                strokeWidth="20" 
                strokeLinecap="round" 
              />
              <path 
                d="M 90 390 L 320 380 L 450 180 L 780 180 L 890 250" 
                stroke="#FFFFFF" 
                strokeWidth="2" 
                strokeDasharray="6 6" 
              />

              {/* 189 VILLA PLOTS ARCHITECTURAL NEIGHBOURHOOD GRID */}
              <g stroke="#0F172A" strokeWidth="1.2" fill={activeMarker === 1 ? '#FFEDD5' : '#F8FAFC'}>
                {/* North Grove Villa Enclaves */}
                <rect x="360" y="110" width="36" height="46" rx="3" stroke={activeMarker === 1 ? '#F97316' : '#64748B'} />
                <rect x="402" y="110" width="36" height="46" rx="3" stroke={activeMarker === 1 ? '#F97316' : '#64748B'} />
                <rect x="444" y="110" width="36" height="46" rx="3" stroke={activeMarker === 1 ? '#F97316' : '#64748B'} />
                <rect x="486" y="110" width="36" height="46" rx="3" stroke={activeMarker === 1 ? '#F97316' : '#64748B'} />
                <rect x="528" y="110" width="36" height="46" rx="3" stroke={activeMarker === 1 ? '#F97316' : '#64748B'} />

                {/* South Grove Villa Enclaves */}
                <rect x="250" y="240" width="40" height="50" rx="3" stroke={activeMarker === 1 ? '#F97316' : '#64748B'} />
                <rect x="296" y="240" width="40" height="50" rx="3" stroke={activeMarker === 1 ? '#F97316' : '#64748B'} />
                <rect x="342" y="240" width="40" height="50" rx="3" stroke={activeMarker === 1 ? '#F97316' : '#64748B'} />
                <rect x="388" y="240" width="40" height="50" rx="3" stroke={activeMarker === 1 ? '#F97316' : '#64748B'} />
              </g>

              {/* 15,000 SQ.FT CLUBHOUSE BUILDING GEOMETRY */}
              <rect 
                x="740" 
                y="210" 
                width="120" 
                height="85" 
                fill={activeMarker === 2 ? '#F97316' : '#0F172A'} 
                rx="6" 
                stroke="#0F172A" 
                strokeWidth="2"
                className="transition-colors duration-300"
              />
              <rect x="760" y="230" width="80" height="45" fill="#38BDF8" rx="4" />
              <text x="800" y="257" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle">15K CLUBHOUSE</text>

              {/* PEDESTRIAN WALKWAYS ROUTE LINE (05 WALKWAYS) */}
              <path 
                d="M 180 390 Q 280 250 430 180 Q 630 220 780 240 Q 630 430 280 120" 
                stroke="#F97316" 
                strokeWidth={activeMarker === 4 ? '3' : '2'} 
                strokeDasharray="6 4" 
              />
            </svg>

            {/* 5 NUMBERED INTERACTIVE LOCATION MARKERS */}
            {zones.map((z) => {
              const isActive = activeMarker === z.id;

              return (
                <div
                  key={z.num}
                  style={{ left: `${z.x}%`, top: `${z.y}%` }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  <button
                    onClick={() => setActiveMarker(z.id)}
                    onMouseEnter={() => setActiveMarker(z.id)}
                    className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all duration-300 cursor-pointer shadow-md border ${
                      isActive
                        ? 'bg-[#F97316] text-white border-[#F97316] scale-110 shadow-orange-500/30 ring-4 ring-orange-200'
                        : 'bg-[#0F172A] text-white border-slate-700 hover:bg-[#F97316]'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center font-black text-[10px] ${
                      isActive ? 'bg-white text-[#F97316]' : 'bg-[#F97316] text-white'
                    }`}>
                      {z.num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider">
                      {z.code.replace(/^\d+\s*—\s*/, '')}
                    </span>
                  </button>
                </div>
              );
            })}

            {/* FLOATING MAP LEGEND (BOTTOM RIGHT) */}
            <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md p-2.5 rounded-xl border border-slate-200 shadow-sm text-[10px] space-y-1 z-20 hidden sm:block">
              <div className="font-extrabold text-[#0F172A] uppercase tracking-wider mb-1">
                ARCHITECTURAL LEGEND
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <span className="w-2.5 h-2.5 rounded-xs bg-[#0F172A]" />
                <span>15K Sq.Ft Clubhouse &amp; Pool</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <span className="w-2.5 h-2.5 rounded-xs bg-emerald-100 border border-emerald-400" />
                <span>70% Open Landscape</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <span className="w-2.5 h-2.5 rounded-xs bg-orange-100 border border-orange-400" />
                <span>189 Villa Enclaves</span>
              </div>
            </div>

          </div>

          {/* ACTIVE ZONE CONNECTED INFORMATION CALLOUT PANEL */}
          <div className="bg-white rounded-xl p-4 border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-wider">
                  {activeZone.code}
                </span>
                <span className="text-[10px] font-extrabold text-slate-400">
                  • {activeZone.stats}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] tracking-tight">
                {activeZone.title}
              </h3>

              <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-3xl">
                {activeZone.desc}
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="text-xs font-extrabold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full border border-orange-200/80"
            >
              <span>Explore the Masterplan</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* ================================================================= */}
        {/* SMALL INFORMATION STRIP BELOW THE MASTERPLAN                      */}
        {/* ================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-full bg-slate-50 rounded-xl px-4 py-2.5 border border-slate-200/90 shadow-2xs flex items-center justify-between gap-4"
        >
          <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-8 text-[11px] font-extrabold text-[#0F172A] uppercase tracking-wider w-full sm:w-auto">
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
        </motion.div>

      </div>
    </section>
  );
}
