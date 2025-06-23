import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native';
import { Colors } from '@/constants/colors';

type GoogleButtonProps = {
  title: string;
  onPress: () => void;
};

export default function GoogleButton({ title, onPress }: GoogleButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
          style={styles.googleIcon}
        />
      </View>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background.white,
    borderWidth: 1,
    borderColor: Colors.input.border,
    width: '100%',
  },
  iconContainer: {
    position: 'absolute',
    left: 15,
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.text.dark,
    fontWeight: '500',
  },
});