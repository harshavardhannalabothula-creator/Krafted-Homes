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

      {/* 2. MAIN HERO BODY — EXACT MATCH TO REFERENCE UI LAYOUT */}
      <div className="relative z-20 max-w-6xl mx-auto w-full px-6 sm:px-8 py-8 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT 6 COLUMNS: BADGE, DUAL-TONE HEADLINE, FEATURE BULLETS & FLOATING SEARCH BAR */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-5">
            
            {/* PILL TAG BADGE LIKE REFERENCE SITE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
              <span>✦ PREMIUM LUXURY VILLAS &amp; TOWNSHIP</span>
            </div>

            {/* DUAL-TONE MAIN HEADLINE (ORANGE HIGHLIGHT LIKE REFERENCE SITE) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.08] text-left max-w-lg">
              Your Dream Villa <br />
              <span className="text-[#F97316]">Is Waiting</span>
            </h1>

            {/* SUBTITLE DESCRIPTION */}
            <p className="text-xs sm:text-sm font-normal text-[#475569] leading-relaxed max-w-lg text-left">
              Exclusive 3 &amp; 4 BHK independent luxury villas set inside a 10-acre green gated community in Whitefield-Sarjapur Villa Corridor, Bengaluru. Designed for fresh air, private lawns, and quiet living.
            </p>

            {/* QUICK FEATURE BULLET BADGES (LIKE REFERENCE DESIGN) */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#0F172A]">
                <span className="text-[#2563EB]">✓</span>
                <span>10-Acre Gated Estate</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#0F172A]">
                <span className="text-[#2563EB]">✓</span>
                <span>Split-Level Design</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold text-[#0F172A]">
                <span className="text-[#2563EB]">✓</span>
                <span>24/7 Gated Security</span>
              </div>
            </div>

            {/* FLOATING SEARCH & VILLA SELECTOR BAR (EXACT MATCH TO REFERENCE BAR) */}
            <div className="w-full bg-white p-3 rounded-2xl border border-[#E2E8F0] shadow-md flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1 px-3 py-1 border-r border-[#E2E8F0]">
                <span className="text-[10px] font-bold text-[#64748B] uppercase block">Location</span>
                <span className="text-xs font-bold text-[#0F172A] block">Sarjapur-Whitefield, BLR</span>
              </div>

              <div className="flex-1 px-3 py-1 border-r border-[#E2E8F0]">
                <span className="text-[10px] font-bold text-[#64748B] uppercase block">Villa Size</span>
                <span className="text-xs font-bold text-[#0F172A] block">3 &amp; 4 BHK (2262-3000 Sq.Ft)</span>
              </div>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm rounded-full cursor-pointer whitespace-nowrap"
              >
                Search Villas
              </button>
            </div>

          </div>

          {/* RIGHT 6 COLUMNS: ULTRA-HIGH QUALITY VILLA SHOWCASE (WITH ARCH BACKDROP & HANDWRITTEN ACCENT) */}
          <div className="lg:col-span-6 relative">
            {/* HANDWRITTEN TEXT OVERLAY LIKE REFERENCE DESIGN */}
            <div className="font-handwritten text-2xl sm:text-3xl text-[#2563EB] -rotate-6 absolute -top-5 right-6 z-30 pointer-events-none drop-shadow-xs font-bold">
              Better Living, Bigger Luxury
            </div>

            {/* ARCH CONTAINER BACKDROP */}
            <div className="w-full h-[320px] sm:h-[380px] lg:h-[440px] rounded-[2.5rem] bg-gradient-to-tr from-[#EFF6FF] via-[#F8FAFC] to-[#FFF7ED] p-3 border border-[#E2E8F0] shadow-md relative overflow-hidden flex items-center justify-center">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
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
                <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#E2E8F0] text-xs font-bold text-[#0F172A] shadow-xs flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                  <span>{activeStat.tag}</span>
                </div>

                {/* BOTTOM FLOATING CAPTION BAR */}
                <div className="absolute bottom-3 inset-x-3 z-20 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#E2E8F0] shadow-xs flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] block">
                      2.0S AUTOMATIC ROTATION
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] leading-tight">
                      {activeStat.subtitle}
                    </h4>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="px-3.5 py-1.5 rounded-full bg-[#2563EB] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors cursor-pointer"
                  >
                    View Villa
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 3. FEATURED VILLAS ROW ("Explore Our Featured Villas" LIKE REFERENCE SITE) */}
      <div className="relative z-30 w-full bg-[#F8FAFC] border-t border-[#E2E8F0] py-10 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          
          {/* SECTION TITLE WITH ORANGE INDICATOR BAR */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-6 bg-[#F97316] rounded-full" />
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight uppercase">
                Explore Our Featured Villas
              </h3>
            </div>

            <button
              onClick={(e) => handleScrollTo(e, '#villas')}
              className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] uppercase tracking-wider cursor-pointer flex items-center gap-1"
            >
              <span>View All Villas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4-COLUMN HIGH-QUALITY VILLA CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                id: 1,
                title: 'Type A East Facing Villa',
                bua: '2,400 SQ.FT • 3 BHK',
                price: '₹1.85 Cr* Onwards',
                image: '/images/hero_villa_facade.png',
                badge: 'EAST FACING',
              },
              {
                id: 2,
                title: 'Type B West Facing Villa',
                bua: '2,400 SQ.FT • 3 BHK',
                price: '₹1.95 Cr* Onwards',
                image: '/images/daylight_estate.jpg',
                badge: 'WEST FACING',
              },
              {
                id: 3,
                title: 'Signature Garden Sanctuary',
                bua: '3,000 SQ.FT • 4 BHK',
                price: '₹2.45 Cr* Onwards',
                image: '/images/private_garden_sanctuary.jpg',
                badge: 'PRIVATE LAWN',
              },
              {
                id: 4,
                title: 'Resort Pool Clubhouse Villa',
                bua: '3,000 SQ.FT • 4 BHK',
                price: '₹2.75 Cr* Onwards',
                image: '/images/hero_resort_clubhouse.png',
                badge: 'POOL SIDE',
              },
            ].map((v) => (
              <div
                key={v.id}
                onClick={onOpenBooking}
                className="bg-white rounded-2xl p-3 border border-[#E2E8F0] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="relative h-44 rounded-xl overflow-hidden mb-3 bg-[#0F172A]">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#E2E8F0] text-[10px] font-bold text-[#0F172A] shadow-2xs">
                    {v.badge}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-extrabold text-[#0F172A] leading-snug mb-1 group-hover:text-[#2563EB] transition-colors">
                    {v.title}
                  </h4>
                  <span className="text-[11px] font-semibold text-[#64748B] block mb-2">
                    {v.bua}
                  </span>
                  <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-2 mt-2">
                    <span className="text-xs font-extrabold text-[#F97316]">
                      {v.price}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] text-[10px] font-bold uppercase hover:bg-[#2563EB] hover:text-white transition-colors">
                      View Villa
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
