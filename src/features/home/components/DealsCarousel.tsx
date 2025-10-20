/**
 * LssGoo Travel App - Deals Carousel Component
 * Horizontal scrollable deals and offers
 */

import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { Deal } from '../data/homeData';

interface DealsCarouselProps {
  deals: Deal[];
  onDealPress?: (deal: Deal) => void;
}

export const DealsCarousel: React.FC<DealsCarouselProps> = ({
  deals,
  onDealPress,
}) => {
  return (
    <View style={tw`bg-white py-4`}>
      <Text style={tw`text-lg font-bold text-gray-900 px-5 mb-4`}>
        Deals & Offers
      </Text>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`px-5`}
        contentContainerStyle={tw`gap-4`}
      >
        {deals.map((deal) => (
          <TouchableOpacity
            key={deal.id}
            style={tw`w-64 h-32 rounded-2xl overflow-hidden`}
            onPress={() => onDealPress?.(deal)}
          >
            <Image
              source={{ uri: deal.imageUrl }}
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
            <View style={tw`absolute inset-0 bg-black/40 justify-between p-4`}>
              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-white text-sm font-semibold bg-orange-500 px-2 py-1 rounded-full`}>
                  {deal.discount}
                </Text>
              </View>
              <View>
                <Text style={tw`text-white text-lg font-bold mb-1`}>
                  {deal.title}
                </Text>
                <Text style={tw`text-white text-sm`}>
                  {deal.subtitle}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
