/**
 * LssGoo Travel App - Offers Carousel Component
 * Featured content carousel for special offers
 */

import { CarouselItem } from '@/types/common';
import React, { useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import tw from 'twrnc';

const { width: screenWidth } = Dimensions.get('window');

interface OffersCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

export const OffersCarousel: React.FC<OffersCarouselProps> = ({
  items,
  autoPlay = true,
  interval = 3000,
}) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay && items.length > 1) {
      const timer = setInterval(() => {
        const nextIndex = (currentIndex + 1) % items.length;
        setCurrentIndex(nextIndex);
        scrollViewRef.current?.scrollTo({
          x: nextIndex * screenWidth,
          animated: true,
        });
      }, interval);

      return () => clearInterval(timer);
    }
  }, [currentIndex, autoPlay, interval, items.length]);

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / screenWidth);
    setCurrentIndex(index);
  };

  if (!items.length) {
    return null;
  }

  return (
    <View style={tw`my-4 h-52`}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={tw`h-52`}
      >
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[tw`relative`, { width: screenWidth, height: 200 }]}
            onPress={item.action}
            activeOpacity={0.9}
          >
            <Image 
              source={{ uri: item.imageUrl }} 
              style={tw`w-full h-full`}
              resizeMode="cover"
            />
            <View 
              style={tw`absolute bottom-0 left-0 right-0 p-4 bg-black/50`}
            >
              <Text style={tw`text-xl font-bold text-white mb-1`}>
                {item.title}
              </Text>
              {item.subtitle && (
                <Text style={tw`text-sm text-white opacity-90`}>
                  {item.subtitle}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {items.length > 1 && (
        <View style={tw`flex-row justify-center items-center mt-3 gap-2`}>
          {items.map((_, index) => (
            <View
              key={index}
              style={tw`h-2 rounded-full ${
                index === currentIndex 
                  ? 'w-6 bg-blue-600' 
                  : 'w-2 bg-gray-400'
              }`}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default OffersCarousel;
