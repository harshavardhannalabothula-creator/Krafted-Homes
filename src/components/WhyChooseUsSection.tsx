'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, DollarSign, ShieldCheck, MapPin, FileCheck2, Sparkles, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onOpenBooking?: () => void;
}

export default function WhyChooseUsSection({ onOpenBooking }: WhyChooseUsSectionProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const features = [
    {
      id: 1,
      title: 'Affordable Prices',
      desc: 'Best rates, no hidden fees',
      icon: DollarSign,
    },
    {
      id: 2,
      title: 'Fully RERA Approved',
      desc: 'Live with complete peace of mind',
      icon: ShieldCheck,
    },
    {
      id: 3,
      title: 'Multiple Locations',
      desc: 'Whitefield & Sarjapur corridor',
      icon: MapPin,
    },
    {
      id: 4,
      title: 'Flexible Plans',
      desc: 'Customized & construction-linked',
      icon: FileCheck2,
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 sm:py-24 bg-white text-[#0F172A] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* MAIN TWO-COLUMN CONTAINER MATCHING REFERENCE SCREENSHOT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT 6 COLUMNS: SLANTED TRAPEZOID IMAGE CONTAINER WITH VIDEO PLAY BUTTON */}
          <div className="lg:col-span-6 relative">
            
            {/* CONTAINER WITH CRISP SLANTED TRAPEZOID CUTOUT MASK (EXACT MATCH TO REFERENCE PHOTO) */}
            <div 
              className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group"
              style={{
                clipPath: 'polygon(0% 0%, 86% 0%, 100% 100%, 0% 100%)',
              }}
            >
              
              {/* HIGH QUALITY BACKGROUND PHOTO */}
              <img
                src="/images/daylight_estate.jpg"
                alt="Why Choose Krafted Homes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
              />

              {/* GRADIENT OVERLAY FOR TEXT READABILITY */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent z-10" />

              {/* FLOATING VIDEO PLAY BUTTON & CAPTION AT BOTTOM LEFT */}
              <div className="absolute bottom-6 left-6 z-30 flex items-center gap-4">
                
                {/* ORANGE CIRCULAR PLAY BUTTON WITH PULSE EFFECT */}
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="w-14 h-14 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-110 cursor-pointer group/btn"
                  aria-label="Play Tour Video"
                >
                  <Play className="w-6 h-6 fill-white text-white translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
                </button>

                <div className="text-left text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316] block">
                    Watch Video
                  </span>
                  <h4 className="text-base sm:text-lg font-extrabold text-white tracking-wide">
                    Why Choose KraftedHomes?
                  </h4>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT 6 COLUMNS: PILL TAG, HEADLINE, SUBTITLE & 2X2 FEATURE CARDS */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* PILL BADGE LIKE REFERENCE IMAGE */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#F97316] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Why Choose Us</span>
            </div>

            {/* MAIN DUAL-TONE HEADLINE */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] uppercase">
              More Than Just <br />
              <span className="text-[#2563EB]">a Home Builder</span>
            </h2>

            {/* SUBTITLE PARAGRAPH */}
            <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed max-w-xl">
              At <strong className="text-[#0F172A]">KraftedHomes.com</strong>, we make your journey smooth, comfortable, and memorable. Whether you need a 3 BHK, 4 BHK, or custom independent villa — we&apos;ve got you covered.
            </p>

            {/* 2X2 FEATURE GRID CARDS MATCHING REFERENCE IMAGE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full pt-2">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.id}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-[#2563EB] hover:shadow-md transition-all group"
                  >
                    <div className="w-10 h-10 rounded-full bg-orange-100 border border-orange-200 text-[#F97316] flex items-center justify-center shrink-0 group-hover:bg-[#F97316] group-hover:text-white transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A] uppercase leading-snug group-hover:text-[#2563EB] transition-colors">
                        {feat.title}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium block mt-0.5">
                        {feat.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* OPTIONAL CTA BUTTON */}
            {onOpenBooking && (
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="px-7 py-3.5 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Township Options</span>
                  <CheckCircle2 className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* VIDEO TOUR POPUP MODAL */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-700"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-50 text-white bg-slate-800/80 hover:bg-slate-700 p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Why Choose Krafted Homes"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
