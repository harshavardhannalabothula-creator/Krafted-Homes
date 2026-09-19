'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Users, BookOpen, Coffee, Sun, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface AmenityStoryProps {
  onOpenBooking?: () => void;
}

export default function AmenityStory({ onOpenBooking }: AmenityStoryProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const amenityCategories = [
    {
      id: 0,
      code: 'MOVE',
      title: 'Sports & Fitness',
      icon: Dumbbell,
      badge: 'MOVE • SPORTS & FITNESS',
      headingTitle: 'Sports & Fitness Wing',
      tagline: 'HIGH-PERFORMANCE MOVEMENT SPACES',
      desc: 'A thoughtfully designed fitness and recreation wing with spaces for active living, indoor sports, and everyday wellness.',
      features: [
        'Indoor sports & fitness zones',
        'Dedicated movement & training spaces',
        'Premium materials & natural ventilation',
      ],
      image: '/images/sports_wing.jpg',
    },
    {
      id: 1,
      code: 'GATHER',
      title: 'Social Spaces',
      icon: Users,
      badge: 'GATHER • SOCIAL SPACES',
      headingTitle: 'Party & Social Pavilion',
      tagline: 'CELEBRATIONS & COMMUNITY BANQUETS',
      desc: 'A grand social pavilion connected to garden patios, designed for community gatherings, private celebrations, and evening events.',
      features: [
        'Air-conditioned banquet & event lounge',
        'Boutique hotel-style guest suites',
        'Garden patio & celebration staging area',
      ],
      image: '/images/banquet_hall.jpg',
    },
    {
      id: 2,
      code: 'UNWIND',
      title: 'Reading & Relaxation',
      icon: BookOpen,
      badge: 'UNWIND • READING & RELAXATION',
      headingTitle: 'Reading & Hobby Nooks',
      tagline: 'ACOUSTIC SOLITUDE & CREATIVE LOUNGES',
      desc: 'Acoustically insulated quiet reading nooks and creative studio lounges designed for solitude, reading, and artistic pursuits.',
      features: [
        'Quiet acoustic library & reading lounges',
        'Creative studio & painting workspace',
        'Private conversation & co-working nooks',
      ],
      image: '/images/library_nook.jpg',
    },
    {
      id: 3,
      code: 'CONNECT',
      title: 'Café & Community',
      icon: Coffee,
      badge: 'CONNECT • CAFÉ & COMMUNITY',
      headingTitle: 'Café & Al-Fresco Terrace',
      tagline: 'POOLSIDE BBQ PATIO & CULINARY COUNTERS',
      desc: 'Al-fresco terrace overlooking the water courts, featuring live culinary counters, coffee lounges, and starlit fire pit seating.',
      features: [
        'Poolside BBQ patio & fire pit lounge',
        'Shaded pergola al-fresco seating',
        'Live beverage counter & sunset deck',
      ],
      image: '/images/cafe_terrace.jpg',
    },
    {
      id: 4,
      code: 'PLAY',
      title: 'Kids & Family',
      icon: Sun,
      badge: 'PLAY • KIDS & FAMILY',
      headingTitle: 'Kids & Family Zone',
      tagline: 'INDOOR GAMES ROOM & ADVENTURE PARK',
      desc: 'Indoor recreation lounge with table tennis and billiards, paired with rubber-paved adventure play parks for children.',
      features: [
        'Indoor games lounge with table tennis',
        'Rubberized safety-padded kids play park',
        'Shaded seating area for parents',
      ],
      image: '/images/kids_play.jpg',
    },
    {
      id: 5,
      code: 'RESET',
      title: 'Wellness & Meditation',
      icon: Sparkles,
      badge: 'RESET • WELLNESS & MEDITATION',
      headingTitle: 'Wellness & Meditation Deck',
      tagline: 'ZEN YOGA DECK & REFLECTION PONDS',
      desc: 'Temperature-controlled lap swimming pool bordered by soothing water courts, zen stone meditation decks, and palm gardens.',
      features: [
        'Resort lap swimming pool & sun deck',
        'Zen meditation deck under palm shade',
        'Cascading water courts & lotus ponds',
      ],
      image: '/images/zen_yoga.jpg',
    },
  ];

  // 2-SECOND AUTO ROTATION TIMER
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveCategoryIndex((prev) => (prev + 1) % amenityCategories.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isHovered, amenityCategories.length]);

  const active = amenityCategories[activeCategoryIndex];

  return (
    <section id="amenities" className="py-6 sm:py-8 bg-white text-[#0F172A] relative overflow-hidden border-t border-slate-100">
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4"
      >

        {/* COMPACT SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[#F97316] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest bg-orange-50 px-3 py-0.5 rounded-full border border-orange-200/80 mb-1.5 inline-block">
            04 — COMMUNITY &amp; LIFESTYLE
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] mb-1 tracking-tight">
            The Social <span className="text-[#F97316]">Heart</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-semibold leading-snug">
            More than amenities — a thoughtfully designed community where movement, connection, celebration and quiet moments come together.
          </p>
        </div>

        {/* 6 AMENITY CATEGORY NAVIGATION CARDS (AUTO-SLIDING EVERY 2 SECONDS) */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {amenityCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            const isSelected = activeCategoryIndex === idx;
            return (
              <button
                key={cat.code}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`relative p-2.5 sm:p-3 rounded-xl border transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group overflow-hidden ${
                  isSelected
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-md scale-[1.02]'
                    : 'bg-[#F8FAFC] text-[#0F172A] border-slate-200/80 hover:border-orange-200 hover:bg-slate-100 shadow-2xs'
                }`}
              >
                {/* 2-second animated progress line on active tab */}
                {isSelected && (
                  <motion.div 
                    key={`bar-${idx}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, ease: 'linear' }}
                    className="absolute top-0 left-0 right-0 h-0.5 bg-[#F97316] origin-left z-20"
                  />
                )}

                <div className={`w-7 h-7 rounded-full flex items-center justify-center mb-1.5 transition-transform duration-300 group-hover:scale-110 ${
                  isSelected ? 'bg-[#F97316] text-white' : 'bg-orange-50 text-[#F97316]'
                }`}>
                  <CatIcon className="w-3.5 h-3.5" />
                </div>
                
                <span className={`text-[10px] font-extrabold uppercase tracking-wider block ${
                  isSelected ? 'text-[#F97316]' : 'text-[#0F172A]'
                }`}>
                  {cat.code}
                </span>

                <span className={`text-[10px] font-bold block leading-tight truncate w-full ${
                  isSelected ? 'text-slate-200' : 'text-slate-500'
                }`}>
                  {cat.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* MAIN TWO-COLUMN CONTENT LAYOUT WITH MINIMAL FREE SPACE */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-md p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

          {/* LEFT 7-COLS: MAIN ARCHITECTURAL VISUAL PANEL */}
          <div className="lg:col-span-7 relative rounded-xl overflow-hidden h-[260px] sm:h-[320px] lg:h-[340px] bg-[#0F172A] shadow-inner group flex flex-col justify-between p-3.5">
            
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.headingTitle}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1.00 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* TOP FLOATING BADGES */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-slate-950/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-extrabold px-3 py-0.5 rounded-full border border-white/20">
                ANTELIA GROVES / COMMUNITY EXPERIENCE
              </span>

              <span className="bg-[#F97316] text-white text-[9px] sm:text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
                0{active.id + 1} / 06 {active.code}
              </span>
            </div>

            {/* BOTTOM FLOATING TITLE BADGE */}
            <div className="relative z-10 bg-slate-950/85 backdrop-blur-md p-3 rounded-xl border border-white/15 text-white mt-auto max-w-xs sm:max-w-sm">
              <span className="text-[9px] font-extrabold text-[#F97316] uppercase tracking-wider block mb-0.5">
                ✦ {active.badge}
              </span>
              <h4 className="text-xs sm:text-sm font-extrabold leading-snug">
                {active.headingTitle}
              </h4>
            </div>
          </div>

          {/* RIGHT 5-COLS: AMENITY INFORMATION PANEL */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] font-extrabold text-[#F97316] uppercase tracking-widest bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-100">
                  {active.code} • {active.title}
                </span>
                <span className="text-[10px] font-extrabold text-slate-400">
                  0{active.id + 1} / 06
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] mb-1 leading-tight tracking-tight">
                {active.headingTitle}
              </h3>

              <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#F97316] mb-2">
                {active.tagline}
              </p>

              <p className="text-xs text-slate-600 font-semibold leading-relaxed mb-4">
                {active.desc}
              </p>

              {/* ARCHITECTURAL FEATURE POINTS */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <span className="text-[10px] font-extrabold text-[#0F172A] uppercase tracking-wider block mb-1">
                  KEY ARCHITECTURAL FEATURES:
                </span>
                {active.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPLORE SPACE CTA BUTTON */}
            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 bg-[#0F172A] hover:bg-[#F97316] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95 group"
              >
                <span>Explore Space</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM TAGLINE SUMMARY */}
        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
          <p className="text-xs text-slate-700 font-semibold italic">
            &ldquo;A place where residents do not just live — they move, gather, unwind, connect, play and reset.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
