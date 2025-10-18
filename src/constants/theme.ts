/**
 * Theme Constants for LssGoo App
 * Colors, spacing, typography, and other design tokens
 */

export const COLORS = {
  // Primary Brand Colors
  primary: {
    50: '#E6F2FF',
    100: '#CCE5FF',
    200: '#99CBFF',
    300: '#66B0FF',
    400: '#3396FF',
    500: '#007AFF', // Main brand color
    600: '#0062CC',
    700: '#004999',
    800: '#003166',
    900: '#001833',
  },

  // Secondary Colors
  secondary: {
    50: '#FFF5E6',
    100: '#FFEACC',
    200: '#FFD699',
    300: '#FFC166',
    400: '#FFAD33',
    500: '#FF9800', // Accent color
    600: '#CC7A00',
    700: '#995B00',
    800: '#663D00',
    900: '#331E00',
  },

  // Success, Warning, Error
  success: {
    light: '#4CAF50',
    main: '#2E7D32',
    dark: '#1B5E20',
  },
  warning: {
    light: '#FFB74D',
    main: '#FF9800',
    dark: '#F57C00',
  },
  error: {
    light: '#E57373',
    main: '#F44336',
    dark: '#D32F2F',
  },
  info: {
    light: '#4FC3F7',
    main: '#0288D1',
    dark: '#01579B',
  },

  // Neutral Colors
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },

  // Background & Surface
  background: {
    default: '#FFFFFF',
    paper: '#F5F5F5',
    dark: '#121212',
  },

  // Text Colors
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#BDBDBD',
    hint: '#9E9E9E',
    white: '#FFFFFF',
  },

  // Special Colors
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  overlay: 'rgba(0, 0, 0, 0.5)',
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 40,
  '3xl': 48,
  '4xl': 64,
} as const;

export const BORDER_RADIUS = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
} as const;

export const FONT_SIZE = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
} as const;

export const FONT_WEIGHT = {
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
} as const;

export const LINE_HEIGHT = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
  loose: 2,
} as const;

export const SHADOWS = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6.27,
    elevation: 6,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10.32,
    elevation: 10,
  },
} as const;

export const BREAKPOINTS = {
  xs: 0,
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const ANIMATION = {
  duration: {
    fast: 150,
    normal: 250,
    slow: 350,
  },
  easing: {
    linear: 'linear',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const;

export const Z_INDEX = {
  modal: 1000,
  overlay: 900,
  dropdown: 800,
  header: 700,
  footer: 600,
  default: 1,
} as const;

export default {
  COLORS,
  SPACING,
  BORDER_RADIUS,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  SHADOWS,
  BREAKPOINTS,
  ANIMATION,
  Z_INDEX,
};

