/**
 * LssGoo Travel App - Application Configuration
 * Global app settings and configuration
 */

export const APP_CONFIG = {
  version: '1.0.0',
  buildNumber: 1,
  apiBaseUrl: __DEV__ 
    ? 'http://localhost:3000/api' 
    : 'https://api.lssgoo.com',
  supportedLanguages: ['en', 'hi'],
  defaultLanguage: 'en',
  currency: 'INR',
  supportedCurrencies: ['INR', 'USD', 'EUR'],
  
  // Feature Flags
  features: {
    enableAuth: true,
    enableBookings: true,
    enablePayments: true,
    enableNotifications: true,
    enableAnalytics: true,
  },

  // App Limits
  limits: {
    maxRecentSearches: 10,
    maxFavoriteTrips: 50,
    imageMaxSize: 5 * 1024 * 1024, // 5MB
    requestTimeout: 30000, // 30 seconds
  },

  // Storage Keys
  storageKeys: {
    user: '@lssgoo_user',
    token: '@lssgoo_token',
    theme: '@lssgoo_theme',
    language: '@lssgoo_language',
    recentSearches: '@lssgoo_recent_searches',
    favoriteTrips: '@lssgoo_favorite_trips',
  },
} as const;

export default APP_CONFIG;

