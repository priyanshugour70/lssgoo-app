/**
 * LssGoo Travel App - Profile Screen
 */

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Settings,
  CreditCard,
  Bell,
  HelpCircle,
  LogOut,
  Edit,
  Star,
  MapPin,
} from 'lucide-react-native';
import { Colors } from '@/app/constants/theme';
import { UserAvatar } from '../components/UserAvatar';
import { SettingsList } from '../components/SettingsList';
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

  if (loading || !profile) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <UserAvatar uri={profile.avatar} />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>{profile.name}</Text>
              <View style={styles.locationContainer}>
                <MapPin size={14} color={Colors.icon} />
                <Text style={styles.location}>{profile.location}</Text>
              </View>
              <View style={styles.ratingContainer}>
                <Star size={14} color={Colors.warning} fill={Colors.warning} />
                <Text style={styles.rating}>
                  {profile.rating} ({profile.reviewCount} reviews)
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Edit size={20} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.statsContainer}>
          {Object.entries(profile.stats).map(([key, value], index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{value}</Text>
              <Text style={styles.statLabel}>
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.menuContainer}>
          <SettingsList items={menuItems} />
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={Colors.error} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  editButton: {
    padding: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.card,
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  menuContainer: {
    marginHorizontal: 20,
    marginBottom: 24,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.error + '10',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.error,
    marginLeft: 8,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  footerText: {
    fontSize: 12,
    color: Colors.textMuted,
  },
});

export default ProfileScreen;

