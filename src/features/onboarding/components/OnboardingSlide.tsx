/**
 * LssGoo Travel App - Onboarding Slide Component
 */

import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

interface OnboardingSlideProps {
  title: string;
  description: string;
  image: string;
}

export const OnboardingSlide: React.FC<OnboardingSlideProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <View style={{ width }} className="flex-1 bg-white">
      {/* Image Section - Fixed Height */}
      <View className="relative" style={{ height: height * 0.5 }}>
        <Image 
          source={{ uri: image }} 
          className="w-full h-full" 
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.95)', '#ffffff']}
          className="absolute left-0 right-0 bottom-0"
          style={{ height: 120 }}
        />
      </View>
      
      {/* Content Section - Flexible */}
      <View className="flex-1 px-8 pt-6 items-center justify-center">
        <Text className="text-3xl font-bold text-gray-900 text-center mb-4 leading-tight">
          {title}
        </Text>
        <Text className="text-base text-gray-600 text-center leading-relaxed px-2">
          {description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingSlide;
