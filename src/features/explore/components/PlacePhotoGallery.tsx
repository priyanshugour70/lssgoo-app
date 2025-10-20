/**
 * LssGoo Travel App - Place Photo Gallery Component
 * Gallery view for place photos
 */

import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import React, { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

interface Photo {
  url: string;
  caption: string;
  photographer: string;
}

interface PlacePhotoGalleryProps {
  photos: Photo[];
  onPhotoPress?: (index: number) => void;
}

const { width } = Dimensions.get('window');

export const PlacePhotoGallery: React.FC<PlacePhotoGalleryProps> = ({
  photos,
  onPhotoPress
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
    if (currentIndex < photos.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const renderPhoto = ({ item, index }: { item: Photo; index: number }) => (
    <View style={tw`w-full`}>
      <Image
        source={{ uri: item.url }}
        style={tw`w-full h-80`}
        resizeMode="cover"
      />
      <View style={tw`bg-black/70 p-4`}>
        <Text style={tw`text-white font-semibold text-base`}>
          {item.caption}
        </Text>
        <Text style={tw`text-gray-300 text-sm mt-1`}>
          by {item.photographer}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={tw`relative`}>
      <FlatList
        ref={flatListRef}
        data={photos}
        renderItem={renderPhoto}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={tw`w-full`}
      />

      {/* Navigation */}
      {photos.length > 1 && (
        <>
          {currentIndex > 0 && (
            <TouchableOpacity
              onPress={goToPrevious}
              style={tw`absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2`}
            >
              <ChevronLeft size={24} color="#FFFFFF" />
            </TouchableOpacity>
          )}

          {currentIndex < photos.length - 1 && (
            <TouchableOpacity
              onPress={goToNext}
              style={tw`absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2`}
            >
              <ChevronRight size={24} color="#FFFFFF" />
            </TouchableOpacity>
          )}

          {/* Counter */}
          <View style={tw`absolute top-4 right-4 bg-black/50 px-2 py-1 rounded-full`}>
            <Text style={tw`text-white text-xs`}>
              {currentIndex + 1}/{photos.length}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};
