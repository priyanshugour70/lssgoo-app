package com.lssgoo.ui.navigation

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.ui.graphics.vector.ImageVector

sealed class Screen(
    val route: String,
    val title: String,
    val icon: ImageVector? = null
) {
    object Home : Screen("home", "Home", Icons.Default.Home)
    object Tours : Screen("tours", "Tours", Icons.Default.Explore)
    object Destinations : Screen("destinations", "Destinations", Icons.Default.Place)
    object Account : Screen("account", "Account", Icons.Default.Person)
    object Search : Screen("search", "Search")
    
    // Detail screens
    object TourDetail : Screen("tour_detail/{tourId}", "Tour Details")
    object DestinationDetail : Screen("destination_detail/{destinationId}", "Destination Details")
    
    companion object {
        val bottomNavItems = listOf(Home, Tours, Destinations, Account)
        
        fun tourDetailRoute(tourId: String) = "tour_detail/$tourId"
        fun destinationDetailRoute(destinationId: String) = "destination_detail/$destinationId"
    }
}

