import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Eye, EyeOff } from 'lucide-react-native';
import { Colors } from '@/constants/colors';

type AuthInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  icon?: React.ReactNode;
  error?: string;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  variant?: 'signin' | 'signup';
};

export default function AuthInput({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  icon,
  error,
  autoCapitalize = 'none',
  keyboardType = 'default',
  variant = 'signin',
}: AuthInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={[
        styles.inputContainer,
        variant === 'signup' && styles.signupInput,
        error ? styles.inputError : null
      ]}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          style={[
            styles.input,
            icon && styles.inputWithIcon
          ]}
          placeholder={placeholder}
          placeholderTextColor={Colors.input.placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          autoCapitalize={autoCapitalize}
          keyboardType={keyboardType}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            {isPasswordVisible ? (
              <Eye size={20} color={Colors.text.light} />
            ) : (
              <EyeOff size={20} color={Colors.text.light} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.input.border,
    borderRadius: 10,
    backgroundColor: Colors.background.white,
  },
  signupInput: {
    borderWidth: 0,
    backgroundColor: Colors.background.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
    color: Colors.text.dark,
  },
  inputWithIcon: {
    paddingLeft: 5,
  },
  iconContainer: {
    paddingLeft: 15,
  },
  eyeIcon: {
    padding: 10,
  },
  inputError: {
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
});