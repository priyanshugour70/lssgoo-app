/**
 * Home Screen
 * Main landing screen of the app
 */

import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Container } from '../components/layout';

export const HomeScreen: React.FC = () => {
  return (
    <Container>
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to LssGoo
          </Text>
          <Text className="text-lg text-gray-600 mb-6">
            Let's Go Explore
          </Text>
          
          <View className="bg-blue-50 p-4 rounded-xl mb-4">
            <Text className="text-base text-gray-700">
              Discover amazing destinations and create unforgettable memories
            </Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

