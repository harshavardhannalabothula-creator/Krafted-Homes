'use client';

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Sun, Moon, Star, Quote } from 'lucide-react';

// --- Types ---
interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// --- Real Estate Antelia Groves / Krafted Homes Testimonials ---
const testimonials: Testimonial[] = [
  {
    text: "Buying our 4 BHK split-level villa at Antelia Groves was the best decision for our family. The double-height living room and private garden space are truly world-class.",
    image: "/images/indian_family_villa.png",
    name: "Dr. Rajesh & Sunita Verma",
    role: "4 BHK Villa Owners",
  },
  {
    text: "The construction quality, natural daylighting, and 70% open green space set Krafted Homes apart. The 15,000 sq.ft resort clubhouse feels like a 5-star getaway.",
    image: "/images/family_moving_in.png",
    name: "Ananya & Vikram Rao",
    role: "3 BHK Villa Owners",
  },
  {
    text: "As an NRI investor, complete RERA approval and clear documentation were essential. Krafted Homes made the booking and site progress tracking completely transparent.",
    image: "/images/handing_keys.png",
    name: "Suresh Menon",
    role: "NRI Property Investor",
  },
  {
    text: "The architectural finesse of split-level villas with private backyard decks gives complete privacy while staying connected to the vibrant 10-acre community.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    name: "Meera Reddy",
    role: "Architect & Villa Owner",
  },
  {
    text: "From foundation to handover, the Krafted Homes engineering team maintained absolute professionalism. The eco-friendly design and solar provisions are fantastic.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    name: "Karthik Sundaram",
    role: "Tech Executive & Buyer",
  },
  {
    text: "Antelia Groves offers the perfect balance between urban connectivity to Whitefield/Sarjapur and serene, peaceful living. Our kids love the open gardens and sports wing.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    name: "Pooja & Sameer Joshi",
    role: "Resident Family",
  },
  {
    text: "The bespoke floor plan customization allowed us to create a private home office and sky lounge terrace. Couldn't have asked for a better home builder!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    name: "Arjun Nair",
    role: "Custom Villa Owner",
  },
  {
    text: "Visiting the 3D Masterplan CAD center and seeing our exact villa position before booking gave us 100% confidence. Krafted Homes delivers true luxury.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    name: "Deepika & Rahul Kapoor",
    role: "Villa Buyers",
  },
  {
    text: "Unbeatable location, pristine greenery, split-level floor plans, and a dedicated customer care team. Krafted Homes has raised the bar for Bengaluru luxury living.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    name: "Vikramaditya Hegde",
    role: "Gated Community Resident",
  },
];

const firstColumn = testimonials.slice(0, 1);
const secondColumn = testimonials.slice(1, 2);
const thirdColumn = testimonials.slice(2, 3);

// --- Sub-Components ---
const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 25,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 pb-4 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <motion.li 
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{ 
                    scale: 1.03,
                    y: -4,
                    boxShadow: "0 20px 40px -12px rgba(249, 115, 22, 0.15), 0 8px 8px -4px rgba(0, 0, 0, 0.04)",
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                  className="p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm max-w-[320px] sm:max-w-[360px] w-full bg-white dark:bg-slate-900 transition-all duration-300 cursor-default select-none group focus:outline-none" 
                >
                  <blockquote className="m-0 p-0">
                    <div className="flex items-center gap-1 mb-2.5 text-[#F97316]">
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-[13px] sm:text-[14px] m-0 transition-colors duration-300 min-h-[64px]">
                      &ldquo;{text}&rdquo;
                    </p>

                    <footer className="flex items-center gap-3 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={`Avatar of ${name}`}
                        className="h-10 w-10 rounded-full object-cover ring-2 ring-orange-100 dark:ring-orange-900/50 group-hover:ring-[#F97316] transition-all duration-300 ease-in-out"
                      />
                      <div className="flex flex-col">
                        <cite className="font-extrabold not-italic tracking-tight leading-4 text-[#0F172A] dark:text-white transition-colors duration-300 text-[13px]">
                          {name}
                        </cite>
                        <span className="text-[11px] leading-4 font-semibold tracking-tight text-[#F97316] mt-0.5 transition-colors duration-300">
                          {role}
                        </span>
                      </div>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <section 
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white py-12 lg:py-16 relative overflow-hidden border-t border-slate-100"
    >
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1]
        }}
        className="max-w-7xl px-4 sm:px-6 lg:px-8 z-10 mx-auto"
      >
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center max-w-[580px] mx-auto mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-100 mb-3">
            ✦ WHAT OUR CUSTOMERS SAY
          </div>

          <h2 id="testimonials-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
            Loved by Homeowners & <br />
            <span className="text-[#F97316]">Antelia Groves Residents</span>
          </h2>

          <p className="text-center mt-3 text-slate-600 text-[14px] font-medium leading-relaxed max-w-md">
            Discover why over 150+ families chose Krafted Homes for their split-level luxury villa in Bengaluru.
          </p>
        </div>

        {/* 3 COLUMNS - EXACTLY 1 CUSTOMER BOX PER COLUMN (TOTAL 3 CUSTOMERS) */}
        <div 
          className="flex justify-center gap-6 mt-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[225px] overflow-hidden"
          role="region"
          aria-label="Scrolling Testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={24} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={28} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={26} />
        </div>
      </motion.div>
    </section>
  );
}

export default TestimonialsSection;
