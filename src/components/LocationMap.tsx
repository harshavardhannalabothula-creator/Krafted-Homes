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
      color: 'bg-amber-500/10 text-amber-700 border-amber-300',
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
      color: 'bg-blue-500/10 text-blue-700 border-blue-300',
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
      color: 'bg-emerald-500/10 text-emerald-700 border-emerald-300',
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
      color: 'bg-purple-500/10 text-purple-700 border-purple-300',
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

  // Automatic 1.5-second rotation through distance landmarks
  useEffect(() => {
    if (!isAutoCycling) return;
    const timer = setInterval(() => {
      setActiveLandmarkIndex((prev) => (prev + 1) % filteredLandmarks.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [isAutoCycling, filteredLandmarks.length]);

  const activeLandmark = filteredLandmarks[activeLandmarkIndex] || landmarks[0];

  return (
    <section id="location" className="py-20 sm:py-24 bg-[#F4F0E7] text-[#111722] relative overflow-hidden border-b border-[#D5D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#B18A4A] block mb-2">
            04 — BENGALURU LOCATION &amp; CONNECTIVITY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111722] mb-3 tracking-tight leading-tight">
            PRIME BENGALURU LOCATION <span className="text-[#B18A4A]">&amp; FAST CONNECTIVITY</span>
          </h2>
          <p className="text-sm text-[#374151] font-normal leading-relaxed">
            Antelia Groves is situated in a serene green villa zone in Bengaluru with quick signal-free access to Kempegowda International Airport, Whitefield IT parks, top international schools, and multi-specialty hospitals via Outer Ring Road.
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
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-[#111722] text-white shadow-sm'
                  : 'bg-[#EFECE6] text-[#111722] hover:bg-[#DED8CC] border border-[#D5D0C6]'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* MAIN 50/50 SPLIT: REAL BENGALURU MAP VISUALIZER ON LEFT + DISTANCE CARDS ON RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT 7 COLUMNS: REAL BENGALURU MAP SHOWCASE CANVAS */}
          <div className="lg:col-span-7 bg-[#EFECE6] p-4 sm:p-6 rounded-3xl border border-[#D5D0C6] shadow-sm relative">

            {/* MAP MODE SWITCHER TOP BAR */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-[#D5D0C6]">
              <div className="flex items-center gap-2">
                <MapIcon className="w-4 h-4 text-[#B18A4A]" />
                <span className="text-xs font-bold uppercase text-[#111722] tracking-wider">
                  REAL BENGALURU TOWNSHIP MAP
                </span>
              </div>

              <div className="flex items-center gap-1 bg-[#F4F0E7] p-1 rounded-xl border border-[#D5D0C6]">
                <button
                  onClick={() => setMapMode('SATELLITE')}
                  className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    mapMode === 'SATELLITE' ? 'bg-[#111722] text-white' : 'text-[#374151] hover:text-[#111722]'
                  }`}
                >
                  SATELLITE
                </button>
                <button
                  onClick={() => setMapMode('ROAD')}
                  className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    mapMode === 'ROAD' ? 'bg-[#111722] text-white' : 'text-[#374151] hover:text-[#111722]'
                  }`}
                >
                  ROADWAYS
                </button>
                <button
                  onClick={() => setMapMode('RADIAL')}
                  className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                    mapMode === 'RADIAL' ? 'bg-[#111722] text-white' : 'text-[#374151] hover:text-[#111722]'
                  }`}
                >
                  DISTANCE RADIAL
                </button>
              </div>
            </div>

            {/* INTERACTIVE REAL BENGALURU MAP VIEWPORT CONTAINER */}
            <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden border border-[#D5D0C6] shadow-inner bg-[#1e293b]">

              {/* REAL GOOGLE BENGALURU SATELLITE MAP IFRAME (GREEN OPEN LAND SITE) */}
              {mapMode === 'SATELLITE' && (
                <iframe
                  title="Antelia Groves Green Open Land Satellite Map"
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
                <div className="w-full h-full bg-[#111722] relative flex items-center justify-center overflow-hidden p-6">
                  {/* CONCENTRIC DISTANCE RADIAL CIRCLES */}
                  <div className="absolute w-[360px] h-[360px] rounded-full border border-[#B18A4A]/20 animate-pulse" />
                  <div className="absolute w-[260px] h-[260px] rounded-full border border-[#B18A4A]/30" />
                  <div className="absolute w-[160px] h-[160px] rounded-full border border-[#B18A4A]/50" />

                  {/* RADIAL LABELS */}
                  <span className="absolute text-[10px] font-bold text-[#B18A4A] top-6">28 KM RADIAL — BLR AIRPORT &amp; CITY</span>
                  <span className="absolute text-[10px] font-bold text-[#B18A4A] top-16">10 KM RADIAL — WHITEFIELD IT HUBS</span>
                  <span className="absolute text-[10px] font-bold text-[#B18A4A] top-28">3 KM RADIAL — SCHOOLS &amp; HOSPITALS</span>

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

              {/* OVERLAY TOWNSHIP PIN CARD — GREEN PEACEFUL OPEN LAND */}
              <div className="absolute top-4 left-4 z-20 bg-[#111722]/95 backdrop-blur-md text-white p-3.5 rounded-2xl border border-[#B18A4A]/40 shadow-xl max-w-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-[#B18A4A] animate-ping" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#B18A4A]">
                    10-ACRE OPEN GREEN SITE
                  </span>
                </div>
                <h4 className="text-sm font-extrabold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#B18A4A]" />
                  <span>ANTELIA GROVES</span>
                </h4>
                <p className="text-[11px] text-gray-300 mt-1 leading-snug">
                  Peaceful Green Zone, Sarjapur Villa Corridor, Bengaluru
                </p>
              </div>

              {/* ACTIVE LANDMARK FLOATING HIGHLIGHT PIN */}
              <div className="absolute bottom-4 right-4 z-20 bg-[#F4F0E7]/95 backdrop-blur-md text-[#111722] p-3.5 rounded-2xl border border-[#D5D0C6] shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#111722] text-[#B18A4A] flex items-center justify-center text-lg font-bold">
                  {activeLandmark.symbol}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#B18A4A] block">
                    HIGHLIGHTED BENGALURU DESTINATION
                  </span>
                  <span className="text-xs font-extrabold text-[#111722]">
                    {activeLandmark.title} ({activeLandmark.time})
                  </span>
                </div>
              </div>

            </div>

            {/* LIVE DIRECTION LINK BUTTON */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#F4F0E7] p-3.5 rounded-2xl border border-[#D5D0C6]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#374151]">
                <Car className="w-4 h-4 text-[#B18A4A]" />
                <span>Exact GPS Coordinates: 12.8645° N, 77.7850° E (Green Open Site)</span>
              </div>
              <a
                href="https://maps.google.com/?q=Sarjapur+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-[#111722] text-white hover:bg-[#B18A4A] hover:text-[#111722] text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* RIGHT 5 COLUMNS: AUTO-ROTATING DISTANCE & LANDMARK CARDS */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#B18A4A]">
                KEY BENGALURU DISTANCES (1.5S ROTATION)
              </span>
              <button
                onClick={() => setIsAutoCycling(!isAutoCycling)}
                className="text-[11px] font-bold text-[#374151] hover:text-[#111722] underline"
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
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111722] text-white border-[#B18A4A] shadow-md transform translate-x-1'
                      : 'bg-[#EFECE6] text-[#111722] border-[#D5D0C6] hover:bg-[#DED8CC]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold transition-all ${
                          isActive
                            ? 'bg-[#B18A4A] text-white'
                            : 'bg-[#F4F0E7] text-[#111722] border border-[#D5D0C6]'
                        }`}
                      >
                        <span>{lm.symbol}</span>
                      </div>
                      <div>
                        <h4
                          className={`text-sm font-extrabold transition-colors ${
                            isActive ? 'text-white' : 'text-[#111722]'
                          }`}
                        >
                          {lm.title}
                        </h4>
                        <span
                          className={`text-[11px] font-medium block mt-0.5 ${
                            isActive ? 'text-[#B18A4A]' : 'text-[#6B7280]'
                          }`}
                        >
                          Distance: {lm.distance}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`px-3 py-1.5 rounded-xl text-xs font-extrabold flex items-center gap-1 whitespace-nowrap shadow-2xs ${
                        isActive
                          ? 'bg-[#B18A4A] text-white'
                          : 'bg-[#F4F0E7] text-[#111722] border border-[#D5D0C6]'
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
                      className="mt-3 pt-3 border-t border-white/15 text-xs text-gray-300 font-normal leading-relaxed"
                    >
                      {lm.desc}
                    </motion.div>
                  )}
                </div>
              );
            })}

            {/* CALL TO ACTION BOX */}
            <div className="bg-[#EFECE6] p-4 rounded-2xl border border-[#D5D0C6] mt-4 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-[#111722] block">
                  WANT A PERSONALIZED BENGALURU SITE TOUR?
                </span>
                <span className="text-[11px] text-[#6B7280] block">
                  Book a free site visit with pick-up facility.
                </span>
              </div>
              {onOpenBooking && (
                <button
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-xl bg-[#B18A4A] hover:bg-[#8F6C34] text-white text-xs font-bold transition-all shadow-xs whitespace-nowrap"
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
