# LssGoo Architecture Documentation

## 📐 Architecture Overview

LssGoo follows **Clean Architecture** principles with clear separation of concerns across three main layers:

```
┌─────────────────────────────────────────────────────────────┐
│                     PRESENTATION LAYER                       │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────┐   │
│  │  Screens   │  │ ViewModels │  │  UI Components     │   │
│  │  (Compose) │  │  (State)   │  │  (Reusable)        │   │
│  └────────────┘  └────────────┘  └────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                      DOMAIN LAYER                            │
│  ┌────────────────┐  ┌─────────────────────────────────┐   │
│  │  Use Cases     │  │      Business Logic             │   │
│  │  (Future)      │  │      (In ViewModels)            │   │
│  └────────────────┘  └─────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                       DATA LAYER                             │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────┐   │
│  │ Repository │  │ Data Source│  │     Models         │   │
│  │  (Pattern) │  │ (Dummy/API)│  │  (Data Classes)    │   │
│  └────────────┘  └────────────┘  └────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## 🎯 Layer Responsibilities

### Presentation Layer (`ui/`)
**Responsibility**: Display data and handle user interactions

#### Components:
- **Screens**: Full-screen composables for each feature
  - `HomeScreen.kt`: Main landing page
  - `ToursScreen.kt`: Tour listings and search
  - `DestinationsScreen.kt`: Destination browsing
  - `AccountScreen.kt`: User profile and settings

- **ViewModels**: Manage UI state and business logic
  - Hold `StateFlow` for reactive UI updates
  - Fetch data from repositories
  - Handle user actions
  - Survive configuration changes

- **Components**: Reusable UI elements
  - `TourCard.kt`: Display tour information
  - `DestinationCard.kt`: Show destination details
  - `NetworkImage.kt`: Handle image loading

- **Layouts**: Structural components
  - `TopBar.kt`: App bar with branding
  - `SearchBar.kt`: Search functionality
  - `CategoryChips.kt`: Filter chips
  - `SectionHeader.kt`: Section titles

### Data Layer (`data/`)
**Responsibility**: Provide and manage data

#### Components:
- **Models**: Data structures
  ```kotlin
  data class Tour(
      val id: String,
      val title: String,
      val price: Double,
      // ... more fields
  )
  ```

- **Repositories**: Data abstraction
  ```kotlin
  class TourRepository {
      suspend fun getAllTours(): Result<List<Tour>>
      suspend fun getTourById(id: String): Result<Tour?>
  }
  ```

- **Data Sources**: Actual data providers
  - Currently: `DummyData.kt` (static data)
  - Future: API services (Retrofit/Ktor)

## 🔄 Data Flow

```
User Action
    ↓
Screen (Composable)
    ↓
ViewModel
    ↓
Repository
    ↓
Data Source (DummyData/API)
    ↓
Repository
    ↓
ViewModel (StateFlow)
    ↓
Screen (Recompose)
    ↓
