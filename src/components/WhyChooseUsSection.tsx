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
    <section id="why-choose-us" className="py-10 sm:py-8 bg-white text-[#0F172A] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[500px]">
          
          {/* LEFT COLUMNS: IMAGE CONTAINED WITHIN MARGINS WITH SLANTED SHAPE */}
          <div className="lg:col-span-6 w-full relative">
            {/* OUTER WRAPPER: PRESERVES LEFT ROUNDED CORNERS */}
            <div className="relative w-full h-[360px] lg:h-[500px] rounded-l-[32px] overflow-hidden">
              {/* INNER WRAPPER: APPLIES THE SLANTED CUT ON THE RIGHT */}
              <div 
                className="relative w-full h-full bg-slate-900 group overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}
              >
                <img
                  src="/images/why_choose_us_villa.png"
                  alt="Why Choose Krafted Homes"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent z-10" />
                <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 z-30 flex items-center gap-4">
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#F97316] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                  >
                    <Play className="w-5 h-5 lg:w-6 lg:h-6 fill-white text-white translate-x-0.5" />
                  </button>
                  <div className="text-left text-white">
                    <span className="text-sm font-medium text-[#F97316] block mb-1">Watch Video</span>
                    <h4 className="text-sm lg:text-base font-bold text-white">Why Choose KraftedHomes?</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMNS: PILL TAG, HEADLINE, SUBTITLE & 2X2 FEATURE CARDS */}
          <div className="lg:col-span-6 lg:col-start-7 xl:col-span-5 xl:col-start-8 flex flex-col items-start text-left space-y-6">
            
            {/* PILL BADGE LIKE REFERENCE IMAGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50/50 text-[#F97316] text-[11px] font-bold uppercase tracking-wider relative">
              <span className="w-4 h-[2px] bg-[#F97316]"></span>
              <span>Why Choose Us</span>
            </div>

            {/* MAIN HEADLINE (ALL BLACK, SANS-SERIF EXTRABOLD) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] leading-[1.1] tracking-tight">
              More Than Just <br />
              a Home Builder
            </h2>

            {/* SUBTITLE PARAGRAPH */}
            <p className="text-[13px] font-medium text-slate-500 leading-relaxed max-w-md">
              At <strong className="text-[#0F172A]">KraftedHomes.com</strong>, we make your journey smooth, comfortable, and memorable. Whether you need a 3 BHK, 4 BHK, or custom independent villa — we&apos;ve got you covered.
            </p>

            {/* 2X2 FEATURE GRID CARDS MATCHING REFERENCE IMAGE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 w-full pt-6">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.id}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-orange-50 text-[#F97316] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0F172A] mb-1">
                        {feat.title}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium block">
                        {feat.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

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
              className="relative w-full max-w-4xl bg-black rounded-[32px] overflow-hidden shadow-2xl"
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
