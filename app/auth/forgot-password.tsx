import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Colors } from '@/constants/colors';
import AuthBackground from '@/components/AuthBackground';
import AuthInput from '@/components/AuthInput';
import AuthButton from '@/components/AuthButton';
import { useAuthStore } from '@/store/authStore';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { resetPassword, isLoading, clearError } = useAuthStore();
  
  const validateEmail = () => {
    if (!email) {
      setEmailError('Email is required');
      return false;
    } else if (!email.includes('@')) {
      setEmailError('Please enter a valid email');
      return false;
    }
    setEmailError('');
    return true;
  };
  
  const handleResetPassword = async () => {
    const isEmailValid = validateEmail();
    
    if (isEmailValid) {
      try {
        await resetPassword(email);
        setIsSuccess(true);
        Alert.alert(
          'Success',
          'Password reset link has been sent to your email.',
          [{ text: 'OK', onPress: () => router.back() }]
        );
      } catch (error) {
        Alert.alert('Error', error instanceof Error ? error.message : 'An error occurred');
        clearError();
      }
    }
  };
  
  const goBack = () => {
    router.back();
  };
  
  return (
    <AuthBackground variant="forgot">
      <View style={styles.container}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <ArrowLeft size={24} color={Colors.text.dark} />
        </TouchableOpacity>
        
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.description}>
            Enter your email address to receive a password reset link.
          </Text>
          
          <View style={styles.inputContainer}>
            <AuthInput
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              error={emailError}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            
            <AuthButton
              title="Send Reset Link"
              onPress={handleResetPassword}
              isLoading={isLoading}
              style={styles.resetButton}
            />
          </View>
        </View>
      </View>
    </AuthBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  backButton: {
    marginTop: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text.dark,
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: Colors.text.medium,
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: '80%',
  },
  inputContainer: {
    width: '100%',
  },
  resetButton: {
    marginTop: 15,
  },
});