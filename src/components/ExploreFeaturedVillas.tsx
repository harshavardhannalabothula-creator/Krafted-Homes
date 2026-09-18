'use client';

import { ArrowRight, Sparkles, BedDouble, Square, Calendar, Cpu, Trees, Waves } from 'lucide-react';

interface ExploreFeaturedVillasProps {
  onOpenBooking: () => void;
}

export default function ExploreFeaturedVillas({ onOpenBooking }: ExploreFeaturedVillasProps) {
  const futureVillas = [
    {
      id: 1,
      title: 'Future 3 BHK Smart Courtyard Villa',
      type: '3 BHK + Maid',
      bua: '2,400 SQ.FT',
      price: '₹1.85 Cr',
      tag: 'East Facing • Solar Ready',
      phase: 'UPCOMING PHASE 1',
      highlights: 'Double-height ceiling, private lawn & EV dock',
      image: '/images/hero_villa_white.png',
      icon: Cpu,
    },
    {
      id: 2,
      title: 'Future 4 BHK Split-Level Sanctuary',
      type: '4 BHK + Family Lounge',
      bua: '3,200 SQ.FT',
      price: '₹2.35 Cr',
      tag: 'West Facing • Glass Atrium',
      phase: 'UPCOMING PHASE 1',
      highlights: 'Sunken private garden & dual sky terrace',
      image: '/images/daylight_estate.jpg',
      icon: Trees,
    },
    {
      id: 3,
      title: 'Future 4 BHK Grand Garden Estate',
      type: '4 BHK + Studio',
      bua: '3,800 SQ.FT',
      price: '₹2.85 Cr',
      tag: 'Corner Plot • Private Lawn',
      phase: 'PRE-LAUNCH PHASE 2',
      highlights: 'Wrap-around green deck & 2-car covered garage',
      image: '/images/private_garden_sanctuary.jpg',
      icon: Sparkles,
    },
    {
      id: 4,
      title: 'Future 5 BHK Presidential Mansion',
      type: '5 BHK + Private Elevator',
      bua: '4,800 SQ.FT',
      price: '₹3.65 Cr',
      tag: 'Private Pool • Sky Deck',
      phase: 'SIGNATURE COLLECTION',
      highlights: 'Infinity plunge pool, rooftop deck & 3-car garage',
      image: '/images/hero_resort_clubhouse.png',
      icon: Waves,
    },
  ];

  return (
    <section id="villas" className="relative z-30 w-full bg-white py-14 lg:py-18 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="flex flex-col items-start">
            <span className="text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100 mb-2.5">
              ✦ UPCOMING FUTURE RESIDENCES &amp; MASTERPLAN
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-1">
              Explore Future Villa Plans &amp; Layouts
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl">
              Preview future 3, 4 &amp; 5 BHK split-level villa architecture planned across 10 acres at Antelia Groves.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="text-[13px] font-extrabold text-[#F97316] hover:text-[#EA580C] cursor-pointer flex items-center gap-2 transition-colors shrink-0 bg-orange-50 px-4 py-2.5 rounded-full border border-orange-200"
          >
            <span>Request Future Masterplan PDF</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4-COLUMN FUTURE VILLA CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {futureVillas.map((v) => {
            const HighlightIcon = v.icon;
            return (
              <div
                key={v.id}
                onClick={onOpenBooking}
                className="bg-white rounded-[28px] p-3.5 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#F97316]/60 transition-all duration-300 cursor-pointer flex flex-col group hover:-translate-y-1"
              >
                {/* IMAGE CONTAINER WITH FUTURE PHASE BADGES */}
                <div className="relative h-48 sm:h-52 rounded-[20px] overflow-hidden mb-4 bg-slate-100">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* PHASE BADGE (TOP LEFT) */}
                  <span className="absolute top-3 left-3 bg-[#F97316] text-white px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider shadow-md">
                    {v.phase}
                  </span>

                  {/* SPEC BADGE (BOTTOM RIGHT) */}
                  <span className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-bold border border-white/20">
                    {v.tag}
                  </span>
                </div>

                {/* CARD DETAILS */}
                <div className="px-2 pb-2 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-base font-extrabold text-[#0F172A] mb-1.5 leading-snug group-hover:text-[#F97316] transition-colors">
                      {v.title}
                    </h4>
                    
                    <div className="flex items-center gap-3 text-[11px] font-bold text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <BedDouble className="w-3.5 h-3.5 text-[#F97316]" />
                        {v.type}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Square className="w-3.5 h-3.5 text-[#F97316]" />
                        {v.bua}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2 text-[11px] text-slate-600 font-medium">
                      <HighlightIcon className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" />
                      <span>{v.highlights}</span>
                    </div>
                  </div>

                  {/* PRICE & BOOK BUTTON */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div>
                      <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider">PRE-LAUNCH FROM</span>
                      <span className="text-base font-extrabold text-[#0F172A]">
                        {v.price}
                      </span>
                    </div>
                    
                    <button className="px-4 py-2 rounded-full bg-[#F97316] text-white text-xs font-extrabold hover:bg-[#EA580C] transition-all shadow-sm group-hover:shadow-md active:scale-95 cursor-pointer">
                      Get Future Plan
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
