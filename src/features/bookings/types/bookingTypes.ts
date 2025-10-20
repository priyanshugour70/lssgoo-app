/**
 * LssGoo Travel App - Booking Feature Types
 * Type definitions specific to the bookings feature
 */

export type BookingStatus = 'Confirmed' | 'Pending' | 'Cancelled' | 'Completed';

export interface Booking {
  id: string;
  title: string;
  destination: string;
  date: string;
  image: string;
  status: BookingStatus;
  rating?: number;
  price?: string;
}

export interface BookingStats {
  tripsCompleted: number;
  countriesVisited: number;
  reviewsGiven: number;
}

