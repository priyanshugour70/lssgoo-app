/**
 * LssGoo Travel App - Empty State Component
 * Component for empty states
 */

import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ title, description, icon }) => {
  return (
    <View style={tw`flex-1 justify-center items-center p-10`}>
      {icon && <View style={tw`mb-4`}>{icon}</View>}
      <Text style={tw`text-lg font-semibold text-gray-900 text-center mb-2`}>{title}</Text>
      {description && <Text style={tw`text-sm text-gray-600 text-center`}>{description}</Text>}
    </View>
  );
};

export default EmptyState;

