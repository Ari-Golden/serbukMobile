import { Tabs } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      
      headerBackground: () => null,
      tabBarActiveTintColor: "#ffd33d",
      headerStyle: {
        backgroundColor: "#25292e",
      },
      headerShadowVisible: false,      
      tabBarStyle: {
        backgroundColor: "#25292e",
      },
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleStyle: {
            color: "#F12323",
          },
          headerBackgroundContainerStyle: {
            backgroundColor: "#F12323",
            
          },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitleStyle: {
            color: "#F12323",
          },
          headerBackgroundContainerStyle: {
            backgroundColor: "#F12323"            
          },
          title: "About",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitleStyle: {
            color: "#F12323",
          },
          headerBackgroundContainerStyle: {
            backgroundColor: "#F12323"
          },
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person-circle-sharp" : "person-circle-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
