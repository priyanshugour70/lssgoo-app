/**
 * LssGoo Travel App - Content Detail Screen
 * Dynamic content detail view with full information
 */

import { exploreApi } from '@/features/explore/api/exploreApi';
import { ContentCard } from '@/features/explore/components';
import { TRAVEL_CONTENT } from '@/features/explore/data/exploreData';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Bookmark, Heart, MessageCircle, Share2 } from 'lucide-react-native';
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

export default function ContentDetailScreen() {
  const { contentId } = useLocalSearchParams<{ contentId: string }>();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  // Find content from data
  const content = TRAVEL_CONTENT.find(item => item.id === contentId);

  if (!content) {
    return (
      <SafeAreaView style={tw`flex-1 bg-white items-center justify-center`}>
        <Text style={tw`text-gray-600 text-lg mb-4`}>Content not found</Text>
        <TouchableOpacity 
          style={tw`bg-orange-500 px-6 py-3 rounded-lg`}
          onPress={() => router.back()}
        >
          <Text style={tw`text-white font-bold`}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const handleLike = async () => {
    setIsLiked(!isLiked);
    try {
      await exploreApi.likeContent(content.id, 'current-user');
    } catch (error) {
      console.error('Error liking content:', error);
      setIsLiked(!isLiked); // Revert on error
    }
  };

  const handleSave = async () => {
    setIsSaved(!isSaved);
    try {
      await exploreApi.saveContent(content.id, 'current-user');
    } catch (error) {
      console.error('Error saving content:', error);
      setIsSaved(!isSaved); // Revert on error
    }
  };

  const handleShare = () => {
    // TODO: Implement share functionality
    console.log('Share content:', content.id);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between px-4 py-4 bg-white border-b border-gray-200`}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={tw`text-lg font-bold text-gray-900 flex-1 ml-4`} numberOfLines={1}>
          {content.title}
        </Text>
        <TouchableOpacity onPress={handleShare}>
          <Share2 size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Full Content Card */}
        <ContentCard
          content={content}
          onLike={handleLike}
          onSave={handleSave}
        />

        {/* Detailed Information */}
        <View style={tw`bg-white p-4 my-2`}>
          <Text style={tw`text-xl font-bold text-gray-900 mb-3`}>
            📍 Location Details
          </Text>
          <View style={tw`bg-gray-50 p-3 rounded-lg mb-3`}>
            <Text style={tw`text-gray-900 font-semibold`}>
              {content.location.name}
            </Text>
            <Text style={tw`text-gray-600`}>
              {content.location.country}
            </Text>
            <Text style={tw`text-gray-500 text-sm mt-2`}>
              Coordinates: {content.location.coordinates.lat.toFixed(4)}, {content.location.coordinates.lng.toFixed(4)}
            </Text>
          </View>
        </View>

        {/* Author Information */}
        <View style={tw`bg-white p-4 my-2`}>
          <Text style={tw`text-xl font-bold text-gray-900 mb-3`}>
            👤 Content Creator
          </Text>
          <View style={tw`flex-row items-center`}>
            <Image
              source={{ uri: content.author.avatar }}
              style={tw`w-16 h-16 rounded-full mr-3`}
              resizeMode="cover"
            />
            <View style={tw`flex-1`}>
              <View style={tw`flex-row items-center mb-1`}>
                <Text style={tw`text-lg font-bold text-gray-900`}>
                  {content.author.name}
                </Text>
                {content.author.verified && (
                  <Text style={tw`ml-2 text-blue-500`}>✓</Text>
                )}
              </View>
              <Text style={tw`text-gray-600 text-sm`}>
                {content.author.followers.toLocaleString()} followers
              </Text>
            </View>
          </View>
        </View>

        {/* Content Metadata */}
        <View style={tw`bg-white p-4 my-2`}>
          <Text style={tw`text-xl font-bold text-gray-900 mb-3`}>
            📊 Content Info
          </Text>
          <View style={tw`gap-3`}>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-700`}>Type</Text>
              <View style={tw`bg-orange-100 px-3 py-1 rounded-full`}>
                <Text style={tw`text-orange-700 font-semibold text-sm capitalize`}>
                  {content.type}
                </Text>
              </View>
            </View>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-700`}>Category</Text>
              <Text style={tw`font-semibold text-gray-900`}>
                {content.category}
              </Text>
            </View>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-700`}>Difficulty</Text>
              <View style={tw`bg-blue-100 px-3 py-1 rounded-full`}>
                <Text style={tw`text-blue-700 font-semibold text-sm capitalize`}>
                  {content.difficulty}
                </Text>
              </View>
            </View>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-700`}>Price Range</Text>
              <Text style={tw`font-semibold text-gray-900`}>
                {content.priceRange}
              </Text>
            </View>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-700`}>Best Season</Text>
              <Text style={tw`font-semibold text-gray-900 capitalize`}>
                {content.season}
              </Text>
            </View>
          </View>
        </View>

        {/* Engagement Stats */}
        <View style={tw`bg-white p-4 my-2`}>
          <Text style={tw`text-xl font-bold text-gray-900 mb-3`}>
            ❤️ Engagement
          </Text>
          <View style={tw`flex-row justify-between`}>
            <View style={tw`items-center flex-1`}>
              <Text style={tw`text-2xl font-bold text-gray-900`}>
                {(content.stats.likes / 1000).toFixed(1)}K
              </Text>
              <Text style={tw`text-gray-600 text-sm`}>Likes</Text>
            </View>
            <View style={tw`items-center flex-1`}>
              <Text style={tw`text-2xl font-bold text-gray-900`}>
                {(content.stats.comments / 1000).toFixed(1)}K
              </Text>
              <Text style={tw`text-gray-600 text-sm`}>Comments</Text>
            </View>
            <View style={tw`items-center flex-1`}>
              <Text style={tw`text-2xl font-bold text-gray-900`}>
                {(content.stats.saves / 1000).toFixed(1)}K
              </Text>
              <Text style={tw`text-gray-600 text-sm`}>Saves</Text>
            </View>
            <View style={tw`items-center flex-1`}>
              <Text style={tw`text-2xl font-bold text-gray-900`}>
                {(content.stats.shares / 1000).toFixed(1)}K
              </Text>
              <Text style={tw`text-gray-600 text-sm`}>Shares</Text>
            </View>
          </View>
        </View>

        {/* Tags */}
        {content.tags.length > 0 && (
          <View style={tw`bg-white p-4 my-2`}>
            <Text style={tw`text-lg font-bold text-gray-900 mb-3`}>
              🏷️ Tags
            </Text>
            <View style={tw`flex-row flex-wrap gap-2`}>
              {content.tags.map((tag) => (
                <TouchableOpacity
                  key={tag}
                  style={tw`bg-blue-100 px-3 py-1 rounded-full`}
                >
                  <Text style={tw`text-blue-700 text-sm`}>#{tag}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

        {/* Action Buttons */}
        <View style={tw`bg-white p-4 my-2 gap-3`}>
          <TouchableOpacity
            style={tw`flex-row items-center justify-center py-3 rounded-lg ${
              isLiked ? 'bg-red-50' : 'bg-gray-100'
            }`}
            onPress={handleLike}
          >
            <Heart 
              size={20} 
              color={isLiked ? '#EF4444' : '#6B7280'} 
              fill={isLiked ? '#EF4444' : 'transparent'}
            />
            <Text style={tw`font-semibold ml-2 ${isLiked ? 'text-red-600' : 'text-gray-700'}`}>
              {isLiked ? 'Liked' : 'Like'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`flex-row items-center justify-center py-3 rounded-lg ${
              isSaved ? 'bg-orange-50' : 'bg-gray-100'
            }`}
            onPress={handleSave}
          >
            <Bookmark 
              size={20} 
              color={isSaved ? '#FF6B35' : '#6B7280'} 
              fill={isSaved ? '#FF6B35' : 'transparent'}
            />
            <Text style={tw`font-semibold ml-2 ${isSaved ? 'text-orange-600' : 'text-gray-700'}`}>
              {isSaved ? 'Saved' : 'Save'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-orange-500 py-3 rounded-lg flex-row items-center justify-center`}
          >
            <MessageCircle size={20} color="#FFFFFF" />
            <Text style={tw`text-white font-bold ml-2`}>
              Read Comments ({content.stats.comments})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer Space */}
        <View style={tw`h-6`} />
      </ScrollView>
    </SafeAreaView>
  );
}
