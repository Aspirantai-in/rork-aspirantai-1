import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/colors';
import { ONBOARDING_STEPS } from '@/constants/onboarding';
import OnboardingLayout from '@/components/OnboardingLayout';
import AuthButton from '@/components/AuthButton';
import { useOnboardingStore } from '@/store/onboardingStore';

export default function OnboardingStep1() {
  const { setCurrentStep } = useOnboardingStore();
  
  const handleNext = () => {
    setCurrentStep(2);
    router.push('/onboarding/step2');
  };

  return (
    <OnboardingLayout currentStep={1}>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format' }}
          style={styles.illustration}
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            News Made Simple
          </Text>
          <Text style={styles.highlight}>
            AI-Powered Summaries
          </Text>
          <Text style={styles.description}>
            {ONBOARDING_STEPS[0].description}
          </Text>
        </View>

        <View style={styles.progressIndicator} />

        <AuthButton
          title="Next"
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
    height: 200,
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
  },
  highlight: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    color: Colors.text.medium,
    textAlign: 'center',
    marginTop: 15,
    maxWidth: '80%',
  },
  progressIndicator: {
    width: 40,
    height: 4,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    position: 'absolute',
    bottom: 120,
    left: 20,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
});