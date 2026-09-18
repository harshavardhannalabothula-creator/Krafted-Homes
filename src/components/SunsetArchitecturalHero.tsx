'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, Check, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SunsetArchitecturalHeroProps {
  onOpenBooking: () => void;
}

export default function SunsetArchitecturalHero({ onOpenBooking }: SunsetArchitecturalHeroProps) {
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  const navLinks = [
    { label: 'Home', href: '#overview' },
    { label: 'About', href: '#about' },
    { label: 'Villas', href: '#villas' },
    { label: 'Past Work', href: '#past-work' },
    { label: 'Steps', href: '#steps' },
    { label: 'Location', href: '#location' },
    { label: 'Articles', href: '#articles' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickStats = [
    {
      id: 0,
      image: '/images/daylight_estate.jpg',
      tag: 'Premium Villa Community',
    },
    {
      id: 1,
      image: '/images/hero_resort_clubhouse.png',
      tag: '10-Acre Sanctuary',
    },
    {
      id: 2,
      image: '/images/hero_villa_white.png',
      tag: '3 & 4 BHK Split-Level',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % quickStats.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [quickStats.length]);

  const activeStat = quickStats[activeStatIndex];

  return (
    <section id="overview" className="relative w-full bg-white font-sans flex flex-col justify-between overflow-hidden pb-8 pt-2">
      
      {/* SVG DEFINITION FOR IMAGE C-CURVE */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="hero-image-c-curve" clipPathUnits="objectBoundingBox">
            {/* Smooth C-curve on left edge of the image container: starts inset (0.15, 0), curves outward to (0.01, 0.5), curves back to (0.15, 1) */}
            <path d="M 0.15 0 C 0.01 0.25, 0.01 0.75, 0.15 1 L 1 1 L 1 0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* HEADER NAVBAR */}
      <header className="relative w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5 z-40 bg-white border-b border-slate-100">
        <div className="flex items-center gap-3">
          <a 
            href="#overview" 
            onClick={(e) => handleNavClick(e, '#overview')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#F97316] rounded-full flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
               <span className="text-white font-black text-sm sm:text-base">K</span>
            </div>
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0F172A]">
              Krafted Homes
            </span>
          </a>
        </div>
        
        <nav className="hidden xl:flex items-center justify-center gap-5 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[12px] xl:text-[13px] font-extrabold text-[#0F172A] hover:text-[#F97316] transition-colors relative py-1 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenBooking}
            className="text-slate-400 hover:text-[#0F172A] transition-colors p-2 rounded-full hover:bg-slate-50 cursor-pointer"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-[13px] font-extrabold transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            Schedule a Visit
          </button>
        </div>
      </header>

      {/* MAIN HERO BODY */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 my-2 gap-8 lg:gap-10 z-10">
        
        {/* LEFT 50%: TEXT CONTENT */}
        <div className="w-full lg:w-[48%] flex flex-col justify-center py-4 pr-0 lg:pr-4 z-20">
          
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">✦ PREMIUM VILLA COMMUNITY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold tracking-tight text-[#0F172A] leading-[1.08] mb-6">
            Your Next Chapter <br />
            <span className="text-[#F97316]">Begins at Antelia Groves</span>
          </h1>

          <p className="text-[15px] sm:text-[16px] text-slate-700 leading-relaxed max-w-lg font-semibold mb-8">
            Discover Antelia Groves by Krafted Homes — a thoughtfully planned villa community across approximately 10 acres, featuring independent 3 and 4 BHK villas, distinctive architecture, private gardens and connected community living.
          </p>

          {/* 3 CHECKMARKS IN A HORIZONTAL ROW */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 pt-1">
            
            <div className="flex items-center gap-3">
              <div className="w-7.5 h-7.5 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-[14px] font-extrabold text-[#0F172A] leading-tight mb-0.5">Distinctive Villas</h4>
                <span className="text-[12px] text-slate-700 font-semibold block leading-tight">Thoughtfully planned 3 & 4 BHK homes</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7.5 h-7.5 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-[14px] font-extrabold text-[#0F172A] leading-tight mb-0.5">Private Gardens</h4>
                <span className="text-[12px] text-slate-700 font-semibold block leading-tight">Green spaces connected to everyday living</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-7.5 h-7.5 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-[14px] font-extrabold text-[#0F172A] leading-tight mb-0.5">Premium Community</h4>
                <span className="text-[12px] text-slate-700 font-semibold block leading-tight">Clubhouse, wellness and lifestyle spaces</span>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT 52%: VILLA IMAGE CONTAINER WITH EXACT C-CURVE ON ITS LEFT EDGE */}
        <div className="w-full lg:w-[52%] h-[400px] sm:h-[480px] lg:h-[560px] relative rounded-r-[36px] lg:rounded-r-[48px] overflow-hidden bg-transparent group shrink-0">
          
          {/* THE IMAGE WITH C-CURVE CLIP-PATH */}
          <div 
            className="w-full h-full drop-shadow-md"
            style={{ clipPath: 'url(#hero-image-c-curve)', WebkitClipPath: 'url(#hero-image-c-curve)' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStat.image}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="w-full h-full"
              >
                <img
                  src={activeStat.image}
                  alt={activeStat.tag}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* FLOATING IMAGE BADGE */}
          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg border border-white/50 flex items-center gap-2.5 z-20">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] animate-pulse"></span>
            <span className="text-[12px] font-extrabold text-[#0F172A]">{activeStat.tag}</span>
          </div>

        </div>

      </div>

      {/* FLOATING SEARCH BAR PILL AT BOTTOM */}
      <div className="w-[95%] lg:w-[80%] max-w-5xl mx-auto h-20 bg-white rounded-full flex items-center px-4 z-30 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] border border-slate-100 mt-2">
          <div className="flex items-center justify-between w-full h-full">
            
            <div className="flex-1 flex flex-col justify-center px-6 lg:px-8">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">PROJECT LOCATION</span>
              <span className="text-[13px] font-extrabold text-[#0F172A]">Antelia Groves</span>
            </div>

            <div className="hidden md:block w-px h-9 bg-slate-200"></div>

            <div className="flex-1 flex flex-col justify-center px-6 lg:px-8">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">VILLA TYPE</span>
              <span className="text-[13px] font-extrabold text-[#0F172A]">3 & 4 BHK Villas</span>
            </div>

            <div className="hidden md:block w-px h-9 bg-slate-200"></div>

            <div className="flex-1 flex flex-col justify-center px-6 lg:px-8">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">PROJECT HIGHLIGHTS</span>
              <span className="text-[13px] font-extrabold text-[#0F172A]">10 Acres - 189 Villas</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="px-8 h-14 bg-[#F97316] hover:bg-[#EA580C] text-white text-[13px] font-extrabold rounded-full transition-all shadow-md flex items-center gap-2 shrink-0 active:scale-95"
            >
              <span>Explore Villas</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
      </div>

    </section>
  );
}






