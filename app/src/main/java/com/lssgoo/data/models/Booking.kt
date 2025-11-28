package com.lssgoo.data.models

data class Booking(
    val id: String,
    val tourId: String,
    val userId: String,
    val tourTitle: String,
    val tourImageUrl: String,
    val bookingDate: String,
    val travelDate: String,
    val numberOfPeople: Int,
    val totalAmount: Double,
    val status: BookingStatus,
    val confirmationCode: String
)

enum class BookingStatus {
    PENDING,
    CONFIRMED,
    COMPLETED,
    CANCELLED
}

