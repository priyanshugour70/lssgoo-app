package com.lssgoo.ui.layouts

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.lssgoo.ui.components.NetworkImage
import com.lssgoo.ui.theme.GradientEnd
import com.lssgoo.ui.theme.GradientStart

@Composable
fun DrawerContent(
    currentRoute: String,
    onNavigate: (String) -> Unit,
    onClose: () -> Unit,
    modifier: Modifier = Modifier
) {
    ModalDrawerSheet(modifier = modifier) {
        Column(
            modifier = Modifier
                .fillMaxSize()
        ) {
            // Header with gradient
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(
                        brush = Brush.horizontalGradient(
                            colors = listOf(GradientStart, GradientEnd)
                        )
                    )
                    .padding(24.dp)
            ) {
                Column {
                    NetworkImage(
                        imageUrl = "https://i.pravatar.cc/300?img=12",
                        contentDescription = "Profile Picture",
                        modifier = Modifier
                            .size(80.dp)
                            .clip(CircleShape)
                    )
                    Spacer(modifier = Modifier.height(12.dp))
                    Text(
                        text = "Alex Johnson",
                        style = MaterialTheme.typography.titleLarge,
                        fontWeight = FontWeight.Bold,
                        color = Color.White
                    )
                    Text(
                        text = "alex.johnson@email.com",
                        style = MaterialTheme.typography.bodyMedium,
                        color = Color.White.copy(alpha = 0.9f)
                    )
                }
            }
            
            Divider()
            
            // Menu Items
            Column(
                modifier = Modifier
                    .weight(1f)
                    .padding(vertical = 8.dp)
            ) {
                DrawerMenuItem(
                    icon = Icons.Default.Home,
                    title = "Home",
                    selected = currentRoute == "home",
                    onClick = {
                        onNavigate("home")
                        onClose()
                    }
                )
                DrawerMenuItem(
                    icon = Icons.Default.Explore,
                    title = "Tours",
                    selected = currentRoute == "tours",
                    onClick = {
                        onNavigate("tours")
                        onClose()
                    }
                )
                DrawerMenuItem(
                    icon = Icons.Default.Place,
                    title = "Destinations",
                    selected = currentRoute == "destinations",
                    onClick = {
                        onNavigate("destinations")
                        onClose()
                    }
                )
                DrawerMenuItem(
                    icon = Icons.Default.Favorite,
                    title = "Saved Tours",
                    selected = false,
                    onClick = {
                        // TODO: Navigate to saved tours
                        onClose()
                    }
                )
                
                Divider(modifier = Modifier.padding(vertical = 8.dp))
                
                DrawerMenuItem(
                    icon = Icons.Default.CardTravel,
                    title = "My Bookings",
                    selected = false,
                    onClick = {
                        onNavigate("account")
                        onClose()
                    }
                )
                DrawerMenuItem(
                    icon = Icons.Default.Person,
                    title = "Profile",
                    selected = currentRoute == "account",
                    onClick = {
                        onNavigate("account")
                        onClose()
                    }
                )
                DrawerMenuItem(
                    icon = Icons.Default.Settings,
                    title = "Settings",
                    selected = false,
                    onClick = {
                        // TODO: Navigate to settings
                        onClose()
                    }
                )
                
                Divider(modifier = Modifier.padding(vertical = 8.dp))
                
                DrawerMenuItem(
                    icon = Icons.Default.Help,
                    title = "Help & Support",
                    selected = false,
                    onClick = {
                        // TODO: Navigate to help
                        onClose()
                    }
                )
                DrawerMenuItem(
                    icon = Icons.Default.Info,
                    title = "About",
                    selected = false,
                    onClick = {
                        // TODO: Navigate to about
                        onClose()
                    }
                )
            }
            
            Divider()
            
            // Footer
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(16.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "Version 1.0.0",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
                )
                TextButton(onClick = { /* TODO: Logout */ }) {
                    Icon(
                        imageVector = Icons.Default.Logout,
                        contentDescription = "Logout",
                        modifier = Modifier.size(18.dp)
                    )
                    Spacer(modifier = Modifier.width(4.dp))
                    Text("Logout")
                }
            }
        }
    }
}

@Composable
fun DrawerMenuItem(
    icon: ImageVector,
    title: String,
    selected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    NavigationDrawerItem(
        icon = {
            Icon(
                imageVector = icon,
                contentDescription = title
            )
        },
        label = {
            Text(
                text = title,
                style = MaterialTheme.typography.bodyLarge
            )
        },
        selected = selected,
        onClick = onClick,
        modifier = modifier.padding(horizontal = 12.dp, vertical = 4.dp)
    )
}

