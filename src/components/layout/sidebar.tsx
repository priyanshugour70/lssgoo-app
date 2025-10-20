/**
 * LssGoo Travel App - Sidebar Component
 * Side navigation with latest trips and quick navigation items
 */

import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
    Image,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import tw from 'twrnc';
import { COMPANY_INFO } from '../../constants/company-info';
import { QUICK_ACTIONS, SIDEBAR_NAVIGATION } from '../../data/navigation';
import { SidebarProps } from '../../types';

export const Sidebar: React.FC<SidebarProps> = ({
  isVisible,
  onClose,
  trips,
}) => {
  const getIconName = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      'map-pin': 'location',
      'star': 'star',
      'mountain': 'triangle',
      'building': 'business',
      'sun': 'sunny',
      'users': 'people',
      'heart': 'heart',
      'clock': 'time',
      'search': 'search',
      'help-circle': 'help-circle',
      'settings': 'settings',
    };
    
    return iconMap[iconName] || iconName;
  };

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={tw`flex-1 bg-black/50`}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          style={tw`flex-1 bg-white w-4/5 max-w-[300px]`}
          activeOpacity={1}
          onPress={() => {}}
        >
          <View style={tw`p-5 border-b border-gray-200 bg-blue-600`}>
            <TouchableOpacity
              style={tw`absolute top-5 right-5 p-2`}
              onPress={onClose}
              accessibilityLabel="Close sidebar"
            >
              <Ionicons name="close" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={tw`text-2xl font-bold text-white mb-1`}>{COMPANY_INFO.displayName}</Text>
            <Text style={tw`text-sm text-white opacity-90`}>{COMPANY_INFO.tagline}</Text>
          </View>

          <ScrollView style={tw`flex-1`} showsVerticalScrollIndicator={false}>
            {/* Navigation Section */}
            <View style={tw`py-4 border-b border-gray-200`}>
              <Text style={tw`text-base font-semibold text-gray-900 px-5 mb-3`}>Explore</Text>
              {SIDEBAR_NAVIGATION.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={tw`flex-row items-center py-3 px-5`}
                  onPress={() => {
                    // Handle navigation
                    onClose();
                  }}
                >
                  <View style={tw`mr-4 w-6 items-center`}>
                    <Ionicons
                      name={getIconName(item.icon) as any}
                      size={20}
                      color="#3B82F6"
                    />
                  </View>
                  <Text style={tw`text-sm text-gray-900 flex-1`}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Latest Trips Section */}
            {trips.length > 0 && (
              <View style={tw`py-4 border-b border-gray-200`}>
                <Text style={tw`text-base font-semibold text-gray-900 px-5 mb-3`}>Latest Trips</Text>
                {trips.slice(0, 3).map((trip) => (
                  <TouchableOpacity
                    key={trip.id}
                    style={tw`flex-row items-center py-2 px-5`}
                    onPress={() => {
                      // Handle trip navigation
                      onClose();
                    }}
                  >
                    <Image
                      source={{ uri: trip.imageUrl }}
                      style={tw`w-10 h-10 rounded-lg mr-3`}
                      resizeMode="cover"
                    />
                    <View style={tw`flex-1`}>
                      <Text style={tw`text-sm font-medium text-gray-900 mb-0.5`} numberOfLines={1}>
                        {trip.title}
                      </Text>
                      <Text style={tw`text-xs text-blue-600 font-semibold`}>
                        {trip.currency} {trip.price.toLocaleString()}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Quick Actions Section */}
            <View style={tw`py-4 border-b border-gray-200`}>
              <Text style={tw`text-base font-semibold text-gray-900 px-5 mb-3`}>Quick Actions</Text>
              {QUICK_ACTIONS.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={tw`flex-row items-center py-3 px-5`}
                  onPress={() => {
                    // Handle action
                    onClose();
                  }}
                >
                  <View style={tw`mr-4 w-6 items-center`}>
                    <Ionicons
                      name={getIconName(item.icon) as any}
                      size={20}
                      color="#6B7280"
                    />
                  </View>
                  <Text style={tw`text-sm text-gray-900 flex-1`}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <View style={tw`p-5 border-t border-gray-200`}>
            <Text style={tw`text-xs text-gray-500 text-center`}>
              © 2024 {COMPANY_INFO.name}. All rights reserved.
            </Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};