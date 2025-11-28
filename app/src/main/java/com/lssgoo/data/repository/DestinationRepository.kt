package com.lssgoo.data.repository

import com.lssgoo.data.datasource.DummyData
import com.lssgoo.data.models.Destination
import kotlinx.coroutines.delay

class DestinationRepository {
    
    private suspend fun simulateNetworkDelay() {
        delay(500)
    }
    
    suspend fun getAllDestinations(): Result<List<Destination>> {
        return try {
            simulateNetworkDelay()
            Result.success(DummyData.destinations)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun getDestinationById(id: String): Result<Destination?> {
        return try {
            simulateNetworkDelay()
            val destination = DummyData.destinations.find { it.id == id }
            Result.success(destination)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun getFeaturedDestinations(): Result<List<Destination>> {
        return try {
            simulateNetworkDelay()
            Result.success(DummyData.destinations.filter { it.isFeatured })
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun getDestinationsByContinent(continent: String): Result<List<Destination>> {
        return try {
            simulateNetworkDelay()
            Result.success(DummyData.destinations.filter { it.continent == continent })
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun searchDestinations(query: String): Result<List<Destination>> {
        return try {
            simulateNetworkDelay()
            val filtered = DummyData.destinations.filter { destination ->
                destination.name.contains(query, ignoreCase = true) ||
                destination.country.contains(query, ignoreCase = true) ||
                destination.description.contains(query, ignoreCase = true)
            }
            Result.success(filtered)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}

