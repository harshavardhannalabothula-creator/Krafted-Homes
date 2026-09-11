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
      value: '10 ACRES',
      label: 'GATED COMMUNITY',
      detail: 'Peaceful green community',
      image: '/images/hero_main_aerial.png',
      tag: '01 / OVERVIEW',
      subtitle: 'PREMIUM 10-ACRE GATED VILLAS',
      desc: 'Beautiful 3 & 4 BHK independent villas set inside a 10-acre green gated community in Whitefield-Sarjapur Villa Corridor, Bengaluru. Designed for fresh air, private gardens, and peaceful family living.',
    },
    {
      id: 1,
      value: '3 & 4 BHK',
      label: 'INDEPENDENT VILLAS',
      detail: 'Private luxury residences',
      image: '/images/hero_villa_facade.png',
      tag: '02 / VILLA ELEVATION',
      subtitle: 'INDEPENDENT LUXURY VILLAS',
      desc: 'Spacious independent villas with private 180 sq.ft lawn backyards, high ceilings, large glass windows, and open rooftop sky terraces.',
    },
    {
      id: 2,
      value: '2262–3000 SQ.FT',
      label: 'HOUSE SIZE',
      detail: 'Spacious room layouts',
      image: '/images/hero_living_sanctuary.png',
      tag: '03 / INTERIORS',
      subtitle: 'BRIGHT & SPACIOUS ROOMS',
      desc: 'Large open living rooms with floor-to-ceiling glass paneling, natural sunlight, dining island, and private family bedrooms.',
    },
    {
      id: 3,
      value: '15,000 SQ.FT',
      label: 'RESORT CLUBHOUSE',
      detail: 'Swimming pool & sports',
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
    <section id="overview" className="relative w-full flex flex-col justify-between bg-[#F4F0E7] text-[#111722] overflow-hidden border-b border-[#D5D0C6]">
      
      {/* 1. TOP HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 w-full px-6 sm:px-12 py-4 bg-[#F4F0E7]/95 backdrop-blur-md border-b border-[#D5D0C6]/60">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* BRAND LOGO */}
          <a href="#overview" onClick={(e) => handleScrollTo(e, '#overview')} className="flex items-center gap-3 group">
            <div className="w-7 h-7 bg-[#B18A4A] flex items-center justify-center rounded-lg shadow-xs">
              <span className="text-white font-bold text-xs tracking-widest">▲</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-wider text-[#111722] leading-tight group-hover:text-[#B18A4A] transition-colors">
                ANTELIA
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#B18A4A] uppercase">
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
                className="text-xs font-bold uppercase tracking-wider text-[#333D4E] hover:text-[#B18A4A] transition-colors py-1 relative group cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS: LOCATION & SCHEDULE VISIT */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={(e) => handleScrollTo(e, '#location')}
              className="px-4 py-2 rounded-full bg-[#EFECE6] border border-[#D5D0C6] text-[#111722] text-xs font-bold uppercase tracking-wider hover:bg-[#111722] hover:text-white transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#B18A4A]" />
              <span>LOCATION</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2 rounded-full border border-[#B18A4A] text-[#B18A4A] text-xs font-bold uppercase tracking-wider hover:bg-[#B18A4A] hover:text-white transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <span>SCHEDULE VISIT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MOBILE MENU TRIGGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#111722] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#B18A4A]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="relative z-40 xl:hidden bg-[#F4F0E7] border-b border-[#D5D0C6] px-6 py-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleScrollTo(e, link.href);
              }}
              className="text-xs font-bold uppercase tracking-wider text-[#111722] hover:text-[#B18A4A] py-2 border-b border-[#D5D0C6]/50 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleScrollTo(e, '#location');
            }}
            className="mt-2 w-full py-3 bg-[#EFECE6] border border-[#D5D0C6] text-[#111722] text-xs font-bold uppercase tracking-wider hover:bg-[#111722] hover:text-white transition-colors rounded-full text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B18A4A]" />
            <span>REAL LOCATION MAP</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 bg-[#B18A4A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#111722] transition-colors rounded-full cursor-pointer"
          >
            SCHEDULE VISIT
          </button>
        </div>
      )}

      {/* 2. MAIN HERO BODY — 100% LIGHT WARM IVORY LUXURY LAYOUT (ZERO BLACK THEME / ZERO DARK CARDS) */}
      <div className="relative w-full max-w-7xl mx-auto px-6 sm:px-12 py-8 sm:py-12 lg:py-16 bg-[#F4F0E7]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT 6 COLUMNS: CLEAN CRISP TYPOGRAPHY ON LIGHT WARM IVORY BACKGROUND */}
          <div className="lg:col-span-6 space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStat.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                {/* EYEBROW TAG */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C6527]">
                    — {activeStat.tag}
                  </span>
                </div>

                {/* GRAND TITLE */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111722] uppercase leading-[1.05]">
                  ANTELIA GROVES
                </h1>

                {/* SUBTITLE */}
                <h2 className="text-base sm:text-xl font-bold tracking-wider text-[#8C6527] uppercase">
                  {activeStat.subtitle}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm font-normal text-[#374151] leading-relaxed max-w-lg">
                  {activeStat.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA BUTTONS ROW */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={(e) => handleScrollTo(e, '#masterplan')}
                className="px-6 py-3 bg-[#B18A4A] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#111722] transition-all shadow-md group rounded-xl cursor-pointer"
              >
                <span>EXPLORE MASTERPLAN</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={(e) => handleScrollTo(e, '#location')}
                className="px-5 py-3 bg-[#EFECE6] text-[#111722] border border-[#D5D0C6] hover:bg-[#111722] hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-xs rounded-xl cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#B18A4A]" />
                <span>LOCATION MAP</span>
              </button>

              <button
                onClick={(e) => handleScrollTo(e, '#villas')}
                className="text-xs font-bold uppercase tracking-wider text-[#8C6527] hover:text-[#111722] transition-colors relative py-1 border-b border-[#8C6527] cursor-pointer"
              >
                3D VILLA TOUR →
              </button>
            </div>
          </div>

          {/* RIGHT 6 COLUMNS: ELEGANT ROTATING PHOTO SHOWCASE (LIGHT BORDER & SHADOW, NO BLACK OVERLAYS) */}
          <div className="lg:col-span-6 relative h-[300px] sm:h-[380px] lg:h-[440px] rounded-3xl overflow-hidden shadow-xl border border-[#D5D0C6] bg-[#EFECE6]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStat.image}
                src={activeStat.image}
                alt={activeStat.subtitle}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1.00 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* LIGHT TOP ROTATION BADGE */}
            <div className="absolute top-4 left-4 z-20 bg-[#F4F0E7]/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#D5D0C6] text-xs font-bold text-[#111722] shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B18A4A] animate-pulse" />
              <span>{activeStat.tag}</span>
            </div>

            {/* BOTTOM CAPTION BAR */}
            <div className="absolute bottom-0 inset-x-0 z-20 bg-[#F4F0E7]/95 backdrop-blur-md p-4 border-t border-[#D5D0C6] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#8C6527] block">
                  2.0S AUTOMATIC ROTATION
                </span>
                <h4 className="text-sm sm:text-base font-extrabold text-[#111722] leading-tight">
                  {activeStat.subtitle}
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. 4-STAT BAR (WARM IVORY BANNER AT BOTTOM AS IN IMAGE 2) */}
      <div className="relative z-30 w-full bg-[#F4F0E7] border-t border-[#D5D0C6] py-6 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-left">
          {quickStats.map((stat, idx) => {
            const isActive = idx === activeStatIndex;
            return (
              <button
                key={stat.label}
                onClick={() => setActiveStatIndex(idx)}
                className="text-left group focus:outline-none transition-all cursor-pointer"
              >
                <span className={`text-2xl sm:text-3xl xl:text-4xl font-extrabold block leading-none mb-2 transition-all ${
                  isActive ? 'text-[#8C6527] scale-105 origin-left' : 'text-[#8C6527]/75 group-hover:text-[#8C6527]'
                }`}>
                  {stat.value}
                </span>

                <span className="text-xs font-bold uppercase tracking-wider text-[#111722] block mb-0.5">
                  {stat.label}
                </span>

                <span className="text-xs font-normal text-[#4B5563] block">
                  {stat.detail}
                </span>

                <div className={`mt-3 h-[2px] transition-all duration-300 ${
                  isActive ? 'w-16 bg-[#8C6527]' : 'w-6 bg-transparent group-hover:w-10 group-hover:bg-[#8C6527]/40'
                }`} />
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}
