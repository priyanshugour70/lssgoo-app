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
import tw from 'twrnc';

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
    <View style={tw`flex-1 bg-blue-900`}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800' }}
        style={[tw`absolute`, { width, height }]}
        resizeMode="cover"
      />
      
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.7)']}
        style={[tw`absolute`, { width, height }]}
      />

      <SafeAreaView style={tw`flex-1 justify-between`}>
        <View style={tw`pt-10 items-center`}>
          <Text style={tw`text-4xl font-bold text-white mb-2`}>
            {COMPANY_INFO.displayName}
          </Text>
          <Text style={tw`text-base text-white opacity-90`}>
            {COMPANY_INFO.tagline}
          </Text>
        </View>

        <View style={tw`px-6 pb-8`}>
          <Text style={tw`text-3xl font-bold text-white mb-3 text-center`}>
            Welcome to Your Next Adventure
          </Text>
          <Text style={tw`text-base text-white opacity-90 text-center mb-8`}>
            Discover amazing places and create unforgettable memories with {COMPANY_INFO.displayName}
          </Text>

          <TouchableOpacity
            style={tw`bg-blue-600 py-4 rounded-xl items-center mb-4 shadow-lg`}
            onPress={handleSignup}
            activeOpacity={0.8}
          >
            <Text style={tw`text-white text-lg font-semibold`}>Get Started</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={tw`bg-white bg-opacity-20 py-4 rounded-xl items-center border border-white border-opacity-30`}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={tw`text-white text-base font-medium`}>
              I Already Have an Account
            </Text>
          </TouchableOpacity>

          <Text style={tw`text-xs text-white opacity-70 text-center mt-6`}>
            By continuing, you agree to our{'\n'}
            <Text style={tw`underline`}>Terms of Service</Text> and{' '}
            <Text style={tw`underline`}>Privacy Policy</Text>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default WelcomeScreen;
