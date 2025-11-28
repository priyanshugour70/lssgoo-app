package com.lssgoo.ui.features.destinations

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavController
import com.lssgoo.ui.components.DestinationCard
import com.lssgoo.ui.layouts.CategoryChips
import com.lssgoo.ui.layouts.MainTopBar
import com.lssgoo.ui.layouts.SearchBarComponent
import com.lssgoo.ui.navigation.Screen

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DestinationsScreen(
    navController: NavController,
    viewModel: DestinationsViewModel = viewModel()
) {
    val uiState by viewModel.uiState.collectAsState()
    
    Scaffold(
        topBar = {
            MainTopBar(
                title = "Destinations",
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
                onQueryChange = { viewModel.searchDestinations(it) },
                onSearch = { },
                onFilterClick = { /* TODO */ },
                placeholder = "Search destinations..."
            )
            
            // Continent Chips
            CategoryChips(
                categories = viewModel.continents,
                selectedCategory = uiState.selectedContinent,
                onCategorySelected = { viewModel.filterByContinent(it) }
            )
            
            Divider(modifier = Modifier.padding(vertical = 8.dp))
            
            // Destinations Grid
            when {
                uiState.isLoading -> {
                    Box(
                        modifier = Modifier.fillMaxSize(),
                        contentAlignment = Alignment.Center
                    ) {
                        CircularProgressIndicator()
                    }
                }
                
                uiState.filteredDestinations.isEmpty() -> {
                    Box(
                        modifier = Modifier.fillMaxSize(),
                        contentAlignment = Alignment.Center
                    ) {
                        Column(
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.spacedBy(8.dp)
                        ) {
                            Text(
                                text = "No destinations found",
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
                    Column {
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(horizontal = 16.dp, vertical = 8.dp),
                            horizontalArrangement = Arrangement.SpaceBetween,
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Text(
                                text = "${uiState.filteredDestinations.size} destinations",
                                style = MaterialTheme.typography.titleMedium
                            )
                        }
                        
                        LazyVerticalGrid(
                            columns = GridCells.Fixed(2),
                            contentPadding = PaddingValues(16.dp),
                            horizontalArrangement = Arrangement.spacedBy(12.dp),
                            verticalArrangement = Arrangement.spacedBy(12.dp)
                        ) {
                            items(uiState.filteredDestinations) { destination ->
                                DestinationCard(
                                    destination = destination,
                                    onClick = {
                                        navController.navigate(
                                            Screen.destinationDetailRoute(destination.id)
                                        )
                                    },
                                    modifier = Modifier.fillMaxWidth()
                                )
                            }
                        }
                    }
                }
            }
        }
    }
}

