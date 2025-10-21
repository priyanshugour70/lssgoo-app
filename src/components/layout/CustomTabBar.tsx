/**
 * LssGoo Travel App - Custom Tab Bar Component
 * Clean tab bar matching Figma design exactly
 * Layout: Home | Explore | [BLUE CIRCLE] | My Trips | Profile
 */

import { Ionicons } from '@expo/vector-icons';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

export const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={tw`relative`}>
      {/* Main Tab Bar */}
      <View style={tw`bg-white border-t border-gray-200 shadow-lg pt-4 pb-4`}>
        <View style={tw`flex-row items-center justify-around`}>
          {/* Tab 0: Home */}
          <TouchableOpacity
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: state.routes[0].key,
                canPreventDefault: true,
              });
              if (state.index !== 0 && !event.defaultPrevented) {
                navigation.navigate(state.routes[0].name);
              }
            }}
            style={tw`flex-1 items-center`}
            activeOpacity={0.6}
          >
            <Ionicons 
              name="home-outline" 
              size={24} 
              color={state.index === 0 ? '#3B82F6' : '#D1D5DB'} 
            />
            <Text style={tw`text-xs mt-1 font-medium ${state.index === 0 ? 'text-blue-600' : 'text-gray-400'}`}>
              Home
            </Text>
          </TouchableOpacity>

          {/* Tab 1: Explore */}
          <TouchableOpacity
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: state.routes[1].key,
                canPreventDefault: true,
              });
              if (state.index !== 1 && !event.defaultPrevented) {
                navigation.navigate(state.routes[1].name);
              }
            }}
            style={tw`flex-1 items-center`}
            activeOpacity={0.6}
          >
            <Ionicons 
              name="compass-outline" 
              size={24} 
              color={state.index === 1 ? '#3B82F6' : '#D1D5DB'} 
            />
            <Text style={tw`text-xs mt-1 font-medium ${state.index === 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              Explore
            </Text>
          </TouchableOpacity>

          {/* Spacer for center circle */}
          <View style={tw`flex-1`} />

          {/* Tab 3: My Trips */}
          <TouchableOpacity
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: state.routes[3].key,
                canPreventDefault: true,
              });
              if (state.index !== 3 && !event.defaultPrevented) {
                navigation.navigate(state.routes[3].name);
              }
            }}
            style={tw`flex-1 items-center`}
            activeOpacity={0.6}
          >
            <Ionicons 
              name="map-outline" 
              size={24} 
              color={state.index === 3 ? '#3B82F6' : '#D1D5DB'} 
            />
            <Text style={tw`text-xs mt-1 font-medium ${state.index === 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              My Trips
            </Text>
          </TouchableOpacity>

          {/* Tab 4: Profile */}
          <TouchableOpacity
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: state.routes[4].key,
                canPreventDefault: true,
              });
              if (state.index !== 4 && !event.defaultPrevented) {
                navigation.navigate(state.routes[4].name);
              }
            }}
            style={tw`flex-1 items-center`}
            activeOpacity={0.6}
          >
            <Ionicons 
              name="person-outline" 
              size={24} 
              color={state.index === 4 ? '#3B82F6' : '#D1D5DB'} 
            />
            <Text style={tw`text-xs mt-1 font-medium ${state.index === 4 ? 'text-blue-600' : 'text-gray-400'}`}>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Blue Circle Center FAB for Search (Tab 2) */}
      <TouchableOpacity
        onPress={() => {
          const event = navigation.emit({
            type: 'tabPress',
            target: state.routes[2].key,
            canPreventDefault: true,
          });
          if (state.index !== 2 && !event.defaultPrevented) {
            navigation.navigate(state.routes[2].name);
          }
        }}
        style={tw`absolute self-center left-1/2 -top-8 -translate-x-1/2`}
        activeOpacity={0.7}
      >
        <View
          style={tw`w-16 h-16 rounded-full bg-blue-500 items-center justify-center shadow-xl`}
        >
          <Ionicons name="search" size={28} color="#FFFFFF" strokeWidth={2} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
