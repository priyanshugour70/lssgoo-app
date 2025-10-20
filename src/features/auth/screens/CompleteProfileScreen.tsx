/**
 * LssGoo Travel App - Complete Profile Screen
 * For new users after OTP verification
 */

import COMPANY_INFO from '@/app/constants/companyInfo';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { storage } from '@/services/storage';
import { useAuthStore } from '@/store/authStore';
import { router, useLocalSearchParams } from 'expo-router';
import { Camera, User } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import tw from 'twrnc';
import { authApi } from '../api/authApi';

export const CompleteProfileScreen = () => {
  const params = useLocalSearchParams<{ phone: string; name?: string; email?: string }>();
  const [formData, setFormData] = useState({
    name: params.name || '',
    email: params.email || '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore(state => state.setUser);
  const setToken = useAuthStore(state => state.setToken);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    if (!formData.name || formData.name.length < 2) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Name',
        text2: 'Please enter your full name',
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Email',
        text2: 'Please enter a valid email address',
      });
      return false;
    }

    if (!formData.password || formData.password.length < 6) {
      Toast.show({
        type: 'error',
        text1: 'Weak Password',
        text2: 'Password must be at least 6 characters',
      });
      return false;
    }

    return true;
  };

  const handleCompleteProfile = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await authApi.signup({
        name: formData.name,
        email: formData.email,
        phone: params.phone,
        password: formData.password,
      });

      if (response.success && response.user && response.token) {
        setUser(response.user);
        setToken(response.token);
        await storage.saveUser(response.user);
        await storage.saveToken(response.token);

        Toast.show({
          type: 'success',
          text1: 'Welcome to LssGoo!',
          text2: `Account created successfully`,
        });

        // Navigate to profile for first-time setup
        router.replace('/(tabs)/profile');
      } else {
        Toast.show({
          type: 'error',
          text1: 'Signup Failed',
          text2: response.error || 'Failed to create account',
        });
      }
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message || 'Something went wrong',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={tw`flex-1`}
      >
        <ScrollView
          style={tw`flex-1 px-6`}
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={tw`flex-1 pt-8`}>
            <Text style={tw`text-3xl font-bold text-blue-600 mb-8`}>
              {COMPANY_INFO.displayName}
            </Text>

            <Text style={tw`text-3xl font-bold text-gray-900 mb-3`}>
              Complete Your Profile
            </Text>
            <Text style={tw`text-base text-gray-600 mb-8`}>
              Tell us about yourself to get started
            </Text>

            <View style={tw`items-center mb-8`}>
              <View style={tw`w-24 h-24 rounded-full bg-blue-100 items-center justify-center`}>
                <User size={40} color="#3B82F6" />
              </View>
              <TouchableOpacity style={tw`absolute bottom-0 bg-blue-600 p-2 rounded-full`}>
                <Camera size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>

            <InputField
              label="Full Name"
              placeholder="John Doe"
              value={formData.name}
              onChangeText={value => handleChange('name', value)}
              autoCapitalize="words"
            />

            <InputField
              label="Email Address"
              placeholder="john@example.com"
              value={formData.email}
              onChangeText={value => handleChange('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <InputField
              label="Create Password"
              placeholder="Minimum 6 characters"
              value={formData.password}
              onChangeText={value => handleChange('password', value)}
              secureTextEntry
            />

            <Button
              title="Create Account"
              onPress={handleCompleteProfile}
              loading={loading}
              style={{ marginTop: 24 }}
            />

            <Text style={tw`text-xs text-gray-500 text-center mt-6`}>
              By creating an account, you agree to our{'\n'}
              <Text style={tw`text-blue-600`}>Terms of Service</Text> and{' '}
              <Text style={tw`text-blue-600`}>Privacy Policy</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CompleteProfileScreen;

