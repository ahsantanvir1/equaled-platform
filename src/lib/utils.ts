import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency amount
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateObj);
}

/**
 * Format date and time
 */
export function formatDateTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(dateObj);
}

/**
 * Calculate impact message from donation amount
 * Based on PRD: $15 = 1 session, $50 = month, $150 = semester
 */
export function calculateImpact(amount: number): string {
  if (amount >= 150) {
    const semesters = Math.floor(amount / 150);
    return `Funds ${semesters} semester${semesters > 1 ? 's' : ''} of tutoring`;
  } else if (amount >= 50) {
    const months = Math.floor(amount / 50);
    return `Funds ${months} month${months > 1 ? 's' : ''} of tutoring`;
  } else if (amount >= 15) {
    const sessions = Math.floor(amount / 15);
    return `Funds ${sessions} tutoring session${sessions > 1 ? 's' : ''}`;
  }
  return 'Contributes to free tutoring';
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (US format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phoneRegex.test(phone);
}

/**
 * Get initials from name
 */
export function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

/**
 * Sleep/delay utility for testing
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Generate random ID (for demo/testing purposes)
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Get package details based on tier
 */
export function getPackageDetails(tier: 'STARTER' | 'SUPPORT' | 'GROWTH') {
  const packages = {
    STARTER: {
      name: 'Starter Plan',
      sessions: 2,
      price: 40,
      description: 'Perfect for occasional help',
    },
    SUPPORT: {
      name: 'Support Plan',
      sessions: 4,
      price: 75,
      description: 'Regular weekly sessions',
    },
    GROWTH: {
      name: 'Growth Plan',
      sessions: 8,
      price: 150,
      description: 'Intensive learning support',
    },
  };
  return packages[tier];
}

/**
 * Get grade level label
 */
export function getGradeLabel(grade: number): string {
  if (grade === 0) return 'Kindergarten';
  if (grade >= 1 && grade <= 12) return `Grade ${grade}`;
  return 'College';
}

/**
 * Calculate rating average
 */
export function calculateAverageRating(reviews: { rating: number }[]): number {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

/**
 * Check if user is eligible for free tutoring (demo logic)
 */
export function isEligibleForFreeTutoring(
  householdIncome?: number,
  state?: string
): boolean {
  // Pennsylvania-specific eligibility check
  // This is simplified demo logic - would integrate with actual eligibility systems
  if (state !== 'Pennsylvania') return false;
  if (!householdIncome) return false;
  
  // Example: household income below $50k qualifies
  return householdIncome < 50000;
}

