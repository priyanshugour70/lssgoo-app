/**
 * LssGoo Travel App - Search Bar Component
 * Search input for explore content
 */

import { Search, X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

interface SearchBarProps {
  onSearch?: (query: string) => void;
  onClear?: () => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  onClear,
  placeholder = 'Search destinations, activities...'
}) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
    onClear?.();
  };

  return (
    <View style={tw`bg-white px-4 py-3`}>
      <View style={tw`flex-row items-center bg-gray-100 rounded-full px-4 py-3`}>
        <Search size={20} color="#6B7280" />
        <TextInput
          style={tw`flex-1 ml-3 text-gray-900`}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={tw`ml-2`}>
            <X size={20} color="#6B7280" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
