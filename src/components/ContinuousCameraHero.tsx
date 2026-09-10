'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

interface ContinuousCameraHeroProps {
  onOpenBooking: () => void;
}

export default function ContinuousCameraHero({ onOpenBooking }: ContinuousCameraHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const scaleLayer1 = useTransform(scrollYProgress, [0, 0.2], [1.8, 1]);
  const opacityLayer1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);

  const scaleLayer2 = useTransform(scrollYProgress, [0.15, 0.4], [1.4, 1]);
  const opacityLayer2 = useTransform(scrollYProgress, [0.15, 0.25, 0.45], [0, 1, 0]);

  const scaleLayer3 = useTransform(scrollYProgress, [0.35, 0.6], [1.3, 1]);
  const opacityLayer3 = useTransform(scrollYProgress, [0.35, 0.45, 0.65], [0, 1, 0]);

  const scaleLayer4 = useTransform(scrollYProgress, [0.55, 0.8], [1.2, 1]);
  const opacityLayer4 = useTransform(scrollYProgress, [0.55, 0.65, 0.85], [0, 1, 0]);

  const scaleLayer5 = useTransform(scrollYProgress, [0.75, 1], [1.15, 1]);
  const opacityLayer5 = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);

  const [stageText, setStageText] = useState('01. ARCHITECTURAL TEXTURES & MATERIALS');

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest < 0.2) setStageText('01. ARCHITECTURAL TEXTURES & MATERIALS');
      else if (latest < 0.4) setStageText('02. FACADE REVEAL — TYPE A SPLIT-LEVEL VILLA');
      else if (latest < 0.6) setStageText('03. PASSING THROUGH GLAZING — FOYER & LIVING');
      else if (latest < 0.8) setStageText('04. PRIVATE GARDEN EXIT — 180 SQ.FT BACKYARD');
      else if (latest < 0.95) setStageText('05. RESIDENTIAL COMMUNITY PATHWAYS & VILLAS');
      else setStageText('06. HIGH AERIAL VISTA — 10-ACRE COMPLETE ESTATE');
    });
  }, [scrollYProgress]);

  const enterGroves = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="relative h-[350vh] w-full bg-white text-[#111827]">
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Layer 1: Extreme Close Up */}
        <motion.div
          style={{ scale: scaleLayer1, opacity: opacityLayer1 }}
          className="absolute inset-0 z-10 bg-cover bg-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/close_up_material.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-black/40" />
        </motion.div>

        {/* Layer 2: Facade */}
        <motion.div
          style={{ scale: scaleLayer2, opacity: opacityLayer2 }}
          className="absolute inset-0 z-20 bg-cover bg-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/villa_exterior.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/40" />
        </motion.div>

        {/* Layer 3: Interior */}
        <motion.div
          style={{ scale: scaleLayer3, opacity: opacityLayer3 }}
          className="absolute inset-0 z-30 bg-cover bg-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/villa_interior.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-black/40" />
        </motion.div>

        {/* Layer 4: Garden */}
        <motion.div
          style={{ scale: scaleLayer4, opacity: opacityLayer4 }}
          className="absolute inset-0 z-40 bg-cover bg-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/villa_interior.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-black/40" />
        </motion.div>

        {/* Layer 5 & 6: Masterplan Aerial Reveal */}
        <motion.div
          style={{ scale: scaleLayer5, opacity: opacityLayer5 }}
          className="absolute inset-0 z-50 bg-cover bg-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/hero_community.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/75 to-black/60" />

          {/* Aerial Content */}
          <div className="relative z-10 max-w-5xl mx-auto h-full px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center pt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-gray-200 shadow-sm mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="text-[10px] uppercase tracking-[0.35em] font-mono font-bold text-[#C5A059]">
                10-ACRE COMPLETE ESTATE REVEAL
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight text-[#111827] font-bold mb-2 leading-none"
            >
              ANTELIA <span className="text-[#C5A059] italic font-normal">GROVES</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-lg sm:text-2xl font-serif text-[#111827] font-light mb-4 tracking-widest uppercase"
            >
              A DIFFERENT WAY TO LIVE.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xs font-mono text-gray-700 uppercase tracking-[0.25em] mb-8"
            >
              10 ACRES &nbsp;·&nbsp; 189 INDEPENDENT VILLAS &nbsp;·&nbsp; 15K+ SQ.FT CLUBHOUSE
            </motion.p>

            <motion.button
              onClick={enterGroves}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="group px-8 py-4 rounded-xs text-xs font-bold font-mono uppercase tracking-[0.25em] text-white bg-[#111827] hover:bg-[#C5A059] hover:text-[#111827] transition-all duration-300 shadow-md flex items-center gap-3"
            >
              <span>ENTER THE GROVES</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Stage Indicator */}
        <div className="absolute bottom-6 left-6 z-60 bg-white/90 border border-gray-200 px-4 py-2 rounded-xs shadow-sm backdrop-blur-md">
          <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider block">
            CONTINUOUS CAMERA REVEAL:
          </span>
          <span className="text-xs font-mono text-[#111827] font-bold">{stageText}</span>
        </div>

        {/* Scroll Instruction */}
        <div className="absolute bottom-6 right-6 z-60 flex items-center gap-2 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          <span>Scroll To Pull Back Camera</span>
          <ChevronDown className="w-4 h-4 text-[#C5A059] animate-bounce" />
        </div>

      </div>
    </div>
  );
}
