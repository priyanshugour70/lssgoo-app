/**
 * LssGoo Travel App - Header Component
 * Modern header with logo, search, notifications, and user profile
 */

import { Bell, Search } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { HeaderProps } from '../../types';

export const Header: React.FC<HeaderProps> = ({
  title,
  showSearch = true,
  showProfile = true,
  onSearchPress,
  onProfilePress,
  onMenuPress,
  user,
}) => {
  return (
    <View style={tw`flex-row items-center justify-between px-5 py-4 bg-white`}>
      {/* Left side - Logo and title */}
      <View style={tw`flex-row items-center flex-1`}>
        <Text style={tw`text-2xl font-bold text-gray-900`}>
          {title || 'Discover the wonders of the '}
          {!title && (
            <>
              <Text style={tw`text-orange-500`}>world!</Text>
            </>
          )}
        </Text>
      </View>
      
      {/* Right side - Search, Notifications, and Profile */}
      <View style={tw`flex-row items-center gap-3`}>
        {showSearch && (
          <TouchableOpacity
            style={tw`p-2 rounded-full bg-gray-100`}
            onPress={onSearchPress}
            accessibilityLabel="Search trips"
          >
            <Search size={20} color="#6B7280" />
          </TouchableOpacity>
        )}
        
        <TouchableOpacity
          style={tw`p-2 rounded-full bg-gray-100`}
          onPress={onProfilePress}
          accessibilityLabel="Notifications"
        >
          <Bell size={20} color="#6B7280" />
        </TouchableOpacity>
        
        {showProfile && (
          <TouchableOpacity
            style={tw`flex-row items-center bg-white rounded-full px-3 py-2 border border-gray-200`}
            onPress={onProfilePress}
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
        )}
      </View>
    </View>
  );
};