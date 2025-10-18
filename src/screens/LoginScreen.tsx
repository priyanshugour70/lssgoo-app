/**
 * Login Screen
 * User authentication screen
 */

import React from 'react';
import { View, Text } from 'react-native';
import { Container } from '../components/layout';

export const LoginScreen: React.FC = () => {
  return (
    <Container centered>
      <View className="p-6 w-full">
        <Text className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sign In
        </Text>
        <Text className="text-base text-gray-600 text-center">
          Login screen coming soon
        </Text>
      </View>
    </Container>
  );
};

export default LoginScreen;