Updated UI
```

## 🧩 Design Patterns

### 1. Repository Pattern
**Purpose**: Abstraction layer between data sources and business logic

**Benefits**:
- Easy to swap data sources (Dummy → API)
- Centralized data management
- Testability

**Example**:
```kotlin
class TourRepository {
    // Currently uses DummyData
    suspend fun getAllTours(): Result<List<Tour>> {
        return try {
            Result.success(DummyData.tours)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    // Future API implementation
    // suspend fun getAllTours(): Result<List<Tour>> {
    //     return apiService.getTours()
    // }
}
```

### 2. MVVM (Model-View-ViewModel)
**Purpose**: Separate UI from business logic

**Components**:
- **Model**: Data classes (`Tour`, `Destination`, etc.)
- **View**: Composables (`HomeScreen`, `ToursScreen`, etc.)
- **ViewModel**: State management and logic

**Example**:
```kotlin
class HomeViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(HomeUiState())
    val uiState: StateFlow<HomeUiState> = _uiState.asStateFlow()
    
    init {
        loadData()
    }
    
    fun loadData() {
        viewModelScope.launch {
            val tours = tourRepository.getFeaturedTours()
            _uiState.value = _uiState.value.copy(tours = tours)
        }
    }
}
```

### 3. State Hoisting
**Purpose**: Make composables stateless and reusable

**Example**:
```kotlin
@Composable
fun SearchBar(
    query: String,                    // State from parent
    onQueryChange: (String) -> Unit,  // Event to parent
) {
    TextField(
        value = query,
        onValueChange = onQueryChange
    )
}
```

## 📦 Module Structure

```
app/
├── data/
│   ├── models/           # Data classes
│   ├── datasource/       # Data providers
│   └── repository/       # Repository implementations
│
├── ui/
│   ├── theme/           # App theming
│   ├── components/      # Reusable UI
│   ├── layouts/         # Layout components
│   ├── navigation/      # Navigation setup
│   └── features/        # Feature modules
│       ├── home/
│       ├── tours/
│       ├── destinations/
│       └── account/
```

## 🚀 Navigation Architecture

### Navigation Graph
```kotlin
sealed class Screen(val route: String) {
    object Home : Screen("home")
    object Tours : Screen("tours")
    object Destinations : Screen("destinations")
    object Account : Screen("account")
}
```

### Bottom Navigation
- Material 3 NavigationBar
- 4 main destinations
- State-aware selection
- Smooth transitions

### Screen Transitions
```kotlin
enterTransition = slideInHorizontally + fadeIn
exitTransition = slideOutHorizontally + fadeOut
```

## 🎨 UI Architecture

### Compose Best Practices

1. **Stateless Composables**
   ```kotlin
   @Composable
   fun TourCard(
       tour: Tour,              // State
       onClick: () -> Unit      // Event
   )
   ```

2. **ViewModels for State**
   ```kotlin
   @Composable
   fun HomeScreen(
       viewModel: HomeViewModel = viewModel()
   ) {
       val uiState by viewModel.uiState.collectAsState()
   }
   ```

3. **Material 3 Components**
   - Scaffold for screen structure
   - Card for content grouping
   - NavigationBar for tabs
   - TopAppBar for headers

## 📊 State Management

### UI State Pattern
```kotlin
data class ToursUiState(
    val isLoading: Boolean = false,
    val tours: List<Tour> = emptyList(),
    val error: String? = null
)
```

### StateFlow for Reactivity
```kotlin
private val _uiState = MutableStateFlow(ToursUiState())
val uiState: StateFlow<ToursUiState> = _uiState.asStateFlow()
```

### Coroutines for Async Operations
```kotlin
viewModelScope.launch {
    _uiState.value = _uiState.value.copy(isLoading = true)
    val result = repository.getTours()
    _uiState.value = _uiState.value.copy(
        isLoading = false,
        tours = result.getOrNull() ?: emptyList()
    )
}
```

## 🔌 API Integration (Future)

### Current Structure (Dummy Data)
```kotlin
object DummyData {
    val tours = listOf(/* ... */)
    val destinations = listOf(/* ... */)
}
```

### Future Structure (API)
```kotlin
interface TravelApiService {
    @GET("tours")
    suspend fun getTours(): List<Tour>
    
    @GET("tours/{id}")
    suspend fun getTourById(@Path("id") id: String): Tour
}

class TourRepository(
    private val apiService: TravelApiService
) {
    suspend fun getAllTours(): Result<List<Tour>> {
        return try {
            Result.success(apiService.getTours())
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
```

## 🧪 Testing Strategy

### Unit Tests
- ViewModels logic
- Repository operations
- Data transformations

### Integration Tests
- Repository + API interaction
- Navigation flows

### UI Tests
- Compose testing
- User interactions
- Navigation

## 🔄 Migration Paths

### 1. Dummy Data → REST API
**Steps**:
1. Add Retrofit dependencies
2. Create API service interfaces
3. Update repositories to use API
4. Add error handling
5. Implement caching strategy

### 2. Android → Multiplatform
**Steps**:
1. Create shared module
2. Move models to commonMain
3. Move repositories to commonMain
4. Keep UI in platform folders
5. Add platform-specific implementations

## 📈 Scalability Considerations

### Current Structure Supports:
✅ Easy API integration  
✅ Feature module additions  
✅ Multiplatform migration  
✅ Dependency injection (future)  
✅ Testing at all layers  
✅ Code reusability  

### Future Enhancements:
- Use Cases layer (Domain layer)
- Dependency Injection (Hilt/Koin)
- Local database (Room)
- Offline-first architecture
- GraphQL instead of REST
- Multi-module architecture

## 🎯 Key Architecture Benefits

1. **Separation of Concerns**: Each layer has clear responsibilities
2. **Testability**: Isolated components easy to test
3. **Maintainability**: Changes in one layer don't affect others
4. **Scalability**: Easy to add new features
5. **Reusability**: Components can be reused across screens
6. **Migration Ready**: Structure supports platform expansion

---

This architecture ensures LssGoo is production-ready, maintainable, and scalable for future growth! 🚀

