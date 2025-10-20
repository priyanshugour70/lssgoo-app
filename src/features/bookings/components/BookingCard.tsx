/**
 * LssGoo Travel App - Booking Card Component
 */

import { Calendar, Clock, Heart, MapPin } from 'lucide-react-native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { Booking } from '../types/bookingTypes';

interface BookingCardProps {
  booking: Booking;
  type: 'upcoming' | 'past' | 'saved';
  onPress?: () => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({ booking, type, onPress }) => {
  return (
    <TouchableOpacity style={tw`bg-white rounded-xl mb-4 shadow-md`} onPress={onPress}>
      <Image source={{ uri: booking.image }} style={tw`w-full h-50 rounded-t-xl`} />
      <View style={tw`p-4`}>
        <Text style={tw`text-lg font-semibold text-gray-900 mb-2`}>{booking.title}</Text>
        <View style={tw`flex-row items-center mb-2`}>
          <MapPin size={14} color="#6B7280" />
          <Text style={tw`text-sm text-gray-600 ml-1.5`}>{booking.destination}</Text>
        </View>
        
        {type === 'upcoming' && (
          <View style={tw`flex-row items-center justify-between`}>
            <Calendar size={14} color="#6B7280" />
            <Text style={tw`text-sm text-gray-600 ml-1.5 flex-1`}>{booking.date}</Text>
            <View style={tw`px-2 py-1 rounded-xl ${
              booking.status === 'Confirmed' ? 'bg-green-100' : 'bg-yellow-100'
            }`}>
              <Text style={tw`text-xs font-medium ${
                booking.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-600'
              }`}>
                {booking.status}
              </Text>
            </View>
          </View>
        )}
        
        {type === 'past' && booking.date && (
          <View style={tw`flex-row items-center justify-between`}>
            <Clock size={14} color="#6B7280" />
            <Text style={tw`text-sm text-gray-600 ml-1.5 flex-1`}>{booking.date}</Text>
          </View>
        )}
        
        {type === 'saved' && booking.price && (
          <View style={tw`flex-row items-center justify-between`}>
            <Text style={tw`text-lg font-semibold text-blue-600`}>{booking.price}</Text>
            <TouchableOpacity style={tw`p-1`}>
              <Heart size={16} color="#EF4444" fill="#EF4444" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default BookingCard;

