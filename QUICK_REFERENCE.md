# 🚀 LssGoo Travel App - Quick Reference Guide

## 📱 **Start the App**
```bash
npm start
# Press 'a' for Android or 'i' for iOS
```

---

## 🎨 **Using Your New Components**

### **Button**
```tsx
import { Button } from '@/components/Button';

<Button 
  title="Book Now"
  onPress={handleBook}
  variant="primary" // primary | secondary | outline | ghost
  size="medium" // small | medium | large
  loading={isLoading}
  fullWidth
/>
```

### **InputField**
```tsx
import { InputField } from '@/components/InputField';
import { Mail } from 'lucide-react-native';

<InputField
  label="Email"
  placeholder="Enter your email"
  value={email}
  onChangeText={setEmail}
  icon={<Mail size={20} color="#6B7280" />}
  error={emailError}
  helper="We'll never share your email"
/>
```

### **Card**
```tsx
import { Card } from '@/components/Card';

<Card 
  variant="elevated" // default | elevated | outlined
  padding="medium" // none | small | medium | large
  onPress={() => console.log('Pressed')}
>
  <Text>Your content here</Text>
</Card>
```

---

## 🎨 **Common Tailwind Classes**

### **Layout**
```tsx
className="flex-1"              // Take all available space
className="flex-row"            // Horizontal layout
className="items-center"        // Center vertically
className="justify-center"      // Center horizontally
className="justify-between"     // Space between items
```

### **Spacing**
```tsx
className="p-4"                 // Padding all sides (16px)
className="px-6"                // Padding horizontal (24px)
className="py-3"                // Padding vertical (12px)
className="m-4"                 // Margin all sides
className="mt-6"                // Margin top
className="mb-4"                // Margin bottom
className="gap-2"               // Gap between children (8px)
```

### **Colors**
```tsx
className="bg-blue-600"         // Background blue
className="text-white"          // Text white
className="text-gray-900"       // Text dark
className="text-gray-600"       // Text secondary
className="border-gray-200"     // Border gray
```

### **Typography**
```tsx
className="text-3xl"            // Large text (30px)
className="text-base"           // Normal text (16px)
className="text-sm"             // Small text (14px)
className="font-bold"           // Bold weight
className="font-semibold"       // Semi-bold
className="text-center"         // Center align
```

### **Borders & Shadows**
```tsx
className="rounded-xl"          // Rounded corners (12px)
className="rounded-2xl"         // More rounded (16px)
className="rounded-full"        // Fully rounded (circle)
className="shadow-md"           // Medium shadow
className="shadow-lg"           // Large shadow
className="border border-gray-200" // Border
```

### **Interactive States**
```tsx
className="active:bg-blue-700"  // When pressed
className="opacity-50"          // Half transparent
activeOpacity={0.8}             // Custom press opacity
```

---

## 🔄 **Navigation**

### **Navigate Between Screens**
```tsx
import { router } from 'expo-router';

// Go to a screen
router.push('/(tabs)/explore');

// Replace current screen
router.replace('/auth/welcome');

// Go back
router.back();

// Pass parameters
router.push({
  pathname: '/details',
  params: { id: '123' }
});
```

---

## 🎯 **State Management (Zustand)**

### **Auth Store**
```tsx
import { useAuthStore } from '@/store/authStore';

const { user, isAuthenticated, login, logout } = useAuthStore();

// Login
await login(email, password);

// Logout
await logout();

// Get current user
const currentUser = useAuthStore(state => state.user);
```

### **Storage Service**
```tsx
import { storage } from '@/services/storage';

// Save data
await storage.setItem('key', 'value');
await storage.setObject('user', userObject);

// Get data
const value = await storage.getItem('key');
const user = await storage.getObject('user');

// Remove data
await storage.removeItem('key');

// Clear all
await storage.clear();
```

---

## 🎨 **Toast Notifications**

```tsx
import Toast from 'react-native-toast-message';

// Success
Toast.show({
  type: 'success',
  text1: 'Success!',
  text2: 'Your action was completed',
});

// Error
Toast.show({
  type: 'error',
  text1: 'Error',
  text2: 'Something went wrong',
});

// Info
Toast.show({
  type: 'info',
  text1: 'Info',
  text2: 'Here's some information',
  visibilityTime: 4000, // 4 seconds
});
```

