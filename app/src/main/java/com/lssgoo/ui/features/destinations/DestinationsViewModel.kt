package com.lssgoo.ui.features.destinations

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lssgoo.data.models.Destination
import com.lssgoo.data.repository.DestinationRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

data class DestinationsUiState(
    val isLoading: Boolean = false,
    val destinations: List<Destination> = emptyList(),
    val filteredDestinations: List<Destination> = emptyList(),
    val selectedContinent: String = "All",
    val searchQuery: String = "",
    val error: String? = null
)

class DestinationsViewModel : ViewModel() {
    private val destinationRepository = DestinationRepository()
    
    private val _uiState = MutableStateFlow(DestinationsUiState())
    val uiState: StateFlow<DestinationsUiState> = _uiState.asStateFlow()
    
    val continents = listOf(
        "All",
        "Asia",
        "Europe",
        "North America",
        "South America",
        "Africa",
        "Oceania"
    )
    
    init {
        loadDestinations()
    }
    
    fun loadDestinations() {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            
            try {
                val result = destinationRepository.getAllDestinations()
                val destinations = result.getOrNull() ?: emptyList()
                
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    destinations = destinations,
                    filteredDestinations = destinations
                )
            } catch (e: Exception) {
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    error = e.message
                )
            }
        }
    }
    
    fun filterByContinent(continent: String) {
        val filtered = if (continent == "All") {
            _uiState.value.destinations
        } else {
            _uiState.value.destinations.filter { it.continent == continent }
        }
        
        _uiState.value = _uiState.value.copy(
            selectedContinent = continent,
            filteredDestinations = filtered
        )
    }
    
    fun searchDestinations(query: String) {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(searchQuery = query)
            
            if (query.isEmpty()) {
                filterByContinent(_uiState.value.selectedContinent)
                return@launch
            }
            
            val result = destinationRepository.searchDestinations(query)
            val searchResults = result.getOrNull() ?: emptyList()
            
            val filtered = if (_uiState.value.selectedContinent == "All") {
                searchResults
            } else {
                searchResults.filter { it.continent == _uiState.value.selectedContinent }
            }
            
            _uiState.value = _uiState.value.copy(filteredDestinations = filtered)
        }
    }
}

