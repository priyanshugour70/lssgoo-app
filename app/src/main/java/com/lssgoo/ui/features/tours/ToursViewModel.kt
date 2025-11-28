package com.lssgoo.ui.features.tours

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lssgoo.data.models.Tour
import com.lssgoo.data.repository.TourRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

data class ToursUiState(
    val isLoading: Boolean = false,
    val tours: List<Tour> = emptyList(),
    val filteredTours: List<Tour> = emptyList(),
    val selectedCategory: String = "All",
    val searchQuery: String = "",
    val error: String? = null
)

class ToursViewModel : ViewModel() {
    private val tourRepository = TourRepository()
    
    private val _uiState = MutableStateFlow(ToursUiState())
    val uiState: StateFlow<ToursUiState> = _uiState.asStateFlow()
    
    val categories = listOf(
        "All",
        "Adventure",
        "Cultural",
        "Leisure",
        "Beach & Relaxation",
        "City Tour",
        "Wellness",
        "Food & Culinary",
        "Luxury"
    )
    
    init {
        loadTours()
    }
    
    fun loadTours() {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            
            try {
                val result = tourRepository.getAllTours()
                val tours = result.getOrNull() ?: emptyList()
                
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    tours = tours,
                    filteredTours = tours
                )
            } catch (e: Exception) {
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    error = e.message
                )
            }
        }
    }
    
    fun filterByCategory(category: String) {
        val filtered = if (category == "All") {
            _uiState.value.tours
        } else {
            _uiState.value.tours.filter { it.category == category }
        }
        
        _uiState.value = _uiState.value.copy(
            selectedCategory = category,
            filteredTours = filtered
        )
    }
    
    fun searchTours(query: String) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(searchQuery = query)
            
            if (query.isEmpty()) {
                filterByCategory(_uiState.value.selectedCategory)
                return@launch
            }
            
            val result = tourRepository.searchTours(query)
            val searchResults = result.getOrNull() ?: emptyList()
            
            val filtered = if (_uiState.value.selectedCategory == "All") {
                searchResults
            } else {
                searchResults.filter { it.category == _uiState.value.selectedCategory }
            }
            
            _uiState.value = _uiState.value.copy(filteredTours = filtered)
        }
    }
}

