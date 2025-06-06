import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { useRouter } from "expo-router";

import { COLORS } from "@/constants/Colors";
import { IMAGES } from "@/constants/Images";

import styles from "@/styles/auth.styles";
import googleButtonStyles from "@/styles/reusableStyles/googleButton.styles";

import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Admin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <View style={styles.adminContainer}>
      {/* admin type image */}
      <Image style={styles.adminImage} source={IMAGES.admin} />

      {/* text input */}
      <View style={styles.inputFieldContainer}>
        {/* userName text input */}
        <View style={styles.userName}>
          <Ionicons name="person" size={18} color={COLORS.tertiaryGrey} />
          <TextInput
            placeholder="username"
            style={{ fontFamily: "secondaryFont", color: COLORS.blackGrey }}
            value={userName}
            onChangeText={setUserName}
          />
        </View>

        {/* divider */}
        <View style={styles.divider} />

        {/* password text input */}
        <View style={styles.password}>
          <Entypo name="lock" size={18} color={COLORS.tertiaryGrey} />
          <TextInput
            placeholder="password"
            secureTextEntry
            style={{ fontFamily: "secondaryFont", color: COLORS.blackGrey }}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* divider */}
        <View style={styles.divider} />

        {/* login button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => console.log("Login pressed")}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* admin type text */}
      <Text style={styles.adminWriteUp}>
        As an admin, you have the power to shape the map! Explore all user
        features, plus upload new location coordinates to customize the map for
        your team or community.
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
