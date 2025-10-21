/**
 * LssGoo Travel App - Main Layout
 * Tab navigation with custom blue circle center search, matching Figma design
 */

import { CustomTabBar } from '@/components/layout/CustomTabBar';
import { TabIcons, getTabBarOptions } from '@/components/layout/TabBar';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={getTabBarOptions()}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <TabIcons.home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, size }) => <TabIcons.explore color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => <TabIcons.search color={color} size={size} />,
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="my-trips"
        options={{
          title: 'My Trips',
          tabBarIcon: ({ color, size }) => <TabIcons.myTrips color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <TabIcons.profile color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}

