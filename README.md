# LssGoo - Tours & Travel Android App

A beautiful, modern Android application for a Tours & Travel company built with **Jetpack Compose** and following industry-standard architecture patterns. The app is designed to be easily migrated to **Compose Multiplatform** for cross-platform support (iOS, Desktop, Web).

## ✨ Features

### 🏠 Home Screen
- Hero section with gradient background
- Quick action buttons (Flights, Hotels, Activities, Dining)
- Featured destinations carousel
- Featured & popular tours listings
- Search functionality
- Beautiful animations and transitions

### 🗺️ Tours Screen
- Comprehensive tour listings
- Category filtering (Adventure, Cultural, Leisure, Beach & Relaxation, etc.)
- Search functionality
- Detailed tour information with ratings, reviews, and pricing
- Favorite/bookmark functionality

### 🌍 Destinations Screen
- Grid layout of destinations
- Continent-based filtering
- Search functionality
- Destination details with attractions and travel info

### 👤 Account Screen
- User profile management
- Booking history with status tracking
- Statistics dashboard (bookings, saved tours, visited places)
- Settings and preferences
- Beautiful profile header with avatar

## 🏗️ Architecture & Project Structure

This project follows **Clean Architecture** principles with industry-standard patterns:

```
app/src/main/java/com/lssgoo/
├── data/                           # Data Layer
│   ├── models/                     # Data models
│   │   ├── Tour.kt
│   │   ├── Destination.kt
│   │   ├── User.kt
│   │   ├── Booking.kt
│   │   └── Review.kt
│   ├── datasource/                 # Data sources
│   │   └── DummyData.kt           # Dummy data (easily replaceable with API)
│   └── repository/                 # Repository pattern
│       ├── TourRepository.kt
│       ├── DestinationRepository.kt
│       ├── UserRepository.kt
│       └── ReviewRepository.kt
│
├── ui/                             # UI Layer
│   ├── theme/                      # App theming
│   │   ├── Color.kt
│   │   ├── Type.kt
│   │   └── Theme.kt
│   ├── components/                 # Reusable components
│   │   ├── NetworkImage.kt
│   │   ├── TourCard.kt
│   │   └── DestinationCard.kt
│   ├── layouts/                    # Layout components
│   │   ├── TopBar.kt
│   │   ├── SearchBar.kt
│   │   ├── CategoryChips.kt
│   │   └── SectionHeader.kt
│   ├── navigation/                 # Navigation setup
│   │   ├── Screen.kt
│   │   └── AppNavigation.kt
│   └── features/                   # Feature modules
│       ├── home/
│       │   ├── HomeScreen.kt
│       │   └── HomeViewModel.kt
│       ├── tours/
│       │   ├── ToursScreen.kt
│       │   └── ToursViewModel.kt
│       ├── destinations/
│       │   ├── DestinationsScreen.kt
│       │   └── DestinationsViewModel.kt
│       └── account/
│           ├── AccountScreen.kt
│           └── AccountViewModel.kt
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2196F3) - Trust, reliability
- **Secondary**: Orange (#FF6B35) - Energy, adventure
- **Accent**: Green (#4CAF50) - Nature, freshness
- **Background**: Light gray (#F5F7FA) - Clean, modern

### Typography
- Material 3 Typography system
- Bold headlines for impact
- Clear hierarchy for readability

### Components
- **Cards**: Elevated cards with rounded corners
- **Images**: Network images with loading states
- **Buttons**: Material 3 filled and tonal buttons
- **Navigation**: Bottom navigation with icons and labels

## 🛠️ Tech Stack

### Core
- **Kotlin** - Modern programming language
- **Jetpack Compose** - Declarative UI framework
- **Material 3** - Latest Material Design components

### Architecture
- **MVVM** - Model-View-ViewModel pattern
- **Repository Pattern** - Data abstraction layer
- **StateFlow** - Reactive state management
- **Coroutines** - Asynchronous programming

### Libraries
- **Navigation Compose** - Type-safe navigation
- **Coil** - Image loading library
- **Gson** - JSON parsing (ready for API integration)
- **ViewModel** - Lifecycle-aware data holders
- **LiveData/Flow** - Reactive data streams

## 🚀 Getting Started

### Prerequisites
- Android Studio Hedgehog (2023.1.1) or later
- JDK 11 or higher
- Android SDK 24 or higher
- Gradle 8.0+

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LssGoo
   ```

2. **Open in Android Studio**
   - File → Open → Select the LssGoo folder

