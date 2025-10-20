/**
 * LssGoo Travel App - Story Card Component
 * Instagram-like story card for user stories
 */

import { Play } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

interface StoryCardProps {
  id: string;
  author: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  thumbnail: string;
  isViewed?: boolean;
  onPress?: (id: string) => void;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  id,
  author,
  thumbnail,
  isViewed = false,
  onPress
}) => {
  return (
    <TouchableOpacity
      style={tw`items-center mr-4`}
      onPress={() => onPress?.(id)}
    >
      <View style={tw`relative`}>
        <View
          style={tw`w-16 h-16 rounded-full p-0.5 ${
            isViewed ? 'bg-gray-300' : 'bg-gradient-to-r from-orange-500 to-pink-500'
          }`}
        >
          <Image
            source={{ uri: author.avatar }}
            style={tw`w-full h-full rounded-full`}
            resizeMode="cover"
          />
        </View>
        
        {/* Play Icon for Video Stories */}
        <View style={tw`absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-1`}>
          <Play size={12} color="#FFFFFF" fill="#FFFFFF" />
        </View>
      </View>
      
      <Text style={tw`text-xs text-gray-900 mt-1 text-center`} numberOfLines={1}>
        {author.name}
      </Text>
    </TouchableOpacity>
  );
};
