import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/colors';
import OnboardingLayout from '@/components/OnboardingLayout';
import ExamGrid from '@/components/ExamGrid';
import AuthButton from '@/components/AuthButton';
import AppLogo from '@/components/AppLogo';
import { useOnboardingStore } from '@/store/onboardingStore';

export default function ExamScreen() {
  const { selectedExam, setSelectedExam, skipOnboarding } = useOnboardingStore();

  const handleNext = () => {
    if (selectedExam) {
      router.push('/onboarding/notifications');
    }
  };

  const handleSkip = () => {
    skipOnboarding();
    router.push('/onboarding/complete');
  };

  return (
    <OnboardingLayout showSkip={false}>
      <View style={styles.container}>
        <AppLogo />

        <View style={styles.content}>
          <Text style={styles.title}>Choose Your Exam</Text>
          <Text style={styles.description}>
            Select the competitive exam you are preparing for:
          </Text>

          <ExamGrid
            selectedExam={selectedExam}
            onSelectExam={setSelectedExam}
          />
        </View>

        <View style={styles.footer}>
          <Text
            style={styles.skipText}
            onPress={handleSkip}
          >
            Skip for now
          </Text>

          <AuthButton
            title="Next"
            onPress={handleNext}
            style={styles.button}
          />
        </View>
      </View>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  content: {
    flex: 1,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.dark,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: Colors.text.medium,
    textAlign: 'center',
    marginBottom: 30,
  },
  footer: {
    paddingBottom: 40,
    gap: 15,
  },
  skipText: {
    fontSize: 14,
    color: '#286295',
    textAlign: 'center',
  },
  button: {
    width: '100%',
  },
});