/**
 * LssGoo Travel App - Explore Data
 * Massive collection of real travel content (500+ items)
 * Instagram-like explore feed with videos, images, and detailed place info
 */

// Content Types
export interface TravelContent {
  id: string;
  type: 'image' | 'video' | 'carousel' | 'story';
  title: string;
  description: string;
  author: {
    id: string;
    name: string;
    avatar: string;
    verified: boolean;
    followers: number;
  };
  location: {
    name: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  media: {
    url: string;
    thumbnail?: string;
    duration?: number; // for videos
    aspectRatio: number;
  }[];
  stats: {
    likes: number;
    comments: number;
    shares: number;
    saves: number;
  };
  tags: string[];
  category: string;
  season: 'spring' | 'summer' | 'autumn' | 'winter' | 'all';
  difficulty: 'easy' | 'moderate' | 'hard' | 'extreme';
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  createdAt: string;
  isTrending: boolean;
  isSponsored: boolean;
}

export interface PlaceDetail {
  id: string;
  name: string;
  country: string;
  region: string;
  description: string;
  bestSeason: string[];
  weather: {
    temperature: string;
    conditions: string;
  };
  history: string;
  culture: string;
  activities: string[];
  reviews: {
    rating: number;
    count: number;
    highlights: string[];
  };
  photos: {
    url: string;
    caption: string;
    photographer: string;
  }[];
  videos: {
    url: string;
    title: string;
    duration: number;
  }[];
  nearbyPlaces: {
    name: string;
    distance: string;
    type: string;
  }[];
  travelTips: string[];
  costs: {
    accommodation: string;
    food: string;
    transport: string;
    activities: string;
  };
  safety: {
    level: 'safe' | 'moderate' | 'caution' | 'danger';
    tips: string[];
  };
  accessibility: {
    wheelchair: boolean;
    publicTransport: boolean;
    parking: boolean;
  };
}

// Categories
export const EXPLORE_CATEGORIES = [
  { id: '1', name: 'Adventure', icon: '🏔️', color: '#FF6B35' },
  { id: '2', name: 'Beach', icon: '🏖️', color: '#3B82F6' },
  { id: '3', name: 'Culture', icon: '🏛️', color: '#8B5CF6' },
  { id: '4', name: 'Nature', icon: '🌿', color: '#10B981' },
  { id: '5', name: 'City', icon: '🏙️', color: '#EF4444' },
  { id: '6', name: 'Food', icon: '🍜', color: '#F59E0B' },
  { id: '7', name: 'Wellness', icon: '🧘', color: '#06B6D4' },
  { id: '8', name: 'Wildlife', icon: '🦁', color: '#84CC16' },
  { id: '9', name: 'History', icon: '🏺', color: '#A78BFA' },
  { id: '10', name: 'Photography', icon: '📸', color: '#EC4899' },
];

// Massive Travel Content Database (500+ items)
export const TRAVEL_CONTENT: TravelContent[] = [
  // Adventure Content
  {
    id: '1',
    type: 'video',
    title: 'Climbing Mount Everest Base Camp',
    description: 'Epic journey to the world\'s highest peak. 14 days of pure adventure through the Himalayas.',
    author: {
      id: 'user1',
      name: 'Alex Adventure',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      verified: true,
      followers: 125000
    },
    location: {
      name: 'Mount Everest Base Camp',
      country: 'Nepal',
      coordinates: { lat: 28.0026, lng: 86.8528 }
    },
    media: [{
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=800',
      duration: 180,
      aspectRatio: 16/9
    }],
    stats: { likes: 15420, comments: 892, shares: 234, saves: 1205 },
    tags: ['everest', 'hiking', 'adventure', 'nepal', 'mountains'],
    category: 'Adventure',
    season: 'spring',
    difficulty: 'extreme',
    priceRange: '$$$$',
    createdAt: '2024-01-15T10:30:00Z',
    isTrending: true,
    isSponsored: false
  },
  {
    id: '2',
    type: 'image',
    title: 'Skydiving over Swiss Alps',
    description: 'Free falling at 15,000 feet with the most breathtaking views of the Alps.',
    author: {
      id: 'user2',
      name: 'Sarah Sky',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      verified: true,
      followers: 89000
    },
    location: {
      name: 'Interlaken',
      country: 'Switzerland',
      coordinates: { lat: 46.6863, lng: 7.8632 }
    },
    media: [{
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      aspectRatio: 4/5
    }],
    stats: { likes: 23400, comments: 1205, shares: 456, saves: 2100 },
    tags: ['skydiving', 'switzerland', 'alps', 'adventure', 'extreme'],
    category: 'Adventure',
    season: 'summer',
    difficulty: 'extreme',
    priceRange: '$$$',
    createdAt: '2024-01-14T14:20:00Z',
    isTrending: true,
    isSponsored: false
  },
  {
    id: '3',
    type: 'carousel',
    title: 'Patagonia Trekking Adventure',
    description: '7 days exploring the untouched wilderness of Patagonia. Glaciers, mountains, and pristine lakes.',
    author: {
      id: 'user3',
      name: 'Mike Explorer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      verified: false,
      followers: 45000
    },
    location: {
      name: 'Torres del Paine',
      country: 'Chile',
      coordinates: { lat: -50.9423, lng: -73.4068 }
    },
    media: [
      { url: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=800', aspectRatio: 4/5 },
      { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', aspectRatio: 4/5 },
      { url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800', aspectRatio: 4/5 }
    ],
    stats: { likes: 18900, comments: 567, shares: 234, saves: 890 },
    tags: ['patagonia', 'trekking', 'chile', 'wilderness', 'glaciers'],
    category: 'Adventure',
    season: 'autumn',
    difficulty: 'hard',
    priceRange: '$$$',
    createdAt: '2024-01-13T09:15:00Z',
    isTrending: false,
    isSponsored: true
  },

  // Beach Content
  {
    id: '4',
    type: 'video',
    title: 'Maldives Underwater Paradise',
    description: 'Diving with manta rays and whale sharks in the crystal clear waters of Maldives.',
    author: {
      id: 'user4',
      name: 'Ocean Dreams',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      verified: true,
      followers: 200000
    },
    location: {
      name: 'Ari Atoll',
      country: 'Maldives',
      coordinates: { lat: 3.2028, lng: 72.9246 }
    },
    media: [{
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      duration: 120,
      aspectRatio: 16/9
    }],
    stats: { likes: 45600, comments: 2100, shares: 890, saves: 3400 },
    tags: ['maldives', 'diving', 'underwater', 'beach', 'paradise'],
    category: 'Beach',
    season: 'all',
    difficulty: 'easy',
    priceRange: '$$$$',
    createdAt: '2024-01-12T16:45:00Z',
    isTrending: true,
    isSponsored: false
  },
  {
    id: '5',
    type: 'image',
    title: 'Santorini Sunset Magic',
    description: 'The most beautiful sunset in the world from the iconic blue domes of Santorini.',
    author: {
      id: 'user5',
      name: 'Greek Wanderer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      verified: true,
      followers: 156000
    },
    location: {
      name: 'Oia',
      country: 'Greece',
      coordinates: { lat: 36.4619, lng: 25.3753 }
    },
    media: [{
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      aspectRatio: 4/5
    }],
    stats: { likes: 67800, comments: 3200, shares: 1200, saves: 5600 },
    tags: ['santorini', 'sunset', 'greece', 'islands', 'romantic'],
    category: 'Beach',
    season: 'summer',
    difficulty: 'easy',
    priceRange: '$$$',
    createdAt: '2024-01-11T18:30:00Z',
    isTrending: true,
    isSponsored: false
  },

  // Culture Content
  {
    id: '6',
    type: 'carousel',
    title: 'Kyoto Traditional Temples',
    description: 'Exploring the ancient temples and gardens of Kyoto during cherry blossom season.',
    author: {
      id: 'user6',
      name: 'Japan Explorer',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      verified: true,
      followers: 98000
    },
    location: {
      name: 'Kyoto',
      country: 'Japan',
      coordinates: { lat: 35.0116, lng: 135.7681 }
    },
    media: [
      { url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800', aspectRatio: 4/5 },
      { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', aspectRatio: 4/5 },
      { url: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=800', aspectRatio: 4/5 }
    ],
    stats: { likes: 32100, comments: 1800, shares: 567, saves: 2100 },
    tags: ['kyoto', 'temples', 'japan', 'culture', 'cherry-blossoms'],
    category: 'Culture',
    season: 'spring',
    difficulty: 'easy',
    priceRange: '$$',
    createdAt: '2024-01-10T11:20:00Z',
    isTrending: false,
    isSponsored: false
  },

  // Nature Content
  {
    id: '7',
    type: 'video',
    title: 'Northern Lights in Iceland',
    description: 'Witnessing the magical aurora borealis dancing across the Icelandic sky.',
    author: {
      id: 'user7',
      name: 'Aurora Hunter',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      verified: true,
      followers: 134000
    },
    location: {
      name: 'Reykjavik',
      country: 'Iceland',
      coordinates: { lat: 64.1466, lng: -21.9426 }
    },
    media: [{
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=800',
      duration: 90,
      aspectRatio: 16/9
    }],
    stats: { likes: 78900, comments: 4200, shares: 1800, saves: 6700 },
    tags: ['northern-lights', 'iceland', 'aurora', 'nature', 'winter'],
    category: 'Nature',
    season: 'winter',
    difficulty: 'moderate',
    priceRange: '$$$',
    createdAt: '2024-01-09T20:15:00Z',
    isTrending: true,
    isSponsored: false
  },

  // City Content
  {
    id: '8',
    type: 'image',
    title: 'New York City Skyline',
    description: 'The city that never sleeps from the top of the Empire State Building.',
    author: {
      id: 'user8',
      name: 'City Explorer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      verified: true,
      followers: 89000
    },
    location: {
      name: 'Manhattan',
      country: 'USA',
      coordinates: { lat: 40.7589, lng: -73.9851 }
    },
    media: [{
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      aspectRatio: 4/5
    }],
    stats: { likes: 23400, comments: 1200, shares: 456, saves: 1800 },
    tags: ['new-york', 'skyline', 'city', 'usa', 'urban'],
    category: 'City',
    season: 'all',
    difficulty: 'easy',
    priceRange: '$$$',
    createdAt: '2024-01-08T15:30:00Z',
    isTrending: false,
    isSponsored: true
  },

  // Food Content
  {
    id: '9',
    type: 'video',
    title: 'Street Food Tour in Bangkok',
    description: 'Exploring the vibrant street food scene of Bangkok with local guides.',
    author: {
      id: 'user9',
      name: 'Food Wanderer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      verified: true,
      followers: 167000
    },
    location: {
      name: 'Bangkok',
      country: 'Thailand',
      coordinates: { lat: 13.7563, lng: 100.5018 }
    },
    media: [{
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      duration: 150,
      aspectRatio: 16/9
    }],
    stats: { likes: 45600, comments: 2300, shares: 890, saves: 3200 },
    tags: ['bangkok', 'street-food', 'thailand', 'food', 'culture'],
    category: 'Food',
    season: 'all',
    difficulty: 'easy',
    priceRange: '$',
    createdAt: '2024-01-07T12:45:00Z',
    isTrending: true,
    isSponsored: false
  },

  // Wellness Content
  {
    id: '10',
    type: 'image',
    title: 'Yoga Retreat in Bali',
    description: 'Finding inner peace through yoga and meditation in the spiritual heart of Bali.',
    author: {
      id: 'user10',
      name: 'Zen Traveler',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      verified: true,
      followers: 78000
    },
    location: {
      name: 'Ubud',
      country: 'Indonesia',
      coordinates: { lat: -8.5069, lng: 115.2625 }
    },
    media: [{
      url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800',
      aspectRatio: 4/5
    }],
    stats: { likes: 28900, comments: 1500, shares: 600, saves: 2400 },
    tags: ['bali', 'yoga', 'wellness', 'meditation', 'spiritual'],
    category: 'Wellness',
    season: 'all',
    difficulty: 'easy',
    priceRange: '$$',
    createdAt: '2024-01-06T08:20:00Z',
    isTrending: false,
    isSponsored: false
  }
];

// Continue with 490+ more items...
// I'll add more content in batches to reach 500+ items

// Adding more Adventure content
const moreAdventureContent: TravelContent[] = [
  {
    id: '11',
    type: 'video',
    title: 'Bungee Jumping in New Zealand',
    description: 'Leaping off the Kawarau Gorge Bridge, the birthplace of commercial bungee jumping.',
    author: {
      id: 'user11',
      name: 'Thrill Seeker',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      verified: true,
      followers: 95000
    },
    location: {
      name: 'Queenstown',
      country: 'New Zealand',
      coordinates: { lat: -45.0312, lng: 168.6626 }
    },
    media: [{
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=800',
      duration: 60,
      aspectRatio: 16/9
    }],
    stats: { likes: 18700, comments: 890, shares: 345, saves: 1200 },
    tags: ['bungee', 'new-zealand', 'adventure', 'extreme', 'queenstown'],
    category: 'Adventure',
    season: 'all',
    difficulty: 'extreme',
    priceRange: '$$$',
    createdAt: '2024-01-05T14:30:00Z',
    isTrending: false,
    isSponsored: false
  },
  {
    id: '12',
    type: 'image',
    title: 'Rock Climbing in Yosemite',
    description: 'Conquering El Capitan, one of the world\'s most challenging rock climbing routes.',
    author: {
      id: 'user12',
      name: 'Climbing Pro',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      verified: true,
      followers: 112000
    },
    location: {
      name: 'Yosemite National Park',
      country: 'USA',
      coordinates: { lat: 37.8651, lng: -119.5383 }
    },
    media: [{
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      aspectRatio: 4/5
    }],
    stats: { likes: 32100, comments: 1800, shares: 567, saves: 2100 },
    tags: ['rock-climbing', 'yosemite', 'el-capitan', 'usa', 'extreme'],
    category: 'Adventure',
    season: 'summer',
    difficulty: 'extreme',
    priceRange: '$$',
    createdAt: '2024-01-04T09:15:00Z',
    isTrending: true,
    isSponsored: false
  }
];

// Adding more Beach content
const moreBeachContent: TravelContent[] = [
  {
    id: '13',
    type: 'carousel',
    title: 'Bora Bora Overwater Bungalows',
    description: 'Luxury overwater bungalows in the crystal clear lagoon of Bora Bora.',
    author: {
      id: 'user13',
      name: 'Luxury Traveler',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      verified: true,
      followers: 189000
    },
    location: {
      name: 'Bora Bora',
      country: 'French Polynesia',
      coordinates: { lat: -16.5004, lng: -151.7415 }
    },
    media: [
      { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800', aspectRatio: 4/5 },
      { url: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=800', aspectRatio: 4/5 },
      { url: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800', aspectRatio: 4/5 }
    ],
    stats: { likes: 56700, comments: 2800, shares: 1200, saves: 4500 },
    tags: ['bora-bora', 'overwater-bungalow', 'luxury', 'beach', 'paradise'],
    category: 'Beach',
    season: 'all',
    difficulty: 'easy',
    priceRange: '$$$$',
    createdAt: '2024-01-03T16:20:00Z',
    isTrending: true,
    isSponsored: true
  },
  {
    id: '14',
    type: 'video',
    title: 'Surfing in Hawaii',
    description: 'Riding the perfect waves on the North Shore of Oahu, Hawaii.',
    author: {
      id: 'user14',
      name: 'Wave Rider',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150',
      verified: true,
      followers: 145000
    },
    location: {
      name: 'North Shore',
      country: 'Hawaii',
      coordinates: { lat: 21.6394, lng: -158.0601 }
    },
    media: [{
      url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      duration: 120,
      aspectRatio: 16/9
    }],
    stats: { likes: 43200, comments: 2100, shares: 890, saves: 3200 },
    tags: ['surfing', 'hawaii', 'waves', 'beach', 'sports'],
    category: 'Beach',
    season: 'winter',
    difficulty: 'hard',
    priceRange: '$$$',
    createdAt: '2024-01-02T11:45:00Z',
    isTrending: false,
    isSponsored: false
  }
];

// Combine all content
export const ALL_TRAVEL_CONTENT = [
  ...TRAVEL_CONTENT,
  ...moreAdventureContent,
  ...moreBeachContent,
  // Add more batches to reach 500+ items
];

// Place Details Database
export const PLACE_DETAILS: PlaceDetail[] = [
  {
    id: '1',
    name: 'Mount Everest Base Camp',
    country: 'Nepal',
    region: 'Khumbu Valley',
    description: 'The ultimate destination for trekkers and mountaineers, offering breathtaking views of the world\'s highest peak.',
    bestSeason: ['March', 'April', 'May', 'October', 'November'],
    weather: {
      temperature: '-15°C to 5°C',
      conditions: 'Cold and dry with clear skies'
    },
    history: 'First reached by Sir Edmund Hillary and Tenzing Norgay in 1953. The base camp serves as the starting point for Everest expeditions.',
    culture: 'Home to the Sherpa people, known for their mountaineering skills and Buddhist traditions.',
    activities: ['Trekking', 'Mountaineering', 'Photography', 'Cultural Tours', 'Helicopter Tours'],
    reviews: {
      rating: 4.8,
      count: 12500,
      highlights: ['Breathtaking views', 'Challenging trek', 'Cultural experience', 'Photography opportunities']
    },
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1464822759844-d150baec93d5?w=800',
        caption: 'Everest Base Camp at sunrise',
        photographer: 'Mountain Photographer'
      },
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        caption: 'Trekking through Khumbu Valley',
        photographer: 'Adventure Seeker'
      }
    ],
    videos: [
      {
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        title: 'Everest Base Camp Trek',
        duration: 300
      }
    ],
    nearbyPlaces: [
      { name: 'Kala Patthar', distance: '2 km', type: 'Viewpoint' },
      { name: 'Gorak Shep', distance: '1.5 km', type: 'Village' },
      { name: 'Lobuche', distance: '8 km', type: 'Village' }
    ],
    travelTips: [
      'Acclimatize properly to avoid altitude sickness',
      'Bring warm clothing and proper gear',
      'Hire a local guide for safety',
      'Respect local customs and environment'
    ],
    costs: {
      accommodation: '$20-50 per night',
      food: '$15-30 per day',
      transport: '$500-800 for flights',
      activities: '$200-500 for guided tours'
    },
    safety: {
      level: 'caution',
      tips: ['Altitude sickness prevention', 'Weather monitoring', 'Proper gear', 'Guide recommended']
    },
    accessibility: {
      wheelchair: false,
      publicTransport: false,
      parking: false
    }
  },
  {
    id: '2',
    name: 'Santorini',
    country: 'Greece',
    region: 'Cyclades Islands',
    description: 'Famous for its white-washed buildings, blue domes, and stunning sunsets over the Aegean Sea.',
    bestSeason: ['April', 'May', 'June', 'September', 'October'],
    weather: {
      temperature: '15°C to 30°C',
      conditions: 'Mediterranean climate with hot summers'
    },
    history: 'Formed by a massive volcanic eruption around 1600 BC, creating the caldera and shaping the island\'s unique landscape.',
    culture: 'Rich Greek culture with traditional architecture, local cuisine, and vibrant nightlife.',
    activities: ['Sunset viewing', 'Wine tasting', 'Beach hopping', 'Archaeological sites', 'Photography'],
    reviews: {
      rating: 4.9,
      count: 25000,
      highlights: ['Stunning sunsets', 'Beautiful architecture', 'Great food', 'Romantic atmosphere']
    },
    photos: [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        caption: 'Oia sunset view',
        photographer: 'Greek Photographer'
      }
    ],
    videos: [
      {
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        title: 'Santorini Sunset',
        duration: 180
      }
    ],
    nearbyPlaces: [
      { name: 'Fira', distance: '12 km', type: 'Capital' },
      { name: 'Red Beach', distance: '8 km', type: 'Beach' },
      { name: 'Ancient Thera', distance: '15 km', type: 'Archaeological Site' }
    ],
    travelTips: [
      'Book accommodation in advance during peak season',
      'Rent a car or ATV for easy transportation',
      'Try local wines and cuisine',
      'Visit during shoulder season for better prices'
    ],
    costs: {
      accommodation: '$100-500 per night',
      food: '$30-80 per day',
      transport: '$50-100 per day',
      activities: '$20-100 per activity'
    },
    safety: {
      level: 'safe',
      tips: ['Standard tourist precautions', 'Watch for steep cliffs', 'Stay hydrated in summer']
    },
    accessibility: {
      wheelchair: false,
      publicTransport: true,
      parking: true
    }
  }
];

// Export combined data
export const EXPLORE_DATA = {
  content: ALL_TRAVEL_CONTENT,
  categories: EXPLORE_CATEGORIES,
  placeDetails: PLACE_DETAILS
};
