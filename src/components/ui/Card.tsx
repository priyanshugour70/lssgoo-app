/**
 * Card Component
 * Container with shadow and rounded corners
 */

import React from 'react';
import { View, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  variant?: 'elevated' | 'outlined' | 'filled';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  children,
  style,
  ...props
}) => {
  return (
    <View
      className={`
        rounded-xl p-4
        ${variant === 'elevated' ? 'bg-white shadow-md' : ''}
        ${variant === 'outlined' ? 'bg-white border border-gray-200' : ''}
        ${variant === 'filled' ? 'bg-gray-50' : ''}
      `}
      style={[
        variant === 'elevated' && {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 3,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default Card;

