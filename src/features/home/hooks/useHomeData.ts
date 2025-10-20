/**
 * LssGoo Travel App - Home Data Hook
 * Custom hook for fetching home screen data
 */

import { useState, useEffect } from 'react';
import { homeApi } from '../api/homeApi';
import { Trip } from '../types/homeTypes';

export const useHomeData = () => {
  const [featuredTrips, setFeaturedTrips] = useState<Trip[]>([]);
  const [popularTrips, setPopularTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [featured, popular] = await Promise.all([
        homeApi.getFeaturedTrips(),
        homeApi.getPopularTrips(),
      ]);

      setFeaturedTrips(featured);
      setPopularTrips(popular);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch home data');
      console.error('Error fetching home data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    featuredTrips,
    popularTrips,
    loading,
    error,
    refetch: fetchData,
  };
};

export default useHomeData;

