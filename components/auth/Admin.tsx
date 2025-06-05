import React, { useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS } from "@/constants/Colors";
import { FONTSIZE } from "@/constants/FontSize";
import { IMAGES } from "@/constants/Images";

import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Admin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <View style={styles.userContainer}>
      <Image style={styles.userImage} source={IMAGES.admin} />

      <View style={styles.inputFieldContainer}>
        <View style={styles.userName}>
          <Ionicons name="person" size={18} color={COLORS.tertiaryGrey} />
          <TextInput
            placeholder="username"
            style={{ fontFamily: "secondaryFont", color: COLORS.blackGrey }}
            value={userName}
            onChangeText={setUserName}
          />
        </View>

        <View style={styles.divider} />

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

        <View style={styles.divider} />

        <TouchableOpacity style={styles.loginButton} onPress={() => console.log("Login pressed")}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.userWriteUp}>
        As an admin, you have the power to shape the map! Explore all user
        features, plus upload new location coordinates to customize the map for
        your team or community.
      </Text>

      <TouchableOpacity style={styles.googleButton} onPress={() => router.push("/(tabs)")}>
        <Image style={styles.googleImage} source={IMAGES.google} />
        <Text style={styles.googleButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    // backgroundColor: "red"
  },

  userImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  inputFieldContainer: {
    width: Dimensions.get("window").width * 0.9, // 90% of screen width
    // height: "auto",
    borderRadius: 10,
    // backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.tertiaryGrey,
    // paddingHorizontal: 10,
  },

  userName: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    gap: 10,
  },

  password: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    gap: 10,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.tertiaryGrey,
    width: "100%",
  },

  loginButton: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonText: {
    fontFamily: "secondaryFont",
    color: COLORS.greenishBlue,
    fontSize: FONTSIZE.secondaryFont.small,
  },

  userWriteUp: {
    textAlign: "center",
    fontFamily: "secondaryFont",
    color: COLORS.tertiaryGrey,
    fontSize: FONTSIZE.secondaryFont.small,
  },

  googleButton: {
    paddingVertical: 10,
    backgroundColor: COLORS.purple,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: Dimensions.get("screen").width * 0.9, // 90% of screen width
    gap: 20,
  },

  googleImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  googleButtonText: {
    fontFamily: "secondaryFont",
    color: COLORS.primaryGrey,
    fontSize: FONTSIZE.secondaryFont.small,
  },
});
