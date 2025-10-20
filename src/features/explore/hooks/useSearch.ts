/**
 * LssGoo Travel App - Search Hook
 */

import { useState } from 'react';
import { exploreApi } from '../api/exploreApi';
import { ExploreTrip, SearchFilters } from '../types/exploreTypes';
import { storage } from '@/services/storage';

export const useSearch = () => {
  const [results, setResults] = useState<ExploreTrip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const search = async (filters: SearchFilters) => {
    try {
      setLoading(true);
      setError(null);
      const data = await exploreApi.searchTrips(filters);
      setResults(data);

      if (filters.destination) {
        await saveRecentSearch(filters.destination);
      }
    } catch (err: any) {
      setError(err.message || 'Search failed');
    } finally {
      setLoading(false);
    }
  };

  const saveRecentSearch = async (searchTerm: string) => {
    const searches = await storage.getRecentSearches();
    const updated = [searchTerm, ...searches.filter(s => s !== searchTerm)].slice(0, 10);
    await storage.saveRecentSearches(updated);
    setRecentSearches(updated);
  };

  const loadRecentSearches = async () => {
    const searches = await storage.getRecentSearches();
    setRecentSearches(searches);
  };

  return { results, loading, error, recentSearches, search, loadRecentSearches };
};

export default useSearch;

