'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';

interface CinematicHeroProps {
  onOpenBooking: () => void;
}

export default function CinematicHero({ onOpenBooking }: CinematicHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Background Image Layer: Raw Pristine 10 Acres Terrain with Parallax Zoom */}
      <motion.div
        style={{ scale: backgroundScale, y: backgroundY }}
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 filter brightness-90"
          style={{ backgroundImage: `url('/images/raw_land.png')` }}
        />
        {/* Dark Vignette & Gold Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0E] via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.06)_0%,transparent_75%)]" />
      </motion.div>

      {/* Floating Particles / Atmospheric Light Sweep */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Hero Opening Narrative Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-12"
      >
        {/* Step 1: Subtitle Opening */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#11131A]/90 border border-[#C5A059]/30 backdrop-blur-md mb-8 shadow-2xl"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#E5C687]" />
          <span className="text-[11px] uppercase tracking-[0.4em] font-semibold font-mono text-[#E5C687]">
            KRAFTED HOMES PRESENTS
          </span>
        </motion.div>

        {/* Step 2: Signature Opening Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-2xl sm:text-4xl lg:text-5xl font-serif font-light text-gray-300 mb-6 tracking-wide leading-tight max-w-4xl"
        >
          EVERY COMMUNITY STARTS WITH A <span className="text-white font-bold italic">PIECE OF LAND.</span>
        </motion.h2>

        {/* Step 3: Main Reveal Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="mb-6"
        >
          <span className="text-xs uppercase font-mono tracking-[0.35em] text-[#C5A059] block mb-2">
            THIS ONE BECAME
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif tracking-tight text-white font-bold leading-none">
            ANTELIA <span className="gold-gradient-text">GROVES</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.6 }}
          className="text-base sm:text-lg text-gray-300 font-light max-w-2xl mb-10 leading-relaxed font-sans"
        >
          From 10 Acres of Untouched Terrain &rarr; To a Master-Planned Sanctuary of 189 Independent Split-Level Luxury Villas.
        </motion.p>

        {/* Hero Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#journey"
            className="px-8 py-4 rounded-xs text-xs font-bold uppercase tracking-widest text-[#090A0E] bg-gradient-to-r from-[#E5C687] via-[#C5A059] to-[#E5C687] bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-xl shadow-[#C5A059]/25 hover:shadow-2xl hover:shadow-[#C5A059]/50 active:scale-95"
          >
            Begin 10-Acre Journey
          </a>
          <button
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-xs text-xs font-semibold uppercase tracking-widest text-white border border-[#C5A059]/40 bg-[#090A0E]/60 hover:bg-[#C5A059]/10 backdrop-blur-md transition-all duration-300"
          >
            Schedule VIP Tour
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 z-20 flex flex-col items-center gap-2 cursor-pointer opacity-80 hover:opacity-100"
        onClick={() => {
          document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#C5A059]">
          SCROLL TO UNFOLD LAND
        </span>
        <ChevronDown className="w-4 h-4 text-[#E5C687]" />
      </motion.div>
    </section>
  );
}
