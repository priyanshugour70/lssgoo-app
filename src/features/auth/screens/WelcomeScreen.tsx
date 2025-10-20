/**
 * LssGoo Travel App - Welcome Screen
 * Entry point after onboarding
 */

import COMPANY_INFO from '@/app/constants/companyInfo';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

export const WelcomeScreen = () => {
  const handleLogin = () => {
    console.log('Login button pressed');
    router.push('/auth/login');
  };

  const handleSignup = () => {
    console.log('Signup button pressed');
    router.push('/auth/signup');
  };

  console.log('WelcomeScreen rendering');

  return (
    <View style={{ flex: 1, backgroundColor: '#1e3a8a' }}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800' }}
        style={{ width, height, position: 'absolute' }}
        resizeMode="cover"
      />
      
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
        style={{ width, height, position: 'absolute' }}
      />

      <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={{ paddingTop: 40, alignItems: 'center' }}>
          <Text style={{ fontSize: 36, fontWeight: 'bold', color: 'white', marginBottom: 8 }}>
            {COMPANY_INFO.displayName}
          </Text>
          <Text style={{ fontSize: 16, color: 'white', opacity: 0.9 }}>
            {COMPANY_INFO.tagline}
          </Text>
        </View>

        <View style={{ paddingHorizontal: 24, paddingBottom: 32 }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 12, textAlign: 'center' }}>
            Welcome to Your Next Adventure
          </Text>
          <Text style={{ fontSize: 16, color: 'white', opacity: 0.9, textAlign: 'center', marginBottom: 32 }}>
            Discover amazing places and create unforgettable memories with {COMPANY_INFO.displayName}
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#2563eb',
              paddingVertical: 16,
              borderRadius: 12,
              alignItems: 'center',
              marginBottom: 16,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 6,
            }}
            onPress={handleSignup}
            activeOpacity={0.8}
          >
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              paddingVertical: 16,
              borderRadius: 12,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.3)',
            }}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>
              I Already Have an Account
            </Text>
          </TouchableOpacity>

          <Text style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginTop: 24 }}>
            By continuing, you agree to our{'\n'}
            <Text style={{ textDecorationLine: 'underline' }}>Terms of Service</Text> and{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy</Text>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;
