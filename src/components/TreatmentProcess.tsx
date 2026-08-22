import React from 'react';
import {
  CalendarCheck,
  MessageSquare,
  Scan,
  FileText,
  HeartPulse,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { TREATMENT_STEPS } from '../data/clinicData';

interface TreatmentProcessProps {
  onOpenBooking: () => void;
}

export const TreatmentProcess: React.FC<TreatmentProcessProps> = ({ onOpenBooking }) => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-sky-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-teal-600" />;
      case 'Scan':
        return <Scan className="w-6 h-6 text-indigo-600" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-amber-500" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-rose-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Transparent Care Journey
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3">
            Our 6-Step Treatment Process
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            From the minute you step into our clinic to your final dazzling smile checkup, here is how we ensure seamless, pain-free dental health.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {TREATMENT_STEPS.map((stepItem, index) => (
            <div
              key={stepItem.step}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-sky-300 hover:shadow-md transition-all group relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-50 transition-all">
                    {getStepIcon(stepItem.iconName)}
                  </div>
                  <span className="text-2xl font-black font-display text-slate-300 group-hover:text-sky-500 transition-colors">
                    {stepItem.step}
                  </span>
                </div>

                <div className="text-xs font-semibold text-teal-600 mb-0.5">
                  {stepItem.subtitle}
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900 mb-2">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {index < TREATMENT_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300 pointer-events-none">
                  {/* subtle indicator */}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-500 to-teal-500 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-sky-500/10">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Ready to Experience Painless Dental Care?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 font-normal max-w-xl">
              Book your consultation today and receive a complete 360° digital checkup with zero waiting time.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl bg-white text-sky-700 hover:bg-slate-50 font-bold text-sm shadow-md transition-all active:scale-95 shrink-0"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
};
