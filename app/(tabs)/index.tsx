import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Colors } from '@/constants/colors';
import { useAuthStore } from '@/store/authStore';

export default function HomeScreen() {
  const { user } = useAuthStore();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to AspirantAI</Text>
      <Text style={styles.subtitle}>Your AI journey starts here</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Account Information</Text>
        <Text style={styles.cardText}>Email: {user?.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.background.light,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.dark,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text.medium,
    marginBottom: 30,
  },
  card: {
    width: '100%',
    backgroundColor: Colors.background.white,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.dark,
    marginBottom: 15,
  },
  cardText: {
    fontSize: 16,
    color: Colors.text.medium,
    marginBottom: 10,
  },
});