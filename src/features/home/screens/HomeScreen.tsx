/**
 * LssGoo Travel App - Home Screen
 * Main home screen with all travel components
 */

import React from 'react';
import { ScrollView, Alert, View, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

// Components
import { HeroBanner, TrendingTrips, OffersCarousel } from '../components';

// Hooks
import { useHomeData } from '../hooks/useHomeData';

// Constants
import { Colors } from '@/app/constants/theme';
import COMPANY_INFO from '@/app/constants/companyInfo';

// Types
import { CarouselItem } from '@/types/common';
import { Trip } from '../types/homeTypes';

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    id: '1',
    title: 'Summer Special',
    subtitle: 'Up to 30% off on beach destinations',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
  },
  {
    id: '2',
    title: 'Adventure Awaits',
    subtitle: 'Discover thrilling mountain expeditions',
    imageUrl: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=800',
  },
  {
    id: '3',
    title: 'Cultural Heritage',
    subtitle: "Explore India's rich cultural heritage",
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
  },
];

export const HomeScreen = () => {
  const { featuredTrips, popularTrips, loading, error } = useHomeData();

  const handleExplorePress = () => {
    router.push('/(tabs)/explore');
  };

  const handleTripPress = (trip: Trip) => {
    Alert.alert('Trip Details', `Selected: ${trip.title}`);
  };

  const handleViewAllPress = () => {
    router.push('/(tabs)/explore');
  };

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <HeroBanner
          title="Discover Amazing Places"
          subtitle={`Explore the world with ${COMPANY_INFO.displayName} and create unforgettable memories`}
          backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"
          onExplorePress={handleExplorePress}
        />

        {/* Featured Carousel */}
        <OffersCarousel
          items={CAROUSEL_ITEMS}
          autoPlay={true}
          interval={4000}
        />

        {/* Popular Trips */}
        <TrendingTrips
          trips={popularTrips}
          onTripPress={handleTripPress}
          onViewAllPress={handleViewAllPress}
        />

        {/* Featured Trips */}
        <TrendingTrips
          trips={featuredTrips}
          onTripPress={handleTripPress}
          onViewAllPress={handleViewAllPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

