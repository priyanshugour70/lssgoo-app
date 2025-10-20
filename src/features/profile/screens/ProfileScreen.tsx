/**
 * LssGoo Travel App - Profile Screen
 * Beautiful profile screen with Tailwind CSS
 */

import { useAuthStore } from '@/store/authStore';
import { router } from 'expo-router';
import {
    Bell,
    CreditCard,
    Edit,
    HelpCircle,
    LogOut,
    MapPin,
    Settings,
    Star,
} from 'lucide-react-native';
import React from 'react';
import {
    ActivityIndicator,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import tw from 'twrnc';
import { SettingsList } from '../components/SettingsList';
import { UserAvatar } from '../components/UserAvatar';
import { useProfile } from '../hooks/useProfile';
import { MenuItem } from '../types/profileTypes';

const menuItems: MenuItem[] = [
  {
    icon: Settings,
    title: 'Account Settings',
    subtitle: 'Privacy, security, language',
  },
  {
    icon: CreditCard,
    title: 'Payment Methods',
    subtitle: 'Manage your payment options',
  },
  {
    icon: Bell,
    title: 'Notifications',
    subtitle: 'Push notifications, email alerts',
  },
  {
    icon: HelpCircle,
    title: 'Help & Support',
    subtitle: 'FAQs, contact us',
  },
];

export const ProfileScreen = () => {
  const { profile, loading } = useProfile();
  const logout = useAuthStore(state => state.logout);

  const handleLogout = async () => {
    try {
      await logout();
      Toast.show({
        type: 'success',
        text1: 'Logged Out',
        text2: 'See you next time!',
      });
      router.replace('/auth/welcome');
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to log out',
      });
    }
  };

  if (loading || !profile) {
    return (
      <SafeAreaView style={tw`flex-1 bg-gray-50`}>
        <View style={tw`flex-1 justify-center items-center`}>
          <ActivityIndicator size="large" color="#3B82F6" />
          <Text style={tw`mt-4 text-base text-gray-600`}>Loading profile...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-50`}>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1`}>
        {/* Header with Profile Info */}
        <View style={tw`px-6 pt-6 pb-8 bg-white border-b border-gray-100`}>
          <View style={tw`flex-row items-center`}>
            <UserAvatar uri={profile.avatar} />
            <View style={tw`flex-1 ml-4`}>
              <Text style={tw`text-2xl font-bold text-gray-900 mb-1`}>{profile.name}</Text>
              <View style={tw`flex-row items-center mb-1`}>
                <MapPin size={14} color="#6B7280" />
                <Text style={tw`text-sm text-gray-600 ml-1`}>{profile.location}</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <Star size={14} color="#F59E0B" fill="#F59E0B" />
                <Text style={tw`text-sm text-gray-600 ml-1`}>
                  {profile.rating} ({profile.reviewCount} reviews)
                </Text>
              </View>
            </View>
            <TouchableOpacity style={tw`p-3 bg-blue-50 rounded-full`}>
              <Edit size={20} color="#3B82F6" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats Card */}
        <View style={tw`mx-4 -mt-4 mb-6`}>
          <View style={tw`bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex-row`}>
            {Object.entries(profile.stats).map(([key, value], index, arr) => (
              <View key={index} style={tw`flex-1 items-center ${index < arr.length - 1 ? 'border-r border-gray-200' : ''}`}>
                <Text style={tw`text-2xl font-bold text-blue-600 mb-1`}>{value}</Text>
                <Text style={tw`text-xs text-gray-600 text-center capitalize`}>
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Settings Menu */}
        <View style={tw`px-4 mb-6`}>
          <Text style={tw`text-lg font-bold text-gray-900 mb-4 px-2`}>Settings</Text>
          <SettingsList items={menuItems} />
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={tw`flex-row items-center justify-center bg-red-50 mx-4 py-4 rounded-xl mb-6`}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <LogOut size={20} color="#EF4444" />
          <Text style={tw`text-base font-semibold text-red-600 ml-2`}>Log Out</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={tw`items-center pb-8`}>
          <Text style={tw`text-xs text-gray-400`}>Version 1.0.0</Text>
          <Text style={tw`text-xs text-gray-400 mt-1`}>Made with ❤️ by LssGoo Team</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

