/**
 * LssGoo Travel App - Carousel Viewer Component
 * Instagram-like carousel for multiple images/videos
 */

import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import React, { useState, useRef } from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { VideoPlayer } from './VideoPlayer';

interface CarouselViewerProps {
  media: Array<{
    url: string;
    thumbnail?: string;
    duration?: number;
    aspectRatio: number;
  }>;
  onPress?: (index: number) => void;
}

const { width } = Dimensions.get('window');

export const CarouselViewer: React.FC<CarouselViewerProps> = ({
  media,
  onPress
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.round(contentOffset.x / width);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  const goToNext = () => {
    if (currentIndex < media.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const renderMedia = ({ item, index }: { item: any; index: number }) => {
    const isVideo = item.duration !== undefined;
    
    return (
      <TouchableOpacity
        style={tw`w-full`}
        onPress={() => onPress?.(index)}
        activeOpacity={1}
      >
        {isVideo ? (
          <VideoPlayer
            videoUrl={item.url}
            thumbnail={item.thumbnail}
            autoPlay={index === 0}
          />
        ) : (
          <Image
            source={{ uri: item.url }}
            style={tw`w-full h-96`}
            resizeMode="cover"
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={tw`relative`}>
      <FlatList
        ref={flatListRef}
        data={media}
        renderItem={renderMedia}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={tw`w-full`}
      />

      {/* Navigation Arrows */}
      {media.length > 1 && (
        <>
          {currentIndex > 0 && (
            <TouchableOpacity
              onPress={goToPrevious}
              style={tw`absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2`}
            >
              <ChevronLeft size={24} color="#FFFFFF" />
            </TouchableOpacity>
          )}

          {currentIndex < media.length - 1 && (
            <TouchableOpacity
              onPress={goToNext}
              style={tw`absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2`}
            >
              <ChevronRight size={24} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </>
      )}

      {/* Dots Indicator */}
      {media.length > 1 && (
        <View style={tw`absolute bottom-4 left-1/2 -translate-x-1/2 flex-row`}>
          {media.map((_, index) => (
            <View
              key={index}
              style={tw`w-2 h-2 rounded-full mx-1 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </View>
      )}

      {/* Media Counter */}
      {media.length > 1 && (
        <View style={tw`absolute top-4 right-4 bg-black/50 px-2 py-1 rounded-full`}>
          <Text style={tw`text-white text-xs`}>
            {currentIndex + 1}/{media.length}
          </Text>
        </View>
      )}
    </View>
  );
};
