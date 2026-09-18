'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Home, Trees, Layers, MapPin, Eye } from 'lucide-react';

interface CleanCinematicHeroProps {
  onOpenBooking: () => void;
}

export default function CleanCinematicHero({ onOpenBooking }: CleanCinematicHeroProps) {
  const [activeView, setActiveView] = useState<number>(0);

  const heroViews = [
    {
      id: 0,
      label: '10-Acre Aerial Estate',
      title: 'A 10-Acre Master-Planned Community',
      subtitle: '189 Independent Split-Level Luxury Villas nestled in lush green landscape',
      image: '/images/hero_community.png',
      stat: '10-Acre Sanctuary',
    },
    {
      id: 1,
      label: 'Split-Level Villa Facade',
      title: 'Architectural Split-Level Elegance',
      subtitle: 'Type A 2,262 sq.ft BUA featuring double-height ceiling volume & glass balconies',
      image: '/images/villa_exterior.png',
      stat: '2,262 – 3,000 SQ.FT BUA',
    },
    {
      id: 2,
      label: '15K Sq.Ft Resort Clubhouse',
      title: '15,000+ Sq.Ft Lifestyle Anchor',
      subtitle: 'Resort swimming pool, water courts, guest suites, squash, badminton & gym',
      image: '/images/clubhouse.png',
      stat: '15,000+ SQ.FT CLUBHOUSE',
    },
    {
      id: 3,
      label: 'Private Backyard Deck',
      title: '180 Sq.Ft Private Backyard Garden',
      subtitle: 'Seamless indoor-outdoor threshold with organic herb garden & butterfly meadow',
      image: '/images/villa_interior.png',
      stat: '180 SQ.FT PRIVATE GARDEN',
    },
  ];

  const currentView = heroViews[activeView];

  return (
    <section className="relative h-screen w-full bg-white text-[#111827] overflow-hidden flex items-center justify-center pt-8">
      {/* Background Architectural Canvas with Smooth Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeView}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${currentView.image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-black/30" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-8">
        
        {/* Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-gray-200 shadow-sm mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#C5A059]">
            KRAFTED HOMES PRESENTS
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight text-[#111827] font-bold mb-3 leading-none"
        >
          ANTELIA <span className="text-[#C5A059] italic font-normal">GROVES</span>
        </motion.h1>

        {/* Dynamic Tagline */}
        <motion.p
          key={activeView + '-title'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-2xl font-serif text-[#111827] font-light max-w-3xl mb-3"
        >
          {currentView.title}
        </motion.p>

        <motion.p
          key={activeView + '-sub'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs sm:text-sm font-sans text-gray-600 font-light max-w-xl mb-8 leading-relaxed"
        >
          {currentView.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-xs text-xs font-bold font-mono uppercase tracking-widest text-white bg-[#111827] hover:bg-[#C5A059] hover:text-[#111827] transition-all shadow-md flex items-center gap-2"
          >
            <span>SCHEDULE PRIVATE VISIT</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#journey"
            className="px-8 py-4 rounded-xs text-xs font-mono font-bold uppercase tracking-widest text-[#111827] bg-white/90 border border-gray-300 hover:border-[#111827] transition-colors shadow-sm"
          >
            DISCOVER THE 10-ACRE JOURNEY
          </a>
        </motion.div>

        {/* Key Metrics Cards Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl bg-white/90 backdrop-blur-md p-4 rounded-xs border border-gray-200 shadow-sm"
        >
          <div className="text-center border-r border-gray-200 last:border-r-0 p-2">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#111827]">10 Acres</span>
            <span className="text-[10px] font-mono uppercase text-[#C5A059] font-bold block mt-0.5">Gated Estate</span>
          </div>

          <div className="text-center border-r border-gray-200 last:border-r-0 p-2">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#111827]">189</span>
            <span className="text-[10px] font-mono uppercase text-[#C5A059] font-bold block mt-0.5">Split-Level Villas</span>
          </div>

          <div className="text-center border-r border-gray-200 last:border-r-0 p-2">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#111827]">2262–3000</span>
            <span className="text-[10px] font-mono uppercase text-[#C5A059] font-bold block mt-0.5">Sq.Ft BUA Range</span>
          </div>

          <div className="text-center p-2">
            <span className="text-xl sm:text-2xl font-serif font-bold text-[#111827]">15,000+</span>
            <span className="text-[10px] font-mono uppercase text-[#C5A059] font-bold block mt-0.5">Sq.Ft Clubhouse</span>
          </div>
        </motion.div>

      </div>

      {/* Hero Viewport Switcher Controls at Bottom */}
      <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md p-1 rounded-xs border border-gray-200 shadow-sm overflow-x-auto max-w-full">
          <span className="text-[10px] font-mono font-bold uppercase text-[#C5A059] px-3">
            VIEWPORT:
          </span>
          {heroViews.map((hv, idx) => (
            <button
              key={hv.id}
              onClick={() => setActiveView(idx)}
              className={`px-3 py-1.5 rounded-xs text-[10px] font-mono font-bold uppercase transition-all whitespace-nowrap ${
                activeView === idx
                  ? 'bg-[#111827] text-white shadow-xs'
                  : 'text-gray-700 hover:text-black hover:bg-gray-100'
              }`}
            >
              0{idx + 1}. {hv.label.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
