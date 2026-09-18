'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

export default function LuxurySliderSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
      }
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      id: 1,
      title: 'Type A East Facing',
      price: '₹1.85 Cr',
      image: '/images/hero_villa_facade.png',
    },
    {
      id: 2,
      title: 'Type B West Facing',
      price: '₹1.95 Cr',
      image: '/images/daylight_estate.jpg',
    },
    {
      id: 3,
      title: 'Signature Garden Villa',
      price: '₹2.45 Cr',
      image: '/images/private_garden_sanctuary.jpg',
    },
    {
      id: 4,
      title: 'Resort Pool Villa',
      price: '₹2.75 Cr',
      image: '/images/hero_resort_clubhouse.png',
    },
    {
      id: 5,
      title: 'Penthouse Suite',
      price: '₹3.50 Cr',
      image: '/images/hero_living_sanctuary.png',
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center sm:text-left mb-10">
          <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
            Luxury Villas for Special Moments
          </h3>
          <p className="text-xs text-slate-500 font-medium max-w-xl">
            Make every occasion extraordinary with our premium collection of independent villas.
          </p>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative group">
          
          {/* LEFT ARROW */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-[#F97316] shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* RIGHT ARROW */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:text-[#F97316] shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* SCROLL CONTAINER */}
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {slides.map((slide) => (
              <div 
                key={slide.id}
                className="min-w-[280px] w-[280px] sm:min-w-[320px] sm:w-[320px] bg-white rounded-[24px] border border-slate-100 p-3 snap-start shadow-sm hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="w-full h-40 sm:h-48 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                </div>
                <div className="px-2 pb-2">
                  <h4 className="text-sm font-bold text-[#0F172A] mb-1">{slide.title}</h4>
                  <span className="text-[11px] font-bold text-slate-500">{slide.price}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* PAGINATION DOTS */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-[#F97316]"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
        </div>

      </div>
    </section>
  );
}
