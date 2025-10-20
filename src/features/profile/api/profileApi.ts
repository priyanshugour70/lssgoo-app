/**
 * LssGoo Travel App - Profile API
 */

import { ProfileData } from '../types/profileTypes';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const MOCK_PROFILE: ProfileData = {
  id: '1',
  name: 'Leonardo DiCaprio',
  location: 'New York, USA',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
  rating: 4.9,
  reviewCount: 24,
  stats: {
    tripsCompleted: '12',
    countriesVisited: '8',
    reviewsGiven: '24',
  },
};

class ProfileApi {
  async getProfile(): Promise<ProfileData> {
    await delay(300);
    return MOCK_PROFILE;
  }

  async updateProfile(data: Partial<ProfileData>): Promise<ProfileData> {
    await delay(500);
    return { ...MOCK_PROFILE, ...data };
  }
}

export const profileApi = new ProfileApi();
export default profileApi;

