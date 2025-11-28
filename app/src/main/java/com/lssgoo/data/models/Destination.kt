package com.lssgoo.data.models

data class Destination(
    val id: String,
    val name: String,
    val country: String,
    val description: String,
    val shortDescription: String,
    val imageUrl: String,
    val images: List<String> = emptyList(),
    val rating: Float,
    val tourCount: Int,
    val popularAttractions: List<String> = emptyList(),
    val bestTimeToVisit: String,
    val averageTemperature: String,
    val currency: String,
    val language: String,
    val timeZone: String,
    val isFeatured: Boolean = false,
    val continent: String
)

