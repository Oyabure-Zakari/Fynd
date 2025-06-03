import { COLORS } from "@/constants/Colors";
import { FONTSIZE } from "@/constants/FontSize";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// imported from onboardingUI component
type OnboardingTitleProps = {
  title: string;
};

export default function OnboardingTitle({ title }: OnboardingTitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
  },

  text: {
    color: COLORS.blackGrey,
    fontFamily: "primaryFont",
    fontSize: FONTSIZE.primaryFont.large,
    textAlign: "center"
  },
});