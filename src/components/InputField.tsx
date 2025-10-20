/**
 * LssGoo Travel App - Input Field Component
 * Beautiful reusable input with Tailwind CSS
 */

import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import tw from 'twrnc';

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
    <View style={tw`mb-4`}>
      {label && (
        <Text style={tw`text-sm font-semibold text-gray-700 mb-2`}>
          {label}
        </Text>
      )}
      
      <View style={tw`relative`}>
        {icon && (
          <View style={tw`absolute left-4 top-3 z-10`}>
            {icon}
          </View>
        )}
        
        <TextInput
          style={[
            tw`bg-gray-50 border rounded-xl px-4 py-3 text-base text-gray-900 ${
              icon ? 'pl-12' : ''
            } ${
              error ? 'border-red-500 bg-red-50' : 'border-gray-200'
            }`,
            style
          ]}
          placeholderTextColor="#9CA3AF"
          {...props}
        />
      </View>
      
      {helper && !error && (
        <Text style={tw`text-xs text-gray-500 mt-1`}>{helper}</Text>
      )}
      
      {error && (
        <Text style={tw`text-xs text-red-600 mt-1`}>{error}</Text>
      )}
    </View>
  );
};

export default InputField;

