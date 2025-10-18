/**
 * Header Component
 * Navigation header with title and optional actions
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBackPress?: () => void;
  rightAction?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showBack = false,
  onBackPress,
  rightAction,
}) => {
  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <View className="flex-row items-center flex-1">
        {showBack && onBackPress && (
          <TouchableOpacity onPress={onBackPress} className="mr-3 p-2">
            <Text className="text-blue-600 text-lg">←</Text>
          </TouchableOpacity>
        )}
        <Text className="text-xl font-bold text-gray-900">{title}</Text>
      </View>
      {rightAction && <View>{rightAction}</View>}
    </View>
  );
};

export default Header;

