import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/colors';
import { ONBOARDING_STEPS } from '@/constants/onboarding';
import OnboardingLayout from '@/components/OnboardingLayout';
import AuthButton from '@/components/AuthButton';
import { useOnboardingStore } from '@/store/onboardingStore';

export default function OnboardingStep3() {
  const { setCurrentStep } = useOnboardingStore();
  
  const handleNext = () => {
    setCurrentStep(4);
    router.push('/onboarding/exam');
  };

  return (
    <OnboardingLayout currentStep={3}>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?q=80&w=400&auto=format' }}
          style={styles.illustration}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {ONBOARDING_STEPS[2].title}
          </Text>
          <Text style={styles.description}>
            {ONBOARDING_STEPS[2].description}
          </Text>
        </View>

        <View style={styles.progressIndicator} />

        <AuthButton
          title="Discover Summaries"
          onPress={handleNext}
          style={styles.button}
        />
      </View>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  illustration: {
    width: 200,
    height: 250,
    marginBottom: 30,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.text.dark,
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: Colors.text.medium,
    textAlign: 'center',
    maxWidth: '80%',
  },
  progressIndicator: {
    width: 40,
    height: 4,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    position: 'absolute',
    bottom: 120,
    right: 20,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
});