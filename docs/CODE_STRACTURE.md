# LssGoo Tours & Travels - Source Directory Structure

This document outlines the directory structure and organization of the LssGoo mobile application.

## 📁 Directory Structure

```
src/
├── App.tsx                     # Main application component
├── README.md                   # This file
│
├── components/                 # Reusable UI components
│   ├── ui/                    # Basic UI components
│   │   ├── Button.tsx         # Button component with variants
│   │   ├── Input.tsx          # Input field with validation
│   │   ├── Card.tsx           # Card container component
│   │   └── index.ts           # Export all UI components
│   │
│   ├── layout/                # Layout components
│   │   ├── Container.tsx      # Main container with SafeArea
│   │   ├── Header.tsx         # Navigation header
│   │   └── index.ts           # Export all layout components
│   │
│   └── index.ts               # Export all components
│
├── screens/                    # Application screens
│   ├── HomeScreen.tsx         # Main landing screen
│   ├── LoginScreen.tsx        # Authentication screen
│   ├── DestinationsScreen.tsx # Browse destinations
│   ├── ProfileScreen.tsx      # User profile
│   └── index.ts               # Export all screens
│
├── hooks/                      # Custom React hooks
│   ├── useAuth.ts             # Authentication hook
│   ├── useTheme.ts            # Theme access hook
│   └── index.ts               # Export all hooks
│
├── services/                   # API and business logic services
│   ├── api.service.ts         # HTTP client wrapper
│   ├── auth.service.ts        # Authentication services
│   └── index.ts               # Export all services
│
├── utils/                      # Utility functions
│   ├── formatting.ts          # Data formatting utilities
│   ├── validation.ts          # Input validation utilities
│   └── index.ts               # Export all utilities
│
├── types/                      # TypeScript type definitions
│   ├── index.ts               # Main type definitions
│   └── navigation.d.ts        # Navigation type declarations
│
├── constants/                  # Application constants
│   ├── company-info.ts        # Company information and data
│   ├── theme.ts               # Design tokens (colors, spacing, etc.)
│   └── index.ts               # Export all constants
│
└── styles/                     # Global styles
    ├── global.css             # Global CSS with Tailwind directives
    └── index.ts               # Style exports
```

## 🎨 Component Organization

### UI Components (`components/ui/`)
Basic, reusable UI components that can be used throughout the app:
- `Button` - Configurable button with variants (primary, secondary, outline, ghost)
- `Input` - Text input with label, error, and helper text support
- `Card` - Container with shadow and styling variants

### Layout Components (`components/layout/`)
Structural components for page layouts:
- `Container` - Main container with SafeAreaView support
- `Header` - Navigation header with back button and actions

## 📱 Screens

Each screen represents a distinct page in the application:
- `HomeScreen` - Main landing page
- `LoginScreen` - User authentication
- `DestinationsScreen` - Browse travel destinations
- `ProfileScreen` - User profile and settings

## 🔧 Hooks

Custom React hooks for shared logic:
- `useAuth` - Manages authentication state and operations
- `useTheme` - Provides access to theme values and dark mode

## 🌐 Services

Business logic and API interaction:
- `api.service` - HTTP client for backend communication
- `auth.service` - Authentication-specific API calls

## 🛠️ Utilities

Helper functions:
- `formatting` - Currency, date, phone number formatting
- `validation` - Input validation functions

## 📝 Types

TypeScript definitions:
- User, Booking, Destination types
- Navigation types
- API response types

## 🎨 Styling

The app uses **NativeWind** (Tailwind CSS for React Native):
- Custom brand colors defined in `tailwind.config.js`
- Global styles in `src/styles/global.css`
- Theme constants in `src/constants/theme.ts`

### Color Palette

- **Primary**: Blue (#007AFF) - Main brand color
- **Secondary**: Orange (#FF9800) - Accent color
- **Success**: Green (#2E7D32)
- **Warning**: Orange (#FF9800)
- **Error**: Red (#F44336)

## 📦 Adding New Features

### Adding a New Screen

1. Create screen file in `src/screens/YourScreen.tsx`
2. Export from `src/screens/index.ts`
3. Add navigation type to `src/types/index.ts`

### Adding a New Component

1. Create component in appropriate directory (`ui/` or `layout/`)
2. Export from directory's `index.ts`
3. Import and use: `import { YourComponent } from '@/components'`

### Adding a New Service

1. Create service file in `src/services/your.service.ts`
2. Export from `src/services/index.ts`
3. Use in components or hooks

## 🚀 Next Steps

1. **Navigation**: Set up React Navigation with proper stack/tab navigators
2. **State Management**: Implement Context API or Redux for global state
3. **API Integration**: Connect services to actual backend endpoints
4. **Authentication**: Implement secure token storage (AsyncStorage/SecureStore)
5. **Testing**: Add unit and integration tests
6. **Internationalization**: Implement i18n for multi-language support

## 📖 Documentation

- Company information: `src/constants/company-info.ts`
- Design system: `src/constants/theme.ts`
- API documentation: (To be added)

## 🔐 Environment Variables

Create a `.env` file in the root with:
```
API_BASE_URL=https://api.lssgoo.com
GOOGLE_MAPS_API_KEY=your_key_here
```

## 📱 Platform-Specific Code

When needed, use platform-specific extensions:
- `Component.ios.tsx` - iOS-specific
- `Component.android.tsx` - Android-specific
- `Component.native.tsx` - Native platforms (iOS + Android)
- `Component.web.tsx` - Web-specific

## 🐛 Debugging

- Use React Native Debugger
- Check Metro bundler for build errors
- Use `console.log` statements (remove before production)
- Check native logs: `npx react-native log-android` or `npx react-native log-ios`

## 📚 Resources

- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

