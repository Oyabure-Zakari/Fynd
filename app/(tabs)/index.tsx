import CustomBottomSheet from "@/components/home/CustomButtomSheet";
import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/home.styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text> Home Screen</Text>
      <CustomBottomSheet />
    </View>
  );
}