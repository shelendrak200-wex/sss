import React, { useState, useEffect } from 'react';
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  Menu,
  X,
  Shield,
  MessageCircle,
  Sparkles,
  ChevronDown,
  Activity,
  HeartHandshake
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: (treatment?: string, doctorId?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [treatmentsDropdownOpen, setTreatmentsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Treatments', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Technology', href: '#technology' },
    { name: 'Before & After', href: '#before-after' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const quickTreatments = [
    { name: 'Teeth Cleaning & Scaling', href: '#services' },
    { name: 'Root Canal Treatment (RCT)', href: '#services' },
    { name: 'Dental Implants', href: '#services' },
    { name: 'Clear Aligners & Braces', href: '#services' },
    { name: 'Laser Teeth Whitening', href: '#services' },
    { name: 'Pediatric Kids Dental', href: '#services' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Emergency & Info Banner */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-medium">Open Today</span>: {CLINIC_INFO.workingHours.weekdays}
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Indiranagar, Bengaluru</span>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hidden lg:flex items-center gap-1 text-sky-300 font-medium">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              NABH & ISO 9001:2015 Certified Clinic
            </span>
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone}`}
              className="flex items-center gap-1.5 text-rose-300 hover:text-rose-200 font-semibold bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/60 transition-colors"
            >
              <Phone className="w-3 h-3 text-rose-400 animate-pulse" />
              <span>24/7 Emergency: {CLINIC_INFO.emergencyPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Clinic Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group" id="nav-brand-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-teal-400 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold font-display tracking-tight text-slate-900">
                  Smile<span className="text-sky-500">Craft</span>
                </span>
                <span className="text-xs bg-teal-50 text-teal-700 font-semibold px-1.5 py-0.5 rounded border border-teal-200">
                  Dental
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Advanced & Gentle Care
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Treatments Mega-Hover Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTreatmentsDropdownOpen(true)}
              onMouseLeave={() => setTreatmentsDropdownOpen(false)}
            >
              <a
                href="#services"
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-colors inline-flex items-center gap-1"
              >
                <span>Treatments</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </a>

              {treatmentsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in-50 duration-150">
                  <div className="px-3 py-1.5 text-xs font-semibold uppercase text-slate-400 tracking-wider">
                    Popular Treatments
                  </div>
                  {quickTreatments.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setTreatmentsDropdownOpen(false)}
                      className="block px-3 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="border-t border-slate-100 my-1"></div>
                  <a
                    href="#services"
                    onClick={() => setTreatmentsDropdownOpen(false)}
                    className="block px-3 py-2 text-xs font-semibold text-sky-600 hover:bg-sky-50 transition-colors text-center"
                  >
                    View All 8 Specializations →
                  </a>
                </div>
              )}
            </div>

            {navLinks.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Hi%20SmileCraft%20Dental,%20I%20would%20like%20to%20inquire%20about%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center"
              title="Chat with Clinic on WhatsApp"
              id="nav-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              id="nav-call-btn"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span className="hidden lg:inline">{CLINIC_INFO.phone}</span>
              <span className="lg:hidden">Call</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-sky-500 hover:bg-sky-600 shadow-sm hover:shadow-md transition-all active:scale-95"
              id="nav-book-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 xl:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white bg-sky-500 sm:hidden"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 mb-4">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 text-sm font-semibold"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              Call Clinic
            </a>
            <a
              href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-sm font-semibold border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              WhatsApp
            </a>
          </div>

          <div className="space-y-1 divide-y divide-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-base font-bold text-white bg-sky-500 hover:bg-sky-600 shadow-md transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Online Appointment
            </button>
            <p className="text-center text-xs text-slate-500 mt-2">
              Instant SMS & WhatsApp confirmation
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
