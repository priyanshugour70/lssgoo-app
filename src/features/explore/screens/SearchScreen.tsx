/**
 * LssGoo Travel App - Search Screen
 */

import { Clock, Filter, MapPin, Search } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { useSearch } from '../hooks/useSearch';

const POPULAR_DESTINATIONS = [
  'Maldives',
  'Switzerland',
  'Thailand',
  'Greece',
  'Iceland',
  'Dubai',
];

export const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { recentSearches, loadRecentSearches } = useSearch();

  useEffect(() => {
    loadRecentSearches();
  }, []);

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <View style={tw`px-5 py-4 border-b border-gray-200`}>
        <Text style={tw`text-3xl font-bold text-gray-900`}>Search</Text>
      </View>

      <View style={tw`px-5 py-4`}>
        <View style={tw`flex-row items-center bg-gray-100 rounded-xl px-4 py-3 border border-gray-200`}>
          <Search size={20} color="#6B7280" style={tw`mr-3`} />
          <TextInput
            style={tw`flex-1 text-base text-gray-900`}
            placeholder="Where do you want to go?"
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={tw`p-1`}>
            <Filter size={20} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={tw`flex-1 px-5`} showsVerticalScrollIndicator={false}>
        {searchQuery === '' && (
          <>
            {recentSearches.length > 0 && (
              <View style={tw`mb-8`}>
                <Text style={tw`text-lg font-semibold text-gray-900 mb-4`}>Recent Searches</Text>
                {recentSearches.map((search, index) => (
                  <TouchableOpacity key={index} style={tw`flex-row items-center py-3 border-b border-gray-100`}>
                    <Clock size={16} color="#6B7280" />
                    <Text style={tw`text-base text-gray-900 ml-3`}>{search}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <View style={tw`mb-8`}>
              <Text style={tw`text-lg font-semibold text-gray-900 mb-4`}>Popular Destinations</Text>
              <View style={tw`flex-row flex-wrap gap-3`}>
                {POPULAR_DESTINATIONS.map((destination, index) => (
                  <TouchableOpacity key={index} style={tw`flex-row items-center bg-gray-100 px-4 py-2.5 rounded-full border border-gray-200`}>
                    <MapPin size={16} color="#3B82F6" />
                    <Text style={tw`text-sm text-gray-900 ml-2 font-medium`}>{destination}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

