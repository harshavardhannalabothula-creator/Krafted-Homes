'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Building2, 
  GraduationCap, 
  Hospital, 
  Train, 
  ShoppingBag, 
  Navigation, 
  Clock, 
  Compass, 
  Car,
  ExternalLink,
  PhoneCall
} from 'lucide-react';

interface LocationConnectivitySectionProps {
  onOpenBooking?: () => void;
}

export default function LocationConnectivitySection({ onOpenBooking }: LocationConnectivitySectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Highlights', icon: Compass },
    { id: 'tech', label: 'IT & Work Hubs', icon: Building2 },
    { id: 'schools', label: 'Schools', icon: GraduationCap },
    { id: 'hospitals', label: 'Hospitals', icon: Hospital },
    { id: 'transit', label: 'Metro & Transit', icon: Train },
    { id: 'lifestyle', label: 'Shopping & Malls', icon: ShoppingBag },
  ];

  const nearbyPlaces = [
    {
      category: 'tech',
      name: 'RGA Tech Park',
      distance: '5 Mins',
      km: '2.5 km',
      desc: 'Major IT campus with global tech leaders.',
      icon: Building2,
      badge: 'Tech Park',
    },
    {
      category: 'tech',
      name: 'Wipro Sarjapur Campus',
      distance: '8 Mins',
      km: '4.2 km',
      desc: 'Corporate HQ and innovation hub.',
      icon: Building2,
      badge: 'IT Campus',
    },
    {
      category: 'schools',
      name: 'Oakridge International',
      distance: '5 Mins',
      km: '2.8 km',
      desc: 'Premier IB World School.',
      icon: GraduationCap,
      badge: 'IB School',
    },
    {
      category: 'schools',
      name: 'Greenwood High',
      distance: '7 Mins',
      km: '3.6 km',
      desc: 'Top-rated ICSE & IGCSE campus.',
      icon: GraduationCap,
      badge: 'Top Rated',
    },
    {
      category: 'hospitals',
      name: 'Manipal Hospital',
      distance: '10 Mins',
      km: '5.1 km',
      desc: '24/7 multi-specialty healthcare.',
      icon: Hospital,
      badge: '24/7 ER',
    },
    {
      category: 'hospitals',
      name: 'Sakra World Hospital',
      distance: '15 Mins',
      km: '7.8 km',
      desc: 'Advanced super-specialty care.',
      icon: Hospital,
      badge: 'Healthcare',
    },
    {
      category: 'transit',
      name: 'Upcoming Metro Station',
      distance: '4 Mins',
      km: '1.8 km',
      desc: 'Namma Metro Phase 3 Line.',
      icon: Train,
      badge: 'Metro Line',
    },
    {
      category: 'transit',
      name: 'Carmelaram Station',
      distance: '8 Mins',
      km: '4.5 km',
      desc: 'Suburban rail network.',
      icon: Train,
      badge: 'Suburban Rail',
    },
    {
      category: 'lifestyle',
      name: 'Forum Sarjapur Mall',
      distance: '12 Mins',
      km: '6.2 km',
      desc: 'Dining, movies, & fashion brands.',
      icon: ShoppingBag,
      badge: 'Shopping',
    },
    {
      category: 'lifestyle',
      name: 'Decathlon Sarjapur',
      distance: '10 Mins',
      km: '5.0 km',
      desc: 'Sports arena and retail.',
      icon: ShoppingBag,
      badge: 'Sports',
    },
  ];

  const filteredPlaces = activeCategory === 'all' 
    ? nearbyPlaces 
    : nearbyPlaces.filter(p => p.category === activeCategory);

  return (
    <section id="location" className="w-full bg-white py-16 lg:py-24 relative overflow-hidden border-t border-slate-100">
      
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-[#F97316] text-[11px] font-extrabold uppercase tracking-widest border border-orange-100 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>PRIME LOCATION & CONNECTIVITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
            Strategic Location on Sarjapur Road <br />
            <span className="text-[#F97316]">Connected to Everything That Matters</span>
          </h2>

          <p className="text-center mt-3 text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl">
            Enjoy seamless access to IT parks, international schools, healthcare, and metro transit in Sarjapur Road's golden corridor.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map(cat => {
            const CatIcon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 border ${
                  isActive 
                    ? 'bg-[#F97316] text-white border-[#F97316] shadow-md shadow-orange-500/20' 
                    : 'bg-white text-slate-700 hover:text-[#F97316] border-slate-200 hover:border-orange-200'
                }`}
              >
                <CatIcon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* BALANCED 2-COLUMN GRID (MAP & LANDMARKS MATCHED HEIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* LEFT COLUMN: LIVE GOOGLE MAP WITH INTEGRATED STATS (5 cols) */}
          <div className="lg:col-span-5 flex flex-col h-full min-h-[560px]">
            <div className="relative flex-1 w-full rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-200 group min-h-[420px]">
              
              {/* Google Maps Live Embedded Iframe */}
              <iframe
                title="Antelia Groves Krafted Homes Sarjapur Road Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62232.88081273574!2d77.6823408!3d12.9121175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13a40e1e626d%3A0x6b8f36c5356e9c60!2sSarjapur%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%] contrast-[105%] group-hover:grayscale-0 transition-all duration-500"
              />

              {/* Top Floating Badge on Map */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg max-w-[300px]">
                <div className="flex items-center gap-1.5 text-[#F97316] font-extrabold text-[11px] uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 fill-current" />
                  <span>Krafted Homes Township</span>
                </div>
                <h4 className="text-sm font-extrabold text-[#0F172A] leading-tight">
                  Antelia Groves, Sarjapur Road
                </h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Near RGA Tech Park, Sarjapur Main Road, Bengaluru
                </p>
              </div>

              {/* Bottom Direct Directions Button */}
              <div className="absolute bottom-4 right-4">
                <a
                  href="https://maps.google.com/?q=Sarjapur+Road+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#0F172A] hover:bg-[#F97316] text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-orange-400" />
                  <span>Get Live Directions</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>

            {/* Quick Transport Summary Pills (Integrated directly underneath map) */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
                <Car className="w-4 h-4 text-[#F97316] mb-1" />
                <span className="text-[11px] font-extrabold text-[#0F172A]">ORR & Whitefield</span>
                <span className="text-[10px] text-slate-500 font-medium">15 Mins Drive</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
                <Train className="w-4 h-4 text-[#F97316] mb-1" />
                <span className="text-[11px] font-extrabold text-[#0F172A]">Metro Station</span>
                <span className="text-[10px] text-slate-500 font-medium">4 Mins Away</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
                <Clock className="w-4 h-4 text-[#F97316] mb-1" />
                <span className="text-[11px] font-extrabold text-[#0F172A]">Intl Airport</span>
                <span className="text-[10px] text-slate-500 font-medium">50 Mins via STRR</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 2-COLUMN GRID OF LANDMARKS (7 cols, zero whitespace) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-extrabold text-[#0F172A] flex items-center gap-2">
                  <span>Nearby Landmarks & Travel Times</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-100 text-[#F97316] font-bold">
                    {filteredPlaces.length} Locations
                  </span>
                </h3>
              </div>

              {/* 2-Column Responsive Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {filteredPlaces.map((place, idx) => {
                  const PlaceIcon = place.icon;

                  return (
                    <motion.div
                      key={place.name}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: idx * 0.04 }}
                      className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-[#F97316] shadow-sm hover:shadow-md transition-all duration-300 flex items-start justify-between gap-3 group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-300 mt-0.5">
                          <PlaceIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                            <h4 className="text-xs sm:text-sm font-extrabold text-[#0F172A] group-hover:text-[#F97316] transition-colors">
                              {place.name}
                            </h4>
                          </div>
                          <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 mb-1">
                            {place.badge}
                          </span>
                          <p className="text-[11px] text-slate-500 font-medium leading-relaxed line-clamp-1">
                            {place.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col items-end shrink-0">
                        <span className="text-xs font-extrabold text-[#F97316] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-100">
                          {place.distance}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 mt-0.5">
                          {place.km}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* FULL-WIDTH SHUTTLE VISIT & DIRECTION BANNER (Zero whitespace at bottom) */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#0F172A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F97316] text-white flex items-center justify-center shrink-0 shadow-md">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                Want a Free Shuttle Site Tour?
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  Complimentary Pickup & Drop
                </span>
              </h4>
              <p className="text-xs text-slate-300 font-medium mt-0.5">
                We provide free luxury AC shuttle service for site visits from anywhere in Sarjapur, HSR Layout, or Bellandur.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-orange-500/20 w-full md:w-auto text-center"
            >
              Book Free Shuttle Visit
            </button>
            <a
              href="tel:+919876543210"
              className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors border border-white/10"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-400" />
              <span>Call Helpline</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

