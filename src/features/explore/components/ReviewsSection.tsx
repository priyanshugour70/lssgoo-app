/**
 * LssGoo Travel App - Reviews Section Component
 * Display place reviews and ratings
 */

import { Star } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

interface Review {
  rating: number;
  count: number;
  highlights: string[];
}

interface ReviewsSectionProps {
  reviews: Review;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        color={i < Math.floor(rating) ? '#FFD700' : '#D1D5DB'}
        fill={i < Math.floor(rating) ? '#FFD700' : 'transparent'}
      />
    ));
  };

  return (
    <View style={tw`bg-white p-4`}>
      <Text style={tw`text-xl font-bold text-gray-900 mb-4`}>
        Reviews & Ratings
      </Text>

      {/* Rating Summary */}
      <View style={tw`mb-6 p-4 bg-orange-50 rounded-lg`}>
        <View style={tw`flex-row items-center mb-2`}>
          <View style={tw`flex-row`}>
            {renderStars(reviews.rating)}
          </View>
          <Text style={tw`text-xl font-bold text-gray-900 ml-3`}>
            {reviews.rating.toFixed(1)}
          </Text>
        </View>
        <Text style={tw`text-gray-600`}>
          Based on {reviews.count.toLocaleString()} reviews
        </Text>
      </View>

      {/* Highlights */}
      {reviews.highlights.length > 0 && (
        <View>
          <Text style={tw`font-semibold text-gray-900 mb-3`}>
            What travelers loved:
          </Text>
          {reviews.highlights.map((highlight, index) => (
            <View key={index} style={tw`flex-row items-start mb-2`}>
              <Text style={tw`text-orange-500 mr-2`}>✓</Text>
              <Text style={tw`text-gray-700 flex-1`}>
                {highlight}
              </Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};
