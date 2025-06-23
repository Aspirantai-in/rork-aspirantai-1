import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useOnboardingStore } from "@/store/onboardingStore";

export const unstable_settings = {
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/signin" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="auth/signup" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="auth/forgot-password" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="onboarding/step1" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="onboarding/step2" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="onboarding/step3" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="onboarding/exam" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="onboarding/notifications" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="onboarding/complete" options={{ animation: 'slide_from_right' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}