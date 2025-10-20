/**
 * LssGoo Travel App - Home Screen
 * Modern home screen with all travel components based on design
 */

import { router } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import {
  CategoryChips,
  DealsCarousel,
  Header,
  HeroSection,
  PlanTripCTA,
  TestimonialsSlider,
  TopDestinations,
  TravelStories,
} from '../components';
import {
  CATEGORIES,
  Category,
  Deal,
  DEALS,
  Destination,
  DESTINATIONS,
  TESTIMONIALS,
  TRAVEL_STORIES,
  TravelStory,
} from '../data/homeData';

const HERO_BANNERS = [
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
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [loading] = useState(false);

  const handleSearchPress = () => {
    router.push('/main/search');
  };

  const handleDestinationPress = (destination: Destination) => {
    Alert.alert('Destination Details', `Selected: ${destination.title}`);
  };

  const handleBookmark = (destination: Destination) => {
    Alert.alert('Bookmark', `Bookmarked: ${destination.title}`);
  };

  const handleCategoryPress = (category: Category) => {
    setSelectedCategory(category.id);
    Alert.alert('Category', `Selected: ${category.name}`);
  };

  const handleDealPress = (deal: Deal) => {
    Alert.alert('Deal Details', `Selected: ${deal.title}`);
  };

  const handleStoryPress = (story: TravelStory) => {
    Alert.alert('Travel Story', `Selected: ${story.title}`);
  };

  const handlePlanTripPress = () => {
    router.push('/main/explore');
  };

  const handleViewAllDestinations = () => {
    router.push('/main/explore');
  };

  if (loading) {
    return (
      <SafeAreaView style={tw`flex-1 bg-white`}>
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" color="#FF6B35" />
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
        {/* Header */}
        <Header
          onSearchPress={handleSearchPress}
        />

        {/* Hero Section with Search */}
        <HeroSection
          banners={HERO_BANNERS}
        />

        {/* Top Destinations */}
        <TopDestinations
          destinations={DESTINATIONS}
          onDestinationPress={handleDestinationPress}
          onBookmark={handleBookmark}
          onViewAllPress={handleViewAllDestinations}
        />

        {/* Categories */}
        <CategoryChips
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onCategoryPress={handleCategoryPress}
        />

        {/* Deals & Offers */}
        <DealsCarousel
          deals={DEALS}
          onDealPress={handleDealPress}
        />

        {/* Testimonials */}
        <TestimonialsSlider testimonials={TESTIMONIALS} />

        {/* Travel Stories */}
        <TravelStories
          stories={TRAVEL_STORIES}
          onStoryPress={handleStoryPress}
        />

        {/* Plan Trip CTA */}
        <PlanTripCTA onPress={handlePlanTripPress} />

        {/* Footer Space */}
        <View style={tw`h-6`} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
