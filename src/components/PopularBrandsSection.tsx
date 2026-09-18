'use client';

import { ArrowRight, Landmark } from 'lucide-react';

export default function PopularBrandsSection() {
  const brands = [
    { id: 1, name: 'HDFC', logo: 'https://www.google.com/s2/favicons?domain=hdfcbank.com&sz=128' },
    { id: 2, name: 'SBI', logo: 'https://www.google.com/s2/favicons?domain=onlinesbi.sbi&sz=128' },
    { id: 3, name: 'ICICI', logo: 'https://www.google.com/s2/favicons?domain=icicibank.com&sz=128' },
    { id: 4, name: 'Axis Bank', logo: 'https://www.google.com/s2/favicons?domain=axisbank.com&sz=128' },
    { id: 5, name: 'Kotak', logo: 'https://www.google.com/s2/favicons?domain=kotak.com&sz=128' },
    { id: 6, name: 'PNB', logo: 'https://www.google.com/s2/favicons?domain=pnbindia.in&sz=128' },
  ];

  return (
    <section className="py-12 bg-white text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-1">Approved Banks</h3>
            <span className="text-[11px] text-slate-500 font-medium">Pre-approved home loans available</span>
          </div>
          
          <button className="text-xs font-semibold text-slate-500 hover:text-[#F97316] cursor-pointer flex items-center gap-1.5 transition-colors">
            <span>View All Banks</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {brands.map((brand) => {
            return (
              <div
                key={brand.id}
                className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-lg hover:border-[#F97316] transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center mb-3 overflow-hidden shadow-sm p-1.5 group-hover:border-orange-200 transition-colors">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to a generic bank icon if clearbit fails
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%2394a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>';
                    }}
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-500 group-hover:text-[#0F172A]">
                  {brand.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
