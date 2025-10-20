/**
 * LssGoo Travel App - Home Header Component (Updated)
 */

import { useAuthStore } from '@/store/authStore';
import { Bell, Search } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

interface HeaderProps {
  onSearchPress?: () => void; // Explore/Search screen redirect
}

export const Header: React.FC<HeaderProps> = ({ onSearchPress }) => {
  const { user } = useAuthStore();

  return (
    <View style={tw`bg-white px-5 pt-6 pb-4`}>
      
      {/* Top Row: Brand + Notification + Profile */}
      <View style={tw`flex-row items-center justify-between mb-4`}>
        {/* Brand Name */}
        <Text style={tw`text-2xl font-bold text-gray-900`}>
          LssGoo
        </Text>

        {/* Notification + Profile */}
        <View style={tw`flex-row items-center gap-3`}>
          {/* Search Icon - Top redirect to Explore */}
          <TouchableOpacity
            onPress={onSearchPress}
            style={tw`p-2 rounded-full bg-gray-100`}
            accessibilityLabel="Explore / Search"
          >
            <Search size={20} color="#6B7280" />
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`p-2 rounded-full bg-gray-100`}
            accessibilityLabel="Notifications"
          >
            <Bell size={20} color="#6B7280" />
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`flex-row items-center bg-white rounded-full px-3 py-2 border border-gray-200`}
            accessibilityLabel="User profile"
          >
            {user?.avatar ? (
              <Image
                source={{ uri: user.avatar }}
                style={tw`w-6 h-6 rounded-full mr-2`}
                resizeMode="cover"
              />
            ) : (
              <View style={tw`w-6 h-6 rounded-full bg-orange-500 mr-2 items-center justify-center`}>
                <Text style={tw`text-white text-xs font-bold`}>
                  {user?.name?.charAt(0) || 'G'}
                </Text>
              </View>
            )}
            <Text style={tw`text-sm font-medium text-gray-900`}>
              {user?.name || 'Guest'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Slogan Row */}
      <View style={tw`mb-4`}>
        <Text style={tw`text-xl font-bold text-gray-900 leading-7`}>
          Discover the wonders of the{' '}
          <Text style={tw`text-orange-500`}>world!</Text>
        </Text>
      </View>

      {/* Search Bar (Big) */}
      <TouchableOpacity
        style={tw`flex-row items-center bg-gray-100 rounded-full px-4 py-3`}
        onPress={onSearchPress}
      >
        <Search size={20} color="#6B7280" />
        <Text style={tw`ml-3 text-gray-500 flex-1`}>
          Search destinations, hotels, activities...
        </Text>
      </TouchableOpacity>
    </View>
  );
};
