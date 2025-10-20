/**
 * LssGoo Travel App - Navigation Data
 * Navigation items for footer, sidebar, and other navigation components
 */

import { NavigationItem } from '../types';

export const FOOTER_NAVIGATION: NavigationItem[] = [
  {
    id: 'home',
    title: 'Home',
    icon: 'home',
    route: '/(tabs)',
  },
  {
    id: 'explore',
    title: 'Explore',
    icon: 'compass',
    route: '/(tabs)/explore',
  },
  {
    id: 'bookings',
    title: 'Bookings',
    icon: 'calendar',
    route: '/(tabs)/bookings',
  },
  {
    id: 'account',
    title: 'Account',
    icon: 'user',
    route: '/(tabs)/account',
  },
];

export const SIDEBAR_NAVIGATION: NavigationItem[] = [
  {
    id: 'latest-trips',
    title: 'Latest Trips',
    icon: 'map-pin',
    route: '/trips/latest',
  },
  {
    id: 'popular-destinations',
    title: 'Popular Destinations',
    icon: 'star',
    route: '/destinations/popular',
  },
  {
    id: 'adventure-tours',
    title: 'Adventure Tours',
    icon: 'mountain',
    route: '/trips/adventure',
  },
  {
    id: 'cultural-tours',
    title: 'Cultural Tours',
    icon: 'building',
    route: '/trips/cultural',
  },
  {
    id: 'beach-holidays',
    title: 'Beach Holidays',
    icon: 'sun',
    route: '/trips/beach',
  },
  {
    id: 'family-packages',
    title: 'Family Packages',
    icon: 'users',
    route: '/trips/family',
  },
  {
    id: 'honeymoon-specials',
    title: 'Honeymoon Specials',
    icon: 'heart',
    route: '/trips/romantic',
  },
  {
    id: 'weekend-getaways',
    title: 'Weekend Getaways',
    icon: 'clock',
    route: '/trips/weekend',
  },
];

export const QUICK_ACTIONS = [
  {
    id: 'search',
    title: 'Search Trips',
    icon: 'search',
    route: '/search',
  },
  {
    id: 'favorites',
    title: 'My Favorites',
    icon: 'heart',
    route: '/favorites',
  },
  {
    id: 'support',
    title: 'Support',
    icon: 'help-circle',
    route: '/support',
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: 'settings',
    route: '/settings',
  },
];