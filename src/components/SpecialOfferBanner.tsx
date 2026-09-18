'use client';

import { ArrowRight, Sparkles, ShieldCheck, Clock, Gift, Percent, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SpecialOfferBannerProps {
  onOpenBooking?: () => void;
}

export default function SpecialOfferBanner({ onOpenBooking }: SpecialOfferBannerProps) {
  // Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 18, mins: 42, secs: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: 59, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="offers" className="w-full bg-white py-12 lg:py-16 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* LUXURY LIGHT LAUNCH OFFER CONTAINER */}
        <div className="relative w-full rounded-[36px] overflow-hidden shadow-lg bg-white border border-slate-200/90 p-8 sm:p-12 lg:p-14">
          
          <div className="relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* LEFT 7 COLUMNS: OFFER COPY & BENEFITS */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/80 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-200">
                <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
                <span>LIMITED FESTIVE LAUNCH PRIVILEGES</span>
              </div>

              {/* HEADLINE */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F172A] leading-[1.12] tracking-tight">
                Save Up to <span className="text-[#F97316]">₹25 Lakhs</span> <br />
                on Early Bird Bookings
              </h2>

              {/* SUBTITLE */}
              <p className="text-[14px] sm:text-[15px] text-slate-600 font-medium leading-relaxed max-w-xl">
                Unlock inaugural pricing, complimentary modular interior package, and zero stamp duty burden for the first 15 villa buyers at Antelia Groves.
              </p>

              {/* 3 VIP BENEFIT PILLS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full pt-1">
                <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-2xl border border-amber-200/80 shadow-sm">
                  <ShieldCheck className="w-4 h-4 text-[#F97316] shrink-0" />
                  <span className="text-[12px] font-bold text-[#0F172A]">Zero Stamp Duty</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-2xl border border-amber-200/80 shadow-sm">
                  <Gift className="w-4 h-4 text-[#F97316] shrink-0" />
                  <span className="text-[12px] font-bold text-[#0F172A]">Free Interior Decor</span>
                </div>

                <div className="flex items-center gap-2.5 bg-white px-4 py-3 rounded-2xl border border-amber-200/80 shadow-sm">
                  <Percent className="w-4 h-4 text-[#F97316] shrink-0" />
                  <span className="text-[12px] font-bold text-[#0F172A]">10:90 Payment Plan</span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button
                  onClick={onOpenBooking}
                  className="px-8 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-[13px] font-extrabold rounded-full flex items-center gap-2.5 transition-all shadow-lg shadow-orange-500/25 active:scale-95 cursor-pointer"
                >
                  <span>Claim Early Bird Offer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenBooking}
                  className="px-7 py-3.5 bg-white hover:bg-slate-50 text-[#0F172A] text-[13px] font-bold rounded-full border border-slate-200/90 shadow-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Schedule VIP Site Tour</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>

            </div>

            {/* RIGHT 5 COLUMNS: CLEAN LIGHT COUNTDOWN TIMER CARD */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-[32px] border border-amber-200/90 text-[#0F172A] shadow-xl flex flex-col space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#F97316] animate-pulse" />
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">OFFER EXPIRES IN</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#F97316] text-white px-3 py-1 rounded-full shadow-sm">
                    12 / 15 TAKEN
                  </span>
                </div>

                {/* 4 DIGIT COUNTDOWN GRID */}
                <div className="grid grid-cols-4 gap-3 text-center">
                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                    <span className="text-2xl sm:text-3xl font-black text-[#0F172A] block leading-none">{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mt-1.5">Days</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                    <span className="text-2xl sm:text-3xl font-black text-[#0F172A] block leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mt-1.5">Hours</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                    <span className="text-2xl sm:text-3xl font-black text-[#0F172A] block leading-none">{String(timeLeft.mins).padStart(2, '0')}</span>
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mt-1.5">Mins</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200/70">
                    <span className="text-2xl sm:text-3xl font-black text-[#F97316] block leading-none">{String(timeLeft.secs).padStart(2, '0')}</span>
                    <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mt-1.5">Secs</span>
                  </div>
                </div>

                {/* SLIDER / PROGRESS BAR */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold text-slate-600">
                    <span>Inaugural Quota Filled</span>
                    <span className="text-[#F97316]">80% Claimed</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
                    <div className="h-full bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-full w-[80%] transition-all duration-1000 shadow-sm" />
                  </div>
                </div>

                <div className="text-center pt-1 border-t border-slate-100">
                  <span className="text-[11px] text-slate-500 font-medium">
                    ✦ Guaranteed price lock upon booking confirmation
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
