/**
 * LssGoo Travel App - Home Data
 * Mock data for home page components
 */

export interface Destination {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  rating: number;
  price: number;
  currency: string;
  usersCount: number;
  isBookmarked: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface Deal {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  imageUrl: string;
  validUntil: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface TravelStory {
  id: string;
  title: string;
  author: string;
  readTime: string;
  imageUrl: string;
  category: string;
}

// Mock data
export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    title: 'Khai island beach',
    location: 'Thailand',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    rating: 4.9,
    price: 25000,
    currency: '₹',
    usersCount: 50,
    isBookmarked: true,
  },
  {
    id: '2',
    title: 'Hisma',
    location: 'Saudi Arabia',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    rating: 4.7,
    price: 18000,
    currency: '₹',
    usersCount: 32,
    isBookmarked: false,
  },
  {
    id: '3',
    title: 'Bali Paradise',
    location: 'Indonesia',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    rating: 4.8,
    price: 35000,
    currency: '₹',
    usersCount: 128,
    isBookmarked: true,
  },
  {
    id: '4',
    title: 'Swiss Alps',
    location: 'Switzerland',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    rating: 4.9,
    price: 85000,
    currency: '₹',
    usersCount: 89,
    isBookmarked: false,
  },
];

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Beach', icon: '🏖️', color: '#3B82F6' },
  { id: '2', name: 'Adventure', icon: '🏔️', color: '#10B981' },
  { id: '3', name: 'Culture', icon: '🏛️', color: '#F59E0B' },
  { id: '4', name: 'Nature', icon: '🌿', color: '#8B5CF6' },
  { id: '5', name: 'City', icon: '🏙️', color: '#EF4444' },
  { id: '6', name: 'Wellness', icon: '🧘', color: '#06B6D4' },
];

export const DEALS: Deal[] = [
  {
    id: '1',
    title: 'Summer Special',
    subtitle: 'Up to 30% off on beach destinations',
    discount: '30% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    validUntil: '2024-08-31',
  },
  {
    id: '2',
    title: 'Adventure Awaits',
    subtitle: 'Discover thrilling mountain expeditions',
    discount: '25% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=400',
    validUntil: '2024-09-15',
  },
  {
    id: '3',
    title: 'Cultural Heritage',
    subtitle: "Explore India's rich cultural heritage",
    discount: '20% OFF',
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400',
    validUntil: '2024-10-30',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'New York',
    rating: 5,
    comment: 'Amazing experience! The trip was perfectly planned and the destinations were breathtaking.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100',
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'San Francisco',
    rating: 5,
    comment: 'Best travel app I\'ve ever used. The recommendations were spot on!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    location: 'London',
    rating: 4,
    comment: 'Great service and excellent customer support. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
];

export const TRAVEL_STORIES: TravelStory[] = [
  {
    id: '1',
    title: 'Hidden Gems of Southeast Asia',
    author: 'Travel Explorer',
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300',
    category: 'Adventure',
  },
  {
    id: '2',
    title: 'A Culinary Journey Through Italy',
    author: 'Food Blogger',
    readTime: '7 min read',
    imageUrl: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=300',
    category: 'Culture',
  },
  {
    id: '3',
    title: 'Solo Travel: Finding Yourself',
    author: 'Wanderlust',
    readTime: '4 min read',
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=300',
    category: 'Wellness',
  },
];
