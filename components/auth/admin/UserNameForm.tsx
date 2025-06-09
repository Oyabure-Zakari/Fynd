import { COLORS } from "@/constants/Colors";
import { useLoginAdminStore } from "@/store/loginAdmin";
import styles from "@/styles/auth.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { TextInput, View } from "react-native";

export default function UserNameForm() {
  const setUserName = useLoginAdminStore((state) => state.setUserName);
  const userName = useLoginAdminStore((state) => state.userName);

  return (
    <View style={styles.userName}>
      <Ionicons name="person" size={18} color={COLORS.tertiaryGrey} />
      <TextInput
        placeholder="username"
        style={{ fontFamily: "secondaryFont", color: COLORS.blackGrey }}
        value={userName}
        onChangeText={setUserName}
      />
    </View>
  );
}
