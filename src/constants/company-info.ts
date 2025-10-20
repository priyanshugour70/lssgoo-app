/**
 * LssGoo Tours & Travels - Company Information
 * All company details, contact information, and business constants
 */

export const COMPANY_INFO = {
  name: 'Lss Goo',
  displayName: 'LssGoo',
  tagline: "Let's Go Explore",
  foundedYear: 2020,
  description: 'A premier travel agency specializing in creating unforgettable travel experiences across India and international destinations.',
  
  // Contact Information
  contact: {
    website: 'https://lssgoo.com',
    email: 'info@lssgoo.com',
    primaryPhone: '+91-9098393937',
    secondaryPhone: '+91-9993112018',
    emergencyContact: '+91-9993112018',
    address: {
      line1: 'Grand Vitara',
      line2: 'Sector 46',
      city: 'Gurugram',
      state: 'Haryana',
      postalCode: '122003',
      country: 'India',
    },
    officeHours: 'Monday to Saturday, 9:00 AM - 7:00 PM',
  },

  // Business Details
  business: {
    currency: 'INR',
    currencySymbol: '₹',
    serviceArea: 'India with international destinations',
    registrationNumber: '', // Add if available
    gstNumber: '', // Add if available
  },

  // Social Media
  socialMedia: {
    facebook: 'https://www.facebook.com/lssgoo',
    instagram: 'https://www.instagram.com/lssgoo',
    twitter: 'https://twitter.com/lssgoo',
    linkedin: 'https://www.linkedin.com/company/lss-goo',
    youtube: 'https://www.youtube.com/c/lssgoo',
  },

  // Legal
  legal: {
    privacyPolicyUrl: 'https://lssgoo.com/privacy-policy',
    termsOfServiceUrl: 'https://lssgoo.com/terms-of-service',
    cancellationPolicyUrl: 'https://lssgoo.com/cancellation-policy',
  },
} as const;

export const APP_CONFIG = {
  version: '1.0.0',
  buildNumber: 1,
  apiBaseUrl: 'https://api.lssgoo.com',
  supportedLanguages: ['en', 'hi'],
  defaultLanguage: 'en',
  currency: 'INR',
  supportedCurrencies: ['INR', 'USD', 'EUR'],
} as const;

export default COMPANY_INFO;
