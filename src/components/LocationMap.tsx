'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Plane,
  Building2,
  Navigation,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  ExternalLink,
  Car,
  Clock,
  Map as MapIcon,
} from 'lucide-react';

interface LocationMapProps {
  onOpenBooking?: () => void;
}

export default function LocationMap({ onOpenBooking }: LocationMapProps) {
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'TRANSPORT' | 'IT' | 'SCHOOLS' | 'HOSPITALS' | 'SHOPPING'>('ALL');
  const [activeLandmarkIndex, setActiveLandmarkIndex] = useState<number>(0);
  const [mapMode, setMapMode] = useState<'SATELLITE' | 'ROAD' | 'RADIAL'>('SATELLITE');
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);

  const landmarks = [
    {
      id: 0,
      title: 'Kempegowda International Airport (BLR)',
      category: 'TRANSPORT',
      time: '25 MINS',
      distance: '28 KM',
      desc: 'Direct signal-free commute via Satellite Town Ring Road (STRR) / Airport Toll Expressway to BLR Airport terminals.',
      icon: Plane,
      symbol: '✈️',
      color: 'bg-orange-500/10 text-amber-700 border-amber-300',
      coords: { top: '20%', left: '80%' },
    },
    {
      id: 1,
      title: 'Whitefield & ITPL Tech Hub',
      category: 'IT',
      time: '12 MINS',
      distance: '9.5 KM',
      desc: 'Rapid commute to International Tech Park Bangalore (ITPB), EPIP Zone, and Outer Ring Road tech parks.',
      icon: Building2,
      symbol: '🏢',
      color: 'bg-orange-500/10 text-blue-700 border-blue-300',
      coords: { top: '35%', left: '55%' },
    },
    {
      id: 2,
      title: 'Outer Ring Road & STRR Expressway',
      category: 'TRANSPORT',
      time: '3 MINS',
      distance: '1.8 KM',
      desc: 'Immediate access to Bengaluru Outer Ring Road and Satellite Town Ring Road connecting all city hubs.',
      icon: Navigation,
      symbol: '🛣️',
      color: 'bg-orange-500/10 text-emerald-700 border-emerald-300',
      coords: { top: '48%', left: '42%' },
    },
    {
      id: 3,
      title: 'Top International Schools',
      category: 'SCHOOLS',
      time: '5 MINS',
      distance: '3.2 KM',
      desc: 'Indus International School, Greenwood High, TISB, and Inventure Academy within a short drive.',
      icon: GraduationCap,
      symbol: '🏫',
      color: 'bg-orange-500/10 text-purple-700 border-purple-300',
      coords: { top: '25%', left: '30%' },
    },
    {
      id: 4,
      title: 'Manipal & Sakra World Hospitals',
      category: 'HOSPITALS',
      time: '8 MINS',
      distance: '5.1 KM',
      desc: 'Manipal Hospital, Sakra World Hospital, and Aster CMI offering 24/7 advanced multi-specialty healthcare.',
      icon: HeartPulse,
      symbol: '🏥',
      color: 'bg-rose-500/10 text-rose-700 border-rose-300',
      coords: { top: '60%', left: '25%' },
    },
    {
      id: 5,
      title: 'Forum Mall & Phoenix Marketcity',
      category: 'SHOPPING',
      time: '10 MINS',
      distance: '7 KM',
      desc: 'Forum Mall, Phoenix Marketcity, Nexus Shantiniketan, theaters, and gourmet food courts.',
      icon: ShoppingBag,
      symbol: '🛍️',
      color: 'bg-teal-500/10 text-teal-700 border-teal-300',
      coords: { top: '30%', left: '70%' },
    },
  ];

  const filteredLandmarks = landmarks.filter(
    (item) => activeCategory === 'ALL' || item.category === activeCategory
  );

  // Automatic 2-second rotation through distance landmarks
  useEffect(() => {
    if (!isAutoCycling) return;
    const timer = setInterval(() => {
      setActiveLandmarkIndex((prev) => (prev + 1) % filteredLandmarks.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isAutoCycling, filteredLandmarks.length]);

  const activeLandmark = filteredLandmarks[activeLandmarkIndex] || landmarks[0];

  return (
    <section id="location" className="py-10 sm:py-8 bg-white text-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-[#F97316] block mb-2">
            04 / Bengaluru Location &amp; Connectivity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#0F172A] leading-tight tracking-tight mb-3">
            Prime Bengaluru Location <span className="text-[#F97316]">&amp; Fast Connectivity</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
            Antelia Groves is situated in a serene villa corridor in Bengaluru with quick signal-free access to Kempegowda International Airport, Whitefield IT parks, top international schools, and multi-specialty hospitals via Outer Ring Road.
          </p>
        </div>

        {/* CATEGORY FILTER PILL BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'ALL', label: 'ALL NEARBY (6)' },
            { id: 'TRANSPORT', label: '🛣️ STRR & BLR AIRPORT' },
            { id: 'IT', label: '🏢 WHITEFIELD IT HUBS' },
            { id: 'SCHOOLS', label: '🏫 SCHOOLS' },
            { id: 'HOSPITALS', label: '🏥 HOSPITALS' },
            { id: 'SHOPPING', label: '🛍️ SHOPPING MALLS' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id as any);
                setActiveLandmarkIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#F97316] text-white shadow-md'
                  : 'bg-slate-50 text-[#0F172A] hover:text-[#F97316] shadow-sm hover:shadow-md'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* MAIN 50/50 SPLIT: REAL BENGALURU MAP VISUALIZER ON LEFT + DISTANCE CARDS ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT 7 COLUMNS: REAL BENGALURU MAP SHOWCASE CANVAS */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-[32px] shadow-2xl relative">

            {/* MAP MODE SWITCHER TOP BAR */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-2">
              <div className="flex items-center gap-2">
                <MapIcon className="w-4 h-4 text-[#F97316]" />
                <span className="text-xs font-bold uppercase text-[#0F172A] tracking-wider">
                  REAL BENGALURU TOWNSHIP MAP
                </span>
              </div>

              <div className="flex items-center gap-1 bg-slate-50 p-1.5 rounded-full shadow-inner">
                <button
                  onClick={() => setMapMode('SATELLITE')}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase transition-all cursor-pointer ${
                    mapMode === 'SATELLITE' ? 'bg-[#F97316] text-white' : 'text-[#0F172A] hover:text-[#F97316]'
                  }`}
                >
                  SATELLITE
                </button>
                <button
                  onClick={() => setMapMode('ROAD')}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase transition-all cursor-pointer ${
                    mapMode === 'ROAD' ? 'bg-[#F97316] text-white' : 'text-[#0F172A] hover:text-[#F97316]'
                  }`}
                >
                  ROADWAYS
                </button>
                <button
                  onClick={() => setMapMode('RADIAL')}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase transition-all cursor-pointer ${
                    mapMode === 'RADIAL' ? 'bg-[#F97316] text-white' : 'text-[#0F172A] hover:text-[#F97316]'
                  }`}
                >
                  DISTANCE RADIAL
                </button>
              </div>
            </div>

            {/* INTERACTIVE REAL BENGALURU MAP VIEWPORT CONTAINER */}
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden bg-[#0F172A] shadow-inner">

              {/* REAL GOOGLE BENGALURU SATELLITE MAP IFRAME */}
              {mapMode === 'SATELLITE' && (
                <iframe
                  title="Antelia Groves Land Satellite Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15562.748720194857!2d77.7850!3d12.8645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae736181f08e45%3A0xb35a09c2a6327e57!2sSarjapur%2C%20Bengaluru%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter brightness-95 contrast-105"
                  loading="lazy"
                  allowFullScreen
                />
              )}

              {mapMode === 'ROAD' && (
                <iframe
                  title="Antelia Groves Roadways Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15562.748720194857!2d77.7850!3d12.8645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae736181f08e45%3A0xb35a09c2a6327e57!2sSarjapur%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              )}

              {mapMode === 'RADIAL' && (
                <div className="w-full h-full bg-[#0F172A] relative flex items-center justify-center overflow-hidden p-6">
                  {/* CONCENTRIC DISTANCE RADIAL CIRCLES */}
                  <div className="absolute w-[360px] h-[360px] rounded-full border border-[#F97316]/40 animate-pulse" />
                  <div className="absolute w-[260px] h-[260px] rounded-full border border-[#F97316]/50" />
                  <div className="absolute w-[160px] h-[160px] rounded-full border border-[#F97316]/70" />

                  {/* RADIAL LABELS */}
                  <span className="absolute text-[10px] font-bold text-white top-6 bg-[#F97316] px-2.5 py-1 rounded-full">28 KM RADIAL — BLR AIRPORT &amp; CITY</span>
                  <span className="absolute text-[10px] font-bold text-white top-16 bg-[#F97316] px-2.5 py-1 rounded-full">10 KM RADIAL — WHITEFIELD IT HUBS</span>
                  <span className="absolute text-[10px] font-bold text-white top-28 bg-[#F97316] px-2.5 py-1 rounded-full">3 KM RADIAL — SCHOOLS &amp; HOSPITALS</span>

                  {/* LANDMARK SYMBOL PINS ON RADIAL */}
                  {landmarks.map((lm) => {
                    const isSelected = activeLandmark.id === lm.id;
                    return (
                      <div
                        key={lm.id}
                        style={{ top: lm.coords.top, left: lm.coords.left }}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                          isSelected ? 'scale-125 z-30' : 'scale-100 opacity-80 z-10'
                        }`}
                        onClick={() => {
                          setActiveLandmarkIndex(landmarks.findIndex((l) => l.id === lm.id));
                          setIsAutoCycling(false);
                        }}
                      >
                        <div className={`p-2 rounded-full border shadow-lg flex items-center gap-1 font-bold text-xs ${lm.color}`}>
                          <span>{lm.symbol}</span>
                          <span className="hidden sm:inline text-[10px]">{lm.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* OVERLAY TOWNSHIP PIN CARD */}
              <div className="absolute top-5 left-5 z-20 bg-white/95 backdrop-blur-md text-[#0F172A] p-4 rounded-2xl shadow-xl max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F97316] animate-ping" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#F97316]">
                    10-ACRE TOWNSHIP SITE
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-[#0F172A] flex items-center gap-1.5 uppercase">
                  <MapPin className="w-4 h-4 text-[#F97316]" />
                  <span>ANTELIA GROVES</span>
                </h4>
                <p className="text-[11px] text-[#475569] mt-1 leading-snug">
                  Sarjapur Villa Corridor, Bengaluru
                </p>
              </div>

              {/* ACTIVE LANDMARK FLOATING HIGHLIGHT PIN */}
              <div className="absolute bottom-5 right-5 z-20 bg-white/95 backdrop-blur-md text-[#0F172A] p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#F97316] text-white flex items-center justify-center text-base font-bold">
                  {activeLandmark.symbol}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#F97316] block">
                    HIGHLIGHTED DESTINATION
                  </span>
                  <span className="text-xs font-bold text-[#0F172A]">
                    {activeLandmark.title} ({activeLandmark.time})
                  </span>
                </div>
              </div>

            </div>

            {/* LIVE DIRECTION LINK BUTTON */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 p-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#475569]">
                <Car className="w-4 h-4 text-[#F97316]" />
                <span>GPS: 12.8645° N, 77.7850° E</span>
              </div>
              <a
                href="https://maps.google.com/?q=Sarjapur+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#F97316] text-white hover:bg-[#1D4ED8] text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* RIGHT 5 COLUMNS: AUTO-ROTATING DISTANCE & LANDMARK CARDS */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F97316]">
                KEY BENGALURU DISTANCES (2.0S ROTATION)
              </span>
              <button
                onClick={() => setIsAutoCycling(!isAutoCycling)}
                className="text-[11px] font-semibold text-[#475569] hover:text-[#F97316] underline cursor-pointer"
              >
                {isAutoCycling ? 'Pause Rotation' : 'Resume Rotation'}
              </button>
            </div>

            {filteredLandmarks.map((lm, idx) => {
              const isActive = activeLandmarkIndex === idx;

              return (
                <div
                  key={lm.id}
                  onClick={() => {
                    setActiveLandmarkIndex(idx);
                    setIsAutoCycling(false);
                  }}
                  className={`p-5 rounded-2xl transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#F97316] text-white shadow-xl transform translate-x-1'
                      : 'bg-white text-[#0F172A] shadow-sm hover:shadow-md hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center text-base font-bold transition-all ${
                          isActive
                            ? 'bg-white text-[#F97316]'
                            : 'bg-slate-100 text-[#0F172A] border border-slate-200'
                        }`}
                      >
                        <span>{lm.symbol}</span>
                      </div>
                      <div>
                        <h4
                          className={`text-sm font-extrabold uppercase transition-colors ${
                            isActive ? 'text-white' : 'text-[#0F172A]'
                          }`}
                        >
                          {lm.title}
                        </h4>
                        <span
                          className={`text-[11px] font-medium block mt-0.5 ${
                            isActive ? 'text-white/90' : 'text-slate-500'
                          }`}
                        >
                          Distance: {lm.distance}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 whitespace-nowrap ${
                        isActive
                          ? 'bg-white text-[#F97316]'
                          : 'bg-slate-100 text-[#0F172A] border border-slate-200'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{lm.time}</span>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 pt-3 border-t border-white/20 text-xs text-white/90 font-normal leading-relaxed"
                    >
                      {lm.desc}
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* CALL TO ACTION BOX */}
            <div className="bg-white p-4 rounded-xl border border-slate-200 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
              <div>
                <span className="text-xs font-bold text-[#0F172A] block uppercase">
                  WANT A PERSONALIZED BENGALURU SITE TOUR?
                </span>
                <span className="text-[11px] text-[#475569] block">
                  Book a free site visit with pick-up facility.
                </span>
              </div>
              {onOpenBooking && (
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs whitespace-nowrap cursor-pointer"
                >
                  BOOK SITE VISIT
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
