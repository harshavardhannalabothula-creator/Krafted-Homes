'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Layout, Sun, Compass, Trees, Play, Pause } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AboutUsVision() {
  const aboutSlides = [
    {
      id: 0,
      title: 'INDEPENDENT VILLA ELEVATIONS',
      caption: '3-floor modern villa facade with private backyard garden',
      image: '/images/hero_villa_facade.png',
      tag: '01 / VILLA EXTERIOR',
    },
    {
      id: 1,
      title: 'BRIGHT & SPACIOUS LIVING ROOMS',
      caption: 'High ceilings with floor-to-ceiling glass sliding windows',
      image: '/images/hero_living_sanctuary.png',
      tag: '02 / LIVING ROOMS',
    },
    {
      id: 2,
      title: '15,000 SQ.FT RESORT CLUBHOUSE',
      caption: 'Resort clubhouse with swimming pool, gym & sports courts',
      image: '/images/clubhouse.jpg',
      tag: '03 / CLUBHOUSE & POOL',
    },
    {
      id: 3,
      title: '180 SQ.FT PRIVATE BACKYARD GARDEN',
      caption: 'Direct living room access to private wooden deck & lawn',
      image: '/images/private_garden_sanctuary.jpg',
      tag: '04 / PRIVATE GARDEN',
    },
    {
      id: 4,
      title: '10-ACRE GATED COMMUNITY',
      caption: 'Over 40% area dedicated to green trees & walking paths',
      image: '/images/hero_main_aerial.png',
      tag: '05 / MASTERPLAN ESTATE',
    },
    {
      id: 5,
      title: 'ROOFTOP SKY TERRACE',
      caption: 'Starlit outdoor pergola dining and open sky views',
      image: '/images/room_terrace.jpg',
      tag: '06 / SKY TERRACE',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Automatic non-stop slideshow cycle every 1.5 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % aboutSlides.length);
    }, 1500);
    return () => clearInterval(timer);
  }, [isPlaying, aboutSlides.length]);

  const currentSlide = aboutSlides[activeSlide];

  const principles = [
    {
      number: '01',
      title: 'MODERN 3-FLOOR DESIGN',
      quote: '“Our 3-floor villa design creates large living spaces, family privacy, and open rooms.”',
      icon: Layout,
      image: '/images/hero_living_sanctuary.png',
      highlights: [
        'High ceilings in living rooms for fresh air',
        'Quiet master bedrooms for complete family privacy',
        'Spacious room layouts for modern living',
        'Open dining islands & rooftop sky terraces',
      ],
    },
    {
      number: '02',
      title: 'GREEN LIVING & FRESH AIR',
      quote: '“Every living room opens directly into a 180 sq.ft private garden deck awash with daylight.”',
      icon: Sun,
      image: '/images/private_garden_sanctuary.jpg',
      highlights: [
        'Large glass sliding doors for natural sunlight',
        'Private wooden backyard garden sit-out decks',
        'Over 40% community land area for green trees',
        'Fresh natural breeze and peaceful garden views',
      ],
    },
    {
      number: '03',
      title: 'ROOMS FOR WORK & RELAXATION',
      quote: '“Designed with dedicated spots for work-from-home, quiet rest, and family entertainment.”',
      icon: Compass,
      image: '/images/room_terrace.jpg',
      highlights: [
        'Home office and study nooks for work',
        'Multipurpose family study and media rooms',
        'Rooftop sky decks for outdoor evening dining',
        'Quiet reading corners designed for relaxation',
      ],
    },
    {
      number: '04',
      title: 'RESORT CLUBHOUSE & POOL',
      quote: '“A 15,000+ sq.ft resort clubhouse featuring a swimming pool, sports courts, and fitness.”',
      icon: Trees,
      image: '/images/clubhouse.jpg',
      highlights: [
        'Swimming pool, kids pool & fitness gym',
        'Indoor badminton & squash sports courts',
        'Organic herb gardens & butterfly flower beds',
        'Tree-lined walking tracks & outdoor seating',
      ],
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-[#F4F0E7] text-[#111722] relative overflow-hidden border-b border-[#D5D0C6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* TOP EDITORIAL TWO-COLUMN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20 pb-12 border-b border-[#D5D0C6]">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 space-y-5 text-left">
            
            {/* EYEBROW */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B18A4A]/10 border border-[#B18A4A]/30 text-xs font-bold text-[#B18A4A] uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B18A4A]" />
              <span>04 — BRAND PHILOSOPHY</span>
            </motion.div>

            {/* MAIN HEADLINE */}
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold text-[#111722] tracking-tight leading-[1.08] uppercase"
            >
              BUILDING LUXURY <br className="hidden sm:inline" />
              <span className="text-[#B18A4A]">VILLA HOMES</span>
            </motion.h2>

            {/* PHILOSOPHY STORY */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 pt-1"
            >
              <p className="text-lg sm:text-xl font-bold text-[#8C6527] leading-snug">
                “Building peaceful villa homes where families enjoy privacy, nature, and luxury.”
              </p>
              
              <p className="text-sm font-normal text-[#374151] leading-relaxed max-w-xl">
                At <strong className="text-[#111722]">Krafted Homes</strong>, we build homes with thoughtful design. Antelia Groves is our 10-acre gated villa community in Whitefield-Sarjapur Villa Corridor, Bengaluru — built with spacious rooms, natural daylight, private backyard gardens, and a 15,000+ sq.ft resort clubhouse.
              </p>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: SLIDESHOW SHOWCASE */}
          <div className="lg:col-span-6 space-y-3">
            
            <div className="relative rounded-2xl overflow-hidden border border-[#D5D0C6] shadow-xl bg-[#F4F0E7] aspect-[16/11] group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide.id}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1.00 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover brightness-100"
                />
              </AnimatePresence>

              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-3.5 py-1.5 bg-[#F4F0E7]/95 backdrop-blur-md border border-[#D5D0C6] rounded-full text-[#111722] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-[#B18A4A] hover:text-white transition-all shadow-xs cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3 h-3 text-[#8C6527] shrink-0" />
                      <span>AUTO MOVING</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#8C6527] shrink-0" />
                      <span>PAUSED</span>
                    </>
                  )}
                </button>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-5 bg-[#F4F0E7]/95 backdrop-blur-md border-t border-[#D5D0C6] text-[#111722] flex flex-col gap-1 z-10 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8C6527]">
                    {currentSlide.tag}
                  </span>
                  <span className="text-xs font-bold text-[#8C6527]">
                    0{activeSlide + 1} / 0{aboutSlides.length}
                  </span>
                </div>
                <h4 className="text-base font-extrabold text-[#111722] uppercase tracking-wide">
                  {currentSlide.title}
                </h4>
                <p className="text-xs font-normal text-[#374151] line-clamp-1">
                  {currentSlide.caption}
                </p>
                
                <div className="flex items-center gap-1.5 pt-2">
                  {aboutSlides.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-[3px] rounded-full transition-all duration-500 ${
                        idx === activeSlide ? 'w-8 bg-[#8C6527]' : 'w-2.5 bg-[#D5D0C6]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 CORE PRINCIPLES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#EFECE6] border border-[#D5D0C6] rounded-2xl p-5 shadow-xs group hover:border-[#B18A4A] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#D5D0C6] mb-4 bg-[#F4F0E7] group">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#F4F0E7]/95 backdrop-blur-md border border-[#D5D0C6] text-xs font-bold text-[#8C6527] shadow-xs">
                      {p.number} — FEATURE
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#D5D0C6]">
                    <span className="text-xs font-bold text-[#B18A4A] tracking-wider">
                      PILLAR {p.number}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#F4F0E7] border border-[#D5D0C6] flex items-center justify-center text-[#8C6527] group-hover:bg-[#B18A4A] group-hover:text-white transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-[#111722] mb-2 group-hover:text-[#8C6527] transition-colors uppercase tracking-wide leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-xs font-bold text-[#8C6527] mb-3 leading-relaxed">
                    {p.quote}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#D5D0C6]">
                    {p.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs font-normal text-[#374151]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6527] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 pt-10 border-t border-[#D5D0C6] text-center max-w-2xl mx-auto"
        >
          <h3 className="text-3xl sm:text-5xl font-extrabold text-[#111722] tracking-wider uppercase mb-4 leading-tight">
            LUXURY VILLAS <span className="text-[#B18A4A]">BENGALURU</span>
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-bold text-[#8C6527] uppercase tracking-wider">
            <span>SPACE.</span>
            <span>LIGHT.</span>
            <span>NATURE.</span>
            <span>PRIVACY.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
