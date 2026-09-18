'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
  villaNo: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Buying our 4 BHK split-level villa at Antelia Groves was the best decision for our family. The double-height living room and private garden space are truly world-class.",
    image: "/images/indian_family_villa.png",
    name: "Dr. Rajesh & Sunita Verma",
    role: "4 BHK Villa Owners",
    villaNo: "Villa #12, Antelia Groves",
  },
  {
    text: "The construction quality, natural daylighting, and 70% open green space set Krafted Homes apart. The 15,000 sq.ft resort clubhouse feels like a 5-star getaway.",
    image: "/images/family_moving_in.png",
    name: "Ananya & Vikram Rao",
    role: "3 BHK Villa Owners",
    villaNo: "Villa #08, Antelia Groves",
  },
  {
    text: "As an NRI investor, complete RERA approval and clear documentation were essential. Krafted Homes made the booking and site progress tracking completely transparent.",
    image: "/images/handing_keys.png",
    name: "Suresh & Meenakshi Menon",
    role: "NRI Property Investors",
    villaNo: "Villa #42, Antelia Groves",
  },
  {
    text: "From foundation to keys handover, the Krafted Homes engineering team maintained absolute perfection. The private teak deck and solar provisions are fantastic.",
    image: "/images/hero_villa_facade.png",
    name: "Karthik & Deepika Sundaram",
    role: "4 BHK Grand Estate Owners",
    villaNo: "Villa #19, Antelia Groves",
  },
  {
    text: "Antelia Groves offers the perfect balance between urban connectivity to Sarjapur IT parks and serene, peaceful living. Our kids love the private backyard garden.",
    image: "/images/private_garden_sanctuary.jpg",
    name: "Pooja & Sameer Joshi",
    role: "3 BHK Smart Villa Owners",
    villaNo: "Villa #27, Antelia Groves",
  },
  {
    text: "The bespoke floor plan customization allowed us to create a private home office, infinity plunge pool, and sky lounge terrace. Truly Bengaluru's finest villa builder!",
    image: "/images/teak_backyard_deck.jpg",
    name: "Arjun & Sneha Hegde",
    role: "5 BHK Mansion Owners",
    villaNo: "Villa #01, Antelia Groves",
  },
];

const col1 = [testimonials[0], testimonials[3]];
const col2 = [testimonials[1], testimonials[4]];
const col3 = [testimonials[2], testimonials[5]];

const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-lg hover:border-[#F97316]/40 transition-all duration-300 flex flex-col justify-between group my-2">
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-0.5 text-[#F97316]">
          {[...Array(5)].map((_, starIdx) => (
            <Star key={starIdx} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>

        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-[#F97316] border border-orange-100 flex items-center gap-1">
          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
          Verified Owner
        </span>
      </div>

      <p className="text-slate-800 leading-relaxed font-semibold text-[13px] sm:text-[14px] mb-4 italic">
        &ldquo;{item.text}&rdquo;
      </p>
    </div>

    <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
      <img
        src={item.image}
        alt={item.name}
        className="h-9 w-9 rounded-full object-cover ring-2 ring-orange-100 group-hover:ring-[#F97316] transition-all shrink-0"
      />
      <div className="flex flex-col min-w-0">
        <h4 className="font-extrabold text-[#0F172A] text-[13px] tracking-tight truncate leading-tight">
          {item.name}
        </h4>
        <span className="text-[10px] font-bold text-[#F97316] leading-tight mt-0.5">
          {item.role}
        </span>
        <span className="text-[9px] font-medium text-slate-400 leading-tight">
          {item.villaNo}
        </span>
      </div>
    </div>
  </div>
);

const AnimatedColumn = ({ items, duration = 30, className = '' }: { items: Testimonial[]; duration?: number; className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{ translateY: ['0%', '-50%'] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        className="flex flex-col"
      >
        {[...items, ...items].map((item, idx) => (
          <TestimonialCard key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <section 
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white py-10 lg:py-14 relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 z-10 mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center max-w-[620px] mx-auto mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[10px] font-extrabold uppercase tracking-widest border border-orange-100 mb-2.5">
            ✦ WHAT OUR CUSTOMERS SAY
          </div>

          <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
            Loved by Homeowners &amp; <br />
            <span className="text-[#F97316]">Antelia Groves Residents</span>
          </h2>

          <p className="text-center mt-2.5 text-slate-500 text-[13px] font-medium leading-relaxed max-w-md">
            Discover why over 150+ resident families chose Krafted Homes for their split-level luxury villa in Bengaluru.
          </p>
        </div>

        {/* 3 COLUMNS SMOOTH SLOW UPWARD SCROLLING CONTAINER */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[440px] sm:max-h-[480px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_6%,black_94%,transparent)]"
        >
          <AnimatedColumn items={col1} duration={32} />
          <AnimatedColumn items={col2} duration={38} className="hidden md:block" />
          <AnimatedColumn items={col3} duration={34} className="hidden lg:block" />
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
