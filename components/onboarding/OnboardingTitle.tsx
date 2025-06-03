import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles/onboarding.styles";

// imported from onboardingUI component
type OnboardingTitleProps = {
  title: string;
};

export default function OnboardingTitle({ title }: OnboardingTitleProps) {
  return (
    <View style={styles.onboardTitleContainer}>
      <Text style={styles.onboardTitleText}>{title}</Text>
    </View>
  );
}
