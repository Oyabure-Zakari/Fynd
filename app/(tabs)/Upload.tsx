import { COLORS } from '@/constants/Colors';
import { useLoginAdminStore } from "@/store/loginAdmin";
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Upload() {
  const router = useRouter();
    // const removeAppLaunch = useAppLaunchedStore((state) => state.removeAppLaunch);
  const logoutAdmin = useLoginAdminStore((state) => state.logoutAdmin);

  const handleLogoutAdmin = () => {
    logoutAdmin();
    router.push("/(tabs)");
  }

  return (
    <View style={styles.container}>
      <Text>Upload</Text>
      <Button title="logoutAdmin" onPress={handleLogoutAdmin}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
})