import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, router } from "expo-router";
import { Pressable, TouchableOpacity } from "react-native";
import { Home, User, Settings } from "lucide-react-native";
import { Colors } from "@/constants/colors";
import { useAuthStore } from "@/store/authStore";

export default function TabLayout() {
  const { signOut } = useAuthStore();
  
  const handleSignOut = () => {
    signOut();
    router.replace('/auth/signin');
  };
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
          headerRight: () => (
            <TouchableOpacity onPress={handleSignOut} style={{ marginRight: 15 }}>
              <Settings size={24} color={Colors.text.dark} />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}