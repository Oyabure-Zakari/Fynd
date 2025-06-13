import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";

import Admin from "@/components/auth/admin/Admin";
import User from "@/components/auth/User";
import styles from "@/styles/auth.styles";
import { Picker } from "@react-native-picker/picker";

export default function index() {
  const [selectedUserType, setSelectedUserType] = useState("user");

  return (
    <View style={styles.container}>
      {/* top container */}
      <View style={styles.topContainer}>
        {/* select user type */}
        <Text style={styles.title}>Select User Type</Text>

        {/* Picker for user type selection */}
        <Picker
          selectedValue={selectedUserType}
          onValueChange={(itemValue) => setSelectedUserType(itemValue)}
          mode="dropdown"
          style={styles.picker}
        >
          <Picker.Item label="User" value="user" />
          <Picker.Item label="Admin" value="admin" />
        </Picker>
      </View>

      {/* bottom container*/}
      <View style={styles.bottomContainer}>
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          {selectedUserType === "user" ? <User /> : <Admin />}
        </ScrollView>
      </View>
    </View>
  );
}
