'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Building2, 
  Star, 
  Sparkles, 
  BadgeCheck, 
  Landmark,
  CheckCircle2
} from 'lucide-react';

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeProgress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return { count, ref };
}

export default function TrustedStatsSection() {
  const villas = useCountUp(150, 2000);
  const acres = useCountUp(10, 2000);
  const loanRate = useCountUp(100, 2000);

  const stats = [
    {
      hook: villas,
      prefix: '',
      suffix: '+',
      label: 'Luxury Split-Level Villas',
      subtext: 'Completed & Delivered in Sarjapur Road',
      icon: Building2,
    },
    {
      hook: acres,
      prefix: '',
      suffix: ' Acres',
      label: 'Gated Villa Township',
      subtext: '70% Open Green Space & Resort Clubhouse',
      icon: Award,
    },
    {
      hook: loanRate,
      prefix: '',
      suffix: '%',
      label: 'Bank Loan Pre-Approved',
      subtext: 'Hassle-free sanction by SBI, HDFC & ICICI',
      icon: Landmark,
    },
    {
      hook: { count: 4.9, ref: null },
      prefix: '',
      suffix: ' ★',
      displayOverride: '4.9 ★',
      label: 'Homeowner Trust Rating',
      subtext: 'Verified reviews from 150+ resident families',
      icon: Star,
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 sm:px-12 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-b border-slate-200/80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-100 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROVEN TRACK RECORD</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
              Trusted by 150+ Families <br />
              <span className="text-[#F97316]">Across Bengaluru</span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-md leading-relaxed">
            Krafted Homes sets the benchmark for luxury gated villa communities in Sarjapur Road with 100% RERA compliance and transparent handovers.
          </p>
        </div>

        {/* STATS BENTO GRID (4 CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative p-7 rounded-3xl bg-[#FBFBFA] border border-slate-200/90 hover:border-[#F97316] hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F97316] border border-orange-100 group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <BadgeCheck className="w-5 h-5 text-emerald-600" />
                  </div>

                  {/* Counter Value */}
                  <div 
                    className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-2 flex items-baseline gap-1"
                    ref={stat.hook.ref}
                  >
                    <span>{stat.prefix}</span>
                    <span>{stat.displayOverride ? stat.displayOverride : `${stat.hook.count}${stat.suffix}`}</span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#0F172A] mb-1 tracking-tight">
                    {stat.label}
                  </h3>

                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {stat.subtext}
                  </p>
                </div>

                {/* Progress Accent Line */}
                <div className="w-full bg-slate-200/80 h-1.5 rounded-full mt-6 overflow-hidden">
                  <div className="bg-[#F97316] h-full rounded-full w-full transform -translate-x-1/4 group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM RERA & BANK TRUST PROOF BANNER */}
        <div className="p-6 sm:p-7 rounded-3xl bg-orange-50/70 border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-[#F97316] text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-[#0F172A] flex items-center gap-2 flex-wrap">
                100% Verified & Approved Township
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                  RERA Certified
                </span>
              </h4>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Clear land title, Occupancy Certificate (OC) status, and pre-approved home loans with 0% processing friction.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 shrink-0 text-xs text-[#0F172A] font-extrabold border-t md:border-t-0 md:border-l border-orange-200/80 pt-4 md:pt-0 md:pl-6 w-full md:w-auto">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
              <span>SBI & HDFC Pre-Approved</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F97316]" />
              <span>150+ NRI Buyers</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


