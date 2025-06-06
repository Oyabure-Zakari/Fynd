import React from "react";
import { View } from "react-native";

import styles from "../../styles/onboarding.styles";

import { COLORS } from "@/constants/Colors";
import { FONTSIZE } from "@/constants/FontSize";
import { useRouter } from "expo-router";
import { Button } from "react-native-elements";

//? skip button
export const skipButton = () => {
  const router = useRouter();
  return (
    <View style={styles.onboardButton}>
      <Button
        title="Skip"
        buttonStyle={{ backgroundColor: COLORS.white, borderRadius: 10 }}
        titleStyle={{
          color: COLORS.tertiaryGrey,
          fontSize: FONTSIZE.secondaryFont.small,
          fontFamily: "secondaryFont",
          padding: 8,
        }}
        onPress={() => router.push("/(auth)")}
      />
    </View>
  );
};

//? next button
export const nextButton = ({ ...props }) => {
  return (
    <View style={styles.onboardButton}>
      <Button
        title="Next"
        buttonStyle={{
          backgroundColor: COLORS.purple,
          borderRadius: 10,
          width: 80,
        }}
        titleStyle={{
          color: COLORS.white,
          fontFamily: "secondaryFont",
          padding: 2,
          fontSize: FONTSIZE.secondaryFont.small,
        }}
        {...props}
      />
    </View>
  );
};

//? done button
export const doneButton = () => {
  const router = useRouter();
  return (
    <View style={styles.onboardButton}>
      <Button
        title="Get Started"
        buttonStyle={{ backgroundColor: COLORS.purple, borderRadius: 10 }}
        titleStyle={{
          color: COLORS.white,
          fontFamily: "secondaryFont",
          padding: 2,
          fontSize: FONTSIZE.secondaryFont.small,
        }}
        onPress={() => router.push("/(auth)")}
      />
    </View>
  );
};
