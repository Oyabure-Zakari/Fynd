import React from "react";

import { Alert, Text, TouchableOpacity } from "react-native";

import { useLoginAdminStore } from "@/store/loginAdmin";
import styles from "@/styles/auth.styles";
import { ADMIN_PASSWORD, ADMIN_USERNAME } from "@env";

export default function AdminLoginBtn() {
  const userName = useLoginAdminStore((state) => state.userName);
  const password = useLoginAdminStore((state) => state.password);
  const error = useLoginAdminStore((state) => state.error);
  const loginAdmin = useLoginAdminStore((state) => state.loginAdmin);

  const handleLoginAdmin = () => {
    if (!userName || !password)
      return Alert.alert("Login Error", "Please fill in all fields");

    if (
      userName.toLocaleLowerCase().trim() !== ADMIN_USERNAME ||
      password.toLocaleLowerCase().trim() !== ADMIN_PASSWORD
    )
      return Alert.alert("Login Error", "Invalid username or password");

    if (error) return Alert.alert("Login Error", error);

    // if the username and password are correct, login the admin
    loginAdmin();
  };

  return (
    <TouchableOpacity style={styles.loginButton} onPress={handleLoginAdmin}>
      <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>
  );
}
