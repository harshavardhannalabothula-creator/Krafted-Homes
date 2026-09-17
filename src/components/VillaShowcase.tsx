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
    <section id="villas" className="py-16 sm:py-20 lg:py-24 bg-[#F8F7F2] text-[#202522] relative overflow-hidden border-b border-[#E4E5DF]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* 2. SOPHISTICATED 2-COLUMN EDITORIAL COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          
          {/* LEFT COLUMN: EDITORIAL TYPOGRAPHY, SPECIFICATIONS & CTAS */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#24483B]">
                  ANTELIA GROVES
                </span>
                <span className="text-xs text-[#8E958F] font-light">•</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#202522]">
                  02 / VILLA ELEVATION
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#202522] tracking-tight uppercase leading-[1.05] mb-3 text-left">
                INDEPENDENT VILLAS
              </h2>

              <h3 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-[#24483B] uppercase mb-4 text-left">
                SPLIT-LEVEL ARCHITECTURE & PRIVATE GARDEN LAWNS
              </h3>

              <p className="text-xs sm:text-sm text-[#3A423E] font-normal leading-relaxed max-w-lg text-left">
                Spacious independent 3 & 4 BHK villas designed with private 180 sq.ft lawn backyards, high ceilings, large glass windows, and open rooftop sky terraces. Created for architectural clarity, fresh air, and quiet family sanctuary living in Sarjapur-Whitefield Villa Corridor.
              </p>
            </div>

            {/* ORIENTATION TOGGLES */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="inline-flex items-center gap-1 bg-[#FFFFFF] p-1 rounded-md border border-[#E4E5DF]">
                <button
                  onClick={() => setFacing('East')}
                  className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    facing === 'East' ? 'bg-[#24483B] text-white' : 'text-[#202522] hover:text-[#24483B]'
                  }`}
                >
                  EAST FACING
                </button>
                <button
                  onClick={() => setFacing('West')}
                  className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    facing === 'West' ? 'bg-[#24483B] text-white' : 'text-[#202522] hover:text-[#24483B]'
                  }`}
                >
                  WEST FACING
                </button>
              </div>

              <div className="inline-flex items-center gap-1 bg-[#FFFFFF] p-1 rounded-md border border-[#E4E5DF]">
                <button
                  onClick={() => setMode('DAY')}
                  className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    mode === 'DAY' ? 'bg-[#202522] text-white' : 'text-[#202522] hover:text-[#24483B]'
                  }`}
                >
                  ☀️ DAY
                </button>
                <button
                  onClick={() => setMode('NIGHT')}
                  className={`px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                    mode === 'NIGHT' ? 'bg-[#202522] text-[#ffc107]' : 'text-[#202522] hover:text-[#24483B]'
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
                className="px-7 py-3.5 bg-[#24483B] hover:bg-[#1A342A] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-2xs rounded-md cursor-pointer"
              >
                <span>EXPLORE THE VILLAS</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="#masterplan"
                className="text-xs font-semibold uppercase tracking-wider text-[#202522] hover:text-[#24483B] transition-colors text-center sm:text-left py-1 cursor-pointer underline underline-offset-4"
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
            className="lg:col-span-6 relative flex flex-col justify-between min-h-[460px] sm:min-h-[520px] bg-[#F8F7F2] border border-[#E4E5DF] rounded-xl p-6 sm:p-8 shadow-2xs"
          >
            {/* TOP-RIGHT ARCHITECTURAL LABEL */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E4E5DF]">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#202522]">
                3D VILLA PREVIEW
              </span>

              <div className="flex items-center gap-2 text-[#24483B]">
                <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                <span className="text-[10px] font-bold uppercase tracking-[0.15em]">360° VIEW</span>
              </div>
            </div>

            {/* FLOATING 3D VILLA CANVAS (75-80% HEIGHT) */}
            <div className="relative w-full h-[280px] sm:h-[340px] my-3 flex items-center justify-center">
              <Villa3DEngine facing={facing} mode={mode} />
            </div>

            {/* BOTTOM ARCHITECTURAL INFORMATION & SPECIFICATION BLOCK */}
            <div className="pt-4 border-t border-[#E4E5DF] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#202522] block">
                    VILLA 01
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#24483B] block">
                    CONTEMPORARY RESIDENCE
                  </span>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#6B7280]">
                    {facing.toUpperCase()} FACING
                  </span>
                </div>
              </div>

              {/* MINIMAL SPECIFICATION BLOCK WITH THIN 1PX DIVIDERS */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#E4E5DF] text-left">
                {/* SPEC 1 */}
                <div className="pr-2 border-r border-[#E4E5DF]">
                  <span className="text-lg sm:text-2xl font-serif font-bold text-[#202522] block leading-none mb-1">
                    2,400+
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#24483B] block">
                    SQ.FT BUILT AREA
                  </span>
                </div>

                {/* SPEC 2 */}
                <div className="px-2 border-r border-[#E4E5DF]">
                  <span className="text-lg sm:text-2xl font-serif font-bold text-[#202522] block leading-none mb-1">
                    180
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#24483B] block">
                    SQ.FT PRIVATE LAWN
                  </span>
                </div>

                {/* SPEC 3 */}
                <div className="pl-2">
                  <span className="text-lg sm:text-2xl font-serif font-bold text-[#202522] block leading-none mb-1">
                    G+1
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#24483B] block">
                    FLOOR CONFIGURATION
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

        {/* 3. BOTTOM FULL-WIDTH EXISTING VILLA PHOTOGRAPH */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[360px] sm:h-[480px] lg:h-[560px] rounded-xl overflow-hidden border border-[#E4E5DF] shadow-xs group bg-[#202522] mb-16"
        >
          <img
            src="/images/hero_villa_facade.png"
            alt="Antelia Groves Luxury Villa Elevation Real World Result"
            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-1000 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#24483B] block mb-1 bg-[#F8F7F2] px-2.5 py-1 rounded-md text-[#24483B] w-fit">
                REAL-WORLD ARCHITECTURAL EXECUTED RESULT
              </span>
              <h4 className="text-xl sm:text-3xl font-serif font-normal text-white uppercase tracking-tight mt-2">
                ANTELIA GROVES VILLA ELEVATION
              </h4>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-md bg-[#24483B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1A342A] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>BOOK PRIVATE VILLA TOUR</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* 4. VILLA ROOM TOUR SLIDESHOW & HIGHLIGHTS */}
        <div className="mb-16 bg-[#FFFFFF] p-8 sm:p-12 rounded-xl border border-[#E4E5DF]">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-[#E4E5DF] pb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs uppercase tracking-wider font-bold text-[#24483B] block">
                  08 — VILLA ROOM TOUR
                </span>
                <button
                  onClick={() => setIsPlayingWalkthrough(!isPlayingWalkthrough)}
                  className="px-3 py-1 rounded-md bg-[#24483B] text-white text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1.5 hover:bg-[#1A342A] transition-colors cursor-pointer"
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
              <h3 className="text-2xl sm:text-4xl font-serif font-normal text-[#202522] tracking-tight uppercase">
                Explore Villa Rooms
              </h3>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {walkthruRooms.map((rm, idx) => (
                <button
                  key={rm.name}
                  onClick={() => setActiveRoom(idx)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold uppercase transition-all whitespace-nowrap cursor-pointer ${
                    activeRoom === idx
                      ? 'bg-[#24483B] text-white shadow-2xs'
                      : 'bg-[#F8F7F2] text-[#202522] border border-[#E4E5DF] hover:border-[#24483B]'
                  }`}
                >
                  {rm.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 relative h-[360px] sm:h-[400px] rounded-xl overflow-hidden border border-[#E4E5DF] bg-[#202522]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeRoom}
                  src={walkthruRooms[activeRoom].image}
                  alt={walkthruRooms[activeRoom].name}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover object-center"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-4 left-4 bg-[#F8F7F2]/95 backdrop-blur-xs px-4 py-2 border border-[#E4E5DF] rounded-md text-[#202522]">
                <span className="text-xs uppercase text-[#24483B] font-bold">
                  ROOM {activeRoom + 1} OF {walkthruRooms.length}: {walkthruRooms[activeRoom].name}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between h-[360px] sm:h-[400px]">
              <div>
                <span className="text-xs font-bold text-[#24483B] uppercase block mb-2">
                  ROOM {walkthruRooms[activeRoom].id + 1}
                </span>
                <h4 className="text-2xl sm:text-3xl font-serif font-normal text-[#202522] mb-3 tracking-tight">
                  {walkthruRooms[activeRoom].name}
                </h4>
                <p className="text-xs sm:text-sm font-normal text-[#3A423E] leading-relaxed mb-6">
                  {walkthruRooms[activeRoom].desc}
                </p>
                <div className="p-4 bg-[#F8F7F2] border border-[#E4E5DF] rounded-md text-xs text-[#202522]">
                  <span className="font-bold text-[#24483B] block mb-1">Villa Highlights:</span>
                  <span>{currentSpecs.orientation} — {currentSpecs.sunlight}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveRoom((prev) => (prev > 0 ? prev - 1 : walkthruRooms.length - 1))}
                  className="flex-1 py-3 text-xs border border-[#E4E5DF] text-[#202522] uppercase font-semibold rounded-md hover:border-[#202522] bg-[#F8F7F2] cursor-pointer"
                >
                  Previous Room
                </button>
                <button
                  onClick={() => setActiveRoom((prev) => (prev < walkthruRooms.length - 1 ? prev + 1 : 0))}
                  className="flex-1 py-3 text-xs bg-[#24483B] text-white uppercase font-semibold rounded-md hover:bg-[#1A342A] transition-all cursor-pointer"
                >
                  Next Room
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
