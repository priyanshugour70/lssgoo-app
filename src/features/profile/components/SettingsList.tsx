/**
 * LssGoo Travel App - Settings List Component
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { Colors } from '@/app/constants/theme';
import { MenuItem } from '../types/profileTypes';

interface SettingsListProps {
  items: MenuItem[];
  onItemPress?: (index: number) => void;
}

export const SettingsList: React.FC<SettingsListProps> = ({ items, onItemPress }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => onItemPress?.(index)}
          >
            <View style={styles.itemLeft}>
              <View style={styles.iconContainer}>
                <IconComponent size={20} color={Colors.primary} />
              </View>
              <View style={styles.itemText}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            </View>
            <ChevronRight size={20} color={Colors.icon} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  itemText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.text,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
});

export default SettingsList;

