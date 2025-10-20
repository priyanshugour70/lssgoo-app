/**
 * LssGoo Travel App - Hero Section Component
 * Hero section with search bar and banner carousel
 */

import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';

interface HeroSectionProps {
  banners: Array<{
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
  }>;
  onSearchPress?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  banners
}) => {
  return (
    <View style={tw`bg-white`}>

      {/* Banner Carousel */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`px-5`}
        contentContainerStyle={tw`gap-4`}
      >
        {banners.map((banner) => (
          <View
            key={banner.id}
            style={tw`w-80 h-48 rounded-2xl overflow-hidden`}
          >
            <Image
              source={{ uri: banner.imageUrl }}
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
            <View style={tw`absolute inset-0 bg-black/30 justify-end p-4`}>
              <Text style={tw`text-white text-xl font-bold mb-1`}>
                {banner.title}
              </Text>
              <Text style={tw`text-white text-sm`}>
                {banner.subtitle}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
