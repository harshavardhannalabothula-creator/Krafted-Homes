'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ThreeStepsSectionProps {
  onOpenBooking?: () => void;
}

export default function ThreeStepsSection({ onOpenBooking }: ThreeStepsSectionProps) {
  const [activePanel, setActivePanel] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 40;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setActivePanel((prev) => (prev < panels.length - 1 ? prev + 1 : prev));
    }
    if (isRightSwipe) {
      setActivePanel((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  const panels = [
    {
      id: 0,
      num: '01',
      tag: 'DISCOVER',
      mobileTitle: '01 — DISCOVER',
      title: 'Explore Antelia Groves',
      desc: 'Explore Antelia Groves and understand the community.',
      desktopDesc: 'Explore the 10-acre master-planned villa community.',
      image: '/images/hero_main_aerial.png',
      badge: 'Masterplan & Approach',
    },
    {
      id: 1,
      num: '02',
      tag: 'EXPERIENCE',
      mobileTitle: '02 — EXPERIENCE',
      title: 'Visit the Community',
      desc: 'Visit the community and experience the spaces.',
      desktopDesc: 'Walk through landscaped trails, gardens & clubhouse.',
      image: '/images/clubhouse.jpg',
      badge: 'Clubhouse & Surroundings',
    },
    {
      id: 2,
      num: '03',
      tag: 'CHOOSE',
      mobileTitle: '03 — CHOOSE',
      title: 'Find Your Villa',
      desc: 'Find the villa that fits your lifestyle.',
      desktopDesc: 'Select 3 & 4 BHK split-level vastu-compliant plans.',
      image: '/images/hero_villa_facade.png',
      badge: 'Split-Level Elevation',
    },
    {
      id: 3,
      num: '04',
      tag: 'BEGIN',
      mobileTitle: '04 — BEGIN',
      title: 'Start Your Journey',
      desc: 'Start your journey towards your new home.',
      desktopDesc: 'Transparent booking process & seamless handover.',
      image: '/images/handing_keys.png',
      badge: 'Handover & Ownership',
    },
  ];

  return (
    <section id="steps" className="w-full bg-white py-6 md:py-12 relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================================================================= */}
        {/* DESKTOP / PC VERSION (md:block hidden)                             */}
        {/* ================================================================= */}
        <div className="hidden md:block">
          
          {/* COMPACT DESKTOP HEADER */}
          <div className="max-w-3xl mb-6 lg:mb-7">
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-2"
            >
              <span>05 — YOUR VILLA JOURNEY</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl lg:text-[36px] font-extrabold text-[#0F172A] leading-[1.18] tracking-tight"
            >
              From First Visit <span className="text-[#F97316]">to Your New Home</span>
            </motion.h2>
          </div>

          {/* CONTINUOUS 4-PANEL HORIZONTAL PANORAMA */}
          <div className="relative mb-6">
            
            {/* Subtle Orange Journey Connecting Line */}
            <div className="absolute top-[48px] left-4 right-4 h-[2px] bg-slate-200/80 z-20 pointer-events-none">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="h-full bg-[#F97316] origin-left shadow-xs"
              />
            </div>

            {/* 4 HORIZONTAL PANELS IN ONE ROW WITH TOUCHING/MINIMAL GAPS */}
            <div className="flex flex-row gap-2 h-[410px] lg:h-[430px]">
              {panels.map((panel, idx) => {
                const isActive = activePanel === idx;

                return (
                  <motion.div
                    key={panel.num}
                    onClick={() => setActivePanel(idx)}
                    onMouseEnter={() => setActivePanel(idx)}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * idx }}
                    className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-500 cursor-pointer ${
                      isActive 
                        ? 'flex-[2.2] border-[#F97316] shadow-xl shadow-slate-950/15' 
                        : 'flex-1 border-white/90 hover:border-slate-300 opacity-90 hover:opacity-100'
                    } group`}
                  >
                    {/* Panel Image */}
                    <img 
                      src={panel.image} 
                      alt={panel.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Dark Gradient Overlay */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/50' 
                        : 'bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-slate-950/40'
                    }`} />

                    {/* TOP STAGE NUMBER & TAG MARKER */}
                    <div className="relative z-30 p-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center font-black text-xs transition-colors duration-300 ${
                          isActive ? 'bg-[#F97316] text-white shadow-md' : 'bg-white/90 text-[#0F172A] border border-white/40'
                        }`}>
                          {panel.num}
                        </span>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316] bg-slate-950/75 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                          {panel.tag}
                        </span>
                      </div>

                      {isActive && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-extrabold uppercase tracking-wider text-white bg-white/15 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                          <Sparkles className="w-3 h-3 text-[#F97316]" />
                          <span>{panel.badge}</span>
                        </span>
                      )}
                    </div>

                    {/* BOTTOM NATURAL TYPOGRAPHY (NO Floating Card Boxes) */}
                    <div className="absolute bottom-0 left-0 right-0 z-30 p-5 text-white flex flex-col justify-end">
                      <h3 className={`font-extrabold tracking-tight transition-all duration-300 ${
                        isActive ? 'text-lg lg:text-xl text-white mb-1' : 'text-sm lg:text-base text-white/90'
                      }`}>
                        {panel.title}
                      </h3>

                      <AnimatePresence>
                        {isActive ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-1.5 overflow-hidden"
                          >
                            <p className="text-xs text-slate-300 font-medium leading-relaxed max-w-xs">
                              {panel.desktopDesc}
                            </p>

                            <div className="pt-1 flex items-center gap-1.5 text-xs font-extrabold text-[#F97316]">
                              <span>Explore Stage</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                          </motion.div>
                        ) : (
                          <p className="text-[11px] text-slate-400 font-medium truncate">
                            {panel.desktopDesc}
                          </p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* DESKTOP BOTTOM SLIM INFO RAIL */}
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-full bg-slate-50 rounded-2xl px-5 py-3 border border-slate-200/90 shadow-2xs flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-6 text-xs font-extrabold text-[#0F172A] uppercase tracking-wider">
              <span className="text-[#F97316]">10+ ACRES</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#0F172A]">189 VILLAS</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#0F172A]">70% OPEN</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#0F172A]">15K SQ.FT CLUBHOUSE</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="text-xs font-extrabold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 uppercase tracking-wider bg-white px-4 py-2 rounded-full border border-orange-200 shadow-2xs hover:shadow-xs"
            >
              <span>BOOK A SITE VISIT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>


        {/* ================================================================= */}
        {/* MOBILE / PHONE VERSION (block md:hidden)                           */}
        {/* ================================================================= */}
        <div className="block md:hidden space-y-4">
          
          {/* COMPACT MOBILE HEADER */}
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[10px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-1.5">
              <span>05 — YOUR VILLA JOURNEY</span>
            </div>

            <h2 className="text-2xl font-extrabold text-[#0F172A] leading-tight tracking-tight">
              From First Visit <span className="text-[#F97316]">to Your New Home</span>
            </h2>
          </div>

          {/* SINGLE FULL-WIDTH CINEMATIC IMAGE (4:3 ASPECT RATIO WITH SWIPE) */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md border border-slate-200/90 bg-slate-950 group select-none"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={activePanel}
                src={panels[activePanel].image} 
                alt={panels[activePanel].title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/40 pointer-events-none" />

            {/* Top Stage Tag Overlay */}
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#F97316] text-white flex items-center justify-center font-black text-[11px] shadow-sm">
                {panels[activePanel].num}
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-white bg-slate-950/70 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                {panels[activePanel].tag}
              </span>
            </div>

            {/* Bottom Floating Title on Image */}
            <div className="absolute bottom-3 left-3 right-3 z-10">
              <p className="text-xs font-bold text-orange-300 uppercase tracking-wider mb-0.5">
                {panels[activePanel].badge}
              </p>
              <h3 className="text-lg font-extrabold text-white tracking-tight leading-snug">
                {panels[activePanel].title}
              </h3>
            </div>
          </div>

          {/* COMPACT HORIZONTAL JOURNEY SELECTOR (SCROLLABLE/SWIPEABLE) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 text-xs font-extrabold uppercase tracking-wider border-y border-slate-100">
            {panels.map((p, idx) => (
              <div key={p.num} className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => setActivePanel(idx)}
                  className={`px-3 py-1.5 rounded-full border transition-all duration-300 text-[11px] cursor-pointer ${
                    activePanel === idx
                      ? 'bg-[#F97316] text-white border-[#F97316] shadow-sm font-black'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                  }`}
                >
                  {p.num} {p.tag}
                </button>
                {idx < panels.length - 1 && (
                  <span className="text-orange-400 font-bold text-[11px]">→</span>
                )}
              </div>
            ))}
          </div>

          {/* ACTIVE STAGE DESCRIPTION & EXPLORE ACTION */}
          <div className="bg-slate-50/90 rounded-xl p-3.5 border border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold text-[#0F172A] tracking-wider uppercase">
                {panels[activePanel].mobileTitle}
              </h4>
              <span className="text-[10px] font-bold text-slate-400">
                {activePanel + 1} / 4
              </span>
            </div>

            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              {panels[activePanel].desc}
            </p>

            <div className="pt-1 flex items-center justify-between">
              <button
                onClick={() => setActivePanel((prev) => (prev < panels.length - 1 ? prev + 1 : 0))}
                className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-[#F97316] hover:text-[#EA580C] tracking-wider cursor-pointer"
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* MOBILE COMPACT STATS RAIL & CTA */}
          <div className="bg-slate-900 rounded-xl p-3.5 text-white space-y-3">
            <div className="flex items-center justify-between text-[11px] font-extrabold uppercase tracking-wider border-b border-slate-800 pb-2.5 overflow-x-auto no-scrollbar gap-3">
              <span className="text-[#F97316] shrink-0">10+ ACRES</span>
              <span className="text-slate-600 shrink-0">•</span>
              <span className="text-white shrink-0">189 VILLAS</span>
              <span className="text-slate-600 shrink-0">•</span>
              <span className="text-white shrink-0">70% OPEN</span>
              <span className="text-slate-600 shrink-0">•</span>
              <span className="text-white shrink-0">15K SQ.FT</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full text-center py-2.5 rounded-lg bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>BOOK A SITE VISIT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
