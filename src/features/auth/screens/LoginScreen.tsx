/**
 * LssGoo Travel App - Login Screen
 * Phone number + OTP authentication
 */

import COMPANY_INFO from '@/app/constants/companyInfo';
import { Button } from '@/components/Button';
import { InputField } from '@/components/InputField';
import { useAuthStore } from '@/store/authStore';
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
import tw from 'twrnc';
import { authApi } from '../api/authApi';

export const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const { loginAsGuest } = useAuthStore();

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

  const handleGuestLogin = async () => {
    try {
      setLoading(true);
      await loginAsGuest();
      Toast.show({
        type: 'success',
        text1: 'Welcome Guest!',
        text2: 'You can explore the app without signing up',
      });
      router.replace('/main');
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message || 'Failed to login as guest',
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
          <TouchableOpacity
            style={tw`mt-4 mb-6`}
            onPress={() => router.back()}
          >
            <ChevronLeft size={24} color="#111827" />
          </TouchableOpacity>

          <View style={tw`mb-10`}>
            <Text style={tw`text-3xl font-bold text-blue-600 mb-6`}>
              {COMPANY_INFO.displayName}
            </Text>
            <Text style={tw`text-3xl font-bold text-gray-900 mb-3`}>
              Welcome Back!
            </Text>
            <Text style={tw`text-base text-gray-600`}>
              Enter your phone number to receive a verification code
            </Text>
          </View>

          <View style={tw`flex-1`}>
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

            <View style={tw`flex-row items-center justify-center my-8`}>
              <View style={tw`flex-1 h-px bg-gray-200`} />
              <Text style={tw`mx-4 text-sm text-gray-500`}>OR</Text>
              <View style={tw`flex-1 h-px bg-gray-200`} />
            </View>

            <TouchableOpacity
              style={tw`items-center`}
              onPress={() => router.push('/auth/signup')}
            >
              <Text style={tw`text-base text-gray-600`}>
                Don't have an account?{' '}
                <Text style={tw`font-semibold text-blue-600`}>Sign Up</Text>
              </Text>
            </TouchableOpacity>

            <View style={tw`flex-row items-center justify-center my-6`}>
              <View style={tw`flex-1 h-px bg-gray-200`} />
              <Text style={tw`mx-4 text-sm text-gray-500`}>OR</Text>
              <View style={tw`flex-1 h-px bg-gray-200`} />
            </View>

            <Button
              title="Continue as Guest"
              onPress={handleGuestLogin}
              loading={loading}
              style={{ 
                marginTop: 0,
                backgroundColor: '#F3F4F6',
                borderColor: '#D1D5DB',
                borderWidth: 1,
              }}
              textStyle={{ color: '#374151' }}
            />
          </View>

          <View style={tw`items-center py-6`}>
            <Phone size={40} color="#3B82F6" style={tw`mb-3`} />
            <Text style={tw`text-sm text-gray-600 text-center`}>
              We'll send you a 4-digit verification code via SMS
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
