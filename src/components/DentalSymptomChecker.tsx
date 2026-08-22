import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Stethoscope,
  Calendar,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

interface DentalSymptomCheckerProps {
  onOpenBooking: (treatment?: string) => void;
}

export const DentalSymptomChecker: React.FC<DentalSymptomCheckerProps> = ({ onOpenBooking }) => {
  const [selectedSymptom, setSelectedSymptom] = useState<string>('pain-cold');

  const symptoms = [
    {
      id: 'pain-cold',
      label: 'Sharp pain with cold/hot drinks',
      diagnosis: 'Deep Cavity or Early Pulpitis',
      recommendation: 'Single Sitting Root Canal or Biomimetic Composite Filling',
      urgency: 'Moderate (Treat within 3-5 days)',
      treatment: 'Root Canal Treatment (RCT)',
      price: 'From ₹1,200',
    },
    {
      id: 'bleeding-gums',
      label: 'Bleeding gums while brushing',
      diagnosis: 'Gingivitis or Subgingival Calculus buildup',
      recommendation: 'Ultrasonic Scaling & Periodontal Laser Deep Clean',
      urgency: 'Preventative (Schedule regular cleaning)',
      treatment: 'Teeth Cleaning & Scaling',
      price: 'From ₹1,000',
    },
    {
      id: 'crooked-gaps',
      label: 'Crooked teeth or smile gaps',
      diagnosis: 'Malocclusion or Dental Crowding',
      recommendation: 'Invisible Clear Aligners or Ceramic Braces',
      urgency: 'Elective / Aesthetic',
      treatment: 'Orthodontics & Aligners',
      price: 'From ₹30,000',
    },
    {
      id: 'missing-tooth',
      label: 'Missing or extracted tooth',
      diagnosis: 'Tooth loss with bone resorption risk',
      recommendation: 'Permanent Titanium Dental Implant with Zirconia Crown',
      urgency: 'Important (Prevents adjacent teeth drift)',
      treatment: 'Dental Implants',
      price: 'From ₹25,000',
    },
    {
      id: 'yellow-stains',
      label: 'Yellowing teeth or coffee stains',
      diagnosis: 'Extrinsic & Intrinsic Enamel Pigmentation',
      recommendation: 'In-Office Clinical Laser Whitening (8 shades lighter)',
      urgency: 'Aesthetic / Same-day',
      treatment: 'Cosmetic Dentistry',
      price: 'From ₹5,000',
    },
    {
      id: 'wisdom-pain',
      label: 'Back jaw pain & swollen gums',
      diagnosis: 'Impacted Wisdom Tooth (Pericoronitis)',
      recommendation: '3D CBCT Guided Gentle Wisdom Tooth Extraction',
      urgency: 'High (Prevent jaw infection)',
      treatment: 'Oral & Maxillofacial Surgery',
      price: 'From ₹3,500',
    },
  ];

  const current = symptoms.find((s) => s.id === selectedSymptom) || symptoms[0];

  return (
    <section className="py-16 sm:py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-sky-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl overflow-hidden relative">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center sm:text-left mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-bold border border-teal-400/30 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Interactive Dental Assistant</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display">
                What Dental Symptoms Are You Experiencing?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Click your primary concern below to view estimated diagnosis, recommended treatment, and doctor recommendation.
              </p>
            </div>

            {/* Symptom Selection Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-8">
              {symptoms.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSymptom(s.id)}
                  className={`p-3.5 rounded-xl text-left text-xs font-semibold transition-all flex items-center justify-between border ${
                    selectedSymptom === s.id
                      ? 'bg-sky-500 text-white border-sky-400 shadow-md scale-[1.02]'
                      : 'bg-white/10 text-slate-200 border-white/10 hover:bg-white/15'
                  }`}
                >
                  <span>{s.label}</span>
                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 ml-2 ${selectedSymptom === s.id ? 'text-white' : 'text-slate-400'}`} />
                </button>
              ))}
            </div>

            {/* Diagnostic Card Outcome */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/15">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-300">
                      Likely Clinical Condition:
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                      {current.diagnosis}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300">
                    <span className="font-semibold text-white">Recommended Approach: </span>
                    {current.recommendation}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                    <span className="bg-white/10 text-slate-200 px-2.5 py-1 rounded border border-white/10">
                      Urgency: <span className="font-semibold text-amber-300">{current.urgency}</span>
                    </span>
                    <span className="bg-teal-500/30 text-teal-200 px-2.5 py-1 rounded border border-teal-400/30">
                      Est. Cost: <span className="font-bold text-white">{current.price}</span>
                    </span>
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col justify-center">
                  <button
                    onClick={() => onOpenBooking(current.treatment)}
                    className="w-full py-3 px-4 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-900 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book {current.treatment}</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2">
                    Formal diagnosis confirmed chairside with digital X-Ray.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
