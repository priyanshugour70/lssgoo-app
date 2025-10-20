/**
 * LssGoo Travel App - Explore API Service
 * Handles data fetching for explore content with pagination and filtering
 */

import { EXPLORE_DATA, PlaceDetail, TravelContent } from '../data/exploreData';

export interface ExploreFilters {
  category?: string;
  season?: string;
  difficulty?: string;
  priceRange?: string;
  tags?: string[];
  isTrending?: boolean;
  isSponsored?: boolean;
}

export interface ExploreResponse {
  content: TravelContent[];
  hasMore: boolean;
  totalCount: number;
  nextPage?: number;
}

export interface PlaceDetailResponse {
  place: PlaceDetail;
  relatedContent: TravelContent[];
}

class ExploreApiService {
  private baseUrl = 'https://api.lssgoo.com'; // Replace with actual API
  private content: TravelContent[] = EXPLORE_DATA.content;
  private placeDetails: PlaceDetail[] = EXPLORE_DATA.placeDetails;

  /**
   * Get explore content with pagination and filtering
   */
  async getExploreContent(
    page: number = 1,
    limit: number = 20,
    filters?: ExploreFilters
  ): Promise<ExploreResponse> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      let filteredContent = [...this.content];

      // Apply filters
      if (filters) {
        if (filters.category) {
          filteredContent = filteredContent.filter(item => item.category === filters.category);
        }
        if (filters.season) {
          filteredContent = filteredContent.filter(item => 
            item.season === filters.season || item.season === 'all'
          );
        }
        if (filters.difficulty) {
          filteredContent = filteredContent.filter(item => item.difficulty === filters.difficulty);
        }
        if (filters.priceRange) {
          filteredContent = filteredContent.filter(item => item.priceRange === filters.priceRange);
        }
        if (filters.tags && filters.tags.length > 0) {
          filteredContent = filteredContent.filter(item =>
            filters.tags!.some(tag => item.tags.includes(tag))
          );
        }
        if (filters.isTrending !== undefined) {
          filteredContent = filteredContent.filter(item => item.isTrending === filters.isTrending);
        }
        if (filters.isSponsored !== undefined) {
          filteredContent = filteredContent.filter(item => item.isSponsored === filters.isSponsored);
        }
      }

      // Sort by trending and creation date
      filteredContent.sort((a, b) => {
        if (a.isTrending && !b.isTrending) return -1;
        if (!a.isTrending && b.isTrending) return 1;
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedContent = filteredContent.slice(startIndex, endIndex);

      return {
        content: paginatedContent,
        hasMore: endIndex < filteredContent.length,
        totalCount: filteredContent.length,
        nextPage: endIndex < filteredContent.length ? page + 1 : undefined
      };
    } catch (error) {
      console.error('Error fetching explore content:', error);
      throw new Error('Failed to fetch explore content');
    }
  }

  /**
   * Get trending content
   */
  async getTrendingContent(limit: number = 10): Promise<TravelContent[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return this.content
        .filter(item => item.isTrending)
        .sort((a, b) => b.stats.likes - a.stats.likes)
        .slice(0, limit);
    } catch (error) {
      console.error('Error fetching trending content:', error);
      throw new Error('Failed to fetch trending content');
    }
  }

  /**
   * Get content by category
   */
  async getContentByCategory(category: string, limit: number = 20): Promise<TravelContent[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      
      return this.content
        .filter(item => item.category === category)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, limit);
    } catch (error) {
      console.error('Error fetching content by category:', error);
      throw new Error('Failed to fetch content by category');
    }
  }

  /**
   * Get place details with related content
   */
  async getPlaceDetails(placeId: string): Promise<PlaceDetailResponse> {
    try {
      await new Promise(resolve => setTimeout(resolve, 600));
      
      const place = this.placeDetails.find(p => p.id === placeId);
      if (!place) {
        throw new Error('Place not found');
      }

      // Get related content based on location
      const relatedContent = this.content
        .filter(item => 
          item.location.country === place.country || 
          item.location.name.toLowerCase().includes(place.name.toLowerCase())
        )
        .slice(0, 10);

      return {
        place,
        relatedContent
      };
    } catch (error) {
      console.error('Error fetching place details:', error);
      throw new Error('Failed to fetch place details');
    }
  }

  /**
   * Search content by query
   */
  async searchContent(query: string, limit: number = 20): Promise<TravelContent[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      
      const searchQuery = query.toLowerCase();
      
      return this.content
        .filter(item => 
          item.title.toLowerCase().includes(searchQuery) ||
          item.description.toLowerCase().includes(searchQuery) ||
          item.location.name.toLowerCase().includes(searchQuery) ||
          item.location.country.toLowerCase().includes(searchQuery) ||
          item.tags.some(tag => tag.toLowerCase().includes(searchQuery))
        )
        .sort((a, b) => b.stats.likes - a.stats.likes)
        .slice(0, limit);
    } catch (error) {
      console.error('Error searching content:', error);
      throw new Error('Failed to search content');
    }
  }

  /**
   * Get user's saved content
   */
  async getSavedContent(userId: string, limit: number = 20): Promise<TravelContent[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Simulate saved content (in real app, this would come from user's saved items)
      return this.content
        .filter(item => item.stats.saves > 1000) // Simulate popular saved content
        .sort((a, b) => b.stats.saves - a.stats.saves)
        .slice(0, limit);
    } catch (error) {
      console.error('Error fetching saved content:', error);
      throw new Error('Failed to fetch saved content');
    }
  }

  /**
   * Get content by author
   */
  async getContentByAuthor(authorId: string, limit: number = 20): Promise<TravelContent[]> {
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      
      return this.content
        .filter(item => item.author.id === authorId)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, limit);
    } catch (error) {
      console.error('Error fetching content by author:', error);
      throw new Error('Failed to fetch content by author');
    }
  }

  /**
   * Like content
   */
  async likeContent(contentId: string, userId: string): Promise<{ success: boolean; newLikeCount: number }> {
    try {
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const content = this.content.find(item => item.id === contentId);
      if (!content) {
        throw new Error('Content not found');
      }

      // Simulate like action
      content.stats.likes += 1;
      
      return {
        success: true,
        newLikeCount: content.stats.likes
      };
    } catch (error) {
      console.error('Error liking content:', error);
      throw new Error('Failed to like content');
    }
  }

  /**
   * Save content
   */
  async saveContent(contentId: string, userId: string): Promise<{ success: boolean; newSaveCount: number }> {
    try {
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const content = this.content.find(item => item.id === contentId);
      if (!content) {
        throw new Error('Content not found');
      }

      // Simulate save action
      content.stats.saves += 1;
      
      return {
        success: true,
        newSaveCount: content.stats.saves
      };
    } catch (error) {
      console.error('Error saving content:', error);
      throw new Error('Failed to save content');
    }
  }

  /**
   * Get categories
   */
  async getCategories() {
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      return EXPLORE_DATA.categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch categories');
    }
  }
}

export const exploreApi = new ExploreApiService();
export default exploreApi;