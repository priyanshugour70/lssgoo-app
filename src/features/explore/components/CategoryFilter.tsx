/**
 * LssGoo Travel App - Category Filter Component
 * Horizontal scrollable category filter chips
 */

import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { EXPLORE_CATEGORIES } from '../data/exploreData';

interface CategoryFilterProps {
  selectedCategory?: string;
  onCategorySelect?: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategorySelect
}) => {
  return (
    <View style={tw`bg-white py-3`}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`px-4`}
        contentContainerStyle={tw`gap-3`}
      >
        {/* All Categories */}
        <TouchableOpacity
          style={tw`flex-row items-center px-4 py-2 rounded-full border ${
            !selectedCategory 
              ? 'bg-orange-500 border-orange-500' 
              : 'bg-gray-100 border-gray-200'
          }`}
          onPress={() => onCategorySelect?.('')}
        >
          <Text style={tw`text-lg mr-2`}>🌍</Text>
          <Text
            style={tw`font-semibold ${
              !selectedCategory ? 'text-white' : 'text-gray-700'
            }`}
          >
            All
          </Text>
        </TouchableOpacity>

        {/* Category Chips */}
        {EXPLORE_CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={tw`flex-row items-center px-4 py-2 rounded-full border ${
              selectedCategory === category.id
                ? 'bg-orange-500 border-orange-500'
                : 'bg-gray-100 border-gray-200'
            }`}
            onPress={() => onCategorySelect?.(category.id)}
          >
            <Text style={tw`text-lg mr-2`}>{category.icon}</Text>
            <Text
              style={tw`font-semibold ${
                selectedCategory === category.id ? 'text-white' : 'text-gray-700'
              }`}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
