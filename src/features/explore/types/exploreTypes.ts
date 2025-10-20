/**
 * LssGoo Travel App - Explore Feature Types
 */

export interface SearchFilters {
  destination?: string;
  category?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
}

export interface ExploreTrip {
  id: string;
  title: string;
  description: string;
  destination: string;
  price: number;
  currency: string;
  duration: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  category: string;
}

