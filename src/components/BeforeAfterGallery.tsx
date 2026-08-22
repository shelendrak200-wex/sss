import React, { useState, useRef } from 'react';
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Clock,
  UserCheck,
  CheckCircle,
  ArrowLeftRight
} from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';

interface BeforeAfterGalleryProps {
  onOpenBooking: (treatment?: string) => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCaseIndex, setSelectedCaseIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Smile Makeover', 'Dental Implants', 'Teeth Whitening', 'Braces & Aligners'];

  const filteredCases = activeCategory === 'All'
    ? BEFORE_AFTER_CASES
    : BEFORE_AFTER_CASES.filter((c) => c.category === activeCategory);

  const currentCase = filteredCases[selectedCaseIndex] || filteredCases[0] || BEFORE_AFTER_CASES[0];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="before-after" className="py-16 sm:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            Real Clinical Transformations
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-slate-900 mt-3">
            Before & After Smile Gallery
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
            Drag the slider to see how our aesthetic and restorative dental procedures transform our patients' confidence and oral health.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedCaseIndex(0);
                  setSliderPosition(50);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/20 font-semibold'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Card */}
        {currentCase && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Draggable Image Comparison Slider */}
              <div className="lg:col-span-7 p-4 sm:p-6 flex flex-col justify-center bg-slate-900">
                <div
                  ref={containerRef}
                  onMouseDown={() => setIsDragging(true)}
                  onMouseUp={() => setIsDragging(false)}
                  onMouseLeave={() => setIsDragging(false)}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  onClick={(e) => handleMove(e.clientX)}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden select-none cursor-ew-resize bg-slate-950 border-2 border-slate-800"
                >
                  {/* AFTER Image (Background) */}
                  <img
                    src={currentCase.afterImage}
                    alt={`${currentCase.title} After`}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />

                  {/* BEFORE Image (Clipped Overlay) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={currentCase.beforeImage}
                      alt={`${currentCase.title} Before`}
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{
                        width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                        height: '100%',
                      }}
                      draggable={false}
                    />
                  </div>

                  {/* Divider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    {/* Draggable Button Handle */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-sky-500">
                      <ArrowLeftRight className="w-4 h-4 text-sky-600" />
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 pointer-events-none">
                    BEFORE
                  </div>
                  <div className="absolute top-3 right-3 bg-sky-500/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/20 pointer-events-none">
                    AFTER
                  </div>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/80 text-[11px] bg-black/60 px-3 py-0.5 rounded-full pointer-events-none">
                    Drag left or right to compare
                  </div>
                </div>

                {/* Quick Presets Slider Controls */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSliderPosition(0)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[11px]"
                    >
                      Show After
                    </button>
                    <button
                      onClick={() => setSliderPosition(50)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[11px]"
                    >
                      50 / 50
                    </button>
                    <button
                      onClick={() => setSliderPosition(100)}
                      className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[11px]"
                    >
                      Show Before
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        const prev = selectedCaseIndex > 0 ? selectedCaseIndex - 1 : filteredCases.length - 1;
                        setSelectedCaseIndex(prev);
                        setSliderPosition(50);
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
                      aria-label="Previous Case"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-slate-400 font-medium">
                      {selectedCaseIndex + 1} of {filteredCases.length}
                    </span>
                    <button
                      onClick={() => {
                        const next = selectedCaseIndex < filteredCases.length - 1 ? selectedCaseIndex + 1 : 0;
                        setSelectedCaseIndex(next);
                        setSliderPosition(50);
                      }}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
                      aria-label="Next Case"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Treatment Breakdown & Case Notes */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-200">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentCase.category}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-tight">
                    {currentCase.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {currentCase.treatmentDetails}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-sky-600" />
                        Treatment Duration:
                      </span>
                      <span className="font-bold text-slate-900">{currentCase.duration}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-teal-600" />
                        Treating Specialist:
                      </span>
                      <span className="font-bold text-slate-900">{currentCase.doctorName}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">Patient Age:</span>
                      <span className="font-semibold text-slate-700">{currentCase.patientAge}</span>
                    </div>
                  </div>
                </div>

                {/* Book Action */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenBooking(currentCase.category)}
                    className="w-full py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Get Similar Results — Book Consultation</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center">
                    All cases shown are genuine SmileCraft clinic patients with verified consent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
