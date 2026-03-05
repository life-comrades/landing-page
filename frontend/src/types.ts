export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceTestimonial {
  quote: string;
  author: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  about: string;
  aboutDetails: string;
  whoItIsFor: string[];
  features: string[];
  faq: ServiceFaq;
  testimonial: ServiceTestimonial;
  metadata?: Metadata;
}


export interface HeroContent {
  title: string;
  subtitle: string;
}

export interface CityInfo {
  name: string;
  isAvailable: boolean;
  slug: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  serviceId?: string;
}



export interface SocialLinks {
  facebook?: string;
  whatsapp?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  cities: string[];
  social: SocialLinks;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Partner {
  name: string;
  logo: string;
  website?: string;
}

export interface Event {
  title: string;
  date: string;
  description: string;
  image?: string;
}

export interface AboutPageContent {
  mission: string;
  vision: string;
  founders: Founder[];
  partners: Partner[];
  events: Event[];
}

export type AboutData = AboutPageContent;

export interface WebsiteContent {
  companyName: string;
  tagline: string;
  contact: ContactInfo;
  homeHero: HeroContent;
  testimonials: Testimonial[];
  aboutPage: AboutPageContent;
  globalMetadata: Metadata;
  pagesMetadata: Record<string, Metadata>;
}

export type ServicesData = Record<string, Service>;

export interface BookingState {
  serviceId: string;
  serviceName: string;
  city: string[];
  date: string;
  time: string;
  patientName: string;
  patientAge: string;
  patientGender: string;
  guardianName: string;
  relationship: string;
  mobile: string;
  alternateMobile: string;
  address: string;
}

export const INITIAL_BOOKING_STATE: BookingState = {
  serviceId: '',
  serviceName: '',
  city: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Erode', 'Tirunelveli', 'Tiruppur', 'Thanjavur', 'Vellore'],
  date: '',
  time: '',
  patientName: '',
  patientAge: '',
  patientGender: '',
  guardianName: '',
  relationship: '',
  mobile: '',
  alternateMobile: '',
  address: ''
};

export interface BlogSection {
  heading: string;
  content: string;
  list?: string[];
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
  author: string;
  date: string;
  isFeatured?: boolean;
  content?: BlogSection[];
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
}

export interface Job {
  id: string;
  title: string;
  category: string;
  type: string; // 'Full-time' | 'Part-time' | 'Contract'
  location: string;
  salary?: string;
  postedDate: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface JobApplication {
  jobId: string;
  jobTitle: string;
  fullName: string;
  mobile: string;
  email: string;
  tenthStatus: 'Passed' | 'Result Awaited' | 'Failed';
  tenthMarks?: string;
  twelfthStatus: 'Passed' | 'Failed' | 'Diploma';
  twelfthMarks?: string;
  nursingQualification: 'ANM' | 'GNM' | 'B.Sc Nursing' | 'Post Basic B.Sc' | 'M.Sc Nursing';
  isGovtRegistered: boolean;
  registrationNumber?: string;
  experienceLevel: 'Fresher' | '<1 Year' | '1-3 Years' | '3-5 Years' | '5+ Years';
  currentAddress: string;
  nativeAddress: string;
  message?: string;
}


export type BookingStatus = 'Pending' | 'Assigned' | 'In Progress' | 'Completed' | 'Cancelled' | 'New';

export interface BookingResponse extends BookingState {
  id: string;
  status: BookingStatus;
  createdAt: string;
  updatedAt: string;
}

export type JobListing = Job[];