/**
 * Profile Screen
 * User profile and settings
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header } from '../components/layout';

export const ProfileScreen: React.FC = () => {
  return (
    <Container safe={false}>
      <Header title="Profile" />
      <View className="p-4">
        <Text className="text-base text-gray-600">
          Profile screen coming soon
        </Text>
      </View>
    </Container>
  );
};

export default ProfileScreen;

