/**
 * LssGoo Travel App - Header Component
 * Main header with hamburger menu, logo, search, and notifications
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Menu, Search, Bell } from 'lucide-react-native';
import { HeaderProps } from '../../types';
import { Colors } from '../../constants/theme';
import { COMPANY_INFO } from '../../constants/company-info';

export const Header: React.FC<HeaderProps> = ({
  title,
  showSearch = true,
  showProfile = true,
  onSearchPress,
  onProfilePress,
  onMenuPress,
}) => {
  return (
    <View className="flex-row items-center justify-between px-5 py-4 bg-white border-b border-gray-200 shadow-sm">
      <View className="flex-row items-center flex-1">
        <TouchableOpacity
          className="p-2 mr-4"
          onPress={onMenuPress}
          accessibilityLabel="Open menu"
        >
          <Menu size={24} color={Colors.text} />
        </TouchableOpacity>
        
        <Text className="text-2xl font-bold text-primary-500 mr-2">
          {COMPANY_INFO.displayName}
        </Text>
        {title && (
          <Text className="text-lg font-semibold text-gray-900">
            {title}
          </Text>
        )}
      </View>
      
      <View className="flex-row items-center space-x-3">
        {showSearch && (
          <TouchableOpacity
            className="p-2 rounded-full bg-gray-50"
            onPress={onSearchPress}
            accessibilityLabel="Search trips"
          >
            <Search size={20} color={Colors.icon} />
          </TouchableOpacity>
        )}
        
        {showProfile && (
          <TouchableOpacity
            className="p-2 rounded-full bg-gray-50"
            onPress={onProfilePress}
            accessibilityLabel="Notifications"
          >
            <Bell size={20} color={Colors.icon} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};