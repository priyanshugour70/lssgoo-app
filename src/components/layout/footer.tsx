/**
 * LssGoo Travel App - Footer Component
 * Bottom navigation with Home, Explore, Bookings, and Account tabs
 */

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { FOOTER_NAVIGATION } from '../../data/navigation';
import { FooterProps } from '../../types';

export const Footer: React.FC<FooterProps> = ({
  activeTab,
  onTabPress,
}) => {
  const getIconName = (iconName: string, isActive: boolean) => {
    const iconMap: { [key: string]: { active: string; inactive: string } } = {
      home: { active: 'home', inactive: 'home-outline' },
      compass: { active: 'compass', inactive: 'compass-outline' },
      calendar: { active: 'calendar', inactive: 'calendar-outline' },
      user: { active: 'person', inactive: 'person-outline' },
    };
    
    return iconMap[iconName]?.[isActive ? 'active' : 'inactive'] || iconName;
  };

  return (
    <View style={tw`flex-row bg-white border-t border-gray-200 py-2 px-1 shadow-lg`}>
      {FOOTER_NAVIGATION.map((item) => {
        const isActive = activeTab === item.id;
        const iconName = getIconName(item.icon, isActive);
        
        return (
          <TouchableOpacity
            key={item.id}
            style={tw`flex-1 items-center py-2 px-1`}
            onPress={() => onTabPress(item.id)}
            accessibilityLabel={item.title}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
          >
            <View style={tw`mb-1`}>
              <Ionicons
                name={iconName as any}
                size={24}
                color={isActive ? '#3B82F6' : '#9CA3AF'}
              />
            </View>
            <Text
              style={tw`text-xs font-medium ${isActive ? 'text-blue-600' : 'text-gray-400'}`}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};