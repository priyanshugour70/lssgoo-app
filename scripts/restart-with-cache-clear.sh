#!/bin/bash

# LssGoo Travel App - Restart Metro with Cache Clear
# This script restarts Metro bundler with a clean cache

echo "🧹 Cleaning Metro cache..."
rm -rf node_modules/.cache
rm -rf .expo
rm -rf /tmp/metro-*

echo "🚀 Starting Metro bundler with clean cache..."
npx expo start --clear

echo "✅ Metro bundler started!"
echo "📱 Now press 'a' for Android or 'i' for iOS"
echo "⚠️  Don't forget to uninstall the app from your device/emulator first!"

