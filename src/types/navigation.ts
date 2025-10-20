/**
 * LssGoo Travel App - Navigation Types
 * Type definitions for navigation throughout the application
 */

import { NavigatorScreenParams } from '@react-navigation/native';

// Root Stack Navigator
export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Modal: undefined;
  TripDetail: { tripId: string };
  Booking: { tripId: string };
  BookingConfirmation: { bookingId: string };
};

// Main Tab Navigator
export type MainTabParamList = {
  HomeTab: undefined;
  ExploreTab: undefined;
  BookingsTab: undefined;
  ProfileTab: undefined;
};

// Auth Stack Navigator
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

// Navigation Props Types
export interface NavigationItem {
  id: string;
  title: string;
  icon: string;
  route: string;
  isActive?: boolean;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

