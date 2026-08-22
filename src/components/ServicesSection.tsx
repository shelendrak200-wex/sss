import React, { useState } from 'react';
import {
  Smile,
  Sparkles,
  Layers,
  Activity,
  Heart,
  Stethoscope,
  ShieldAlert,
  Shield,
  Clock,
  ArrowRight,
  CheckCircle,
  Calendar,
  X,
  ChevronRight,
  Info
} from 'lucide-react';
import { SERVICES } from '../data/clinicData';
import { ServiceCategory, ServiceSubItem } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (treatment?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Smile':
        return <Smile className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Activity':
        return <Activity className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      default:
        return <Smile className="w-5 h-5" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Specializations' },
    { id: 'general-dentistry', label: 'General' },
    { id: 'cosmetic-dentistry', label: 'Cosmetic' },
    { id: 'orthodontics', label: 'Aligners & Braces' },
    { id: 'dental-implants', label: 'Implants' },
    { id: 'root-canal', label: 'Root Canal' },
    { id: 'pediatric-dentistry', label: 'Pediatric' },
    { id: 'oral-surgery', label: 'Oral Surgery' },
    { id: 'gum-treatment', label: 'Gum Care' },
  ];

  const filteredServices = activeTab === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.id === activeTab);

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Comprehensive Dental Care
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3">
            Advanced Clinical Treatments
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            From routine preventive checkups to complex digital smile makeovers, our hospital-grade operatories deliver gentle, precision care.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/20 font-semibold'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (8 Specialization Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-sky-300"
            >
              <div>
                {/* Service Card Image */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 p-2 rounded-xl bg-white/90 backdrop-blur-md text-sky-600 shadow-sm">
                    {getServiceIcon(service.iconName)}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold font-display leading-snug">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Sub-treatments List */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Procedures Included:
                    </span>
                    {service.subItems.map((sub) => (
                      <div key={sub.id} className="flex items-center justify-between text-xs text-slate-700">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                          <span className="font-medium truncate">{sub.name}</span>
                        </span>
                        <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded">
                          {sub.priceEstimate.split(' ')[0]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-5 pt-0 mt-2 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200 transition-colors flex items-center justify-center gap-1"
                >
                  <Info className="w-3.5 h-3.5 text-slate-500" />
                  <span>Details</span>
                </button>
                <button
                  onClick={() => onOpenBooking(service.name)}
                  className="flex-1 py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold shadow-xs transition-colors flex items-center justify-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-56 w-full bg-slate-100">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent" />
              
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                  Specialized Treatment
                </span>
                <h3 className="text-2xl font-bold font-display">{selectedService.name}</h3>
                <p className="text-xs text-slate-200 mt-1">{selectedService.tagline}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Overview & Clinical Scope
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedService.overview}
                </p>
              </div>

              {/* Recommended For */}
              <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-sky-900">
                <span className="font-bold">Recommended for: </span>
                {selectedService.recommendedFor}
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Patient Benefits
                </h4>
                <div className="space-y-2">
                  {selectedService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-Treatments Menu & Pricing */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Procedures & Pricing
                </h4>
                <div className="space-y-3">
                  {selectedService.subItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-sky-300 transition-colors"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="font-bold text-slate-900 text-sm">{item.name}</div>
                        <div className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded">
                          {item.priceEstimate}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">{item.description}</p>
                      
                      <div className="mt-2.5 flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-sky-600" />
                          <span>Duration: {item.duration}</span>
                        </span>
                        {item.highlights.map((h, i) => (
                          <span key={i} className="bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                            • {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                Zero waiting time with online appointment booking.
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const name = selectedService.name;
                    setSelectedService(null);
                    onOpenBooking(name);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold shadow-sm flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {selectedService.name}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
