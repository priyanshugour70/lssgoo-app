/**
 * LssGoo Travel App - Onboarding Screen
 * Shows only on first app launch
 */

import COMPANY_INFO from '@/app/constants/companyInfo';
import { storage } from '@/services/storage';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { OnboardingSlide } from '../components/OnboardingSlide';

const { width } = Dimensions.get('window');

const ONBOARDING_SLIDES = [
  {
    id: '1',
    title: 'Discover Amazing Places',
    description: `Explore the world with ${COMPANY_INFO.displayName}. Find the best destinations for your next adventure.`,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
  },
  {
    id: '2',
    title: 'Book Your Dream Trip',
    description: 'Easy booking process with instant confirmation. Your perfect vacation is just a few taps away.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
  },
  {
    id: '3',
    title: 'Travel with Confidence',
    description: '24/7 customer support, best prices guaranteed, and hassle-free cancellation policy.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
  },
];

export const OnboardingScreen = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    if (currentIndex < ONBOARDING_SLIDES.length - 1) {
      scrollViewRef.current?.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
    } else {
      handleGetStarted();
    }
  };

  const handleSkip = () => {
    console.log('Skip button pressed');
    handleGetStarted();
  };

  const handleGetStarted = async () => {
    try {
      console.log('Starting handleGetStarted');
      await storage.saveOnboardingCompleted();
      console.log('Onboarding marked as completed');
      console.log('Navigating to welcome screen...');
      router.replace('/auth/welcome');
      console.log('Navigation triggered');
    } catch (error) {
      console.error('Error in handleGetStarted:', error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-3 bg-white border-b border-gray-100">
        <Text className="text-2xl font-bold text-blue-600">
          {COMPANY_INFO.displayName}
        </Text>
        {currentIndex < ONBOARDING_SLIDES.length - 1 && (
          <TouchableOpacity 
            onPress={handleSkip}
            className="px-4 py-2"
            activeOpacity={0.7}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Text className="text-base font-semibold text-gray-600">Skip</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Slides */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
        className="flex-1"
      >
        {ONBOARDING_SLIDES.map((slide) => (
          <OnboardingSlide
            key={slide.id}
            title={slide.title}
            description={slide.description}
            image={slide.image}
          />
        ))}
      </ScrollView>

      {/* Bottom Section - Pagination & Button */}
      <View className="px-6 py-6 bg-white border-t border-gray-100">
        {/* Pagination Dots */}
        <View className="flex-row justify-center items-center mb-6 gap-2">
          {ONBOARDING_SLIDES.map((_, index) => (
            <View
              key={index}
              style={{
                width: index === currentIndex ? 32 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: index === currentIndex ? '#2563eb' : '#d1d5db',
              }}
            />
          ))}
        </View>

        {/* Next/Get Started Button */}
        <TouchableOpacity
          className="bg-blue-600 py-4 rounded-xl items-center"
          style={{
            shadowColor: '#2563eb',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 6,
          }}
          onPress={handleNext}
          activeOpacity={0.7}
          disabled={false}
        >
          <Text className="text-white text-lg font-bold">
            {currentIndex === ONBOARDING_SLIDES.length - 1
              ? 'Get Started'
              : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
