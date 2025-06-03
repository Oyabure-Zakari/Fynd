import CustomBottomSheet from "@/components/home/CustomButtomSheet";
import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";
import styles from "../../styles/home.styles";

export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text> Home Screen</Text>
      <Button title="Click" onPress={() => router.push("/(onboarding)")}/>
      <CustomBottomSheet />
    </View>
  );
}