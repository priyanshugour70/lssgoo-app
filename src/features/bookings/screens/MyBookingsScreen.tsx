/**
 * LssGoo Travel App - My Bookings Screen
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus } from 'lucide-react-native';
import { Colors } from '@/app/constants/theme';
import { useBookings } from '../hooks/useBookings';
import { BookingCard } from '../components/BookingCard';

type TabType = 'upcoming' | 'past' | 'saved';

export const MyBookingsScreen = () => {
  const [activeTab, setActiveTab] = useState<TabType>('upcoming');
  const { upcomingBookings, pastBookings, savedBookings, loading } = useBookings();

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      );
    }

    let bookings;
    switch (activeTab) {
      case 'upcoming':
        bookings = upcomingBookings;
        break;
      case 'past':
        bookings = pastBookings;
        break;
      case 'saved':
        bookings = savedBookings;
        break;
    }

    return (
      <View style={styles.tripsContainer}>
        {bookings.map((booking) => (
          <BookingCard
            key={booking.id}
            booking={booking}
            type={activeTab}
          />
        ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Trips</Text>
        <TouchableOpacity style={styles.addButton}>
          <Plus size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        {(['upcoming', 'past', 'saved'] as TabType[]).map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
  },
  addButton: {
    padding: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: Colors.surfaceSecondary,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: Colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.textSecondary,
  },
  activeTabText: {
    color: Colors.text,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tripsContainer: {
    paddingVertical: 16,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
});

export default MyBookingsScreen;

