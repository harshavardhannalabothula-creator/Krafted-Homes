'use client';

import { ArrowRight } from 'lucide-react';

interface BottomCTABannerProps {
  onOpenBooking?: () => void;
}

export default function BottomCTABanner({ onOpenBooking }: BottomCTABannerProps) {
  return (
    <section className="w-full py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[240px] sm:h-[280px] rounded-[32px] overflow-hidden shadow-2xl group flex items-center bg-slate-900">
          
          {/* BACKGROUND IMAGE WITH OVERLAY */}
          <img
            src="/images/hero_resort_clubhouse.png"
            alt="Dream Villa CTA"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent z-10" />

          {/* LEFT SIDE CONTENT */}
          <div className="relative z-20 w-full h-full flex items-center justify-between px-8 sm:px-16">
            
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-3">
                Your Dream Villa <br className="hidden sm:block" />
                is Closer Than You Think
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-300 font-medium mb-6">
                Live, Explore, Belong. — Only at <span className="text-white font-bold">KraftedHomes.com</span>
              </p>

              <button
                onClick={onOpenBooking}
                className="px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-2 transition-colors shadow-lg"
              >
                <span>Find Your Villa</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* RIGHT SIDE BADGE/TEXT (OPTIONAL/DECORATIVE) */}
            <div className="hidden md:block">
              <h3 className="text-4xl font-serif italic font-bold text-white/20 transform -rotate-12">
                Luxury Awaits
              </h3>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
