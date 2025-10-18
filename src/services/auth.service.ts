/**
 * Authentication Service
 * Handles user authentication operations
 */

import ApiService from './api.service';
import { User } from '../types';

class AuthService {
  async login(email: string, password: string): Promise<User> {
    const response = await ApiService.post<{ user: User; token: string }>(
      '/auth/login',
      { email, password }
    );

    if (response.success && response.data) {
      // Store token securely
      // await SecureStore.setItemAsync('authToken', response.data.token);
      return response.data.user;
    }

    throw new Error(response.error || 'Login failed');
  }

  async register(email: string, password: string, name: string): Promise<User> {
    const response = await ApiService.post<{ user: User; token: string }>(
      '/auth/register',
      { email, password, name }
    );

    if (response.success && response.data) {
      // Store token securely
      // await SecureStore.setItemAsync('authToken', response.data.token);
      return response.data.user;
    }

    throw new Error(response.error || 'Registration failed');
  }

  async logout(): Promise<void> {
    // Clear stored token
    // await SecureStore.deleteItemAsync('authToken');
    await ApiService.post('/auth/logout', {});
  }

  async getCurrentUser(): Promise<User | null> {
    // const token = await SecureStore.getItemAsync('authToken');
    // if (!token) return null;

    const response = await ApiService.get<User>('/auth/me');

    if (response.success && response.data) {
      return response.data;
    }

    return null;
  }

  async updateProfile(updates: Partial<User>): Promise<User> {
    const response = await ApiService.put<User>('/auth/profile', updates);

    if (response.success && response.data) {
      return response.data;
    }

    throw new Error(response.error || 'Profile update failed');
  }

  async resetPassword(email: string): Promise<void> {
    const response = await ApiService.post('/auth/reset-password', { email });

    if (!response.success) {
      throw new Error(response.error || 'Password reset failed');
    }
  }
}

export default new AuthService();

