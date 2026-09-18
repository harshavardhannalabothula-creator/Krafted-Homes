'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Users, BookOpen, Coffee, Sun, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface AmenityStoryProps {
  onOpenBooking?: () => void;
}

export default function AmenityStory({ onOpenBooking }: AmenityStoryProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

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

  const active = amenityCategories[activeCategoryIndex];

  return (
    <section id="amenities" className="py-12 sm:py-16 bg-white text-[#0F172A] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100 mb-3 inline-block">
            04 — COMMUNITY &amp; LIFESTYLE
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
            The Social <span className="text-[#F97316]">Heart</span>
          </h2>
          <p className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed max-w-2xl mx-auto">
            More than amenities — a thoughtfully designed community where movement, connection, celebration and quiet moments come together.
          </p>
        </div>

        {/* 6 AMENITY CATEGORY NAVIGATION CARDS (EQUAL HEIGHT & WIDTH) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {amenityCategories.map((cat, idx) => {
            const CatIcon = cat.icon;
            const isSelected = activeCategoryIndex === idx;
            return (
              <button
                key={cat.code}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`p-4 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer group ${
                  isSelected
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-lg scale-[1.03]'
                    : 'bg-[#F8FAFC] text-[#0F172A] border-slate-200/80 hover:border-orange-200 hover:bg-slate-100 shadow-sm'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-110 ${
                  isSelected ? 'bg-[#F97316] text-white' : 'bg-orange-50 text-[#F97316]'
                }`}>
                  <CatIcon className="w-4 h-4" />
                </div>
                
                <span className={`text-[11px] font-extrabold uppercase tracking-wider block mb-0.5 ${
                  isSelected ? 'text-[#F97316]' : 'text-[#0F172A]'
                }`}>
                  {cat.code}
                </span>

                <span className={`text-[11px] font-bold block leading-tight ${
                  isSelected ? 'text-slate-200' : 'text-slate-500'
                }`}>
                  {cat.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* MAIN TWO-COLUMN CONTENT LAYOUT */}
        <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-xl p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT 7-COLS: MAIN ARCHITECTURAL VISUAL PANEL */}
          <div className="lg:col-span-7 relative rounded-[24px] overflow-hidden min-h-[320px] sm:min-h-[420px] bg-[#0F172A] shadow-inner group flex flex-col justify-between p-4">
            
            <AnimatePresence mode="wait">
              <motion.img
                key={active.image}
                src={active.image}
                alt={active.headingTitle}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1.00 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* TOP FLOATING BADGES */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full border border-white/20">
                ANTELIA GROVES / COMMUNITY EXPERIENCE
              </span>

              <span className="bg-[#F97316] text-white text-[10px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                0{active.id + 1} / 06 {active.code}
              </span>
            </div>

            {/* BOTTOM FLOATING TITLE BADGE */}
            <div className="relative z-10 bg-slate-950/85 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-white mt-auto max-w-md">
              <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-wider block mb-0.5">
                ✦ {active.badge}
              </span>
              <h4 className="text-sm font-extrabold leading-snug">
                {active.headingTitle}
              </h4>
            </div>
          </div>

          {/* RIGHT 5-COLS: AMENITY INFORMATION PANEL */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-widest bg-orange-50 px-3 py-0.5 rounded-full border border-orange-100">
                  {active.code} • {active.title}
                </span>
                <span className="text-[10px] font-extrabold text-slate-400">
                  0{active.id + 1} / 06
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-2 leading-tight tracking-tight">
                {active.headingTitle}
              </h3>

              <p className="text-xs font-extrabold uppercase tracking-wider text-[#F97316] mb-3">
                {active.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed mb-6">
                {active.desc}
              </p>

              {/* ARCHITECTURAL FEATURE POINTS */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <span className="text-[10px] font-extrabold text-[#0F172A] uppercase tracking-wider block mb-2">
                  KEY ARCHITECTURAL FEATURES:
                </span>
                {active.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* EXPLORE SPACE CTA BUTTON */}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-[#0F172A] hover:bg-[#F97316] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95 group"
              >
                <span>Explore Space</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

        {/* BOTTOM TAGLINE SUMMARY */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-center">
          <p className="text-xs sm:text-sm text-slate-700 font-semibold italic">
            &ldquo;A place where residents do not just live — they move, gather, unwind, connect, play and reset.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}

