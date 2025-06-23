import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/colors';

type OnboardingLayoutProps = {
  children: React.ReactNode;
  currentStep?: number;
  totalSteps?: number;
  showSkip?: boolean;
  onSkip?: () => void;
};

export default function OnboardingLayout({
  children,
  currentStep,
  totalSteps = 3,
  showSkip = true,
  onSkip,
}: OnboardingLayoutProps) {
  const handleSkip = () => {
    if (onSkip) {
      onSkip();
    } else {
      router.push('/onboarding/exam');
    }
  };

  return (
    <View style={styles.container}>
      {showSkip && (
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      )}

      <View style={styles.content}>
        {children}
      </View>

      {currentStep && (
        <View style={styles.paginationContainer}>
          {Array.from({ length: totalSteps }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                currentStep === index + 1 && styles.paginationDotActive,
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.white,
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
  },
  skipText: {
    color: Colors.text.light,
    fontSize: 14,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
    gap: 8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.input.border,
  },
  paginationDotActive: {
    backgroundColor: Colors.primary,
  },
});