import React from 'react';
import {
  ShieldCheck,
  Award,
  Sparkles,
  Scan,
  HeartHandshake,
  Clock,
  Check
} from 'lucide-react';
import { TRUST_BADGES } from '../data/clinicData';

export const TrustBar: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-sky-600" />;
      case 'Award':
        return <Award className="w-5 h-5 text-teal-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Scan':
        return <Scan className="w-5 h-5 text-indigo-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-500" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-emerald-600" />;
      default:
        return <Check className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section className="bg-white py-10 border-y border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
            Gold-Standard Safety & Hygiene
          </span>
          <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-2">
            Clinical Accreditations & Guarantees
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Every instrument is 100% sealed & sterilized following hospital-grade infection protocols.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.id}
              className="p-3.5 sm:p-4 rounded-xl bg-slate-50/80 hover:bg-white border border-slate-100 hover:border-sky-200 transition-all hover:shadow-sm flex flex-col items-center text-center group"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                {getIcon(badge.icon)}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                {badge.title}
              </h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
