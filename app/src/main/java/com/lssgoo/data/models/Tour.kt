package com.lssgoo.data.models

data class Tour(
    val id: String,
    val title: String,
    val description: String,
    val destination: String,
    val duration: String,
    val price: Double,
    val currency: String = "USD",
    val rating: Float,
    val reviewCount: Int,
    val imageUrl: String,
    val images: List<String> = emptyList(),
    val category: String,
    val highlights: List<String> = emptyList(),
    val included: List<String> = emptyList(),
    val excluded: List<String> = emptyList(),
    val availableDates: List<String> = emptyList(),
    val maxGroupSize: Int,
    val difficulty: String,
    val isFeatured: Boolean = false,
    val isPopular: Boolean = false
)

