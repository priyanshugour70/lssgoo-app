/**
 * LssGoo Travel App - Place Details Hook
 * Custom hook for managing place details and related content
 */

import { useEffect, useState } from 'react';
import { exploreApi } from '../api/exploreApi';
import { PlaceDetail, TravelContent } from '../data/exploreData';

export const usePlaceDetails = (placeId: string) => {
  const [place, setPlace] = useState<PlaceDetail | null>(null);
  const [relatedContent, setRelatedContent] = useState<TravelContent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPlaceDetails = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await exploreApi.getPlaceDetails(placeId);
      setPlace(response.place);
      setRelatedContent(response.relatedContent);
    } catch (err: any) {
      setError(err.message || 'Failed to load place details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (placeId) {
      loadPlaceDetails();
    }
  }, [placeId]);

  return {
    place,
    relatedContent,
    loading,
    error,
    refetch: loadPlaceDetails
  };
};

export default usePlaceDetails;
