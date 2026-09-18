'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, CheckCircle2, Award, Building2, Key, Users, ArrowRight, ExternalLink } from 'lucide-react';

interface PastDeliveredProjectsSectionProps {
  onOpenBooking?: () => void;
}

export default function PastDeliveredProjectsSection({ onOpenBooking }: PastDeliveredProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Past Work', icon: Camera },
    { id: 'villas', label: 'Delivered Villas', icon: Building2 },
    { id: 'construction', label: 'Construction Quality', icon: Award },
    { id: 'handovers', label: 'Key Handovers', icon: Key },
  ];

  const pastProjects = [
    {
      id: 1,
      title: 'Krafted Luxury Villa — Sarjapur',
      category: 'villas',
      year: 'Delivered 2024',
      location: 'Sarjapur Main Road',
      specs: '3,200 SQ.FT • 4 BHK Luxury',
      desc: 'Custom split-level independent villa with private garden lawn and glass atrium.',
      image: '/images/hero_villa_facade.png',
      badge: 'Completed Project',
    },
    {
      id: 2,
      title: 'Stage 1 RCC Frame & Structural Integrity',
      category: 'construction',
      year: 'Completed 2025',
      location: 'Antelia Enclave',
      specs: 'M35 Grade Concrete • German Waterproofing',
      desc: 'Heavy-duty foundation engineering built to withstand 50+ years of durability.',
      image: '/images/villa_rcc_construction.png',
      badge: 'Quality Milestone',
    },
    {
      id: 3,
      title: 'Keys Handover Ceremony to Villa Owner',
      category: 'handovers',
      year: 'Delivered 2025',
      location: 'Villa #14, Antelia',
      specs: '100% On-Time Handover • RERA Compliant',
      desc: 'Seamless possession ceremony with clear documentation and zero hidden costs.',
      image: '/images/villa_keys_handover_ceremony.png',
      badge: 'On-Time Possession',
    },
    {
      id: 4,
      title: 'Modern Daylight Villa Architecture',
      category: 'villas',
      year: 'Delivered 2024',
      location: 'Whitefield Corridor',
      specs: '2,800 SQ.FT • 3 BHK Garden',
      desc: 'Floor-to-ceiling glass paneling and energy-efficient thermal insulation.',
      image: '/images/bengaluru_daylight_villa.png',
      badge: 'Completed Architecture',
    },
    {
      id: 5,
      title: '15,000 SQ.FT Resort Clubhouse & Pool',
      category: 'construction',
      year: 'Operational 2025',
      location: 'Township Hub',
      specs: 'Olympic Pool • Wellness Gym • Lawn',
      desc: 'World-class community recreation center delivered for resident families.',
      image: '/images/hero_resort_clubhouse.png',
      badge: 'Live Amenity',
    },
    {
      id: 6,
      title: 'Happy Resident Family at Delivered Villa',
      category: 'handovers',
      year: 'Delivered 2025',
      location: 'Villa #22, Antelia',
      specs: 'Custom Modular Interiors Fitted',
      desc: 'Welcoming our 100th resident family into their dream Krafted Home.',
      image: '/images/happy_villa_family_lawn.png',
      badge: 'Satisfied Customer',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? pastProjects
    : pastProjects.filter(p => p.category === activeFilter);

  return (
    <section id="past-work" className="w-full bg-white py-16 lg:py-22 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-100 pb-6">
          <div className="flex flex-col items-start">
            <span className="text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100 mb-3">
              ✦ PAST COMPLETED WORK &amp; DELIVERED LEGACY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-2">
              Our Past Delivered Projects &amp; Work
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold max-w-2xl">
              Explore our proven track record of delivered luxury villas, high-grade construction engineering, and key handovers to happy families.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="text-[13px] font-extrabold text-white bg-[#0F172A] hover:bg-[#1E293B] cursor-pointer flex items-center gap-2 px-5 py-3 rounded-full shadow-md transition-all shrink-0"
          >
            <span>Book Past Project Site Tour</span>
            <ArrowRight className="w-4 h-4 text-[#F97316]" />
          </button>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeFilter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 shrink-0 border ${
                  isActive
                    ? 'bg-[#F97316] text-white border-[#F97316] shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:text-[#F97316] border-slate-200/80 hover:border-orange-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3-COLUMN GALLERY CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={onOpenBooking}
                className="bg-white rounded-[28px] overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#F97316]/50 transition-all duration-300 cursor-pointer flex flex-col group"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* TOP LEFT BADGE */}
                  <span className="absolute top-3.5 left-3.5 bg-slate-950/85 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-full border border-white/20">
                    {item.badge}
                  </span>

                  {/* TOP RIGHT YEAR */}
                  <span className="absolute top-3.5 right-3.5 bg-[#F97316] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {item.year}
                  </span>
                </div>

                {/* CARD BODY */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-extrabold text-[#F97316] uppercase tracking-wider block mb-1">
                      📍 {item.location}
                    </span>
                    <h3 className="text-lg font-extrabold text-[#0F172A] mb-1.5 group-hover:text-[#F97316] transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-bold text-slate-700 mb-2">
                      {item.specs}
                    </div>
                    <p className="text-[13px] text-slate-700 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Verified Delivered
                    </span>
                    
                    <span className="text-xs font-bold text-[#F97316] group-hover:underline flex items-center gap-1">
                      View Gallery <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* BOTTOM PROMISE BANNER */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F97316] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-[#0F172A]">100% On-Time Delivery Guarantee</h4>
              <p className="text-xs text-slate-500 font-medium">Over 150+ villas delivered across Sarjapur and Whitefield with zero construction delays.</p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors shadow-sm shrink-0 cursor-pointer"
          >
            Inspect Completed Work
          </button>
        </div>

      </div>
    </section>
  );
}
