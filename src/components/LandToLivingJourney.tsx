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
      stageCode: '01 / 06',
      cardTitle: 'SITE CLEARING',
      fullTitle: 'SITE CLEARING & LEVELLING',
      quote: 'Workers clear vegetation, remove debris and level the land to prepare the site for construction.',
      desc: 'Pristine 10-acre natural terrain with rolling contours is surveyed and cleared. Heavy excavators level raw soil pads while preserving natural water runoff channels.',
      image: '/images/stage_01_clearing.png',
      milestones: [
        'Natural tree canopy & solar path preservation',
        'Heavy excavator earth clearing & site levelling',
        'Perimeter boundary silt fencing & safety setup',
      ],
    },
    {
      id: 1,
      stageNumber: '02',
      stageCode: '02 / 06',
      cardTitle: 'LAYOUT & EXCAVATION',
      fullTitle: 'LAYOUT MARKING & EXCAVATION',
      quote: 'Site boundaries and villa layouts are marked before foundation excavation begins.',
      desc: 'Precision chalk lines, survey pegs, and string demarcations mark all 189 independent villa plot boundaries and 40ft loop boulevards across the site.',
      image: '/images/stage_02_layout.jpg',
      milestones: [
        'Topographical CAD survey peg demarcation',
        'Chalk layout grid marking for 189 villa pads',
        'Foundation trench excavation across plots',
      ],
    },
    {
      id: 2,
      stageNumber: '03',
      stageCode: '03 / 06',
      cardTitle: 'FOUNDATION STEEL',
      fullTitle: 'FOUNDATION STEEL WORK',
      quote: 'Reinforcement steel forms the structural foundation of each villa.',
      desc: 'Deep foundation pits are reinforced with heavy iron rebar cages and concrete footings, engineered for seismic safety and multi-level structural loads.',
      image: '/images/stage_03_foundation.jpg',
      milestones: [
        'High-grade Fe-550 reinforcement steel rebar',
        'Anti-termite treated foundation concrete pads',
        'Seismic-resistant structural footing grid',
      ],
    },
    {
      id: 3,
      stageNumber: '04',
      stageCode: '04 / 06',
      cardTitle: 'STRUCTURE',
      fullTitle: 'STRUCTURAL FRAME & SLABS',
      quote: 'Concrete columns, beams and slabs begin forming the split-level villa structures.',
      desc: 'Reinforced RCC columns, floating floor slabs, double-height ceiling beams, and steel scaffolding rise across the site in progressive sequence.',
      image: '/images/stage_04_structure.jpg',
      milestones: [
        'Bespoke split-level RCC frame casting',
        '18-Ft double height living room ceiling slabs',
        'Multi-level terrace sky lounge structural deck',
      ],
    },
    {
      id: 4,
      stageNumber: '05',
      stageCode: '05 / 06',
      cardTitle: 'VILLAS',
      fullTitle: 'VILLAS TAKE SHAPE',
      quote: 'Walls, glazing, roofs and architectural details bring the villas to life.',
      desc: 'Acoustic masonry walls, floor-to-ceiling double glazing, waterproofing membranes, and exterior white travertine finishes complete the villa envelopes.',
      image: '/images/journey_05_structure.jpg',
      milestones: [
        'Floor-to-ceiling acoustic glass paneling',
        'Split-level interior masonry wall partitions',
        'Waterproofed roof terraces & balcony decks',
      ],
    },
    {
      id: 5,
      stageNumber: '06',
      stageCode: '06 / 06',
      cardTitle: 'HANDOVER',
      fullTitle: 'THE LIVING COMMUNITY',
      quote: 'Architecture, landscape and community come together to create Antelia Groves.',
      desc: 'Completed 10-acre gated enclave featuring 189 finished independent villas, 15,000+ sq.ft resort clubhouse, paved roads, mature gardens, and warm evening lighting.',
      image: '/images/hero_main_aerial.png',
      milestones: [
        '15,000+ Sq.Ft signature resort clubhouse',
        'Mature botanical gardens & paved boulevards',
        'Ready for resident handover & move-in',
      ],
    },
  ];

  // Automatic slide cycle every 2 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % constructionStages.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [isPlaying, constructionStages.length]);

  const handleStageSelect = (idx: number) => {
    setCurrentStage(idx);
  };

  const activeStage = constructionStages[currentStage];

  return (
    <section id="process" className="py-10 sm:py-8 bg-white text-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* EDITORIAL SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1.5px] bg-[#F97316]" />
              <span className="text-sm font-medium text-[#F97316]">
                03 — Site Progression
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#0F172A] leading-tight tracking-tight">
              The 10-Acre <span className="text-[#F97316]">Transformation</span>
            </h2>
          </div>

          <p className="text-xs font-manrope font-semibold text-[#1A212D] max-w-sm">
            From raw terrain to a complete master-planned community step by step.
          </p>
        </div>

        {/* TOP 6 HORIZONTAL STAGE CARDS (NAV PILLS) */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-8">
          {constructionStages.map((stg, idx) => {
            const isActive = idx === currentStage;
            return (
              <button
                key={stg.cardTitle}
                onClick={() => handleStageSelect(idx)}
                className={`p-4 text-left rounded-2xl transition-all relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0F172A] text-white shadow-lg scale-[1.02]'
                    : 'bg-white shadow-sm hover:shadow-md hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-mono font-bold ${
                    isActive ? 'text-[#F97316]' : 'text-[#0F172A]/50'
                  }`}>
                    {stg.stageNumber}
                  </span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-ping" />
                  )}
                </div>

                <span className={`text-[10px] font-manrope font-bold tracking-[0.15em] uppercase block truncate ${
                  isActive ? 'text-[#F97316]' : 'text-[#0F172A]'
                }`}>
                  {stg.cardTitle}
                </span>

                {/* Animated Progress Bar at bottom of active card */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F97316]/20 overflow-hidden">
                    <motion.div
                      key={currentStage}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4.5, ease: 'linear' }}
                      className="h-full bg-[#F97316]"
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* MAIN CONTENT AREA: LARGE REALISTIC PHOTO ON LEFT + STAGE INFO ON RIGHT */}
        <div className="bg-white rounded-[32px] shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: LARGE REALISTIC CONSTRUCTION PHOTOGRAPH */}
          <div className="lg:col-span-7 relative rounded-[32px] overflow-hidden aspect-[16/10] bg-[#0F172A] shadow-xl group">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStage.image}
                src={activeStage.image}
                alt={activeStage.fullTitle}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1.00 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* PLAY / PAUSE CONTROLLER BADGE */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 z-20 px-3.5 py-1.5 bg-[#0F172A]/85 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] font-manrope font-semibold tracking-wider uppercase flex items-center gap-2 hover:bg-[#F97316] transition-all shadow-md"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3 h-3 text-[#F97316]" />
                  <span>PLAYING THROUGH THE PROCESS</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-white" />
                  <span>PAUSED — PICK ANY STAGE</span>
                </>
              )}
            </button>

            {/* OVERLAY BADGE (LEFT) */}
            <div className="absolute bottom-4 left-4 z-20 px-4 py-2 bg-[#0F172A]/80 backdrop-blur-md rounded-2xl text-[9px] font-mono tracking-widest text-[#F97316] uppercase shadow-md">
              REAL-TIME DEVELOPMENT LOG — STAGE {activeStage.stageCode}
            </div>
          </div>

          {/* RIGHT: STAGE DETAILS & METADATA COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            
            <div>
              {/* STAGE CODE BADGE */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#F97316] uppercase">
                  STAGE {activeStage.stageCode}
                </span>
                <span className="text-[9.5px] font-manrope font-semibold tracking-widest text-[#0F172A] px-3 py-1 bg-slate-100 rounded-full shadow-sm">
                  ANTELIA GROVES
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] mb-3">
                {activeStage.fullTitle}
              </h3>

              {/* QUOTE */}
              <p className="text-xs sm:text-sm font-serif italic font-semibold text-[#8C6527] mb-4 leading-relaxed">
                “{activeStage.quote}”
              </p>

              {/* DESCRIPTION */}
              <p className="text-xs font-manrope font-semibold text-[#1A212D] leading-relaxed mb-6">
                {activeStage.desc}
              </p>

              {/* MILESTONE CHECKMARKS */}
              <div className="space-y-2.5 pt-4 mt-2">
                <span className="text-[10px] font-manrope font-bold uppercase tracking-wider text-[#0F172A] block mb-1">
                  STAGE ARCHITECTURAL MILESTONES:
                </span>
                {activeStage.milestones.map((ms, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs font-manrope font-semibold text-[#1A212D]">
                    <CheckCircle2 className="w-4 h-4 text-[#8C6527] shrink-0 mt-0.5" />
                    <span>{ms}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* METADATA COLUMN & CTA BUTTON */}
            <div className="pt-6 space-y-5">
              <div className="grid grid-cols-3 gap-2 text-left bg-slate-50 p-4 rounded-2xl shadow-inner">
                <div>
                  <span className="text-[9px] font-manrope font-bold text-[#0F172A]/50 block uppercase">PROJECT</span>
                  <span className="text-[10px] font-manrope font-bold text-[#0F172A]">ANTELIA GROVES</span>
                </div>
                <div>
                  <span className="text-[9px] font-manrope font-bold text-[#0F172A]/50 block uppercase">LOCATION</span>
                  <span className="text-[10px] font-manrope font-bold text-[#0F172A]">BENGALURU</span>
                </div>
                <div>
                  <span className="text-[9px] font-manrope font-bold text-[#0F172A]/50 block uppercase">STAGE</span>
                  <span className="text-[10px] font-manrope font-bold text-[#F97316]">{activeStage.stageCode}</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full py-4 bg-[#F97316] text-white text-xs font-manrope font-bold uppercase tracking-[0.2em] hover:bg-[#EA580C] transition-colors flex items-center justify-center gap-2 shadow-lg group rounded-full"
              >
                <span>SCHEDULE SITE VISIT</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

