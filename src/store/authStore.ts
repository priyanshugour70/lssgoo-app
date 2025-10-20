/**
 * LssGoo Travel App - Auth Store
 * Global authentication state management using Zustand
 */

import { create } from 'zustand';
import { User } from '@/types/common';
import { storage } from '@/services/storage';
import { apiClient } from '@/services/apiClient';

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;

  // Actions
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loadStoredAuth: () => Promise<void>;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  setToken: (token) => {
    set({ token });
    if (token) {
      apiClient.setToken(token);
    }
  },

  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });

      // TODO: Replace with actual API call
      // const response = await apiClient.post('/auth/login', { email, password });
      
      // Mock response for development
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        preferences: {
          theme: 'light',
          language: 'en',
          currency: 'INR',
          notifications: {
            push: true,
            email: true,
            sms: false,
            marketing: false,
          },
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const mockToken = 'mock-jwt-token';

      // Save to storage
      await storage.saveUser(mockUser);
      await storage.saveToken(mockToken);

      // Update state
      set({
        user: mockUser,
        token: mockToken,
        isAuthenticated: true,
        isLoading: false,
      });

      apiClient.setToken(mockToken);
    } catch (error: any) {
      set({
        error: error.message || 'Login failed',
        isLoading: false,
      });
      throw error;
    }
  },

  signup: async (name, email, password) => {
    try {
      set({ isLoading: true, error: null });

      // TODO: Replace with actual API call
      // const response = await apiClient.post('/auth/signup', { name, email, password });

      // Mock response for development
      const mockUser: User = {
        id: '1',
        name,
        email,
        preferences: {
          theme: 'light',
          language: 'en',
          currency: 'INR',
          notifications: {
            push: true,
            email: true,
            sms: false,
            marketing: false,
          },
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const mockToken = 'mock-jwt-token';

      // Save to storage
      await storage.saveUser(mockUser);
      await storage.saveToken(mockToken);

      // Update state
      set({
        user: mockUser,
        token: mockToken,
        isAuthenticated: true,
        isLoading: false,
      });

      apiClient.setToken(mockToken);
    } catch (error: any) {
      set({
        error: error.message || 'Signup failed',
        isLoading: false,
      });
      throw error;
    }
  },

  logout: async () => {
    try {
      set({ isLoading: true });

      // Clear storage
      await storage.removeUser();
      await storage.removeToken();

      // Clear state
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
      });

      apiClient.setToken(null);
    } catch (error) {
      console.error('Logout error:', error);
      set({ isLoading: false });
    }
  },

  loadStoredAuth: async () => {
    try {
      set({ isLoading: true });

      const [user, token] = await Promise.all([
        storage.getUser(),
        storage.getToken(),
      ]);

      if (user && token) {
        set({
          user,
          token,
          isAuthenticated: true,
        });
        apiClient.setToken(token);
      }
    } catch (error) {
      console.error('Error loading stored auth:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  clearError: () => set({ error: null }),
}));

export default useAuthStore;

