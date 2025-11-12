// Core type definitions for EqualEd platform

export type UserRole = 'STUDENT' | 'PARENT' | 'TUTOR' | 'DONOR' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
  profileImage?: string;
  emailVerified: boolean;
  qualificationStatus: 'FREE_ELIGIBLE' | 'PAID';
  state: string;
  createdAt: Date;
}

export interface Tutor {
  id: string;
  userId: string;
  user: User;
  bio: string;
  subjects: string[];
  gradelevels: number[];
  education: string;
  experience: number;
  certifications: string[];
  hourlyRate: number;
  status: 'PENDING' | 'ACTIVE' | 'SUSPENDED' | 'INACTIVE';
  rating: number;
  totalSessions: number;
  totalEarnings: number;
  backgroundCheck: boolean;
}

export interface Student {
  id: string;
  userId: string;
  user: User;
  gradeLevel?: number;
  subjects: string[];
  learningGoals?: string;
}

export interface Booking {
  id: string;
  studentId: string;
  tutorId: string;
  subject: string;
  scheduledAt: Date;
  duration: number;
  timezone: string;
  sessionType: 'ONLINE' | 'IN_PERSON';
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELLED' | 'NO_SHOW';
  isFree: boolean;
  amountPaid?: number;
}

export interface Subscription {
  id: string;
  tier: 'STARTER' | 'SUPPORT' | 'GROWTH';
  sessionsPerMonth: number;
  pricePerMonth: number;
  sessionsRemaining: number;
  status: string;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
}

export interface Donation {
  id: string;
  amount: number;
  type: 'ONE_TIME' | 'RECURRING' | 'SPONSOR_STUDENT';
  isRecurring: boolean;
  impactMessage?: string;
  sessionsSponsored: number;
  createdAt: Date;
}

export interface Sponsorship {
  id: string;
  donorId: string;
  studentId: string;
  amount: number;
  duration: string;
  sessionsIncluded: number;
  sessionsUsed: number;
  status: string;
  startDate: Date;
  endDate: Date;
}

export interface Review {
  id: string;
  studentId: string;
  tutorId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
}

// Form types
export interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  phone?: string;
}

export interface TutorApplicationFormData {
  bio: string;
  subjects: string[];
  gradelevels: number[];
  education: string;
  experience: number;
  certifications: string[];
  hourlyRate: number;
}

export interface BookingFormData {
  tutorId: string;
  subject: string;
  scheduledAt: Date;
  duration: number;
  sessionType: 'ONLINE' | 'IN_PERSON';
  notes?: string;
}

export interface DonationFormData {
  amount: number;
  type: 'ONE_TIME' | 'RECURRING' | 'SPONSOR_STUDENT';
  isRecurring: boolean;
  recurringFrequency?: 'monthly' | 'quarterly' | 'annual';
  isAnonymous: boolean;
  studentId?: string; // For sponsorship
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// Search & Filter types
export interface TutorSearchFilters {
  subject?: string;
  gradeLevel?: number;
  minRating?: number;
  maxHourlyRate?: number;
  availability?: string; // Day of week
  search?: string; // Name or keyword search
}

export interface SessionStatistics {
  totalSessions: number;
  freeSessions: number;
  paidSessions: number;
  totalRevenue: number;
  totalDonations: number;
  activeTutors: number;
  activeStudents: number;
}

