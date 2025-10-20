/**
 * LssGoo Travel App - Explore Screen
 * Instagram-like explore feed with infinite scroll, categories, and filtering
 */

import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import {
  CategoryFilter,
  ContentCard,
  LoadingCard,
  SearchBar,
  StoriesSection,
} from '../components';
import { TravelContent } from '../data/exploreData';
import { useExplore } from '../hooks/useExplore';

const MOCK_STORIES = [
  {
    id: '1',
    author: {
      name: 'Alex Adventure',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      verified: true,
    },
    thumbnail: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=200',
    isViewed: false,
  },
  {
    id: '2',
    author: {
      name: 'Sarah Sky',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      verified: true,
    },
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200',
    isViewed: true,
  },
  {
    id: '3',
    author: {
      name: 'Mike Explorer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      verified: false,
    },
    thumbnail: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=200',
    isViewed: false,
  },
];

export const ExploreScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const {
    content,
    loading,
    refreshing,
    hasMore,
    error,
    loadMore,
    refresh,
    updateFilters,
    likeContent,
    saveContent,
  } = useExplore();

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    updateFilters({
      category: categoryId || undefined,
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // TODO: Implement search functionality
  }; 

  const handleContentPress = (travelContent: TravelContent) => {
    router.push({
      pathname: '/(detail)/content-detail',
      params: { contentId: travelContent.id, type: 'content' },
    });
  };

  const renderContent = ({ item }: { item: TravelContent }) => (
    <ContentCard
      content={item}
      onPress={handleContentPress}
      onLike={likeContent}
      onSave={saveContent}
    />
  );

  const renderLoadingState = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <LoadingCard key={`loading-${index}`} />
    ));
  };

  const renderHeader = () => (
    <>
      {/* Search Bar */}
      <SearchBar
        onSearch={handleSearch}
        placeholder="Search destinations..."
      />

      {/* Stories Section */}
      <StoriesSection
        stories={MOCK_STORIES}
        onStoryPress={(storyId) => {
          // Handle story press
        }}
      />

      {/* Category Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
    </>
  );

  const renderFooter = () => {
    if (!loading || content.length === 0) return null;
    return (
      <View style={tw`items-center py-6`}>
        <ActivityIndicator size="large" color="#FF6B35" />
      </View>
    );
  };

  const renderEmpty = () => {
    if (loading) {
      return (
        <View style={tw`flex-1 items-center justify-center py-10`}>
          {renderLoadingState()}
        </View>
      );
    }

    return (
      <View style={tw`flex-1 items-center justify-center py-10`}>
        <Text style={tw`text-gray-600 text-lg`}>
          {error ? 'Failed to load content' : 'No content found'}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <FlatList
        data={content}
        renderItem={renderContent}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refresh}
            tintColor="#FF6B35"
          />
        }
        showsVerticalScrollIndicator={false}
        scrollIndicatorInsets={{ right: 1 }}
      />
    </SafeAreaView>
  );
};

export default ExploreScreen;

