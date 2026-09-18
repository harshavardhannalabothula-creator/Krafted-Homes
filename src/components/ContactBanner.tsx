'use client';

import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactBannerProps {
  onOpenBooking?: () => void;
}

export default function ContactBanner({ onOpenBooking }: ContactBannerProps) {
  return (
    <section className="w-full px-6 sm:px-12 py-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full rounded-2xl overflow-hidden shadow-xl flex flex-col md:flex-row items-stretch border border-slate-100">
          
          {/* LEFT HALF (DARK BLUE) */}
          <div className="md:w-1/2 bg-[#0F172A] p-8 sm:p-10 flex flex-col justify-center items-start text-left relative z-10">
            {/* Slanted right edge effect for desktop */}
            <div className="hidden md:block absolute top-0 -right-12 h-full w-24 bg-[#0F172A] transform -skew-x-12 z-0" />
            
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ready for Your Next Home?
              </h3>
              <p className="text-[11px] text-slate-300 font-medium mb-6 max-w-sm">
                Get your perfect villa today and hit the road with confidence.
              </p>
              <button
                onClick={onOpenBooking}
                className="px-6 py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-colors shadow-md"
              >
                Book Now
              </button>
            </div>
          </div>

          {/* RIGHT HALF (WHITE) */}
          <div className="md:w-1/2 bg-slate-50 p-8 sm:p-10 flex flex-col justify-center relative z-0 pl-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F97316] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block mb-0.5">Call Us</span>
                  <span className="text-xs font-bold text-[#0F172A]">+91 98765 43210</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F97316] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block mb-0.5">Email Us</span>
                  <span className="text-xs font-bold text-[#0F172A]">hello@kraftedhomes.com</span>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:col-span-2">
                <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F97316] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block mb-0.5">Visit Office</span>
                  <span className="text-xs font-bold text-[#0F172A]">Krafted Homes, Sarjapur, Bengaluru</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
