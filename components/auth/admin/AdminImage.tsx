import { IMAGES } from "@/constants/Images";
import styles from "@/styles/auth.styles";
import React from "react";
import { Image } from "react-native";

export default function AdminImage() {
  return <Image style={styles.adminImage} source={IMAGES.admin} />;
}
