/**
 * LssGoo Travel App - TabBar Component
 * Clean, reusable tab bar configuration
 */

import { Compass, Home, MapPin, Search, User } from 'lucide-react-native';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';

// Tab bar configuration function
export const getTabBarOptions = () => ({
  headerShown: false,
  tabBarActiveTintColor: '#3B82F6',
  tabBarInactiveTintColor: '#9CA3AF',
  tabBarButton: HapticTab,
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    borderTopColor: '#E5E7EB',
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingTop: 8,
    height: 80,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '500' as '500',
    marginTop: 4,
  },
});

// Tab icon components
export const TabIcons = {
  home: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Home color={color} size={size} />
  ),
  explore: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Compass color={color} size={size} />
  ),
  search: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Search color={color} size={size} />
  ),
  myTrips: ({ color, size = 24 }: { color: string; size?: number }) => (
    <MapPin color={color} size={size} />
  ),
  profile: ({ color, size = 24 }: { color: string; size?: number }) => (
    <User color={color} size={size} />
  ),
};

