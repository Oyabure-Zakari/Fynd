import { COLORS } from "@/constants/Colors";
import { FONTSIZE } from "@/constants/FontSize";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// imported from onboardingUI component
type OnboardingSubtitleProps = {
  subTitle: string;
};

export default function OnboardingSubtitle({ subTitle }: OnboardingSubtitleProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{subTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 20,
  },

  text: {
    fontFamily: "secondaryFont",
    fontSize: FONTSIZE.secondaryFont.small,
    color: COLORS.tertiaryGrey,
    textAlign: "center"
  },
});