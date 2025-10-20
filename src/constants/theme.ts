/**
 * LssGoo Theme Configuration
 * Clean, modern color scheme with sky blue and light blue focus
 * Following the brand colors: sky blue, light blue, white, and black
 */

import { Platform } from 'react-native';

// Brand Colors
export const BRAND_COLORS = {
  primary: '#3B82F6',      // Modern blue
  secondary: '#60A5FA',    // Light blue
  accent: '#93C5FD',       // Lighter blue
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
} as const;

// Single color scheme for clean, consistent UI
export const Colors = {
  text: BRAND_COLORS.gray900,
  textSecondary: BRAND_COLORS.gray600,
  textMuted: BRAND_COLORS.gray500,
  background: BRAND_COLORS.white,
  backgroundSecondary: BRAND_COLORS.gray50,
  tint: BRAND_COLORS.primary,
  icon: BRAND_COLORS.gray500,
  iconActive: BRAND_COLORS.primary,
  tabIconDefault: BRAND_COLORS.gray400,
  tabIconSelected: BRAND_COLORS.primary,
  primary: BRAND_COLORS.primary,
  secondary: BRAND_COLORS.secondary,
  accent: BRAND_COLORS.accent,
  surface: BRAND_COLORS.white,
  surfaceSecondary: BRAND_COLORS.gray50,
  border: BRAND_COLORS.gray200,
  borderLight: BRAND_COLORS.gray100,
  card: BRAND_COLORS.white,
  cardShadow: 'rgba(0, 0, 0, 0.1)',
  notification: BRAND_COLORS.primary,
  success: BRAND_COLORS.success,
  warning: BRAND_COLORS.warning,
  error: BRAND_COLORS.error,
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

// Tailwind CSS class mappings for consistent styling
export const TailwindClasses = {
  // Layout
  container: 'flex-1',
  safeArea: 'flex-1',
  
  // Background colors
  bgPrimary: 'bg-primary-500',
  bgSecondary: 'bg-secondary-100',
  bgWhite: 'bg-white',
  bgGray50: 'bg-gray-50',
  bgGray100: 'bg-gray-100',
  
  // Text colors
  textPrimary: 'text-gray-900',
  textSecondary: 'text-gray-600',
  textMuted: 'text-gray-500',
  textWhite: 'text-white',
  textBlue: 'text-primary-500',
  
  // Spacing
  p4: 'p-4',
  px4: 'px-4',
  py4: 'py-4',
  m4: 'm-4',
  mx4: 'mx-4',
  my4: 'my-4',
  
  // Borders
  rounded: 'rounded-lg',
  roundedFull: 'rounded-full',
  border: 'border border-gray-200',
  
  // Shadows
  shadow: 'shadow-md',
  shadowLg: 'shadow-lg',
  
  // Flex
  flexRow: 'flex-row',
  flexCol: 'flex-col',
  itemsCenter: 'items-center',
  justifyCenter: 'justify-center',
  justifyBetween: 'justify-between',
  
  // Text sizes
  textXs: 'text-xs',
  textSm: 'text-sm',
  textBase: 'text-base',
  textLg: 'text-lg',
  textXl: 'text-xl',
  text2xl: 'text-2xl',
  text3xl: 'text-3xl',
  
  // Font weights
  fontNormal: 'font-normal',
  fontMedium: 'font-medium',
  fontSemibold: 'font-semibold',
  fontBold: 'font-bold',
} as const;
