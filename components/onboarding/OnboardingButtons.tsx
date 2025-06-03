import React from "react";
import { StyleSheet, View } from "react-native";

import { COLORS } from "@/constants/Colors";
import { FONTSIZE } from "@/constants/FontSize";
import { useRouter } from "expo-router";
import { Button } from "react-native-elements";

export const skipButton = () => {
  const router = useRouter();
  return (
    <View style={styles.button}>
      <Button
        title="Skip"
        buttonStyle={{ backgroundColor: COLORS.white, borderRadius: 10 }}
        titleStyle={{
          color: COLORS.blackGrey,
          fontSize: FONTSIZE.secondaryFont.small,
          fontFamily: "secondaryFont",
          padding: 8,
        }}
        onPress={() => router.push("/(tabs)")}
      />
    </View>
  );
};

export const nextButton = ({ ...props }) => {
  return (
    <View style={styles.button}>
      <Button
        title="Next"
        buttonStyle={{ backgroundColor: COLORS.purple, borderRadius: 10, width: 80 }}
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

export const doneButton = () => {
  const router = useRouter();
  return (
    <View style={styles.button}>
      <Button
        title="Get Started"
        buttonStyle={{ backgroundColor: COLORS.purple, borderRadius: 10}}
        titleStyle={{
          color: COLORS.white,
          fontFamily: "secondaryFont",
          padding: 2,
          fontSize: FONTSIZE.secondaryFont.small,
        }}
        onPress={() => router.push("/(tabs)")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingRight: 16,
  },
});
