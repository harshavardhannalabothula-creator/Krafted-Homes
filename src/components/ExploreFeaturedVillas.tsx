'use client';

import { ArrowRight, Sparkles, BedDouble, Square, ShieldCheck } from 'lucide-react';

interface ExploreFeaturedVillasProps {
  onOpenBooking: () => void;
}

export default function ExploreFeaturedVillas({ onOpenBooking }: ExploreFeaturedVillasProps) {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredVillas = [
    {
      id: 1,
      title: 'Type A East Facing Villa',
      type: '3 BHK Villa',
      bua: '2,400 SQ.FT',
      price: '₹1.85 Cr',
      tag: 'East Facing',
      image: '/images/villa_exterior.jpg',
    },
    {
      id: 2,
      title: 'Type B West Facing Villa',
      type: '3 BHK Villa',
      bua: '2,600 SQ.FT',
      price: '₹1.95 Cr',
      tag: 'West Facing',
      image: '/images/daylight_estate.jpg',
    },
    {
      id: 3,
      title: 'Signature Garden Villa',
      type: '4 BHK Villa',
      bua: '3,000 SQ.FT',
      price: '₹2.45 Cr',
      tag: 'Private Garden',
      image: '/images/private_garden_sanctuary.jpg',
    },
    {
      id: 4,
      title: 'Resort Pool Villa',
      type: '4 BHK Villa',
      bua: '3,400 SQ.FT',
      price: '₹2.75 Cr',
      tag: 'Resort Pool',
      image: '/images/nightfall_estate.jpg',
    },
  ];

  return (
    <section id="featured-villas" className="relative z-30 w-full bg-white py-14 lg:py-18 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col items-start">
            <span className="text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100 mb-2">
              ✦ FEATURED RESIDENCES
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Explore Our Featured Villas
            </h3>
          </div>

          <button
            onClick={(e) => handleScrollTo(e, '#villas')}
            className="text-[13px] font-bold text-slate-500 hover:text-[#F97316] cursor-pointer flex items-center gap-2 transition-colors"
          >
            <span>View All Villas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4-COLUMN CARDS GRID MATCHING REFERENCE SCREENSHOT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredVillas.map((v) => (
            <div
              key={v.id}
              onClick={onOpenBooking}
              className="bg-white rounded-[28px] p-3.5 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col group hover:-translate-y-1"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-48 sm:h-52 rounded-[20px] overflow-hidden mb-4 bg-slate-100">
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* FLOATING BADGE */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-[#0F172A] shadow-sm border border-white/50">
                  {v.tag}
                </span>
              </div>

              {/* CARD DETAILS */}
              <div className="px-2 pb-2 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-extrabold text-[#0F172A] mb-1 group-hover:text-[#F97316] transition-colors">
                    {v.title}
                  </h4>
                  
                  <div className="flex items-center gap-3 text-[11px] font-medium text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-3.5 h-3.5 text-slate-400" />
                      {v.type}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Square className="w-3.5 h-3.5 text-slate-400" />
                      {v.bua}
                    </span>
                  </div>
                </div>

                {/* PRICE & BOOK BUTTON */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">STARTING FROM</span>
                    <span className="text-base font-extrabold text-[#0F172A]">
                      {v.price}
                    </span>
                  </div>
                  
                  <button className="px-5 py-2 rounded-full bg-[#F97316] text-white text-xs font-extrabold hover:bg-[#EA580C] transition-all shadow-sm group-hover:shadow-md active:scale-95">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

