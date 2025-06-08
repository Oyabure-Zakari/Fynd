import React from "react";
import { View } from "react-native";

import styles from "../../styles/onboarding.styles";

import { COLORS } from "@/constants/Colors";
import { FONTSIZE } from "@/constants/FontSize";
import { Button } from "react-native-elements";

import { useAppLaunchedStore } from "@/store/appLaunched";

//? skip button
export const skipButton = () => {
  const appLaunched = useAppLaunchedStore((state) => state.launchApp);

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
        onPress={appLaunched}
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
  const appLaunched = useAppLaunchedStore((state) => state.launchApp);

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
        onPress={appLaunched}
      />
    </View>
  );
};
