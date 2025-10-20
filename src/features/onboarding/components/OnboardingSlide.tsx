/**
 * LssGoo Travel App - Onboarding Slide Component
 */

import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import tw from 'twrnc';

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
    <View style={[tw`flex-1 bg-white`, { width }]}>
      {/* Image Section - Fixed Height */}
      <View style={[tw`relative`, { height: height * 0.5 }]}>
        <Image 
          source={{ uri: image }} 
          style={tw`w-full h-full`}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.95)', '#ffffff']}
          style={[tw`absolute left-0 right-0 bottom-0`, { height: 120 }]}
        />
      </View>
      
      {/* Content Section - Flexible */}
      <View style={tw`flex-1 px-8 pt-6 items-center justify-center`}>
        <Text style={tw`text-3xl font-bold text-gray-900 text-center mb-4`}>
          {title}
        </Text>
        <Text style={tw`text-base text-gray-600 text-center px-2`}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default OnboardingSlide;
