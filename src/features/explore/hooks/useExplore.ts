/**
 * LssGoo Travel App - Explore Hook
 */

import { useState, useEffect } from 'react';
import { exploreApi } from '../api/exploreApi';
import { ExploreTrip } from '../types/exploreTypes';

export const useExplore = () => {
  const [trips, setTrips] = useState<ExploreTrip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTrips = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await exploreApi.getAllTrips();
      setTrips(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch trips');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return { trips, loading, error, refetch: fetchTrips };
};

export default useExplore;

