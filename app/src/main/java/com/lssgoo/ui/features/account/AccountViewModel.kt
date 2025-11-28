package com.lssgoo.ui.features.account

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.lssgoo.data.models.Booking
import com.lssgoo.data.models.User
import com.lssgoo.data.repository.UserRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

data class AccountUiState(
    val isLoading: Boolean = false,
    val user: User? = null,
    val bookings: List<Booking> = emptyList(),
    val error: String? = null
)

class AccountViewModel : ViewModel() {
    private val userRepository = UserRepository()
    
    private val _uiState = MutableStateFlow(AccountUiState())
    val uiState: StateFlow<AccountUiState> = _uiState.asStateFlow()
    
    init {
        loadUserData()
    }
    
    fun loadUserData() {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, error = null)
            
            try {
                val userResult = userRepository.getCurrentUser()
                val user = userResult.getOrNull()
                
                val bookingsResult = user?.let { 
                    userRepository.getUserBookings(it.id) 
                } ?: Result.success(emptyList())
                
                _uiState.value = _uiState.value.copy(
                    isLoading = false,
                    user = user,
                    bookings = bookingsResult.getOrNull() ?: emptyList()
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

