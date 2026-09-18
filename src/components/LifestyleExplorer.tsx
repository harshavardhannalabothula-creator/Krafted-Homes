'use client';

import { motion } from 'framer-motion';
import { Sun, Trees, Coffee, Film } from 'lucide-react';

export default function LifestyleExplorer() {
  const lifestyleCards = [
    {
      title: 'Garden-Connected Living',
      tagline: 'Step directly into an 180 sq.ft private green backyard',
      desc: 'Floor-to-ceiling glass paneling erases the boundary between indoor luxury and outdoor garden serenity.',
      image: '/images/teak_backyard_deck.jpg',
      icon: Trees,
    },
    {
      title: 'Terrace Lounges & Sky Decks',
      tagline: 'Private multi-level rooftop lounges for starlit evenings',
      desc: 'Perfect for twilight cocktail gatherings, private barbecue nights, or open-sky wellness sessions.',
      image: '/images/pillar_06_terrace.jpg',
      icon: Coffee,
    },
    {
      title: 'Dedicated Home Office & Cinema',
      tagline: 'Light-filled workspaces designed for executive productivity',
      desc: 'Versatile upper level split spaces easily convert into high-end Dolby home theaters or private art studios.',
      image: '/images/pillar_05_office.jpg',
      icon: Film,
    },
    {
      title: 'Butterfly Meadow & Herb Sanctuary',
      tagline: 'Organic herb gardens and native floral corridors',
      desc: 'Nurture fresh rosemary, mint, and basil for your kitchen while enjoying lush green landscape views.',
      image: '/images/green_mindfulness.jpg',
      icon: Sun,
    },
  ];

  return (
    <section id="lifestyle" className="py-12 bg-white text-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-sm font-medium text-[#F97316] block mb-3">
            Holistic Living Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#0F172A] leading-tight tracking-tight mb-4">
            Designed for <span className="text-[#F97316] italic font-normal">Privacy + Connection</span>
          </h2>
          <p className="text-[#1A212D] text-base font-manrope font-semibold leading-relaxed">
            Every square foot at Antelia Groves is calibrated to balance personal sanctuary with rich natural surroundings.
          </p>
        </div>

        {/* Premium Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lifestyleCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container - Clean & Crisp (No White Fade Overlay) */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0F172A]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.95]"
                  />
                  
                  {/* Subtle Top Left Icon Badge */}
                  <div className="absolute top-5 left-5 bg-[#0F172A]/85 backdrop-blur-md p-3 rounded-2xl shadow-lg">
                    <Icon className="w-4 h-4 text-[#F97316]" />
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#0F172A] mb-2 group-hover:text-[#F97316] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#F97316] font-manrope font-semibold mb-3">
                      {card.tagline}
                    </p>
                    <p className="text-[#1A212D] text-xs font-manrope font-semibold leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
