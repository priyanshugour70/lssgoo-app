/**
 * LssGoo Travel App - Booking API
 * API calls specific to the bookings feature
 */

import { Booking, BookingStats } from '../types/bookingTypes';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock data
const MOCK_BOOKINGS = {
  upcoming: [
    {
      id: '1',
      title: 'Bali Adventure',
      destination: 'Bali, Indonesia',
      date: 'Dec 15-22, 2024',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400',
      status: 'Confirmed' as const,
    },
    {
      id: '2',
      title: 'Tokyo Explorer',
      destination: 'Tokyo, Japan',
      date: 'Jan 10-17, 2025',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400',
      status: 'Pending' as const,
    },
  ],
  past: [
    {
      id: '3',
      title: 'Paris Romance',
      destination: 'Paris, France',
      date: 'Oct 5-12, 2024',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400',
      rating: 5,
      status: 'Completed' as const,
    },
  ],
  saved: [
    {
      id: '4',
      title: 'Swiss Alps',
      destination: 'Switzerland',
      price: '$2,499',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      status: 'Pending' as const,
    },
    {
      id: '5',
      title: 'Maldives Paradise',
      destination: 'Maldives',
      price: '$3,299',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      status: 'Pending' as const,
    },
  ],
};

class BookingApi {
  async getUpcomingBookings(): Promise<Booking[]> {
    await delay(300);
    return MOCK_BOOKINGS.upcoming;
  }

  async getPastBookings(): Promise<Booking[]> {
    await delay(300);
    return MOCK_BOOKINGS.past;
  }

  async getSavedBookings(): Promise<Booking[]> {
    await delay(300);
    return MOCK_BOOKINGS.saved;
  }

  async getBookingStats(): Promise<BookingStats> {
    await delay(200);
    return {
      tripsCompleted: 12,
      countriesVisited: 8,
      reviewsGiven: 24,
    };
  }
}

export const bookingApi = new BookingApi();
export default bookingApi;

