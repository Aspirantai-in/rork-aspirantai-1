import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/colors';
import OnboardingLayout from '@/components/OnboardingLayout';
import TimePicker from '@/components/TimePicker';
import AuthButton from '@/components/AuthButton';
import AppLogo from '@/components/AppLogo';
import { useOnboardingStore } from '@/store/onboardingStore';

export default function NotificationsScreen() {
  const {
    notificationTime,
    notificationsEnabled,
    setNotificationTime,
    toggleNotifications,
    skipOnboarding,
  } = useOnboardingStore();

  const handleFinish = () => {
    router.push('/onboarding/complete');
  };

  const handleSkip = () => {
    skipOnboarding();
    router.push('/onboarding/complete');
  };

  return (
    <OnboardingLayout showSkip={false}>
      <View style={styles.container}>
        <AppLogo />

        <Text style={styles.title}>Notification Preferences</Text>
        <Text style={styles.description}>
          Choose your preferred time for daily news and quiz notifications:
        </Text>

        <View style={styles.card}>
          <Text style={styles.label}>Preferred Time:</Text>

          <TimePicker
            hour={notificationTime.hour}
            minute={notificationTime.minute}
            period={notificationTime.period}
            onChangeHour={(hour) => setNotificationTime({ ...notificationTime, hour })}
            onChangeMinute={(minute) => setNotificationTime({ ...notificationTime, minute })}
            onChangePeriod={(period) => setNotificationTime({ ...notificationTime, period })}
          />

          <View style={styles.switchContainer}>
            <Text style={styles.switchLabel}>Enable Daily Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={toggleNotifications}
              trackColor={{ false: '#CCCCCC', true: '#4CAF50' }}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text
            style={styles.skipText}
            onPress={handleSkip}
          >
            Skip for now
          </Text>

          <AuthButton
            title="Finish"
            onPress={handleFinish}
            style={styles.button}
          />
        </View>
      </View>
    </OnboardingLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
    backgroundColor: Colors.background.light,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text.dark,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: Colors.text.medium,
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: Colors.background.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    color: Colors.text.dark,
    marginBottom: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  switchLabel: {
    fontSize: 16,
    color: Colors.text.dark,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    gap: 15,
  },
  skipText: {
    fontSize: 14,
    color: '#286295',
    textAlign: 'center',
  },
  button: {
    width: '100%',
  },
});