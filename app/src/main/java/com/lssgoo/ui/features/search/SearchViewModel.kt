package com.lssgoo.ui.features.search

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lssgoo.data.models.Destination
import com.lssgoo.data.models.Tour
import com.lssgoo.data.repository.DestinationRepository
import com.lssgoo.data.repository.TourRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

data class SearchUiState(
    val isLoading: Boolean = false,
    val searchQuery: String = "",
    val tourResults: List<Tour> = emptyList(),
    val destinationResults: List<Destination> = emptyList(),
    val recentSearches: List<String> = listOf(
        "Bali Beach Tours",
        "Paris Cultural",
        "Tokyo Adventure",
        "Maldives Resort"
    ),
    val popularSearches: List<String> = listOf(
        "Island Hopping",
        "City Tours",
        "Mountain Hiking",
        "Beach Resorts",
        "Cultural Heritage",
        "Food & Wine",
        "Adventure Sports",
        "Luxury Travel"
    ),
    val error: String? = null
)

class SearchViewModel : ViewModel() {
    private val tourRepository = TourRepository()
    private val destinationRepository = DestinationRepository()
    
    private val _uiState = MutableStateFlow(SearchUiState())
    val uiState: StateFlow<SearchUiState> = _uiState.asStateFlow()
    
    fun onSearchQueryChange(query: String) {
        _uiState.value = _uiState.value.copy(searchQuery = query)
        
        if (query.length >= 2) {
            performSearch(query)
        } else {
            _uiState.value = _uiState.value.copy(
                tourResults = emptyList(),
                destinationResults = emptyList()
            )
        }
    }
    
    private fun performSearch(query: String) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true)
            
            try {
                val tourResults = tourRepository.searchTours(query)
                val destinationResults = destinationRepository.searchDestinations(query)
                
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    tourResults = tourResults.getOrNull() ?: emptyList(),
                    destinationResults = destinationResults.getOrNull() ?: emptyList()
                )
            } catch (e: Exception) {
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    error = e.message
                )
            }
        }
    }
    
    fun clearSearch() {
        _uiState.value = _uiState.value.copy(
            searchQuery = "",
            tourResults = emptyList(),
            destinationResults = emptyList()
        )
    }
    
    fun addToRecentSearches(query: String) {
        val currentRecent = _uiState.value.recentSearches.toMutableList()
        currentRecent.remove(query)
        currentRecent.add(0, query)
        if (currentRecent.size > 10) {
            currentRecent.removeAt(currentRecent.size - 1)
        }
        _uiState.value = _uiState.value.copy(recentSearches = currentRecent)
    }
}

