package com.lssgoo.ui.layouts

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

data class BottomNavItem(
    val route: String,
    val label: String,
    val iconSelected: ImageVector,
    val iconUnselected: ImageVector
)

@Composable
fun CustomBottomNavigationBar(
    currentRoute: String,
    onNavigate: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    val items = listOf(
        BottomNavItem(
            route = "home",
            label = "Home",
            iconSelected = Icons.Filled.Home,
            iconUnselected = Icons.Outlined.Home
        ),
        BottomNavItem(
            route = "wallet",
            label = "Wallet",
            iconSelected = Icons.Filled.AccountBalanceWallet,
            iconUnselected = Icons.Outlined.AccountBalanceWallet
        ),
        BottomNavItem(
            route = "analysis",
            label = "Analysis",
            iconSelected = Icons.Filled.PieChart,
            iconUnselected = Icons.Outlined.PieChart
        ),
        BottomNavItem(
            route = "profile",
            label = "Profile",
            iconSelected = Icons.Filled.Person,
            iconUnselected = Icons.Outlined.Person
        )
    )

    Surface(
        modifier = modifier.fillMaxWidth(),
        color = MaterialTheme.colorScheme.surface,
        tonalElevation = 3.dp
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 12.dp),
            horizontalArrangement = Arrangement.SpaceEvenly,
            verticalAlignment = Alignment.CenterVertically
        ) {
            items.forEach { item ->
                BottomNavItemView(
                    item = item,
                    isSelected = currentRoute == item.route,
                    onClick = { onNavigate(item.route) },
                    modifier = Modifier.weight(1f)
                )
            }
        }
    }
}

@Composable
fun BottomNavItemView(
    item: BottomNavItem,
    isSelected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val primaryColor = Color(0xFF4285F4) // Blue color matching the design
    val iconColor = if (isSelected) primaryColor else MaterialTheme.colorScheme.onSurface.copy(alpha = 0.4f)
    val textColor = if (isSelected) primaryColor else MaterialTheme.colorScheme.onSurface.copy(alpha = 0.4f)
    
    Column(
        modifier = modifier
            .clickable(
                onClick = onClick,
                indication = null,
                interactionSource = remember { MutableInteractionSource() }
            )
            .padding(vertical = 8.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        // Icon
        Icon(
            imageVector = if (isSelected) item.iconSelected else item.iconUnselected,
            contentDescription = item.label,
            tint = iconColor,
            modifier = Modifier.size(28.dp)
        )
        
        Spacer(modifier = Modifier.height(4.dp))
        
        // Label
        Text(
            text = item.label,
            fontSize = 12.sp,
            fontWeight = if (isSelected) FontWeight.Medium else FontWeight.Normal,
            color = textColor
        )
        
        Spacer(modifier = Modifier.height(4.dp))
        
        // Curved indicator
        if (isSelected) {
            Box(
                modifier = Modifier
                    .width(40.dp)
                    .height(4.dp)
                    .clip(RoundedCornerShape(topStart = 2.dp, topEnd = 2.dp, bottomStart = 8.dp, bottomEnd = 8.dp))
                    .background(primaryColor)
            )
        } else {
            Spacer(modifier = Modifier.height(4.dp))
        }
    }
}

