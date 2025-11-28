package com.lssgoo.data.repository

import com.lssgoo.data.datasource.DummyData
import com.lssgoo.data.models.User
import com.lssgoo.data.models.Booking
import kotlinx.coroutines.delay

class UserRepository {
    
    private suspend fun simulateNetworkDelay() {
        delay(300)
    }
    
    suspend fun getCurrentUser(): Result<User> {
        return try {
            simulateNetworkDelay()
            Result.success(DummyData.currentUser)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun getUserBookings(userId: String): Result<List<Booking>> {
        return try {
            simulateNetworkDelay()
            Result.success(DummyData.bookings.filter { it.userId == userId })
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun toggleSavedTour(tourId: String): Result<Boolean> {
        return try {
            simulateNetworkDelay()
            // In a real app, this would update the backend
            Result.success(true)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun updateUserProfile(user: User): Result<User> {
        return try {
            simulateNetworkDelay()
            Result.success(user)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}

