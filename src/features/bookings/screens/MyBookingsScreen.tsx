/**
 * LssGoo Travel App - My Bookings Screen
 * Beautiful bookings screen with Tailwind CSS
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Plus, Calendar, Clock, Bookmark } from 'lucide-react-native';
import { router } from 'expo-router';
import { useBookings } from '../hooks/useBookings';
import { BookingCard } from '../components/BookingCard';

type TabType = 'upcoming' | 'past' | 'saved';

const tabs: { id: TabType; label: string; icon: any }[] = [
  { id: 'upcoming', label: 'Upcoming', icon: Calendar },
  { id: 'past', label: 'Past', icon: Clock },
  { id: 'saved', label: 'Saved', icon: Bookmark },
];

export const MyBookingsScreen = () => {
  const [activeTab, setActiveTab] = useState<TabType>('upcoming');
  const { upcomingBookings, pastBookings, savedBookings, loading } = useBookings();

  const getBookings = () => {
    switch (activeTab) {
      case 'upcoming':
        return upcomingBookings;
      case 'past':
        return pastBookings;
      case 'saved':
        return savedBookings;
      default:
        return [];
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View className="flex-1 justify-center items-center py-20">
          <ActivityIndicator size="large" color="#3B82F6" />
          <Text className="mt-4 text-base text-gray-600">Loading your trips...</Text>
        </View>
      );
    }

    const bookings = getBookings();

    if (bookings.length === 0) {
      return (
        <View className="flex-1 justify-center items-center py-20">
          <View className="w-24 h-24 bg-gray-100 rounded-full items-center justify-center mb-4">
            <Calendar size={40} color="#9CA3AF" />
          </View>
          <Text className="text-lg font-semibold text-gray-900 mb-2">No Trips Yet</Text>
          <Text className="text-sm text-gray-600 text-center px-8 mb-6">
            {activeTab === 'saved' 
              ? 'Save trips you love to book them later'
              : 'Start planning your next adventure today!'}
          </Text>
          <TouchableOpacity
            className="bg-blue-600 px-6 py-3 rounded-xl active:bg-blue-700"
            onPress={() => router.push('/(tabs)/explore')}
            activeOpacity={0.8}
          >
            <Text className="text-white font-semibold">Explore Destinations</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View className="py-4">
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
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row justify-between items-center px-6 py-4 bg-white border-b border-gray-100">
        <View>
          <Text className="text-3xl font-bold text-gray-900">My Trips</Text>
          <Text className="text-sm text-gray-600 mt-1">Manage your travel plans</Text>
        </View>
        <TouchableOpacity 
          className="bg-blue-600 p-3 rounded-full active:bg-blue-700"
          onPress={() => router.push('/(tabs)/explore')}
          activeOpacity={0.8}
        >
          <Plus size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View className="flex-row px-4 py-4 bg-white gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <TouchableOpacity
              key={tab.id}
              className={`flex-1 flex-row items-center justify-center py-3 px-4 rounded-xl ${
                isActive 
                  ? 'bg-blue-600' 
                  : 'bg-gray-100'
              }`}
              onPress={() => setActiveTab(tab.id)}
              activeOpacity={0.8}
            >
              <Icon 
                size={18} 
                color={isActive ? '#FFFFFF' : '#6B7280'} 
              />
              <Text className={`ml-2 text-sm font-semibold ${
                isActive ? 'text-white' : 'text-gray-600'
              }`}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Content */}
      <ScrollView 
        className="flex-1 px-4" 
        showsVerticalScrollIndicator={false}
      >
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyBookingsScreen;

