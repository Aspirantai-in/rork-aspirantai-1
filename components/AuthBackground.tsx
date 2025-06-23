import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/colors';

const { width, height } = Dimensions.get('window');

type AuthBackgroundProps = {
  variant?: 'signin' | 'signup' | 'forgot';
  children: React.ReactNode;
};

export default function AuthBackground({ variant = 'signin', children }: AuthBackgroundProps) {
  return (
    <View style={[
      styles.container,
      variant !== 'signin' && styles.lightBackground
    ]}>
      {/* Background bubbles */}
      {variant === 'signin' && (
        <>
          <View style={styles.topRightBubble} />
          <View style={styles.bottomLeftBubble} />
        </>
      )}
      
      {variant === 'signup' && (
        <>
          <View style={styles.signupTopRightBubble} />
          <View style={styles.signupBottomLeftBubble} />
          <View style={styles.signupSmallBubble1} />
          <View style={styles.signupSmallBubble2} />
          <View style={styles.signupSmallBubble3} />
        </>
      )}
      
      {variant === 'forgot' && (
        <>
          <View style={styles.forgotTopRightBubble} />
          <View style={styles.forgotBottomLeftBubble} />
          <View style={styles.forgotSmallDot1} />
          <View style={styles.forgotSmallDot2} />
          <View style={styles.forgotSmallDot3} />
          <View style={styles.forgotSmallDot4} />
        </>
      )}
      
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.white,
  },
  lightBackground: {
    backgroundColor: Colors.background.light,
  },
  // Sign In bubbles
  topRightBubble: {
    position: 'absolute',
    width: width * 0.8,
    height: width * 0.8,
    borderRadius: width * 0.4,
    backgroundColor: Colors.bubble.peach,
    top: -width * 0.3,
    right: -width * 0.3,
  },
  bottomLeftBubble: {
    position: 'absolute',
    width: width * 0.9,
    height: width * 0.9,
    borderRadius: width * 0.45,
    backgroundColor: Colors.bubble.peach,
    bottom: -width * 0.4,
    left: -width * 0.4,
  },
  
  // Sign Up bubbles
  signupTopRightBubble: {
    position: 'absolute',
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.25,
    backgroundColor: Colors.bubble.peach,
    opacity: 0.3,
    top: height * 0.05,
    right: -width * 0.25,
  },
  signupBottomLeftBubble: {
    position: 'absolute',
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    backgroundColor: Colors.bubble.peach,
    opacity: 0.3,
    bottom: height * 0.05,
    left: -width * 0.3,
  },
  signupSmallBubble1: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.bubble.blue,
    opacity: 0.3,
    bottom: height * 0.2,
    right: width * 0.2,
  },
  signupSmallBubble2: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.bubble.green,
    opacity: 0.3,
    top: height * 0.3,
    left: width * 0.1,
  },
  signupSmallBubble3: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.bubble.peach,
    opacity: 0.3,
    top: height * 0.6,
    right: width * 0.3,
  },
  
  // Forgot Password bubbles and dots
  forgotTopRightBubble: {
    position: 'absolute',
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    backgroundColor: Colors.bubble.blue,
    opacity: 0.2,
    top: height * 0.05,
    right: -width * 0.3,
  },
  forgotBottomLeftBubble: {
    position: 'absolute',
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: width * 0.35,
    backgroundColor: Colors.bubble.peach,
    opacity: 0.2,
    bottom: -width * 0.35,
    left: -width * 0.35,
  },
  forgotSmallDot1: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.bubble.green,
    opacity: 0.5,
    top: height * 0.4,
    left: width * 0.1,
  },
  forgotSmallDot2: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.bubble.peach,
    opacity: 0.5,
    top: height * 0.5,
    right: width * 0.2,
  },
  forgotSmallDot3: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.bubble.blue,
    opacity: 0.5,
    bottom: height * 0.3,
    left: width * 0.3,
  },
  forgotSmallDot4: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.primary,
    opacity: 0.3,
    bottom: height * 0.2,
    right: width * 0.1,
  },
});