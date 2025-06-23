import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Check } from 'lucide-react-native';
import { Colors } from '@/constants/colors';
import AuthButton from '@/components/AuthButton';
import { useOnboardingStore } from '@/store/onboardingStore';

export default function CompleteScreen() {
  const { completeOnboarding } = useOnboardingStore();

  const handleExplore = () => {
    completeOnboarding();
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <View style={styles.confetti}>
        <View style={[styles.shape, styles.diamond]} />
        <View style={[styles.shape, styles.square]} />
        <View style={[styles.shape, styles.circle]} />
        <View style={[styles.shape, styles.rectangle]} />
      </View>

      <View style={styles.content}>
        <View style={styles.checkContainer}>
          <View style={styles.checkCircle}>
            <Check size={40} color={Colors.primary} />
          </View>
          <View style={styles.sparkle1} />
          <View style={styles.sparkle2} />
        </View>

        <Text style={styles.title}>Personalization Complete!</Text>
        <Text style={styles.description}>
          Your personalized experience is now ready!
        </Text>
      </View>

      <AuthButton
        title="Explore Your Experience"
        onPress={handleExplore}
        style={styles.button}
      />

      <View style={styles.bubbleLeft} />
      <View style={styles.bubbleRight} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  confetti: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '50%',
  },
  shape: {
    position: 'absolute',
    opacity: 0.6,
  },
  diamond: {
    width: 20,
    height: 20,
    backgroundColor: Colors.primary,
    transform: [{ rotate: '45deg' }],
    top: '20%',
    left: '20%',
  },
  square: {
    width: 15,
    height: 15,
    backgroundColor: '#E0F2F7',
    top: '15%',
    right: '25%',
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: Colors.bubble.peach,
    top: '35%',
    left: '30%',
  },
  rectangle: {
    width: 25,
    height: 15,
    backgroundColor: '#286295',
    top: '25%',
    right: '35%',
  },
  content: {
    alignItems: 'center',
    gap: 20,
  },
  checkContainer: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  checkCircle: {
    width: '100%',
    height: '100%',
    borderWidth: 3,
    borderColor: Colors.primary,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sparkle1: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    top: -10,
    right: -10,
    opacity: 0.3,
  },
  sparkle2: {
    position: 'absolute',
    width: 15,
    height: 15,
    backgroundColor: Colors.primary,
    borderRadius: 7.5,
    bottom: 0,
    left: -5,
    opacity: 0.3,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.text.dark,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: Colors.text.medium,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 40,
    width: '90%',
  },
  bubbleLeft: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: Colors.bubble.peach,
    bottom: -150,
    left: -150,
    opacity: 0.3,
  },
  bubbleRight: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E0F2F7',
    top: -100,
    right: -100,
    opacity: 0.3,
  },
});