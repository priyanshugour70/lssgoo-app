/**
 * LssGoo Travel App - Plan Trip CTA Component
 * Call-to-action button for planning trips
 */

import { ArrowRight } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

interface PlanTripCTAProps {
  onPress?: () => void;
}

export const PlanTripCTA: React.FC<PlanTripCTAProps> = ({ onPress }) => {
  return (
    <View style={tw`bg-white py-6 px-5`}>
      <TouchableOpacity
        style={tw`bg-orange-500 rounded-2xl py-4 px-6 flex-row items-center justify-center`}
        onPress={onPress}
      >
        <Text style={tw`text-white text-lg font-bold mr-2`}>
          Start Planning Your Trip
        </Text>
        <ArrowRight size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};
