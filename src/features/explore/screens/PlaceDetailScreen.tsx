/**
 * LssGoo Travel App - Place Detail Screen
 * Detailed view of a place with photos, info, reviews, and related content
 */

import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Share2 } from 'lucide-react-native';
import React from 'react';
import {
    ActivityIndicator,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import {
    PlaceInfoCard,
    PlacePhotoGallery,
    ReviewsSection,
} from '../components';
import { usePlaceDetails } from '../hooks/usePlaceDetails';

export const PlaceDetailScreen = () => {
  const { placeId } = useLocalSearchParams<{ placeId: string }>();
  const { place, relatedContent, loading, error } = usePlaceDetails(
    placeId || '1'
  );

  if (loading) {
    return (
      <SafeAreaView style={tw`flex-1 bg-white items-center justify-center`}>
        <ActivityIndicator size="large" color="#FF6B35" />
      </SafeAreaView>
    );
  }

  if (error || !place) {
    return (
      <SafeAreaView style={tw`flex-1 bg-white items-center justify-center`}>
        <Text style={tw`text-gray-600 text-lg`}>
          {error || 'Place not found'}
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      {/* Header */}
      <View style={tw`flex-row items-center justify-between px-4 py-4 bg-white`}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color="#111827" />
        </TouchableOpacity>
        <Text style={tw`text-lg font-bold text-gray-900 flex-1 ml-4`}>
          {place.name}
        </Text>
        <TouchableOpacity>
          <Share2 size={24} color="#111827" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Photo Gallery */}
        {place.photos.length > 0 && (
          <PlacePhotoGallery photos={place.photos} />
        )}

        {/* Place Info */}
        <PlaceInfoCard place={place} />

        {/* Reviews */}
        <ReviewsSection reviews={place.reviews} />

        {/* History & Culture */}
        <View style={tw`bg-white p-4 my-2`}>
          <Text style={tw`text-xl font-bold text-gray-900 mb-3`}>
            History & Culture
          </Text>
          <Text style={tw`text-gray-700 leading-6 mb-3`}>
            {place.history}
          </Text>
          <Text style={tw`text-gray-700 leading-6`}>
            {place.culture}
          </Text>
        </View>

        {/* Travel Tips */}
        {place.travelTips.length > 0 && (
          <View style={tw`bg-white p-4 my-2`}>
            <Text style={tw`text-xl font-bold text-gray-900 mb-3`}>
              Travel Tips
            </Text>
            {place.travelTips.map((tip, index) => (
              <View key={index} style={tw`flex-row items-start mb-2`}>
                <Text style={tw`text-orange-500 mr-3 font-bold`}>
                  ✓
                </Text>
                <Text style={tw`text-gray-700 flex-1`}>
                  {tip}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* Costs */}
        <View style={tw`bg-white p-4 my-2`}>
          <Text style={tw`text-xl font-bold text-gray-900 mb-3`}>
            Estimated Costs
          </Text>
          <View style={tw`gap-2`}>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-700`}>Accommodation</Text>
              <Text style={tw`font-semibold text-gray-900`}>
                {place.costs.accommodation}
              </Text>
            </View>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-700`}>Food</Text>
              <Text style={tw`font-semibold text-gray-900`}>
                {place.costs.food}
              </Text>
            </View>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-700`}>Transport</Text>
              <Text style={tw`font-semibold text-gray-900`}>
                {place.costs.transport}
              </Text>
            </View>
            <View style={tw`flex-row justify-between`}>
              <Text style={tw`text-gray-700`}>Activities</Text>
              <Text style={tw`font-semibold text-gray-900`}>
                {place.costs.activities}
              </Text>
            </View>
          </View>
        </View>

        {/* Accessibility */}
        <View style={tw`bg-white p-4 my-2`}>
          <Text style={tw`text-xl font-bold text-gray-900 mb-3`}>
            Accessibility
          </Text>
          <View style={tw`gap-2`}>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`mr-2`}>
                {place.accessibility.wheelchair ? '✓' : '✗'}
              </Text>
              <Text style={tw`text-gray-700`}>Wheelchair Accessible</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`mr-2`}>
                {place.accessibility.publicTransport ? '✓' : '✗'}
              </Text>
              <Text style={tw`text-gray-700`}>Public Transport Available</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <Text style={tw`mr-2`}>
                {place.accessibility.parking ? '✓' : '✗'}
              </Text>
              <Text style={tw`text-gray-700`}>Parking Available</Text>
            </View>
          </View>
        </View>

        {/* CTA Button */}
        <View style={tw`p-4 mb-6`}>
          <TouchableOpacity style={tw`bg-orange-500 py-4 rounded-lg items-center`}>
            <Text style={tw`text-white font-bold text-lg`}>
              Plan Your Trip
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlaceDetailScreen;
