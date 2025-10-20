/**
 * LssGoo Travel App - Booking Card Component
 */

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MapPin, Calendar, Clock, Heart } from 'lucide-react-native';
import { Colors } from '@/app/constants/theme';
import { Booking } from '../types/bookingTypes';

interface BookingCardProps {
  booking: Booking;
  type: 'upcoming' | 'past' | 'saved';
  onPress?: () => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({ booking, type, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: booking.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{booking.title}</Text>
        <View style={styles.location}>
          <MapPin size={14} color={Colors.icon} />
          <Text style={styles.destination}>{booking.destination}</Text>
        </View>
        
        {type === 'upcoming' && (
          <View style={styles.date}>
            <Calendar size={14} color={Colors.icon} />
            <Text style={styles.dateText}>{booking.date}</Text>
            <View style={[
              styles.statusBadge,
              booking.status === 'Confirmed' ? styles.confirmed : styles.pending
            ]}>
              <Text style={[
                styles.statusText,
                booking.status === 'Confirmed' ? styles.confirmedText : styles.pendingText
              ]}>
                {booking.status}
              </Text>
            </View>
          </View>
        )}
        
        {type === 'past' && booking.date && (
          <View style={styles.date}>
            <Clock size={14} color={Colors.icon} />
            <Text style={styles.dateText}>{booking.date}</Text>
          </View>
        )}
        
        {type === 'saved' && booking.price && (
          <View style={styles.price}>
            <Text style={styles.priceText}>{booking.price}</Text>
            <TouchableOpacity style={styles.heartButton}>
              <Heart size={16} color={Colors.error} fill={Colors.error} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 8,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  destination: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 6,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 6,
    flex: 1,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  confirmed: {
    backgroundColor: Colors.success + '20',
  },
  pending: {
    backgroundColor: Colors.warning + '20',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  confirmedText: {
    color: Colors.success,
  },
  pendingText: {
    color: Colors.warning,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primary,
  },
  heartButton: {
    padding: 4,
  },
});

export default BookingCard;

