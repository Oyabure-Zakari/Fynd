import { COLORS } from "@/constants/Colors";
import { useLoginAdminStore } from "@/store/loginAdmin";
import styles from "@/styles/auth.styles";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { TextInput, View } from "react-native";

export default function PasswordForm() {
  const setPassword = useLoginAdminStore((state) => state.setPassword);
  const password = useLoginAdminStore((state) => state.password);

  return (
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
  );
}
