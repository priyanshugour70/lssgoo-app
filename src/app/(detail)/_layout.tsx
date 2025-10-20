/**
 * LssGoo Travel App - Detail Routes Layout
 * Modal layout for content and place details
 */

import { Stack } from 'expo-router';
import React from 'react';

export default function DetailLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
      }}
    >
      <Stack.Screen 
        name="content-detail" 
        options={{
          presentation: 'card',
          animationEnabled: true,
          gestureEnabled: true,
        }}
      />
      <Stack.Screen 
        name="place-detail" 
        options={{
          presentation: 'card',
          animationEnabled: true,
          gestureEnabled: true,
        }}
      />
    </Stack>
  );
}
