/**
 * LssGoo Travel App - Footer Component
 * Bottom navigation with Home, Explore, Bookings, and Account tabs
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FooterProps } from '../../types';
import { Colors } from '../../constants/theme';
import { useColorScheme } from '../../hooks/use-color-scheme';
import { FOOTER_NAVIGATION } from '../../data/navigation';

export const Footer: React.FC<FooterProps> = ({
  activeTab,
  onTabPress,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const getIconName = (iconName: string, isActive: boolean) => {
    const iconMap: { [key: string]: { active: string; inactive: string } } = {
      home: { active: 'home', inactive: 'home-outline' },
      compass: { active: 'compass', inactive: 'compass-outline' },
      calendar: { active: 'calendar', inactive: 'calendar-outline' },
      user: { active: 'person', inactive: 'person-outline' },
    };
    
    return iconMap[iconName]?.[isActive ? 'active' : 'inactive'] || iconName;
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: colors.background,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      paddingVertical: 8,
      paddingHorizontal: 4,
      shadowColor: colors.text,
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 5,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 4,
    },
    tabIcon: {
      marginBottom: 4,
    },
    tabLabel: {
      fontSize: 12,
      fontWeight: '500',
    },
    activeTab: {
      color: colors.tabIconSelected,
    },
    inactiveTab: {
      color: colors.tabIconDefault,
    },
  });

  return (
    <View style={styles.container}>
      {FOOTER_NAVIGATION.map((item) => {
        const isActive = activeTab === item.id;
        const iconName = getIconName(item.icon, isActive);
        
        return (
          <TouchableOpacity
            key={item.id}
            style={styles.tabItem}
            onPress={() => onTabPress(item.id)}
            accessibilityLabel={item.title}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
          >
            <View style={styles.tabIcon}>
              <Ionicons
                name={iconName as any}
                size={24}
                color={isActive ? colors.tabIconSelected : colors.tabIconDefault}
              />
            </View>
            <Text
              style={[
                styles.tabLabel,
                isActive ? styles.activeTab : styles.inactiveTab,
              ]}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};