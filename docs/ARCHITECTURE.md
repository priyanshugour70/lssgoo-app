# LssGoo Tours & Travels - Architecture Documentation

## 📐 Feature-Based Architecture

This document describes the new scalable, feature-based architecture for the LssGoo Tours & Travels React Native application.

## 🎯 Design Principles

1. **Feature-First Organization**: Code is organized by business features, not by technical layers
2. **Self-Contained Modules**: Each feature contains all its screens, components, hooks, API calls, and types
3. **Clear Separation of Concerns**: Global utilities, services, and components are separated from feature-specific code
4. **Scalability**: Easy to add new features without affecting existing code
5. **Maintainability**: Clear structure makes it easy for new developers to understand and contribute

## 📂 Directory Structure

```
LssGoo/
├── app/                                  # App configuration & core setup
│   ├── constants/                        # App-wide constants
│   │   ├── companyInfo.ts               # Company information and branding
│   │   ├── appConfig.ts                 # App configuration and settings
│   │   ├── theme.ts                     # Theme colors and styling
│   │   └── routes.ts                    # Route constants
│   └── i18n/                            # Internationalization
│       ├── en.json                      # English translations
│       └── hi.json                      # Hindi translations
│
├── src/
│   ├── features/                        # Feature-based modules
│   │   ├── home/                        # Home feature
│   │   │   ├── screens/
│   │   │   │   └── HomeScreen.tsx
│   │   │   ├── components/
│   │   │   │   ├── HeroBanner.tsx
│   │   │   │   ├── TrendingTrips.tsx
│   │   │   │   ├── OffersCarousel.tsx
│   │   │   │   └── index.ts
│   │   │   ├── hooks/
│   │   │   │   └── useHomeData.ts
│   │   │   ├── api/
│   │   │   │   └── homeApi.ts
│   │   │   └── types/
│   │   │       └── homeTypes.ts
│   │   │
│   │   ├── explore/                     # Explore & Search feature
│   │   │   ├── screens/
│   │   │   │   ├── ExploreScreen.tsx
│   │   │   │   └── SearchScreen.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useExplore.ts
│   │   │   │   └── useSearch.ts
│   │   │   ├── api/
│   │   │   │   └── exploreApi.ts
│   │   │   └── types/
│   │   │       └── exploreTypes.ts
│   │   │
│   │   ├── bookings/                    # My Trips/Bookings feature
│   │   │   ├── screens/
│   │   │   │   └── MyBookingsScreen.tsx
│   │   │   ├── components/
│   │   │   │   └── BookingCard.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useBookings.ts
│   │   │   ├── api/
│   │   │   │   └── bookingApi.ts
│   │   │   └── types/
│   │   │       └── bookingTypes.ts
│   │   │
│   │   ├── profile/                     # Profile feature
│   │   │   ├── screens/
│   │   │   │   └── ProfileScreen.tsx
│   │   │   ├── components/
│   │   │   │   ├── UserAvatar.tsx
│   │   │   │   └── SettingsList.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useProfile.ts
│   │   │   ├── api/
│   │   │   │   └── profileApi.ts
│   │   │   └── types/
│   │   │       └── profileTypes.ts
│   │   │
│   │   └── auth/                        # Authentication (ready for future implementation)
│   │       ├── screens/
│   │       ├── api/
│   │       └── hooks/
│   │
│   ├── components/                      # Global reusable components
│   │   ├── Button.tsx
│   │   ├── InputField.tsx
│   │   ├── Card.tsx
│   │   ├── EmptyState.tsx
│   │   └── index.ts
│   │
│   ├── services/                        # Core services
│   │   ├── apiClient.ts                # HTTP client for API calls
│   │   ├── storage.ts                  # Secure storage wrapper
│   │   ├── analytics.ts                # Analytics service
│   │   └── notificationService.ts      # Push notification service
│   │
│   ├── store/                           # Global state management (Zustand)
│   │   ├── authStore.ts                # Authentication state
│   │   ├── uiStore.ts                  # UI state (theme, language, etc.)
│   │   └── index.ts
│   │
│   ├── utils/                           # Utility functions
│   │   ├── formatDate.ts               # Date formatting utilities
│   │   ├── currency.ts                 # Currency formatting utilities
│   │   ├── validator.ts                # Input validation utilities
│   │   ├── helpers.ts                  # General helper functions
│   │   └── index.ts
│   │
│   ├── assets/                          # Static resources
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   └── types/                           # Global TypeScript types
│       ├── navigation.ts               # Navigation type definitions
│       ├── common.ts                   # Common type definitions
│       ├── api.ts                      # API type definitions
│       └── index.ts
│
├── src/app/                             # Expo Router file-based routing
│   ├── _layout.tsx                     # Root layout
│   └── (tabs)/                         # Tab navigation
│       ├── _layout.tsx                 # Tab layout
│       ├── index.tsx                   # Home tab (exports HomeScreen)
│       ├── explore.tsx                 # Explore tab
│       ├── search.tsx                  # Search tab
│       ├── my-trips.tsx               # Bookings tab
│       └── profile.tsx                 # Profile tab
│
├── tsconfig.json                        # TypeScript configuration with path aliases
├── package.json
└── README.md
```

## 🔑 Key Concepts

