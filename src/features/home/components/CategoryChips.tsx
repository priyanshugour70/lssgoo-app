/**
 * LssGoo Travel App - Category Chips Component
 * Horizontal scrollable category chips
 */

import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { Category } from '../data/homeData';

interface CategoryChipsProps {
  categories: Category[];
  selectedCategory?: string;
  onCategoryPress?: (category: Category) => void;
}

export const CategoryChips: React.FC<CategoryChipsProps> = ({
  categories,
  selectedCategory,
  onCategoryPress,
}) => {
  return (
    <View style={tw`bg-white py-4`}>
      <Text style={tw`text-lg font-bold text-gray-900 px-5 mb-4`}>
        Categories
      </Text>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={tw`px-5`}
        contentContainerStyle={tw`gap-3`}
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category.id;
          return (
            <TouchableOpacity
              key={category.id}
              style={tw`flex-row items-center px-4 py-2 rounded-full border ${
                isSelected 
                  ? 'bg-orange-500 border-orange-500' 
                  : 'bg-gray-100 border-gray-200'
              }`}
              onPress={() => onCategoryPress?.(category)}
            >
              <Text style={tw`text-lg mr-2`}>{category.icon}</Text>
              <Text
                style={tw`font-semibold ${
                  isSelected ? 'text-white' : 'text-gray-700'
                }`}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