---

## 📦 **Adding New Features**

### **1. Create Feature Structure**
```
src/features/myFeature/
├── screens/
│   └── MyFeatureScreen.tsx
├── components/
│   └── MyComponent.tsx
├── hooks/
│   └── useMyFeature.ts
├── api/
│   └── myFeatureApi.ts
└── types/
    └── myFeatureTypes.ts
```

### **2. Create Screen**
```tsx
// src/features/myFeature/screens/MyFeatureScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const MyFeatureScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="p-6">
        <Text className="text-3xl font-bold text-gray-900">
          My Feature
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default MyFeatureScreen;
```

### **3. Add Route**
```tsx
// src/app/myFeature/index.tsx
export { MyFeatureScreen as default } from '@/features/myFeature/screens/MyFeatureScreen';
```

### **4. Add to Navigation**
```tsx
// src/app/_layout.tsx
<Stack.Screen name="myFeature/index" />
```

---

## 🎨 **Common Patterns**

### **Loading State**
```tsx
{loading ? (
  <View className="flex-1 justify-center items-center">
    <ActivityIndicator size="large" color="#3B82F6" />
    <Text className="mt-4 text-base text-gray-600">Loading...</Text>
  </View>
) : (
  <View>{/* Your content */}</View>
)}
```

### **Empty State**
```tsx
{items.length === 0 ? (
  <View className="flex-1 justify-center items-center py-20">
    <View className="w-24 h-24 bg-gray-100 rounded-full items-center justify-center mb-4">
      <Icon size={40} color="#9CA3AF" />
    </View>
    <Text className="text-lg font-semibold text-gray-900 mb-2">
      No Items Yet
    </Text>
    <Text className="text-sm text-gray-600 text-center px-8">
      Add your first item to get started
    </Text>
  </View>
) : (
  <View>{/* Your list */}</View>
)}
```

### **List with Horizontal Scroll**
```tsx
<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  className="px-4"
  contentContainerStyle={{ gap: 16 }}
>
  {items.map(item => (
    <View key={item.id} className="w-72">
      {/* Item content */}
    </View>
  ))}
</ScrollView>
```

### **Grid Layout**
```tsx
<View className="flex-row flex-wrap justify-between px-4">
  {items.map(item => (
    <View key={item.id} className="w-[48%] mb-4">
      {/* Item content */}
    </View>
  ))}
</View>
```

---

## 🔧 **Useful Utilities**

### **Format Currency**
```tsx
import { formatCurrency } from '@/utils/currency';

const price = formatCurrency(45000); // "₹45,000"
```

### **Format Date**
```tsx
import { formatDate } from '@/utils/formatDate';

const date = formatDate(new Date(), 'MMM DD, YYYY');
```

---

## 📝 **ESLint & TypeScript**

### **Check for Errors**
```bash
npm run lint
```

### **TypeScript Check**
```bash
npx tsc --noEmit
```

---

## 🎯 **Color Reference**

```tsx
// Primary Colors
blue-600: #3B82F6   // Main brand color
blue-700: #2563EB   // Active state

// Grays
gray-50: #F9FAFB    // Background
gray-100: #F3F4F6   // Subtle background
gray-200: #E5E7EB   // Borders
gray-600: #6B7280   // Secondary text
gray-900: #111827   // Primary text

// Accent Colors
red-500: #EF4444    // Error
red-600: #DC2626    // Error dark
green-600: #22C55E  // Success
yellow-500: #F59E0B // Warning
```

---

## 🚀 **Build for Production**

### **Android**
```bash
npm run android
eas build --platform android
```

### **iOS**
```bash
npm run ios
eas build --platform ios
```

---

## 📚 **Resources**

- **Tailwind CSS Classes:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev/icons
- **Expo Router:** https://docs.expo.dev/router/introduction/
- **Zustand:** https://docs.pmnd.rs/zustand/getting-started/introduction

---

**Happy Coding! 🎉**

