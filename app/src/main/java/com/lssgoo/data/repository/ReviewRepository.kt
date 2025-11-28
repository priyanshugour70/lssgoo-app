package com.lssgoo.data.repository

import com.lssgoo.data.datasource.DummyData
import com.lssgoo.data.models.Review
import kotlinx.coroutines.delay

class ReviewRepository {
    
    private suspend fun simulateNetworkDelay() {
        delay(400)
    }
    
    suspend fun getReviewsByTourId(tourId: String): Result<List<Review>> {
        return try {
            simulateNetworkDelay()
            Result.success(DummyData.reviews.filter { it.tourId == tourId })
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
    
    suspend fun submitReview(review: Review): Result<Review> {
        return try {
            simulateNetworkDelay()
            Result.success(review)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}

