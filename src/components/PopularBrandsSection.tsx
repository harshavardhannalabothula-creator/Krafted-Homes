'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PopularBrandsSection() {
  const banks = [
    {
      id: 'hdfc',
      name: 'HDFC Bank',
      subtext: 'Fast Approvals',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="18" fill="#004B8D"/>
          <rect x="22" y="22" width="56" height="56" fill="#ED1C24"/>
          <rect x="36" y="36" width="28" height="28" fill="#FFFFFF"/>
          <rect x="36" y="10" width="28" height="80" fill="#FFFFFF"/>
          <rect x="10" y="36" width="80" height="28" fill="#FFFFFF"/>
          <rect x="36" y="36" width="28" height="28" fill="#004B8D"/>
        </svg>
      ),
    },
    {
      id: 'sbi',
      name: 'SBI Bank',
      subtext: 'Lowest Rates',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#00A5EC"/>
          <circle cx="50" cy="38" r="16" fill="#FFFFFF"/>
          <rect x="44" y="38" width="12" height="42" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      id: 'icici',
      name: 'ICICI Bank',
      subtext: 'Pre-Approved',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#F37021"/>
          <circle cx="50" cy="32" r="10" fill="#002A54"/>
          <path d="M 30 70 C 30 46, 70 46, 70 70 Z" fill="#002A54"/>
          <rect x="22" y="70" width="56" height="10" rx="4" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      id: 'axis',
      name: 'Axis Bank',
      subtext: 'Instant Sanction',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="18" fill="#97144D"/>
          <path d="M 50 16 L 84 80 L 64 80 L 50 54 L 36 80 L 16 80 Z" fill="#FFFFFF"/>
          <path d="M 50 30 L 72 72 L 58 72 L 50 56 L 42 72 L 28 72 Z" fill="#97144D"/>
        </svg>
      ),
    },
    {
      id: 'kotak',
      name: 'Kotak Bank',
      subtext: 'Special Offers',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="18" fill="#003366"/>
          <path d="M 30 32 C 18 32, 18 68, 30 68 C 42 68, 50 50, 50 50 C 50 50, 58 32, 70 32 C 82 32, 82 68, 70 68 C 58 68, 50 50, 50 50 Z" fill="none" stroke="#ED1C24" strokeWidth="14" strokeLinecap="round"/>
          <path d="M 30 32 C 18 32, 18 68, 30 68 C 42 68, 50 50, 50 50 C 50 50, 58 32, 70 32 C 82 32, 82 68, 70 68 C 58 68, 50 50, 50 50 Z" fill="none" stroke="#FFFFFF" strokeWidth="5"/>
        </svg>
      ),
    },
    {
      id: 'pnb',
      name: 'PNB Housing',
      subtext: 'Govt. Subsidies',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#840A2C"/>
          <circle cx="50" cy="50" r="34" fill="#F9A01B"/>
          <text x="50" y="60" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="26" fill="#840A2C" textAnchor="middle">PNB</text>
        </svg>
      ),
    },
    {
      id: 'lic',
      name: 'LIC Housing',
      subtext: 'Easy EMI Options',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="18" fill="#00529C"/>
          <circle cx="50" cy="46" r="22" fill="#FBB03B"/>
          <path d="M 22 76 C 36 60, 64 60, 78 76 Z" fill="#FFFFFF"/>
          <text x="50" y="53" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="18" fill="#00529C" textAnchor="middle">LIC</text>
        </svg>
      ),
    },
    {
      id: 'bob',
      name: 'Bank of Baroda',
      subtext: 'Zero Processing',
      renderIcon: () => (
        <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="18" fill="#F26522"/>
          <circle cx="50" cy="50" r="30" fill="#FFFFFF"/>
          <text x="50" y="59" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="22" fill="#F26522" textAnchor="middle">BOB</text>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white text-[#0F172A] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-50 text-[#F97316] text-[10px] font-extrabold uppercase tracking-widest border border-orange-100 mb-2">
              ✦ HOME LOAN PARTNERSHIPS
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Pre-Approved Banking Partners
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold mt-1">
              Seamless 80%–90% home loan funding pre-sanctioned across premier nationalized and private banks.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-3.5 py-2 rounded-full border border-emerald-100 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>100% Clear Title RERA Approved</span>
          </div>
        </div>

        {/* 8-COLUMN CRISP VECTOR BANK CARDS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-5">
          {banks.map((bank) => {
            return (
              <div
                key={bank.id}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-xl hover:border-[#F97316] hover:-translate-y-1 transition-all duration-300 cursor-pointer group text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50/80 border border-slate-100 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  {bank.renderIcon()}
                </div>
                
                <span className="text-[13px] font-extrabold text-[#0F172A] group-hover:text-[#F97316] transition-colors leading-tight">
                  {bank.name}
                </span>
                <span className="text-[10px] font-bold text-slate-500 mt-1 block leading-tight">
                  {bank.subtext}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

