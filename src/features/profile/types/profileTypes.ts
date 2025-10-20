/**
 * LssGoo Travel App - Profile Feature Types
 */

export interface ProfileData {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  reviewCount: number;
  stats: ProfileStats;
}

export interface ProfileStats {
  tripsCompleted: string;
  countriesVisited: string;
  reviewsGiven: string;
}

export interface MenuItem {
  icon: any; // Lucide icon component
  title: string;
  subtitle: string;
}

