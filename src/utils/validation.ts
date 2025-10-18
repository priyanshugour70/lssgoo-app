/**
 * Validation Utilities
 * Helper functions for validating user input
 */

/**
 * Validate email address
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (Indian format)
 */
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+91)?[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s|-/g, ''));
};

/**
 * Validate password strength
 */
export const validatePassword = (password: string): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/\d/.test(password)) {
    errors.push('Password must contain at least one number');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Validate name
 */
export const validateName = (name: string): boolean => {
  return name.trim().length >= 2;
};

/**
 * Validate date range
 */
export const validateDateRange = (startDate: Date, endDate: Date): boolean => {
  return startDate < endDate;
};

/**
 * Validate number in range
 */
export const validateNumberRange = (
  value: number,
  min: number,
  max: number
): boolean => {
  return value >= min && value <= max;
};

export default {
  validateEmail,
  validatePhoneNumber,
  validatePassword,
  validateName,
  validateDateRange,
  validateNumberRange,
};

