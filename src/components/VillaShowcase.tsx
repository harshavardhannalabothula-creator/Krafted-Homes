'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Trees, Play, Pause, ArrowRight, RotateCw } from 'lucide-react';
import Villa3DEngine from './Villa3DEngine';

interface VillaShowcaseProps {
  onOpenBooking: () => void;
}

export default function VillaShowcase({ onOpenBooking }: VillaShowcaseProps) {
  const [facing, setFacing] = useState<'East' | 'West'>('East');
  const [mode, setMode] = useState<'DAY' | 'NIGHT'>('DAY');
  const [activeRoom, setActiveRoom] = useState<number>(0);
  const [isPlayingWalkthrough, setIsPlayingWalkthrough] = useState(true);

  const villaSpecs = {
    East: {
      type: 'Type A East Facing',
      landArea: '1,200 SQ.FT',
      bua: '2,400 SQ.FT',
      carpet: '1,820 SQ.FT',
      backyard: '180 SQ.FT',
      orientation: 'East-Facing Main Entrance (100% Vastu Compliant)',
      sunlight: 'Bright Morning Sunlight into Living Room & Private Backyard',
    },
    West: {
      type: 'Type A West Facing',
      landArea: '1,200 SQ.FT',
      bua: '2,400 SQ.FT',
      carpet: '1,820 SQ.FT',
      backyard: '180 SQ.FT',
      orientation: 'West-Facing Main Entrance with Sunset View',
      sunlight: 'Warm Evening Sunlight across Balcony & Terrace Lounge',
    },
  };

  const walkthruRooms = [
    { id: 0, name: 'FOYER', desc: 'Main wooden entrance door with welcoming vestibule and warm lights', image: '/images/room_foyer.jpg' },
    { id: 1, name: 'LIVING ROOM', desc: 'Large open living room with 18-ft high ceiling and floor-to-ceiling glass sliding doors', image: '/images/room_living.jpg' },
    { id: 2, name: 'DINING AREA', desc: 'Spacious 8-seater dining space next to kitchen island and private planter garden', image: '/images/room_dining.jpg' },
    { id: 3, name: 'KITCHEN', desc: 'Modern kitchen with granite island counter, pantry storage, and built-in fittings', image: '/images/room_kitchen.jpg' },
    { id: 4, name: 'PRIVATE GARDEN', desc: '180 sq.ft private green backyard with wooden deck, fresh lawn & butterfly plants', image: '/images/private_garden_sanctuary.jpg' },
    { id: 5, name: 'MASTER BEDROOM', desc: 'Spacious master bedroom suite with private glass balcony and walk-in wardrobe area', image: '/images/room_master_bedroom.jpg' },
    { id: 6, name: 'TERRACE LOUNGE', desc: 'Open rooftop sky terrace with starlit pergola dining and 10-acre green views', image: '/images/room_terrace.jpg' },
  ];

  // Non-stop automatic 2-second room transition cycle
  useEffect(() => {
    if (!isPlayingWalkthrough) return;

    const timer = setInterval(() => {
      setActiveRoom((prev) => {
        if (prev >= walkthruRooms.length - 1) {
          setFacing((f) => (f === 'East' ? 'West' : 'East'));
          setMode((m) => (m === 'DAY' ? 'NIGHT' : 'DAY'));
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isPlayingWalkthrough, walkthruRooms.length]);

  const currentSpecs = villaSpecs[facing];

  return (
    <section id="villas" className="py-16 sm:py-20 lg:py-24 bg-[#F7F6F2] text-[#1D2421] relative overflow-hidden border-b border-[#EBE7DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* 1. SECTION LABEL */}
        <div className="mb-6 sm:mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B89553]">
            02 / VILLA ELEVATION
          </span>
        </div>

        {/* 2. SOPHISTICATED 2-COLUMN EDITORIAL COMPOSITION (50/50 DESKTOP GRID) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY, SPECIFICATIONS & CTAS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B89553] block mb-2">
                02 / VILLA ELEVATION
              </span>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#1D2421] tracking-tight uppercase leading-[1.05] mb-3">
                ANTELIA GROVES
              </h2>

              <h3 className="text-sm sm:text-base font-bold tracking-[0.2em] text-[#B89553] uppercase mb-4">
                INDEPENDENT LUXURY VILLAS
              </h3>

              <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed max-w-lg">
                Spacious independent 3 & 4 BHK villas designed with private 180 sq.ft lawn backyards, high ceilings, large glass windows, and open rooftop sky terraces. Created for architectural clarity, fresh air, and quiet family sanctuary living in South Bengaluru.
              </p>
            </div>

            {/* ORIENTATION TOGGLES */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-1 bg-[#EFECE6] p-1 rounded-lg border border-[#EBE7DF]">
                <button
                  onClick={() => setFacing('East')}
                  className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    facing === 'East' ? 'bg-[#B89553] text-white' : 'text-[#1D2421] hover:text-[#B89553]'
                  }`}
                >
                  EAST FACING
                </button>
                <button
                  onClick={() => setFacing('West')}
                  className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    facing === 'West' ? 'bg-[#B89553] text-white' : 'text-[#1D2421] hover:text-[#B89553]'
                  }`}
                >
                  WEST FACING
                </button>
              </div>

              <div className="inline-flex items-center gap-1 bg-[#EFECE6] p-1 rounded-lg border border-[#EBE7DF]">
                <button
                  onClick={() => setMode('DAY')}
                  className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    mode === 'DAY' ? 'bg-[#1D2421] text-white' : 'text-[#1D2421] hover:text-[#B89553]'
                  }`}
                >
                  ☀️ DAY
                </button>
                <button
                  onClick={() => setMode('NIGHT')}
                  className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    mode === 'NIGHT' ? 'bg-[#1D2421] text-[#ffc107]' : 'text-[#1D2421] hover:text-[#B89553]'
                  }`}
                >
                  🌙 NIGHT
                </button>
              </div>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#B89553] hover:bg-[#1D2421] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm rounded-md cursor-pointer"
              >
                <span>EXPLORE THE VILLAS</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="#masterplan"
                className="text-xs font-bold uppercase tracking-wider text-[#B89553] hover:text-[#1D2421] transition-colors text-center sm:text-left py-1 cursor-pointer underline underline-offset-4"
              >
                THE DEVELOPMENT JOURNEY →
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: FLOATING INTERACTIVE 3D ARCHITECTURAL VILLA PRESENTATION */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex flex-col justify-between min-h-[460px] sm:min-h-[520px] bg-[#F7F6F2] border border-[#EBE7DF] rounded-2xl p-6 sm:p-8"
          >
            {/* TOP-RIGHT ARCHITECTURAL LABEL */}
            <div className="flex items-center justify-between pb-4 border-b border-[#EBE7DF]">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#1D2421]">
                3D VILLA PREVIEW
              </span>

              <div className="flex items-center gap-2 text-[#B89553]">
                <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">360° VIEW</span>
              </div>
            </div>

            {/* FLOATING 3D VILLA CANVAS (75-80% HEIGHT FOR INTENTIONAL ARCHITECTURAL WHITESPACE) */}
            <div className="relative w-full h-[280px] sm:h-[340px] my-3 flex items-center justify-center">
              <Villa3DEngine facing={facing} mode={mode} />
            </div>

            {/* BOTTOM ARCHITECTURAL INFORMATION & SPECIFICATION BLOCK */}
            <div className="pt-4 border-t border-[#EBE7DF] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1D2421] block">
                    VILLA 01
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#B89553] block">
                    CONTEMPORARY RESIDENCE
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B7280]">
                    {facing.toUpperCase()} FACING
                  </span>
                </div>
              </div>

              {/* MINIMAL SPECIFICATION BLOCK WITH THIN 1PX DIVIDERS */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#EBE7DF] text-left">
                {/* SPEC 1 */}
                <div className="pr-2 border-r border-[#EBE7DF]">
                  <span className="text-lg sm:text-2xl font-serif font-bold text-[#1D2421] block leading-none mb-1">
                    2,400+
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#6B7280] block">
                    SQ.FT BUILT AREA
                  </span>
                </div>

                {/* SPEC 2 */}
                <div className="px-2 border-r border-[#EBE7DF]">
                  <span className="text-lg sm:text-2xl font-serif font-bold text-[#1D2421] block leading-none mb-1">
                    180
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#6B7280] block">
                    SQ.FT PRIVATE LAWN
                  </span>
                </div>

                {/* SPEC 3 */}
                <div className="pl-2">
                  <span className="text-lg sm:text-2xl font-serif font-bold text-[#1D2421] block leading-none mb-1">
                    G+1
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#6B7280] block">
                    FLOOR CONFIGURATION
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* 3. BOTTOM FULL-WIDTH EXISTING VILLA PHOTOGRAPH (CINEMATIC REAL-WORLD RESULT) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[360px] sm:h-[480px] lg:h-[560px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EBE7DF] shadow-xl group bg-[#1D2421] mb-16"
        >
          <img
            src="/images/hero_villa_facade.png"
            alt="Antelia Groves Luxury Villa Elevation Real World Result"
            className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-1000 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#B89553] block mb-1">
                REAL-WORLD ARCHITECTURAL EXECUTED RESULT
              </span>
              <h4 className="text-xl sm:text-3xl font-serif font-normal text-white uppercase tracking-tight">
                ANTELIA GROVES VILLA ELEVATION
              </h4>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#1D2421] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>BOOK PRIVATE VILLA TOUR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* 4. VILLA ROOM TOUR SLIDESHOW & HIGHLIGHTS */}
        <div className="mb-16 bg-[#EFECE6] p-8 sm:p-12 rounded-2xl border border-[#EBE7DF]">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-[#EBE7DF] pb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs uppercase tracking-wider font-bold text-[#B89553] block">
                  08 — VILLA ROOM TOUR
                </span>
                <button
                  onClick={() => setIsPlayingWalkthrough(!isPlayingWalkthrough)}
                  className="px-3.5 py-1 rounded-full bg-[#B89553] text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 hover:bg-[#1D2421] transition-colors cursor-pointer"
                >
                  {isPlayingWalkthrough ? (
                    <>
                      <Pause className="w-3 h-3 text-white" />
                      <span>2.0s ROOM SLIDESHOW: ON</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-white" />
                      <span>PAUSED</span>
                    </>
                  )}
                </button>
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-normal text-[#1D2421] tracking-tight uppercase">
                Explore Villa Rooms
              </h3>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {walkthruRooms.map((rm, idx) => (
                <button
                  key={rm.name}
                  onClick={() => setActiveRoom(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase transition-all whitespace-nowrap cursor-pointer ${
                    activeRoom === idx
                      ? 'bg-[#B89553] text-white shadow-xs scale-105'
                      : 'bg-[#F7F6F2] text-[#1D2421] border border-[#EBE7DF] hover:border-[#B89553]'
                  }`}
                >
                  {rm.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 relative h-[360px] sm:h-[400px] rounded-2xl overflow-hidden border border-[#EBE7DF] bg-[#1D2421] shadow-lg">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeRoom}
                  src={walkthruRooms[activeRoom].image}
                  alt={walkthruRooms[activeRoom].name}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-4 left-4 bg-[#F7F6F2]/95 backdrop-blur-md px-4 py-2 border border-[#EBE7DF] rounded-xl shadow-md text-[#1D2421]">
                <span className="text-xs uppercase text-[#B89553] font-bold">
                  ROOM {activeRoom + 1} OF {walkthruRooms.length}: {walkthruRooms[activeRoom].name}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between h-[360px] sm:h-[400px]">
              <div>
                <span className="text-xs font-bold text-[#B89553] uppercase block mb-2">
                  ROOM {walkthruRooms[activeRoom].id + 1}
                </span>
                <h4 className="text-2xl sm:text-3xl font-serif font-normal text-[#1D2421] mb-3 tracking-tight">
                  {walkthruRooms[activeRoom].name}
                </h4>
                <p className="text-xs sm:text-sm font-normal text-[#4B5563] leading-relaxed mb-6">
                  {walkthruRooms[activeRoom].desc}
                </p>
                <div className="p-4 bg-[#F7F6F2] border border-[#EBE7DF] rounded-xl text-xs text-[#1D2421]">
                  <span className="font-bold text-[#B89553] block mb-1">Villa Highlights:</span>
                  <span>{currentSpecs.orientation} — {currentSpecs.sunlight}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveRoom((prev) => (prev > 0 ? prev - 1 : walkthruRooms.length - 1))}
                  className="flex-1 py-3 text-xs border border-[#EBE7DF] text-[#1D2421] uppercase font-bold rounded-xl hover:border-[#1D2421] bg-[#F7F6F2] cursor-pointer"
                >
                  Previous Room
                </button>
                <button
                  onClick={() => setActiveRoom((prev) => (prev < walkthruRooms.length - 1 ? prev + 1 : 0))}
                  className="flex-1 py-3 text-xs bg-[#B89553] text-white uppercase font-bold rounded-xl hover:bg-[#1D2421] transition-all shadow-xs cursor-pointer"
                >
                  Next Room
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 5. PRIVATE BACKYARD GARDENS HIGHLIGHT */}
        <div id="private-gardens" className="bg-[#66705A]/10 p-8 sm:p-12 rounded-2xl border border-[#66705A]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5 text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#66705A]/15 border border-[#66705A]/30 text-xs font-bold text-[#4A543E] uppercase tracking-wider mb-3">
                  <Trees className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>10 — PRIVATE GARDENS</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-serif font-normal text-[#1D2421] mb-3 leading-tight tracking-tight uppercase">
                  FRESH AIR &amp; PRIVATE GARDEN.
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] font-normal leading-relaxed mb-6">
                  Step directly from your living room into an 180 sq.ft private green backyard deck. Enjoy morning tea under palm shade, organic herb gardens, and fresh greenery.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#66705A]/20">
                <div className="p-3.5 bg-white/90 rounded-xl border border-[#66705A]/20 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66705A] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#1D2421] block">180 SQ.FT BACKYARD</span>
                    <span className="text-xs text-[#4B5563]">Wooden garden sit-out</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white/90 rounded-xl border border-[#66705A]/20 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66705A] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#1D2421] block">ROOFTOP SKY LOUNGE</span>
                    <span className="text-xs text-[#4B5563]">Starlit pergola terrace</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white/90 rounded-xl border border-[#66705A]/20 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66705A] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#1D2421] block">ORGANIC HERB GARDEN</span>
                    <span className="text-xs text-[#4B5563]">Rosemary, mint &amp; basil</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white/90 rounded-xl border border-[#66705A]/20 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66705A] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#1D2421] block">BUTTERFLY MEADOW</span>
                    <span className="text-xs text-[#4B5563]">Native flowers &amp; plants</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#66705A]/40 shadow-xl bg-[#1D2421] aspect-[16/11] group">
                <img
                  src="/images/private_garden_sanctuary.jpg"
                  alt="Antelia Groves 180 Sq.Ft Private Green Backyard Garden"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 brightness-[0.98]"
                />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#F7F6F2]/95 backdrop-blur-md border border-[#EBE7DF] rounded-xl text-[#1D2421] flex items-center justify-between shadow-md">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#B89553]">
                    ANTELIA GROVES — PRIVATE BACKYARD GARDEN
                  </span>
                  <span className="text-xs font-bold text-[#B89553]">180 SQ.FT</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
