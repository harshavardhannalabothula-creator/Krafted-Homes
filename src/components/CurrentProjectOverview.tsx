'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CurrentProjectOverviewProps {
  onOpenBooking: () => void;
}

export default function CurrentProjectOverview({ onOpenBooking }: CurrentProjectOverviewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const features = [
    {
      id: 0,
      eyebrow: 'TOTAL LAND AREA',
      value: '10 ACRES',
      subtext: 'Masterplanned Gated Estate',
      badge: '01 / 10-ACRE ESTATE MASTERPLAN',
      title: '10-Acre Masterplanned Contour Land',
      desc: 'Photorealistic aerial masterplan overview of 10 acres of pristine terrain in Sarjapur, Bengaluru, surrounded by lush natural greenery, private boulevards, and elevated contours.',
      image: '/images/hero_main_aerial.png',
      caption: 'AERIAL MASTERPLAN VIEW — 10-ACRE GATED SANCTUARY',
    },
    {
      id: 1,
      eyebrow: 'LUXURY VILLAS',
      value: '189 UNITS',
      subtext: '3 & 4 BHK Split-Level',
      badge: '02 / ARCHITECTURAL ELEVATION',
      title: '189 Independent Split-Level Residences',
      desc: 'Bespoke split-level modern villas featuring floor-to-ceiling glass paneling, 180 sq.ft private garden backyards, and multi-level terrace sky lounges.',
      image: '/images/villa_exterior.jpg',
      caption: 'ARCHITECTURAL ELEVATION — SPLIT-LEVEL INDEPENDENT VILLAS',
    },
    {
      id: 2,
      eyebrow: 'RESORT CLUBHOUSE',
      value: '15,000 SQ.FT',
      subtext: '5-Star Lifestyle Wing',
      badge: '03 / SIGNATURE RESORT CLUBHOUSE',
      title: '15,000+ Sq.Ft Lifestyle & Wellness Anchor',
      desc: 'Exclusive resort-style clubhouse featuring a half-olympic lap pool, indoor badminton & squash arenas, private dining suites, and tranquil zen yoga decks.',
      image: '/images/clubhouse.jpg',
      caption: 'RESORT CLUBHOUSE & LAP POOL — 15,000 SQ.FT LIFESTYLE WING',
    },
    {
      id: 3,
      eyebrow: 'OPEN GREENERY',
      value: '70% LAND',
      subtext: 'Herbal Groves & Water Courts',
      badge: '04 / BOTANICAL GREEN LANDSCAPES',
      title: '70% Bio-Green Corridors & Water Courts',
      desc: 'Expansive botanical landscape with tree-lined walking paths, organic herb sanctuaries, native butterfly corridors, and peaceful outdoor water courts.',
      image: '/images/luxury_villa_garden.jpg',
      caption: 'BOTANICAL GARDENS & NATURE TRAILS — 70% OPEN GREENERY',
    },
  ];

  // Auto-play cycle through the 4 features every 2 seconds
  useEffect(() => {
    if (isInteracting) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isInteracting, features.length]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setIsInteracting(true);
    // Resume auto-play after 8 seconds of user inactivity
    setTimeout(() => {
      setIsInteracting(false);
    }, 8000);
  };

  const activeFeature = features[activeIndex];

  return (
    <section id="current-project" className="py-10 sm:py-8 bg-white text-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EDITORIAL SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-8 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-medium text-[#F97316]">
                03 — Masterplan & Current Project
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
              <span className="text-sm font-medium text-slate-500">
                Flagship Estate
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#0F172A] leading-tight tracking-tight">
              Antelia <span className="text-[#F97316]">Groves</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-[#1A212D] text-xs sm:text-sm font-manrope font-semibold leading-relaxed mb-3">
              A landmark 10-acre residential villa community by Krafted Homes, blending contemporary luxury architecture with organic living landscapes.
            </p>
            <div className="flex items-center gap-2 text-xs font-manrope font-semibold text-[#F97316] uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#F97316]" />
              <span>Whitefield-Sarjapur Villa Corridor, Bengaluru</span>
            </div>
          </div>
        </div>

        {/* SELECT FEATURE TO EXPLORE — 2 COLUMN RESPONSIVE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* LEFT COLUMN: 2x2 FEATURE CARDS GRID & INFO PANEL */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-manrope font-semibold uppercase tracking-[0.25em] text-[#F97316]">
                SELECT FEATURE TO EXPLORE
              </span>
              <span className="text-[10px] font-mono text-[#1A212D] font-bold">
                0{activeIndex + 1} / 04
              </span>
            </div>

            {/* 2 x 2 FEATURE CARDS GRID WITH DISTINCT THUMBNAILS */}
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              {features.map((feat) => {
                const isActive = feat.id === activeIndex;
                return (
                  <button
                    key={feat.eyebrow}
                    onClick={() => handleManualSelect(feat.id)}
                    className={`p-4 rounded-2xl text-left transition-all duration-500 flex flex-col justify-between relative overflow-hidden group ${
                      isActive
                        ? 'bg-[#0F172A] text-white shadow-2xl scale-[1.02]'
                        : 'bg-white text-[#0F172A] shadow-md hover:shadow-xl hover:bg-slate-50'
                    }`}
                  >
                    {/* Subtle Gold Accent Bar on Active */}
                    {isActive && (
                      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#F97316]" />
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[9px] font-manrope font-semibold uppercase tracking-[0.18em] block ${
                        isActive ? 'text-[#F97316]' : 'text-[#8C6527]'
                      }`}>
                        {feat.eyebrow}
                      </span>

                      {/* DISTINCT THUMBNAIL PREVIEW */}
                      <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-[#0F172A] shadow-sm">
                        <img
                          src={feat.image}
                          alt={feat.eyebrow}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div>
                      <span className={`text-lg sm:text-xl font-serif font-bold block mb-0.5 ${
                        isActive ? 'text-white' : 'text-[#0F172A]'
                      }`}>
                        {feat.value}
                      </span>
                      <span className={`text-[9.5px] font-manrope block font-semibold truncate ${
                        isActive ? 'text-white/80' : 'text-[#1A212D]'
                      }`}>
                        {feat.subtext}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* INFORMATION PANEL (UPDATES SMOOTHLY) */}
            <div className="p-6 bg-white rounded-3xl shadow-xl min-h-[200px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
                    <span className="text-[10px] font-manrope font-semibold uppercase tracking-widest text-[#F97316]">
                      {activeFeature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#0F172A] mb-2">
                    {activeFeature.title}
                  </h3>

                  <p className="text-xs font-manrope font-semibold text-[#1A212D] leading-relaxed mb-4">
                    {activeFeature.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-[#F97316] text-white text-xs font-manrope font-bold uppercase tracking-[0.2em] hover:bg-[#EA580C] transition-colors flex items-center justify-center gap-2 shadow-md group rounded-full"
              >
                <span>BOOK A SITE VISIT</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: LARGE 16:9 TOPIC-SPECIFIC REALISTIC IMAGE WITH FADE + SCALE */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[16/10] bg-[#0F172A] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeFeature.image}
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1.00 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-center brightness-[0.98] contrast-[1.02]"
                />
              </AnimatePresence>

              {/* TOPIC CAPTION STRIP AT BOTTOM */}
              <div className="absolute bottom-5 left-5 right-5 p-5 bg-white/95 backdrop-blur-md rounded-2xl text-[#0F172A] flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-[9.5px] font-manrope font-extrabold uppercase tracking-[0.25em] text-[#8C6527] block mb-1">
                    {activeFeature.caption}
                  </span>
                  <p className="text-xs sm:text-sm font-serif font-extrabold text-[#0F172A]">
                    {activeFeature.title}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {features.map((f) => (
                    <span
                      key={f.id}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        f.id === activeIndex ? 'w-5 bg-[#F97316]' : 'w-1.5 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
