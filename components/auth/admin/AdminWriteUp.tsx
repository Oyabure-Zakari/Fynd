import styles from "@/styles/auth.styles";
import React from "react";
import { Text } from "react-native";

export default function AdminWriteUp() {
  return (
    <Text style={styles.adminWriteUp}>
      As an admin, you have the power to shape the map! Explore all user
      features, plus upload new location coordinates to customize the map for
      your team or community.
    </Text>
  );
}
