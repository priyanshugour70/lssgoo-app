package com.lssgoo.data.datasource

import com.lssgoo.data.models.*

object DummyData {
    
    val destinations = listOf(
        Destination(
            id = "1",
            name = "Bali",
            country = "Indonesia",
            description = "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple.",
            shortDescription = "Tropical paradise with stunning beaches and rich culture",
            imageUrl = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
                "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
                "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80"
            ),
            rating = 4.8f,
            tourCount = 45,
            popularAttractions = listOf("Ubud Monkey Forest", "Tanah Lot Temple", "Tegalalang Rice Terrace", "Mount Batur"),
            bestTimeToVisit = "April to October",
            averageTemperature = "27°C",
            currency = "IDR",
            language = "Indonesian",
            timeZone = "GMT+8",
            isFeatured = true,
            continent = "Asia"
        ),
        Destination(
            id = "2",
            name = "Paris",
            country = "France",
            description = "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.",
            shortDescription = "The city of lights and romance",
            imageUrl = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
                "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80",
                "https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80"
            ),
            rating = 4.9f,
            tourCount = 67,
            popularAttractions = listOf("Eiffel Tower", "Louvre Museum", "Notre-Dame", "Arc de Triomphe"),
            bestTimeToVisit = "April to June, September to November",
            averageTemperature = "12°C",
            currency = "EUR",
            language = "French",
            timeZone = "GMT+1",
            isFeatured = true,
            continent = "Europe"
        ),
        Destination(
            id = "3",
            name = "Tokyo",
            country = "Japan",
            description = "Tokyo, Japan's busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods.",
            shortDescription = "Where ancient tradition meets futuristic innovation",
            imageUrl = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
                "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800&q=80",
                "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80"
            ),
            rating = 4.9f,
            tourCount = 52,
            popularAttractions = listOf("Senso-ji Temple", "Tokyo Tower", "Shibuya Crossing", "Meiji Shrine"),
            bestTimeToVisit = "March to May, September to November",
            averageTemperature = "16°C",
            currency = "JPY",
            language = "Japanese",
            timeZone = "GMT+9",
            isFeatured = true,
            continent = "Asia"
        ),
        Destination(
            id = "4",
            name = "Santorini",
            country = "Greece",
            description = "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.",
            shortDescription = "Stunning sunsets and white-washed buildings",
            imageUrl = "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
                "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80"
            ),
            rating = 4.8f,
            tourCount = 28,
            popularAttractions = listOf("Oia Sunset", "Red Beach", "Ancient Thera", "Akrotiri"),
            bestTimeToVisit = "April to November",
            averageTemperature = "18°C",
            currency = "EUR",
            language = "Greek",
            timeZone = "GMT+2",
            isFeatured = false,
            continent = "Europe"
        ),
        Destination(
            id = "5",
            name = "Dubai",
            country = "UAE",
            description = "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene.",
            shortDescription = "Luxury and innovation in the desert",
            imageUrl = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
                "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80"
            ),
            rating = 4.7f,
            tourCount = 41,
            popularAttractions = listOf("Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Dubai Marina"),
            bestTimeToVisit = "November to March",
            averageTemperature = "27°C",
            currency = "AED",
            language = "Arabic",
            timeZone = "GMT+4",
            isFeatured = true,
            continent = "Asia"
        ),
        Destination(
            id = "6",
            name = "New York",
            country = "USA",
            description = "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough.",
            shortDescription = "The city that never sleeps",
            imageUrl = "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
                "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=800&q=80"
            ),
            rating = 4.8f,
            tourCount = 73,
            popularAttractions = listOf("Statue of Liberty", "Central Park", "Times Square", "Brooklyn Bridge"),
            bestTimeToVisit = "April to June, September to November",
            averageTemperature = "13°C",
            currency = "USD",
            language = "English",
            timeZone = "GMT-5",
            isFeatured = true,
            continent = "North America"
        ),
        Destination(
            id = "7",
            name = "Maldives",
            country = "Maldives",
            description = "The Maldives is a tropical nation in the Indian Ocean composed of 26 ring-shaped atolls, made up of more than 1,000 coral islands.",
            shortDescription = "Paradise islands with crystal clear waters",
            imageUrl = "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
                "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80"
            ),
            rating = 4.9f,
            tourCount = 32,
            popularAttractions = listOf("Male", "Vaadhoo Island", "Banana Reef", "HP Reef"),
            bestTimeToVisit = "November to April",
            averageTemperature = "28°C",
            currency = "MVR",
            language = "Dhivehi",
            timeZone = "GMT+5",
            isFeatured = true,
            continent = "Asia"
        ),
        Destination(
            id = "8",
            name = "Barcelona",
            country = "Spain",
            description = "Barcelona, the cosmopolitan capital of Spain's Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.",
            shortDescription = "Gaudí's masterpiece by the Mediterranean",
            imageUrl = "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
                "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800&q=80"
            ),
            rating = 4.8f,
            tourCount = 56,
            popularAttractions = listOf("Sagrada Familia", "Park Güell", "La Rambla", "Gothic Quarter"),
            bestTimeToVisit = "May to June, September to October",
            averageTemperature = "16°C",
            currency = "EUR",
            language = "Spanish/Catalan",
            timeZone = "GMT+1",
            isFeatured = false,
            continent = "Europe"
        )
    )
    
    val tours = listOf(
        Tour(
            id = "1",
            title = "Bali Island Hopping Adventure",
            description = "Explore the magical islands around Bali including Nusa Penida, Nusa Lembongan, and Nusa Ceningan. Snorkel in crystal clear waters, visit stunning beaches, and witness breathtaking cliffs.",
            destination = "Bali",
            duration = "3 Days",
            price = 299.0,
            currency = "USD",
            rating = 4.8f,
            reviewCount = 156,
            imageUrl = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
                "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80"
            ),
            category = "Adventure",
            highlights = listOf(
                "Visit Kelingking Beach", 
                "Snorkeling at Crystal Bay", 
                "Angel's Billabong", 
                "Broken Beach"
            ),
            included = listOf("Hotel pickup", "Professional guide", "Snorkeling equipment", "Lunch"),
            excluded = listOf("Personal expenses", "Travel insurance"),
            availableDates = listOf("2024-03-15", "2024-03-22", "2024-03-29"),
            maxGroupSize = 12,
            difficulty = "Moderate",
            isFeatured = true,
            isPopular = true
        ),
        Tour(
            id = "2",
            title = "Paris Cultural Heritage Tour",
            description = "Immerse yourself in the art, culture, and history of Paris. Visit world-famous museums, iconic landmarks, and hidden gems that showcase the city's rich heritage.",
            destination = "Paris",
            duration = "5 Days",
            price = 899.0,
            currency = "USD",
            rating = 4.9f,
            reviewCount = 234,
            imageUrl = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
                "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80"
            ),
            category = "Cultural",
            highlights = listOf(
                "Skip-the-line Louvre Museum", 
                "Eiffel Tower sunset", 
                "Seine River cruise", 
                "Montmartre walking tour"
            ),
            included = listOf("4-star hotel accommodation", "Daily breakfast", "Museum tickets", "Professional guide"),
            excluded = listOf("Flights", "Lunch and dinner", "Travel insurance"),
            availableDates = listOf("2024-04-10", "2024-04-17", "2024-04-24"),
            maxGroupSize = 15,
            difficulty = "Easy",
            isFeatured = true,
            isPopular = true
        ),
        Tour(
            id = "3",
            title = "Tokyo Modern & Traditional Experience",
            description = "Experience the perfect blend of ancient traditions and cutting-edge technology in Tokyo. From historic temples to futuristic skyscrapers, discover all facets of this amazing city.",
            destination = "Tokyo",
            duration = "7 Days",
            price = 1299.0,
            currency = "USD",
            rating = 4.9f,
            reviewCount = 189,
            imageUrl = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
                "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800&q=80"
            ),
            category = "Cultural",
            highlights = listOf(
                "Visit Senso-ji Temple", 
                "Experience traditional tea ceremony", 
                "Explore Akihabara", 
                "Day trip to Mt. Fuji"
            ),
            included = listOf("Hotel accommodation", "Daily breakfast", "Rail pass", "English-speaking guide"),
            excluded = listOf("International flights", "Some meals", "Travel insurance"),
            availableDates = listOf("2024-03-20", "2024-04-05", "2024-04-15"),
            maxGroupSize = 10,
            difficulty = "Easy",
            isFeatured = true,
            isPopular = true
        ),
        Tour(
            id = "4",
            title = "Santorini Sunset & Wine Tour",
            description = "Experience the magic of Santorini with its famous sunsets, pristine beaches, and world-class wines. Visit traditional villages and taste local cuisine.",
            destination = "Santorini",
            duration = "4 Days",
            price = 749.0,
            currency = "USD",
            rating = 4.8f,
            reviewCount = 142,
            imageUrl = "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
                "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80"
            ),
            category = "Leisure",
            highlights = listOf(
                "Oia sunset viewing", 
                "Wine tasting at 3 wineries", 
                "Red Beach visit", 
                "Caldera cruise"
            ),
            included = listOf("Boutique hotel", "Daily breakfast", "Wine tastings", "Sunset cruise"),
            excluded = listOf("Flights", "Lunch and dinner", "Personal expenses"),
            availableDates = listOf("2024-05-01", "2024-05-15", "2024-05-29"),
            maxGroupSize = 8,
            difficulty = "Easy",
            isFeatured = false,
            isPopular = true
        ),
        Tour(
            id = "5",
            title = "Dubai Luxury Experience",
            description = "Indulge in the ultimate luxury experience in Dubai. From world-class hotels to exclusive experiences, discover the epitome of opulence in the desert.",
            destination = "Dubai",
            duration = "5 Days",
            price = 1599.0,
            currency = "USD",
            rating = 4.7f,
            reviewCount = 98,
            imageUrl = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
                "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80"
            ),
            category = "Luxury",
            highlights = listOf(
                "Burj Khalifa At The Top", 
                "Desert safari with dinner", 
                "Yacht cruise", 
                "Private shopping tour"
            ),
            included = listOf("5-star hotel", "All meals", "Private chauffeur", "VIP experiences"),
            excluded = listOf("International flights", "Travel insurance", "Spa treatments"),
            availableDates = listOf("2024-04-01", "2024-04-20", "2024-05-10"),
            maxGroupSize = 6,
            difficulty = "Easy",
            isFeatured = true,
            isPopular = false
        ),
        Tour(
            id = "6",
            title = "New York City Explorer",
            description = "Discover the best of New York City from iconic landmarks to hidden local favorites. Experience the energy and diversity of the Big Apple.",
            destination = "New York",
            duration = "6 Days",
            price = 1099.0,
            currency = "USD",
            rating = 4.8f,
            reviewCount = 267,
            imageUrl = "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
                "https://images.unsplash.com/photo-1522083165195-3424ed129620?w=800&q=80"
            ),
            category = "City Tour",
            highlights = listOf(
                "Statue of Liberty & Ellis Island", 
                "Broadway show", 
                "Central Park bike tour", 
                "Brooklyn food tour"
            ),
            included = listOf("Hotel accommodation", "Daily breakfast", "All attraction tickets", "Metro pass"),
            excluded = listOf("Flights", "Some meals", "Travel insurance"),
            availableDates = listOf("2024-06-01", "2024-06-15", "2024-07-01"),
            maxGroupSize = 16,
            difficulty = "Moderate",
            isFeatured = true,
            isPopular = true
        ),
        Tour(
            id = "7",
            title = "Maldives Paradise Escape",
            description = "Escape to paradise with this all-inclusive Maldives package. Enjoy pristine beaches, crystal clear waters, and world-class service at a luxury resort.",
            destination = "Maldives",
            duration = "7 Days",
            price = 2499.0,
            currency = "USD",
            rating = 4.9f,
            reviewCount = 312,
            imageUrl = "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
                "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80"
            ),
            category = "Beach & Relaxation",
            highlights = listOf(
                "Overwater villa stay", 
                "Snorkeling & diving", 
                "Spa treatments", 
                "Private island dinners"
            ),
            included = listOf("Luxury resort", "All meals & drinks", "Water sports", "Spa credits"),
            excluded = listOf("International flights", "Seaplane transfers", "Travel insurance"),
            availableDates = listOf("2024-05-15", "2024-06-01", "2024-06-20"),
            maxGroupSize = 4,
            difficulty = "Easy",
            isFeatured = true,
            isPopular = true
        ),
        Tour(
            id = "8",
            title = "Barcelona Gaudí & Gothic Quarter",
            description = "Explore Barcelona's architectural wonders from Gaudí's masterpieces to the medieval Gothic Quarter. Experience the vibrant culture and Mediterranean lifestyle.",
            destination = "Barcelona",
            duration = "4 Days",
            price = 649.0,
            currency = "USD",
            rating = 4.8f,
            reviewCount = 178,
            imageUrl = "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
                "https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=800&q=80"
            ),
            category = "Cultural",
            highlights = listOf(
                "Sagrada Familia tour", 
                "Park Güell visit", 
                "Gothic Quarter walking tour", 
                "Tapas tasting"
            ),
            included = listOf("Hotel accommodation", "Daily breakfast", "All tickets", "Expert guide"),
            excluded = listOf("Flights", "Lunch and dinner", "Travel insurance"),
            availableDates = listOf("2024-04-10", "2024-05-05", "2024-05-20"),
            maxGroupSize = 14,
            difficulty = "Moderate",
            isFeatured = false,
            isPopular = true
        ),
        Tour(
            id = "9",
            title = "Bali Wellness Retreat",
            description = "Rejuvenate your mind, body, and soul with this wellness-focused retreat in Ubud. Yoga, meditation, spa treatments, and healthy cuisine in a serene setting.",
            destination = "Bali",
            duration = "7 Days",
            price = 1199.0,
            currency = "USD",
            rating = 4.9f,
            reviewCount = 94,
            imageUrl = "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80",
                "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80"
            ),
            category = "Wellness",
            highlights = listOf(
                "Daily yoga & meditation", 
                "Balinese spa treatments", 
                "Healthy organic meals", 
                "Rice terrace walks"
            ),
            included = listOf("Wellness resort", "All meals", "Yoga classes", "Spa treatments"),
            excluded = listOf("Flights", "Personal purchases", "Travel insurance"),
            availableDates = listOf("2024-04-05", "2024-04-25", "2024-05-15"),
            maxGroupSize = 10,
            difficulty = "Easy",
            isFeatured = false,
            isPopular = false
        ),
        Tour(
            id = "10",
            title = "Tokyo Food Lover's Journey",
            description = "A culinary adventure through Tokyo's best neighborhoods. From Michelin-starred restaurants to street food stalls, taste the incredible variety of Japanese cuisine.",
            destination = "Tokyo",
            duration = "5 Days",
            price = 1499.0,
            currency = "USD",
            rating = 4.9f,
            reviewCount = 201,
            imageUrl = "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
            images = listOf(
                "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
                "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800&q=80"
            ),
            category = "Food & Culinary",
            highlights = listOf(
                "Tsukiji fish market tour", 
                "Sushi-making class", 
                "Ramen tasting tour", 
                "Izakaya experience"
            ),
            included = listOf("Hotel accommodation", "All food tastings", "Cooking class", "Expert foodie guide"),
            excluded = listOf("Flights", "Some dinners", "Travel insurance"),
            availableDates = listOf("2024-06-10", "2024-06-25", "2024-07-10"),
            maxGroupSize = 8,
            difficulty = "Easy",
            isFeatured = true,
            isPopular = true
        )
    )
    
    val currentUser = User(
        id = "user_1",
        name = "Alex Johnson",
        email = "alex.johnson@email.com",
        phone = "+1 234 567 8900",
        avatarUrl = "https://i.pravatar.cc/300?img=12",
        memberSince = "January 2023",
        totalBookings = 12,
        savedTours = listOf("1", "3", "7"),
        preferences = UserPreferences(
            favoriteDestinations = listOf("Bali", "Tokyo", "Paris"),
            preferredCategories = listOf("Adventure", "Cultural", "Beach & Relaxation"),
            budgetRange = Pair(500.0, 2000.0),
            notificationsEnabled = true,
            currency = "USD"
        )
    )
    
    val bookings = listOf(
        Booking(
            id = "book_1",
            tourId = "1",
            userId = "user_1",
            tourTitle = "Bali Island Hopping Adventure",
            tourImageUrl = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
            bookingDate = "2024-02-15",
            travelDate = "2024-03-22",
            numberOfPeople = 2,
            totalAmount = 598.0,
            status = BookingStatus.CONFIRMED,
            confirmationCode = "BKG123456"
        ),
        Booking(
            id = "book_2",
            tourId = "3",
            userId = "user_1",
            tourTitle = "Tokyo Modern & Traditional Experience",
            tourImageUrl = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
            bookingDate = "2024-01-20",
            travelDate = "2024-02-10",
            numberOfPeople = 1,
            totalAmount = 1299.0,
            status = BookingStatus.COMPLETED,
            confirmationCode = "BKG789012"
        )
    )
    
    val reviews = listOf(
        Review(
            id = "rev_1",
            tourId = "1",
            userId = "user_2",
            userName = "Sarah Miller",
            userAvatarUrl = "https://i.pravatar.cc/300?img=5",
            rating = 5.0f,
            comment = "Absolutely amazing experience! The beaches were stunning and our guide was fantastic. Highly recommend!",
            date = "2024-02-10",
            helpful = 24,
            images = emptyList()
        ),
        Review(
            id = "rev_2",
            tourId = "1",
            userId = "user_3",
            userName = "Michael Chen",
            userAvatarUrl = "https://i.pravatar.cc/300?img=8",
            rating = 4.5f,
            comment = "Great tour overall. The snorkeling was incredible. Only wish we had more time at each location.",
            date = "2024-02-05",
            helpful = 18
        ),
        Review(
            id = "rev_3",
            tourId = "2",
            userId = "user_4",
            userName = "Emma Wilson",
            userAvatarUrl = "https://i.pravatar.cc/300?img=9",
            rating = 5.0f,
            comment = "Paris was magical! Our guide knew all the best spots and the skip-the-line access was invaluable.",
            date = "2024-01-28",
            helpful = 31
        )
    )
}

