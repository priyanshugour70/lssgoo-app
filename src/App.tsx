/**
 * LssGoo Tours & Travels - Main App Component
 * Entry point for the application
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import global styles
import './styles';

// Import screens
import { HomeScreen } from './screens';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
      />
      <HomeScreen />
    </SafeAreaProvider>
  );
}

export default App;
