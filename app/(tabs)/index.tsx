import CustomBottomSheet from "@/components/home/CustomButtomSheet";

import { useAppLaunchedStore } from "@/store/appLaunched";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../../styles/home.styles";

export default function Home() {
  const router = useRouter();
  const removeAppLaunch = useAppLaunchedStore((state) => state.removeAppLaunch);
  return (
    <View style={styles.container}>
      <Text> Home Screen</Text>
      <Button title="onboarding" onPress={() => router.push("/(onboarding)")}/>
      <Button title="auth" onPress={() => router.push("/(auth)")}/>
      <Button title="remove" onPress={removeAppLaunch}/>
      <CustomBottomSheet />
    </View>
  );
}