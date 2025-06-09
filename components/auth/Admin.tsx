import React, { useEffect } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";


import { COLORS } from "@/constants/Colors";
import { IMAGES } from "@/constants/Images";
import { useLoginAdminStore } from "@/store/loginAdmin";
import styles from "@/styles/auth.styles";
import { ADMIN_PASSWORD, ADMIN_USERNAME } from "@env";

import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

import GoogleButton from "../reuseableComponents/GoogleButton";

export default function Admin() {;
  const userName = useLoginAdminStore((state) => state.userName);
  const password = useLoginAdminStore((state) => state.password);
  const adminToken = useLoginAdminStore((state) => state.adminToken);
  const error = useLoginAdminStore((state) => state.error);

  const setUserName = useLoginAdminStore((state) => state.setUserName);
  const setPassword = useLoginAdminStore((state) => state.setPassword);
  const loginAdmin = useLoginAdminStore((state) => state.loginAdmin);
  const checkAdminToken = useLoginAdminStore((state) => state.checkAdminToken);

  // check if the admin token is already set
  useEffect(() => {
    checkAdminToken();
  }, []);

  const handleLoginAdmin = () => {
    if (!userName || !password)
      return Alert.alert("Login Error", "Please fill in all fields");

    if (
      userName.toLocaleLowerCase().trim() !== ADMIN_USERNAME ||
      password.toLocaleLowerCase().trim() !== ADMIN_PASSWORD
    )
      return Alert.alert("Login Error", "Invalid username or password");

    if (error)
      return Alert.alert("Login Error", error);

    // if the username and password are correct, login the admin
    loginAdmin();
  };

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
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginAdmin}>
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
      {adminToken && <GoogleButton />}
    </View>
  );
}
