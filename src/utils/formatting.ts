/**
 * Formatting Utilities
 * Helper functions for formatting data
 */

/**
 * Format currency amount
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'INR',
  locale: string = 'en-IN'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format date
 */
export const formatDate = (
  date: Date | string,
  format: 'short' | 'long' | 'full' = 'short',
  locale: string = 'en-IN'
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const options: Intl.DateTimeFormatOptions = {
    short: { day: 'numeric', month: 'short', year: 'numeric' },
    long: { day: 'numeric', month: 'long', year: 'numeric' },
    full: { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' },
  }[format];

  return new Intl.DateTimeFormat(locale, options).format(dateObj);
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone: string): string => {
  // Remove non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Format as +91-XXXXX-XXXXX for Indian numbers
  if (digits.length === 12 && digits.startsWith('91')) {
    return `+91-${digits.substring(2, 7)}-${digits.substring(7)}`;
  }
  
  if (digits.length === 10) {
    return `+91-${digits.substring(0, 5)}-${digits.substring(5)}`;
  }
  
  return phone;
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Pluralize text based on count
 */
export const pluralize = (count: number, singular: string, plural?: string): string => {
  if (count === 1) return singular;
  return plural || `${singular}s`;
};

/**
 * Format duration in days
 */
export const formatDuration = (days: number): string => {
  if (days === 1) return '1 day';
  if (days < 7) return `${days} days`;
  
  const weeks = Math.floor(days / 7);
  const remainingDays = days % 7;
  
  if (remainingDays === 0) {
    return weeks === 1 ? '1 week' : `${weeks} weeks`;
  }
  
  return `${weeks} ${pluralize(weeks, 'week')} ${remainingDays} ${pluralize(remainingDays, 'day')}`;
};

export default {
  formatCurrency,
  formatDate,
  formatPhoneNumber,
  truncateText,
  pluralize,
  formatDuration,
};

