import { COLORS } from '@/constants/Colors';
import { FONTSIZE } from '@/constants/FontSize';
import { IMAGES } from '@/constants/Images';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function User() {
  const router = useRouter();

  return (
    <View style={styles.userContainer}>
      <Image style={styles.userImage} source={IMAGES.user} />
      <Text style={styles.userWriteUp}>
        As an ordinary user, explore the world with ease! Use our interactive
        map to find your location and search for destinations.{" "}
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
    marginTop: 20,
    gap: 40,
    // backgroundColor: "red"
  },

  userImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },

  userWriteUp: {
    textAlign: "center",
    fontFamily: "secondaryFont",
    color: COLORS.tertiaryGrey,
    fontSize: FONTSIZE.secondaryFont.small
  },

  googleButton: {
    paddingVertical: 10,
    backgroundColor: COLORS.purple,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.9, // 90% of screen width
    gap: 20
  },

  googleImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

    googleButtonText: {
    fontFamily: "secondaryFont",
    color: COLORS.primaryGrey,
    fontSize: FONTSIZE.secondaryFont.small
  },
})