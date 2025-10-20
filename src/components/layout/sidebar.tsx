/**
 * LssGoo Travel App - Sidebar Component
 * Side navigation with latest trips and quick navigation items
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SidebarProps } from '../../types';
import { Colors } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';
import { SIDEBAR_NAVIGATION, QUICK_ACTIONS } from '../../data/navigation';
import { COMPANY_INFO } from '../../constants/company-info';

export const Sidebar: React.FC<SidebarProps> = ({
  isVisible,
  onClose,
  trips,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const getIconName = (iconName: string) => {
    const iconMap: { [key: string]: string } = {
      'map-pin': 'location',
      'star': 'star',
      'mountain': 'triangle',
      'building': 'business',
      'sun': 'sunny',
      'users': 'people',
      'heart': 'heart',
      'clock': 'time',
      'search': 'search',
      'help-circle': 'help-circle',
      'settings': 'settings',
    };
    
    return iconMap[iconName] || iconName;
  };

  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
      width: '80%',
      maxWidth: 300,
    },
    header: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      backgroundColor: colors.primary,
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.background,
      marginBottom: 4,
    },
    headerSubtitle: {
      fontSize: 14,
      color: colors.background,
      opacity: 0.9,
    },
    closeButton: {
      position: 'absolute',
      top: 20,
      right: 20,
      padding: 8,
    },
    content: {
      flex: 1,
    },
    section: {
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
      paddingHorizontal: 20,
      marginBottom: 12,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    menuIcon: {
      marginRight: 16,
      width: 24,
      alignItems: 'center',
    },
    menuText: {
      fontSize: 14,
      color: colors.text,
      flex: 1,
    },
    tripItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 20,
    },
    tripImage: {
      width: 40,
      height: 40,
      borderRadius: 8,
      marginRight: 12,
    },
    tripInfo: {
      flex: 1,
    },
    tripTitle: {
      fontSize: 14,
      fontWeight: '500',
      color: colors.text,
      marginBottom: 2,
    },
    tripPrice: {
      fontSize: 12,
      color: colors.primary,
      fontWeight: '600',
    },
    footer: {
      padding: 20,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    footerText: {
      fontSize: 12,
      color: colors.icon,
      textAlign: 'center',
    },
  });

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1}
          onPress={() => {}}
        >
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
              accessibilityLabel="Close sidebar"
            >
              <Ionicons name="close" size={24} color={colors.background} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{COMPANY_INFO.displayName}</Text>
            <Text style={styles.headerSubtitle}>{COMPANY_INFO.tagline}</Text>
          </View>

          <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            {/* Navigation Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Explore</Text>
              {SIDEBAR_NAVIGATION.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.menuItem}
                  onPress={() => {
                    // Handle navigation
                    onClose();
                  }}
                >
                  <View style={styles.menuIcon}>
                    <Ionicons
                      name={getIconName(item.icon) as any}
                      size={20}
                      color={colors.primary}
                    />
                  </View>
                  <Text style={styles.menuText}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Latest Trips Section */}
            {trips.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Latest Trips</Text>
                {trips.slice(0, 3).map((trip) => (
                  <TouchableOpacity
                    key={trip.id}
                    style={styles.tripItem}
                    onPress={() => {
                      // Handle trip navigation
                      onClose();
                    }}
                  >
                    <Image
                      source={{ uri: trip.imageUrl }}
                      style={styles.tripImage}
                      resizeMode="cover"
                    />
                    <View style={styles.tripInfo}>
                      <Text style={styles.tripTitle} numberOfLines={1}>
                        {trip.title}
                      </Text>
                      <Text style={styles.tripPrice}>
                        {trip.currency} {trip.price.toLocaleString()}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Quick Actions Section */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Quick Actions</Text>
              {QUICK_ACTIONS.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.menuItem}
                  onPress={() => {
                    // Handle action
                    onClose();
                  }}
                >
                  <View style={styles.menuIcon}>
                    <Ionicons
                      name={getIconName(item.icon) as any}
                      size={20}
                      color={colors.icon}
                    />
                  </View>
                  <Text style={styles.menuText}>{item.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              © 2024 {COMPANY_INFO.name}. All rights reserved.
            </Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};