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
    <section id="lifestyle" className="py-24 bg-[#F4F0E7] text-[#202631] relative overflow-hidden border-b border-[#D5D0C6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] font-mono font-bold text-[#B18A4A] block mb-3">
            HOLISTIC LIVING PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#111722] mb-4 leading-tight">
            Designed for <span className="text-[#B18A4A] italic font-normal">Privacy + Connection</span>
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
                className="bg-white rounded-xs overflow-hidden border border-[#D5D0C6] shadow-sm flex flex-col justify-between group hover:border-[#B18A4A] hover:shadow-xl transition-all duration-500"
              >
                {/* Image Container - Clean & Crisp (No White Fade Overlay) */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#111722]">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.95]"
                  />
                  
                  {/* Subtle Top Left Icon Badge */}
                  <div className="absolute top-4 left-4 bg-[#111722]/85 backdrop-blur-md p-2.5 rounded-xs border border-[#B18A4A]/40 shadow-md">
                    <Icon className="w-4 h-4 text-[#B18A4A]" />
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#111722] mb-2 group-hover:text-[#B18A4A] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#B18A4A] font-manrope font-semibold mb-3">
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
