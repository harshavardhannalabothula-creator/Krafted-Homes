'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Trees, 
  Sparkles, 
  Compass, 
  ArrowRight,
  Layers,
  MapPin
} from 'lucide-react';

interface InteractiveMasterplanProps {
  onOpenBooking?: () => void;
}

export default function InteractiveMasterplan({ onOpenBooking }: InteractiveMasterplanProps) {
  // Active feature row index (null = Default Complete Community view)
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      id: 0,
      num: '01',
      title: 'VILLA NEIGHBOURHOODS',
      desc: 'Thoughtfully arranged residential zones',
      labelKey: 'VILLA COMMUNITY',
      image: '/images/hero_villa_facade.png',
      badge: 'Residential Enclaves',
      icon: Home,
    },
    {
      id: 1,
      num: '02',
      title: 'OPEN LANDSCAPE',
      desc: 'Green spaces, gardens and peaceful pathways',
      labelKey: 'GREEN OPEN SPACES',
      image: '/images/journey_03_masterplan.jpg',
      badge: '70% Open Sanctuary',
      icon: Trees,
    },
    {
      id: 2,
      num: '03',
      title: 'CLUBHOUSE EXPERIENCE',
      desc: 'A central place for recreation and community',
      labelKey: 'CLUBHOUSE',
      image: '/images/hero_resort_clubhouse.png',
      badge: '15K Sq.Ft Resort Hub',
      icon: Sparkles,
    },
    {
      id: 3,
      num: '04',
      title: 'CONNECTED MOVEMENT',
      desc: 'Clear internal roads and walkable connections',
      labelKey: 'MAIN ENTRY',
      image: '/images/hero_community.png',
      badge: 'Wide Paved Boulevards',
      icon: Compass,
    },
  ];

  const projectFacts = [
    {
      label: 'COMMUNITY SCALE',
      value: '10+ ACRES',
      desc: 'Community scale',
    },
    {
      label: 'PLANNED HOMES',
      value: '189 VILLAS',
      desc: 'Planned homes',
    },
    {
      label: 'GREEN SPACES',
      value: '70% OPEN',
      desc: 'Green and open spaces',
    },
    {
      label: 'CLUBHOUSE AREA',
      value: '15K SQ.FT',
      desc: 'Clubhouse area',
    },
  ];

  const currentFeature = selectedFeature !== null ? features[selectedFeature] : null;

  return (
    <section id="masterplan" className="w-full bg-white py-16 lg:py-24 relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-3"
          >
            <span>02 — THE MASTERPLAN</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] leading-[1.18] tracking-tight mb-4"
          >
            A Community Designed <br />
            <span className="text-[#F97316]">Around Better Living</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl"
          >
            Discover how villas, landscape, roads, clubhouse spaces and everyday experiences come together across the 10-acre Antelia Groves community.
          </motion.p>
        </div>

        {/* MAIN COMPOSITION: 2 COLUMNS (LEFT: MASTERPLAN VISUAL, RIGHT: COMMUNITY STORY) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 lg:mb-18">
          
          {/* LEFT SIDE — MASTERPLAN VISUAL PRESENTATION BOARD (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-[32px] overflow-hidden shadow-xl border-4 border-white bg-slate-900 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFeature ? currentFeature.image : 'default_masterplan'}
                  src={currentFeature ? currentFeature.image : '/images/hero_main_aerial.png'}
                  alt="Antelia Groves 10-Acre Masterplan Layout"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1.00 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 pointer-events-none" />

              {/* Top Board Badge */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0F172A] text-[11px] font-extrabold uppercase tracking-wider border border-white/60 shadow-sm">
                  <Layers className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>{currentFeature ? currentFeature.badge : 'THE COMPLETE 10-ACRE COMMUNITY'}</span>
                </div>

                {selectedFeature !== null && (
                  <button
                    onClick={() => setSelectedFeature(null)}
                    className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider border border-white/30 hover:bg-white hover:text-[#0F172A] transition-all cursor-pointer"
                  >
                    Reset View
                  </button>
                )}
              </div>

              {/* ELEGANT SUBTLE LABELS DIRECTLY ON VISUAL */}
              <div className="absolute inset-0 pointer-events-none z-10 p-6 flex flex-col justify-between">
                <div className="mt-14 flex items-center justify-between">
                  <div className={`px-3 py-1 rounded-lg backdrop-blur-md border text-[10px] font-extrabold uppercase tracking-wider transition-all ${
                    selectedFeature === 3 ? 'bg-[#F97316] text-white border-orange-400 shadow-lg scale-105' : 'bg-slate-950/70 text-white/90 border-white/20'
                  }`}>
                    MAIN ENTRY
                  </div>
                  <div className={`px-3 py-1 rounded-lg backdrop-blur-md border text-[10px] font-extrabold uppercase tracking-wider transition-all ${
                    selectedFeature === 0 ? 'bg-[#F97316] text-white border-orange-400 shadow-lg scale-105' : 'bg-slate-950/70 text-white/90 border-white/20'
                  }`}>
                    VILLA COMMUNITY
                  </div>
                </div>

                <div className="flex items-center justify-between mb-8">
                  <div className={`px-3 py-1 rounded-lg backdrop-blur-md border text-[10px] font-extrabold uppercase tracking-wider transition-all ${
                    selectedFeature === 1 ? 'bg-[#F97316] text-white border-orange-400 shadow-lg scale-105' : 'bg-slate-950/70 text-white/90 border-white/20'
                  }`}>
                    GREEN OPEN SPACES &amp; WALKING PATHS
                  </div>
                  <div className={`px-3 py-1 rounded-lg backdrop-blur-md border text-[10px] font-extrabold uppercase tracking-wider transition-all ${
                    selectedFeature === 2 ? 'bg-[#F97316] text-white border-orange-400 shadow-lg scale-105' : 'bg-slate-950/70 text-white/90 border-white/20'
                  }`}>
                    CLUBHOUSE
                  </div>
                </div>
              </div>

              {/* Bottom Caption Pill on Visual */}
              <div className="absolute bottom-6 left-6 right-6 z-10 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#F97316] flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      {currentFeature ? currentFeature.title : 'THE COMPLETE COMMUNITY PLAN'}
                    </div>
                    <div className="text-[10px] text-slate-300 font-medium">
                      {currentFeature ? currentFeature.desc : '10-Acre Master Planned Gated Sanctuary'}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-bold bg-white/10 px-2.5 py-1 rounded-full text-white border border-white/20">
                  RERA Approved
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — COMMUNITY STORY EDITORIAL PANEL (Span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F97316] block mb-2">
                THE COMMUNITY PLAN
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
                Everything Has Its Place
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                From the arrival experience to quiet garden paths and shared community spaces, Antelia Groves is planned to make everyday living feel connected, calm and convenient.
              </p>

              {/* 4 INTERACTIVE FEATURE ROWS */}
              <div className="space-y-3">
                {features.map((item, idx) => {
                  const IconComponent = item.icon;
                  const isSelected = selectedFeature === idx;

                  return (
                    <div
                      key={item.num}
                      onClick={() => setSelectedFeature(isSelected ? null : idx)}
                      className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isSelected 
                          ? 'bg-white border-[#F97316] shadow-md ring-1 ring-[#F97316]' 
                          : 'bg-slate-50/60 hover:bg-white border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <div className={`p-2 rounded-xl shrink-0 transition-colors duration-300 ${
                          isSelected ? 'bg-[#F97316] text-white' : 'bg-white text-slate-700 border border-slate-200/80'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-0.5">
                            <span className="text-[11px] font-extrabold text-[#0F172A] tracking-tight uppercase">
                              {item.num} — {item.title}
                            </span>
                            {isSelected && (
                              <span className="text-[10px] font-extrabold text-[#F97316]">Active</span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600 font-medium leading-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>

        {/* CLEAN HORIZONTAL INFORMATION STRIP BELOW MASTERPLAN */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-sm mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/90 gap-6 md:gap-0">
            {projectFacts.map((fact, idx) => (
              <div 
                key={fact.label}
                className={`flex flex-col justify-center ${
                  idx === 0 ? 'md:pr-6' : idx === projectFacts.length - 1 ? 'md:pl-6' : 'md:px-6'
                } ${idx > 1 ? 'pt-4 md:pt-0' : idx > 0 ? 'pt-4 md:pt-0' : ''}`}
              >
                <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-widest">
                  {fact.label}
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-1 mb-0.5">
                  {fact.value}
                </div>
                <div className="text-xs font-semibold text-slate-600">
                  {fact.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SINGLE CTA BUTTON */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#featured-villas"
            className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-extrabold uppercase tracking-wider px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>Explore Villa Collections</span>
            <ArrowRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}


