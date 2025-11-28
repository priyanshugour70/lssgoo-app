package com.lssgoo.data.models

data class User(
    val id: String,
    val name: String,
    val email: String,
    val phone: String,
    val avatarUrl: String,
    val memberSince: String,
    val totalBookings: Int,
    val savedTours: List<String> = emptyList(),
    val preferences: UserPreferences = UserPreferences()
)

data class UserPreferences(
    val favoriteDestinations: List<String> = emptyList(),
    val preferredCategories: List<String> = emptyList(),
    val budgetRange: Pair<Double, Double> = Pair(0.0, 10000.0),
    val notificationsEnabled: Boolean = true,
    val currency: String = "USD"
)

