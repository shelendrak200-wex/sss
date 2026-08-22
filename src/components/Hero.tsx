import React from 'react';
import {
  Calendar,
  Phone,
  MessageCircle,
  Star,
  ShieldCheck,
  Award,
  CheckCircle2,
  Clock,
  Users,
  Sparkles
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-sky-50/60 via-slate-50 to-[#F8FAFC] pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Subtle Background Accent Blurs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-sky-200/30 to-teal-200/20 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Trust & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200/80 shadow-sm text-sky-800 text-xs sm:text-sm font-medium">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="font-semibold text-slate-800">NABH & ISO Certified Dental Excellence</span>
              <span className="text-slate-300">|</span>
              <span className="text-sky-600 font-semibold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9/5 (1,200+ Reviews)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-[1.15]">
              Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">Family Dental</span> Clinic
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Providing gentle, advanced, and affordable dental care for children and adults with modern technology and experienced dentists.
            </p>

            {/* Feature Checkmarks */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs sm:text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>100% Painless Procedures</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Zero Wait Time with Booking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span>Transparent Treatment Costs</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-base shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 transition-all active:scale-95 flex items-center justify-center gap-2.5"
                id="hero-book-btn"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2 hover:border-slate-300"
                id="hero-call-btn"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hello%20SmileCraft%20Dental,%20I%20would%20like%20to%20book%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base shadow-sm transition-all flex items-center justify-center gap-2"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <p className="text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              <span>Strict Class-B Sterilization • Same-Day Pain Relief Emergency Care</span>
            </p>
          </div>

          {/* Right Column: Hero Visual & Doctor Card Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Smiling Family / Clinic Visual Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=85"
                  alt="Happy smiling family with healthy white teeth at SmileCraft Dental Care"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white p-3 rounded-xl bg-slate-900/50 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-300" />
                      Family & Child Friendly Operatory
                    </span>
                    <span className="bg-emerald-500/90 text-white font-bold px-2 py-0.5 rounded text-[10px]">
                      Painless Tech
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Doctor Badge (Top Right) */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sky-400">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80"
                    alt="Dr. Aarav Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Dr. Aarav Sharma</div>
                  <div className="text-[11px] text-teal-600 font-medium">Chief Implantologist</div>
                  <div className="flex items-center gap-0.5 text-[10px] text-amber-500 font-bold">
                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" /> 4.9 (4,000+ Implants)
                  </div>
                </div>
              </div>

              {/* Floating Same-Day Badge (Bottom Left) */}
              <div className="absolute -bottom-5 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Same-Day Slots</div>
                  <div className="text-[11px] text-slate-500 font-medium">No Waiting List Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Statistics Bar (4 Cards) */}
        <div className="mt-14 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Stat 1 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                    10+ Years
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    Clinical Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                    5,000+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    Happy Patients
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-slate-900 flex items-center gap-1">
                    4.9 <span className="text-xs font-normal text-slate-400">/ 5.0</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    Google Review Rating
                  </div>
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                    Same Day
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    Appointment Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
