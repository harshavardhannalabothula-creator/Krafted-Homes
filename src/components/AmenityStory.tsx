'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dumbbell, Users, BookOpen, Coffee, Sun, Heart, MapPin, Check, ArrowRight, ShieldCheck, Sparkles, Activity } from 'lucide-react';
import Clubhouse3DEngine from './Clubhouse3DEngine';

interface AmenityStoryProps {
  onOpenBooking?: () => void;
}

export default function AmenityStory({ onOpenBooking }: AmenityStoryProps) {
  const [activeHotspot, setActiveHotspot] = useState<number>(0);

  const clubhouseHotspots = [
    {
      id: 0,
      code: 'MOVE',
      title: 'Sports + Fitness Wing',
      tagline: 'High-Performance Indoor Athletics & Aerobics',
      x: '25%',
      y: '35%',
      icon: Dumbbell,
      desc: 'Wooden double-court badminton arena, international regulation glass-backed squash court, state-of-the-art gym equipment, and zumba aerobics floor.',
      features: [
        'Wooden indoor badminton courts',
        'Glass-backed squash arena',
        'High-tech cardio & strength gym',
        'Spring-floor Zumba & aerobics studio',
      ],
      stats: '4,000 SQ.FT ATHLETICS WING • HARDWOOD FLOORING',
      image: '/images/sports_wing.jpg',
      badgeColor: '#c5a059',
    },
    {
      id: 1,
      code: 'GATHER',
      title: 'Party + Social Pavilion',
      tagline: 'Celebrations, Banquet Events & Guest Suites',
      x: '70%',
      y: '30%',
      icon: Users,
      desc: 'Grand indoor banquet hall connected to garden patios, paired with boutique hotel-style guest rooms for your visiting family and friends.',
      features: [
        'Grand air-conditioned banquet hall',
        'Boutique hotel guest suites',
        'Spacious welcome reception lobby',
        'Event catering staging area',
      ],
      stats: '300-GUEST BANQUET HALL • 6 GUEST SUITES',
      image: '/images/banquet_hall.jpg',
      badgeColor: '#1e242b',
    },
    {
      id: 2,
      code: 'UNWIND',
      title: 'Reading + Hobby Nooks',
      tagline: 'Acoustic Solitude & Creative Expression',
      x: '50%',
      y: '65%',
      icon: BookOpen,
      desc: 'Acoustically treated quiet reading rooms with natural light, alongside dedicated studio space for pottery, painting, and arts.',
      features: [
        'Quiet acoustic library & reading nooks',
        'Creative arts & painting studio',
        'Co-working executive desks',
        'Private conversation lounges',
      ],
      stats: '-50dB ACOUSTIC LIBRARY • 2,000+ BOOK ARCHIVE',
      image: '/images/library_nook.jpg',
      badgeColor: '#5e6951',
    },
    {
      id: 3,
      code: 'CONNECT',
      title: 'Café + Al-Fresco Terrace',
      tagline: 'Poolside BBQ Patio & Live Culinary Counters',
      x: '75%',
      y: '70%',
      icon: Coffee,
      desc: 'Al-fresco dining terrace overlooking the water court, featuring live food preparation counters and starlit fire pit lounges.',
      features: [
        'Poolside BBQ patio & fire pit',
        'Live food counter & juice bar',
        'Shaded pergola seating',
        'Sunset cocktail terrace',
      ],
      stats: '60-SEAT AL-FRESCO PATIO • STARLIT FIRE PIT',
      image: '/images/cafe_terrace.jpg',
      badgeColor: '#a9785b',
    },
    {
      id: 4,
      code: 'PLAY',
      title: 'Kids + Recreation Zone',
      tagline: 'Indoor Games Room & Adventure Playground',
      x: '30%',
      y: '70%',
      icon: Sun,
      desc: 'Indoor games lounge with table tennis, foosball, and billiards, plus rubberized outdoor adventure play parks for children.',
      features: [
        'Table tennis & billiards lounge',
        'Board games & video room',
        'Rubber-paved kids play park',
        'Parent observation seating',
      ],
      stats: 'RUBBER-PADDED PLAY PARK • GAMES LOUNGE',
      image: '/images/kids_play.jpg',
      badgeColor: '#0284c7',
    },
    {
      id: 5,
      code: 'RESET',
      title: 'Meditation + Nature Deck',
      tagline: 'Lap Swimming Pool, Water Courts & Zen Yoga',
      x: '45%',
      y: '25%',
      icon: Heart,
      desc: 'Temperature-controlled lap swimming pool bordered by soothing water courts, zen stone meditation nooks, and morning yoga decks.',
      features: [
        'Resort lap swimming pool',
        'Cascading water courts',
        'Zen yoga deck under palm shade',
        'Quiet reflection ponds',
      ],
      stats: '25M LAP POOL • LOTUS REFLECTION PONDS',
      image: '/images/zen_yoga.jpg',
      badgeColor: '#5e6951',
    },
  ];

  const active = clubhouseHotspots[activeHotspot];
  const Icon = active.icon;

  return (
    <section id="amenities" className="py-24 bg-[#F4F0E7] text-[#202631] relative overflow-hidden border-b border-[#D5D0C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] font-mono font-bold text-[#B18A4A] block mb-3">
            15,000+ SQ.FT ANCHOR
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-[#111722] mb-4 leading-tight">
            THE SOCIAL <span className="text-[#B18A4A] italic font-normal">HEART</span>
          </h2>
          <p className="text-[#202631]/80 text-base font-light leading-relaxed max-w-xl mx-auto">
            Not just amenities—a living 3D architectural sanctuary where sports, celebrations, quiet reflection, and community converge.
          </p>
        </div>

        {/* Hotspot Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-8">
          {clubhouseHotspots.map((hs, index) => {
            const HIcon = hs.icon;
            const isSelected = activeHotspot === index;
            return (
              <button
                key={hs.code}
                onClick={() => setActiveHotspot(index)}
                className={`p-4 rounded-xs border flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#111722] text-white border-[#111722] font-bold shadow-md scale-105'
                    : 'bg-[#DED8CC]/60 text-[#202631] border-[#D5D0C6] hover:border-[#B18A4A]'
                }`}
              >
                <HIcon className="w-4 h-4 text-[#B18A4A]" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">{hs.code}</span>
                <span className="text-[10px] font-sans font-light opacity-80 line-clamp-1">{hs.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Spatial Viewport & Details Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Real-Time Interactive 3D WebGL Clubhouse Viewport */}
          <div className="lg:col-span-8 relative min-h-[480px] rounded-xl overflow-hidden border border-[#D5D0C6] shadow-lg">
            <Clubhouse3DEngine activeHotspot={activeHotspot} />
          </div>

          {/* Hotspot Wing Detail Panel */}
          <div className="lg:col-span-4 bg-[#DED8CC]/40 p-8 rounded-xs border border-[#D5D0C6] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#F4F0E7] border border-[#D5D0C6] text-xs font-mono text-[#B18A4A] uppercase tracking-wider mb-4 font-bold">
                <Icon className="w-3.5 h-3.5" />
                <span>HOTSPOT: {active.code}</span>
              </div>

              <h3 className="text-3xl font-serif font-bold text-[#111722] mb-2">{active.title}</h3>
              <p className="text-xs uppercase font-mono tracking-wider text-[#B18A4A] font-bold mb-4">{active.tagline}</p>
              <p className="text-[#202631]/80 text-xs font-light leading-relaxed mb-6">{active.desc}</p>

              <div className="space-y-2 mb-6 bg-[#F4F0E7] p-4 rounded-xs border border-[#D5D0C6]">
                <span className="text-[11px] font-mono text-[#B18A4A] font-bold uppercase block mb-2">
                  Wing Infrastructure Specs:
                </span>
                {active.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#202631] font-light">
                    <Check className="w-3.5 h-3.5 text-[#B18A4A] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {onOpenBooking && (
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xs text-xs font-mono font-bold uppercase tracking-widest text-white bg-[#111722] hover:bg-[#B18A4A] hover:text-[#111722] transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Clubhouse Layouts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
