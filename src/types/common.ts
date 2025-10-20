/**
 * LssGoo Travel App - Common Types
 * Shared type definitions used across the application
 */

// Theme Types
export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  text: string;
  textSecondary: string;
  textMuted: string;
  background: string;
  backgroundSecondary: string;
  tint: string;
  icon: string;
  iconActive: string;
  tabIconDefault: string;
  tabIconSelected: string;
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
  surfaceSecondary: string;
  border: string;
  borderLight: string;
  card: string;
  cardShadow: string;
  notification: string;
  success: string;
  warning: string;
  error: string;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  phone?: string;
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
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

// Component Props Types
export interface HeaderProps {
  title?: string;
  showSearch?: boolean;
  showProfile?: boolean;
  onSearchPress?: () => void;
  onProfilePress?: () => void;
  onMenuPress?: () => void;
  user?: User | null;
}

export interface FooterProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
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

