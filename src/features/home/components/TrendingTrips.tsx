/**
 * LssGoo Travel App - Trending Trips Component
 * Display trending/popular trips
 */

import { formatCurrency } from '@/utils/currency';
import { MapPin, Star } from 'lucide-react-native';
import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { Trip } from '../types/homeTypes';

interface TrendingTripsProps {
  trips: Trip[];
  onTripPress?: (trip: Trip) => void;
  onViewAllPress?: () => void;
}

export const TrendingTrips: React.FC<TrendingTripsProps> = ({
  trips,
  onTripPress,
  onViewAllPress,
}) => {
  if (!trips.length) return null;

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-4"
        contentContainerStyle={{ gap: 16 }}
      >
        {trips.map((trip) => (
          <TouchableOpacity
            key={trip.id}
            className="w-72 bg-white rounded-2xl overflow-hidden shadow-md"
            onPress={() => onTripPress?.(trip)}
            activeOpacity={0.8}
          >
            <Image source={{ uri: trip.imageUrl }} className="w-full h-48" resizeMode="cover" />
            <View className="p-4">
              <Text className="text-lg font-bold text-gray-900 mb-2" numberOfLines={1}>
                {trip.title}
              </Text>
              <View className="flex-row items-center mb-3">
                <MapPin size={14} color="#6B7280" />
                <Text className="text-sm text-gray-600 ml-1 flex-1" numberOfLines={1}>
                  {trip.destination}
                </Text>
              </View>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center">
                  <Star size={14} color="#F59E0B" fill="#F59E0B" />
                  <Text className="text-sm font-medium text-gray-900 ml-1">{trip.rating}</Text>
                  <Text className="text-xs text-gray-500 ml-1">({trip.reviewCount})</Text>
                </View>
                <Text className="text-lg font-bold text-blue-600">{formatCurrency(trip.price)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        
        {onViewAllPress && (
          <TouchableOpacity
            className="w-32 bg-blue-50 rounded-2xl items-center justify-center"
            onPress={onViewAllPress}
            activeOpacity={0.8}
          >
            <Text className="text-blue-600 font-semibold">View All</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

export default TrendingTrips;
