'use client';

import { Phone, Mail, MapPin, ArrowUp, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToVillas = () => {
    document.getElementById('villas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F4F0E7] text-[#202631] border-t border-[#D5D0C6] pt-20 pb-12 relative overflow-hidden">
      
      {/* 05 — FINAL REVEAL & SITE VISIT CTA */}
      <div id="visit" className="max-w-7xl mx-auto px-6 sm:px-12 mb-20">
        <div className="bg-white text-[#111722] p-8 sm:p-16 rounded-2xl text-center relative overflow-hidden shadow-xl border border-[#D5D0C6]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B18A4A]/10 border border-[#B18A4A]/30 text-xs font-bold text-[#8C6527] uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6527]" />
            <span>05 — EXPERIENCE CENTER &amp; CONTACT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#111722] mb-3 tracking-tight">
            FROM LAND <span className="text-[#8C6527] italic font-normal">TO LIVING.</span>
          </h2>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#111722] tracking-wider mb-8">
            ANTELIA GROVES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 border-y border-[#D5D0C6] py-6">
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#8C6527] block">189</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#111722]">INDEPENDENT 3/4 BHK VILLAS</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#8C6527] block">10 ACRES</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#111722]">SECURE GATED ESTATE</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#8C6527] block">15K+ SQ.FT</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#111722]">RESORT CLUBHOUSE</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-[#8C6527] hover:bg-[#111722] transition-colors shadow-md cursor-pointer"
            >
              BOOK A PRIVATE SITE VISIT
            </button>
            <button
              onClick={scrollToVillas}
              className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-[#8C6527] border border-[#8C6527] hover:bg-[#8C6527] hover:text-white transition-colors cursor-pointer"
            >
              EXPLORE THE VILLAS
            </button>
          </div>
        </div>
      </div>

      {/* Footer Nav */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#B18A4A] flex items-center justify-center text-white font-bold text-lg rounded-lg">
                AG
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#B18A4A]">KRAFTED HOMES</span>
                <span className="text-base font-extrabold tracking-wider text-[#111722]">
                  ANTELIA GROVES
                </span>
              </div>
            </div>
            <p className="text-xs font-normal leading-relaxed text-[#374151]">
              Transforming residential development from individual home construction into master-planned, multi-generational luxury communities.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#111722] font-bold mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-[#1F2937]">
              <li><a href="#overview" onClick={(e) => { e.preventDefault(); document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#B18A4A] transition-colors">01 — Overview &amp; Vision</a></li>
              <li><a href="#masterplan" onClick={(e) => { e.preventDefault(); document.getElementById('masterplan')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#B18A4A] transition-colors">02 — Interactive Masterplan</a></li>
              <li><a href="#villas" onClick={(e) => { e.preventDefault(); document.getElementById('villas')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#B18A4A] transition-colors">03 — Villa Architecture</a></li>
              <li><a href="#location" onClick={(e) => { e.preventDefault(); document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#B18A4A] transition-colors">04 — Real Location Map</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#B18A4A] transition-colors">05 — Krafted Homes Philosophy</a></li>
              <li><a href="#visit" onClick={(e) => { e.preventDefault(); document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#B18A4A] transition-colors">06 — Experience Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#111722] font-bold mb-4">Villa Type A</h4>
            <ul className="space-y-2 text-xs font-manrope font-semibold text-[#1A212D]">
              <li><span>1,200 sq.ft Land Area</span></li>
              <li><span>2,262 sq.ft Built-Up Area (BUA)</span></li>
              <li><span>1,706 sq.ft Carpet Area</span></li>
              <li><span>180 sq.ft Private Backyard</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#111722] font-bold mb-4">Experience Center</h4>
            <div className="space-y-3 text-xs font-manrope font-semibold text-[#1A212D]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B18A4A] shrink-0 mt-0.5" />
                <span>Antelia Groves Site Office, Sarjapur Villa Corridor, Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B18A4A] shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B18A4A] shrink-0" />
                <span>inquiries@kraftedhomes.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#D5D0C6] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#1A212D] font-manrope font-semibold">
          <p>&copy; {new Date().getFullYear()} Krafted Homes — Antelia Groves. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#B18A4A]">Privacy Policy</a>
            <a href="#" className="hover:text-[#B18A4A]">Terms of Experience</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xs bg-[#B18A4A] text-white hover:bg-[#111722] transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
