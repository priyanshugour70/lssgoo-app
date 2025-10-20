/**
 * LssGoo Travel App - Signup Screen
 */

import COMPANY_INFO from '@/app/constants/companyInfo';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { router } from 'expo-router';
import { ChevronLeft, Mail, Phone, User } from 'lucide-react-native';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { authApi } from '../api/authApi';

export const SignupScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);

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

    if (!formData.phone || formData.phone.length < 10) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Phone',
        text2: 'Please enter a valid phone number',
      });
      return false;
    }

    return true;
  };

  const handleSendOTP = async () => {
    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await authApi.sendOTP(formData.phone);

      if (response.success) {
        Toast.show({
          type: 'success',
          text1: 'OTP Sent Successfully',
          text2: `Your OTP is: ${response.otp} (For demo purposes)`,
          visibilityTime: 8000,
        });

        router.push({
          pathname: '/auth/verify-otp',
          params: {
            phone: formData.phone,
            otp: response.otp,
            name: formData.name,
            email: formData.email,
            isSignup: 'true',
          },
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: response.error || 'Failed to send OTP',
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
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          className="flex-1 px-6"
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            className="mt-4 mb-6"
            onPress={() => router.back()}
          >
            <ChevronLeft size={24} color="#111827" />
          </TouchableOpacity>

          <View className="mb-10">
            <Text className="text-3xl font-bold text-blue-600 mb-6">
              {COMPANY_INFO.displayName}
            </Text>
            <Text className="text-3xl font-bold text-gray-900 mb-3">
              Create Account
            </Text>
            <Text className="text-base text-gray-600">
              Join us and start your journey to amazing destinations
            </Text>
          </View>

          <View className="flex-1">
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
              label="Phone Number"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChangeText={value => handleChange('phone', value)}
              keyboardType="phone-pad"
              maxLength={13}
            />

            <Button
              title="Continue"
              onPress={handleSendOTP}
              loading={loading}
              style={{ marginTop: 24 }}
            />

            <View className="flex-row items-center justify-center my-8">
              <View className="flex-1 h-px bg-gray-200" />
              <Text className="mx-4 text-sm text-gray-500">OR</Text>
              <View className="flex-1 h-px bg-gray-200" />
            </View>

            <TouchableOpacity
              className="items-center"
              onPress={() => router.push('/auth/login')}
            >
              <Text className="text-base text-gray-600">
                Already have an account?{' '}
                <Text className="font-semibold text-blue-600">Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View className="items-center py-6">
            <View className="flex-row items-center justify-center space-x-8">
              <User size={32} color="#3B82F6" />
              <Phone size={32} color="#3B82F6" />
              <Mail size={32} color="#3B82F6" />
            </View>
            <Text className="text-sm text-gray-600 text-center mt-4">
              We'll send you a verification code via SMS
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;

