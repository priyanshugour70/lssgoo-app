/**
 * LssGoo Travel App - UI Store
 * Global UI state management using Zustand
 */

import { create } from 'zustand';

interface UIState {
  theme: 'light' | 'dark';
  language: string;
  isMenuOpen: boolean;
  isLoading: boolean;
  toastMessage: string | null;
  toastType: 'success' | 'error' | 'info' | 'warning' | null;

  // Actions
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
  setLanguage: (language: string) => void;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
  setLoading: (isLoading: boolean) => void;
  showToast: (message: string, type: 'success' | 'error' | 'info' | 'warning') => void;
  hideToast: () => void;
}

export const useUIStore = create<UIState>((set, get) => ({
  theme: 'light',
  language: 'en',
  isMenuOpen: false,
  isLoading: false,
  toastMessage: null,
  toastType: null,

  setTheme: (theme) => set({ theme }),

  toggleTheme: () => {
    const currentTheme = get().theme;
    set({ theme: currentTheme === 'light' ? 'dark' : 'light' });
  },

  setLanguage: (language) => set({ language }),

  openMenu: () => set({ isMenuOpen: true }),

  closeMenu: () => set({ isMenuOpen: false }),

  toggleMenu: () => {
    const currentState = get().isMenuOpen;
    set({ isMenuOpen: !currentState });
  },

  setLoading: (isLoading) => set({ isLoading }),

  showToast: (message, type) => {
    set({ toastMessage: message, toastType: type });
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
      set({ toastMessage: null, toastType: null });
    }, 3000);
  },

  hideToast: () => set({ toastMessage: null, toastType: null }),
}));

export default useUIStore;

