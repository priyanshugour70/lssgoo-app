package com.lssgoo.data.models

data class Review(
    val id: String,
    val tourId: String,
    val userId: String,
    val userName: String,
    val userAvatarUrl: String,
    val rating: Float,
    val comment: String,
    val date: String,
    val helpful: Int = 0,
    val images: List<String> = emptyList()
)

