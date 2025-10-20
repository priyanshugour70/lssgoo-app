/**
 * LssGoo Travel App - User Avatar Component
 */

import React from 'react';
import { Image, View } from 'react-native';
import tw from 'twrnc';

interface UserAvatarProps {
  uri: string;
  size?: number;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ uri, size = 80 }) => {
  return (
    <View style={[tw`overflow-hidden border-2 border-gray-200`, { width: size, height: size, borderRadius: size / 2 }]}>
      <Image 
        source={{ uri }} 
        style={{ width: size, height: size, borderRadius: size / 2 }} 
        resizeMode="cover"
      />
    </View>
  );
};

export default UserAvatar;

