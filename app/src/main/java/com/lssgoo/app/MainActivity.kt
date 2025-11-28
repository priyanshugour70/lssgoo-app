package com.lssgoo.app

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import com.lssgoo.ui.navigation.AppNavigation
import com.lssgoo.ui.theme.LssGooTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            LssGooTheme {
                AppNavigation()
            }
        }
    }
}
