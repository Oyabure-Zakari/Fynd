import React from "react";
import { Image, Text, View } from "react-native";

import { IMAGES } from "@/constants/Images";
import styles from "@/styles/auth.styles";
import GoogleButton from "../reuseableComponents/GoogleButton";

export default function User() {
  return (
    <View style={styles.userContainer}>
      {/* user type image */}
      <Image style={styles.userImage} source={IMAGES.user} />

      {/* user type text */}
      <Text style={styles.userWriteUp}>
        As an ordinary user, explore the world with ease! Use our interactive
        map to find your location and search for destinations.
      </Text>

      {/* Sign in with Google button */}
      <GoogleButton/>
    </View>
  );
}
