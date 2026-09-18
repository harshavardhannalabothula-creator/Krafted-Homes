'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Compass, ArrowRight, Layers, Sun, Shield, Trees, Sparkles, Play, Pause } from 'lucide-react';
import Evolution3DEngine from './Evolution3DEngine';

export default function EvolutionStory() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoLoop, setIsAutoLoop] = useState(true);

  const creationSteps = [
    {
      step: '01',
      title: 'Land Clearance & Eco-Preservation',
      phrase: 'First we cleared the land',
      desc: '10 acres of pristine topography cleared with surgical precision, preserving natural green belts and native trees.',
      detail: 'Carefully demarcating 189 residential plots while reserving over 40% of the estate for open green mindfulness courts and tree-lined avenues.',
      icon: Trees,
    },
    {
      step: '02',
      title: 'Topographic & Laser Survey',
      phrase: 'then surveyed it',
      desc: 'Advanced 3D AutoCAD elevation mapping to optimize micro-climate, wind corridors, and multi-level sunlight exposure.',
      detail: 'Ensuring every split-level villa receives maximum natural cross-ventilation and optimal light throughout all seasons.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'Avenue & Master Road Planning',
      phrase: 'then planned roads',
      desc: 'Wide arterial avenues with pedestrian-first shaded walkways and lush boulevard greenery.',
      detail: 'Vehicular traffic is seamlessly routed along outer loops to create quiet, child-safe inner residential pockets.',
      icon: Layers,
    },
    {
      step: '04',
      title: 'Subsurface Smart Infrastructure',
      phrase: 'then infrastructure',
      desc: 'Underground high-speed fiber, concealed electrical grids, rainwater harvesting, and water courts.',
      detail: 'Zero overhead wires, eco-friendly storm drainage, and automated irrigation for the herb and butterfly gardens.',
      icon: Sun,
    },
    {
      step: '05',
      title: 'Seismic Grade Foundations',
      phrase: 'then foundations',
      desc: 'Precision structural foundation engineering customized for split-level architectural loads.',
      detail: 'Reinforced concrete foundation pads designed for multi-generational structural longevity and moisture protection.',
      icon: Shield,
    },
    {
      step: '06',
      title: '189 Split-Level Villa Architecture',
      phrase: 'then villas...',
      desc: 'Rising in harmony with the terrain—189 independent 3/4 BHK luxury villas with private gardens.',
      detail: 'Featuring Type A 2,262 sq.ft BUA up to 3,000 sq.ft residences with terrace lounges and private backyards.',
      icon: Sparkles,
    },
    {
      step: '07',
      title: 'Community Life & Warm Illumination',
      phrase: 'then thriving life...',
      desc: 'The complete master community comes alive with resort clubhouse, pool deck, and warm window lights.',
      detail: '15,000+ sq.ft clubhouse, multi-sport courts, and glowing street lanterns illuminating starry night skies.',
      icon: Sun,
    },
  ];

  // Auto Step Timer for 7-Step Development Chronicle (2 Seconds per Step)
  useEffect(() => {
    if (!isAutoLoop) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < creationSteps.length - 1 ? prev + 1 : 0));
    }, 2000);
    return () => clearInterval(interval);
  }, [isAutoLoop, creationSteps.length]);

  const positioningPillars = [
    {
      title: 'Spacious Open Layouts',
      desc: 'Seamless floor transitions with double-height volume, floating stairs, and clutter-free interior flow.',
      image: '/images/pillar_01_layouts.jpg',
      tag: 'DOUBLE-HEIGHT VOLUME',
    },
    {
      title: 'Privacy + Connection',
      desc: 'Architects and buyers aligning plans in quiet courtyards; intimate family zones paired with community spaces.',
      image: '/images/pillar_02_privacy.jpg',
      tag: 'DESIGN ALIGNMENT & PRIVACY',
    },
    {
      title: 'Garden-Connected Living',
      desc: '180 sq.ft private green backyards and lush patio decks for afternoon family tea surrounded by nature.',
      image: '/images/botanical_courtyard.jpg',
      tag: '180 SQ.FT PRIVATE GARDEN',
    },
    {
      title: 'Natural Light & Fresh Air',
      desc: 'Expansive floor-to-ceiling glass paneling allowing golden morning sunlight and eco cross-ventilation.',
      image: '/images/pillar_04_light.jpg',
      tag: 'CROSS-VENTILATION SUNLIGHT',
    },
    {
      title: 'Family & Home-Office Spaces',
      desc: 'Dedicated quiet work suites, executive study desks, and integrated children’s creative play areas.',
      image: '/images/pillar_05_office.jpg',
      tag: 'EXECUTIVE HOME WORK SUITE',
    },
    {
      title: 'Terrace Lounges & Cinema',
      desc: 'Private rooftop sky lounges designed for twilight entertaining and starlit home cinema projections.',
      image: '/images/pillar_06_terrace.jpg',
      tag: 'TWILIGHT SKY CINEMA',
    },
  ];

  return (
    <section id="overview" className="py-12 bg-[#F4F0E7] text-[#0F172A] relative overflow-hidden border-b border-[slate-200]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Brand Evolution Banner */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs uppercase tracking-[0.35em] font-mono font-bold text-[#F97316] block mb-3">
            THE EVOLUTION OF KRAFTED HOMES
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0F172A] mb-4 leading-tight">
            From Building Homes → <span className="text-[#F97316] italic font-normal">To Crafting Communities</span>
          </h2>
          <p className="text-[#0F172A]/80 font-light text-base leading-relaxed">
            Krafted Homes started with a focus on individual residences. Today, Antelia Groves represents our pinnacle vision: a master-planned 10-acre estate where architecture, nature, and community intertwine seamlessly.
          </p>
        </div>

        {/* Master Planning Chronicle */}
        <div className="mb-10 bg-[slate-100]/40 p-6 sm:p-10 rounded-xl border border-[slate-200] shadow-xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-[slate-200] pb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#F97316] font-bold block mb-1">
                MASTER PLANNING 3D CHRONICLE (7 STEP PROCESS)
              </span>
              <blockquote className="text-lg sm:text-2xl font-serif text-[#0F172A] italic font-light">
                &ldquo;First we cleared the land &rarr; then surveyed &rarr; roads &rarr; infrastructure &rarr; foundations &rarr; villas &rarr; life…&rdquo;
              </blockquote>
            </div>

            <button
              onClick={() => setIsAutoLoop(!isAutoLoop)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 border self-start sm:self-auto transition-all ${
                isAutoLoop
                  ? 'bg-[#66705A]/20 text-[#66705A] border-[#66705A]/40'
                  : 'bg-[#F4F0E7] text-[#0F172A] border-[slate-200]'
              }`}
            >
              {isAutoLoop ? <Pause className="w-3.5 h-3.5 text-[#66705A] animate-pulse" /> : <Play className="w-3.5 h-3.5 text-[#0F172A]" />}
              <span>{isAutoLoop ? '3D AUTO STORY: ON' : 'PAUSED'}</span>
            </button>
          </div>

          {/* 7 Step Navigator */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
            {creationSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsAutoLoop(false);
                  }}
                  className={`p-3.5 rounded-lg text-left transition-all duration-300 relative border ${
                    isSelected
                      ? 'bg-[#0F172A] text-white border-[#0F172A] font-bold shadow-md scale-102'
                      : 'bg-[#F4F0E7] border-[slate-200] text-[#0F172A] hover:border-[#F97316]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#F97316]' : 'text-[#0F172A]/60'}`}>
                      {step.step}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#F97316]' : 'text-[#0F172A]/60'}`} />
                  </div>
                  <div className="text-[11px] font-semibold tracking-wider uppercase line-clamp-1">{step.phrase}</div>
                </button>
              );
            })}
          </div>

          {/* Interactive 3D WebGL Canvas & Step Detail Split Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 3D WebGL Interactive Development Engine */}
            <div className="lg:col-span-7 relative h-[380px] sm:h-[440px] rounded-xl overflow-hidden shadow-2xl border border-[slate-200]">
              <Evolution3DEngine stepIndex={activeStep} />
            </div>

            {/* Right Step Detail Card */}
            <div className="lg:col-span-5 bg-[#F4F0E7] border border-[slate-200] p-6 sm:p-8 rounded-xl flex flex-col justify-between h-[380px] sm:h-[440px]">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[slate-100]/60 border border-[slate-200] text-xs font-mono text-[#F97316] uppercase tracking-widest mb-3 font-bold">
                  <span>STEP {creationSteps[activeStep].step} OF 07</span>
                  <span>•</span>
                  <span className="italic">{creationSteps[activeStep].phrase}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] mb-3">
                  {creationSteps[activeStep].title}
                </h3>
                <p className="text-[#0F172A]/80 text-xs sm:text-sm leading-relaxed mb-3 font-light">
                  {creationSteps[activeStep].desc}
                </p>
                <p className="text-[#0F172A]/70 text-xs leading-relaxed font-light bg-[slate-100]/40 p-4 rounded-lg border border-[slate-200]">
                  {creationSteps[activeStep].detail}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[slate-200]">
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev > 0 ? prev - 1 : creationSteps.length - 1));
                    setIsAutoLoop(false);
                  }}
                  className="flex-1 py-3 text-xs border border-[slate-200] text-[#0F172A] hover:border-[#0F172A] font-mono uppercase font-bold bg-[#F4F0E7]"
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    setActiveStep((prev) => (prev < creationSteps.length - 1 ? prev + 1 : 0));
                    setIsAutoLoop(false);
                  }}
                  className="flex-1 py-3 text-xs bg-[#0F172A] text-white font-mono font-bold uppercase tracking-wider hover:bg-[#F97316] hover:text-[#0F172A] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Lifestyle Positioning Pillars with 4K HD Realistic Visuals */}
        <div className="mt-10">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-mono font-bold text-[#F97316] block mb-2">
              LIFESTYLE POSITIONING
            </span>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#0F172A]">
              Designed Around What Truly Matters
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {positioningPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative min-h-[380px] rounded-xl overflow-hidden shadow-xl border border-[slate-200] flex flex-col justify-between p-6 transition-all duration-500 hover:shadow-2xl"
              >
                {/* 4K HD Real Architectural Visual Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${pillar.image}')` }}
                />

                {/* Dark Contrast Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 group-hover:from-black/95 transition-all duration-500 z-10" />

                {/* Top Badge */}
                <div className="relative z-20 flex items-center justify-between">
                  <div className="w-9 h-9 rounded-full bg-[#F4F0E7]/90 backdrop-blur-md border border-[slate-200] flex items-center justify-center text-[#0F172A] font-mono font-bold text-xs shadow-md">
                    0{index + 1}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F97316] font-bold bg-[#0F172A]/80 px-3 py-1 rounded-full border border-[#F97316]/40 backdrop-blur-md">
                    {pillar.tag}
                  </span>
                </div>

                {/* Bottom Content Card */}
                <div className="relative z-20 mt-auto bg-[#0F172A]/80 backdrop-blur-md p-5 rounded-xl border border-white/15">
                  <h4 className="text-xl font-serif font-bold text-white mb-2">{pillar.title}</h4>
                  <p className="text-gray-300 text-xs leading-relaxed font-light">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
