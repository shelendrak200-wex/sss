import React, { useState } from 'react';
import {
  Check,
  CreditCard,
  Sparkles,
  Calculator,
  Calendar,
  ShieldCheck,
  Percent,
  BadgePercent,
  HelpCircle
} from 'lucide-react';
import { PRICING_PLANS } from '../data/clinicData';

interface PricingSectionProps {
  onOpenBooking: (treatment?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  // Interactive Smile Cost Estimator State
  const [calcSelected, setCalcSelected] = useState<{ [key: string]: number }>({
    'checkup': 1,
    'cleaning': 0,
    'rct': 0,
    'implant': 0,
    'whitening': 0,
    'crown': 0,
  });

  const [emiTenure, setEmiTenure] = useState<number>(6);

  const procedureOptions = [
    { id: 'checkup', name: 'Comprehensive Dental Checkup', basePrice: 300, unit: 'visit' },
    { id: 'cleaning', name: 'Ultrasonic Teeth Cleaning & Polish', basePrice: 1000, unit: 'session' },
    { id: 'rct', name: 'Microscopic Root Canal (RCT)', basePrice: 3500, unit: 'tooth' },
    { id: 'crown', name: 'CAD/CAM Zirconia Crown', basePrice: 4500, unit: 'crown' },
    { id: 'implant', name: 'Titanium Dental Implant (Single)', basePrice: 25000, unit: 'tooth' },
    { id: 'whitening', name: 'Clinical Laser Teeth Whitening', basePrice: 5000, unit: 'session' },
  ];

  const calculateTotal = () => {
    return procedureOptions.reduce((sum, item) => {
      const count = calcSelected[item.id] || 0;
      return sum + count * item.basePrice;
    }, 0);
  };

  const totalEstimate = calculateTotal();
  const monthlyEmi = totalEstimate > 0 ? Math.round(totalEstimate / emiTenure) : 0;

  const updateCount = (id: string, delta: number) => {
    setCalcSelected((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, Math.min(10, current + delta));
      return { ...prev, [id]: next };
    });
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            100% Transparent Fees
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3">
            Honest & Affordable Dental Pricing
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            No surprise add-ons. Every treatment plan is discussed and approved upfront with easy 0% interest monthly installment options.
          </p>
        </div>

        {/* Pricing Cards Grid (6 Main Procedures) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl bg-white border p-6 flex flex-col justify-between transition-all duration-200 ${
                plan.popular
                  ? 'border-sky-400 shadow-lg relative ring-2 ring-sky-500/10'
                  : 'border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-sky-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Most Booked
                </div>
              )}

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-teal-600">
                  {plan.category}
                </div>
                <h3 className="text-lg font-bold font-display text-slate-900 mt-1 leading-snug">
                  {plan.service}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-5 mb-5 pb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500 font-medium">
                      {plan.pricePrefix || '₹'}
                    </span>
                    <span className="text-3xl font-extrabold font-display text-slate-900">
                      {plan.price.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mt-1">
                    <span>Est. Time: {plan.duration}</span>
                    {plan.emiAvailable && plan.monthlyEmi && (
                      <span className="text-teal-700 bg-teal-50 px-2 py-0.5 rounded font-semibold text-[11px]">
                        EMI: {plan.monthlyEmi}
                      </span>
                    )}
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    What's Included:
                  </span>
                  {plan.included.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-slate-100">
                <button
                  onClick={() => onOpenBooking(plan.service)}
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold shadow-xs transition-all flex items-center justify-center gap-1.5 ${
                    plan.popular
                      ? 'bg-sky-500 hover:bg-sky-600 text-white'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200'
                  }`}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book for ₹{plan.price.toLocaleString('en-IN')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Treatment Cost & EMI Estimator Box */}
        <div className="mt-14 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Cost Estimator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                Estimate Your Total Dental Plan
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Select your required procedures to calculate the approximate estimate and monthly EMI.
              </p>
            </div>

            <div className="text-left sm:text-right bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200">
              <span className="text-xs text-slate-500 font-medium">Estimated Total:</span>
              <div className="text-2xl sm:text-3xl font-extrabold font-display text-sky-600">
                ₹{totalEstimate.toLocaleString('en-IN')}
              </div>
              {totalEstimate > 3000 && (
                <div className="text-xs text-teal-700 font-semibold mt-0.5">
                  or ₹{monthlyEmi.toLocaleString('en-IN')}/mo ({emiTenure} mos @ 0% interest)
                </div>
              )}
            </div>
          </div>

          {/* Procedure Selection Rows */}
          <div className="py-6 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Select Procedures:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {procedureOptions.map((opt) => {
                const count = calcSelected[opt.id] || 0;
                return (
                  <div
                    key={opt.id}
                    className={`p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                      count > 0
                        ? 'border-sky-300 bg-sky-50/40 shadow-xs'
                        : 'border-slate-200 bg-slate-50/50'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900">
                        {opt.name}
                      </div>
                      <div className="text-xs text-slate-500">
                        ₹{opt.basePrice.toLocaleString('en-IN')} / {opt.unit}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateCount(opt.id, -1)}
                        disabled={count === 0}
                        className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold flex items-center justify-center hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none"
                      >
                        -
                      </button>
                      <span className="w-5 text-center text-xs font-bold text-slate-900">
                        {count}
                      </span>
                      <button
                        onClick={() => updateCount(opt.id, 1)}
                        className="w-7 h-7 rounded-lg bg-sky-500 text-white font-bold flex items-center justify-center hover:bg-sky-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* EMI Tenure Selector & CTA */}
          {totalEstimate > 3000 && (
            <div className="pt-4 pb-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-slate-700">0% EMI Tenure:</span>
                {[3, 6, 9, 12].map((m) => (
                  <button
                    key={m}
                    onClick={() => setEmiTenure(m)}
                    className={`px-2.5 py-1 rounded-lg font-bold text-xs transition-colors ${
                      emiTenure === m
                        ? 'bg-teal-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {m} Months
                  </button>
                ))}
              </div>

              <button
                onClick={() => onOpenBooking('Custom Estimate Plan')}
                className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Customized Estimate Plan</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
