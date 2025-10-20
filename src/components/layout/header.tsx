/**
 * LssGoo Travel App - Header Component
 * Main header with logo, search, profile, and theme toggle
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderProps } from '../../types';
import { Colors, BRAND_COLORS } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';
import { COMPANY_INFO } from '../../constants/company-info';

export const Header: React.FC<HeaderProps> = ({
  title,
  showSearch = true,
  showProfile = true,
  showThemeToggle = true,
  onSearchPress,
  onProfilePress,
  onThemeToggle,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    leftSection: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    logo: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.primary,
      marginRight: 8,
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: colors.text,
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
    },
    iconButton: {
      padding: 8,
      borderRadius: 20,
      backgroundColor: colors.surface,
    },
    themeToggle: {
      padding: 8,
      borderRadius: 20,
      backgroundColor: colors.primary,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.logo}>{COMPANY_INFO.displayName}</Text>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      
      <View style={styles.rightSection}>
        {showSearch && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onSearchPress}
            accessibilityLabel="Search trips"
          >
            <Ionicons
              name="search"
              size={20}
              color={colors.icon}
            />
          </TouchableOpacity>
        )}
        
        {showThemeToggle && (
          <TouchableOpacity
            style={styles.themeToggle}
            onPress={onThemeToggle}
            accessibilityLabel="Toggle theme"
          >
            <Ionicons
              name={colorScheme === 'dark' ? 'sunny' : 'moon'}
              size={20}
              color={BRAND_COLORS.white}
            />
          </TouchableOpacity>
        )}
        
        {showProfile && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onProfilePress}
            accessibilityLabel="Profile"
          >
            <Ionicons
              name="person-circle"
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};