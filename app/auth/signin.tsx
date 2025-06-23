import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';
import { Mail, Lock } from 'lucide-react-native';
import { Colors } from '@/constants/colors';
import AuthBackground from '@/components/AuthBackground';
import AuthInput from '@/components/AuthInput';
import AuthButton from '@/components/AuthButton';
import GoogleButton from '@/components/GoogleButton';
import OrDivider from '@/components/OrDivider';
import AppLogo from '@/components/AppLogo';
import { useAuthStore } from '@/store/authStore';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const { signIn, signInWithGoogle, isLoading, error, clearError } = useAuthStore();
  
  useEffect(() => {
    if (error) {
      Alert.alert('Authentication Error', error);
      clearError();
    }
  }, [error]);
  
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
  
  const validatePassword = () => {
    if (!password) {
      setPasswordError('Password is required');
      return false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };
  
  const handleSignIn = async () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    if (isEmailValid && isPasswordValid) {
      try {
        await signIn(email, password);
        router.replace('/(tabs)');
      } catch (error) {
        // Error is handled in the store
      }
    }
  };
  
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      router.replace('/(tabs)');
    } catch (error) {
      // Error is handled in the store
    }
  };
  
  const navigateToSignUp = () => {
    router.push('/auth/signup');
  };
  
  const navigateToForgotPassword = () => {
    router.push('/auth/forgot-password');
  };
  
  return (
    <AuthBackground>
      <View style={styles.container}>
        <AppLogo />
        
        <View style={styles.formContainer}>
          <AuthInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            error={emailError}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          
          <AuthInput
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={passwordError}
          />
          
          <AuthButton
            title="Log In"
            onPress={handleSignIn}
            isLoading={isLoading}
            style={styles.loginButton}
          />
          
          <TouchableOpacity onPress={navigateToForgotPassword} style={styles.forgotPasswordContainer}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          
          <OrDivider text="Or continue with" showDot />
          
          <GoogleButton
            title="Sign in with Google"
            onPress={handleGoogleSignIn}
          />
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={navigateToSignUp}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 10,
  },
  forgotPasswordContainer: {
    marginTop: 15,
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: Colors.primary,
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 30,
    position: 'absolute',
    bottom: 40,
  },
  footerText: {
    color: Colors.text.dark,
    fontSize: 14,
  },
  signUpText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5,
  },
});