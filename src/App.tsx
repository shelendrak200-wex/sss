import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DoctorsSection } from './components/DoctorsSection';
import { TechnologySection } from './components/TechnologySection';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { TreatmentProcess } from './components/TreatmentProcess';
import { PricingSection } from './components/PricingSection';
import { InsuranceSection } from './components/InsuranceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { DentalSymptomChecker } from './components/DentalSymptomChecker';
import { FaqSection } from './components/FaqSection';
import { BlogSection } from './components/BlogSection';
import { AppointmentSection } from './components/AppointmentSection';
import { AppointmentModal } from './components/AppointmentModal';
import { ContactAndMap } from './components/ContactAndMap';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingTreatment, setBookingTreatment] = useState<string | undefined>(undefined);
  const [bookingDoctorId, setBookingDoctorId] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleOpenBooking = (treatment?: string, doctorId?: string) => {
    setBookingTreatment(treatment);
    setBookingDoctorId(doctorId);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setBookingTreatment(undefined);
    setBookingDoctorId(undefined);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'doctors', 'technology', 'before-after', 'pricing', 'testimonials', 'faq', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-sky-500 selection:text-white">
      {/* Sticky Clean Navbar */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Clinical Accreditations & Safety Bar */}
        <TrustBar />

        {/* 8 Comprehensive Dental Treatments */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Why Choose SmileCraft Difference */}
        <WhyChooseUs />

        {/* Specialist Doctors */}
        <DoctorsSection onOpenBooking={handleOpenBooking} />

        {/* Modern Diagnostic Clinic Technology */}
        <TechnologySection />

        {/* Before & After Transformations Slider */}
        <BeforeAfterGallery onOpenBooking={handleOpenBooking} />

        {/* 6-Step Treatment Journey Process */}
        <TreatmentProcess onOpenBooking={() => handleOpenBooking()} />

        {/* Transparent Pricing & Interactive EMI Calculator */}
        <PricingSection onOpenBooking={handleOpenBooking} />

        {/* Insurance & Payment Modes */}
        <InsuranceSection />

        {/* Google Reviews & Verified Patient Stories */}
        <TestimonialsSection />

        {/* Interactive Symptom Checker */}
        <DentalSymptomChecker onOpenBooking={handleOpenBooking} />

        {/* Searchable FAQ Accordion */}
        <FaqSection onOpenBooking={() => handleOpenBooking()} />

        {/* Dental Education Blog Guides */}
        <BlogSection onOpenBooking={handleOpenBooking} />

        {/* Full Inline Booking Form */}
        <AppointmentSection />

        {/* Google Map & Contact Details */}
        <ContactAndMap />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Action Buttons (WhatsApp, Emergency Call, Back to Top) */}
      <FloatingWidgets onOpenBooking={() => handleOpenBooking()} />

      {/* Global Booking Modal */}
      <AppointmentModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialTreatment={bookingTreatment}
        initialDoctorId={bookingDoctorId}
      />
    </div>
  );
}
