/**
 * LssGoo Travel App - Bookings Hook
 * Custom hook for managing bookings data
 */

import { useState, useEffect } from 'react';
import { bookingApi } from '../api/bookingApi';
import { Booking, BookingStats } from '../types/bookingTypes';

export const useBookings = () => {
  const [upcomingBookings, setUpcomingBookings] = useState<Booking[]>([]);
  const [pastBookings, setPastBookings] = useState<Booking[]>([]);
  const [savedBookings, setSavedBookings] = useState<Booking[]>([]);
  const [stats, setStats] = useState<BookingStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      setError(null);

      const [upcoming, past, saved, bookingStats] = await Promise.all([
        bookingApi.getUpcomingBookings(),
        bookingApi.getPastBookings(),
        bookingApi.getSavedBookings(),
        bookingApi.getBookingStats(),
      ]);

      setUpcomingBookings(upcoming);
      setPastBookings(past);
      setSavedBookings(saved);
      setStats(bookingStats);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch bookings');
      console.error('Error fetching bookings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return {
    upcomingBookings,
    pastBookings,
    savedBookings,
    stats,
    loading,
    error,
    refetch: fetchBookings,
  };
};

export default useBookings;

