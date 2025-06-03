import React from "react";
import { Text, View } from "react-native";

import styles from "../../styles/onboarding.styles";

// imported from onboardingUI component
type OnboardingSubtitleProps = {
  subTitle: string;
};

export default function OnboardingSubtitle({ subTitle }: OnboardingSubtitleProps) {
  return (
    <View style={styles.onboardSubtitleContainer}>
      <Text style={styles.onboardSubtitleText}>{subTitle}</Text>
    </View>
  );
}