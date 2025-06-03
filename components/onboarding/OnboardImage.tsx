import React from "react";
import { Image } from "react-native";
import styles from "../../styles/onboarding.styles";

// imported from onboardingUI component
type OnboardingImageProps = {
  source: { uri: string };
};

export default function OnboardImage({ source }: OnboardingImageProps) {
  return <Image source={source} style={styles.onboardImage} />;
}
