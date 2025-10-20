/**
 * LssGoo Travel App - Explore Component
 * Popular destinations and categories section
 */

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import tw from 'twrnc';
import { ExploreProps } from '../../types';

export const Explore: React.FC<ExploreProps> = ({
  destinations,
  categories,
  onDestinationPress,
  onCategoryPress,
  onViewAllPress,
}) => {
  return (
    <View style={tw`my-4`}>
      {/* Popular Destinations Section */}
      <View style={tw`mb-6`}>
        <View style={tw`flex-row justify-between items-center px-4 mb-4`}>
          <Text style={tw`text-xl font-bold text-gray-900`}>Popular Destinations</Text>
          <TouchableOpacity
            style={tw`flex-row items-center`}
            onPress={() => onViewAllPress?.('destinations')}
          >
            <Text style={tw`text-sm text-blue-600 mr-1`}>View All</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#3B82F6"
            />
          </TouchableOpacity>
        </View>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16 }}
        >
          {destinations.map((destination) => (
            <TouchableOpacity
              key={destination.id}
              style={tw`w-50 mr-4 rounded-xl overflow-hidden bg-white shadow-md`}
              onPress={() => onDestinationPress?.(destination)}
            >
              <Image
                source={{ uri: destination.imageUrl }}
                style={tw`w-full h-30`}
                resizeMode="cover"
              />
              <View style={tw`p-3`}>
                <Text style={tw`text-base font-semibold text-gray-900 mb-1`}>
                  {destination.title}
                </Text>
                <Text style={tw`text-xs text-gray-600 mb-2`}>
                  {destination.destination}
                </Text>
                <Text style={tw`text-sm font-bold text-blue-600`}>
                  From ${destination.price}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Categories Section */}
      <View style={tw`mb-6`}>
        <View style={tw`flex-row justify-between items-center px-4 mb-4`}>
          <Text style={tw`text-xl font-bold text-gray-900`}>Explore Categories</Text>
          <TouchableOpacity
            style={tw`flex-row items-center`}
            onPress={() => onViewAllPress?.('categories')}
          >
            <Text style={tw`text-sm text-blue-600 mr-1`}>View All</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color="#3B82F6"
            />
          </TouchableOpacity>
        </View>
        
        <View style={tw`flex-row flex-wrap px-4 gap-3`}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[tw`flex-1 bg-white rounded-xl p-4 items-center shadow-md`, { minWidth: '45%' }]}
              onPress={() => onCategoryPress?.(category)}
            >
              <View style={tw`w-12 h-12 rounded-full bg-blue-600 justify-center items-center mb-2`}>
                <Ionicons
                  name={category.icon as any}
                  size={24}
                  color="#FFFFFF"
                />
              </View>
              <Text style={tw`text-sm font-semibold text-gray-900 text-center`}>{category.name}</Text>
              <Text style={tw`text-xs text-gray-600 mt-0.5`}>
                {category.tripCount} trips
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};