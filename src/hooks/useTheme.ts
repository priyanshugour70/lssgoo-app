/**
 * Theme Hook
 * Provides access to theme colors, spacing, and utilities
 */

import { useColorScheme } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, FONT_SIZE, SHADOWS } from '../constants/theme';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return {
    colors: COLORS,
    spacing: SPACING,
    borderRadius: BORDER_RADIUS,
    fontSize: FONT_SIZE,
    shadows: SHADOWS,
    isDark,
  };
};

export default useTheme;

