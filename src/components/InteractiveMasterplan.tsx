'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Sliders,
  Check,
  Building,
  Trees,
  Compass,
  ArrowRight,
  Camera,
  Play,
  Pause,
} from 'lucide-react';

interface InteractiveMasterplanProps {
  onOpenBooking: () => void;
}

export default function InteractiveMasterplan({ onOpenBooking }: InteractiveMasterplanProps) {
  // Sector Filter for 3D CAD Engine & Sector Photo Gallery
  const [activeSector, setActiveSector] = useState<'ALL' | 'NORTH' | 'CLUBHOUSE' | 'SOUTH'>('ALL');
  const [sectorPhotoIndex, setSectorPhotoIndex] = useState<number>(0);
  const [isSectorPhotoAutoPlay, setIsSectorPhotoAutoPlay] = useState<boolean>(true);

  // Top 4 Metric Cards & Automatic Rotating Slideshow State (1.5s fast rotation)
  const [activeMetricIndex, setActiveMetricIndex] = useState<number>(0);
  const [isMetricAutoPlaying, setIsMetricAutoPlaying] = useState<boolean>(true);

  // Auto-rotate top 4 metric cards every 2 seconds
  useEffect(() => {
    if (!isMetricAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveMetricIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMetricAutoPlaying]);

  // Auto-rotate sector realistic HD photos every 2 seconds
  useEffect(() => {
    if (!isSectorPhotoAutoPlay) return;
    const timer = setInterval(() => {
      setSectorPhotoIndex((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, [isSectorPhotoAutoPlay, activeSector]);

  // Reset sector photo index when activeSector changes
  useEffect(() => {
    setSectorPhotoIndex(0);
  }, [activeSector]);

  // Top 4 Metric Cards Data
  const metricCards = [
    {
      id: 0,
      metric: '10 ACRES',
      label: 'COMMUNITY LAND AREA',
      title: '10-Acre Master Planned Gated Township',
      desc: 'Master planned gated community with 70% open space, tree-lined avenues, water features, and botanical gardens.',
      image: '/images/hero_main_aerial.png',
      badge: '10-ACRE AERIAL MASTERPLAN',
    },
    {
      id: 1,
      metric: '189 HOMES',
      label: 'INDEPENDENT VILLAS',
      title: '189 Independent Luxury Villas',
      desc: '3 & 4 BHK independent villas with private backyard gardens, high ceilings, glass balconies, and rooftop sky terraces.',
      image: '/images/hero_villa_facade.png',
      badge: 'INDEPENDENT VILLA ELEVATION',
    },
    {
      id: 2,
      metric: '15,000 SQ.FT',
      label: 'RESORT CLUBHOUSE',
      title: '5-Star Resort Clubhouse & Amenities',
      desc: 'Resort clubhouse featuring a swimming pool, indoor sports courts, gym, yoga deck, banquet hall, and guest suites.',
      image: '/images/hero_resort_clubhouse.png',
      badge: '5-STAR CLUBHOUSE & POOL',
    },
    {
      id: 3,
      metric: '40 & 30 FT',
      label: 'PAVED BOULEVARDS',
      title: '40-Ft & 30-Ft Paved Tree-Lined Roads',
      desc: 'Wide internal roads with underground utilities, solar streetlights, pedestrian walking paths, and green borders.',
      image: '/images/hero_community.png',
      badge: 'WIDE PAVED BOULEVARDS',
    },
  ];

  // Sector Data with Realistic HD Photos (4 Photos per Sector)
  const sectorData = {
    ALL: {
      title: 'Entire 10-Acre Masterplan',
      villas: '189 Independent Villas • Full Site Overview',
      desc: 'Explore the complete 10-acre gated villa community layout featuring split-level villas, central clubhouse, resort pool, and tree-lined boulevards.',
      highlights: [
        '70% Open Space & Botanical Landscape Corridors',
        '15,000+ Sq.Ft Resort Clubhouse with Blue Swimming Pool',
        '40-Ft & 30-Ft Wide Internal Paved Roads with Underground Cabling',
        '24/7 Multi-Tier Gated Security with Smart Entrance Plaza',
      ],
      photos: [
        { title: '10-Acre Masterplan Aerial View', image: '/images/hero_main_aerial.png', badge: '10-ACRE AERIAL' },
        { title: 'Wide Tree-Lined Boulevards', image: '/images/hero_community.png', badge: '40-FT PAVED ROADS' },
        { title: 'Botanical Landscape Corridors', image: '/images/journey_03_masterplan.jpg', badge: 'ECO CORRIDORS' },
        { title: 'Grand Entrance & Security Plaza', image: '/images/botanical_courtyard.jpg', badge: 'SECURE GATED ENTRY' },
      ],
    },
    NORTH: {
      title: 'North Grove Villa Enclave',
      villas: 'Villas 001 to 065 • North Sector',
      desc: 'North Facing premium independent villas situated next to the main entry boulevard with morning sunlight and private gardens.',
      highlights: [
        'Direct Access to Main Entry Gate & Security Plaza',
        'East & North Facing Vastu-Compliant Villa Plots',
        'Tree-Lined Walking Trails & Children Play Lawn',
        'Morning Sunlight across Private Lawn Backyards',
      ],
      photos: [
        { title: 'North Grove Split-Level Villa Elevation', image: '/images/hero_villa_facade.png', badge: 'NORTH VILLA FACADE' },
        { title: 'Private Garden Deck & Lawn', image: '/images/contemporary_garden_deck.jpg', badge: 'PRIVATE BACKYARD' },
        { title: 'North Tree-Lined Walking Trail', image: '/images/green_mindfulness.jpg', badge: 'GREEN BOULEVARD' },
        { title: 'Bright Morning Sun Entrance Plaza', image: '/images/daylight_estate.jpg', badge: 'DAYLIGHT ELEVATION' },
      ],
    },
    CLUBHOUSE: {
      title: 'Central Resort Clubhouse & Pool Zone',
      villas: '15,000 Sq.Ft Clubhouse • Central Zone',
      desc: 'The social heart of Antelia Groves featuring a crystal swimming pool, indoor badminton courts, gym, yoga deck, and banquet hall.',
      highlights: [
        'Crystal Blue Swimming Pool & Sun Deck Loungers',
        'Air-Conditioned Gym, Yoga Pavilion & Indoor Sports',
        'Banquet Hall & Guest Rooms for Community Events',
        'Lush Botanical Courtyard surrounding Clubhouse',
      ],
      photos: [
        { title: 'Resort Swimming Pool & Sun Deck', image: '/images/hero_resort_clubhouse.png', badge: 'BLUE RESORT POOL' },
        { title: 'Grand 5-Star Resort Clubhouse Exterior', image: '/images/clubhouse.jpg', badge: '15,000 SQ.FT CLUB' },
        { title: 'Air-Conditioned Sports & Gym Facility', image: '/images/amenity_sports.jpg', badge: 'INDOOR SPORTS & GYM' },
        { title: 'Community Banquet & Event Hall', image: '/images/banquet_hall.jpg', badge: 'BANQUET HALL' },
      ],
    },
    SOUTH: {
      title: 'South Grove Garden Enclave',
      villas: 'Villas 066 to 189 • South Sector',
      desc: 'Quiet residential villa enclave surrounded by native flowering trees, private backyard gardens, and peaceful zen walking paths.',
      highlights: [
        'Quiet & Peaceful Living Environment',
        'Spacious Private Garden Backyards for Every Villa',
        'Close Access to South Park & Zen Meditation Courtyard',
        'Rooftop Sky Terraces with Sunset Views',
      ],
      photos: [
        { title: 'South Grove Private Garden Sanctuary', image: '/images/private_garden_sanctuary.jpg', badge: 'PRIVATE GARDEN' },
        { title: 'Rooftop Sky Terrace & Pergola Dining', image: '/images/room_terrace.jpg', badge: 'SKY TERRACE' },
        { title: 'South Zen Meditation & Reflection Deck', image: '/images/amenity_zen.jpg', badge: 'ZEN COURTYARD' },
        { title: 'Open Living Room facing Garden Lawn', image: '/images/room_living.jpg', badge: 'LIVING ROOM LAWN' },
      ],
    },
  };

  const activeMetric = metricCards[activeMetricIndex];
  const currentSectorInfo = sectorData[activeSector];
  const activeSectorPhoto = currentSectorInfo.photos[sectorPhotoIndex] || currentSectorInfo.photos[0];

  return (
    <section id="masterplan" className="py-10 sm:py-8 bg-[#F8FAFC] text-[#0F172A] relative overflow-hidden border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#E2E8F0] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider mb-2">
              <span>02 / MASTERPLAN &amp; COMMUNITY LAYOUT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-tight uppercase">
              10-ACRE <span className="text-[#F97316]">3D MASTERPLAN</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#475569] max-w-lg font-normal leading-relaxed">
            Explore our 10-acre gated villa layout featuring 189 independent villas, 40-ft paved boulevards, central resort clubhouse, and 70% open green corridors.
          </p>
        </div>

        {/* 50/50 SPLIT: METRIC CARDS LIST ON LEFT + AUTOMATIC SHOWCASE PHOTO ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">

          {/* LEFT 5 COLUMNS: 4 KEY METRIC SELECTOR CARDS */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {metricCards.map((card) => {
              const isActive = card.id === activeMetricIndex;
              return (
                <div
                  key={card.id}
                  onClick={() => {
                    setActiveMetricIndex(card.id);
                    setIsMetricAutoPlaying(false);
                  }}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#F97316] text-white border-[#F97316] shadow-md transform translate-x-1'
                      : 'bg-white text-[#0F172A] border-[#E2E8F0] hover:border-[#F97316]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider block mb-1 ${isActive ? 'text-white/90' : 'text-[#F97316]'}`}>
                        {card.label}
                      </span>
                      <h3 className={`text-2xl font-extrabold tracking-tight ${isActive ? 'text-white' : 'text-[#0F172A]'}`}>
                        {card.metric}
                      </h3>
                      <p className={`text-xs font-medium mt-1 leading-snug ${isActive ? 'text-white/90' : 'text-[#475569]'}`}>
                        {card.title}
                      </p>
                    </div>

                    <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${isActive ? 'bg-white text-[#F97316]' : 'bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0]'}`}>
                      0{card.id + 1} / 04
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT 7 COLUMNS: AUTOMATIC ROTATING SHOWCASE PHOTO */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[420px] rounded-3xl overflow-hidden shadow-md border border-[#E2E8F0] bg-[#0F172A] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeMetric.image}
                src={activeMetric.image}
                alt={activeMetric.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1.00 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none z-10" />

            {/* Top Floating Badge */}
            <div className="relative z-20 p-5 flex items-center justify-between">
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E2E8F0] text-xs font-bold text-[#0F172A] shadow-xs">
                {activeMetric.badge}
              </div>

              <div className="bg-[#0F172A]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/20">
                2.0S ROTATION
              </div>
            </div>

            {/* Bottom Floating Title & Description */}
            <div className="relative z-20 p-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider block mb-1 bg-white px-2.5 py-0.5 rounded-full w-fit">
                  {activeMetric.label} • {activeMetric.metric}
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight mb-1 text-white uppercase">
                  {activeMetric.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/90 font-normal max-w-lg leading-relaxed">
                  {activeMetric.desc}
                </p>
              </div>

              {/* Step Indicator Dots */}
              <div className="flex items-center gap-2 shrink-0">
                {metricCards.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setActiveMetricIndex(m.id);
                      setIsMetricAutoPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      m.id === activeMetricIndex ? 'w-6 bg-[#F97316]' : 'w-2 bg-white/40 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* INTERACTIVE CAD MASTERPLAN VIEWPORT & SECTOR HIGHLIGHT FILTER */}
        <div className="space-y-8">
          
          {/* Sector Highlight Filter Pill Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#E2E8F0] shadow-sm">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-[#F97316]" />
              <span className="text-xs font-bold uppercase text-[#0F172A] tracking-wider">
                HIGHLIGHT SECTOR ZONE &amp; REAL PHOTOS:
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {(['ALL', 'NORTH', 'CLUBHOUSE', 'SOUTH'] as const).map((sector) => (
                <button
                  key={sector}
                  onClick={() => setActiveSector(sector)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                    activeSector === sector
                      ? 'bg-[#F97316] text-white shadow-xs'
                      : 'bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] hover:border-[#F97316]'
                  }`}
                >
                  {sector === 'ALL' ? 'ALL SECTORS' : `${sector} GROVE`}
                </button>
              ))}
            </div>
          </div>

          {/* Masterplan Engine Viewport + Sector Info & Realistic HD Photo Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* INTERACTIVE 2D MASTERPLAN BLUEPRINT VIEWPORT */}
            <div className="lg:col-span-7 relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden border border-[#E2E8F0] bg-[#0F172A] flex flex-col justify-between shadow-md group">
              {/* MASTERPLAN BACKGROUND IMAGE WITH SECTOR DYNAMIC OVERLAY */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeSector}
                  src={
                    activeSector === 'NORTH'
                      ? '/images/hero_villa_facade.png'
                      : activeSector === 'CLUBHOUSE'
                      ? '/images/hero_resort_clubhouse.png'
                      : activeSector === 'SOUTH'
                      ? '/images/private_garden_sanctuary.jpg'
                      : '/images/hero_main_aerial.png'
                  }
                  alt="Antelia Groves Masterplan View"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1.00 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none z-10" />

              {/* TOP MASTERPLAN OVERLAY HEADER */}
              <div className="relative z-20 p-5 flex items-center justify-between">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E2E8F0] text-xs font-bold text-[#0F172A] flex items-center gap-2 shadow-xs">
                  <Compass className="w-4 h-4 text-[#F97316] animate-spin-slow" />
                  <span className="uppercase tracking-wider">10-ACRE CAD MASTERPLAN • {activeSector} ZONE</span>
                </div>

                <div className="bg-[#0F172A]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                  <span>189 PLOTS</span>
                </div>
              </div>

              {/* DYNAMIC HOTSPOT PINS ON THE MASTERPLAN */}
              <div className="relative z-20 p-6 flex-1 flex items-center justify-center">
                <div className="relative w-full max-w-md h-64 border-2 border-dashed border-white/30 rounded-2xl p-4 flex flex-col justify-between bg-black/30 backdrop-blur-xs">
                  <div className="flex items-center justify-between text-[10px] font-bold text-white/80 uppercase tracking-widest">
                    <span>NORTH ENTRANCE GATE</span>
                    <span>40-FT MAIN BOULEVARD</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className={`p-3 rounded-xl border transition-all ${activeSector === 'NORTH' || activeSector === 'ALL' ? 'bg-[#F97316] text-white border-white/40 shadow-md' : 'bg-black/50 text-white/60 border-white/10'}`}>
                      <span className="text-[10px] font-bold block uppercase">NORTH GROVE</span>
                      <span className="text-xs font-extrabold">Villas 001–065</span>
                    </div>

                    <div className={`p-3 rounded-xl border transition-all ${activeSector === 'CLUBHOUSE' || activeSector === 'ALL' ? 'bg-[#F97316] text-white border-white/40 shadow-md' : 'bg-black/50 text-white/60 border-white/10'}`}>
                      <span className="text-[10px] font-bold block uppercase">CLUBHOUSE</span>
                      <span className="text-xs font-extrabold">15,000 Sq.Ft</span>
                    </div>

                    <div className={`p-3 rounded-xl border transition-all ${activeSector === 'SOUTH' || activeSector === 'ALL' ? 'bg-[#F97316] text-white border-white/40 shadow-md' : 'bg-black/50 text-white/60 border-white/10'}`}>
                      <span className="text-[10px] font-bold block uppercase">SOUTH GROVE</span>
                      <span className="text-xs font-extrabold">Villas 066–189</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-bold text-white/80 uppercase tracking-widest">
                    <span>70% OPEN GREEN CORRIDOR</span>
                    <span>SOUTH PARK & ZEN PATH</span>
                  </div>
                </div>
              </div>

              {/* BOTTOM CAPTION BAR */}
              <div className="relative z-20 p-4 bg-white/95 backdrop-blur-md border-t border-[#E2E8F0] flex items-center justify-between text-[#0F172A]">
                <div className="flex items-center gap-2">
                  <Trees className="w-4 h-4 text-[#F97316]" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {currentSectorInfo.title}
                  </span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F97316]">
                  70% BOTANICAL LANDSCAPE
                </span>
              </div>
            </div>

            {/* Sector Information & REALISTIC HD PHOTO SHOWCASE Sidebar Card */}
            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-[#E2E8F0] flex flex-col justify-between shadow-md space-y-5">
              
              {/* REALISTIC HD SECTOR PHOTO SHOWCASE CARD WITH ROTATION */}
              <div className="relative h-[220px] rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#0F172A] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSectorPhoto.image}
                    src={activeSectorPhoto.image}
                    alt={activeSectorPhoto.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1.00 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-10" />

                {/* Top Badge & Auto Play Controller */}
                <div className="relative z-20 p-3 flex items-center justify-between">
                  <div className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#E2E8F0] text-[10px] font-bold text-[#0F172A]">
                    {activeSectorPhoto.badge}
                  </div>

                  <button
                    onClick={() => setIsSectorPhotoAutoPlay(!isSectorPhotoAutoPlay)}
                    className="px-3 py-1 bg-[#0F172A]/85 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] font-bold tracking-wider uppercase flex items-center gap-1 hover:bg-[#F97316] transition-all cursor-pointer"
                  >
                    {isSectorPhotoAutoPlay ? <Pause className="w-3 h-3 text-[#F97316]" /> : <Play className="w-3 h-3 text-white" />}
                    <span>2.0S HD PHOTO</span>
                  </button>
                </div>

                {/* Bottom Caption & 4 Thumbnail Selector Buttons */}
                <div className="relative z-20 p-4 text-white flex items-end justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#F97316] uppercase tracking-wider block bg-white px-2 py-0.5 rounded-full w-fit mb-1">
                      {activeSector === 'ALL' ? 'ALL SECTORS' : `${activeSector} GROVE`} REAL PHOTO {sectorPhotoIndex + 1}/4
                    </span>
                    <h4 className="text-sm font-extrabold text-white leading-snug">
                      {activeSectorPhoto.title}
                    </h4>
                  </div>

                  {/* 4 Thumbnail Dots */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {currentSectorInfo.photos.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setSectorPhotoIndex(idx);
                          setIsSectorPhotoAutoPlay(false);
                        }}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          idx === sectorPhotoIndex ? 'bg-[#F97316] scale-125' : 'bg-white/50 hover:bg-white'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTOR DETAILS & FEATURES */}
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[11px] font-bold text-[#1D4ED8] uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentSectorInfo.villas}</span>
                </div>

                <h3 className="text-xl font-extrabold text-[#0F172A] mb-2 tracking-tight uppercase">
                  {currentSectorInfo.title}
                </h3>

                <p className="text-[#475569] text-xs font-normal leading-relaxed mb-4">
                  {currentSectorInfo.desc}
                </p>

                <div className="space-y-2 mb-4">
                  <span className="text-[11px] uppercase tracking-widest text-[#F97316] font-bold block">
                    Sector Key Features:
                  </span>
                  {currentSectorInfo.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#0F172A] font-semibold">
                      <Check className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#F97316] hover:bg-[#EA580C] transition-all shadow-sm cursor-pointer"
              >
                Schedule Site Tour &amp; Plot Selection
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

