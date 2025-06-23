import { useEffect } from 'react';
import { router } from 'expo-router';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors';
import { useAuthStore } from '@/store/authStore';
import { useOnboardingStore } from '@/store/onboardingStore';

export default function Index() {
  const { isAuthenticated } = useAuthStore();
  const { isOnboardingComplete } = useOnboardingStore();
  
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (!isAuthenticated) {
        router.replace('/auth/signin');
      } else if (!isOnboardingComplete) {
        router.replace('/onboarding/step1');
      } else {
        router.replace('/(tabs)');
      }
    }, 500);
    
    return () => clearTimeout(redirectTimer);
  }, [isAuthenticated, isOnboardingComplete]);
  
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.white,
  },
});