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
      tag: '01 / OVERVIEW',
      title: '10-ACRE GATED ESTATE',
      subtitle: 'INDEPENDENT 3 & 4 BHK LUXURY VILLAS',
      desc: 'An exclusive low-density enclave featuring 189 split-level independent villas surrounded by 70% open green corridors, tree-lined boulevards, and serene water features in Sarjapur-Whitefield Corridor, Bengaluru.',
    },
    {
      id: 1,
      value: '3 & 4 BHK',
      label: 'INDEPENDENT VILLAS',
      detail: 'Split-level private residences',
      image: '/images/hero_villa_facade.png',
      tag: '02 / VILLA ELEVATION',
      title: 'INDEPENDENT VILLAS',
      subtitle: 'SPLIT-LEVEL ARCHITECTURE & PRIVATE LAWNS',
      desc: 'Architecturally articulated 3 & 4 BHK residences with private 180 sq.ft backyard lawns, double-height ceilings, floor-to-ceiling glass, and private rooftop sky terraces.',
    },
    {
      id: 2,
      value: '2262–3000 SQ.FT.',
      label: 'BUA RANGE',
      detail: 'Articulated spatial layouts',
      image: '/images/hero_living_sanctuary.png',
      tag: '03 / INTERIORS',
      title: 'BRIGHT & SPACIOUS ROOMS',
      subtitle: 'FLOOR-TO-CEILING GLAZING & NATURAL SUNLIGHT',
      desc: 'Expansive open-plan living sanctuaries filled with natural sunlight, dining island kitchens, private family lounges, and peaceful master bedroom suites.',
    },
    {
      id: 3,
      value: '15,000+ SQ.FT.',
      label: 'SIGNATURE CLUBHOUSE',
      detail: '25m heated pool & wellness',
      image: '/images/hero_resort_clubhouse.png',
      tag: '04 / CLUBHOUSE & POOL',
      title: 'RESORT CLUBHOUSE',
      subtitle: '15,000+ SQ.FT. WELLNESS & LEISURE HUB',
      desc: 'A grand 15,000 sq.ft resort clubhouse featuring a crystal swimming pool, indoor sports courts, modern fitness centre, zen yoga deck, and executive guest suites.',
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
    <section id="overview" className="relative w-full flex flex-col justify-between bg-[#F8F7F2] text-[#202522] overflow-hidden border-b border-[#E4E5DF]">
      
      {/* 1. TOP HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 w-full px-6 sm:px-12 py-4 bg-[#F8F7F2]/95 backdrop-blur-md border-b border-[#E4E5DF]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <a href="#overview" onClick={(e) => handleScrollTo(e, '#overview')} className="flex items-center gap-3 group">
            <div className="w-7 h-7 bg-[#24483B] flex items-center justify-center rounded-md shadow-xs">
              <span className="text-white font-bold text-xs tracking-widest">▲</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-wider text-[#202522] leading-tight group-hover:text-[#24483B] transition-colors">
                ANTELIA
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#24483B] uppercase">
                GROVES
              </span>
            </div>
          </a>

          {/* CENTERED NAVIGATION LINKS */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors py-1 relative cursor-pointer ${
                  idx === 0 ? 'text-[#24483B] font-bold border-b-2 border-[#24483B]' : 'text-[#3A423E] hover:text-[#24483B]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={(e) => handleScrollTo(e, '#location')}
              className="px-4 py-2 rounded-md bg-[#FFFFFF] border border-[#E4E5DF] text-[#202522] text-xs font-semibold uppercase tracking-wider hover:border-[#24483B] hover:text-[#24483B] transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#24483B]" />
              <span>LOCATION</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2 rounded-md bg-[#24483B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1A342A] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <span>SCHEDULE VISIT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MOBILE MENU TRIGGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#202522] p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#24483B]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="relative z-40 xl:hidden bg-[#F8F7F2] border-b border-[#E4E5DF] px-6 py-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleScrollTo(e, link.href);
              }}
              className="text-xs font-semibold uppercase tracking-wider text-[#202522] hover:text-[#24483B] py-2 border-b border-[#E4E5DF] cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleScrollTo(e, '#location');
            }}
            className="mt-2 w-full py-3 bg-[#FFFFFF] border border-[#E4E5DF] text-[#202522] text-xs font-semibold uppercase tracking-wider hover:border-[#24483B] hover:text-[#24483B] transition-colors rounded-md text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#24483B]" />
            <span>LOCATION MAP</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 bg-[#24483B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1A342A] transition-colors rounded-md cursor-pointer"
          >
            SCHEDULE VISIT
          </button>
        </div>
      )}

      {/* 2. MAIN HERO BODY — REFINED TWO-COLUMN ARCHITECTURAL LAYOUT */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-12 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT 6 COLUMNS: SECTION LABEL, HEADLINE, DESCRIPTION & BUTTONS (STRICT LEFT-MARGIN ALIGNMENT) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStat.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-3.5 w-full text-left"
              >
                {/* BRAND EYEBROW & SECTION TAG */}
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#24483B]">
                    ANTELIA GROVES
                  </span>
                  <span className="text-xs text-[#8E958F] font-light">•</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#202522]">
                    {activeStat.tag}
                  </span>
                </div>

                {/* MAIN DYNAMIC SECTION TITLE */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#202522] uppercase leading-[1.05] text-left">
                  {activeStat.title}
                </h1>

                {/* ARCHITECTURAL SUBHEADER */}
                <h2 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-[#24483B] uppercase text-left">
                  {activeStat.subtitle}
                </h2>

                {/* POLISHED PROGRAM COPY */}
                <p className="text-xs sm:text-sm font-normal text-[#3A423E] leading-relaxed max-w-lg text-left">
                  {activeStat.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA BUTTONS & TEXT LINK (PERFECTLY ALIGNED ON THE LEFT MARGIN) */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full text-left">
              {/* PRIMARY CTA: DEEP FOREST GREEN WITH WHITE TEXT */}
              <button
                onClick={(e) => handleScrollTo(e, '#masterplan')}
                className="px-6 py-3.5 bg-[#24483B] hover:bg-[#1A342A] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-2xs rounded-md cursor-pointer"
              >
                <span>EXPLORE MASTERPLAN</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              {/* SECONDARY CTA: OUTLINED / WARM STONE */}
              <button
                onClick={(e) => handleScrollTo(e, '#location')}
                className="px-5 py-3.5 bg-[#FFFFFF] text-[#202522] border border-[#E4E5DF] hover:border-[#24483B] hover:text-[#24483B] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-2xs rounded-md cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#24483B]" />
                <span>LOCATION MAP</span>
              </button>

              {/* SIMPLE TEXT LINK */}
              <button
                onClick={(e) => handleScrollTo(e, '#villas')}
                className="text-xs font-semibold uppercase tracking-wider text-[#202522] hover:text-[#24483B] transition-colors relative py-1 border-b border-[#202522] hover:border-[#24483B] cursor-pointer ml-1"
              >
                3D VILLA TOUR →
              </button>
            </div>
          </div>

          {/* RIGHT 6 COLUMNS: LARGE REALISTIC ARCHITECTURAL VILLA IMAGE (CLEAN FRAME) */}
          <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[360px] lg:h-[440px] rounded-xl overflow-hidden shadow-xs border border-[#E4E5DF] bg-[#FFFFFF]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStat.image}
                src={activeStat.image}
                alt={activeStat.subtitle}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1.00 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* SMALL SECTION TAG */}
            <div className="absolute top-4 left-4 z-20 bg-[#F8F7F2]/95 backdrop-blur-xs px-3 py-1.5 rounded-md border border-[#E4E5DF] text-[11px] font-bold text-[#202522] shadow-2xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#24483B]" />
              <span>{activeStat.tag}</span>
            </div>

            {/* MINIMAL SUPPORTING INFO BAR */}
            <div className="absolute bottom-0 inset-x-0 z-20 bg-[#F8F7F2]/95 backdrop-blur-xs px-4 py-3 border-t border-[#E4E4DF] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#24483B] block">
                  2.0S AUTOMATIC ROTATION
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-[#202522] leading-tight">
                  {activeStat.subtitle}
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. STATISTICS SECTION (DEEP CHARCOAL NUMBERS, FOREST GREEN ACCENTS, WARM WHITE BG, SUBTLE DIVIDERS) */}
      <div className="relative z-30 w-full bg-[#F8F7F2] border-t border-[#E4E5DF] py-6 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {quickStats.map((stat, idx) => {
            const isActive = idx === activeStatIndex;
            return (
              <button
                key={stat.label}
                onClick={() => setActiveStatIndex(idx)}
                className={`text-left group focus:outline-none transition-all cursor-pointer p-2 rounded-md ${
                  idx < 3 ? 'lg:border-r lg:border-[#E4E5DF]' : ''
                }`}
              >
                {/* DEEP CHARCOAL NUMBER */}
                <span className={`text-2xl sm:text-3xl font-serif font-bold block leading-none mb-1.5 transition-all text-[#202522] ${
                  isActive ? 'scale-105 origin-left' : ''
                }`}>
                  {stat.value}
                </span>

                {/* FOREST GREEN ACCENT / LABEL */}
                <span className="text-xs font-bold uppercase tracking-wider text-[#24483B] block mb-0.5">
                  {stat.label}
                </span>

                {/* SMALLER REFINED SUBTEXT */}
                <span className="text-[11px] font-normal text-[#3A423E] block leading-tight">
                  {stat.detail}
                </span>

                {/* SUBTLE INDICATOR LINE */}
                <div className={`mt-2.5 h-[2px] transition-all duration-300 ${
                  isActive ? 'w-10 bg-[#24483B]' : 'w-3 bg-transparent group-hover:w-6 group-hover:bg-[#24483B]/40'
                }`} />
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}
