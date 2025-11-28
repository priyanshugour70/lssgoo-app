package com.lssgoo.ui.features.home

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import com.lssgoo.ui.components.DestinationCard
import com.lssgoo.ui.components.TourCard
import com.lssgoo.ui.layouts.MainTopBar
import com.lssgoo.ui.layouts.SectionHeader
import com.lssgoo.ui.navigation.Screen
import com.lssgoo.ui.theme.GradientEnd
import com.lssgoo.ui.theme.GradientStart

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(
    navController: NavController,
    onMenuClick: () -> Unit,
    viewModel: HomeViewModel = viewModel()
) {
    val uiState by viewModel.uiState.collectAsState()
    
    Scaffold(
        topBar = {
            MainTopBar(
                title = "LssGoo",
                onMenuClick = onMenuClick,
                onNotificationClick = { /* TODO */ },
                onSearchClick = { navController.navigate(Screen.Search.route) }
            )
        }
    ) { paddingValues ->
        if (uiState.isLoading) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues),
                contentAlignment = Alignment.Center
            ) {
                CircularProgressIndicator()
            }
        } else {
            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues)
            ) {
                // Hero Section
                item {
                    HeroSection(onSearchClick = { navController.navigate(Screen.Search.route) })
                }
                
                // Quick Actions
                item {
                    QuickActionsSection()
                }
                
                item { Spacer(modifier = Modifier.height(8.dp)) }
                
                // Featured Destinations
                item {
                    SectionHeader(
                        title = "Featured Destinations",
                        subtitle = "Discover amazing places",
                        onSeeAllClick = {
                            navController.navigate(Screen.Destinations.route)
                        }
                    )
                }
                
                item {
                    LazyRow(
                        modifier = Modifier.fillMaxWidth(),
                        contentPadding = PaddingValues(horizontal = 16.dp),
                        horizontalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        items(uiState.featuredDestinations) { destination ->
                            DestinationCard(
                                destination = destination,
                                onClick = {
                                    navController.navigate(
                                        Screen.destinationDetailRoute(destination.id)
                                    )
                                }
                            )
                        }
                    }
                }
                
                item { Spacer(modifier = Modifier.height(24.dp)) }
                
                // Featured Tours
                item {
                    SectionHeader(
                        title = "Featured Tours",
                        subtitle = "Handpicked experiences for you",
                        onSeeAllClick = {
                            navController.navigate(Screen.Tours.route)
                        }
                    )
                }
                
                items(uiState.featuredTours.take(3)) { tour ->
                    TourCard(
                        tour = tour,
                        onClick = {
                            navController.navigate(Screen.tourDetailRoute(tour.id))
                        },
                        onFavoriteClick = { /* TODO */ },
                        modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
                    )
                }
                
                item { Spacer(modifier = Modifier.height(24.dp)) }
                
                // Popular Tours
                item {
                    SectionHeader(
                        title = "Popular Tours",
                        subtitle = "Trending among travelers",
                        onSeeAllClick = {
                            navController.navigate(Screen.Tours.route)
                        }
                    )
                }
                
                items(uiState.popularTours.take(3)) { tour ->
                    TourCard(
                        tour = tour,
                        onClick = {
                            navController.navigate(Screen.tourDetailRoute(tour.id))
                        },
                        onFavoriteClick = { /* TODO */ },
                        modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
                    )
                }
                
                item { Spacer(modifier = Modifier.height(24.dp)) }
                
                // Categories Section
                item {
                    TravelCategoriesSection()
                }
                
                item { Spacer(modifier = Modifier.height(24.dp)) }
                
                // Special Offers Section
                item {
                    SpecialOffersSection(navController = navController)
                }
                
                item { Spacer(modifier = Modifier.height(24.dp)) }
                
                // Travel Tips Section
                item {
                    TravelTipsSection()
                }
                
                item { Spacer(modifier = Modifier.height(24.dp)) }
                
                // Statistics Section
                item {
                    StatisticsSection()
                }
                
                item { Spacer(modifier = Modifier.height(32.dp)) }
            }
        }
    }
}

