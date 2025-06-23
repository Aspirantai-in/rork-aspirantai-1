import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';

type NotificationTime = {
  hour: string;
  minute: string;
  period: 'AM' | 'PM';
};

type OnboardingState = {
  currentStep: number;
  selectedExam: string | null;
  notificationTime: NotificationTime;
  notificationsEnabled: boolean;
  isOnboardingComplete: boolean;

  // Actions
  setCurrentStep: (step: number) => void;
  setSelectedExam: (exam: string) => void;
  setNotificationTime: (time: NotificationTime) => void;
  toggleNotifications: () => void;
  completeOnboarding: () => void;
  skipOnboarding: () => void;
};

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set) => ({
      currentStep: 1,
      selectedExam: null,
      notificationTime: {
        hour: '09',
        minute: '00',
        period: 'AM',
      },
      notificationsEnabled: true,
      isOnboardingComplete: false,

      setCurrentStep: (step) => set({ currentStep: step }),
      
      setSelectedExam: (exam) => set({ selectedExam: exam }),
      
      setNotificationTime: (time) => set({ notificationTime: time }),
      
      toggleNotifications: () => 
        set((state) => ({ notificationsEnabled: !state.notificationsEnabled })),
      
      completeOnboarding: () => 
        set({ isOnboardingComplete: true }),
      
      skipOnboarding: () => 
        set({ isOnboardingComplete: true }),
    }),
    {
      name: 'onboarding-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);