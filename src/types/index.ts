/**
 * LssGoo Travel App - TypeScript Type Definitions
 * All interfaces and types used throughout the application
 */

// Theme Types
export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  text: string;
  background: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
  border: string;
  card: string;
  notification: string;
}

// Navigation Types
export interface NavigationItem {
  id: string;
  title: string;
  icon: string;
  route: string;
  isActive?: boolean;
}

// Trip Types
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
  category: TripCategory;
  tags: string[];
  startDate: Date;
  endDate: Date;
  isPopular?: boolean;
  isFeatured?: boolean;
}

export type TripCategory = 'adventure' | 'cultural' | 'relaxation' | 'family' | 'romantic' | 'business';

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  preferences: UserPreferences;
  bookings: Booking[];
}

export interface UserPreferences {
  theme: ThemeMode;
  language: string;
  currency: string;
  notifications: NotificationSettings;
}

export interface NotificationSettings {
  push: boolean;
  email: boolean;
  sms: boolean;
  marketing: boolean;
}

// Booking Types
export interface Booking {
  id: string;
  tripId: string;
  userId: string;
  status: BookingStatus;
  totalAmount: number;
  currency: string;
  bookingDate: Date;
  travelDate: Date;
  passengers: Passenger[];
  paymentStatus: PaymentStatus;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface Passenger {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  documentType: 'passport' | 'id' | 'license';
  documentNumber: string;
}

// Component Props Types
export interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  showProfile?: boolean;
  showThemeToggle?: boolean;
  onSearchPress?: () => void;
  onProfilePress?: () => void;
  onThemeToggle?: () => void;
}

export interface FooterProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

export interface SidebarProps {
  isVisible: boolean;
  onClose: () => void;
  trips: Trip[];
}

export interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

export interface CarouselItem {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  action?: () => void;
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
  categories: TripCategoryInfo[];
  onDestinationPress?: (destination: Trip) => void;
  onCategoryPress?: (category: TripCategoryInfo) => void;
  onViewAllPress?: (type: 'destinations' | 'categories') => void;
}

export interface TripCategoryInfo {
  id: string;
  name: string;
  icon: string;
  tripCount: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// Search Types
export interface SearchFilters {
  destination?: string;
  category?: TripCategory;
  priceRange?: {
    min: number;
    max: number;
  };
  duration?: {
    min: number;
    max: number;
  };
  rating?: number;
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export interface SearchResult {
  trips: Trip[];
  totalCount: number;
  filters: SearchFilters;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// Storage Types
export interface StorageData {
  user?: User;
  theme: ThemeMode;
  language: string;
  recentSearches: string[];
  favoriteTrips: string[];
}