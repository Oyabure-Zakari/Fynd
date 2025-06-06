import React from "react";

import { useRouter } from "expo-router";

import { Image, Text, TouchableOpacity, View } from "react-native";

import { IMAGES } from "@/constants/Images";
import styles from "@/styles/auth.styles";
import googleButtonStyles from "@/styles/reusableStyles/googleButton.styles";

export default function User() {
  const router = useRouter();

  return (
    <View style={styles.userContainer}>
      {/* user type image */}
      <Image style={styles.userImage} source={IMAGES.user} />

      {/* user type text */}
      <Text style={styles.userWriteUp}>
        As an ordinary user, explore the world with ease! Use our interactive
        map to find your location and search for destinations.{" "}
      </Text>

      {/* Sign in with Google button */}
      <TouchableOpacity
        style={googleButtonStyles.googleButton}
        onPress={() => router.push("/(tabs)")}
      >
        <Image style={googleButtonStyles.googleImage} source={IMAGES.google} />
        <Text style={googleButtonStyles.googleButtonText}>
          Sign in with Google
        </Text>
      </TouchableOpacity>
    </View>
  );
}
