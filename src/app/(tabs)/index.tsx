/**
 * LssGoo Travel App - Home Screen
 * Main home screen with all travel components
 */

import React from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

// Components
import { Header } from '../../components/layout';
import { Carousel, Hero, Explore, Banner } from '../../components/home';

// Hooks and Data
import { useFeaturedTrips, usePopularTrips } from '../../hooks/use-trips';
import { FEATURED_CAROUSEL_ITEMS, TRIP_CATEGORIES } from '../../data/trips';
import { COMPANY_INFO } from '../../constants/company-info';

// Theme
import { Colors } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  // Fetch data using our custom hooks
  const { featuredTrips, loading: featuredLoading } = useFeaturedTrips();
  const { popularTrips, loading: popularLoading } = usePopularTrips();

  // Event handlers
  const handleSearchPress = () => {
    Alert.alert('Search', 'Search functionality coming soon!');
  };

  const handleProfilePress = () => {
    Alert.alert('Profile', 'Profile page coming soon!');
  };

  const handleThemeToggle = () => {
    Alert.alert('Theme', 'Theme toggle functionality coming soon!');
  };

  const handleExplorePress = () => {
    router.push('/explore');
  };

  const handleDestinationPress = (destination: any) => {
    Alert.alert('Destination', `Selected: ${destination.title}`);
  };

  const handleCategoryPress = (category: any) => {
    Alert.alert('Category', `Selected: ${category.name}`);
  };

  const handleViewAllPress = (type: 'destinations' | 'categories') => {
    Alert.alert('View All', `View all ${type} coming soon!`);
  };

  const handleBannerPress = () => {
    Alert.alert('Special Offer', 'Book now and save up to 40%!');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    scrollView: {
      flex: 1,
    },
    content: {
      paddingBottom: 20,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={COMPANY_INFO.name}
        showSearch={true}
        showProfile={true}
        showThemeToggle={true}
        onSearchPress={handleSearchPress}
        onProfilePress={handleProfilePress}
        onThemeToggle={handleThemeToggle}
      />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <Hero
          title="Discover Amazing Places"
          subtitle="Explore the world with LssGoo and create unforgettable memories"
          backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"
          onExplorePress={handleExplorePress}
        />

        {/* Featured Carousel */}
        <Carousel
          items={FEATURED_CAROUSEL_ITEMS}
          autoPlay={true}
          interval={4000}
        />

        {/* Explore Section */}
        <Explore
          destinations={popularTrips || []}
          categories={TRIP_CATEGORIES}
          onDestinationPress={handleDestinationPress}
          onCategoryPress={handleCategoryPress}
          onViewAllPress={handleViewAllPress}
        />

        {/* Promotional Banner */}
        <Banner
          title="Summer Special Offer"
          description="Book your dream vacation now and save up to 40% on selected destinations!"
          imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
          buttonText="Book Now"
          onButtonPress={handleBannerPress}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
