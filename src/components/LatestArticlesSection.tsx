'use client';

import { ArrowRight, Calendar, ArrowUpRight } from 'lucide-react';

export default function LatestArticlesSection() {
  const articles = [
    {
      id: 1,
      tag: 'Investment',
      title: "10 Reasons to Invest in Sarjapur Road's Villa Corridor",
      date: 'Sep 15, 2026',
      image: '/images/hero_villa_facade.png',
    },
    {
      id: 2,
      tag: 'Architecture',
      title: 'How Split-Level Villa Design Maximizes Light & Privacy',
      date: 'Sep 10, 2026',
      image: '/images/daylight_estate.jpg',
    },
    {
      id: 3,
      tag: 'Lifestyle',
      title: 'Gated Villa Township vs Apartment: Which Delivers Better ROI?',
      date: 'Sep 04, 2026',
      image: '/images/private_garden_sanctuary.jpg',
    },
  ];

  return (
    <section id="articles" className="w-full bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex items-end justify-between">
          <div className="flex flex-col relative">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-1">
              Latest Articles &amp; Insights
            </h3>
            <span className="absolute -bottom-3 left-0 w-8 h-1 bg-[#F97316] rounded-full"></span>
            <p className="text-[11px] text-slate-500 font-medium max-w-sm mt-4">
              Useful guides, market insights, and home-buying tips.
            </p>
          </div>

          <button className="text-xs font-semibold text-slate-500 hover:text-[#F97316] cursor-pointer flex items-center gap-1.5 transition-colors">
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group cursor-pointer"
            >
              <div className="relative w-full h-48 rounded-[24px] overflow-hidden mb-4 bg-slate-200">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-[#F97316] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {article.tag}
                </div>
              </div>

              <div className="pr-4">
                <h4 className="text-base font-bold text-[#0F172A] leading-snug mb-3 group-hover:text-[#F97316] transition-colors">
                  {article.title}
                </h4>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-medium uppercase tracking-wider">{article.date}</span>
                  </div>
                  
                  <button className="text-[10px] font-bold text-[#0F172A] uppercase tracking-wider flex items-center gap-1 group-hover:text-[#F97316] transition-colors">
                    Read more <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
