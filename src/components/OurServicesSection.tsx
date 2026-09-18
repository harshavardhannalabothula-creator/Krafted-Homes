'use client';

import { ArrowRight, Trees, Waves, Dumbbell, ShieldCheck } from 'lucide-react';

export default function OurServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Private Gardens',
      desc: 'Exclusive backyard spaces',
      icon: Trees,
    },
    {
      id: 2,
      title: 'Resort Pool',
      desc: 'Olympic length swimming pool',
      icon: Waves,
    },
    {
      id: 3,
      title: 'Clubhouse',
      desc: '15,000 sq.ft recreation center',
      icon: Dumbbell,
    },
    {
      id: 4,
      title: '24/7 Security',
      desc: 'Gated community security',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="w-full bg-white py-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex items-end justify-between">
          <div className="flex flex-col relative">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-1">
              Our Township Amenities
            </h3>
            <span className="absolute -bottom-3 left-0 w-8 h-1 bg-[#F97316] rounded-full"></span>
            <p className="text-[11px] text-slate-500 font-medium mt-4">World-class facilities for your family</p>
          </div>

          <button className="text-xs font-semibold text-slate-500 hover:text-[#F97316] cursor-pointer flex items-center gap-1.5 transition-colors">
            <span>View All Amenities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#F97316] transition-all flex flex-col group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-sm font-bold text-[#0F172A] mb-2">{srv.title}</h4>
                <p className="text-[11px] text-slate-500 font-medium">{srv.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
