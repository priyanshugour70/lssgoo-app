/**
 * LssGoo Travel App - Travel Stories Component
 * Grid of travel story/blog cards
 */

import { Clock } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { TravelStory } from '../data/homeData';

interface TravelStoriesProps {
  stories: TravelStory[];
  onStoryPress?: (story: TravelStory) => void;
}

export const TravelStories: React.FC<TravelStoriesProps> = ({
  stories,
  onStoryPress,
}) => {
  return (
    <View style={tw`bg-white py-4`}>
      <Text style={tw`text-lg font-bold text-gray-900 px-5 mb-4`}>
        Travel Stories
      </Text>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`px-5`}
        contentContainerStyle={tw`gap-4`}
      >
        {stories.map((story) => (
          <TouchableOpacity
            key={story.id}
            style={tw`w-64 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden`}
            onPress={() => onStoryPress?.(story)}
          >
            <Image
              source={{ uri: story.imageUrl }}
              style={tw`w-full h-32`}
              resizeMode="cover"
            />
            <View style={tw`p-4`}>
              <Text style={tw`text-sm font-semibold text-orange-500 mb-1`}>
                {story.category}
              </Text>
              <Text style={tw`text-base font-bold text-gray-900 mb-2`} numberOfLines={2}>
                {story.title}
              </Text>
              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-sm text-gray-600`}>
                  {story.author}
                </Text>
                <View style={tw`flex-row items-center`}>
                  <Clock size={12} color="#6B7280" />
                  <Text style={tw`text-xs text-gray-600 ml-1`}>
                    {story.readTime}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
