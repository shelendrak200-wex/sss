export interface ServiceSubItem {
  id: string;
  name: string;
  description: string;
  duration: string;
  priceEstimate: string;
  highlights: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  image: string;
  overview: string;
  subItems: ServiceSubItem[];
  benefits: string[];
  recommendedFor: string;
}

export interface Doctor {
  id: string;
  name: string;
  designation: string;
  photo: string;
  qualification: string;
  experience: string;
  specialization: string;
  languages: string[];
  bio: string;
  availableDays: string[];
  rating: number;
  patientsTreated: string;
  awards: string[];
  education: string[];
}

export interface TechnologyItem {
  id: string;
  title: string;
  badge: string;
  iconName: string;
  image: string;
  description: string;
  patientBenefit: string;
  specs: string[];
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  category: 'Smile Makeover' | 'Dental Implants' | 'Teeth Whitening' | 'Braces & Aligners';
  beforeImage: string;
  afterImage: string;
  duration: string;
  treatmentDetails: string;
  doctorName: string;
  patientAge: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  treatment: string;
  avatar: string;
  comment: string;
  doctorName: string;
  verified: boolean;
}

export interface PricingPlan {
  id: string;
  service: string;
  category: string;
  price: number;
  pricePrefix?: string;
  duration: string;
  description: string;
  popular?: boolean;
  included: string[];
  emiAvailable: boolean;
  monthlyEmi?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Root Canal' | 'Implants' | 'Braces & Aligners' | 'Pediatric' | 'Pricing & Insurance';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface AppointmentBooking {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  treatmentCategory: string;
  subTreatment?: string;
  doctorId: string;
  doctorName: string;
  patientType: 'new' | 'returning';
  isEmergency: boolean;
  message?: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending';
}

export interface InsuranceProvider {
  name: string;
  logoText: string;
  cashless: boolean;
  type: string;
}
