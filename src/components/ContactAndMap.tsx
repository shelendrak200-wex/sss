import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  Navigation,
  ShieldAlert,
  Car,
  Train,
  CheckCircle
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const ContactAndMap: React.FC = () => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC_INFO.address)}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Reach Our Clinic
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3">
            Contact & Location Details
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            Conveniently situated on 100ft Road in Indiranagar with dedicated patient valet parking and direct metro access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Main Contact Card */}
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 space-y-4">
              <h3 className="text-base font-bold font-display text-slate-900 border-b border-slate-200 pb-3">
                Clinic Contact Information
              </h3>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Front Desk & Appointments</div>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Emergency Hotline */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">24/7 Dental Emergency Hotline</div>
                  <a
                    href={`tel:${CLINIC_INFO.emergencyPhone}`}
                    className="text-sm font-bold text-rose-700 hover:text-rose-800 transition-colors"
                  >
                    {CLINIC_INFO.emergencyPhone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Official WhatsApp Chat</div>
                  <a
                    href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    +91 98765 43210 (Instant Chat)
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Patient Care Email</div>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 pt-2 border-t border-slate-200">
                <div className="w-9 h-9 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Clinic Address</div>
                  <p className="text-xs font-semibold text-slate-800 leading-snug">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 space-y-3">
              <h3 className="text-sm font-bold font-display text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-600" />
                Working Hours
              </h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-700">
                  <span>Monday – Friday:</span>
                  <span className="font-semibold">{CLINIC_INFO.workingHours.weekdays}</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Saturday:</span>
                  <span className="font-semibold">{CLINIC_INFO.workingHours.saturday}</span>
                </div>
                <div className="flex justify-between text-slate-700">
                  <span>Sunday:</span>
                  <span className="font-semibold text-teal-700">10:00 AM – 3:00 PM</span>
                </div>
              </div>

              {/* Transit hints */}
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <Car className="w-3 h-3 text-slate-400" /> Free Valet Parking
                </span>
                <span className="flex items-center gap-1">
                  <Train className="w-3 h-3 text-slate-400" /> 200m from Metro
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 flex flex-col justify-between relative shadow-lg min-h-[420px]">
            {/* Interactive Embedded Map representation */}
            <div className="relative w-full flex-1 bg-slate-800 min-h-[300px]">
              {/* Clean Map UI overlay */}
              <iframe
                title="SmileCraft Dental Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.973491418706!2d77.63914847587844!3d12.97356261483861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a695d63f0d%3A0xb36ef554cb37f267!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0 filter saturate-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Card on top of map */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-200 max-w-xs pointer-events-auto">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold text-xs">
                    SC
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      SmileCraft Dental Care
                    </h4>
                    <p className="text-[10px] text-teal-600 font-medium">
                      ★ 4.9 (1,200+ Reviews)
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 leading-tight">
                  Lotus Grand Plaza, 100ft Rd, Indiranagar, Bengaluru
                </p>
              </div>
            </div>

            {/* Map Bottom Action Bar */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-600 text-center sm:text-left">
                <span className="font-semibold text-slate-800">Landmark: </span>
                Next to Sony Center, Opposite Metro Pillar 114
              </div>

              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-2 shrink-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
