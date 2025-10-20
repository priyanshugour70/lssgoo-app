/**
 * LssGoo Travel App - Settings List Component
 */

import { ChevronRight } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { MenuItem } from '../types/profileTypes';

interface SettingsListProps {
  items: MenuItem[];
  onItemPress?: (index: number) => void;
}

export const SettingsList: React.FC<SettingsListProps> = ({ items, onItemPress }) => {
  return (
    <View style={tw`bg-white rounded-xl overflow-hidden shadow-md`}>
      {items.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <TouchableOpacity
            key={index}
            style={tw`flex-row items-center justify-between px-5 py-4 border-b border-gray-100`}
            onPress={() => onItemPress?.(index)}
          >
            <View style={tw`flex-row items-center flex-1`}>
              <View style={tw`w-10 h-10 rounded-full bg-blue-50 items-center justify-center mr-4`}>
                <IconComponent size={20} color="#3B82F6" />
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-base font-medium text-gray-900 mb-0.5`}>{item.title}</Text>
                <Text style={tw`text-sm text-gray-600`}>{item.subtitle}</Text>
              </View>
            </View>
            <ChevronRight size={20} color="#6B7280" />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SettingsList;

