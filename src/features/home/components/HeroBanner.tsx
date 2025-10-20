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
import tw from 'twrnc';
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
      style={[tw`mx-4 my-4 rounded-2xl overflow-hidden shadow-lg`, { height: 300, width: screenWidth - 32 }]}
    >
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={tw`flex-1 justify-center items-center`}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.6)']}
          style={tw`absolute inset-0`}
        />
        
        <View style={tw`items-center px-6 z-10`}>
          <Text 
            style={[tw`text-3xl font-bold text-white text-center mb-3`, {
              textShadowColor: 'rgba(0, 0, 0, 0.5)',
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 4,
            }]}
          >
            {title}
          </Text>
          <Text 
            style={[tw`text-base text-white text-center mb-6 opacity-90`, {
              textShadowColor: 'rgba(0, 0, 0, 0.5)',
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 2,
            }]}
          >
            {subtitle}
          </Text>
          
          <TouchableOpacity
            style={tw`flex-row items-center bg-blue-600 px-6 py-3 rounded-full shadow-lg`}
            onPress={onExplorePress}
            activeOpacity={0.8}
          >
            <Text style={tw`text-base font-semibold text-white mr-2`}>
              Explore Now
            </Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeroBanner;
