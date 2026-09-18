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
    <section id="masterplan" className="w-full bg-white py-12 lg:py-16 relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPACT TOP ROW: HEADING & SUBTITLE & CTA BUTTON */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 lg:mb-10 pb-6 border-b border-slate-200/70">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-3"
            >
              <span>02 — THE MASTERPLAN</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F172A] leading-[1.16] tracking-tight mb-3"
            >
              A Community Designed <span className="text-[#F97316]">Around Better Living</span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed max-w-2xl"
            >
              Discover how villas, landscape, roads, clubhouse spaces and everyday experiences come together across the 10-acre Antelia Groves community.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="shrink-0"
          >
            <a 
              href="#featured-villas"
              className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-extrabold uppercase tracking-wider px-6 py-3.5 rounded-full inline-flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>Explore Villa Collections</span>
              <ArrowRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* MAIN COMPOSITION: 2 COLUMNS (LEFT: MASTERPLAN VISUAL, RIGHT: COMMUNITY STORY) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-10 lg:mb-12">
          
          {/* LEFT SIDE — MASTERPLAN VISUAL PRESENTATION BOARD (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative w-full h-[380px] sm:h-[440px] lg:h-auto rounded-[24px] overflow-hidden shadow-lg border-2 border-white bg-slate-900 group flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFeature ? currentFeature.image : 'default_masterplan'}
                  src={currentFeature ? currentFeature.image : '/images/hero_main_aerial.png'}
                  alt="Antelia Groves 10-Acre Masterplan Layout"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1.00 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40 pointer-events-none" />

              {/* Top Board Badge */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0F172A] text-[10px] font-extrabold uppercase tracking-wider border border-white/60 shadow-sm">
                  <Layers className="w-3 h-3 text-[#F97316]" />
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
              <div className="absolute inset-0 pointer-events-none z-10 p-5 flex flex-col justify-between">
                <div className="mt-12 flex items-center justify-between">
                  <div className={`px-2.5 py-0.5 rounded-lg backdrop-blur-md border text-[9px] font-extrabold uppercase tracking-wider transition-all ${
                    selectedFeature === 3 ? 'bg-[#F97316] text-white border-orange-400 shadow-md' : 'bg-slate-950/70 text-white/90 border-white/20'
                  }`}>
                    MAIN ENTRY
                  </div>
                  <div className={`px-2.5 py-0.5 rounded-lg backdrop-blur-md border text-[9px] font-extrabold uppercase tracking-wider transition-all ${
                    selectedFeature === 0 ? 'bg-[#F97316] text-white border-orange-400 shadow-md' : 'bg-slate-950/70 text-white/90 border-white/20'
                  }`}>
                    VILLA COMMUNITY
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className={`px-2.5 py-0.5 rounded-lg backdrop-blur-md border text-[9px] font-extrabold uppercase tracking-wider transition-all ${
                    selectedFeature === 1 ? 'bg-[#F97316] text-white border-orange-400 shadow-md' : 'bg-slate-950/70 text-white/90 border-white/20'
                  }`}>
                    GREEN OPEN SPACES &amp; WALKING PATHS
                  </div>
                  <div className={`px-2.5 py-0.5 rounded-lg backdrop-blur-md border text-[9px] font-extrabold uppercase tracking-wider transition-all ${
                    selectedFeature === 2 ? 'bg-[#F97316] text-white border-orange-400 shadow-md' : 'bg-slate-950/70 text-white/90 border-white/20'
                  }`}>
                    CLUBHOUSE
                  </div>
                </div>
              </div>

              {/* Bottom Caption Pill on Visual */}
              <div className="absolute bottom-5 left-5 right-5 z-10 p-3.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-[#F97316] flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-3.5 h-3.5" />
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

                <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded-full text-white border border-white/20">
                  RERA Approved
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — COMMUNITY STORY EDITORIAL PANEL (Span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-[24px] border border-slate-200/90 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316] block mb-1">
                THE COMMUNITY PLAN
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight mb-2">
                Everything Has Its Place
              </h3>

              <p className="text-xs text-slate-600 font-medium leading-relaxed mb-5">
                From the arrival experience to quiet garden paths and shared community spaces, Antelia Groves is planned to make everyday living feel connected, calm and convenient.
              </p>

              {/* 4 INTERACTIVE FEATURE ROWS */}
              <div className="space-y-2.5">
                {features.map((item, idx) => {
                  const IconComponent = item.icon;
                  const isSelected = selectedFeature === idx;

                  return (
                    <div
                      key={item.num}
                      onClick={() => setSelectedFeature(isSelected ? null : idx)}
                      className={`p-3.5 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isSelected 
                          ? 'bg-orange-50/50 border-[#F97316] shadow-sm ring-1 ring-[#F97316]' 
                          : 'bg-slate-50/50 hover:bg-white border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-1.5 rounded-lg shrink-0 transition-colors duration-300 ${
                          isSelected ? 'bg-[#F97316] text-white' : 'bg-white text-slate-700 border border-slate-200/80'
                        }`}>
                          <IconComponent className="w-3.5 h-3.5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-0.5">
                            <span className="text-[11px] font-extrabold text-[#0F172A] tracking-tight uppercase">
                              {item.num} — {item.title}
                            </span>
                            {isSelected && (
                              <span className="text-[9px] font-extrabold text-[#F97316]">Selected</span>
                            )}
                          </div>
                          <p className="text-xs text-slate-600 font-medium leading-snug">
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
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full bg-slate-50/80 rounded-[20px] p-5 sm:p-6 border border-slate-200/90 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200/90 gap-4 md:gap-0">
            {projectFacts.map((fact, idx) => (
              <div 
                key={fact.label}
                className={`flex flex-col justify-center ${
                  idx === 0 ? 'md:pr-5' : idx === projectFacts.length - 1 ? 'md:pl-5' : 'md:px-5'
                } ${idx > 1 ? 'pt-3 md:pt-0' : idx > 0 ? 'pt-3 md:pt-0' : ''}`}
              >
                <span className="text-[9px] font-extrabold text-[#F97316] uppercase tracking-widest">
                  {fact.label}
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight mt-0.5 mb-0.5">
                  {fact.value}
                </div>
                <div className="text-xs font-semibold text-slate-600">
                  {fact.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}



