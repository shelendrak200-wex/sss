import React from 'react';
import {
  ShieldCheck,
  CreditCard,
  Smartphone,
  Building2,
  Wallet,
  CheckCircle,
  HelpCircle,
  Percent
} from 'lucide-react';
import { INSURANCE_PARTNERS, PAYMENT_MODES } from '../data/clinicData';

export const InsuranceSection: React.FC = () => {
  const getPaymentIcon = (iconName: string) => {
    switch (iconName) {
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-sky-600" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-teal-600" />;
      case 'Wallet':
        return <Wallet className="w-5 h-5 text-indigo-600" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-amber-500" />;
      default:
        return <CreditCard className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Hassle-Free Payments
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3">
            Insurance & Flexible Payment Modes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            We partner with leading medical insurers and financing institutions to make top-tier dental treatments completely affordable for your family.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Accepted Insurance & Cashless Partners */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <h3 className="text-lg font-bold font-display text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-teal-600" />
                  Accepted Insurance & Cashless Network
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Direct TPA cashless desk available at our clinic.
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full">
                Cashless Desk
              </span>
            </div>

            {/* Insurance Partners Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {INSURANCE_PARTNERS.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:border-sky-300 transition-colors"
                >
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">
                    {partner.logoText}
                  </div>
                  <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="text-teal-600 font-semibold flex items-center gap-0.5">
                      <CheckCircle className="w-2.5 h-2.5" /> Cashless
                    </span>
                    <span>{partner.type}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Insurance Advice Note */}
            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
              <span>
                Need help claiming your corporate dental insurance reimbursement? Our front desk provides complete itemized receipts, diagnostic X-rays, and doctor clinical summaries.
              </span>
            </div>
          </div>

          {/* Right Column: 0% EMI & Digital Payment Modes */}
          <div className="lg:col-span-5 bg-gradient-to-br from-sky-900 to-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-400/30 mb-2">
                <Percent className="w-3.5 h-3.5" />
                <span>0% Interest Easy EMI</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Multiple Convenient Payment Options
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Zero processing fee financing on treatments above ₹5,000.
              </p>
            </div>

            {/* Payment Modes List */}
            <div className="space-y-3">
              {PAYMENT_MODES.map((mode, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 flex items-center gap-3.5 hover:bg-white/15 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center text-white">
                    {getPaymentIcon(mode.icon)}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {mode.name}
                    </div>
                    <div className="text-[11px] text-slate-300">
                      {mode.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Footer */}
            <div className="pt-2 border-t border-white/10 text-center text-xs text-slate-400">
              All major credit cards, UPI, & digital wallets accepted at chairside.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
