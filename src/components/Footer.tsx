import React, { useState } from 'react';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  Heart,
  X
} from 'lucide-react';
import { CLINIC_INFO, SERVICES } from '../data/clinicData';

interface FooterProps {
  onOpenBooking: (treatment?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Clinic', href: '#about' },
    { name: 'Our Dentists', href: '#doctors' },
    { name: 'Clinic Technology', href: '#technology' },
    { name: 'Before & After Cases', href: '#before-after' },
    { name: 'Pricing & Packages', href: '#pricing' },
    { name: 'Patient Reviews', href: '#testimonials' },
    { name: 'Dental FAQ', href: '#faq' },
    { name: 'Dental Health Blog', href: '#blog' },
    { name: 'Contact & Directions', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Accreditation */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center text-white shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold font-display tracking-tight text-white">
                  Smile<span className="text-sky-400">Craft</span> Dental
                </span>
                <p className="text-[11px] text-teal-400 font-medium">
                  Advanced & Gentle Family Care
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              SmileCraft Dental Care is an NABH accredited multispeciality dental clinic delivering painless, digital, and hospital-grade dental health for all age groups.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>NABH & ISO 9001:2015 Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Awarded Best Patient-Care Dental Clinic 2024</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-3 flex items-center gap-3">
              {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform.toLowerCase()}`}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-sky-500 hover:text-white text-slate-400 flex items-center justify-center text-xs font-bold transition-colors"
                  aria-label={platform}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.slice(0, 7).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-slate-200"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Clinical Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specialized Treatments
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onOpenBooking(s.name)}
                    className="text-left hover:text-sky-400 transition-colors flex items-center gap-1 text-slate-400 hover:text-slate-200"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{s.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Clinic Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CLINIC_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Mon - Sat: 9:00 AM - 8:30 PM</div>
                  <div className="text-slate-400">Sunday: 10:00 AM - 3:00 PM</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-md transition-colors"
              >
                Book Appointment Online
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} SmileCraft Dental Care. All rights reserved. Registered Healthcare Facility.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <span className="text-slate-400 flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Healthy Smiles
            </span>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold font-display">
                {legalModal === 'privacy' ? 'Patient Privacy & Confidentiality Policy' : 'Terms & Clinical Treatment Conditions'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-slate-600 space-y-2.5 max-h-64 overflow-y-auto leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    SmileCraft Dental Care values patient confidentiality. All medical records, intraoral X-rays, 3D CBCT scans, and diagnostic notes are encrypted under strict medical privacy regulations (HIPAA/NABH compliance).
                  </p>
                  <p>
                    Your contact information is utilized exclusively for appointment reminders, post-treatment care instructions, and clinic health advisories. We never share patient data with third-party marketers.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Appointment slots are reserved specifically for you. We kindly request at least 2 hours advance notice for cancellations or rescheduling so the emergency slot can be allocated to patients in acute pain.
                  </p>
                  <p>
                    Warranty cards on titanium implants, CAD/CAM zirconia crowns, and porcelain veneers remain valid with regular 6-month preventive checkups and cleanings.
                  </p>
                </>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs hover:bg-slate-200"
              >
                Understood & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
