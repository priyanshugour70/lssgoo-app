/**
 * LssGoo Travel App - Home Feature Types
 * Type definitions specific to the home feature
 */

export interface TripCategory {
  id: string;
  name: string;
  icon: string;
  tripCount: number;
}

export interface Trip {
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
  tags: string[];
  startDate: Date;
  endDate: Date;
  isPopular?: boolean;
  isFeatured?: boolean;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  onExplorePress: () => void;
}

export interface BannerProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  onButtonPress: () => void;
}

export interface ExploreProps {
  destinations: Trip[];
  categories: TripCategory[];
  onDestinationPress?: (destination: Trip) => void;
  onCategoryPress?: (category: TripCategory) => void;
  onViewAllPress?: (type: 'destinations' | 'categories') => void;
}

