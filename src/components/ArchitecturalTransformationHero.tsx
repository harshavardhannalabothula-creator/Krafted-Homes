'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Pause, ChevronRight, ChevronLeft } from 'lucide-react';
import Transformation3DEngine from './Transformation3DEngine';

interface ArchitecturalTransformationHeroProps {
  onOpenBooking: () => void;
}

export default function ArchitecturalTransformationHero({ onOpenBooking }: ArchitecturalTransformationHeroProps) {
  const [currentStage, setCurrentStage] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const stages = [
    { id: '01', code: '01 / 08', title: 'THE LAND', desc: '10 acres of untouched land' },
    { id: '02', code: '02 / 08', title: 'LAND CLEARING', desc: 'Site cleared and prepared for development' },
    { id: '03', code: '03 / 08', title: 'SITE PREPARATION', desc: 'Grading, roads, pathways & infrastructure' },
    { id: '04', code: '04 / 08', title: 'FOUNDATION', desc: 'Villa foundations take shape across the site' },
    { id: '05', code: '05 / 08', title: 'STRUCTURE', desc: 'Columns, slabs & split-level structures rise' },
    { id: '06', code: '06 / 08', title: 'VILLAS', desc: 'Walls, glazing, roofs & architectural details' },
    { id: '07', code: '07 / 08', title: 'LANDSCAPE', desc: 'Gardens, trees, pathways & community spaces' },
    { id: '08', code: '08 / 08', title: 'THE LIVING COMMUNITY', desc: 'Antelia Groves is complete — architecture surrounded by nature' },
  ];

  // Automatic Architectural Transformation Looper (2 Seconds Per Stage)
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentStage((prev) => (prev < 7 ? prev + 1 : 0));
    }, 2000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const active = stages[currentStage];
  const progressPercent = ((currentStage + 1) / stages.length) * 100;

  const scrollToCommunity = () => {
    const el = document.getElementById('land');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full bg-[#101722] text-[#F3EFE6] overflow-hidden flex flex-col justify-between select-none">
      
      {/* Real-Time 3D WebGL Architectural Transformation Engine */}
      <div className="absolute inset-0 z-0">
        <Transformation3DEngine stageIndex={currentStage} />
        {/* Subtle Dark Radial Vignette Gradient for Crisp Typography Contrast */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#101722_95%)] pointer-events-none z-10" />
      </div>

      {/* Top Header Navigation */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xs bg-[#F3EFE6] flex items-center justify-center p-0.5 shadow-sm">
              <span className="text-[#101722] font-serif font-bold text-sm">AG</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#F97316] font-manrope font-semibold">
                KRAFTED HOMES
              </span>
              <span className="text-sm font-serif tracking-wider text-[#F3EFE6] font-bold leading-tight">
                ANTELIA GROVES
              </span>
            </div>
          </a>

          {/* Minimal Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {['VISION', 'COMMUNITY', 'VILLAS', 'THE CLUB', 'LOCATION'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-manrope font-semibold uppercase tracking-widest text-[#B8B0A1] hover:text-[#F97316] transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Primary CTA */}
          <button
            onClick={onOpenBooking}
            className="px-5 py-2 rounded-xs text-xs font-manrope font-bold uppercase tracking-wider text-[#101722] bg-[#F3EFE6] hover:bg-[#F97316] hover:text-[#101722] transition-all shadow-sm"
          >
            BOOK A VISIT
          </button>
        </div>
      </header>

      {/* Center Grand Minimal Typography */}
      <div className="relative z-20 max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 text-center my-auto py-4">
        
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-3"
        >
          <h1 className="text-6xl sm:text-8xl lg:text-[110px] font-serif font-bold text-[#F3EFE6] tracking-tight leading-none drop-shadow-2xl">
            ANTELIA
          </h1>
          <h1 className="text-6xl sm:text-8xl lg:text-[110px] font-serif font-bold text-[#F97316] tracking-tight leading-none drop-shadow-2xl">
            GROVES
          </h1>
        </motion.div>

        {/* Minimal Supporting Line */}
        <p className="text-sm sm:text-base font-manrope font-light text-[#B8B0A1] tracking-wide mb-6">
          A living landscape, crafted for modern life.
        </p>

        {/* Final Reveal Action CTA (Appears smoothly when Stage 08 is active) */}
        <AnimatePresence>
          {currentStage === 7 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mt-2"
            >
              <button
                onClick={scrollToCommunity}
                className="inline-flex items-center gap-2 text-xs font-manrope font-bold uppercase tracking-[0.2em] text-[#F97316] hover:text-[#F3EFE6] transition-colors py-2 px-4 group"
              >
                <span>EXPLORE THE COMMUNITY</span>
                <ArrowRight className="w-4 h-4 text-[#F97316] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lower Footer UI — Stage Navigation & Dynamic Lower-Right Stage Indicator */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4">
          
          {/* Left Stage Selector Pills & Play/Pause Control */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full no-scrollbar">
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-3 py-1.5 rounded-xs text-[10px] font-manrope font-bold uppercase tracking-wider flex items-center gap-1.5 border transition-all ${
                isPlaying
                  ? 'bg-[#27382D]/40 text-[#F97316] border-[#F97316]/40'
                  : 'bg-[#101722] text-[#B8B0A1] border-white/20'
              }`}
            >
              {isPlaying ? <Pause className="w-3 h-3 text-[#F97316] animate-pulse" /> : <Play className="w-3 h-3 text-[#F3EFE6]" />}
              <span>{isPlaying ? 'AUTO FILM: ON' : 'PAUSED'}</span>
            </button>

            {stages.map((st, idx) => (
              <button
                key={st.id}
                onClick={() => {
                  setCurrentStage(idx);
                  setIsPlaying(false);
                }}
                className={`px-2.5 py-1.5 rounded-xs text-[10px] font-manrope font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                  currentStage === idx
                    ? 'bg-[#F3EFE6] text-[#101722] border-[#F3EFE6] shadow-sm'
                    : 'bg-[#101722]/80 text-[#B8B0A1] border-white/10 hover:text-[#F3EFE6] hover:border-white/30'
                }`}
              >
                {st.id} {st.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Lower-Right Dynamic Stage Indicator & Thin Gold Progress Bar */}
          <div className="flex flex-col items-end text-right shrink-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-manrope font-bold text-[#F97316] tracking-widest uppercase">
                {active.code}
              </span>
              <span className="text-xs font-serif font-bold text-[#F3EFE6]">
                {active.title}
              </span>
            </div>
            
            <p className="text-[11px] font-manrope font-light text-[#B8B0A1] mb-2 max-w-xs line-clamp-1">
              {active.desc}
            </p>

            {/* Thin Muted Champagne Gold Progress Line */}
            <div className="w-48 sm:w-64 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#F97316]"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
