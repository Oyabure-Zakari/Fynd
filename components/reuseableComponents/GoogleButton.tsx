import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

import { IMAGES } from "@/constants/Images";
import { useGoogleSignInStore } from "@/store/googleSignIn";
import googleButtonStyles from "@/styles/reusableStyles/googleButton.styles";

export default function GoogleButton() {
  const signInWithGoogle = useGoogleSignInStore((state) => state.signInWithGoogle);

  return (
    <TouchableOpacity
      style={googleButtonStyles.googleButton}
      onPress={signInWithGoogle}
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
