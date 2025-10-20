/**
 * LssGoo Travel App - OTP Verification Screen
 */

import COMPANY_INFO from '@/app/constants/companyInfo';
import { Button } from '@/components/Button';
import { storage } from '@/services/storage';
import { useAuthStore } from '@/store/authStore';
import { router, useLocalSearchParams } from 'expo-router';
import { Shield } from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import tw from 'twrnc';
import { authApi } from '../api/authApi';

export const VerifyOTPScreen = () => {
  const params = useLocalSearchParams<{ phone: string; otp?: string }>();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const setUser = useAuthStore(state => state.setUser);
  const setToken = useAuthStore(state => state.setToken);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOTPChange = (value: string, index: number) => {
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = async () => {
    const otpString = otp.join('');

    if (otpString.length !== 4) {
      Toast.show({
        type: 'error',
        text1: 'Invalid OTP',
        text2: 'Please enter all 4 digits',
      });
      return;
    }

    setLoading(true);
    Keyboard.dismiss();

    try {
      const response = await authApi.verifyOTP({
        phone: params.phone,
        otp: otpString,
      });

      if (response.success) {
        if (response.user && response.token) {
          // User exists - log them in
          setUser(response.user);
          setToken(response.token);
          await storage.saveUser(response.user);
          await storage.saveToken(response.token);

          Toast.show({
            type: 'success',
            text1: 'Welcome Back!',
            text2: `Hello ${response.user.name}`,
          });

          // Navigate to main app
          router.replace('/main');
        } else {
          // New user - navigate to complete profile
          Toast.show({
            type: 'success',
            text1: 'OTP Verified',
            text2: 'Please complete your profile',
          });

          router.push({
            pathname: '/auth/complete-profile',
            params: { phone: params.phone },
          });
        }
      } else {
        Toast.show({
          type: 'error',
          text1: 'Verification Failed',
          text2: response.error || 'Invalid OTP',
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

  const handleResendOTP = async () => {
    setTimer(60);
    setOtp(['', '', '', '']);

    try {
      const response = await authApi.sendOTP(params.phone);

      if (response.success) {
        Toast.show({
          type: 'success',
          text1: 'OTP Resent',
          text2: `New OTP: ${response.otp} (For demo)`,
          visibilityTime: 8000,
        });
      }
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to resend OTP',
      });
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

            <View style={tw`items-center mb-8`}>
              <View style={tw`w-20 h-20 bg-blue-100 rounded-full items-center justify-center mb-6`}>
                <Shield size={40} color="#3B82F6" />
              </View>

              <Text style={tw`text-2xl font-bold text-gray-900 mb-3`}>
                Verify Phone Number
              </Text>

              <Text style={tw`text-base text-gray-600 text-center mb-2`}>
                Enter the 4-digit code sent to
              </Text>

              <Text style={tw`text-base font-semibold text-gray-900 mb-4`}>
                {params.phone}
              </Text>

              {params.otp && (
                <View style={tw`bg-blue-50 px-4 py-3 rounded-lg mb-4`}>
                  <Text style={tw`text-sm text-blue-600 text-center`}>
                    📱 Demo OTP: <Text style={tw`font-bold`}>{params.otp}</Text>
                  </Text>
                </View>
              )}
            </View>

            <View style={tw`flex-row justify-between mb-8`}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={ref => (inputRefs.current[index] = ref)}
                  style={tw`w-16 h-16 border-2 border-gray-200 rounded-xl text-center text-2xl font-bold text-gray-900 bg-gray-50`}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit}
                  onChangeText={value => handleOTPChange(value, index)}
                  onKeyPress={e => handleKeyPress(e, index)}
                  selectTextOnFocus
                />
              ))}
            </View>

            <Button
              title="Verify OTP"
              onPress={handleVerifyOTP}
              loading={loading}
            />

            <View style={tw`items-center mt-6`}>
              {timer > 0 ? (
                <Text style={tw`text-sm text-gray-600`}>
                  Resend OTP in{' '}
                  <Text style={tw`font-semibold text-blue-600`}>
                    {timer}s
                  </Text>
                </Text>
              ) : (
                <TouchableOpacity onPress={handleResendOTP}>
                  <Text style={tw`text-sm font-semibold text-blue-600`}>
                    Resend OTP
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            <TouchableOpacity
              style={tw`mt-4`}
              onPress={() => router.back()}
            >
              <Text style={tw`text-sm text-gray-600 text-center`}>
                Wrong number?{' '}
                <Text style={tw`font-semibold text-blue-600`}>Change</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyOTPScreen;

