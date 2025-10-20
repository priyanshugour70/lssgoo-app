/**
 * LssGoo Travel App - User Avatar Component
 */

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Colors } from '@/app/constants/theme';

interface UserAvatarProps {
  uri: string;
  size?: number;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ uri, size = 80 }) => {
  return (
    <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}>
      <Image source={{ uri }} style={[styles.image, { width: size, height: size, borderRadius: size / 2 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: Colors.border,
  },
  image: {
    resizeMode: 'cover',
  },
});

export default UserAvatar;

