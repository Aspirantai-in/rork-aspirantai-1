import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

type User = {
  email: string;
  name?: string;
};

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  // Actions
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, confirmPassword: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUpWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signOut: () => void;
  clearError: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      
      signIn: async (email, password) => {
        try {
          set({ isLoading: true, error: null });
          
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Simple validation
          if (!email || !password) {
            throw new Error('Email and password are required');
          }
          
          if (!email.includes('@')) {
            throw new Error('Please enter a valid email');
          }
          
          if (password.length < 6) {
            throw new Error('Password must be at least 6 characters');
          }
          
          // Mock successful login
          set({
            user: { email },
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : 'An error occurred',
          });
        }
      },
      
      signUp: async (email, password, confirmPassword) => {
        try {
          set({ isLoading: true, error: null });
          
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Simple validation
          if (!email || !password || !confirmPassword) {
            throw new Error('All fields are required');
          }
          
          if (!email.includes('@')) {
            throw new Error('Please enter a valid email');
          }
          
          if (password.length < 8) {
            throw new Error('Password must be at least 8 characters');
          }
          
          if (password !== confirmPassword) {
            throw new Error('Passwords do not match');
          }
          
          // Mock successful registration
          set({
            user: { email },
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : 'An error occurred',
          });
        }
      },
      
      signInWithGoogle: async () => {
        try {
          set({ isLoading: true, error: null });
          
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock successful Google login
          set({
            user: { email: 'user@example.com' },
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : 'An error occurred',
          });
        }
      },
      
      signUpWithGoogle: async () => {
        try {
          set({ isLoading: true, error: null });
          
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Mock successful Google registration
          set({
            user: { email: 'user@example.com' },
            isAuthenticated: true,
            isLoading: false,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : 'An error occurred',
          });
        }
      },
      
      resetPassword: async (email) => {
        try {
          set({ isLoading: true, error: null });
          
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Simple validation
          if (!email) {
            throw new Error('Email is required');
          }
          
          if (!email.includes('@')) {
            throw new Error('Please enter a valid email');
          }
          
          // Mock successful password reset
          set({ isLoading: false });
          return Promise.resolve();
        } catch (error) {
          set({
            isLoading: false,
            error: error instanceof Error ? error.message : 'An error occurred',
          });
          return Promise.reject(error);
        }
      },
      
      signOut: () => {
        set({
          user: null,
          isAuthenticated: false,
        });
      },
      
      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);