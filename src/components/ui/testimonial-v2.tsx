'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

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

export function TestimonialsSection() {
  return (
    <section 
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white py-14 lg:py-20 relative overflow-hidden border-t border-slate-100"
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 z-10 mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center max-w-[620px] mx-auto mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-100 mb-3">
            ✦ WHAT OUR CUSTOMERS SAY
          </div>

          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
            Loved by Homeowners &amp; <br />
            <span className="text-[#F97316]">Antelia Groves Residents</span>
          </h2>

          <p className="text-center mt-3 text-slate-500 text-[14px] font-medium leading-relaxed max-w-md">
            Discover why over 150+ resident families chose Krafted Homes for their split-level luxury villa in Bengaluru.
          </p>
        </div>

        {/* 6 VILLA OWNERS GRID (3 COLUMNS x 2 ROWS - FULLY VISIBLE & UNCLIPPED) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-7 rounded-[28px] border border-slate-200/90 bg-white shadow-sm hover:shadow-xl hover:border-[#F97316]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* TOP BAR: 5 STARS + VERIFIED VILLA BADGE */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F97316]">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F97316] border border-orange-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Verified Owner
                  </span>
                </div>

                {/* TESTIMONIAL QUOTE TEXT */}
                <p className="text-slate-600 leading-relaxed font-medium text-[13px] sm:text-[14px] mb-6 italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* FOOTER: AVATAR + NAME + ROLE + VILLA NUMBER */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-orange-100 group-hover:ring-[#F97316] transition-all shrink-0"
                />
                <div className="flex flex-col min-w-0">
                  <h4 className="font-extrabold text-[#0F172A] text-sm tracking-tight truncate leading-snug">
                    {item.name}
                  </h4>
                  <span className="text-[11px] font-bold text-[#F97316] leading-tight mt-0.5">
                    {item.role}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400 leading-tight">
                    {item.villaNo}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TestimonialsSection;
