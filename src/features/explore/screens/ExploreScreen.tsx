/**
 * LssGoo Travel App - Explore Screen
 * Beautiful explore screen with search and filters
 */

import { formatCurrency } from '@/utils/currency';
import {
  Filter,
  Heart,
  MapPin,
  Search,
  Star
} from 'lucide-react-native';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock destinations data
const CATEGORIES = ['All', 'Beach', 'Mountain', 'City', 'Adventure', 'Cultural'];

const DESTINATIONS = [
  {
    id: '1',
    name: 'Maldives Paradise',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
    price: 45000,
    rating: 4.9,
    reviews: 1250,
    category: 'Beach',
    duration: '5 Days',
  },
  {
    id: '2',
    name: 'Swiss Alps Adventure',
    location: 'Switzerland',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    price: 85000,
    rating: 4.8,
    reviews: 980,
    category: 'Mountain',
    duration: '7 Days',
  },
  {
    id: '3',
    name: 'Paris City Tour',
    location: 'France',
    image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800',
    price: 65000,
    rating: 4.7,
    reviews: 2100,
    category: 'City',
    duration: '6 Days',
  },
  {
    id: '4',
    name: 'Bali Beach Resort',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
    price: 35000,
    rating: 4.8,
    reviews: 1550,
    category: 'Beach',
    duration: '5 Days',
  },
  {
    id: '5',
    name: 'Himalayan Trek',
    location: 'Nepal',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    price: 55000,
    rating: 4.9,
    reviews: 890,
    category: 'Adventure',
    duration: '10 Days',
  },
  {
    id: '6',
    name: 'Jaipur Heritage',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
    price: 25000,
    rating: 4.6,
    reviews: 1320,
    category: 'Cultural',
    duration: '4 Days',
  },
];

export const ExploreScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const filteredDestinations = DESTINATIONS.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-6 pt-4 pb-6 bg-white border-b border-gray-100">
        <View className="flex-row items-center justify-between mb-4">
          <View>
            <Text className="text-3xl font-bold text-gray-900">Explore</Text>
            <Text className="text-sm text-gray-600 mt-1">Discover amazing places</Text>
          </View>
          <TouchableOpacity className="bg-blue-50 p-3 rounded-full">
            <Filter size={20} color="#3B82F6" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="flex-row items-center bg-gray-100 rounded-xl px-4 py-3">
          <Search size={20} color="#6B7280" />
          <TextInput
            className="flex-1 ml-3 text-base text-gray-900"
            placeholder="Search destinations..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text className="text-gray-400">✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        className="bg-white py-4 px-4 border-b border-gray-100"
        contentContainerStyle={{ gap: 8 }}
      >
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-600'
                : 'bg-gray-100'
            }`}
            onPress={() => setSelectedCategory(category)}
            activeOpacity={0.8}
          >
            <Text className={`text-sm font-semibold ${
              selectedCategory === category
                ? 'text-white'
                : 'text-gray-700'
            }`}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Results */}
      <ScrollView className="flex-1 px-4 pt-4" showsVerticalScrollIndicator={false}>
        <Text className="text-base font-semibold text-gray-900 mb-4">
          {filteredDestinations.length} Destinations Found
        </Text>

        {loading ? (
          <View className="flex-1 justify-center items-center py-20">
            <ActivityIndicator size="large" color="#3B82F6" />
          </View>
        ) : filteredDestinations.length === 0 ? (
          <View className="flex-1 justify-center items-center py-20">
            <Text className="text-lg font-semibold text-gray-900 mb-2">No Results Found</Text>
            <Text className="text-sm text-gray-600">Try adjusting your search or filters</Text>
          </View>
        ) : (
          <View className="flex-row flex-wrap justify-between mb-6">
            {filteredDestinations.map((destination) => (
              <View key={destination.id} className="w-[48%] mb-4">
                <TouchableOpacity
                  className="bg-white rounded-2xl overflow-hidden shadow-md"
                  activeOpacity={0.9}
                >
                  {/* Image */}
                  <View className="relative">
                    <Image
                      source={{ uri: destination.image }}
                      className="w-full h-40"
                      resizeMode="cover"
                    />
                    <TouchableOpacity
                      className="absolute top-3 right-3 bg-white/90 p-2 rounded-full"
                      onPress={() => toggleFavorite(destination.id)}
                      activeOpacity={0.8}
                    >
                      <Heart
                        size={16}
                        color={favorites.includes(destination.id) ? '#EF4444' : '#6B7280'}
                        fill={favorites.includes(destination.id) ? '#EF4444' : 'transparent'}
                      />
                    </TouchableOpacity>
                    <View className="absolute bottom-3 left-3 bg-blue-600 px-2 py-1 rounded">
                      <Text className="text-xs font-semibold text-white">{destination.duration}</Text>
                    </View>
                  </View>

                  {/* Content */}
                  <View className="p-3">
                    <Text className="text-base font-bold text-gray-900 mb-1" numberOfLines={1}>
                      {destination.name}
                    </Text>
                    <View className="flex-row items-center mb-2">
                      <MapPin size={12} color="#6B7280" />
                      <Text className="text-xs text-gray-600 ml-1" numberOfLines={1}>
                        {destination.location}
                      </Text>
                    </View>
                    <View className="flex-row items-center justify-between">
                      <View className="flex-row items-center">
                        <Star size={12} color="#F59E0B" fill="#F59E0B" />
                        <Text className="text-xs font-medium text-gray-900 ml-1">
                          {destination.rating}
                        </Text>
                        <Text className="text-xs text-gray-500 ml-1">({destination.reviews})</Text>
                      </View>
                      <Text className="text-sm font-bold text-blue-600">
                        {formatCurrency(destination.price)}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreScreen;

