/**
 * LssGoo Travel App - Trending Trips Component
 * Display trending/popular trips
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { MapPin, Star } from 'lucide-react-native';
import { Colors } from '@/app/constants/theme';
import { Trip } from '../types/homeTypes';
import { formatCurrency } from '@/utils/currency';

interface TrendingTripsProps {
  trips: Trip[];
  onTripPress?: (trip: Trip) => void;
  onViewAllPress?: () => void;
}

export const TrendingTrips: React.FC<TrendingTripsProps> = ({
  trips,
  onTripPress,
  onViewAllPress,
}) => {
  if (!trips.length) return null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Trending Trips</Text>
        {onViewAllPress && (
          <TouchableOpacity onPress={onViewAllPress}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {trips.map((trip) => (
          <TouchableOpacity
            key={trip.id}
            style={styles.card}
            onPress={() => onTripPress?.(trip)}
            activeOpacity={0.8}
          >
            <Image source={{ uri: trip.imageUrl }} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.tripTitle} numberOfLines={1}>
                {trip.title}
              </Text>
              <View style={styles.locationRow}>
                <MapPin size={14} color={Colors.icon} />
                <Text style={styles.destination} numberOfLines={1}>
                  {trip.destination}
                </Text>
              </View>
              <View style={styles.footer}>
                <View style={styles.ratingRow}>
                  <Star size={14} color={Colors.warning} fill={Colors.warning} />
                  <Text style={styles.rating}>{trip.rating}</Text>
                  <Text style={styles.reviews}>({trip.reviewCount})</Text>
                </View>
                <Text style={styles.price}>{formatCurrency(trip.price)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.text,
  },
  viewAll: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '500',
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 16,
  },
  card: {
    width: 280,
    backgroundColor: Colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 12,
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  destination: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginLeft: 4,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.text,
  },
  reviews: {
    fontSize: 12,
    color: Colors.textMuted,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primary,
  },
});

export default TrendingTrips;

