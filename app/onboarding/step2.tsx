import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Brain } from 'lucide-react-native';
import { Colors } from '@/constants/colors';
import { ONBOARDING_STEPS } from '@/constants/onboarding';
import OnboardingLayout from '@/components/OnboardingLayout';
import AuthButton from '@/components/AuthButton';
import { useOnboardingStore } from '@/store/onboardingStore';

export default function OnboardingStep2() {
  const { setCurrentStep } = useOnboardingStore();
  
  const handleNext = () => {
    setCurrentStep(3);
    router.push('/onboarding/step3');
  };

  return (
    <OnboardingLayout currentStep={2}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Brain size={80} color={Colors.text.dark} />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>
            {ONBOARDING_STEPS[1]?.title || "Master Your News. Master Your Exam."}
          </Text>

          <View style={styles.bulletContainer}>
            {ONBOARDING_STEPS[1]?.bullets?.map((bullet, index) => (
              <View key={index} style={styles.bulletItem}>
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
          </View>
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
  iconContainer: {
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
    marginBottom: 30,
  },
  bulletContainer: {
    alignSelf: 'stretch',
    gap: 20,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
  bulletText: {
    flex: 1,
    fontSize: 16,
    color: Colors.text.medium,
  },
  progressIndicator: {
    width: 40,
    height: 4,
    backgroundColor: Colors.primary,
    borderRadius: 2,
    position: 'absolute',
    bottom: 120,
    left: '50%',
    marginLeft: -20,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
  },
});