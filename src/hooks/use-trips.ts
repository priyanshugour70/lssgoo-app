/**
 * LssGoo Travel App - Trip Hooks
 * Custom hooks for trip data management
 */

import { useState, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Trip, SearchFilters } from '../types';
import { tripService } from '../services/trip-service';

const STORAGE_KEYS = {
  FAVORITE_TRIPS: 'favorite_trips',
  RECENT_SEARCHES: 'recent_searches',
};

export const useTrips = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTrips = async (page: number = 1, pageSize: number = 10) => {
    try {
      setLoading(true);
      setError(null);
      const response = await tripService.getAllTrips(page, pageSize);
      setTrips(response.items);
    } catch (err) {
      setError('Failed to fetch trips');
      console.error('Error fetching trips:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return {
    trips,
    loading,
    error,
    refetch: fetchTrips,
  };
};

export const useFeaturedTrips = () => {
  const [featuredTrips, setFeaturedTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFeaturedTrips = async () => {
    try {
      setLoading(true);
      setError(null);
      const trips = await tripService.getFeaturedTrips();
      setFeaturedTrips(trips);
    } catch (err) {
      setError('Failed to fetch featured trips');
      console.error('Error fetching featured trips:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeaturedTrips();
  }, []);

  return {
    featuredTrips,
    loading,
    error,
    refetch: fetchFeaturedTrips,
  };
};

export const usePopularTrips = () => {
  const [popularTrips, setPopularTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPopularTrips = async () => {
    try {
      setLoading(true);
      setError(null);
      const trips = await tripService.getPopularTrips();
      setPopularTrips(trips);
    } catch (err) {
      setError('Failed to fetch popular trips');
      console.error('Error fetching popular trips:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopularTrips();
  }, []);

  return {
    popularTrips,
    loading,
    error,
    refetch: fetchPopularTrips,
  };
};

export const useTripSearch = () => {
  const [searchResults, setSearchResults] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchTrips = async (filters: SearchFilters) => {
    try {
      setLoading(true);
      setError(null);
      const results = await tripService.searchTrips(filters);
      setSearchResults(results);
      
      // Save search to recent searches
      await saveRecentSearch(filters.destination || '');
    } catch (err) {
      setError('Failed to search trips');
      console.error('Error searching trips:', err);
    } finally {
      setLoading(false);
    }
  };

  const saveRecentSearch = async (searchTerm: string) => {
    try {
      const existingSearches = await SecureStore.getItemAsync(STORAGE_KEYS.RECENT_SEARCHES);
      const searches = existingSearches ? JSON.parse(existingSearches) : [];
      
      // Add new search to the beginning and limit to 10
      const updatedSearches = [searchTerm, ...searches.filter((s: string) => s !== searchTerm)].slice(0, 10);
      
      await SecureStore.setItemAsync(STORAGE_KEYS.RECENT_SEARCHES, JSON.stringify(updatedSearches));
    } catch (err) {
      console.error('Error saving recent search:', err);
    }
  };

  return {
    searchResults,
    loading,
    error,
    searchTrips,
  };
};

export const useFavoriteTrips = () => {
  const [favoriteTrips, setFavoriteTrips] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const loadFavorites = async () => {
    try {
      setLoading(true);
      const favorites = await SecureStore.getItemAsync(STORAGE_KEYS.FAVORITE_TRIPS);
      setFavoriteTrips(favorites ? JSON.parse(favorites) : []);
    } catch (err) {
      console.error('Error loading favorites:', err);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = async (tripId: string) => {
    try {
      const updatedFavorites = [...favoriteTrips, tripId];
      setFavoriteTrips(updatedFavorites);
      await SecureStore.setItemAsync(STORAGE_KEYS.FAVORITE_TRIPS, JSON.stringify(updatedFavorites));
    } catch (err) {
      console.error('Error adding to favorites:', err);
    }
  };

  const removeFromFavorites = async (tripId: string) => {
    try {
      const updatedFavorites = favoriteTrips.filter(id => id !== tripId);
      setFavoriteTrips(updatedFavorites);
      await SecureStore.setItemAsync(STORAGE_KEYS.FAVORITE_TRIPS, JSON.stringify(updatedFavorites));
    } catch (err) {
      console.error('Error removing from favorites:', err);
    }
  };

  const isFavorite = (tripId: string) => favoriteTrips.includes(tripId);

  useEffect(() => {
    loadFavorites();
  }, []);

  return {
    favoriteTrips,
    loading,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
};