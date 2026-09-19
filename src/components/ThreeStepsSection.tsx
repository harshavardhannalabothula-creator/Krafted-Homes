'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ThreeStepsSectionProps {
  onOpenBooking?: () => void;
}

export default function ThreeStepsSection({ onOpenBooking }: ThreeStepsSectionProps) {
  const markers = [
    {
      num: '01',
      tag: 'DISCOVER',
      title: 'Explore the villas and understand the community.',
    },
    {
      num: '02',
      tag: 'EXPERIENCE',
      title: 'Visit the site and experience the spaces.',
    },
    {
      num: '03',
      tag: 'CHOOSE',
      title: 'Select the villa that fits your lifestyle.',
    },
    {
      num: '04',
      tag: 'BEGIN',
      title: 'Move forward with a clear and guided booking process.',
    },
  ];

  return (
    <section id="steps" className="w-full bg-white py-12 lg:py-16 relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* COMPACT SECTION INTRO & HEADLINE */}
        <div className="max-w-3xl mb-8 lg:mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-200/80 mb-3"
          >
            <span>05 — YOUR VILLA JOURNEY</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F172A] leading-[1.16] tracking-tight mb-2"
          >
            From First Visit <span className="text-[#F97316]">to Your New Home</span>
          </motion.h2>
        </div>

        {/* PANORAMIC ARCHITECTURAL COMPOSITION WITH 4 JOURNEY MARKERS & CONNECTING LINE */}
        <div className="relative mb-8 lg:mb-10">
          
          {/* Main Panoramic Architectural Image Canvas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[420px] sm:h-[480px] lg:h-[500px] rounded-[28px] overflow-hidden shadow-xl border-4 border-white bg-slate-900 group"
          >
            <img 
              src="/images/hero_resort_clubhouse.png" 
              alt="Antelia Groves Villa Journey Panoramic View" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            
            {/* Cinematic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-slate-950/60 pointer-events-none" />

            {/* Top Architectural Annotation Badge */}
            <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[#0F172A] text-[11px] font-extrabold uppercase tracking-wider border border-white/60 shadow-sm z-20">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>ANTELIA GROVES / 10-ACRE PANORAMA</span>
            </div>

            {/* CONNECTING THIN ORANGE LINE ACROSS THE PANORAMA (DESKTOP) */}
            <div className="hidden lg:block absolute top-[140px] left-[10%] right-[10%] h-[2px] bg-white/20 z-10">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="h-full bg-[#F97316] origin-left shadow-sm"
              />
            </div>

            {/* 4 ARCHITECTURAL ANNOTATION MARKERS OVERLAID ON PANORAMA */}
            <div className="absolute inset-0 z-20 p-6 sm:p-8 flex flex-col justify-between">
              
              {/* Top Row: Markers 01 & 02 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 sm:pt-14">
                
                {/* MARKER 01 */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 max-w-sm text-white shadow-lg"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#F97316] text-white text-xs font-black flex items-center justify-center shrink-0 shadow-sm">
                      {markers[0].num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316]">
                      {markers[0].tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                    {markers[0].title}
                  </p>
                </motion.div>

                {/* MARKER 02 */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 max-w-sm sm:ml-auto text-white shadow-lg"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#F97316] text-white text-xs font-black flex items-center justify-center shrink-0 shadow-sm">
                      {markers[1].num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316]">
                      {markers[1].tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                    {markers[1].title}
                  </p>
                </motion.div>

              </div>

              {/* Bottom Row: Markers 03 & 04 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-2">
                
                {/* MARKER 03 */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 max-w-sm text-white shadow-lg"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#F97316] text-white text-xs font-black flex items-center justify-center shrink-0 shadow-sm">
                      {markers[2].num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316]">
                      {markers[2].tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                    {markers[2].title}
                  </p>
                </motion.div>

                {/* MARKER 04 */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                  className="bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 max-w-sm sm:ml-auto text-white shadow-lg"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="w-7 h-7 rounded-full bg-[#F97316] text-white text-xs font-black flex items-center justify-center shrink-0 shadow-sm">
                      {markers[3].num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F97316]">
                      {markers[3].tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 leading-snug">
                    {markers[3].title}
                  </p>
                </motion.div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM INTEGRATED COMPACT INFORMATION BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full bg-slate-50/90 rounded-[20px] p-4 sm:p-5 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200/90 gap-4 md:gap-0 flex-1 w-full">
            <div className="px-3 first:pl-0">
              <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-widest block">SCALE</span>
              <span className="text-base sm:text-lg font-extrabold text-[#0F172A] tracking-tight">10+ ACRES</span>
            </div>

            <div className="px-3">
              <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-widest block">HOMES</span>
              <span className="text-base sm:text-lg font-extrabold text-[#0F172A] tracking-tight">189 VILLAS</span>
            </div>

            <div className="px-3">
              <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-widest block">GREENERY</span>
              <span className="text-base sm:text-lg font-extrabold text-[#0F172A] tracking-tight">70% OPEN</span>
            </div>

            <div className="px-3">
              <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-widest block">CLUBHOUSE</span>
              <span className="text-base sm:text-lg font-extrabold text-[#0F172A] tracking-tight">15K SQ.FT</span>
            </div>
          </div>

          {/* Simple Text CTA on Far Right */}
          <button
            onClick={onOpenBooking}
            className="text-xs font-extrabold text-[#F97316] hover:text-[#EA580C] inline-flex items-center gap-2 transition-colors cursor-pointer shrink-0 uppercase tracking-wider bg-white px-4 py-2.5 rounded-full border border-orange-200 shadow-2xs"
          >
            <span>BOOK A SITE VISIT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}




