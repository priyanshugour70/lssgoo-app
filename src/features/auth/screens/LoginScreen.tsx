/**
 * LssGoo Travel App - Login Screen
 * Phone number + OTP authentication
 */

import COMPANY_INFO from '@/app/constants/companyInfo';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { router } from 'expo-router';
import { ChevronLeft, Phone } from 'lucide-react-native';
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

export const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    if (!phone || phone.length < 10) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Phone Number',
        text2: 'Please enter a valid phone number',
      });
      return;
    }

    setLoading(true);

    try {
      const response = await authApi.sendOTP(phone);

      if (response.success) {
        Toast.show({
          type: 'success',
          text1: 'OTP Sent Successfully',
          text2: `Your OTP is: ${response.otp} (For demo purposes)`,
          visibilityTime: 8000,
        });

        router.push({
          pathname: '/auth/verify-otp',
          params: { phone, otp: response.otp },
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
              Welcome Back!
            </Text>
            <Text className="text-base text-gray-600">
              Enter your phone number to receive a verification code
            </Text>
          </View>

          <View className="flex-1">
            <InputField
              label="Phone Number"
              placeholder="+91 9876543210"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              maxLength={13}
            />

            <Button
              title="Send OTP"
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
              onPress={() => router.push('/auth/signup')}
            >
              <Text className="text-base text-gray-600">
                Don't have an account?{' '}
                <Text className="font-semibold text-blue-600">Sign Up</Text>
              </Text>
            </TouchableOpacity>
          </View>

          <View className="items-center py-6">
            <Phone size={40} color="#3B82F6" className="mb-3" />
            <Text className="text-sm text-gray-600 text-center">
              We'll send you a 4-digit verification code via SMS
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
