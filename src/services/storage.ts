/**
 * LssGoo Travel App - Storage Service
 * Secure storage for persisting user data
 */

import * as SecureStore from 'expo-secure-store';
import APP_CONFIG from '@/app/constants/appConfig';

class StorageService {
  private keys = APP_CONFIG.storageKeys;

  /**
   * Save item to secure storage
   */
  async setItem(key: string, value: string): Promise<void> {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      console.error(`Error saving to storage (${key}):`, error);
      throw error;
    }
  }

  /**
   * Get item from secure storage
   */
  async getItem(key: string): Promise<string | null> {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      console.error(`Error reading from storage (${key}):`, error);
      return null;
    }
  }

  /**
   * Remove item from secure storage
   */
  async removeItem(key: string): Promise<void> {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      console.error(`Error removing from storage (${key}):`, error);
      throw error;
    }
  }

  /**
   * Save object to storage
   */
  async setObject<T>(key: string, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await this.setItem(key, jsonValue);
    } catch (error) {
      console.error(`Error saving object to storage (${key}):`, error);
      throw error;
    }
  }

  /**
   * Get object from storage
   */
  async getObject<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await this.getItem(key);
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error(`Error getting object from storage (${key}):`, error);
      return null;
    }
  }

  /**
   * Clear all storage
   */
  async clear(): Promise<void> {
    try {
      const allKeys = Object.values(this.keys);
      await Promise.all(allKeys.map(key => this.removeItem(key)));
    } catch (error) {
      console.error('Error clearing storage:', error);
      throw error;
    }
  }

  // Convenience methods for common storage operations

  async saveUser(user: any): Promise<void> {
    await this.setObject(this.keys.user, user);
  }

  async getUser(): Promise<any | null> {
    return await this.getObject(this.keys.user);
  }

  async removeUser(): Promise<void> {
    await this.removeItem(this.keys.user);
  }

  async saveToken(token: string): Promise<void> {
    await this.setItem(this.keys.token, token);
  }

  async getToken(): Promise<string | null> {
    return await this.getItem(this.keys.token);
  }

  async removeToken(): Promise<void> {
    await this.removeItem(this.keys.token);
  }

  async saveTheme(theme: string): Promise<void> {
    await this.setItem(this.keys.theme, theme);
  }

  async getTheme(): Promise<string | null> {
    return await this.getItem(this.keys.theme);
  }

  async saveLanguage(language: string): Promise<void> {
    await this.setItem(this.keys.language, language);
  }

  async getLanguage(): Promise<string | null> {
    return await this.getItem(this.keys.language);
  }

  async saveRecentSearches(searches: string[]): Promise<void> {
    await this.setObject(this.keys.recentSearches, searches);
  }

  async getRecentSearches(): Promise<string[]> {
    return (await this.getObject<string[]>(this.keys.recentSearches)) || [];
  }

  async saveFavoriteTrips(tripIds: string[]): Promise<void> {
    await this.setObject(this.keys.favoriteTrips, tripIds);
  }

  async getFavoriteTrips(): Promise<string[]> {
    return (await this.getObject<string[]>(this.keys.favoriteTrips)) || [];
  }
}

export const storage = new StorageService();
export default storage;

