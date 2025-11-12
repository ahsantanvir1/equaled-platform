/**
 * Application-wide constants
 */

// Subjects offered
export const SUBJECTS = [
  'Mathematics',
  'Algebra',
  'Geometry',
  'Calculus',
  'Statistics',
  'Science',
  'Physics',
  'Chemistry',
  'Biology',
  'Earth Science',
  'English',
  'Literature',
  'Writing',
  'Grammar',
  'Reading Comprehension',
  'History',
  'U.S. History',
  'World History',
  'Social Studies',
  'Computer Science',
  'Programming',
  'Web Development',
  'Foreign Languages',
  'Spanish',
  'French',
  'Test Prep',
  'SAT',
  'ACT',
  'AP Courses',
] as const;

// Grade levels
export const GRADE_LEVELS = [
  { value: 0, label: 'Kindergarten' },
  { value: 1, label: 'Grade 1' },
  { value: 2, label: 'Grade 2' },
  { value: 3, label: 'Grade 3' },
  { value: 4, label: 'Grade 4' },
  { value: 5, label: 'Grade 5' },
  { value: 6, label: 'Grade 6' },
  { value: 7, label: 'Grade 7' },
  { value: 8, label: 'Grade 8' },
  { value: 9, label: 'Grade 9' },
  { value: 10, label: 'Grade 10' },
  { value: 11, label: 'Grade 11' },
  { value: 12, label: 'Grade 12' },
  { value: 13, label: 'College' },
] as const;

// Package tiers (per PRD)
export const PACKAGES = {
  STARTER: {
    tier: 'STARTER',
    name: 'Starter Plan',
    sessions: 2,
    price: 40,
    description: 'Perfect for occasional help with homework or test prep',
    features: [
      '2 one-hour sessions per month',
      'Choose any certified tutor',
      'Online or in-person options',
      'Cancel anytime',
    ],
  },
  SUPPORT: {
    tier: 'SUPPORT',
    name: 'Support Plan',
    sessions: 4,
    price: 75,
    description: 'Ideal for regular weekly tutoring sessions',
    features: [
      '4 one-hour sessions per month',
      'Priority tutor selection',
      'Online or in-person options',
      'Session recording available',
      'Progress tracking',
      'Cancel anytime',
    ],
    popular: true,
  },
  GROWTH: {
    tier: 'GROWTH',
    name: 'Growth Plan',
    sessions: 8,
    price: 150,
    description: 'Best value for intensive learning support',
    features: [
      '8 one-hour sessions per month',
      'Priority tutor selection',
      'Online or in-person options',
      'Session recording available',
      'Detailed progress reports',
      'Learning plan customization',
      'Cancel anytime',
    ],
  },
} as const;

// Donation presets (per PRD)
export const DONATION_AMOUNTS = [
  {
    value: 15,
    label: '$15',
    impact: 'Funds 1 free tutoring session',
  },
  {
    value: 50,
    label: '$50',
    impact: 'Funds 1 month of tutoring',
  },
  {
    value: 150,
    label: '$150',
    impact: 'Funds 1 semester of tutoring',
  },
  {
    value: 300,
    label: '$300',
    impact: 'Funds 1 full year of tutoring',
  },
] as const;

// Session durations (in minutes)
export const SESSION_DURATIONS = [30, 45, 60, 90, 120] as const;

// Session types
export const SESSION_TYPES = ['ONLINE', 'IN_PERSON'] as const;

// Days of week
export const DAYS_OF_WEEK = [
  { value: 0, label: 'Sunday', short: 'Sun' },
  { value: 1, label: 'Monday', short: 'Mon' },
  { value: 2, label: 'Tuesday', short: 'Tue' },
  { value: 3, label: 'Wednesday', short: 'Wed' },
  { value: 4, label: 'Thursday', short: 'Thu' },
  { value: 5, label: 'Friday', short: 'Fri' },
  { value: 6, label: 'Saturday', short: 'Sat' },
] as const;

// Contact information
export const CONTACT_INFO = {
  email: 'info@equaled.org',
  supportEmail: 'support@equaled.org',
  phone: '(555) 123-4567',
  tollFree: '(800) 555-TUTOR',
  address: {
    street: '123 Education Street',
    city: 'Philadelphia',
    state: 'PA',
    zip: '19019',
  },
  hours: {
    weekday: 'Monday - Friday: 9:00 AM - 6:00 PM',
    saturday: 'Saturday: 10:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed',
  },
} as const;

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/equaled',
  twitter: 'https://twitter.com/equaled',
  instagram: 'https://instagram.com/equaled',
  linkedin: 'https://linkedin.com/company/equaled',
} as const;

// API routes
export const API_ROUTES = {
  auth: {
    signup: '/api/auth/signup',
    signin: '/api/auth/signin',
    signout: '/api/auth/signout',
  },
  tutors: {
    list: '/api/tutors',
    search: '/api/tutors/search',
    detail: (id: string) => `/api/tutors/${id}`,
    apply: '/api/tutors/apply',
  },
  bookings: {
    create: '/api/bookings',
    list: '/api/bookings',
    cancel: (id: string) => `/api/bookings/${id}/cancel`,
  },
  subscriptions: {
    create: '/api/subscriptions',
    list: '/api/subscriptions',
    cancel: (id: string) => `/api/subscriptions/${id}/cancel`,
  },
  donations: {
    create: '/api/donations',
    list: '/api/donations',
  },
  admin: {
    users: '/api/admin/users',
    tutors: '/api/admin/tutors',
    sessions: '/api/admin/sessions',
    donations: '/api/admin/donations',
    statistics: '/api/admin/statistics',
  },
} as const;

// Error messages
export const ERROR_MESSAGES = {
  generic: 'Something went wrong. Please try again.',
  unauthorized: 'You must be logged in to access this page.',
  forbidden: 'You do not have permission to access this resource.',
  notFound: 'The requested resource was not found.',
  validation: 'Please check your input and try again.',
  network: 'Network error. Please check your connection.',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  bookingCreated: 'Session booked successfully!',
  subscriptionCreated: 'Subscription activated successfully!',
  donationCompleted: 'Thank you for your donation!',
  profileUpdated: 'Profile updated successfully!',
  tutorApplicationSubmitted: 'Application submitted! We\'ll review it shortly.',
} as const;

// WCAG 2.1 - Minimum contrast ratios
export const WCAG_CONTRAST = {
  normal: 4.5,
  large: 3,
  enhanced: 7,
} as const;

// Maximum file upload sizes
export const MAX_FILE_SIZES = {
  profileImage: 5 * 1024 * 1024, // 5MB
  document: 10 * 1024 * 1024, // 10MB
} as const;

