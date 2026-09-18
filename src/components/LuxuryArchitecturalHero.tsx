'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface LuxuryArchitecturalHeroProps {
  onOpenBooking: () => void;
}

export default function LuxuryArchitecturalHero({ onOpenBooking }: LuxuryArchitecturalHeroProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const heroSlides = [
    {
      id: 0,
      label: 'LUXURY VILLA',
      image: '/images/villa_exterior.jpg',
      badge: '10-ACRE LUXURY VILLA ESTATE',
      subtitle: 'A living landscape, crafted for modern life.',
    },
    {
      id: 1,
      label: '10-ACRE ESTATE',
      image: '/images/hero_community.jpg',
      badge: '189 INDEPENDENT SPLIT-LEVEL HOMES',
      subtitle: 'Master-planned sanctuary with 40%+ open green spine.',
    },
    {
      id: 2,
      label: 'SUNSET SKYLINE',
      image: '/images/daylight_estate.jpg',
      badge: 'HILLSIDE TOPOGRAPHY & TWILIGHT VIEWS',
      subtitle: 'Elevated contours with natural cross-ventilation.',
    },
    {
      id: 3,
      label: 'RESORT CLUBHOUSE',
      image: '/images/clubhouse.jpg',
      badge: '15,000+ SQ.FT LIFESTYLE ANCHOR',
      subtitle: 'Half-Olympic pool, sports wings, guest suites & banquet patio.',
    },
  ];

  const current = heroSlides[activeSlide];

  const scrollToJourney = () => {
    const el = document.getElementById('land');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToVilla = () => {
    const el = document.getElementById('villa-specs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full bg-[#F4F0E7] text-[#0F172A] overflow-hidden flex items-center justify-between select-none pt-8">
      
      {/* Right HD Architectural Background Image with Smooth Left Fade into Warm Ivory */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${current.image}')` }}
          />
        </AnimatePresence>

        {/* Master Left-to-Right Warm Ivory Gradient Mask for Screenshot 2 Visual Layout */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4F0E7] via-[#F4F0E7]/80 sm:via-[#F4F0E7]/60 to-transparent w-full sm:w-[75%] lg:w-[65%] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F0E7] via-transparent to-transparent h-32 bottom-0 z-10 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        
        <div className="max-w-2xl">
          
          {/* Eyebrow Line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-8 h-px bg-[#F97316]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#F97316] font-manrope font-semibold">
              KRAFTED HOMES PRESENTS
            </span>
          </motion.div>

          {/* Grand Two-Line Title (Matching Screenshot 2 typography) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col mb-4"
          >
            <h1 className="text-6xl sm:text-8xl lg:text-[105px] font-serif font-bold text-[#0F172A] tracking-tight leading-none">
              ANTELIA
            </h1>
            <h1 className="text-6xl sm:text-8xl lg:text-[105px] font-serif font-bold text-[#F97316] tracking-tight leading-none">
              GROVES
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            key={current.subtitle}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-xl font-manrope font-light text-[#0F172A]/80 max-w-md mb-8 leading-relaxed"
          >
            {current.subtitle}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5"
          >
            <button
              onClick={scrollToJourney}
              className="px-8 py-4 rounded-xs text-xs font-bold font-manrope uppercase tracking-[0.2em] text-white bg-[#0F172A] hover:bg-[#F97316] hover:text-[#0F172A] transition-all shadow-md"
            >
              EXPLORE ANTELIA
            </button>

            <button
              onClick={scrollToVilla}
              className="group text-xs font-manrope font-bold uppercase tracking-[0.15em] text-[#0F172A] hover:text-[#F97316] transition-colors inline-flex items-center gap-2 py-4 px-2"
            >
              <span>DISCOVER THE VILLAS</span>
              <ArrowRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>

      </div>

      {/* Bottom Floating Controls & Badge Bar (Matching Screenshot 2 bottom right badge) */}
      <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center gap-4">
        
        {/* Gallery Viewport Switcher */}
        <div className="flex items-center gap-1.5 bg-[#F4F0E7]/90 backdrop-blur-md p-1.5 rounded-xs border border-[slate-200] shadow-sm">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActiveSlide(idx)}
              className={`px-3 py-1.5 rounded-xs text-[10px] font-manrope font-bold uppercase tracking-wider transition-all ${
                activeSlide === idx
                  ? 'bg-[#0F172A] text-white shadow-xs'
                  : 'text-[#0F172A]/70 hover:text-[#0F172A] hover:bg-[slate-100]'
              }`}
            >
              0{idx + 1}. {slide.label}
            </button>
          ))}
        </div>

        {/* Floating Architectural Badge */}
        <div className="bg-[#F4F0E7]/90 backdrop-blur-md border border-[slate-200] px-4 py-2 text-[10px] font-manrope font-bold uppercase tracking-widest text-[#0F172A] rounded-xs shadow-sm">
          {current.badge}
        </div>

      </div>

    </section>
  );
}
