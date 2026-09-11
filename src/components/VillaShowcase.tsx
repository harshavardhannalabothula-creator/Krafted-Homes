'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Trees, Play, Pause } from 'lucide-react';

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
      bua: '2,262 SQ.FT',
      carpet: '1,706 SQ.FT',
      backyard: '180 SQ.FT',
      orientation: 'East-Facing Main Entrance (100% Vastu Compliant)',
      sunlight: 'Bright Morning Sunlight into Living Room & Private Backyard',
    },
    West: {
      type: 'Type A West Facing',
      landArea: '1,200 SQ.FT',
      bua: '2,262 SQ.FT',
      carpet: '1,706 SQ.FT',
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

  // Non-stop automatic 2-second (2000ms) room transition cycle with auto-advance to next villa stage (facing & mood)
  useEffect(() => {
    if (!isPlayingWalkthrough) return;

    const timer = setInterval(() => {
      setActiveRoom((prev) => {
        if (prev >= walkthruRooms.length - 1) {
          // All 7 rooms covered for current villa configuration! Advance to next facing & mood!
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
    <section id="villas" className="py-20 sm:py-24 bg-[#F4F0E7] text-[#111722] relative overflow-hidden border-b border-[#D5D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#B18A4A] block mb-2">
            03 — VILLA ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111722] mb-3 tracking-tight leading-tight">
            INDEPENDENT <span className="text-[#B18A4A]">VILLA DESIGN</span>
          </h2>
          <p className="text-sm text-[#374151] font-normal leading-relaxed">
            Spacious 3 &amp; 4 BHK independent villas designed for privacy, natural sunlight, fresh air, and direct access to your private garden.
          </p>
        </div>

        {/* Orientation & Day/Night Mood Switcher Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 bg-[#EFECE6] p-4 rounded-2xl border border-[#D5D0C6]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#B18A4A]/15 border border-[#B18A4A]/30 flex items-center justify-center text-[#B18A4A]">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#B18A4A] block">
                TYPE A VILLAS (1,200 SQ.FT PLOT AREA)
              </span>
              <span className="text-xs font-semibold text-[#111722]">
                {currentSpecs.orientation}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* FACING SWITCHER */}
            <div className="flex items-center gap-1.5 bg-[#F4F0E7] p-1.5 rounded-xl border border-[#D5D0C6]">
              <span className="text-xs text-[#111722] px-2 font-bold">Facing:</span>
              <button
                onClick={() => setFacing('East')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  facing === 'East' ? 'bg-[#8C6527] text-white shadow-xs' : 'text-[#111722] hover:text-[#B18A4A]'
                }`}
              >
                EAST FACING
              </button>
              <button
                onClick={() => setFacing('West')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer ${
                  facing === 'West' ? 'bg-[#8C6527] text-white shadow-xs' : 'text-[#111722] hover:text-[#B18A4A]'
                }`}
              >
                WEST FACING
              </button>
            </div>

            {/* DAYLIGHT / NIGHT MOOD SWITCHER */}
            <div className="flex items-center gap-1.5 bg-[#F4F0E7] p-1.5 rounded-xl border border-[#D5D0C6]">
              <button
                onClick={() => setMode('DAY')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  mode === 'DAY' ? 'bg-[#8C6527] text-white shadow-xs' : 'text-[#111722] hover:text-[#B18A4A]'
                }`}
              >
                <span>☀️ DAYLIGHT</span>
              </button>
              <button
                onClick={() => setMode('NIGHT')}
                className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  mode === 'NIGHT' ? 'bg-[#111722] text-[#ffc107] border border-[#ffc107]/40 shadow-xs' : 'text-[#111722] hover:text-[#B18A4A]'
                }`}
              >
                <span>🌙 NIGHT MOOD</span>
              </button>
            </div>
          </div>
        </div>

        {/* REALISTIC 3D VILLA VIEWPORT SHOWCASE WITH DAY/NIGHT MOOD & 360° ROTATION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 h-[460px] sm:h-[540px] lg:h-[580px] w-full rounded-2xl overflow-hidden border border-[#D5D0C6] shadow-xl bg-[#F4F0E7] relative"
        >
          <Villa3DEngine facing={facing} mode={mode} />
        </motion.div>

        {/* 4 CLEAR SPECIFICATION CARDS WITH EASY-TO-READ WORDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          
          {/* CARD 1: LAND AREA */}
          <div className="bg-[#EFECE6] p-6 rounded-2xl border border-[#D5D0C6] shadow-xs hover:border-[#B18A4A] hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#D5D0C6]">
                <span className="text-xs uppercase tracking-wider text-[#B18A4A] font-bold">Total Plot Area</span>
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#D5D0C6] bg-[#8C6527] shrink-0">
                  <img src="/images/overview_10acres.png" alt="Land Area Plot" className="w-full h-full object-cover" />
                </div>
              </div>

              <span className="text-3xl font-extrabold text-[#111722] block mb-1 tracking-tight">{currentSpecs.landArea}</span>
              <span className="text-xs font-bold text-[#8C6527] block">Plot Dimensions</span>
            </div>
            <p className="text-xs text-[#374151] font-normal pt-3 mt-3 border-t border-[#D5D0C6] leading-relaxed">
              30&apos; x 40&apos; villa plot with private backyard garden.
            </p>
          </div>

          {/* CARD 2: BUILT-UP AREA */}
          <div className="bg-[#EFECE6] p-6 rounded-2xl border border-[#D5D0C6] shadow-xs hover:border-[#B18A4A] hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#D5D0C6]">
                <span className="text-xs uppercase tracking-wider text-[#B18A4A] font-bold">Total House Area</span>
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#D5D0C6] bg-[#8C6527] shrink-0">
                  <img src="/images/overview_34bhk.png" alt="Built Up Area Villa" className="w-full h-full object-cover" />
                </div>
              </div>

              <span className="text-3xl font-extrabold text-[#111722] block mb-1 tracking-tight">{currentSpecs.bua}</span>
              <span className="text-xs font-bold text-[#8C6527] block">G + 2 Floors</span>
            </div>
            <p className="text-xs text-[#374151] font-normal pt-3 mt-3 border-t border-[#D5D0C6] leading-relaxed">
              3 floors with high ceilings and spacious rooms.
            </p>
          </div>

          {/* CARD 3: CARPET AREA */}
          <div className="bg-[#EFECE6] p-6 rounded-2xl border border-[#D5D0C6] shadow-xs hover:border-[#B18A4A] hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#D5D0C6]">
                <span className="text-xs uppercase tracking-wider text-[#B18A4A] font-bold">Living Space</span>
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#D5D0C6] bg-[#8C6527] shrink-0">
                  <img src="/images/room_living.jpg" alt="Carpet Area Living" className="w-full h-full object-cover" />
                </div>
              </div>

              <span className="text-3xl font-extrabold text-[#111722] block mb-1 tracking-tight">{currentSpecs.carpet}</span>
              <span className="text-xs font-bold text-[#8C6527] block">Actual Room Area</span>
            </div>
            <p className="text-xs text-[#374151] font-normal pt-3 mt-3 border-t border-[#D5D0C6] leading-relaxed">
              Spacious bedrooms, living room, dining, and kitchen.
            </p>
          </div>

          {/* CARD 4: PRIVATE BACKYARD */}
          <div className="bg-[#EFECE6] p-6 rounded-2xl border border-[#D5D0C6] shadow-xs hover:border-[#B18A4A] hover:shadow-md transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#D5D0C6]">
                <span className="text-xs uppercase tracking-wider text-[#B18A4A] font-bold">Private Backyard</span>
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#D5D0C6] bg-[#8C6527] shrink-0">
                  <img src="/images/contemporary_garden_deck.jpg" alt="Private Backyard Garden" className="w-full h-full object-cover" />
                </div>
              </div>

              <span className="text-3xl font-extrabold text-[#111722] block mb-1 tracking-tight">{currentSpecs.backyard}</span>
              <span className="text-xs font-bold text-[#8C6527] block">Garden Deck</span>
            </div>
            <p className="text-xs text-[#374151] font-normal pt-3 mt-3 border-t border-[#D5D0C6] leading-relaxed">
              Direct glass sliding door access from living room.
            </p>
          </div>

        </div>

        {/* VILLA ROOM TOUR SHOWCASE */}
        <div className="mb-16 bg-[#EFECE6] p-8 sm:p-12 rounded-2xl border border-[#D5D0C6]">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-[#D5D0C6] pb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs uppercase tracking-wider font-bold text-[#B18A4A] block">
                  08 — VILLA ROOM TOUR
                </span>
                <button
                  onClick={() => setIsPlayingWalkthrough(!isPlayingWalkthrough)}
                  className="px-3.5 py-1 rounded-full bg-[#8C6527] text-white text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 hover:bg-[#B18A4A] transition-colors cursor-pointer"
                >
                  {isPlayingWalkthrough ? (
                    <>
                      <Pause className="w-3 h-3 text-white" />
                      <span>1.5s ROOM SLIDESHOW: ON</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-white" />
                      <span>PAUSED</span>
                    </>
                  )}
                </button>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111722] tracking-tight">
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
                      ? 'bg-[#8C6527] text-white shadow-xs scale-105'
                      : 'bg-[#F4F0E7] text-[#111722] border border-[#D5D0C6] hover:border-[#B18A4A]'
                  }`}
                >
                  {rm.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 relative h-[400px] rounded-2xl overflow-hidden border border-[#D5D0C6] bg-[#111722] shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeRoom}
                  src={walkthruRooms[activeRoom].image}
                  alt={walkthruRooms[activeRoom].name}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover object-center brightness-100 contrast-[1.02]"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-4 left-4 bg-[#F4F0E7]/95 backdrop-blur-md px-4 py-2 border border-[#D5D0C6] rounded-xl shadow-md text-[#111722]">
                <span className="text-xs uppercase text-[#8C6527] font-bold">
                  ROOM {activeRoom + 1} OF {walkthruRooms.length}: {walkthruRooms[activeRoom].name}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between h-[400px]">
              <div>
                <span className="text-xs font-bold text-[#B18A4A] uppercase block mb-2">
                  ROOM {walkthruRooms[activeRoom].id + 1}
                </span>
                <h4 className="text-3xl font-extrabold text-[#111722] mb-3 tracking-tight">
                  {walkthruRooms[activeRoom].name}
                </h4>
                <p className="text-sm font-normal text-[#374151] leading-relaxed mb-6">
                  {walkthruRooms[activeRoom].desc}
                </p>
                <div className="p-4 bg-[#F4F0E7] border border-[#D5D0C6] rounded-xl text-xs text-[#111722]">
                  <span className="font-bold text-[#B18A4A] block mb-1">Villa Highlights:</span>
                  <span>{currentSpecs.orientation} — {currentSpecs.sunlight}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveRoom((prev) => (prev > 0 ? prev - 1 : walkthruRooms.length - 1))}
                  className="flex-1 py-3.5 text-xs border border-[#D5D0C6] text-[#111722] uppercase font-bold rounded-xl hover:border-[#111722] bg-[#F4F0E7] cursor-pointer"
                >
                  Previous Room
                </button>
                <button
                  onClick={() => setActiveRoom((prev) => (prev < walkthruRooms.length - 1 ? prev + 1 : 0))}
                  className="flex-1 py-3.5 text-xs bg-[#8C6527] text-white uppercase font-bold rounded-xl hover:bg-[#111722] transition-all shadow-xs cursor-pointer"
                >
                  Next Room
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PRIVATE GARDENS */}
        <div id="private-gardens" className="bg-[#66705A]/10 p-8 sm:p-12 rounded-2xl border border-[#66705A]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-5 text-left">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#66705A]/15 border border-[#66705A]/30 text-xs font-bold text-[#4A543E] uppercase tracking-wider mb-3">
                  <Trees className="w-3.5 h-3.5 text-[#66705A]" />
                  <span>10 — PRIVATE GARDENS</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-extrabold text-[#111722] mb-3 leading-tight tracking-tight">
                  FRESH AIR &amp; PRIVATE GARDEN.
                </h3>

                <p className="text-sm text-[#374151] font-normal leading-relaxed mb-6">
                  Step directly from your living room into an 180 sq.ft private green backyard deck. Enjoy morning tea under palm shade, organic herb gardens, and fresh greenery.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#66705A]/20">
                <div className="p-3.5 bg-white/90 rounded-xl border border-[#66705A]/20 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66705A] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#111722] block">180 SQ.FT BACKYARD</span>
                    <span className="text-xs text-[#4B5563]">Wooden garden sit-out</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white/90 rounded-xl border border-[#66705A]/20 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66705A] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#111722] block">ROOFTOP SKY LOUNGE</span>
                    <span className="text-xs text-[#4B5563]">Starlit pergola terrace</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white/90 rounded-xl border border-[#66705A]/20 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66705A] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#111722] block">ORGANIC HERB GARDEN</span>
                    <span className="text-xs text-[#4B5563]">Rosemary, mint &amp; basil</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white/90 rounded-xl border border-[#66705A]/20 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#66705A] shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-[#111722] block">BUTTERFLY MEADOW</span>
                    <span className="text-xs text-[#4B5563]">Native flowers &amp; plants</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#66705A]/40 shadow-xl bg-[#8C6527] aspect-[16/11] group">
                <img
                  src="/images/private_garden_sanctuary.jpg"
                  alt="Antelia Groves 180 Sq.Ft Private Green Backyard Garden"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 brightness-[0.98]"
                />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-[#F4F0E7]/95 backdrop-blur-md border border-[#D5D0C6] rounded-xl text-[#111722] flex items-center justify-between shadow-md">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C6527]">
                    ANTELIA GROVES — PRIVATE BACKYARD GARDEN
                  </span>
                  <span className="text-xs font-bold text-[#8C6527]">180 SQ.FT</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
