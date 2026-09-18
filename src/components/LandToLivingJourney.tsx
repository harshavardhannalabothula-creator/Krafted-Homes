'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Play, Pause, ArrowUpRight } from 'lucide-react';

interface LandToLivingJourneyProps {
  onOpenBooking: () => void;
}

export default function LandToLivingJourney({ onOpenBooking }: LandToLivingJourneyProps) {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const constructionStages = [
    {
      id: 0,
      stageNumber: '01',
      stageCode: '01 / 08',
      cardTitle: 'THE LAND',
      fullTitle: 'THE LAND — 10 ACRES',
      quote: '10 acres of untouched natural land in Bengaluru.',
      desc: 'Pristine 10-acre natural terrain with rolling contours, mature greenery, and natural water channels is surveyed to create a 100% eco-balanced gated township.',
      image: '/images/raw_land.png',
      milestones: [
        '10-Acre pristine natural terrain survey',
        'Natural tree canopy & solar orientation mapping',
        'Zero-impact environmental baseline planning',
      ],
    },
    {
      id: 1,
      stageNumber: '02',
      stageCode: '02 / 08',
      cardTitle: 'LAND CLEARING',
      fullTitle: 'LAND CLEARING & SITE DEMARCATION',
      quote: 'The site is cleared and prepared for development.',
      desc: 'Heavy machinery levels designated soil pads while preserving natural greenery corridors. Perimeter boundary silt fencing and safety protocols are established.',
      image: '/images/stage_01_clearing.png',
      milestones: [
        'Selective vegetation clearing & soil levelling',
        'Natural drainage channel conservation',
        'Gated perimeter fencing & security setup',
      ],
    },
    {
      id: 2,
      stageNumber: '03',
      stageCode: '03 / 08',
      cardTitle: 'SITE PREPARATION',
      fullTitle: 'SITE PREPARATION & INFRASTRUCTURE',
      quote: 'Grading, roads, pathways and essential infrastructure begin.',
      desc: 'Precision 40ft and 30ft loop boulevard grading begins alongside underground utility trenches for electricity, storm water, and fiber optics.',
      image: '/images/stage_02_layout.jpg',
      milestones: [
        '40-Ft and 30-Ft boulevard grading & sub-base',
        'Underground cabling & storm water drainage lines',
        'CAD grid peg marking for 189 villa plots',
      ],
    },
    {
      id: 3,
      stageNumber: '04',
      stageCode: '04 / 08',
      cardTitle: 'FOUNDATION',
      fullTitle: 'FOUNDATION & REINFORCEMENT',
      quote: 'Villa foundations take shape across the site.',
      desc: 'Deep foundation footings are reinforced with high-grade Fe-550 steel rebar cages and anti-termite treated M35 concrete footings for maximum durability.',
      image: '/images/stage_03_foundation.jpg',
      milestones: [
        'High-grade Fe-550 structural steel rebar',
        'M35 grade concrete footing pour',
        'Seismic-resistant foundation engineering',
      ],
    },
    {
      id: 4,
      stageNumber: '05',
      stageCode: '05 / 08',
      cardTitle: 'STRUCTURE',
      fullTitle: 'STRUCTURAL FRAME & SLABS',
      quote: 'Columns, slabs and split-level structures rise.',
      desc: 'Reinforced RCC columns, floating floor slabs, 18-ft double-height ceiling beams, and sky lounge terrace decks rise across all villa clusters.',
      image: '/images/villa_rcc_construction.png',
      milestones: [
        'Bespoke split-level RCC frame casting',
        '18-Ft double height living room ceiling slabs',
        'Multi-level terrace & sky lounge structural decks',
      ],
    },
    {
      id: 5,
      stageNumber: '06',
      stageCode: '06 / 08',
      cardTitle: 'VILLAS',
      fullTitle: 'VILLA ELEVATIONS & FINISHES',
      quote: 'Walls, glazing, roofs and architectural details come together.',
      desc: 'Acoustic masonry walls, floor-to-ceiling double-glazed windows, waterproof balconies, teak wood deck accents, and clean white elevations complete the villas.',
      image: '/images/bengaluru_daylight_villa.png',
      milestones: [
        'Floor-to-ceiling acoustic glass paneling',
        'Teak wood louvers & white architectural facade',
        'Waterproofed roof terraces & private garden decks',
      ],
    },
    {
      id: 6,
      stageNumber: '07',
      stageCode: '07 / 08',
      cardTitle: 'LANDSCAPE',
      fullTitle: 'LANDSCAPING & GREEN ZONES',
      quote: 'Gardens, trees, pathways and community spaces transform the site.',
      desc: 'Over 70% open green space comes alive with lush botanical lawns, private backyard decks, tree-lined walking trails, and illuminated water features.',
      image: '/images/private_garden_sanctuary.jpg',
      milestones: [
        'Botanical gardens & manicured private lawns',
        'Paved walking trails & solar-lit avenues',
        'Central eco-parks & mindfulness decks',
      ],
    },
    {
      id: 7,
      stageNumber: '08',
      stageCode: '08 / 08',
      cardTitle: 'THE LIVING COMMUNITY',
      fullTitle: 'THE LIVING COMMUNITY — COMPLETE',
      quote: 'Architecture, landscape and community come together to create Antelia Groves.',
      desc: 'Antelia Groves is fully transformed into a complete 10-acre luxury gated enclave — 189 finished villas, 15,000+ sq.ft resort clubhouse, and thriving resident life.',
      image: '/images/hero_main_aerial.png',
      milestones: [
        '189 thoughtfully planned villas',
        '15,000+ sq.ft resort clubhouse',
        'Landscaped gardens and paved boulevards',
        'Complete gated community experience',
        'Ready for resident handover and move-in',
      ],
    },
  ];

  // Automatic stage cycle every 3.5 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % constructionStages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPlaying, constructionStages.length]);

  const handleStageSelect = (idx: number) => {
    setCurrentStage(idx);
  };

  const activeStage = constructionStages[currentStage];

  return (
    <section id="process" className="py-12 sm:py-16 bg-white text-[#0F172A] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* MAIN SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="flex flex-col items-start">
            <span className="text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100 mb-2.5">
              ✦ SITE PROGRESSION STORY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
              The 10-Acre Transformation
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold mt-2 max-w-xl">
              From untouched land to a complete master-planned villa community — every stage has a story.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs font-bold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Auto-Playing Timeline</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-white" />
                  <span>Play Timeline</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 8-STAGE ELEGANT TIMELINE CARDS NAV */}
        <div className="relative">
          {/* CONNECTING ORANGE PROGRESS LINE */}
          <div className="hidden lg:block absolute top-6 left-4 right-4 h-0.5 bg-slate-100 z-0">
            <motion.div 
              className="h-full bg-[#F97316] transition-all duration-500"
              style={{ width: `${((currentStage + 1) / constructionStages.length) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative z-10">
            {constructionStages.map((stg, idx) => {
              const isActive = idx === currentStage;
              return (
                <button
                  key={stg.cardTitle}
                  onClick={() => handleStageSelect(idx)}
                  className={`p-3 text-left rounded-2xl transition-all relative overflow-hidden flex flex-col justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-lg scale-[1.03]'
                      : 'bg-white border-slate-200/80 text-[#0F172A] hover:border-orange-200 hover:bg-slate-50 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-mono font-extrabold ${
                      isActive ? 'text-[#F97316]' : 'text-slate-400'
                    }`}>
                      {stg.stageNumber}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#F97316] animate-ping" />
                    )}
                  </div>

                  <span className={`text-[11px] font-extrabold tracking-tight block truncate ${
                    isActive ? 'text-white' : 'text-[#0F172A]'
                  }`}>
                    {stg.cardTitle}
                  </span>

                  {/* Active Card Bottom Progress Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange-200/30 overflow-hidden">
                      <motion.div
                        key={currentStage}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3.5, ease: 'linear' }}
                        className="h-full bg-[#F97316]"
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* SPLIT LAYOUT: LEFT VISUAL PANEL + RIGHT STAGE DETAILS */}
        <div className="bg-white rounded-[32px] border border-slate-200/90 shadow-xl p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT 7-COLS: LARGE ARCHITECTURAL VISUAL PANEL */}
          <div className="lg:col-span-7 relative rounded-[24px] overflow-hidden min-h-[300px] sm:min-h-[420px] bg-[#0F172A] shadow-inner group flex flex-col justify-between p-4">
            
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStage.image}
                src={activeStage.image}
                alt={activeStage.fullTitle}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1.00 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* TOP OVERLAY BADGES */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full border border-white/20">
                STAGE {activeStage.stageCode}
              </span>

              <span className="bg-[#F97316] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                {activeStage.cardTitle}
              </span>
            </div>

            {/* BOTTOM OVERLAY BADGE */}
            <div className="relative z-10 bg-slate-950/85 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-white mt-auto max-w-md">
              <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-wider block mb-0.5">
                ✦ 10-ACRE MASTERPLAN VISUALIZATION
              </span>
              <h4 className="text-sm font-extrabold leading-snug">
                {activeStage.fullTitle}
              </h4>
            </div>
          </div>

          {/* RIGHT 5-COLS: SELECTED STAGE DETAILS & MILESTONES */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-extrabold text-[#F97316] uppercase tracking-widest">
                  STAGE {activeStage.stageCode}
                </span>
                <span className="text-[10px] font-extrabold text-[#0F172A] bg-orange-50 border border-orange-100 px-3 py-0.5 rounded-full">
                  ANTELIA GROVES
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3 leading-tight tracking-tight">
                {activeStage.fullTitle}
              </h3>

              <p className="text-xs sm:text-sm italic font-semibold text-[#F97316] mb-3 leading-relaxed">
                “{activeStage.quote}”
              </p>

              <p className="text-xs sm:text-sm text-slate-700 font-semibold leading-relaxed mb-6">
                {activeStage.desc}
              </p>

              {/* MILESTONE BULLET POINTS */}
              <div className="space-y-2.5 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-extrabold text-[#0F172A] uppercase tracking-wider block mb-2">
                  CONFIRMED STAGE MILESTONES:
                </span>
                {activeStage.milestones.map((ms, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{ms}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* METADATA SUMMARY & CTA BUTTON */}
            <div className="pt-4 space-y-4 border-t border-slate-100">
              <div className="grid grid-cols-3 gap-2 text-center bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div>
                  <span className="text-[9px] font-extrabold text-slate-400 block uppercase">PROJECT</span>
                  <span className="text-[11px] font-extrabold text-[#0F172A]">ANTELIA GROVES</span>
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-slate-400 block uppercase">SCALE</span>
                  <span className="text-[11px] font-extrabold text-[#0F172A]">10+ ACRES</span>
                </div>
                <div>
                  <span className="text-[9px] font-extrabold text-slate-400 block uppercase">PHASE</span>
                  <span className="text-[11px] font-extrabold text-[#F97316]">{activeStage.stageCode}</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-extrabold uppercase tracking-widest rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <span>BOOK SITE PROGRESS TOUR</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