@Composable
fun TravelCategoriesSection() {
    Column {
        SectionHeader(
            title = "Travel by Category",
            subtitle = "Choose your adventure style"
        )
        
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            CategoryCard(
                title = "Adventure",
                icon = Icons.Default.Terrain,
                modifier = Modifier.weight(1f)
            )
            CategoryCard(
                title = "Beach",
                icon = Icons.Default.BeachAccess,
                modifier = Modifier.weight(1f)
            )
        }
        Spacer(modifier = Modifier.height(12.dp))
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            CategoryCard(
                title = "Culture",
                icon = Icons.Default.Museum,
                modifier = Modifier.weight(1f)
            )
            CategoryCard(
                title = "Food",
                icon = Icons.Default.Restaurant,
                modifier = Modifier.weight(1f)
            )
        }
    }
}

@Composable
fun CategoryCard(
    title: String,
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier.height(100.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.primaryContainer
        )
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Icon(
                imageVector = icon,
                contentDescription = title,
                modifier = Modifier.size(36.dp),
                tint = MaterialTheme.colorScheme.primary
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = title,
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.onPrimaryContainer
            )
        }
    }
}

@Composable
fun SpecialOffersSection(navController: NavController) {
    Column {
        SectionHeader(
            title = "Special Offers",
            subtitle = "Limited time deals"
        )
        
        Card(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp),
            colors = CardDefaults.cardColors(
                containerColor = MaterialTheme.colorScheme.secondaryContainer
            )
        ) {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(20.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column(modifier = Modifier.weight(1f)) {
                    Surface(
                        color = MaterialTheme.colorScheme.secondary,
                        shape = MaterialTheme.shapes.small
                    ) {
                        Text(
                            text = "Save up to 30%",
                            modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp),
                            style = MaterialTheme.typography.labelLarge,
                            color = Color.White,
                            fontWeight = FontWeight.Bold
                        )
                    }
                    Spacer(modifier = Modifier.height(12.dp))
                    Text(
                        text = "Early Bird Deals",
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.Bold
                    )
                    Text(
                        text = "Book now and save on summer tours",
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSecondaryContainer.copy(alpha = 0.7f)
                    )
                    Spacer(modifier = Modifier.height(12.dp))
                    Button(
                        onClick = { navController.navigate(Screen.Tours.route) },
                        colors = ButtonDefaults.buttonColors(
                            containerColor = MaterialTheme.colorScheme.secondary
                        )
                    ) {
                        Text("View Deals")
                    }
                }
                Icon(
                    imageVector = Icons.Default.LocalOffer,
                    contentDescription = "Offers",
                    modifier = Modifier.size(80.dp),
                    tint = MaterialTheme.colorScheme.secondary.copy(alpha = 0.3f)
                )
            }
        }
    }
}

@Composable
fun TravelTipsSection() {
    Column {
        SectionHeader(
            title = "Travel Tips & Guides",
            subtitle = "Make your journey memorable"
        )
        
        val tips = listOf(
            Triple(Icons.Default.Check, "Passport Ready", "Check your passport validity"),
            Triple(Icons.Default.CameraAlt, "Pack Light", "Travel with carry-on only"),
            Triple(Icons.Default.LocalHospital, "Travel Insurance", "Protect your trip")
        )
        
        tips.forEach { (icon, title, description) ->
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 8.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Surface(
                    color = MaterialTheme.colorScheme.tertiaryContainer,
                    shape = CircleShape,
                    modifier = Modifier.size(48.dp)
                ) {
                    Box(contentAlignment = Alignment.Center) {
                        Icon(
                            imageVector = icon,
                            contentDescription = title,
                            tint = MaterialTheme.colorScheme.tertiary
                        )
                    }
                }
                Spacer(modifier = Modifier.width(16.dp))
                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = title,
                        style = MaterialTheme.typography.titleSmall,
                        fontWeight = FontWeight.Bold
                    )
                    Text(
                        text = description,
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
                    )
                }
            }
        }
    }
}

