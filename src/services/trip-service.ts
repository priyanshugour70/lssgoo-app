/**
 * LssGoo Travel App - Trip Service
 * Service layer for trip-related operations
 */

import { Trip, SearchFilters, PaginatedResponse, ApiResponse } from '../types';
import { SAMPLE_TRIPS } from '../data/trips';

class TripService {
  private trips: Trip[] = SAMPLE_TRIPS;

  /**
   * Get all trips with optional pagination
   */
  async getAllTrips(page: number = 1, pageSize: number = 10): Promise<PaginatedResponse<Trip>> {
    // Simulate API delay
    await this.delay(500);

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedTrips = this.trips.slice(startIndex, endIndex);

    return {
      items: paginatedTrips,
      totalCount: this.trips.length,
      page,
      pageSize,
      hasNextPage: endIndex < this.trips.length,
      hasPreviousPage: page > 1,
    };
  }

  /**
   * Get featured trips
   */
  async getFeaturedTrips(): Promise<Trip[]> {
    await this.delay(300);
    return this.trips.filter(trip => trip.isFeatured);
  }

  /**
   * Get popular trips
   */
  async getPopularTrips(): Promise<Trip[]> {
    await this.delay(300);
    return this.trips.filter(trip => trip.isPopular);
  }

  /**
   * Get trip by ID
   */
  async getTripById(id: string): Promise<Trip | null> {
    await this.delay(200);
    return this.trips.find(trip => trip.id === id) || null;
  }

  /**
   * Search trips with filters
   */
  async searchTrips(filters: SearchFilters): Promise<Trip[]> {
    await this.delay(400);

    let filteredTrips = [...this.trips];

    if (filters.destination) {
      filteredTrips = filteredTrips.filter(trip =>
        trip.destination.toLowerCase().includes(filters.destination!.toLowerCase())
      );
    }

    if (filters.category) {
      filteredTrips = filteredTrips.filter(trip => trip.category === filters.category);
    }

    if (filters.priceRange) {
      filteredTrips = filteredTrips.filter(trip =>
        trip.price >= filters.priceRange!.min && trip.price <= filters.priceRange!.max
      );
    }

    if (filters.duration) {
      filteredTrips = filteredTrips.filter(trip =>
        trip.duration >= filters.duration!.min && trip.duration <= filters.duration!.max
      );
    }

    if (filters.rating) {
      filteredTrips = filteredTrips.filter(trip => trip.rating >= filters.rating!);
    }

    return filteredTrips;
  }

  /**
   * Get trips by category
   */
  async getTripsByCategory(category: string): Promise<Trip[]> {
    await this.delay(300);
    return this.trips.filter(trip => trip.category === category);
  }

  /**
   * Get latest trips
   */
  async getLatestTrips(limit: number = 5): Promise<Trip[]> {
    await this.delay(300);
    return this.trips
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
      .slice(0, limit);
  }

  /**
   * Simulate API delay
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const tripService = new TripService();