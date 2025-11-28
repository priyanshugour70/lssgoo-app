package com.lssgoo.data.repository

import com.lssgoo.data.datasource.DummyData
import com.lssgoo.data.models.Tour
import kotlinx.coroutines.delay

class TourRepository {
    
    // Simulate network delay
    private suspend fun simulateNetworkDelay() {
        delay(500)
    }
    
    suspend fun getAllTours(): Result<List<Tour>> {
        return try {
            simulateNetworkDelay()
            Result.success(DummyData.tours)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun getTourById(id: String): Result<Tour?> {
        return try {
            simulateNetworkDelay()
            val tour = DummyData.tours.find { it.id == id }
            Result.success(tour)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun getFeaturedTours(): Result<List<Tour>> {
        return try {
            simulateNetworkDelay()
            Result.success(DummyData.tours.filter { it.isFeatured })
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun getPopularTours(): Result<List<Tour>> {
        return try {
            simulateNetworkDelay()
            Result.success(DummyData.tours.filter { it.isPopular })
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun getToursByDestination(destination: String): Result<List<Tour>> {
        return try {
            simulateNetworkDelay()
            Result.success(DummyData.tours.filter { it.destination == destination })
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun getToursByCategory(category: String): Result<List<Tour>> {
        return try {
            simulateNetworkDelay()
            Result.success(DummyData.tours.filter { it.category == category })
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun searchTours(query: String): Result<List<Tour>> {
        return try {
            simulateNetworkDelay()
            val filtered = DummyData.tours.filter { tour ->
                tour.title.contains(query, ignoreCase = true) ||
                tour.description.contains(query, ignoreCase = true) ||
                tour.destination.contains(query, ignoreCase = true)
            }
            Result.success(filtered)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}

