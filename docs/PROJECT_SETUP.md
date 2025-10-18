# LssGoo Tours & Travels - React Native App

## 🌟 Project Overview

LssGoo Tours & Travels is a premier travel agency application specializing in creating unforgettable travel experiences across India and international destinations. Our tagline **"Let's Go Explore"** reflects our commitment to helping travelers discover amazing destinations with personalized service.

## 🚀 Tech Stack

- **Framework**: React Native 0.82
- **Language**: TypeScript
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **State Management**: React Context API + Hooks
- **Navigation**: React Navigation (to be implemented)
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js >= 20
- npm or yarn
- iOS Development: Xcode (macOS only)
- Android Development: Android Studio, JDK

## 🛠️ Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. iOS Setup (macOS only)

```bash
cd ios
pod install
cd ..
```

### 3. Run the Application

#### iOS
```bash
npm run ios
```

#### Android
```bash
npm run android
```

#### Start Metro Bundler
```bash
npm start
```

## 📱 Company Information

- **Company Name**: Lss Goo
- **Website**: https://lssgoo.com
- **Email**: info@lssgoo.com
- **Phone**: +91-9098393937, +91-9993112018
- **Address**: Grand Vitara, Sector 46, Gurugram, Haryana 122003, India
- **Founded**: 2020

## 🎨 Features

### Core Services
1. Domestic Tours across India
2. International Tours worldwide
3. Adventure Travel experiences
4. Cultural Tours and heritage sites
5. Luxury Travel packages
6. Group Tours for corporates and families
7. Honeymoon Packages
8. Corporate Travel solutions
9. Pilgrimage Tours
10. Wildlife Safaris

### Key Specialties
- ✨ Customized Itineraries
- 🧭 Expert Local Guides
- 📞 24/7 Customer Support
- 💰 Best Price Guarantee
- 🌱 Sustainable Tourism Practices

## 📂 Project Structure

```
LssGoo/
├── android/                    # Android native code
├── ios/                        # iOS native code
├── src/                        # Application source code
│   ├── components/            # Reusable UI components
│   │   ├── ui/               # Basic UI components
│   │   └── layout/           # Layout components
│   ├── screens/              # Application screens
│   ├── hooks/                # Custom React hooks
│   ├── services/             # API and business logic
│   ├── utils/                # Utility functions
│   ├── types/                # TypeScript definitions
│   ├── constants/            # App constants & company info
│   ├── context/              # React Context providers
│   └── styles/               # Global styles
├── assets/                    # Static assets (images, fonts)
│   └── logo/                 # Company logos
├── App.tsx                    # Root component
├── index.js                   # Entry point
└── tailwind.config.js        # Tailwind configuration
```

See `src/README.md` for detailed directory structure documentation.

## 🎨 Design System

### Colors
- **Primary**: Blue (#007AFF) - Main brand color
- **Secondary**: Orange (#FF9800) - Accent color
- **Success**: Green (#2E7D32)
- **Warning**: Orange (#FF9800)
- **Error**: Red (#F44336)

### Typography
- System font (San Francisco on iOS, Roboto on Android)
- Font sizes: xs (12px) to 5xl (48px)

### Spacing
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 40px
- 3xl: 48px
- 4xl: 64px

## 🧪 Testing

```bash
npm test
```

## 🔍 Linting

```bash
npm run lint
```

## 📝 Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm test` - Run tests
- `npm run lint` - Lint code

## 🌐 Environment Setup

Create a `.env` file in the root directory:

```env
API_BASE_URL=https://api.lssgoo.com
```

## 📱 App Configuration

### iOS
- Bundle ID: `com.lssgoo.tours`
- Display Name: LssGoo Tours
- Minimum iOS Version: 13.0

### Android
- Package: `com.lssgoo.tours`
- Min SDK: 21 (Android 5.0)
- Target SDK: 34

## 🔐 Permissions

### iOS (Info.plist)
- Location (When In Use)
- Location (Always)
- Camera
- Photo Library
- Contacts

### Android (AndroidManifest.xml)
- INTERNET
- ACCESS_FINE_LOCATION
- ACCESS_COARSE_LOCATION
- CAMERA
- READ_EXTERNAL_STORAGE
- WRITE_EXTERNAL_STORAGE

## 🚧 Development Status

### ✅ Completed
- [x] Project structure setup
- [x] TypeScript configuration
- [x] NativeWind/Tailwind CSS setup
- [x] Company information constants
- [x] Basic UI components
- [x] Type definitions
- [x] Services architecture
- [x] Hooks setup
- [x] iOS & Android configuration

### 🔄 In Progress
- [ ] Navigation setup
- [ ] Authentication flow
- [ ] API integration
- [ ] Screen implementations

### 📅 Planned
- [ ] Destination browsing
- [ ] Booking system
- [ ] User profile
- [ ] Search & filters
- [ ] Payment integration
- [ ] Notifications
- [ ] Offline support
- [ ] Multi-language support

## 📚 Documentation

- [Source Code Structure](src/README.md)
- [Component Documentation](src/components/README.md) (To be added)
- [API Documentation](docs/API.md) (To be added)

## 🤝 Development Guidelines

1. **Code Style**: Follow ESLint rules
2. **Commits**: Use conventional commits format
3. **Branching**: Feature branches from `main`
4. **Testing**: Write tests for new features
5. **Documentation**: Update docs for new features

## 🐛 Troubleshooting

### Metro Bundler Issues
```bash
npm start -- --reset-cache
```

### iOS Build Issues
```bash
cd ios && pod install && cd ..
rm -rf ios/Pods ios/Podfile.lock
pod install --repo-update
```

### Android Build Issues
```bash
cd android && ./gradlew clean
```

## 📞 Support

- Email: info@lssgoo.com
- Phone: +91-9098393937
- Emergency: +91-9993112018
- Office Hours: Monday to Saturday, 9:00 AM - 7:00 PM IST

## 🌐 Social Media

- Facebook: https://www.facebook.com/lssgoo
- Instagram: https://www.instagram.com/lssgoo
- Twitter: https://twitter.com/lssgoo
- LinkedIn: https://www.linkedin.com/company/lss-goo
- YouTube: https://www.youtube.com/c/lssgoo

## 📄 License

Proprietary - All rights reserved by Lss Goo

## 👥 Team

LssGoo Development Team

---

**Built with ❤️ by the LssGoo Team**

*Let's Go Explore! 🌍✈️*

