import React from "react";
import { Image, StyleSheet } from "react-native";

// imported from onboardingUI component
type OnboardingImageProps = {
  source: { uri: string };
};

export default function OnboardImage({ source }: OnboardingImageProps) {
  return <Image source={source} style={styles.onboardImage} />;
}

const styles = StyleSheet.create({
  onboardImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
});