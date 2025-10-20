/**
 * LssGoo Travel App - Hero Component
 * Main hero section for the home screen
 */

import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BRAND_COLORS, Colors } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';
import { HeroProps } from '../../types';

const { width: screenWidth } = Dimensions.get('window');

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  onExplorePress,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const styles = StyleSheet.create({
    container: {
      height: 300,
      width: screenWidth,
      marginVertical: 16,
      borderRadius: 16,
      overflow: 'hidden',
      marginHorizontal: 16,
    },
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    content: {
      alignItems: 'center',
      paddingHorizontal: 24,
      zIndex: 1,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: BRAND_COLORS.white,
      textAlign: 'center',
      marginBottom: 12,
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 4,
    },
    subtitle: {
      fontSize: 16,
      color: BRAND_COLORS.white,
      textAlign: 'center',
      marginBottom: 24,
      opacity: 0.9,
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 2,
    },
    exploreButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.primary,
      paddingHorizontal: 24,
      paddingVertical: 12,
      borderRadius: 25,
      shadowColor: BRAND_COLORS.black,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: BRAND_COLORS.white,
      marginRight: 8,
    },
    buttonIcon: {
      marginLeft: 4,
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.6)']}
          style={styles.overlay}
        />
        
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          
          <TouchableOpacity
            style={styles.exploreButton}
            onPress={onExplorePress}
            accessibilityLabel="Explore destinations"
          >
            <Text style={styles.buttonText}>Explore Now</Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color={BRAND_COLORS.white}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};