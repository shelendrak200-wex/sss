import React from 'react';
import {
  ScanLine,
  Eye,
  Laptop,
  Zap,
  Cpu,
  Sliders,
  CheckCircle2,
  Sparkles,
  Shield
} from 'lucide-react';
import { TECHNOLOGIES } from '../data/clinicData';

export const TechnologySection: React.FC = () => {
  const getTechIcon = (name: string) => {
    switch (name) {
      case 'ScanLine':
        return <ScanLine className="w-6 h-6 text-sky-500" />;
      case 'Eye':
        return <Eye className="w-6 h-6 text-indigo-500" />;
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-teal-500" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-500" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-rose-500" />;
      default:
        return <Cpu className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section id="technology" className="py-16 sm:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Next-Gen Diagnostics
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3">
            Advanced Dental Technology
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            We invest in state-of-the-art dental equipment to guarantee painless treatments, zero guesswork, and same-day dental restorations.
          </p>
        </div>

        {/* 6 Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.id}
              className="bg-slate-50/80 rounded-2xl border border-slate-200/80 hover:border-sky-300 hover:bg-white shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Tech Visual Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-sky-500 text-white text-[11px] font-bold shadow-sm">
                    {tech.badge}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                      {getTechIcon(tech.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display text-white leading-tight">
                        {tech.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3.5">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tech.description}
                  </p>

                  {/* Patient Benefit Highlight Box */}
                  <div className="p-3 rounded-xl bg-teal-50/70 border border-teal-100 text-xs text-teal-900">
                    <span className="font-bold flex items-center gap-1 text-teal-800 mb-0.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                      Patient Benefit:
                    </span>
                    {tech.patientBenefit}
                  </div>

                  {/* Specs List */}
                  <div className="space-y-1.5 pt-1">
                    {tech.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 mt-2">
                <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                  <Shield className="w-3 h-3 text-teal-600" />
                  <span>FDA & CE Approved Medical Grade</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
