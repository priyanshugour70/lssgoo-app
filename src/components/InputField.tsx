/**
 * LssGoo Travel App - Input Field Component
 * Beautiful reusable input with Tailwind CSS
 */

import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  helper?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  icon,
  helper,
  style,
  ...props
}) => {
  return (
    <View className="mb-4">
      {label && (
        <Text className="text-sm font-semibold text-gray-700 mb-2">
          {label}
        </Text>
      )}
      
      <View className="relative">
        {icon && (
          <View className="absolute left-4 top-3 z-10">
            {icon}
          </View>
        )}
        
        <TextInput
          className={`bg-gray-50 border rounded-xl px-4 py-3 text-base text-gray-900 ${
            icon ? 'pl-12' : ''
          } ${
            error ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-blue-500'
          }`}
          placeholderTextColor="#9CA3AF"
          style={style}
          {...props}
        />
      </View>
      
      {helper && !error && (
        <Text className="text-xs text-gray-500 mt-1">{helper}</Text>
      )}
      
      {error && (
        <Text className="text-xs text-red-600 mt-1">{error}</Text>
      )}
    </View>
  );
};

export default InputField;

