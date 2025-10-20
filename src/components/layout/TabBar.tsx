/**
 * LssGoo Travel App - TabBar Component
 * Clean, reusable tab bar configuration with proper icons
 */

import { Ionicons } from '@expo/vector-icons';
import React from 'react';

// Tab bar configuration function
export const getTabBarOptions = () => ({
  headerShown: false,
  tabBarActiveTintColor: '#FF6B35', // Orange theme color
  tabBarInactiveTintColor: '#9CA3AF',
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    borderTopColor: '#E5E7EB',
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingTop: 8,
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '600' as '600',
    marginTop: 4,
  },
});

// Tab icon components with proper styling
export const TabIcons = {
  home: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Ionicons name="home" color={color} size={size} />
  ),
  explore: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Ionicons name="compass" color={color} size={size} />
  ),
  search: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Ionicons name="search" color={color} size={size} />
  ),
  myTrips: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Ionicons name="calendar" color={color} size={size} />
  ),
  profile: ({ color, size = 24 }: { color: string; size?: number }) => (
    <Ionicons name="person" color={color} size={size} />
  ),
};

