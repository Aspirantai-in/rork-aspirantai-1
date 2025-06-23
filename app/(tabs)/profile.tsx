import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Colors } from '@/constants/colors';
import { useAuthStore } from '@/store/authStore';
import AppLogo from '@/components/AppLogo';

export default function ProfileScreen() {
  const { user } = useAuthStore();
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.name}>{user?.name || 'AspirantAI User'}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>
      
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Account Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>{user?.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Member Since:</Text>
            <Text style={styles.infoValue}>June 2025</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Subscription:</Text>
            <Text style={styles.infoValue}>Free Plan</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.footer}>
        <AppLogo size="small" />
        <Text style={styles.footerText}>AspirantAI v1.0.0</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.light,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    backgroundColor: Colors.background.white,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: Colors.primary,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.text.dark,
  },
  email: {
    fontSize: 16,
    color: Colors.text.medium,
    marginTop: 5,
  },
  infoContainer: {
    padding: 20,
  },
  infoCard: {
    backgroundColor: Colors.background.white,
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text.dark,
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.input.border,
  },
  infoLabel: {
    fontSize: 16,
    color: Colors.text.medium,
  },
  infoValue: {
    fontSize: 16,
    color: Colors.text.dark,
    fontWeight: '500',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: Colors.text.light,
    marginTop: 5,
  },
});