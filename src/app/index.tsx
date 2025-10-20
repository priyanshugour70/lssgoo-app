/**
 * LssGoo Travel App - Root Index
 * Handles initial routing based on app state
 */

import { storage } from '@/services/storage';
import { useAuthStore } from '@/store/authStore';
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const { isAuthenticated, loadStoredAuth } = useAuthStore();

  useEffect(() => {
    checkAppState();
  }, []);

  const checkAppState = async () => {
    try {
      // Check if onboarding is completed
      const onboardingCompleted = await storage.hasCompletedOnboarding();
      setHasCompletedOnboarding(onboardingCompleted);

      // Try to load stored auth
      await loadStoredAuth();
    } catch (error) {
      console.error('Error checking app state:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#3B82F6" />
      </View>
    );
  }

  // If authenticated, go to main app
  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  // If onboarding not completed, show onboarding
  if (!hasCompletedOnboarding) {
    return <Redirect href="/onboarding" />;
  }

  // Show welcome/auth screen
  return <Redirect href="/auth/welcome" />;
}

