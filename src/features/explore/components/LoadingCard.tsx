/**
 * LssGoo Travel App - Loading Card Component
 * Skeleton loader for content cards
 */

import React from 'react';
import { View } from 'react-native';
import tw from 'twrnc';

export const LoadingCard = () => {
  return (
    <View style={tw`bg-white mb-4`}>
      {/* Header Skeleton */}
      <View style={tw`flex-row items-center px-4 py-3`}>
        <View style={tw`w-8 h-8 rounded-full bg-gray-200 mr-3`} />
        <View style={tw`flex-1`}>
          <View style={tw`h-4 bg-gray-200 rounded w-1/3 mb-2`} />
          <View style={tw`h-3 bg-gray-200 rounded w-1/2`} />
        </View>
      </View>

      {/* Media Skeleton */}
      <View style={tw`w-full h-96 bg-gray-200`} />

      {/* Actions Skeleton */}
      <View style={tw`flex-row px-4 py-3 gap-4`}>
        <View style={tw`w-6 h-6 bg-gray-200 rounded`} />
        <View style={tw`w-6 h-6 bg-gray-200 rounded`} />
        <View style={tw`w-6 h-6 bg-gray-200 rounded`} />
      </View>

      {/* Stats Skeleton */}
      <View style={tw`px-4 pb-2`}>
        <View style={tw`h-4 bg-gray-200 rounded w-1/4`} />
      </View>
    </View>
  );
};
