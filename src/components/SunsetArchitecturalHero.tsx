'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, Check, ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SunsetArchitecturalHeroProps {
  onOpenBooking: () => void;
}

export default function SunsetArchitecturalHero({ onOpenBooking }: SunsetArchitecturalHeroProps) {
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      image: '/images/bengaluru_daylight_villa.png',
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
      
      {/* SVG DEFINITION FOR IMAGE DEEP C-CURVE ARCH */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="hero-image-c-curve" clipPathUnits="objectBoundingBox">
            {/* Deep, smooth, pronounced C-curve arch on left edge */}
            <path d="M 0.20 0 C -0.04 0.28, -0.04 0.72, 0.20 1 L 1 1 L 1 0 Z" />
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
        
        {/* DESKTOP NAV LINKS */}
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

        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={onOpenBooking}
            className="text-slate-400 hover:text-[#0F172A] transition-colors p-2 rounded-full hover:bg-slate-50 cursor-pointer hidden sm:block"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          
          <button
            onClick={onOpenBooking}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-[13px] font-extrabold transition-all shadow-md active:scale-95 cursor-pointer shrink-0"
          >
            Schedule Visit
          </button>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#0F172A] p-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#F97316]" /> : <Menu className="w-5 h-5 text-[#0F172A]" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-2xl z-50 px-6 py-6 flex flex-col space-y-3 overflow-hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className="text-sm font-extrabold text-[#0F172A] hover:text-[#F97316] py-2 border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-xs uppercase tracking-wider shadow-md mt-2 flex items-center justify-center gap-2"
              >
                <span>Book Site Tour Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN HERO BODY — SIDE-BY-SIDE (FLEX-ROW) ON ALL SCREENS MATCHING PC */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-row items-center justify-between px-3 sm:px-6 lg:px-8 my-3 lg:my-2 gap-2 sm:gap-6 lg:gap-10 z-10">
        
        {/* LEFT 50%: TEXT CONTENT */}
        <div className="w-[50%] sm:w-[50%] lg:w-[48%] flex flex-col justify-center py-1 sm:py-2 lg:py-4 pr-1 sm:pr-4 z-20 text-left shrink-0">
          
          <div className="inline-flex items-center gap-1.5 mb-2 sm:mb-3">
             <span className="text-[#F97316] text-[8px] sm:text-[11px] font-extrabold uppercase tracking-widest bg-orange-50 px-2 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-orange-100">✦ PREMIUM VILLAS</span>
          </div>

          <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-2 sm:mb-6">
            Your Next Chapter <br />
            <span className="text-[#F97316]">Begins at Antelia Groves</span>
          </h1>

          <p className="text-[10px] sm:text-[15px] text-slate-700 leading-snug sm:leading-relaxed max-w-lg font-semibold mb-3 sm:mb-8 line-clamp-3 sm:line-clamp-none">
            Discover Antelia Groves by Krafted Homes — a 10-acre gated sanctuary featuring independent 3 &amp; 4 BHK villas, private gardens and connected community living.
          </p>

          {/* 3 CHECKMARKS */}
          <div className="flex flex-col gap-2 sm:gap-4 pt-0.5">
            
            <div className="flex items-center gap-1.5 sm:gap-3">
              <div className="w-5 h-5 sm:w-7.5 sm:h-7.5 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-[11px] sm:text-[14px] font-extrabold text-[#0F172A] leading-tight">Distinctive Villas</h4>
                <span className="hidden sm:block text-[12px] text-slate-700 font-semibold leading-tight">3 &amp; 4 BHK split-level</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-3">
              <div className="w-5 h-5 sm:w-7.5 sm:h-7.5 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-[11px] sm:text-[14px] font-extrabold text-[#0F172A] leading-tight">Private Gardens</h4>
                <span className="hidden sm:block text-[12px] text-slate-700 font-semibold leading-tight">Private teak wood deck</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-3">
              <div className="w-5 h-5 sm:w-7.5 sm:h-7.5 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 stroke-[3]" />
              </div>
              <div>
                <h4 className="text-[11px] sm:text-[14px] font-extrabold text-[#0F172A] leading-tight">Resort Clubhouse</h4>
                <span className="hidden sm:block text-[12px] text-slate-700 font-semibold leading-tight">15,000 sq.ft pool hub</span>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT 50%: VILLA IMAGE CONTAINER WITH EXACT C-CURVE ON ITS LEFT EDGE */}
        <div className="w-[50%] sm:w-[50%] lg:w-[52%] h-[260px] sm:h-[420px] lg:h-[560px] relative overflow-hidden bg-transparent group shrink-0">
          
          {/* THE IMAGE WITH C-CURVE CLIP-PATH (EXACTLY LIKE PC) */}
          <div 
            className="w-full h-full"
            style={{ 
              clipPath: 'url(#hero-image-c-curve)', 
              WebkitClipPath: 'url(#hero-image-c-curve)' 
            }}
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
          <div className="absolute bottom-2 right-2 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-5 sm:py-2.5 rounded-full shadow-lg border border-white/50 flex items-center gap-1.5 sm:gap-2 z-20">
            <span className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-[#F97316] animate-pulse"></span>
            <span className="text-[9px] sm:text-[12px] font-extrabold text-[#0F172A]">{activeStat.tag}</span>
          </div>

        </div>

      </div>

      {/* FLOATING SEARCH BAR PILL AT BOTTOM */}
      <div className="w-[92%] sm:w-[95%] lg:w-[80%] max-w-5xl mx-auto min-h-[72px] bg-white rounded-3xl sm:rounded-full p-4 sm:p-2 sm:h-20 z-30 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] border border-slate-100 mt-2 sm:mt-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full h-full gap-3 sm:gap-0">
            
            <div className="w-full sm:w-auto flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 text-center sm:text-left">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">PROJECT LOCATION</span>
              <span className="text-[13px] font-extrabold text-[#0F172A]">Antelia Groves • Sarjapur</span>
            </div>

            <div className="hidden md:block w-px h-9 bg-slate-200"></div>

            <div className="w-full sm:w-auto flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 text-center sm:text-left">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">VILLA TYPE</span>
              <span className="text-[13px] font-extrabold text-[#0F172A]">3 &amp; 4 BHK Luxury Villas</span>
            </div>

            <div className="hidden md:block w-px h-9 bg-slate-200"></div>

            <div className="w-full sm:w-auto flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 text-center sm:text-left">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">PROJECT HIGHLIGHTS</span>
              <span className="text-[13px] font-extrabold text-[#0F172A]">10 Acres • 189 Villas</span>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 sm:px-8 h-12 sm:h-14 bg-[#F97316] hover:bg-[#EA580C] text-white text-[13px] font-extrabold rounded-full transition-all shadow-md flex items-center justify-center gap-2 shrink-0 active:scale-95"
            >
              <span>Explore Villas</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
      </div>

    </section>
  );
}






