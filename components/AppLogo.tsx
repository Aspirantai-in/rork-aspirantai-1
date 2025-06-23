import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';

type AppLogoProps = {
  showTagline?: boolean;
  size?: 'small' | 'medium' | 'large';
};

export default function AppLogo({ showTagline = false, size = 'medium' }: AppLogoProps) {
  return (
    <View style={styles.container}>
      <View style={[
        styles.logoContainer,
        size === 'small' && styles.logoContainerSmall,
        size === 'large' && styles.logoContainerLarge,
      ]}>
        <LinearGradient
          colors={[Colors.primary, '#FF9F5A']}
          style={styles.logoBackground}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.logoText}>A</Text>
        </LinearGradient>
      </View>
      
      <View style={styles.appNameContainer}>
        <Text style={styles.appNameText}>
          Aspirant<Text style={styles.aiText}>AI</Text>
        </Text>
        {showTagline && (
          <Text style={styles.taglineText}>Empower your future with AI</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginBottom: 10,
    overflow: 'hidden',
  },
  logoContainerSmall: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  logoContainerLarge: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  logoBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: Colors.background.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  appNameContainer: {
    alignItems: 'center',
  },
  appNameText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text.dark,
  },
  aiText: {
    color: Colors.primary,
  },
  taglineText: {
    fontSize: 14,
    color: Colors.text.medium,
    marginTop: 5,
  },
});