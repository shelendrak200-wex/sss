import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Stethoscope,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Printer,
  CalendarPlus,
  Share2,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICES, DOCTORS, CLINIC_INFO } from '../data/clinicData';
import { AppointmentBooking } from '../types';

interface AppointmentSectionProps {
  initialTreatment?: string;
  initialDoctorId?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  initialTreatment = '',
  initialDoctorId = '',
  isModal = false,
  onClose,
}) => {
  // Form Fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('10:00 AM - 11:00 AM (Morning)');
  const [treatmentCategory, setTreatmentCategory] = useState(initialTreatment || 'General Dentistry');
  const [doctorId, setDoctorId] = useState(initialDoctorId || 'dr-aarav-sharma');
  const [patientType, setPatientType] = useState<'new' | 'returning'>('new');
  const [isEmergency, setIsEmergency] = useState(false);
  const [message, setMessage] = useState('');

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<AppointmentBooking | null>(null);

  useEffect(() => {
    if (initialTreatment) {
      setTreatmentCategory(initialTreatment);
    }
    if (initialDoctorId) {
      setDoctorId(initialDoctorId);
    }
  }, [initialTreatment, initialDoctorId]);

  const timeSlots = [
    '09:30 AM - 10:30 AM (Morning)',
    '10:30 AM - 11:30 AM (Morning)',
    '11:30 AM - 12:30 PM (Morning)',
    '02:00 PM - 03:00 PM (Afternoon)',
    '03:00 PM - 04:00 PM (Afternoon)',
    '04:30 PM - 05:30 PM (Evening)',
    '05:30 PM - 06:30 PM (Evening)',
    '06:30 PM - 07:30 PM (Evening)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    const chosenDoctor = DOCTORS.find((d) => d.id === doctorId) || DOCTORS[0];

    setTimeout(() => {
      const booking: AppointmentBooking = {
        id: `SC-${Math.floor(100000 + Math.random() * 900000)}`,
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
        date,
        timeSlot,
        treatmentCategory,
        doctorId,
        doctorName: chosenDoctor.name,
        patientType,
        isEmergency,
        message: message.trim(),
        createdAt: new Date().toLocaleTimeString(),
        status: 'Confirmed',
      };

      setConfirmedBooking(booking);
      setIsSubmitting(false);

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#0EA5E9', '#14B8A6', '#22C55E', '#38BDF8'],
        });
      } catch (err) {
        // Safe fallback if confetti unavailable
      }
    }, 600);
  };

  const handleReset = () => {
    setConfirmedBooking(null);
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setIsEmergency(false);
    if (onClose) onClose();
  };

  const generateGoogleCalendarUrl = (booking: AppointmentBooking) => {
    const title = encodeURIComponent(`Dental Appointment at SmileCraft: ${booking.treatmentCategory}`);
    const details = encodeURIComponent(
      `Appointment ID: ${booking.id}\nSpecialist: ${booking.doctorName}\nLocation: ${CLINIC_INFO.address}\nPhone: ${CLINIC_INFO.phone}`
    );
    const location = encodeURIComponent(CLINIC_INFO.address);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <div id="book-appointment" className={`w-full ${isModal ? '' : 'py-16 sm:py-24 bg-white border-t border-slate-200/70'}`}>
      <div className={`${isModal ? 'p-6' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'}`}>
        {!confirmedBooking ? (
          <div>
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Online Clinic Booking
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 mt-2">
                Book Your Dental Appointment
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Zero waiting time with pre-booked slots. Instant SMS & WhatsApp confirmation.
              </p>
            </div>

            {/* Main Booking Form */}
            <form onSubmit={handleSubmit} className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Emergency Banner Checkbox */}
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-semibold text-amber-900">
                    Experiencing severe acute toothache or trauma?
                  </span>
                </div>
                <label className="flex items-center gap-2 text-xs font-bold text-amber-900 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isEmergency}
                    onChange={(e) => setIsEmergency(e.target.checked)}
                    className="w-4 h-4 text-amber-600 rounded border-amber-300 focus:ring-amber-500"
                  />
                  <span>Mark as Urgent / Same-Day</span>
                </label>
              </div>

              {/* Patient Type Radio */}
              <div className="flex items-center gap-4 text-xs">
                <span className="font-semibold text-slate-700">Patient Status:</span>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-700">
                  <input
                    type="radio"
                    name="patientType"
                    checked={patientType === 'new'}
                    onChange={() => setPatientType('new')}
                    className="text-sky-500 focus:ring-sky-500"
                  />
                  <span>New Patient</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer text-slate-700">
                  <input
                    type="radio"
                    name="patientType"
                    checked={patientType === 'returning'}
                    onChange={() => setPatientType('returning')}
                    className="text-sky-500 focus:ring-sky-500"
                  />
                  <span>Returning Patient</span>
                </label>
              </div>

              {/* Name, Phone, Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sen"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Phone *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      placeholder="e.g. ananya@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>
              </div>

              {/* Treatment and Doctor Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Treatment Required *
                  </label>
                  <div className="relative">
                    <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={treatmentCategory}
                      onChange={(e) => setTreatmentCategory(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="General Checkup & Consultation">General Checkup & Consultation (₹300)</option>
                      <option value="Ultrasonic Teeth Cleaning">Ultrasonic Teeth Cleaning (₹1,000)</option>
                      <option value="Single Sitting Root Canal">Single Sitting Root Canal (From ₹3,500)</option>
                      <option value="Titanium Dental Implant">Titanium Dental Implant (From ₹25,000)</option>
                      <option value="Invisible Clear Aligners">Invisible Clear Aligners (From ₹30,000)</option>
                      <option value="Laser Teeth Whitening">Laser Teeth Whitening (From ₹5,000)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Doctor *
                  </label>
                  <select
                    value={doctorId}
                    onChange={(e) => setDoctorId(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="">Any Available Senior Specialist</option>
                    {DOCTORS.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} — {d.designation.split('&')[0]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Appointment Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    >
                      {timeSlots.map((slot, i) => (
                        <option key={i} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message / Symptoms */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Describe Symptoms or Specific Requests (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sensitivity in upper left molar when chewing, or inquiring about Invisalign aligners..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-500/20 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                  id="submit-appointment-btn"
                >
                  {isSubmitting ? (
                    <span>Confirming Appointment Slot...</span>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Confirm & Book Appointment Slot</span>
                    </>
                  )}
                </button>
              </div>

              {/* Trust Footer */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400 text-[11px]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                  No pre-payment required
                </span>
                <span>•</span>
                <span>Free cancellation anytime</span>
                <span>•</span>
                <span>Zero wait-time guarantee</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Pass Screen */
          <div className="bg-white rounded-3xl border border-teal-200 shadow-2xl p-6 sm:p-10 space-y-6 max-w-2xl mx-auto animate-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-teal-50 border-2 border-teal-200 text-teal-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                Appointment Confirmed
              </span>
              <h3 className="text-2xl font-bold font-display text-slate-900">
                We're Looking Forward to Seeing You!
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                A confirmation SMS & WhatsApp message has been dispatched to <span className="font-semibold text-slate-800">{confirmedBooking.phone}</span>.
              </p>
            </div>

            {/* Appointment Digital Ticket */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5 space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <span className="text-slate-500 font-medium">Booking ID:</span>
                <span className="font-mono font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  {confirmedBooking.id}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-400 text-[11px] block">Patient Name</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Doctor Assigned</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.doctorName}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <span className="text-slate-400 text-[11px] block">Date</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.date}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Time Slot</span>
                  <span className="font-bold text-slate-900">{confirmedBooking.timeSlot}</span>
                </div>
              </div>

              <div>
                <span className="text-slate-400 text-[11px] block">Treatment Category</span>
                <span className="font-bold text-slate-900">{confirmedBooking.treatmentCategory}</span>
              </div>

              <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700">Clinic Address: </span>
                {CLINIC_INFO.address}
              </div>
            </div>

            {/* Confirmation Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href={generateGoogleCalendarUrl(confirmedBooking)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <CalendarPlus className="w-4 h-4 text-sky-600" />
                <span>Add to Google Calendar</span>
              </a>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hi%20SmileCraft,%20I%20have%20confirmed%20my%20appointment%20${confirmedBooking.id}%20for%20${confirmedBooking.date}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share via WhatsApp</span>
              </a>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <button
                onClick={() => window.print()}
                className="text-xs text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Appointment Slip</span>
              </button>

              <button
                onClick={handleReset}
                className="text-xs text-sky-600 hover:text-sky-700 font-semibold"
              >
                Book Another Appointment →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
