import React from 'react';
import {
  UserCheck,
  Scan,
  HeartHandshake,
  BadgePercent,
  CalendarCheck,
  Cpu,
  ShieldCheck,
  Smile,
  Check
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      id: 'experienced-dentists',
      title: 'Experienced Dentists',
      desc: 'MDS specialists with 10+ years of dedicated clinical experience and international fellowships.',
      icon: UserCheck,
      color: 'sky',
    },
    {
      id: 'digital-diagnosis',
      title: 'Digital Diagnosis',
      desc: '3D CBCT scans, low-dose digital X-rays, and intraoral cameras for 100% diagnostic accuracy.',
      icon: Scan,
      color: 'teal',
    },
    {
      id: 'painless-procedures',
      title: 'Painless Procedures',
      desc: 'Computerized painless local anesthesia delivery and gentle minimally invasive protocols.',
      icon: HeartHandshake,
      color: 'rose',
    },
    {
      id: 'affordable-pricing',
      title: 'Affordable Pricing',
      desc: 'Completely transparent fee structure with 0% EMI financing and zero hidden charges.',
      icon: BadgePercent,
      color: 'amber',
    },
    {
      id: 'flexible-appointment',
      title: 'Flexible Appointments',
      desc: 'Early morning & late evening slots with guaranteed zero waiting time for booked patients.',
      icon: CalendarCheck,
      color: 'indigo',
    },
    {
      id: 'modern-equipment',
      title: 'Modern Equipment',
      desc: '5-axis CAD/CAM crown milling, soft-tissue diode lasers, and 3D optical impression scanners.',
      icon: Cpu,
      color: 'teal',
    },
    {
      id: 'sterilization-standards',
      title: 'Sterilization Standards',
      desc: 'Class-B autoclave steam sterilization and disposable hygiene kits for 100% patient safety.',
      icon: ShieldCheck,
      color: 'sky',
    },
    {
      id: 'friendly-staff',
      title: 'Friendly & Caring Staff',
      desc: 'Compassionate patient care team trained to alleviate dental anxiety for kids and adults alike.',
      icon: Smile,
      color: 'emerald',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            The SmileCraft Difference
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3">
            Why Patients Choose Our Clinic
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            We blend medical excellence with comforting empathy, ensuring your dental visits are painless, predictable, and stress-free.
          </p>
        </div>

        {/* 8 Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-sky-300 shadow-xs hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-sky-600 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-600 shrink-0" />
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center gap-1.5 text-[11px] font-semibold text-sky-600">
                  <span>Verified Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
