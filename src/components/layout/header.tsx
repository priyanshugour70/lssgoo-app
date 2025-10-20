/**
 * LssGoo Travel App - Header Component
 * Main header with hamburger menu, logo, search, and notifications
 */

import { Bell, Menu, Search } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { COMPANY_INFO } from '../../constants/company-info';
import { HeaderProps } from '../../types';

export const Header: React.FC<HeaderProps> = ({
  title,
  showSearch = true,
  showProfile = true,
  onSearchPress,
  onProfilePress,
  onMenuPress,
}) => {
  return (
    <View style={tw`flex-row items-center justify-between px-5 py-4 bg-white border-b border-gray-200 shadow-sm`}>
      <View style={tw`flex-row items-center flex-1`}>
        <TouchableOpacity
          style={tw`p-2 mr-4`}
          onPress={onMenuPress}
          accessibilityLabel="Open menu"
        >
          <Menu size={24} color="#111827" />
        </TouchableOpacity>
        
        <Text style={tw`text-2xl font-bold text-blue-600 mr-2`}>
          {COMPANY_INFO.displayName}
        </Text>
        {title && (
          <Text style={tw`text-lg font-semibold text-gray-900`}>
            {title}
          </Text>
        )}
      </View>
      
      <View style={tw`flex-row items-center gap-3`}>
        {showSearch && (
          <TouchableOpacity
            style={tw`p-2 rounded-full bg-gray-50`}
            onPress={onSearchPress}
            accessibilityLabel="Search trips"
          >
            <Search size={20} color="#6B7280" />
          </TouchableOpacity>
        )}
        
        {showProfile && (
          <TouchableOpacity
            style={tw`p-2 rounded-full bg-gray-50`}
            onPress={onProfilePress}
            accessibilityLabel="Notifications"
          >
            <Bell size={20} color="#6B7280" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};