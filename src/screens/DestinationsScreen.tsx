/**
 * Destinations Screen
 * Browse all available destinations
 */

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container, Header } from '../components/layout';

export const DestinationsScreen: React.FC = () => {
  return (
    <Container safe={false}>
      <Header title="Destinations" />
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-base text-gray-600">
            Explore our curated destinations
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default DestinationsScreen;

