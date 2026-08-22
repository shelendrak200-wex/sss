import React, { useState, useEffect } from 'react';
import {
  MessageCircle,
  Phone,
  ArrowUp,
  ShieldAlert,
  Calendar
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FloatingWidgetsProps {
  onOpenBooking: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onOpenBooking }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white shadow-lg transition-all hover:scale-105 active:scale-95 backdrop-blur-xs"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Emergency Call Button */}
      <a
        href={`tel:${CLINIC_INFO.emergencyPhone}`}
        className="pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/30 transition-all hover:scale-105 active:scale-95 text-xs font-bold"
        title="24/7 Dental Emergency Call"
      >
        <Phone className="w-3.5 h-3.5 animate-bounce" />
        <span className="hidden sm:inline">24/7 Emergency</span>
      </a>

      {/* Floating WhatsApp Live Button */}
      <a
        href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hi%20SmileCraft%20Dental,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 group"
        title="Chat with SmileCraft Clinic on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-emerald-500 animate-ping" />
        </div>
        <span className="text-xs font-bold tracking-wide pr-1">
          Chat with Clinic
        </span>
      </a>
    </div>
  );
};
