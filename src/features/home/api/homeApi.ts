/**
 * LssGoo Travel App - Home API
 * API calls specific to the home feature
 */

import { apiClient } from '@/services/apiClient';
import { PaginatedResponse } from '@/types/api';
import { Trip } from '../types/homeTypes';

// Mock data
const SAMPLE_TRIPS: Trip[] = [
  {
    id: '1',
    title: 'Goa Beach Paradise',
    description: 'Experience the beautiful beaches of Goa with crystal clear waters and golden sand.',
    destination: 'Goa, India',
    price: 15000,
    currency: 'INR',
    duration: 4,
    imageUrl: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
    rating: 4.8,
    reviewCount: 245,
    category: 'relaxation',
    tags: ['beach', 'relaxation', 'nightlife'],
    startDate: new Date('2024-03-15'),
    endDate: new Date('2024-03-19'),
    isPopular: true,
    isFeatured: true,
  },
  {
    id: '2',
    title: 'Himalayan Adventure Trek',
    description: 'Embark on an exciting trek through the majestic Himalayas.',
    destination: 'Manali, Himachal Pradesh',
    price: 25000,
    currency: 'INR',
    duration: 7,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.9,
    reviewCount: 189,
    category: 'adventure',
    tags: ['trekking', 'mountains', 'adventure'],
    startDate: new Date('2024-04-01'),
    endDate: new Date('2024-04-08'),
    isPopular: true,
    isFeatured: false,
  },
  {
    id: '3',
    title: 'Rajasthan Cultural Tour',
    description: 'Discover the rich culture and heritage of Rajasthan.',
    destination: 'Jaipur, Rajasthan',
    price: 20000,
    currency: 'INR',
    duration: 5,
    imageUrl: 'https://images.unsplash.com/photo-1599661046827-dacde6976549?w=800',
    rating: 4.7,
    reviewCount: 156,
    category: 'cultural',
    tags: ['culture', 'heritage', 'palaces'],
    startDate: new Date('2024-03-20'),
    endDate: new Date('2024-03-25'),
    isFeatured: true,
    isPopular: false,
  },
  {
    id: '4',
    title: 'Kerala Backwaters',
    description: 'Cruise through the serene backwaters of Kerala.',
    destination: 'Alleppey, Kerala',
    price: 18000,
    currency: 'INR',
    duration: 3,
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800',
    rating: 4.6,
    reviewCount: 203,
    category: 'relaxation',
    tags: ['backwaters', 'houseboat', 'nature'],
    startDate: new Date('2024-04-10'),
    endDate: new Date('2024-04-13'),
    isPopular: false,
    isFeatured: false,
  },
  {
    id: '5',
    title: 'Ladakh Road Trip',
    description: 'An epic road trip through the stunning landscapes of Ladakh.',
    destination: 'Leh, Ladakh',
    price: 35000,
    currency: 'INR',
    duration: 10,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    rating: 4.9,
    reviewCount: 98,
    category: 'adventure',
    tags: ['road trip', 'mountains', 'photography'],
    startDate: new Date('2024-05-01'),
    endDate: new Date('2024-05-11'),
    isPopular: true,
    isFeatured: false,
  },
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

class HomeApi {
  /**
   * Get featured trips
   */
  async getFeaturedTrips(): Promise<Trip[]> {
    await delay(300);
    // TODO: Replace with actual API call
    // return apiClient.get<Trip[]>('/trips/featured');
    return SAMPLE_TRIPS.filter(trip => trip.isFeatured);
  }

  /**
   * Get popular trips
   */
  async getPopularTrips(): Promise<Trip[]> {
    await delay(300);
    // TODO: Replace with actual API call
    // return apiClient.get<Trip[]>('/trips/popular');
    return SAMPLE_TRIPS.filter(trip => trip.isPopular);
  }

  /**
   * Get all trips with pagination
   */
  async getAllTrips(page: number = 1, pageSize: number = 10): Promise<PaginatedResponse<Trip>> {
    await delay(500);
    // TODO: Replace with actual API call
    // return apiClient.get<PaginatedResponse<Trip>>('/trips', { page, pageSize });

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedTrips = SAMPLE_TRIPS.slice(startIndex, endIndex);

    return {
      items: paginatedTrips,
      totalCount: SAMPLE_TRIPS.length,
      page,
      pageSize,
      hasNextPage: endIndex < SAMPLE_TRIPS.length,
      hasPreviousPage: page > 1,
    };
  }
}

export const homeApi = new HomeApi();
export default homeApi;

