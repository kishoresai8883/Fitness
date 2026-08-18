export interface Program {
  id: string;
  title: string;
  tagline: string;
  category: 'strength' | 'hiit' | 'coaching' | 'mobility' | 'boxing';
  description: string;
  fullDescription: string;
  image: string;
  intensity: 'Moderate' | 'High' | 'Extreme';
  duration: string;
  caloriesBurned: string;
  suitableFor: string[];
  keyBenefits: string[];
  scheduleHighlights: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  certifications: string[];
  specialties: string[];
  bio: string;
  image: string;
  yearsExperience: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  program: string;
  quote: string;
  rating: number;
  image: string;
  resultMetric: string;
  durationWithUs: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  classTitle: string;
  instructor: string;
  category: 'strength' | 'hiit' | 'coaching' | 'mobility' | 'boxing';
  room: string;
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  spotsLeft: number;
}

export interface MembershipPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnualMonthly: number;
  popular?: boolean;
  tagline: string;
  features: string[];
  notIncluded?: string[];
  ctaText: string;
}

export interface TransformationStory {
  id: string;
  name: string;
  age: number;
  goal: string;
  achievement: string;
  timeframe: string;
  beforeImg: string;
  afterImg: string;
  quote: string;
  trainer: string;
}

export interface FreePassFormData {
  fullName: string;
  phone: string;
  email: string;
  fitnessGoal: string;
  preferredTime: string;
  preferredProgram: string;
}
