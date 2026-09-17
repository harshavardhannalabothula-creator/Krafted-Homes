'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, MapPin, Search, Calendar, Home as HomeIcon, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SunsetArchitecturalHeroProps {
  onOpenBooking: () => void;
}

export default function SunsetArchitecturalHero({ onOpenBooking }: SunsetArchitecturalHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStatIndex, setActiveStatIndex] = useState(0);

  const navLinks = [
    { label: 'HOME', href: '#overview' },
    { label: 'VILLAS', href: '#villas' },
    { label: 'MASTERPLAN', href: '#masterplan' },
    { label: 'LOCATION', href: '#location' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const quickStats = [
    {
      id: 0,
      image: '/images/hero_villa_facade.png',
      tag: '01 / ELEVATION',
      subtitle: 'Modern 3-Floor Villa Facade & Private Lawn',
    },
    {
      id: 1,
      image: '/images/hero_main_aerial.png',
      tag: '02 / MASTERPLAN',
      subtitle: '10-Acre Gated Township Estate',
    },
    {
      id: 2,
      image: '/images/hero_living_sanctuary.png',
      tag: '03 / INTERIORS',
      subtitle: 'High Ceilings & Floor-to-Ceiling Glazing',
    },
    {
      id: 3,
      image: '/images/hero_resort_clubhouse.png',
      tag: '04 / CLUBHOUSE',
      subtitle: '15,000 Sq.Ft Resort Pool & Amenities',
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
      
      {/* 1. TOP HEADER NAVIGATION (CLEAN WHITE NAVBAR WITH LOGO, NAV LINKS, SEARCH & BOOK NOW BUTTON) */}
      <header className="sticky top-0 z-50 w-full px-4 sm:px-8 py-3 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <a href="#overview" onClick={(e) => handleScrollTo(e, '#overview')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-tr from-[#2563EB] to-[#1D4ED8] flex items-center justify-center rounded-xl shadow-xs">
              <span className="text-white font-extrabold text-base tracking-widest">K</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#0F172A] leading-tight group-hover:text-[#2563EB] transition-colors uppercase">
                KraftedHomes.com
              </span>
              <span className="text-[10px] font-bold tracking-widest text-[#F97316] uppercase">
                Live Your Luxury
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
                className={`text-xs font-bold uppercase tracking-wider transition-colors py-1 relative cursor-pointer ${
                  idx === 0 ? 'text-[#0F172A] font-extrabold border-b-2 border-[#F97316]' : 'text-[#64748B] hover:text-[#2563EB]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden xl:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="p-2.5 rounded-full hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* MOBILE MENU TRIGGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-[#0F172A] p-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#2563EB]" /> : <Menu className="w-6 h-6" />}
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
              className="text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#2563EB] py-2 border-b border-[#E2E8F0] cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="mt-2 w-full py-3 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-full cursor-pointer text-center"
          >
            Book Now
          </button>
        </div>
      )}

      {/* 2. MAIN HERO BODY — EXACT MATCH TO REFERENCE SCREENSHOT LAYOUT */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 sm:px-10 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT 6 COLUMNS: TAG BADGE, DUAL-TONE HEADLINE, SUBTITLE, 3 CIRCULAR FEATURE HIGHLIGHTS */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* PILL TAG BADGE (EXACT MATCH TO REFERENCE BADGE) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#F97316]" />
              <span>✦ Premium Villa Sales &amp; Living</span>
            </div>

            {/* DUAL-TONE MAIN HEADLINE */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.05] text-left">
              Your Next Villa <br />
              <span className="text-[#F97316]">Is Waiting</span>
            </h1>

            {/* SUBTITLE DESCRIPTION */}
            <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed max-w-xl text-left">
              Buy your dream villa with KraftedHomes.com — premium 3 &amp; 4 BHK independent residences, 10-acre gated estate, private backyard gardens, and 15,000 sq.ft resort clubhouse.
            </p>

            {/* 3 FEATURE HIGHLIGHTS ROW WITH CIRCULAR ORANGE ICONS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-2">
              
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#0F172A] uppercase leading-tight">Wide Selection</h4>
                  <span className="text-[10px] text-slate-500 font-medium block">3 &amp; 4 BHK Villa Models</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#0F172A] uppercase leading-tight">Easy Booking</h4>
                  <span className="text-[10px] text-slate-500 font-medium block">Quick &amp; simple process</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F97316] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-xs">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#0F172A] uppercase leading-tight">24/7 Support</h4>
                  <span className="text-[10px] text-slate-500 font-medium block">Always here for you</span>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT 6 COLUMNS: HALF SCREEN IMAGE AREA WITH SIGNATURE CURVE SHAPE ARCH CUTOUT & HANDWRITTEN OVERLAY */}
          <div className="lg:col-span-6 relative">
            
            {/* PLAYFUL HANDWRITTEN CURSIVE SCRIPT TEXT OVERLAY */}
            <div 
              style={{ fontFamily: "'Caveat', 'Dancing Script', 'Brush Script MT', cursive" }} 
              className="text-3xl sm:text-4xl text-[#0F172A] font-bold -rotate-6 absolute -top-8 right-8 z-30 pointer-events-none drop-shadow-sm select-none"
            >
              Better Living, <br />
              <span className="text-[#2563EB] pl-4">Bigger Luxury</span>
            </div>

            {/* CURVED ARCH IMAGE CONTAINER (WITH SVG ARCH SHAPE ON LEFT EDGE) */}
            <div className="relative w-full h-[360px] sm:h-[440px] lg:h-[480px] rounded-[3rem] overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              
              {/* IMAGE SLIDESHOW */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStat.image}
                  src={activeStat.image}
                  alt={activeStat.subtitle}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1.00 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* SIGNATURE CURVED ARCH OVERLAY CUTOUT (MATCHING REFERENCE IMAGE) */}
              <svg 
                className="absolute top-0 left-0 h-full w-28 text-white z-20 pointer-events-none hidden sm:block" 
                viewBox="0 0 100 400" 
                preserveAspectRatio="none" 
                fill="currentColor"
              >
                <path d="M0,0 L100,0 C30,80 10,200 80,320 L100,400 L0,400 Z" />
              </svg>

              {/* TOP FLOATING TAG BADGE */}
              <div className="absolute top-5 right-5 z-30 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-[#0F172A] shadow-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F97316] animate-pulse" />
                <span>{activeStat.tag}</span>
              </div>

              {/* BOTTOM FLOATING CAPTION BAR */}
              <div className="absolute bottom-4 inset-x-4 z-30 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-md flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] block">
                    ANTELIA GROVES TOWNSHIP
                  </span>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-tight">
                    {activeStat.subtitle}
                  </h4>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-full bg-[#F97316] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#EA580C] transition-colors cursor-pointer whitespace-nowrap shadow-xs"
                >
                  View Details
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* 3. FLOATING HORIZONTAL SEARCH & VILLA SELECTOR BAR (EXACT MATCH TO REFERENCE BAR) */}
        <div className="mt-10 w-full bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-xl flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          <div className="flex-1 flex items-center gap-3 px-3 py-1 border-b lg:border-b-0 lg:border-r border-slate-200">
            <MapPin className="w-5 h-5 text-[#F97316] shrink-0" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Pick-up Location</span>
              <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] block">Sarjapur, Bengaluru</span>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 px-3 py-1 border-b lg:border-b-0 lg:border-r border-slate-200">
            <HomeIcon className="w-5 h-5 text-[#F97316] shrink-0" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Villa Configuration</span>
              <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] block">3 &amp; 4 BHK Independent</span>
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 px-3 py-1 border-b lg:border-b-0 lg:border-r border-slate-200">
            <Calendar className="w-5 h-5 text-[#F97316] shrink-0" />
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Select Date</span>
              <span className="text-xs sm:text-sm font-extrabold text-[#0F172A] block">Schedule Site Visit</span>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md rounded-full cursor-pointer whitespace-nowrap"
          >
            Search Villas
          </button>

        </div>

      </div>

      {/* 4. FEATURED VILLAS ROW ("Explore Our Featured Villas" LIKE REFERENCE SITE) */}
      <div className="relative z-30 w-full bg-slate-50 border-t border-slate-200 py-12 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* SECTION TITLE WITH ORANGE INDICATOR BAR */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-7 bg-[#F97316] rounded-full" />
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight uppercase">
                Explore Our Featured Villas
              </h3>
            </div>

            <button
              onClick={(e) => handleScrollTo(e, '#villas')}
              className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] uppercase tracking-wider cursor-pointer flex items-center gap-1.5"
            >
              <span>View All Villas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 4-COLUMN HIGH-QUALITY VILLA CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                price: '₹3,000 SQ.FT • 4 BHK',
                priceVal: '₹2.75 Cr* Onwards',
                image: '/images/hero_resort_clubhouse.png',
                badge: 'POOL SIDE',
              },
            ].map((v) => (
              <div
                key={v.id}
                onClick={onOpenBooking}
                className="bg-white rounded-3xl p-3.5 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="relative h-48 rounded-2xl overflow-hidden mb-3 bg-slate-900">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200 text-[10px] font-bold text-[#0F172A] shadow-xs">
                    {v.badge}
                  </div>
                </div>

                <div className="p-1">
                  <h4 className="text-base font-extrabold text-[#0F172A] leading-snug mb-1 group-hover:text-[#2563EB] transition-colors">
                    {v.title}
                  </h4>
                  <span className="text-xs font-semibold text-slate-500 block mb-3">
                    {v.bua}
                  </span>
                  <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                    <span className="text-xs font-extrabold text-[#F97316]">
                      {v.priceVal || v.price}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-full bg-blue-50 text-[#2563EB] text-[10px] font-bold uppercase hover:bg-[#2563EB] hover:text-white transition-colors">
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
