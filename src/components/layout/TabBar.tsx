/**
 * LssGoo Travel App - TabBar Component
 * Custom tab bar matching Figma design with blue circle center FAB
 */

import { Ionicons } from '@expo/vector-icons';
import React from 'react';

// Tab bar configuration function
export const getTabBarOptions = () => ({
  headerShown: false,
  tabBarActiveTintColor: '#3B82F6', // Blue color for active tabs
  tabBarInactiveTintColor: '#D1D5DB', // Light gray for inactive
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    borderTopColor: '#E5E7EB',
    borderTopWidth: 1,
    paddingBottom: 12,
    paddingTop: 12,
    height: 90,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 5,
  },
  tabBarLabelStyle: {
    fontSize: 11,
    fontWeight: '500' as '500',
    marginTop: 6,
    letterSpacing: 0.3,
  },
  tabBarItemStyle: {
    paddingVertical: 8,
  },
});

// Tab icon components with proper styling
export const TabIcons = {
  home: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Ionicons name="home-outline" color={color} size={size} strokeWidth={2} />
  ),
  explore: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Ionicons name="compass-outline" color={color} size={size} strokeWidth={2} />
  ),
  search: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Ionicons name="search" color={color} size={size + 2} strokeWidth={2} />
  ),
  myTrips: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Ionicons name="map-outline" color={color} size={size} strokeWidth={2} />
  ),
  profile: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Ionicons name="person-outline" color={color} size={size} strokeWidth={2} />
  ),
};

