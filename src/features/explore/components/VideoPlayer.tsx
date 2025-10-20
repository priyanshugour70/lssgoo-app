/**
 * LssGoo Travel App - Video Player Component
 * Custom video player for travel content
 */

import { Pause, Play, Volume2, VolumeX } from 'lucide-react-native';
import React, { useState, useRef } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import tw from 'twrnc';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnail?: string;
  autoPlay?: boolean;
  onPress?: () => void;
}

const { width } = Dimensions.get('window');

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl,
  thumbnail,
  autoPlay = false,
  onPress
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<Video>(null);

  const togglePlay = async () => {
    if (isPlaying) {
      await videoRef.current?.pauseAsync();
    } else {
      await videoRef.current?.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = async () => {
    if (isMuted) {
      await videoRef.current?.setIsMutedAsync(false);
    } else {
      await videoRef.current?.setIsMutedAsync(true);
    }
    setIsMuted(!isMuted);
  };

  return (
    <TouchableOpacity
      style={tw`relative`}
      onPress={() => {
        setShowControls(!showControls);
        onPress?.();
      }}
      activeOpacity={1}
    >
      <Video
        ref={videoRef}
        source={{ uri: videoUrl }}
        style={tw`w-full h-96`}
        resizeMode={ResizeMode.COVER}
        shouldPlay={isPlaying}
        isMuted={isMuted}
        isLooping
        onPlaybackStatusUpdate={(status) => {
          if (status.isLoaded) {
            setIsPlaying(status.isPlaying);
          }
        }}
      />

      {/* Controls Overlay */}
      {showControls && (
        <View style={tw`absolute inset-0 bg-black/30 items-center justify-center`}>
          <View style={tw`flex-row items-center`}>
            <TouchableOpacity
              onPress={togglePlay}
              style={tw`bg-black/50 rounded-full p-4 mr-4`}
            >
              {isPlaying ? (
                <Pause size={32} color="#FFFFFF" />
              ) : (
                <Play size={32} color="#FFFFFF" />
              )}
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={toggleMute}
              style={tw`bg-black/50 rounded-full p-4`}
            >
              {isMuted ? (
                <VolumeX size={24} color="#FFFFFF" />
              ) : (
                <Volume2 size={24} color="#FFFFFF" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Play Button Overlay (when paused) */}
      {!isPlaying && !showControls && (
        <View style={tw`absolute inset-0 items-center justify-center`}>
          <TouchableOpacity
            onPress={togglePlay}
            style={tw`bg-black/50 rounded-full p-6`}
          >
            <Play size={40} color="#FFFFFF" fill="#FFFFFF" />
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};
