'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, ArrowUpRight, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SunsetArchitecturalHeroProps {
  onOpenBooking: () => void;
}

export default function SunsetArchitecturalHero({ onOpenBooking }: SunsetArchitecturalHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  const navLinks = [
    { label: 'OVERVIEW', href: '#overview' },
    { label: 'MASTERPLAN', href: '#masterplan' },
    { label: 'VILLAS', href: '#villas' },
    { label: 'LOCATION', href: '#location' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const quickStats = [
    {
      id: 0,
      value: '10+ ACRES',
      label: 'GATED COMMUNITY',
      detail: 'Low-density planned enclave',
      image: '/images/hero_main_aerial.png',
      tag: '01 / THE VISION',
      subtitle: '10 ACRES. ONE VISION.',
      desc: 'Independent 3 & 4 BHK split-level villas within a thoughtfully planned 10-acre gated sanctuary in South Bengaluru, where architectural clarity, serene nature and everyday living come together.',
    },
    {
      id: 1,
      value: '3 & 4 BHK',
      label: 'INDEPENDENT VILLAS',
      detail: 'Split-level private residences',
      image: '/images/hero_villa_facade.png',
      tag: '02 / VILLA ELEVATION',
      subtitle: 'INDEPENDENT LUXURY VILLAS',
      desc: 'Spacious independent villas with private 180 sq.ft lawn backyards, high ceilings, large glass windows, and open rooftop sky terraces.',
    },
    {
      id: 2,
      value: '2262–3000 SQ.FT.',
      label: 'BUA RANGE',
      detail: 'Articulated spatial layouts',
      image: '/images/hero_living_sanctuary.png',
      tag: '03 / INTERIORS',
      subtitle: 'BRIGHT & SPACIOUS ROOMS',
      desc: 'Large open living rooms with floor-to-ceiling glass paneling, natural sunlight, dining island, and private family bedrooms.',
    },
    {
      id: 3,
      value: '15,000+ SQ.FT.',
      label: 'SIGNATURE CLUBHOUSE',
      detail: '25m heated pool & wellness',
      image: '/images/hero_resort_clubhouse.png',
      tag: '04 / CLUBHOUSE & POOL',
      subtitle: '5-STAR RESORT AMENITIES',
      desc: 'Enjoy a crystal blue swimming pool, indoor badminton & squash courts, gym, yoga deck, and guest rooms right inside the community.',
    },
  ];

  // Auto-advance wallpaper every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % quickStats.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [quickStats.length]);

  const activeStat = quickStats[activeStatIndex];

  const handleScrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="overview" className="relative w-full flex flex-col justify-between bg-[#F7F6F2] text-[#1D2421] overflow-hidden border-b border-[#EBE7DF]">
      
      {/* 1. TOP HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 w-full px-6 sm:px-12 py-4 bg-[#F7F6F2]/95 backdrop-blur-md border-b border-[#EBE7DF]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* BRAND LOGO */}
          <a href="#overview" onClick={(e) => handleScrollTo(e, '#overview')} className="flex items-center gap-3 group">
            <div className="w-7 h-7 bg-[#B89553] flex items-center justify-center rounded-lg shadow-xs">
              <span className="text-white font-bold text-xs tracking-widest">▲</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-wider text-[#1D2421] leading-tight group-hover:text-[#B89553] transition-colors">
                ANTELIA
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#B89553] uppercase">
                GROVES
              </span>
            </div>
          </a>

          {/* CENTERED NAVIGATION LINKS */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs font-bold uppercase tracking-wider text-[#333D4E] hover:text-[#B89553] transition-colors py-1 relative group cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS: LOCATION & SCHEDULE VISIT */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={(e) => handleScrollTo(e, '#location')}
              className="px-4 py-2 rounded-full bg-[#EFECE6] border border-[#EBE7DF] text-[#1D2421] text-xs font-bold uppercase tracking-wider hover:bg-[#1D2421] hover:text-white transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#B89553]" />
              <span>LOCATION</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2 rounded-full border border-[#B89553] text-[#B89553] text-xs font-bold uppercase tracking-wider hover:bg-[#B89553] hover:text-white transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <span>SCHEDULE VISIT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MOBILE MENU TRIGGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#1D2421] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#B89553]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="relative z-40 xl:hidden bg-[#F7F6F2] border-b border-[#EBE7DF] px-6 py-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleScrollTo(e, link.href);
              }}
              className="text-xs font-bold uppercase tracking-wider text-[#1D2421] hover:text-[#B89553] py-2 border-b border-[#EBE7DF] cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleScrollTo(e, '#location');
            }}
            className="mt-2 w-full py-3 bg-[#EFECE6] border border-[#EBE7DF] text-[#1D2421] text-xs font-bold uppercase tracking-wider hover:bg-[#1D2421] hover:text-white transition-colors rounded-full text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B89553]" />
            <span>REAL LOCATION MAP</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 bg-[#B89553] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1D2421] transition-colors rounded-full cursor-pointer"
          >
            SCHEDULE VISIT
          </button>
        </div>
      )}

      {/* 2. MAIN HERO BODY — MATCHING TARGET MOBILE SCREENSHOT LAYOUT (MEDIA_1789102716998.PNG) */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 sm:py-10 lg:py-14 bg-[#F7F6F2]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT 6 COLUMNS: TOP TEXT CONTENT ON MOBILE */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStat.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="space-y-2 sm:space-y-3"
              >
                {/* EYEBROW TAG */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B89553]">
                    — {activeStat.tag}
                  </span>
                </div>

                {/* GRAND TITLE — ELEGANT SERIF STYLE AS IN SCREENSHOT */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#1D2421] uppercase leading-[1.05] font-serif">
                  ANTELIA GROVES
                </h1>

                {/* SUBTITLE */}
                <h2 className="text-sm sm:text-lg font-bold tracking-widest text-[#B89553] uppercase">
                  {activeStat.subtitle}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm font-normal text-[#4B5563] leading-relaxed max-w-lg">
                  {activeStat.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA BUTTONS ROW */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={(e) => handleScrollTo(e, '#villas')}
                className="px-6 py-3.5 bg-[#B89553] hover:bg-[#1D2421] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm rounded-md cursor-pointer"
              >
                <span>EXPLORE THE VILLAS</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={(e) => handleScrollTo(e, '#masterplan')}
                className="text-xs font-bold uppercase tracking-wider text-[#B89553] hover:text-[#1D2421] transition-colors text-center sm:text-left py-1 cursor-pointer underline border-b border-[#B89553]"
              >
                THE DEVELOPMENT JOURNEY →
              </button>
            </div>
          </div>

          {/* RIGHT 6 COLUMNS: ELEGANT VILLA IMAGE CONTAINER BELOW TEXT ON MOBILE */}
          <div className="lg:col-span-6 relative h-[240px] sm:h-[340px] lg:h-[440px] rounded-2xl overflow-hidden shadow-md border border-[#EBE7DF] bg-[#EFECE6] mt-2 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStat.image}
                src={activeStat.image}
                alt={activeStat.subtitle}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1.00 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* ROTATION INDICATOR BADGE */}
            <div className="absolute top-3 left-3 z-20 bg-[#F7F6F2]/95 backdrop-blur-md px-3 py-1 rounded-lg border border-[#EBE7DF] text-[10px] font-bold text-[#1D2421] shadow-xs flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89553] animate-pulse" />
              <span>{activeStat.tag}</span>
            </div>

            {/* CAPTION BAR AT BOTTOM OF IMAGE */}
            <div className="absolute bottom-0 inset-x-0 z-20 bg-[#F7F6F2]/90 backdrop-blur-md px-4 py-2.5 border-t border-[#EBE7DF] flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#B89553]">
                2.0S AUTOMATIC ROTATION
              </span>
              <h4 className="text-xs font-bold text-[#1D2421] truncate max-w-[200px]">
                {activeStat.subtitle}
              </h4>
            </div>
          </div>

        </div>
      </div>

      {/* 3. 4-STAT GRID AT BOTTOM — EXACT 2X2 MOBILE GRID MATCHING SCREENSHOT */}
      <div className="relative z-30 w-full bg-[#F7F6F2] border-t border-[#EBE7DF] py-6 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {quickStats.map((stat, idx) => {
            const isActive = idx === activeStatIndex;
            return (
              <button
                key={stat.label}
                onClick={() => setActiveStatIndex(idx)}
                className="text-left group focus:outline-none transition-all cursor-pointer p-1"
              >
                <span className={`text-xl sm:text-3xl font-extrabold block leading-none mb-1.5 transition-all ${
                  isActive ? 'text-[#B89553] scale-105 origin-left' : 'text-[#B89553]/85 group-hover:text-[#B89553]'
                }`}>
                  {stat.value}
                </span>

                <span className="text-xs font-extrabold uppercase tracking-wider text-[#1D2421] block mb-0.5">
                  {stat.label}
                </span>

                <span className="text-[11px] font-normal text-[#6B7280] block leading-tight">
                  {stat.detail}
                </span>

                <div className={`mt-2.5 h-[2px] transition-all duration-300 ${
                  isActive ? 'w-12 bg-[#B89553]' : 'w-4 bg-transparent group-hover:w-8 group-hover:bg-[#B89553]/40'
                }`} />
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}
