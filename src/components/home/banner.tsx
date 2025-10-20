/**
 * LssGoo Travel App - Banner Component
 * Promotional banner for special offers and announcements
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
import { BannerProps } from '../../types';

const { width: screenWidth } = Dimensions.get('window');

export const Banner: React.FC<BannerProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  onButtonPress,
}) => {
  return (
    <View 
      style={[tw`mx-4 my-4 rounded-2xl overflow-hidden shadow-lg`, { 
        height: 160,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      }]}
    >
      <ImageBackground
        source={{ uri: imageUrl }}
        style={tw`flex-1 justify-center`}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.7)']}
          style={tw`absolute inset-0`}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
        
        <View style={tw`flex-1 justify-center px-5 py-4 z-10`}>
          <Text 
            style={[tw`text-xl font-bold text-white mb-2`, {
              textShadowColor: 'rgba(0, 0, 0, 0.5)',
              textShadowOffset: { width: 0, height: 2 },
              textShadowRadius: 4,
            }]}
          >
            {title}
          </Text>
          <Text 
            style={[tw`text-sm text-white mb-4 opacity-90`, {
              lineHeight: 20,
              textShadowColor: 'rgba(0, 0, 0, 0.5)',
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 2,
            }]}
          >
            {description}
          </Text>
          
          <TouchableOpacity
            style={[tw`flex-row items-center bg-orange-500 px-5 py-2.5 rounded-full self-start shadow-md`, {
              shadowColor: '#000000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }]}
            onPress={onButtonPress}
            accessibilityLabel={buttonText}
          >
            <Text style={tw`text-sm font-semibold text-white mr-1.5`}>
              {buttonText}
            </Text>
            <Ionicons
              name="arrow-forward"
              size={16}
              color="#FFFFFF"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};