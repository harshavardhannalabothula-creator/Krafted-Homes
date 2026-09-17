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
    <section id="overview" className="relative w-full flex flex-col justify-between bg-white text-[#0F172A] overflow-hidden border-b border-[#E2E8F0]">
      
      {/* 1. TOP HEADER NAVIGATION (CLEAN WHITE NAVBAR WITH PILL BUTTONS) */}
      <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <a href="#overview" onClick={(e) => handleScrollTo(e, '#overview')} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-[#2563EB] flex items-center justify-center rounded-xl shadow-xs">
              <span className="text-white font-bold text-xs tracking-widest">▲</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-extrabold tracking-wider text-[#0F172A] leading-tight group-hover:text-[#2563EB] transition-colors">
                ANTELIA
              </span>
              <span className="text-[9px] font-bold tracking-widest text-[#2563EB] uppercase">
                GROVES
              </span>
            </div>
          </a>

          {/* CENTERED NAVIGATION LINKS */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors py-1 relative cursor-pointer ${
                  idx === 0 ? 'text-[#2563EB] font-bold border-b-2 border-[#2563EB]' : 'text-[#475569] hover:text-[#2563EB]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS (PILL STYLING LIKE REFERENCE SITE) */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={(e) => handleScrollTo(e, '#location')}
              className="px-4 py-2 rounded-full bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A] text-xs font-semibold uppercase tracking-wider hover:bg-[#E2E8F0] hover:text-[#2563EB] transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>LOCATION</span>
            </button>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2 rounded-full bg-[#2563EB] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <span>SCHEDULE VISIT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MOBILE MENU TRIGGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#0F172A] p-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#2563EB]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="relative z-40 xl:hidden bg-white border-b border-[#E2E8F0] px-6 py-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleScrollTo(e, link.href);
              }}
              className="text-xs font-semibold uppercase tracking-wider text-[#0F172A] hover:text-[#2563EB] py-2 border-b border-[#E2E8F0] cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleScrollTo(e, '#location');
            }}
            className="mt-2 w-full py-3 bg-[#F1F5F9] border border-[#E2E8F0] text-[#0F172A] text-xs font-semibold uppercase tracking-wider hover:text-[#2563EB] transition-colors rounded-full text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>LOCATION MAP</span>
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3 bg-[#2563EB] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors rounded-full cursor-pointer"
          >
            SCHEDULE VISIT
          </button>
        </div>
      )}

      {/* 2. MAIN HERO BODY — CLEAN MODERN LAYOUT MATCHING REFERENCE DESIGN */}
      <div className="relative z-20 max-w-6xl mx-auto w-full px-6 sm:px-8 py-8 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT 6 COLUMNS: BADGE, HEADLINE, DESCRIPTION & PILL BUTTONS */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStat.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-3 w-full text-left"
              >
                {/* PILL TAG BADGE LIKE REFERENCE SITE */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
                  <span>ANTELIA GROVES</span>
                  <span className="text-slate-300">•</span>
                  <span>{activeStat.tag}</span>
                </div>

                {/* MAIN HEADLINE */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] uppercase leading-[1.08] text-left max-w-lg">
                  {activeStat.title}
                </h1>

                {/* SUBHEADER */}
                <h2 className="text-xs sm:text-sm font-bold tracking-[0.15em] text-[#2563EB] uppercase text-left">
                  {activeStat.subtitle}
                </h2>

                {/* POLISHED DESCRIPTION */}
                <p className="text-xs sm:text-sm font-normal text-[#475569] leading-relaxed max-w-lg text-left">
                  {activeStat.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA BUTTONS (PILL STYLING LIKE REFERENCE DESIGN) */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full text-left">
              {/* PRIMARY BLUE PILL BUTTON */}
              <button
                onClick={(e) => handleScrollTo(e, '#masterplan')}
                className="px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm rounded-full cursor-pointer"
              >
                <span>EXPLORE MASTERPLAN</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              {/* SECONDARY VIBRANT ORANGE PILL BUTTON (LIKE REFERENCE SITE CTA) */}
              <button
                onClick={(e) => handleScrollTo(e, '#location')}
                className="px-5 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-sm rounded-full cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-white" />
                <span>LOCATION MAP</span>
              </button>

              {/* OUTLINED PILL LINK */}
              <button
                onClick={(e) => handleScrollTo(e, '#villas')}
                className="px-4 py-3.5 bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] text-xs font-semibold uppercase tracking-wider transition-all rounded-full cursor-pointer"
              >
                3D VILLA TOUR →
              </button>
            </div>
          </div>

          {/* RIGHT 6 COLUMNS: CRISP HD SHOWCASE CARD (ROUNDED-3XL WITH FLOATING BADGES) */}
          <div className="lg:col-span-6 relative w-full h-[280px] sm:h-[340px] lg:h-[400px] rounded-3xl overflow-hidden shadow-md border border-[#E2E8F0] bg-white p-2">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
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

              {/* TOP FLOATING PILL BADGE */}
              <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E2E8F0] text-xs font-bold text-[#0F172A] shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>{activeStat.tag}</span>
              </div>

              {/* MINIMAL BOTTOM INFO BAR */}
              <div className="absolute bottom-3 inset-x-3 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] block">
                    2.0S AUTOMATIC ROTATION
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">
                    {activeStat.subtitle}
                  </h4>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. STATISTICS SECTION (CLEAN WHITE CARDS WITH SLATE DIVIDERS & BLUE ACCENTS) */}
      <div className="relative z-30 w-full bg-[#F8FAFC] border-t border-[#E2E8F0] py-6 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {quickStats.map((stat, idx) => {
            const isActive = idx === activeStatIndex;
            return (
              <button
                key={stat.label}
                onClick={() => setActiveStatIndex(idx)}
                className={`text-left group focus:outline-none transition-all cursor-pointer p-4 rounded-2xl border ${
                  isActive
                    ? 'bg-white border-[#2563EB] shadow-md transform -translate-y-0.5'
                    : 'bg-white/80 border-[#E2E8F0] hover:border-slate-300 hover:bg-white'
                }`}
              >
                {/* NUMBER */}
                <span className={`text-2xl sm:text-3xl font-extrabold block leading-none mb-1.5 transition-all text-[#0F172A] ${
                  isActive ? 'scale-105 origin-left text-[#2563EB]' : ''
                }`}>
                  {stat.value}
                </span>

                {/* ACCENT / LABEL */}
                <span className="text-xs font-bold uppercase tracking-wider text-[#2563EB] block mb-0.5">
                  {stat.label}
                </span>

                {/* REFINED SUBTEXT */}
                <span className="text-[11px] font-normal text-[#64748B] block leading-tight">
                  {stat.detail}
                </span>

                {/* INDICATOR LINE */}
                <div className={`mt-2.5 h-[2.5px] rounded-full transition-all duration-300 ${
                  isActive ? 'w-10 bg-[#2563EB]' : 'w-3 bg-transparent group-hover:w-6 group-hover:bg-[#2563EB]/40'
                }`} />
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}
