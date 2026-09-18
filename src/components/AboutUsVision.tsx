'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, MapPin, Home, Layout, ShieldCheck } from 'lucide-react';

export default function AboutUsVision() {
  return (
    <section id="about" className="w-full bg-[#F8F7F2] py-10 lg:py-14 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: VISION TEXT & CTA (Span 4) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-between items-start bg-white p-6 sm:p-8 rounded-[28px] border border-slate-200/80 shadow-sm h-[420px] sm:h-[450px]"
          >
            <div>
              <span className="text-[#F97316] text-[11px] font-extrabold uppercase tracking-[0.2em] mb-3 block">
                01 / THE VISION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-[#0F172A] leading-[1.15] mb-4 tracking-tight">
                A Vision Built on <br />Better Living
              </h2>
              <p className="text-[13px] sm:text-[14px] text-slate-600 leading-relaxed font-medium">
                Antelia Groves is the next chapter of Krafted Homes — evolving from individual luxury homes into a thoughtfully planned 10-acre gated sanctuary where architectural clarity, serene nature and everyday living come together.
              </p>
            </div>
            
            <div className="pt-4">
              <a 
                href="#masterplan"
                className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-[13px] font-extrabold px-6 py-3 rounded-full flex items-center gap-2 transition-all shadow-md group"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* CENTER: VILLA ARCHITECTURAL IMAGE (Span 4) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-4 relative h-[420px] sm:h-[450px] rounded-[28px] overflow-hidden group shadow-md border border-slate-200/60"
          >
            <img 
              src="/images/hero_resort_clubhouse.png" 
              alt="Antelia Groves Luxury Architecture" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
                  <Play className="w-3.5 h-3.5 ml-0.5 fill-current" />
                </div>
                <span className="text-white text-[12px] font-extrabold tracking-wide">
                  Architectural Film
                </span>
              </div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                10-Acre Sanctuary
              </span>
            </div>
          </motion.div>

          {/* RIGHT: STATISTICS CARD (Span 4 - Spacious 2x2 Grid) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 bg-[#0F172A] text-white rounded-[28px] p-6 sm:p-8 flex flex-col justify-center h-[420px] sm:h-[450px] shadow-md border border-slate-800"
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-6">
              
              {/* STAT 1 */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold text-[#F97316] uppercase tracking-widest">LAND SCALE</span>
                  <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                </div>
                <div className="text-2xl font-extrabold text-white tracking-tight mt-1">10+ ACRES</div>
                <div className="text-[10px] text-slate-400 font-medium leading-tight">Gated Enclave</div>
              </div>

              {/* STAT 2 */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold text-[#F97316] uppercase tracking-widest">UNITS</span>
                  <Home className="w-3.5 h-3.5 text-[#F97316]" />
                </div>
                <div className="text-2xl font-extrabold text-white tracking-tight mt-1">189 VILLAS</div>
                <div className="text-[10px] text-slate-400 font-medium leading-tight">3 & 4 BHK Split-Level</div>
              </div>

              {/* STAT 3 */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold text-[#F97316] uppercase tracking-widest">GREENERY</span>
                  <Layout className="w-3.5 h-3.5 text-[#F97316]" />
                </div>
                <div className="text-2xl font-extrabold text-white tracking-tight mt-1">70% OPEN</div>
                <div className="text-[10px] text-slate-400 font-medium leading-tight">Private Gardens</div>
              </div>

              {/* STAT 4 */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-extrabold text-[#F97316] uppercase tracking-widest">CLUBHOUSE</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F97316]" />
                </div>
                <div className="text-2xl font-extrabold text-white tracking-tight mt-1">15K SQ.FT</div>
                <div className="text-[10px] text-slate-400 font-medium leading-tight">Resort Wellness</div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


