/**
 * LssGoo Travel App - Trending Section Component
 * Horizontal scrollable trending content
 */

import { TrendingUp } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { TravelContent } from '../data/exploreData';
import { ContentCard } from './ContentCard';

interface TrendingSectionProps {
  content: TravelContent[];
  onContentPress?: (content: TravelContent) => void;
  onLike?: (contentId: string) => void;
  onSave?: (contentId: string) => void;
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({
  content,
  onContentPress,
  onLike,
  onSave
}) => {
  return (
    <View style={tw`bg-white py-4`}>
      <View style={tw`flex-row items-center px-4 mb-4`}>
        <TrendingUp size={20} color="#FF6B35" />
        <Text style={tw`text-lg font-bold text-gray-900 ml-2`}>
          Trending Now
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`px-4`}
        contentContainerStyle={tw`gap-4`}
      >
        {content.map((item) => (
          <View key={item.id} style={tw`w-80`}>
            <ContentCard
              content={item}
              onPress={onContentPress}
              onLike={onLike}
              onSave={onSave}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
