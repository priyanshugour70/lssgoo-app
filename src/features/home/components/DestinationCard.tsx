/**
 * LssGoo Travel App - Destination Card Component
 * Card component for displaying destinations
 */

import { Bookmark, MapPin, Star, Users } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { Destination } from '../data/homeData';

interface DestinationCardProps {
  destination: Destination;
  onPress?: (destination: Destination) => void;
  onBookmark?: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onPress,
  onBookmark,
}) => {
  return (
    <TouchableOpacity
      style={tw`w-72 mr-4 bg-white rounded-2xl shadow-sm border border-gray-100`}
      onPress={() => onPress?.(destination)}
    >
      {/* Image */}
      <View style={tw`relative`}>
        <Image
          source={{ uri: destination.imageUrl }}
          style={tw`w-full h-48 rounded-t-2xl`}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={tw`absolute top-3 right-3 p-2 bg-white/90 rounded-full`}
          onPress={() => onBookmark?.(destination)}
        >
          <Bookmark
            size={16}
            color={destination.isBookmarked ? '#FF6B35' : '#6B7280'}
            fill={destination.isBookmarked ? '#FF6B35' : 'transparent'}
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={tw`p-4`}>
        <View style={tw`flex-row items-center justify-between mb-2`}>
          <Text style={tw`text-lg font-bold text-gray-900 flex-1`} numberOfLines={1}>
            {destination.title}
          </Text>
          <View style={tw`flex-row items-center ml-2`}>
            <Star size={14} color="#F59E0B" fill="#F59E0B" />
            <Text style={tw`text-sm font-semibold text-gray-900 ml-1`}>
              {destination.rating}
            </Text>
          </View>
        </View>

        <View style={tw`flex-row items-center mb-3`}>
          <MapPin size={14} color="#6B7280" />
          <Text style={tw`text-sm text-gray-600 ml-1`}>
            {destination.location}
          </Text>
        </View>

        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-lg font-bold text-orange-500`}>
            {destination.currency} {destination.price.toLocaleString()}
          </Text>
          <View style={tw`flex-row items-center`}>
            <Users size={14} color="#6B7280" />
            <Text style={tw`text-sm text-gray-600 ml-1`}>
              +{destination.usersCount}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
