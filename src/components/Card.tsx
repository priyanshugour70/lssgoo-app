/**
 * LssGoo Travel App - Card Component
 * Beautiful reusable card with Tailwind CSS
 */

import React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import tw from 'twrnc';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'small' | 'medium' | 'large';
  onPress?: () => void;
  style?: ViewStyle;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'medium',
  onPress,
  style,
  className,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'elevated':
        return 'bg-white shadow-lg border border-gray-100';
      case 'outlined':
        return 'bg-white border-2 border-gray-200';
      case 'default':
      default:
        return 'bg-white shadow-md border border-gray-50';
    }
  };

  const getPaddingClasses = () => {
    switch (padding) {
      case 'none':
        return '';
      case 'small':
        return 'p-3';
      case 'medium':
        return 'p-4';
      case 'large':
        return 'p-6';
      default:
        return 'p-4';
    }
  };

  const cardClasses = `rounded-xl ${getVariantClasses()} ${getPaddingClasses()} ${className || ''}`;

  if (onPress) {
    return (
      <TouchableOpacity
        style={[tw`${cardClasses}`, style]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View style={[tw`${cardClasses}`, style]}>
      {children}
    </View>
  );
};

export default Card;

