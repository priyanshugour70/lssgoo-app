/**
 * LssGoo Travel App - Explore Hook
 * Custom hook for managing explore content with infinite scroll
 */

import { useCallback, useEffect, useState } from 'react';
import { exploreApi, ExploreFilters, ExploreResponse } from '../api/exploreApi';
import { TravelContent } from '../data/exploreData';

export const useExplore = (initialFilters?: ExploreFilters) => {
  const [content, setContent] = useState<TravelContent[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ExploreFilters | undefined>(initialFilters);

  const loadContent = useCallback(async (pageNum: number, isRefresh: boolean = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
        setPage(1);
      } else {
        setLoading(true);
      }
      
      setError(null);

      const response: ExploreResponse = await exploreApi.getExploreContent(
        pageNum,
        20,
        filters
      );

      if (isRefresh || pageNum === 1) {
        setContent(response.content);
      } else {
        setContent(prev => [...prev, ...response.content]);
      }

      setHasMore(response.hasMore);
      setPage(pageNum);
    } catch (err: any) {
      setError(err.message || 'Failed to load content');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [filters]);

  const loadMore = useCallback(() => {
    if (!loading && hasMore) {
      loadContent(page + 1);
    }
  }, [loading, hasMore, page, loadContent]);

  const refresh = useCallback(() => {
    loadContent(1, true);
  }, [loadContent]);

  const updateFilters = useCallback((newFilters: ExploreFilters) => {
    setFilters(newFilters);
    setPage(1);
    setContent([]);
    setHasMore(true);
  }, []);

  const likeContent = useCallback(async (contentId: string) => {
    try {
      const response = await exploreApi.likeContent(contentId, 'current-user');
      
      setContent(prev => prev.map(item => 
        item.id === contentId 
          ? { ...item, stats: { ...item.stats, likes: response.newLikeCount } }
          : item
      ));
    } catch (err: any) {
      console.error('Error liking content:', err);
    }
  }, []);

  const saveContent = useCallback(async (contentId: string) => {
    try {
      const response = await exploreApi.saveContent(contentId, 'current-user');
      
      setContent(prev => prev.map(item => 
        item.id === contentId 
          ? { ...item, stats: { ...item.stats, saves: response.newSaveCount } }
          : item
      ));
    } catch (err: any) {
      console.error('Error saving content:', err);
    }
  }, []);

  useEffect(() => {
    loadContent(1);
  }, [filters]);

  return {
    content,
    loading,
    refreshing,
    hasMore,
    error,
    filters,
    loadMore,
    refresh,
    updateFilters,
    likeContent,
    saveContent
  };
};

export default useExplore;