@Composable
fun StatisticsSection() {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp),
        colors = CardDefaults.cardColors(
            containerColor = MaterialTheme.colorScheme.surfaceVariant
        )
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(20.dp)
        ) {
            Text(
                text = "Why Choose LssGoo?",
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.Bold
            )
            Spacer(modifier = Modifier.height(16.dp))
            
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceEvenly
            ) {
                StatItem(
                    value = "50K+",
                    label = "Happy Travelers"
                )
                Divider(
                    modifier = Modifier
                        .width(1.dp)
                        .height(50.dp)
                )
                StatItem(
                    value = "200+",
                    label = "Destinations"
                )
                Divider(
                    modifier = Modifier
                        .width(1.dp)
                        .height(50.dp)
                )
                StatItem(
                    value = "4.8★",
                    label = "Average Rating"
                )
            }
        }
    }
}

@Composable
fun StatItem(
    value: String,
    label: String
) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = value,
            style = MaterialTheme.typography.headlineMedium,
            fontWeight = FontWeight.Bold,
            color = MaterialTheme.colorScheme.primary
        )
        Text(
            text = label,
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
        )
    }
}

@Composable
fun HeroSection(onSearchClick: () -> Unit) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(160.dp)
            .background(
                brush = Brush.horizontalGradient(
                    colors = listOf(GradientStart, GradientEnd)
                )
            ),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.padding(16.dp)
        ) {
            Text(
                text = "Explore the World",
                style = MaterialTheme.typography.headlineMedium,
                fontWeight = FontWeight.Bold,
                color = Color.White
            )
            Spacer(modifier = Modifier.height(8.dp))
            Text(
                text = "Discover amazing destinations and unforgettable experiences",
                style = MaterialTheme.typography.bodyMedium,
                color = Color.White.copy(alpha = 0.9f)
            )
            Spacer(modifier = Modifier.height(16.dp))
            // Search button
            FilledTonalButton(
                onClick = onSearchClick,
                modifier = Modifier
                    .fillMaxWidth(0.9f)
                    .height(50.dp),
                colors = ButtonDefaults.filledTonalButtonColors(
                    containerColor = Color.White,
                    contentColor = MaterialTheme.colorScheme.primary
                ),
                shape = MaterialTheme.shapes.medium
            ) {
                Icon(
                    imageVector = Icons.Default.Search,
                    contentDescription = "Search",
                    modifier = Modifier.size(20.dp)
                )
                Spacer(modifier = Modifier.width(8.dp))
                Text(
                    text = "Search tours, destinations...",
                    style = MaterialTheme.typography.bodyLarge
                )
            }
        }
    }
}

@Composable
fun QuickActionsSection() {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        horizontalArrangement = Arrangement.SpaceEvenly
    ) {
        QuickActionItem(
            icon = Icons.Default.Flight,
            label = "Flights",
            onClick = { /* TODO */ }
        )
        QuickActionItem(
            icon = Icons.Default.Hotel,
            label = "Hotels",
            onClick = { /* TODO */ }
        )
        QuickActionItem(
            icon = Icons.Default.LocalActivity,
            label = "Activities",
            onClick = { /* TODO */ }
        )
        QuickActionItem(
            icon = Icons.Default.Restaurant,
            label = "Dining",
            onClick = { /* TODO */ }
        )
    }
}

@Composable
fun QuickActionItem(
    icon: androidx.compose.ui.graphics.vector.ImageVector,
    label: String,
    onClick: () -> Unit
) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.width(80.dp)
    ) {
        FilledTonalButton(
            onClick = onClick,
            modifier = Modifier.size(64.dp),
            shape = MaterialTheme.shapes.large,
            colors = ButtonDefaults.filledTonalButtonColors(
                containerColor = MaterialTheme.colorScheme.primaryContainer
            )
        ) {
            Icon(
                imageVector = icon,
                contentDescription = label,
                modifier = Modifier.size(32.dp),
                tint = MaterialTheme.colorScheme.primary
            )
        }
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = label,
            style = MaterialTheme.typography.bodySmall,
            fontWeight = FontWeight.Medium
        )
    }
}

