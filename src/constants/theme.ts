/**
 * LssGoo Theme Configuration
 * Colors are defined for both light and dark modes with sky blue and light blue focus
 * Following the brand colors: sky blue, light blue, white, and black
 */

import { Platform } from 'react-native';

// Brand Colors
export const BRAND_COLORS = {
  skyBlue: '#87CEEB',
  lightBlue: '#ADD8E6',
  deepSkyBlue: '#00BFFF',
  white: '#FFFFFF',
  black: '#000000',
  darkGray: '#1A1A1A',
  lightGray: '#F5F5F5',
  mediumGray: '#6B7280',
} as const;

const tintColorLight = BRAND_COLORS.deepSkyBlue;
const tintColorDark = BRAND_COLORS.skyBlue;

export const Colors = {
  light: {
    text: BRAND_COLORS.black,
    background: BRAND_COLORS.white,
    tint: tintColorLight,
    icon: BRAND_COLORS.mediumGray,
    tabIconDefault: BRAND_COLORS.mediumGray,
    tabIconSelected: tintColorLight,
    primary: BRAND_COLORS.deepSkyBlue,
    secondary: BRAND_COLORS.lightBlue,
    accent: BRAND_COLORS.skyBlue,
    surface: BRAND_COLORS.lightGray,
    border: BRAND_COLORS.lightBlue,
    card: BRAND_COLORS.white,
    notification: BRAND_COLORS.deepSkyBlue,
  },
  dark: {
    text: BRAND_COLORS.white,
    background: BRAND_COLORS.darkGray,
    tint: tintColorDark,
    icon: BRAND_COLORS.lightBlue,
    tabIconDefault: BRAND_COLORS.mediumGray,
    tabIconSelected: tintColorDark,
    primary: BRAND_COLORS.skyBlue,
    secondary: BRAND_COLORS.lightBlue,
    accent: BRAND_COLORS.deepSkyBlue,
    surface: '#2A2A2A',
    border: BRAND_COLORS.skyBlue,
    card: '#2A2A2A',
    notification: BRAND_COLORS.skyBlue,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
