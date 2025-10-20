/**
 * LssGoo Travel App - Route Constants
 * Centralized route definitions for navigation
 */

export const ROUTES = {
  // Root Routes
  MAIN: 'Main',
  AUTH: 'Auth',
  MODAL: 'Modal',

  // Main Tab Routes
  HOME: 'HomeTab',
  EXPLORE: 'ExploreTab',
  BOOKINGS: 'BookingsTab',
  PROFILE: 'ProfileTab',

  // Auth Routes
  LOGIN: 'Login',
  SIGNUP: 'Signup',
  FORGOT_PASSWORD: 'ForgotPassword',

  // Detail Routes
  TRIP_DETAIL: 'TripDetail',
  BOOKING: 'Booking',
  BOOKING_CONFIRMATION: 'BookingConfirmation',
} as const;

export default ROUTES;

