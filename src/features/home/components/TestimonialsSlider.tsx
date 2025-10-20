/**
 * LssGoo Travel App - Testimonials Slider Component
 * Horizontal scrollable user testimonials
 */

import { Star } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';
import { Testimonial } from '../data/homeData';

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({
  testimonials,
}) => {
  return (
    <View style={tw`bg-white py-4`}>
      <Text style={tw`text-lg font-bold text-gray-900 px-5 mb-4`}>
        What Our Travelers Say
      </Text>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`px-5`}
        contentContainerStyle={tw`gap-4`}
      >
        {testimonials.map((testimonial) => (
          <View
            key={testimonial.id}
            style={tw`w-72 bg-gray-50 rounded-2xl p-4 border border-gray-100`}
          >
            <View style={tw`flex-row items-center mb-3`}>
              <Image
                source={{ uri: testimonial.avatar }}
                style={tw`w-10 h-10 rounded-full mr-3`}
                resizeMode="cover"
              />
              <View style={tw`flex-1`}>
                <Text style={tw`text-sm font-semibold text-gray-900`}>
                  {testimonial.name}
                </Text>
                <Text style={tw`text-xs text-gray-600`}>
                  {testimonial.location}
                </Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <Star size={14} color="#F59E0B" fill="#F59E0B" />
                <Text style={tw`text-sm font-semibold text-gray-900 ml-1`}>
                  {testimonial.rating}
                </Text>
              </View>
            </View>
            <Text style={tw`text-sm text-gray-700 leading-5`}>
              "{testimonial.comment}"
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
