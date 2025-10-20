/**
 * LssGoo Travel App - Offers Carousel Component
 * Featured content carousel for special offers
 */

import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { CarouselItem } from '@/types/common';

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
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.scrollView}
      >
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.slide}
            onPress={item.action}
            activeOpacity={0.9}
          >
            <Image 
              source={{ uri: item.imageUrl }} 
              style={styles.image}
            />
            <View style={styles.overlay}>
              <Text style={styles.title}>{item.title}</Text>
              {item.subtitle && (
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      {items.length > 1 && (
        <View style={styles.pagination}>
          {items.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    height: 200,
  },
  scrollView: {
    height: 200,
  },
  slide: {
    position: 'relative',
    width: screenWidth,
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    width: 24,
    backgroundColor: '#3B82F6',
  },
  inactiveDot: {
    width: 8,
    backgroundColor: '#9CA3AF',
  },
});

export default OffersCarousel;

