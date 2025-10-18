/**
 * Central Type Definitions for LssGoo App
 */

// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  profileImage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Tour & Destination Types
export interface Destination {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  duration: string;
  bestTime: string;
  highlights: string[];
  experiences: string[];
  image: any;
  type: 'domestic' | 'international';
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface TourPackage {
  id: string;
  destinationId: string;
  name: string;
  description: string;
  duration: number; // in days
  price: number;
  currency: string;
  category: 'budget' | 'mid-range' | 'luxury';
  inclusions: string[];
  exclusions?: string[];
  itinerary: DayItinerary[];
  images: string[];
  rating?: number;
  reviewCount?: number;
  availableDates: Date[];
  maxGroupSize?: number;
  minGroupSize?: number;
}

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities: string[];
  meals?: ('breakfast' | 'lunch' | 'dinner')[];
  accommodation?: string;
}

// Booking Types
export interface Booking {
  id: string;
  userId: string;
  packageId: string;
  package: TourPackage;
  startDate: Date;
  endDate: Date;
  travelers: Traveler[];
  totalPrice: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type BookingStatus = 
  | 'pending'
  | 'confirmed'
  | 'in-progress'
  | 'completed'
  | 'cancelled';

export type PaymentStatus = 
  | 'pending'
  | 'partial'
  | 'paid'
  | 'refunded';

export interface Traveler {
  name: string;
  age: number;
  gender?: 'male' | 'female' | 'other';
  passportNumber?: string;
  nationality?: string;
  specialRequirements?: string;
}

// Review Types
export interface Review {
  id: string;
  userId: string;
  user: User;
  packageId: string;
  rating: number;
  title: string;
  comment: string;
  images?: string[];
  helpful: number;
  createdAt: Date;
  updatedAt: Date;
}

// Service Types
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

// Contact & Support Types
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'in-progress' | 'resolved';
  createdAt: Date;
}

export interface SupportTicket {
  id: string;
  userId: string;
  bookingId?: string;
  subject: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  messages: TicketMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TicketMessage {
  id: string;
  ticketId: string;
  userId: string;
  message: string;
  attachments?: string[];
  createdAt: Date;
}

// Navigation Types
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Profile: undefined;
  Destinations: { type?: 'domestic' | 'international' };
  DestinationDetail: { destinationId: string };
  PackageDetail: { packageId: string };
  Booking: { packageId: string };
  BookingConfirmation: { bookingId: string };
  MyBookings: undefined;
  BookingDetail: { bookingId: string };
  Search: { query?: string };
  Favorites: undefined;
  Settings: undefined;
  Support: undefined;
  ContactUs: undefined;
  AboutUs: undefined;
  TermsOfService: undefined;
  PrivacyPolicy: undefined;
};

export type BottomTabParamList = {
  HomeTab: undefined;
  ExploreTab: undefined;
  BookingsTab: undefined;
  ProfileTab: undefined;
};

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

// Filter & Search Types
export interface SearchFilters {
  query?: string;
  destination?: string;
  duration?: {
    min?: number;
    max?: number;
  };
  price?: {
    min?: number;
    max?: number;
  };
  category?: ('budget' | 'mid-range' | 'luxury')[];
  type?: ('domestic' | 'international')[];
  startDate?: Date;
  endDate?: Date;
  sortBy?: 'price' | 'rating' | 'duration' | 'popularity';
  sortOrder?: 'asc' | 'desc';
}

// App State Types
export interface AppState {
  theme: 'light' | 'dark' | 'auto';
  language: 'en' | 'hi';
  currency: 'INR' | 'USD' | 'EUR';
  notifications: {
    push: boolean;
    email: boolean;
    sms: boolean;
  };
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

export default {};

