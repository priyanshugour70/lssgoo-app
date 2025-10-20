/**
 * LssGoo Travel App - Stories Section Component
 * Horizontal scrollable stories section
 */

import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';
import { StoryCard } from './StoryCard';

interface Story {
  id: string;
  author: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  thumbnail: string;
  isViewed: boolean;
}

interface StoriesSectionProps {
  stories: Story[];
  onStoryPress?: (storyId: string) => void;
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({
  stories,
  onStoryPress
}) => {
  return (
    <View style={tw`bg-white py-4`}>
      <Text style={tw`text-lg font-bold text-gray-900 px-4 mb-4`}>
        Stories
      </Text>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`px-4`}
        contentContainerStyle={tw`gap-2`}
      >
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            id={story.id}
            author={story.author}
            thumbnail={story.thumbnail}
            isViewed={story.isViewed}
            onPress={onStoryPress}
          />
        ))}
      </ScrollView>
    </View>
  );
};