3. **Sync Gradle**
   - Android Studio will automatically sync
   - Or click "Sync Project with Gradle Files"

4. **Run the app**
   - Select a device/emulator
   - Click the Run button (▶️)

## 📱 Running the App

### On Emulator
1. Create an Android Virtual Device (AVD) in Android Studio
2. API Level 24 or higher recommended
3. Run the app

### On Physical Device
1. Enable Developer Options on your device
2. Enable USB Debugging
3. Connect device via USB
4. Run the app

## 🔄 Migrating from Dummy Data to API

The app is designed for easy API integration. To connect to a real backend:

### Step 1: Update Repositories
In each repository file (e.g., `TourRepository.kt`):

```kotlin
// Current (Dummy Data)
val tours = DummyData.tours

// Future (API)
val tours = apiService.getTours()
```

### Step 2: Add Retrofit/Ktor
Add API client dependencies:

```kotlin
// build.gradle.kts
implementation("com.squareup.retrofit2:retrofit:2.9.0")
implementation("com.squareup.retrofit2:converter-gson:2.9.0")
```

### Step 3: Create API Service
```kotlin
interface TravelApiService {
    @GET("tours")
    suspend fun getTours(): List<Tour>
    
    @GET("destinations")
    suspend fun getDestinations(): List<Destination>
}
```

### Step 4: Update Data Sources
Replace `DummyData` calls with API calls in repositories.

## 🌐 Compose Multiplatform Migration

This app is structured to support easy migration to Compose Multiplatform:

### Preparation Steps
1. **Shared Module**: Move data models and repositories to a shared module
2. **Platform-Specific Code**: Keep UI in platform folders
3. **Common UI**: Move Compose UI to commonMain
4. **Resources**: Use Compose Resources for images and strings

### Benefits
- **Code Sharing**: 80%+ code reuse across platforms
- **Single Codebase**: Maintain one source of truth
- **Native Performance**: Compiled to native code
- **Platform APIs**: Access platform-specific features when needed

## 📸 Screenshots

*(Screenshots will be generated when running the app)*

- Home Screen with hero section and featured content
- Tours listing with filters and search
- Destinations grid with beautiful cards
- Account screen with profile and bookings

## 🎯 Key Features Implemented

✅ **Complete Home Page** with hero section, quick actions, and featured content  
✅ **Tours Page** with search, filters, and comprehensive listings  
✅ **Destinations Page** with grid layout and continent filters  
✅ **Account Page** with profile, bookings, and settings  
✅ **Navigation** with bottom tabs and smooth transitions  
✅ **Reusable Components** (Cards, Image loaders, Headers)  
✅ **Layout Components** (TopBar, SearchBar, Chips)  
✅ **Repository Pattern** for data management  
✅ **ViewModel Architecture** for state management  
✅ **Material 3 Design** with custom theme  
✅ **Network Images** from real URLs (Unsplash)  
✅ **Smooth Animations** and transitions  
✅ **Industry-Standard Structure** ready for scaling  

## 🔮 Future Enhancements

- [ ] Tour detail screen with full information
- [ ] Destination detail screen
- [ ] Booking flow and payment integration
- [ ] User authentication (Login/Signup)
- [ ] Real-time availability checking
- [ ] Reviews and ratings system
- [ ] Wishlist/Favorites persistence
- [ ] Push notifications
- [ ] Offline support with Room database
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Accessibility improvements

## 📝 Code Quality

- **Clean Architecture**: Separation of concerns
- **SOLID Principles**: Maintainable and testable code
- **Kotlin Best Practices**: Null safety, coroutines, sealed classes
- **Compose Best Practices**: State hoisting, recomposition optimization
- **Repository Pattern**: Abstracted data layer
- **MVVM Pattern**: Clear separation of UI and business logic

## 🤝 Contributing

This project follows standard Git workflow:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is created for demonstration purposes.

## 👥 Team

Developed with ❤️ for modern Android development and Tours & Travel industry.

---

## 🎉 Ready to Explore!

The app is now complete and ready to run! Simply open Android Studio, sync Gradle, and run the app to see a beautiful, fully functional Tours & Travel application with:

- **Professional UI/UX** using Material 3 Design
- **Real working images** from Unsplash
- **Smooth animations** and transitions
- **Complete navigation** flow
- **Industry-standard architecture**
- **Easy API migration** path
- **Compose Multiplatform** ready structure

Enjoy exploring the world with LssGoo! 🌍✈️🏖️

