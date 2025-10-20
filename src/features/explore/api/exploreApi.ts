/**
 * LssGoo Travel App - Explore API
 */

import { ExploreTrip, SearchFilters } from '../types/exploreTypes';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const MOCK_TRIPS: ExploreTrip[] = [
  {
    id: '1',
    title: 'Goa Beach Paradise',
    description: 'Experience beautiful beaches',
    destination: 'Goa, India',
    price: 15000,
    currency: 'INR',
    duration: 4,
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    rating: 4.8,
    reviewCount: 245,
    category: 'relaxation',
  },
  {
    id: '2',
    title: 'Himalayan Trek',
    description: 'Adventure in mountains',
    destination: 'Manali, India',
    price: 25000,
    currency: 'INR',
    duration: 7,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.9,
    reviewCount: 189,
    category: 'adventure',
  },
];

class ExploreApi {
  async searchTrips(filters: SearchFilters): Promise<ExploreTrip[]> {
    await delay(500);
    let filtered = [...MOCK_TRIPS];

    if (filters.destination) {
      filtered = filtered.filter(trip =>
        trip.destination.toLowerCase().includes(filters.destination!.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter(trip => trip.category === filters.category);
    }

    if (filters.rating) {
      filtered = filtered.filter(trip => trip.rating >= filters.rating!);
    }

    return filtered;
  }

  async getAllTrips(): Promise<ExploreTrip[]> {
    await delay(300);
    return MOCK_TRIPS;
  }
}

export const exploreApi = new ExploreApi();
export default exploreApi;

