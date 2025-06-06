import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

import googleButtonStyles from "@/styles/reusableStyles/googleButton.styles";

import { IMAGES } from "@/constants/Images";
import { Image } from "react-native";

export default function GoogleButton() {
  const router = useRouter();
  return (
    // google button
    <TouchableOpacity
      style={googleButtonStyles.googleButton}
      onPress={() => router.push("/(tabs)")}
    >
      {/* google logo */}
      <Image style={googleButtonStyles.googleImage} source={IMAGES.google} />

      {/* text */}
      <Text style={googleButtonStyles.googleButtonText}>
        Sign in with Google
      </Text>
    </TouchableOpacity>
  );
}

