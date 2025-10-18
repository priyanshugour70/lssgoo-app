/**
 * Button Component
 * Reusable button with different variants
 */

import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`
        rounded-lg items-center justify-center
        ${variant === 'primary' ? 'bg-blue-600' : ''}
        ${variant === 'secondary' ? 'bg-orange-500' : ''}
        ${variant === 'outline' ? 'bg-transparent border-2 border-blue-600' : ''}
        ${variant === 'ghost' ? 'bg-transparent' : ''}
        ${size === 'small' ? 'px-4 py-2' : ''}
        ${size === 'medium' ? 'px-6 py-3' : ''}
        ${size === 'large' ? 'px-8 py-4' : ''}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50' : ''}
      `}
      style={style}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'outline' ? '#007AFF' : '#FFFFFF'} />
      ) : (
        <Text
          className={`
            font-semibold
            ${variant === 'primary' || variant === 'secondary' ? 'text-white' : ''}
            ${variant === 'outline' ? 'text-blue-600' : ''}
            ${variant === 'ghost' ? 'text-blue-600' : ''}
            ${size === 'small' ? 'text-sm' : ''}
            ${size === 'medium' ? 'text-base' : ''}
            ${size === 'large' ? 'text-lg' : ''}
          `}
          style={textStyle}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;

