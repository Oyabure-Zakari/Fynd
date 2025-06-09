import React, { useEffect } from "react";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";

import { COLORS } from "@/constants/Colors";
import { useLoginAdminStore } from "@/store/loginAdmin";

export default function TabLayout() {
  const isAdmin = useLoginAdminStore((state) => state.adminToken);
  const checkAdminToken = useLoginAdminStore((state) => state.checkAdminToken);

  // updates the adminToken state immediately the app is launched
  useEffect(() => {
    checkAdminToken();
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "shift",
        tabBarActiveTintColor: COLORS.purple,
        tabBarInactiveTintColor: COLORS.secondaryGrey,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: COLORS.primaryGrey,
          height: 60,
        },

        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="map-location-dot" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="Explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="lighthouse"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {isAdmin ? (
        <Tabs.Screen
          name="Upload"
          options={{
            tabBarLabel: "Upload",
            tabBarIcon: ({ color, size }) => (
              <Foundation name="upload" size={size} color={color} />
            ),
          }}
        />
      ) : (
        <Tabs.Screen
          name="Upload"
          options={{
            href: null,
            tabBarLabel: "Upload",
            tabBarIcon: ({ color, size }) => (
              <Foundation name="upload" size={size} color={color} />
            ),
          }}
        />
      )}
    </Tabs>
  );
}
