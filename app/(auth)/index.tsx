import Admin from "@/components/auth/Admin";
import User from "@/components/auth/User";
import { COLORS } from "@/constants/Colors";
import { FONTSIZE } from "@/constants/FontSize";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function index() {
  const [selectedUserType, setSelectedUserType] = useState("user");

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Select User Type</Text>

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

      <View style={styles.bottomContainer}>
        <ScrollView 
          style={{flex:1, width: "100%" }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          >
          {selectedUserType === "user" ? <User /> : <Admin/>}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },

  topContainer: {
    height: Dimensions.get("window").height * 0.2,
    width: Dimensions.get("window").width * 0.9,
    gap: 30,
    // backgroundColor: "grey"
  },

  title: {
    fontFamily: "primaryFont",
    fontSize: FONTSIZE.primaryFont.medium,
    color: COLORS.blackGrey,
  },

  picker: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },

  bottomContainer: {
    height: Dimensions.get("window").height * 0.8,
    width: Dimensions.get("window").width * 0.9,
    // backgroundColor: "pink",
    alignItems: "center",
  },
});
