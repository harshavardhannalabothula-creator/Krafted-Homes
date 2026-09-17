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
    <footer className="bg-slate-50 text-[#0F172A] border-t border-slate-200 pt-20 pb-12 relative overflow-hidden">
      
      {/* 05 — FINAL REVEAL & SITE VISIT CTA */}
      <div id="visit" className="max-w-7xl mx-auto px-6 sm:px-12 mb-20">
        <div className="bg-white text-[#0F172A] p-8 sm:p-16 rounded-3xl text-center relative overflow-hidden shadow-xl border border-slate-200">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>05 — EXPERIENCE CENTER &amp; CONTACT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#0F172A] mb-3 tracking-tight">
            FROM LAND <span className="text-[#2563EB] italic font-normal">TO LIVING.</span>
          </h2>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0F172A] tracking-wider mb-8">
            ANTELIA GROVES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10 border-y border-slate-200 py-6">
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#2563EB] block">189</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A]">INDEPENDENT 3/4 BHK VILLAS</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#2563EB] block">10 ACRES</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A]">SECURE GATED ESTATE</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-[#2563EB] block">15K+ SQ.FT</span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A]">RESORT CLUBHOUSE</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#F97316] hover:bg-[#EA580C] transition-all shadow-md cursor-pointer"
            >
              BOOK A PRIVATE SITE VISIT
            </button>
            <button
              onClick={scrollToVillas}
              className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-[#2563EB] border border-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all cursor-pointer"
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
              <div className="w-9 h-9 bg-[#2563EB] flex items-center justify-center text-white font-bold text-lg rounded-xl">
                AG
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2563EB]">KRAFTED HOMES</span>
                <span className="text-base font-extrabold tracking-wider text-[#0F172A]">
                  ANTELIA GROVES
                </span>
              </div>
            </div>
            <p className="text-xs font-normal leading-relaxed text-[#475569]">
              Transforming residential development from individual home construction into master-planned, multi-generational luxury communities.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#0F172A] font-bold mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs font-semibold text-[#475569]">
              <li><a href="#overview" onClick={(e) => { e.preventDefault(); document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#2563EB] transition-colors">01 — Overview &amp; Vision</a></li>
              <li><a href="#masterplan" onClick={(e) => { e.preventDefault(); document.getElementById('masterplan')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#2563EB] transition-colors">02 — Interactive Masterplan</a></li>
              <li><a href="#villas" onClick={(e) => { e.preventDefault(); document.getElementById('villas')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#2563EB] transition-colors">03 — Villa Architecture</a></li>
              <li><a href="#location" onClick={(e) => { e.preventDefault(); document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#2563EB] transition-colors">04 — Real Location Map</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#2563EB] transition-colors">05 — Krafted Homes Philosophy</a></li>
              <li><a href="#visit" onClick={(e) => { e.preventDefault(); document.getElementById('visit')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-[#2563EB] transition-colors">06 — Experience Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#0F172A] font-bold mb-4">Villa Type A</h4>
            <ul className="space-y-2 text-xs font-semibold text-[#475569]">
              <li><span>1,200 sq.ft Land Area</span></li>
              <li><span>2,262 sq.ft Built-Up Area (BUA)</span></li>
              <li><span>1,706 sq.ft Carpet Area</span></li>
              <li><span>180 sq.ft Private Backyard</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#0F172A] font-bold mb-4">Experience Center</h4>
            <div className="space-y-3 text-xs font-semibold text-[#475569]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span>Antelia Groves Site Office, Sarjapur Villa Corridor, Bengaluru</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                <span>inquiries@kraftedhomes.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#475569] font-semibold">
          <p>&copy; {new Date().getFullYear()} Krafted Homes — Antelia Groves. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#2563EB]">Privacy Policy</a>
            <a href="#" className="hover:text-[#2563EB]">Terms of Experience</a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors"
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


