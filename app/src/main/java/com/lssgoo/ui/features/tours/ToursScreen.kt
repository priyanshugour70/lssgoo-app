package com.lssgoo.ui.features.tours

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import com.lssgoo.ui.components.TourCard
import com.lssgoo.ui.layouts.CategoryChips
import com.lssgoo.ui.layouts.MainTopBar
import com.lssgoo.ui.layouts.SearchBarComponent
import com.lssgoo.ui.navigation.Screen

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ToursScreen(
    navController: NavController,
    viewModel: ToursViewModel = viewModel()
) {
    val uiState by viewModel.uiState.collectAsState()
    
    Scaffold(
        topBar = {
            MainTopBar(
                title = "Tours",
                onNotificationClick = { /* TODO */ },
                onSearchClick = { /* TODO */ }
            )
        }
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            // Search Bar
            SearchBarComponent(
                query = uiState.searchQuery,
                onQueryChange = { viewModel.searchTours(it) },
                onSearch = { },
                onFilterClick = { /* TODO */ },
                placeholder = "Search tours..."
            )
            
            // Category Chips
            CategoryChips(
                categories = viewModel.categories,
                selectedCategory = uiState.selectedCategory,
                onCategorySelected = { viewModel.filterByCategory(it) }
            )
            
            Divider(modifier = Modifier.padding(vertical = 8.dp))
            
            // Tours List
            when {
                uiState.isLoading -> {
                    Box(
                        modifier = Modifier.fillMaxSize(),
                        contentAlignment = Alignment.Center
                    ) {
                        CircularProgressIndicator()
                    }
                }
                
                uiState.filteredTours.isEmpty() -> {
                    Box(
                        modifier = Modifier.fillMaxSize(),
                        contentAlignment = Alignment.Center
                    ) {
                        Column(
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            Text(
                                text = "No tours found",
                                style = MaterialTheme.typography.titleMedium
                            )
                            Text(
                                text = "Try adjusting your filters",
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
                            )
                        }
                    }
                }
                
                else -> {
                    LazyColumn(
                        contentPadding = PaddingValues(16.dp),
                        verticalArrangement = Arrangement.spacedBy(16.dp)
                    ) {
                        item {
                            Row(
                                modifier = Modifier.fillMaxWidth(),
                                horizontalArrangement = Arrangement.SpaceBetween,
                                verticalAlignment = Alignment.CenterVertically
                            ) {
                                Text(
                                    text = "${uiState.filteredTours.size} tours available",
                                    style = MaterialTheme.typography.titleMedium
                                )
                            }
                        }
                        
                        items(uiState.filteredTours) { tour ->
                            TourCard(
                                tour = tour,
                                onClick = {
                                    navController.navigate(Screen.tourDetailRoute(tour.id))
                                },
                                onFavoriteClick = { /* TODO */ }
                            )
                        }
                        
                        item {
                            Spacer(modifier = Modifier.height(16.dp))
                        }
                    }
                }
            }
        }
    }
}

