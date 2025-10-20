/**
 * LssGoo Travel App - Content Card Component
 * Instagram-like content card for explore feed
 */

import { Bookmark, Heart, MessageCircle, MoreHorizontal, Play, Share } from 'lucide-react-native';
import React, { useState } from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { TravelContent } from '../data/exploreData';

interface ContentCardProps {
  content: TravelContent;
  onPress?: (content: TravelContent) => void;
  onLike?: (contentId: string) => void;
  onSave?: (contentId: string) => void;
  onShare?: (contentId: string) => void;
  onComment?: (contentId: string) => void;
}

const { width } = Dimensions.get('window');

export const ContentCard: React.FC<ContentCardProps> = ({
  content,
  onPress,
  onLike,
  onSave,
  onShare,
  onComment
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(content.id);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave?.(content.id);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <View style={tw`bg-white mb-4`}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between px-4 py-3`}>
        <View style={tw`flex-row items-center flex-1`}>
          <Image
            source={{ uri: content.author.avatar }}
            style={tw`w-8 h-8 rounded-full mr-3`}
            resizeMode="cover"
          />
          <View style={tw`flex-1`}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`font-semibold text-gray-900`}>{content.author.name}</Text>
              {content.author.verified && (
                <Text style={tw`ml-1 text-blue-500`}>✓</Text>
              )}
            </View>
            <Text style={tw`text-sm text-gray-600`}>{content.location.name}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <MoreHorizontal size={20} color="#6B7280" />
        </TouchableOpacity>
      </View>

      {/* Media */}
      <TouchableOpacity onPress={() => onPress?.(content)}>
        <View style={tw`relative`}>
          <Image
            source={{ uri: content.media[0].url }}
            style={tw`w-full h-96`}
            resizeMode="cover"
          />
          
          {/* Video Play Button */}
          {content.type === 'video' && (
            <View style={tw`absolute inset-0 items-center justify-center`}>
              <View style={tw`bg-black/50 rounded-full p-4`}>
                <Play size={32} color="#FFFFFF" fill="#FFFFFF" />
              </View>
            </View>
          )}

          {/* Carousel Indicators */}
          {content.type === 'carousel' && content.media.length > 1 && (
            <View style={tw`absolute top-4 right-4 bg-black/50 px-2 py-1 rounded-full`}>
              <Text style={tw`text-white text-xs`}>1/{content.media.length}</Text>
            </View>
          )}

          {/* Sponsored Badge */}
          {content.isSponsored && (
            <View style={tw`absolute top-4 left-4 bg-orange-500 px-2 py-1 rounded-full`}>
              <Text style={tw`text-white text-xs font-semibold`}>Sponsored</Text>
            </View>
          )}

          {/* Trending Badge */}
          {content.isTrending && (
            <View style={tw`absolute top-4 left-4 bg-red-500 px-2 py-1 rounded-full`}>
              <Text style={tw`text-white text-xs font-semibold`}>Trending</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      {/* Actions */}
      <View style={tw`flex-row items-center justify-between px-4 py-3`}>
        <View style={tw`flex-row items-center`}>
          <TouchableOpacity onPress={handleLike} style={tw`mr-4`}>
            <Heart 
              size={24} 
              color={isLiked ? "#FF6B35" : "#6B7280"} 
              fill={isLiked ? "#FF6B35" : "transparent"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onComment?.(content.id)} style={tw`mr-4`}>
            <MessageCircle size={24} color="#6B7280" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onShare?.(content.id)}>
            <Share size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleSave}>
          <Bookmark 
            size={24} 
            color={isSaved ? "#FF6B35" : "#6B7280"} 
            fill={isSaved ? "#FF6B35" : "transparent"}
          />
        </TouchableOpacity>
      </View>

      {/* Stats */}
      <View style={tw`px-4 pb-2`}>
        <Text style={tw`font-semibold text-gray-900`}>
          {formatNumber(content.stats.likes)} likes
        </Text>
      </View>

      {/* Caption */}
      <View style={tw`px-4 pb-2`}>
        <Text style={tw`text-gray-900`}>
          <Text style={tw`font-semibold`}>{content.author.name}</Text>
          {' '}{content.description}
        </Text>
      </View>

      {/* Tags */}
      {content.tags.length > 0 && (
        <View style={tw`px-4 pb-2`}>
          <Text style={tw`text-blue-500`}>
            {content.tags.map(tag => `#${tag}`).join(' ')}
          </Text>
        </View>
      )}

      {/* Comments */}
      {content.stats.comments > 0 && (
        <TouchableOpacity style={tw`px-4 pb-2`}>
          <Text style={tw`text-gray-600`}>
            View all {content.stats.comments} comments
          </Text>
        </TouchableOpacity>
      )}

      {/* Time */}
      <View style={tw`px-4 pb-4`}>
        <Text style={tw`text-xs text-gray-500`}>
          {new Date(content.createdAt).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
};
