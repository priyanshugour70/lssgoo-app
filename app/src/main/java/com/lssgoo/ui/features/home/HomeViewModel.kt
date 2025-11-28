package com.lssgoo.ui.features.home

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

data class HomeUiState(
    val isLoading: Boolean = false,
    val featuredTours: List<Tour> = emptyList(),
    val popularTours: List<Tour> = emptyList(),
    val featuredDestinations: List<Destination> = emptyList(),
    val error: String? = null
)

class HomeViewModel : ViewModel() {
    private val tourRepository = TourRepository()
    private val destinationRepository = DestinationRepository()
    
    private val _uiState = MutableStateFlow(HomeUiState())
    val uiState: StateFlow<HomeUiState> = _uiState.asStateFlow()
    
    init {
        loadData()
    }
    
    fun loadData() {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            
            try {
                val featuredToursResult = tourRepository.getFeaturedTours()
                val popularToursResult = tourRepository.getPopularTours()
                val featuredDestinationsResult = destinationRepository.getFeaturedDestinations()
                
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    featuredTours = featuredToursResult.getOrNull() ?: emptyList(),
                    popularTours = popularToursResult.getOrNull() ?: emptyList(),
                    featuredDestinations = featuredDestinationsResult.getOrNull() ?: emptyList()
                )
            } catch (e: Exception) {
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    error = e.message
                )
            }
        }
    }
}

