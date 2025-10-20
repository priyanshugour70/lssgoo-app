/**
 * LssGoo Travel App - Banner Component
 * Promotional banner for special offers and announcements
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BannerProps } from '../../types';
import { Colors, BRAND_COLORS } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';

const { width: screenWidth } = Dimensions.get('window');

export const Banner: React.FC<BannerProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  onButtonPress,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const styles = StyleSheet.create({
    container: {
      height: 160,
      marginHorizontal: 16,
      marginVertical: 16,
      borderRadius: 16,
      overflow: 'hidden',
      shadowColor: BRAND_COLORS.black,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingVertical: 16,
      zIndex: 1,
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: BRAND_COLORS.white,
      marginBottom: 8,
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 0, height: 2 },
      textShadowRadius: 4,
    },
    description: {
      fontSize: 14,
      color: BRAND_COLORS.white,
      marginBottom: 16,
      opacity: 0.9,
      lineHeight: 20,
      textShadowColor: 'rgba(0, 0, 0, 0.5)',
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 2,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.accent,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 20,
      alignSelf: 'flex-start',
      shadowColor: BRAND_COLORS.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    buttonText: {
      fontSize: 14,
      fontWeight: '600',
      color: BRAND_COLORS.white,
      marginRight: 6,
    },
    buttonIcon: {
      marginLeft: 2,
    },
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.7)']}
          style={styles.overlay}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        />
        
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          
          <TouchableOpacity
            style={styles.button}
            onPress={onButtonPress}
            accessibilityLabel={buttonText}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
            <Ionicons
              name="arrow-forward"
              size={16}
              color={BRAND_COLORS.white}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};