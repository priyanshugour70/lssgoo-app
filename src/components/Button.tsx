/**
 * LssGoo Travel App - Button Component
 * Beautiful reusable button with Tailwind CSS
 */

import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, ViewStyle } from 'react-native';
import tw from 'twrnc';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = true,
  icon,
  style,
  className,
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 shadow-md';
      case 'secondary':
        return 'bg-gray-600 shadow-md';
      case 'outline':
        return 'bg-transparent border-2 border-blue-600';
      case 'ghost':
        return 'bg-transparent';
      default:
        return 'bg-blue-600 shadow-md';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'py-2 px-4';
      case 'medium':
        return 'py-3 px-6';
      case 'large':
        return 'py-4 px-8';
      default:
        return 'py-3 px-6';
    }
  };

  const getTextVariantClasses = () => {
    switch (variant) {
      case 'primary':
      case 'secondary':
        return 'text-white';
      case 'outline':
        return 'text-blue-600';
      case 'ghost':
        return 'text-gray-700';
      default:
        return 'text-white';
    }
  };

  const getTextSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'text-sm';
      case 'medium':
        return 'text-base';
      case 'large':
        return 'text-lg';
      default:
        return 'text-base';
    }
  };

  const buttonClasses = `rounded-xl items-center justify-center flex-row ${
    fullWidth ? 'w-full' : ''
  } ${getVariantClasses()} ${getSizeClasses()} ${
    disabled || loading ? 'opacity-50' : 'opacity-100'
  } ${className || ''}`;

  return (
    <TouchableOpacity
      style={[tw`${buttonClasses}`, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'outline' || variant === 'ghost' ? '#3B82F6' : '#FFFFFF'} 
        />
      ) : (
        <>
          {icon && <>{icon}</>}
          <Text
            style={tw`font-semibold ${getTextVariantClasses()} ${getTextSizeClasses()}`}
          >
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;

