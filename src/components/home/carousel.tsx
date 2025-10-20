/**
 * LssGoo Travel App - Carousel Component
 * Featured content carousel for the home screen
 */

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
import { CarouselProps } from '../../types';

const { width: screenWidth } = Dimensions.get('window');

export const Carousel: React.FC<CarouselProps> = ({
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
    <View style={[tw`my-4`, { height: 200 }]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={{ height: 200 }}
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
              style={[tw`absolute bottom-0 left-0 right-0 p-4`, { backgroundColor: 'rgba(0, 0, 0, 0.5)' }]}
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
              style={tw`h-2 rounded ${
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