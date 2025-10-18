/**
 * Input Component
 * Reusable text input with validation
 */

import React, { useState } from 'react';
import { View, TextInput, Text, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  containerClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  containerClassName,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={containerClassName}>
      {label && (
        <Text className="text-gray-700 font-medium mb-2 text-base">
          {label}
        </Text>
      )}
      <TextInput
        {...props}
        onFocus={(e) => {
          setIsFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          props.onBlur?.(e);
        }}
        className={`
          border rounded-lg px-4 py-3 text-base
          ${error ? 'border-red-500' : isFocused ? 'border-blue-600' : 'border-gray-300'}
          ${props.editable === false ? 'bg-gray-100' : 'bg-white'}
        `}
        placeholderTextColor="#9CA3AF"
      />
      {error && (
        <Text className="text-red-500 text-sm mt-1">
          {error}
        </Text>
      )}
      {helperText && !error && (
        <Text className="text-gray-500 text-sm mt-1">
          {helperText}
        </Text>
      )}
    </View>
  );
};

export default Input;

