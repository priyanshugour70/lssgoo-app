/**
 * LssGoo Travel App - Home Screen
 * Main home screen with all travel components
 */

import COMPANY_INFO from '@/app/constants/companyInfo';
import { CarouselItem } from '@/types/common';
import { router } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Alert, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { HeroBanner, OffersCarousel, TrendingTrips } from '../components';
import { useHomeData } from '../hooks/useHomeData';
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
  const { featuredTrips, popularTrips, loading } = useHomeData();

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
      <SafeAreaView style={tw`flex-1 bg-white`}>
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" color="#3B82F6" />
          <Text style={tw`mt-4 text-base text-gray-600`}>Loading amazing destinations...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <ScrollView 
        style={tw`flex-1`}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Banner */}
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
        {popularTrips && popularTrips.length > 0 && (
          <View style={tw`mb-6`}>
            <View style={tw`px-4 mb-4`}>
              <Text style={tw`text-2xl font-bold text-gray-900`}>Popular Destinations</Text>
              <Text style={tw`text-sm text-gray-600 mt-1`}>Explore the most loved destinations</Text>
            </View>
            <TrendingTrips
              trips={popularTrips}
              onTripPress={handleTripPress}
              onViewAllPress={handleViewAllPress}
            />
          </View>
        )}

        {/* Featured Trips */}
        {featuredTrips && featuredTrips.length > 0 && (
          <View style={tw`mb-6`}>
            <View style={tw`px-4 mb-4`}>
              <Text style={tw`text-2xl font-bold text-gray-900`}>Featured Trips</Text>
              <Text style={tw`text-sm text-gray-600 mt-1`}>Hand-picked experiences just for you</Text>
            </View>
            <TrendingTrips
              trips={featuredTrips}
              onTripPress={handleTripPress}
              onViewAllPress={handleViewAllPress}
            />
          </View>
        )}

        {/* Footer Space */}
        <View style={tw`h-6`} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
