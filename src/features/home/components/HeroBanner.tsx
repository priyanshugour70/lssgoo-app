/**
 * LssGoo Travel App - Hero Banner Component
 * Main hero section for the home screen
 */

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { HeroProps } from '../types/homeTypes';

const { width: screenWidth } = Dimensions.get('window');

export const HeroBanner: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  onExplorePress,
}) => {
  return (
    <View 
      className="mx-4 my-4 rounded-2xl overflow-hidden"
      style={{ height: 300, width: screenWidth - 32 }}
    >
      <ImageBackground
        source={{ uri: backgroundImage }}
        className="flex-1 justify-center items-center"
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.6)']}
          className="absolute inset-0"
        />
        
        <View className="items-center px-6 z-10">
          <Text 
            className="text-3xl font-bold text-white text-center mb-3"
            style={{
              textShadowColor: 'rgba(0, 0, 0, 0.5)',
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 4,
            }}
          >
            {title}
          </Text>
          <Text 
            className="text-base text-white text-center mb-6 opacity-90"
            style={{
              textShadowColor: 'rgba(0, 0, 0, 0.5)',
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 2,
            }}
          >
            {subtitle}
          </Text>
          
          <TouchableOpacity
            className="flex-row items-center bg-blue-600 px-6 py-3 rounded-full shadow-lg"
            onPress={onExplorePress}
            accessibilityLabel="Explore destinations"
            style={{
              shadowColor: '#000000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 8,
            }}
          >
            <Text className="text-base font-semibold text-white mr-2">
              Explore Now
            </Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="#FFFFFF"
              className="ml-1"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeroBanner;

