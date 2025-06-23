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

export default function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  
  const { signUp, signUpWithGoogle, isLoading, error, clearError } = useAuthStore();
  
  useEffect(() => {
    if (error) {
      Alert.alert('Registration Error', error);
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
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return false;
    }
    setPasswordError('');
    return true;
  };
  
  const validateConfirmPassword = () => {
    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your password');
      return false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    }
    setConfirmPasswordError('');
    return true;
  };
  
  const handleSignUp = async () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      try {
        await signUp(email, password, confirmPassword);
        router.replace('/(tabs)');
      } catch (error) {
        // Error is handled in the store
      }
    }
  };
  
  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle();
      router.replace('/(tabs)');
    } catch (error) {
      // Error is handled in the store
    }
  };
  
  const navigateToSignIn = () => {
    router.push('/auth/signin');
  };
  
  return (
    <AuthBackground variant="signup">
      <View style={styles.container}>
        <AppLogo showTagline />
        
        <View style={styles.formContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Sign Up</Text>
            <Text style={styles.subHeaderText}>Start your AI journey today</Text>
          </View>
          
          <AuthInput
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            error={emailError}
            autoCapitalize="none"
            keyboardType="email-address"
            variant="signup"
            icon={<Mail size={20} color={Colors.text.medium} />}
          />
          
          <AuthInput
            placeholder="Create password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            error={passwordError}
            variant="signup"
            icon={<Lock size={20} color={Colors.text.medium} />}
          />
          
          <AuthInput
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            error={confirmPasswordError}
            variant="signup"
            icon={<Lock size={20} color={Colors.text.medium} />}
          />
          
          <AuthButton
            title="Create Account"
            onPress={handleSignUp}
            isLoading={isLoading}
            style={styles.createAccountButton}
          />
          
          <OrDivider />
          
          <GoogleButton
            title="Sign Up with Google"
            onPress={handleGoogleSignUp}
          />
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={navigateToSignIn}>
            <Text style={styles.signInText}>Log In</Text>
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
    backgroundColor: Colors.background.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  headerContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.dark,
  },
  subHeaderText: {
    fontSize: 14,
    color: Colors.text.medium,
    marginTop: 5,
  },
  createAccountButton: {
    marginTop: 10,
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
  signInText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 5,
  },
});