### Feature Modules

Each feature is self-contained with:
- **screens/**: Screen components for the feature
- **components/**: Feature-specific components
- **hooks/**: Custom React hooks for business logic
- **api/**: API calls and data fetching
- **types/**: TypeScript type definitions

### Path Aliases

The following path aliases are configured in `tsconfig.json`:

```typescript
"@/*": ["./src/*"]
"@/features/*": ["./src/features/*"]
"@/components/*": ["./src/components/*"]
"@/services/*": ["./src/services/*"]
"@/store/*": ["./src/store/*"]
"@/utils/*": ["./src/utils/*"]
"@/assets/*": ["./src/assets/*"]
"@/types/*": ["./src/types/*"]
"@/app/*": ["./app/*"]
```

### Import Examples

```typescript
// Feature imports
import { HomeScreen } from '@/features/home/screens/HomeScreen';
import { useHomeData } from '@/features/home/hooks/useHomeData';

// Global component imports
import { Button, Card } from '@/components';

// Service imports
import { apiClient } from '@/services/apiClient';
import { storage } from '@/services/storage';

// Store imports
import { useAuthStore } from '@/store/authStore';

// Utility imports
import { formatDate, formatCurrency } from '@/utils';

// Type imports
import { ApiResponse } from '@/types/api';

// Constants imports
import COMPANY_INFO from '@/app/constants/companyInfo';
import { Colors } from '@/app/constants/theme';
```

## 🚀 Adding a New Feature

To add a new feature (e.g., "notifications"):

1. Create the feature directory structure:
```bash
mkdir -p src/features/notifications/{screens,components,hooks,api,types}
```

2. Create the necessary files:
```typescript
// src/features/notifications/types/notificationTypes.ts
export interface Notification {
  id: string;
  title: string;
  message: string;
  // ... other fields
}

// src/features/notifications/api/notificationApi.ts
export const notificationApi = {
  getNotifications: async () => {
    // API call
  }
};

// src/features/notifications/hooks/useNotifications.ts
export const useNotifications = () => {
  // Hook logic
};

// src/features/notifications/screens/NotificationsScreen.tsx
export const NotificationsScreen = () => {
  // Screen component
};
```

3. Export from your feature and use in routing

## 📝 Naming Conventions

- **Files**: `PascalCase` for components (e.g., `HomeScreen.tsx`)
- **Files**: `camelCase` for hooks, utilities, services (e.g., `useHomeData.ts`)
- **Components**: `PascalCase` (e.g., `Button`, `Card`)
- **Hooks**: `camelCase` starting with `use` (e.g., `useAuth`, `useHomeData`)
- **Types/Interfaces**: `PascalCase` (e.g., `User`, `ApiResponse`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `COMPANY_INFO`, `APP_CONFIG`)

## 🔧 State Management

We use **Zustand** for global state management:

```typescript
// Creating a store
import { create } from 'zustand';

interface MyStore {
  count: number;
  increment: () => void;
}

export const useMyStore = create<MyStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

// Using a store
import { useMyStore } from '@/store/myStore';

const MyComponent = () => {
  const { count, increment } = useMyStore();
  // ...
};
```

## 🌐 API Client

All API calls should use the centralized `apiClient`:

```typescript
import { apiClient } from '@/services/apiClient';

// GET request
const data = await apiClient.get('/trips');

// POST request
const result = await apiClient.post('/bookings', { tripId: '123' });
```

## 💾 Storage

Use the `storage` service for persistent data:

```typescript
import { storage } from '@/services/storage';

// Save data
await storage.setItem('key', 'value');
await storage.setObject('user', userObject);

// Get data
const value = await storage.getItem('key');
const user = await storage.getObject('user');
```

## 🎨 Theming

Colors and theme constants are defined in `app/constants/theme.ts`:

```typescript
import { Colors } from '@/app/constants/theme';

// Use in StyleSheet
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  text: {
    color: Colors.text,
  },
});

// Use in components
<View style={{ backgroundColor: Colors.primary }} />
```

## 📱 Navigation

We use Expo Router for file-based navigation. Screens are defined in `src/app/` and import feature screens:

```typescript
// src/app/(tabs)/home.tsx
export { HomeScreen as default } from '@/features/home/screens/HomeScreen';
```

## ✅ Best Practices

1. **Keep features independent**: Features should not directly import from each other
2. **Use global components**: Share UI components via `src/components/`
3. **Centralize services**: Use `src/services/` for shared business logic
4. **Type everything**: Use TypeScript for all files
5. **Follow the structure**: Always place new code in the appropriate feature/folder
6. **Document complex logic**: Add comments for non-obvious code
7. **Test your features**: Write tests for critical functionality

## 🔄 Migration Status

✅ Completed:
- Feature-based directory structure created
- Home feature migrated
- Explore & Search features migrated
- Bookings (My Trips) feature migrated
- Profile feature migrated
- Global components created
- Services set up (API client, storage, analytics)
- Global state management (Zustand stores)
- Utility functions organized
- TypeScript types organized
- Path aliases configured
- Expo Router integration updated

## 📚 Resources

- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [React Native Documentation](https://reactnative.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Last Updated**: October 2025
**Maintained By**: LssGoo Development Team

