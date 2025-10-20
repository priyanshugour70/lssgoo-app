/**
 * LssGoo Travel App - Search Screen
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter, MapPin, Clock } from 'lucide-react-native';
import { Colors } from '@/app/constants/theme';
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={Colors.icon} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Where do you want to go?"
            placeholderTextColor={Colors.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color={Colors.icon} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {searchQuery === '' && (
          <>
            {recentSearches.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Recent Searches</Text>
                {recentSearches.map((search, index) => (
                  <TouchableOpacity key={index} style={styles.recentItem}>
                    <Clock size={16} color={Colors.icon} />
                    <Text style={styles.recentText}>{search}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Popular Destinations</Text>
              <View style={styles.popularGrid}>
                {POPULAR_DESTINATIONS.map((destination, index) => (
                  <TouchableOpacity key={index} style={styles.popularItem}>
                    <MapPin size={16} color={Colors.primary} />
                    <Text style={styles.popularText}>{destination}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceSecondary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
  },
  filterButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 16,
  },
  recentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  recentText: {
    fontSize: 16,
    color: Colors.text,
    marginLeft: 12,
  },
  popularGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  popularItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceSecondary,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  popularText: {
    fontSize: 14,
    color: Colors.text,
    marginLeft: 8,
    fontWeight: '500',
  },
});

export default SearchScreen;

