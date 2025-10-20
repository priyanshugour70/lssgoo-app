/**
 * LssGoo Travel App - Top Destinations Component
 * Horizontal scrollable list of top destinations
 */

import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { Destination } from '../data/homeData';
import { DestinationCard } from './DestinationCard';

interface TopDestinationsProps {
  destinations: Destination[];
  onDestinationPress?: (destination: Destination) => void;
  onBookmark?: (destination: Destination) => void;
  onViewAllPress?: () => void;
}

export const TopDestinations: React.FC<TopDestinationsProps> = ({
  destinations,
  onDestinationPress,
  onBookmark,
  onViewAllPress,
}) => {
  return (
    <View style={tw`bg-white py-4`}>
      <View style={tw`flex-row items-center justify-between px-5 mb-4`}>
        <Text style={tw`text-xl font-bold text-gray-900`}>
          Best Destination
        </Text>
        <TouchableOpacity onPress={onViewAllPress}>
          <Text style={tw`text-orange-500 font-semibold`}>View all</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`px-5`}
        contentContainerStyle={tw`pb-2`}
      >
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
            onPress={onDestinationPress}
            onBookmark={onBookmark}
          />
        ))}
      </ScrollView>
    </View>
  );
};
