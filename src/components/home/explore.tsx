/**
 * LssGoo Travel App - Explore Component
 * Popular destinations and categories section
 */

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BRAND_COLORS, Colors } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';
import { ExploreProps } from '../../types';

export const Explore: React.FC<ExploreProps> = ({
  destinations,
  categories,
  onDestinationPress,
  onCategoryPress,
  onViewAllPress,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const styles = StyleSheet.create({
    container: {
      marginVertical: 16,
    },
    section: {
      marginBottom: 24,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
    },
    viewAllButton: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    viewAllText: {
      fontSize: 14,
      color: colors.primary,
      marginRight: 4,
    },
    destinationsContainer: {
      paddingLeft: 16,
    },
    destinationCard: {
      width: 200,
      marginRight: 16,
      borderRadius: 12,
      overflow: 'hidden',
      backgroundColor: colors.card,
      shadowColor: BRAND_COLORS.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    destinationImage: {
      width: '100%',
      height: 120,
      resizeMode: 'cover',
    },
    destinationInfo: {
      padding: 12,
    },
    destinationName: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
      marginBottom: 4,
    },
    destinationLocation: {
      fontSize: 12,
      color: colors.icon,
      marginBottom: 8,
    },
    destinationPrice: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.primary,
    },
    categoriesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 16,
      gap: 12,
    },
    categoryCard: {
      flex: 1,
      minWidth: '45%',
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
      shadowColor: BRAND_COLORS.black,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    categoryIcon: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    categoryName: {
      fontSize: 14,
      fontWeight: '600',
      color: colors.text,
      textAlign: 'center',
    },
    categoryCount: {
      fontSize: 12,
      color: colors.icon,
      marginTop: 2,
    },
  });

  return (
    <View style={styles.container}>
      {/* Popular Destinations Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destinations</Text>
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => onViewAllPress?.('destinations')}
          >
            <Text style={styles.viewAllText}>View All</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
        
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.destinationsContainer}
        >
          {destinations.map((destination) => (
            <TouchableOpacity
              key={destination.id}
              style={styles.destinationCard}
              onPress={() => onDestinationPress?.(destination)}
            >
              <Image
                source={{ uri: destination.imageUrl }}
                style={styles.destinationImage}
              />
              <View style={styles.destinationInfo}>
                <Text style={styles.destinationName}>
                  {destination.title}
                </Text>
                <Text style={styles.destinationLocation}>
                  {destination.destination}
                </Text>
                <Text style={styles.destinationPrice}>
                  From ${destination.price}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Categories Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Explore Categories</Text>
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={() => onViewAllPress?.('categories')}
          >
            <Text style={styles.viewAllText}>View All</Text>
            <Ionicons
              name="chevron-forward"
              size={16}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => onCategoryPress?.(category)}
            >
              <View style={styles.categoryIcon}>
                <Ionicons
                  name={category.icon as any}
                  size={24}
                  color={BRAND_COLORS.white}
                />
              </View>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryCount}>
                {category.tripCount} trips
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};