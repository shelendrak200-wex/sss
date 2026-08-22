import React, { useState } from 'react';
import {
  Star,
  Award,
  Languages,
  Calendar,
  UserCheck,
  CheckCircle,
  GraduationCap,
  Sparkles,
  X,
  Clock
} from 'lucide-react';
import { DOCTORS } from '../data/clinicData';
import { Doctor } from '../types';

interface DoctorsSectionProps {
  onOpenBooking: (treatment?: string, doctorId?: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onOpenBooking }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Dedicated Dental Specialists
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3">
            Meet Our Experienced Dentists
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            Our multi-disciplinary team of MDS specialists and dental surgeons brings over 40+ collective years of clinical expertise and gentle patient care.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:border-sky-300"
            >
              <div>
                {/* Doctor Photo with Badges */}
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={doc.photo}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/10 to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{doc.rating}</span>
                  </div>

                  {/* Experience Badge */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-teal-300 bg-teal-950/70 backdrop-blur-xs px-2 py-0.5 rounded border border-teal-500/30">
                      {doc.experience}
                    </span>
                    <h3 className="text-lg font-bold font-display leading-tight mt-1 text-white">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-slate-200 font-medium">
                      {doc.designation}
                    </p>
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="p-5 space-y-3">
                  {/* Qualifications */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Qualification
                    </div>
                    <p className="text-xs text-slate-700 font-medium mt-0.5 leading-snug">
                      {doc.qualification}
                    </p>
                  </div>

                  {/* Specialization */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Specialization
                    </div>
                    <p className="text-xs text-sky-800 font-medium mt-0.5 leading-snug">
                      {doc.specialization}
                    </p>
                  </div>

                  {/* Languages Spoken */}
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Languages className="w-3 h-3 text-slate-400" />
                      <span>Languages</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {doc.languages.map((lang) => (
                        <span
                          key={lang}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => setSelectedDoctor(doc)}
                  className="w-full py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors"
                >
                  View Doctor Profile & Bio
                </button>
                <button
                  onClick={() => onOpenBooking(undefined, doc.id)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book with {doc.name.split(' ')[1]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Bio Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-100 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={selectedDoctor.photo}
                  alt={selectedDoctor.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-sky-400 shadow-sm"
                />
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    {selectedDoctor.name}
                  </h3>
                  <p className="text-xs text-teal-600 font-semibold">
                    {selectedDoctor.designation}
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedDoctor.experience} • {selectedDoctor.patientsTreated} Patients
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedDoctor(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 text-xs sm:text-sm">
              {/* Bio */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  About Doctor
                </h4>
                <p className="text-slate-700 leading-relaxed">
                  {selectedDoctor.bio}
                </p>
              </div>

              {/* Education & Credentials */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-sky-600" />
                  Education & Training
                </h4>
                <div className="space-y-1.5">
                  {selectedDoctor.education.map((edu, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{edu}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards & Recognitions */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-500" />
                  Awards & Fellowships
                </h4>
                <div className="space-y-1.5">
                  {selectedDoctor.awards.map((award, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Days */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-slate-800">Weekly OPD Days: </span>
                <span className="text-slate-600">
                  {selectedDoctor.availableDays.join(', ')}
                </span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const docId = selectedDoctor.id;
                  setSelectedDoctor(null);
                  onOpenBooking(undefined, docId);
                }}
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold shadow-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment with {selectedDoctor.name.split(' ')[1]}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
