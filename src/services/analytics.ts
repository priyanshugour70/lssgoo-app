/**
 * LssGoo Travel App - Analytics Service
 * Track user events and analytics
 */

import APP_CONFIG from '@/app/constants/appConfig';

class AnalyticsService {
  private isEnabled: boolean;

  constructor() {
    this.isEnabled = APP_CONFIG.features.enableAnalytics;
  }

  /**
   * Initialize analytics
   */
  async initialize(): Promise<void> {
    if (!this.isEnabled) return;
    
    try {
      // Initialize analytics SDK here (Firebase, Amplitude, etc.)
      console.log('Analytics initialized');
    } catch (error) {
      console.error('Error initializing analytics:', error);
    }
  }

  /**
   * Track screen view
   */
  trackScreen(screenName: string, params?: Record<string, any>): void {
    if (!this.isEnabled) return;

    try {
      console.log('Screen View:', screenName, params);
      // Implement actual analytics tracking here
    } catch (error) {
      console.error('Error tracking screen:', error);
    }
  }

  /**
   * Track event
   */
  trackEvent(eventName: string, params?: Record<string, any>): void {
    if (!this.isEnabled) return;

    try {
      console.log('Event:', eventName, params);
      // Implement actual analytics tracking here
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  }

  /**
   * Track user property
   */
  setUserProperty(propertyName: string, value: string): void {
    if (!this.isEnabled) return;

    try {
      console.log('User Property:', propertyName, value);
      // Implement actual analytics tracking here
    } catch (error) {
      console.error('Error setting user property:', error);
    }
  }

  /**
   * Track error
   */
  trackError(error: Error, context?: Record<string, any>): void {
    if (!this.isEnabled) return;

    try {
      console.error('Error tracked:', error, context);
      // Implement actual error tracking here
    } catch (err) {
      console.error('Error tracking error:', err);
    }
  }

  // Common events
  trackLogin(method: string): void {
    this.trackEvent('login', { method });
  }

  trackSignup(method: string): void {
    this.trackEvent('signup', { method });
  }

  trackSearch(query: string): void {
    this.trackEvent('search', { query });
  }

  trackTripView(tripId: string, tripName: string): void {
    this.trackEvent('trip_view', { tripId, tripName });
  }

  trackBooking(tripId: string, amount: number): void {
    this.trackEvent('booking_initiated', { tripId, amount });
  }

  trackBookingComplete(bookingId: string, amount: number): void {
    this.trackEvent('booking_complete', { bookingId, amount });
  }

  trackShare(contentType: string, contentId: string): void {
    this.trackEvent('share', { contentType, contentId });
  }
}

export const analytics = new AnalyticsService();
export default analytics;

