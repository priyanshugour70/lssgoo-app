/**
 * LssGoo Travel App - Place Info Card Component
 * Display place details, weather, best season, etc.
 */

import { Cloud, Leaf, MapPin } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { PlaceDetail } from '../data/exploreData';

interface PlaceInfoCardProps {
  place: PlaceDetail;
}

export const PlaceInfoCard: React.FC<PlaceInfoCardProps> = ({ place }) => {
  return (
    <View style={tw`bg-white p-4`}>
      {/* Title and Location */}
      <View style={tw`mb-4`}>
        <Text style={tw`text-2xl font-bold text-gray-900 mb-1`}>
          {place.name}
        </Text>
        <View style={tw`flex-row items-center`}>
          <MapPin size={16} color="#FF6B35" />
          <Text style={tw`text-gray-600 ml-1`}>
            {place.region}, {place.country}
          </Text>
        </View>
      </View>

      {/* Description */}
      <Text style={tw`text-gray-700 leading-6 mb-4`}>
        {place.description}
      </Text>

      {/* Best Season */}
      <View style={tw`mb-4`}>
        <View style={tw`flex-row items-center mb-2`}>
          <Leaf size={18} color="#10B981" />
          <Text style={tw`font-semibold text-gray-900 ml-2`}>Best Season</Text>
        </View>
        <View style={tw`flex-row flex-wrap gap-2`}>
          {place.bestSeason.map((season) => (
            <View
              key={season}
              style={tw`bg-green-100 px-3 py-1 rounded-full`}
            >
              <Text style={tw`text-green-700 text-sm font-medium`}>
                {season}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Weather */}
      <View style={tw`mb-4`}>
        <View style={tw`flex-row items-center mb-2`}>
          <Cloud size={18} color="#3B82F6" />
          <Text style={tw`font-semibold text-gray-900 ml-2`}>Weather</Text>
        </View>
        <Text style={tw`text-gray-700`}>
          🌡️ {place.weather.temperature}
        </Text>
        <Text style={tw`text-gray-700`}>
          🌥️ {place.weather.conditions}
        </Text>
      </View>

      {/* Activities */}
      {place.activities.length > 0 && (
        <View style={tw`mb-4`}>
          <Text style={tw`font-semibold text-gray-900 mb-2`}>Activities</Text>
          <View style={tw`flex-row flex-wrap gap-2`}>
            {place.activities.map((activity, index) => (
              <View
                key={index}
                style={tw`bg-orange-100 px-3 py-1 rounded-full`}
              >
                <Text style={tw`text-orange-700 text-sm`}>
                  {activity}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Safety */}
      <View style={tw`mb-4 p-3 bg-blue-50 rounded-lg`}>
        <Text style={tw`font-semibold text-gray-900 mb-2`}>Safety Level</Text>
        <Text style={tw`text-blue-700 capitalize`}>
          {place.safety.level}
        </Text>
      </View>
    </View>
  );
};
