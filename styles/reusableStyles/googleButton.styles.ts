import { COLORS } from "@/constants/Colors";
import { FONTSIZE } from "@/constants/FontSize";
import { Dimensions, StyleSheet } from "react-native";

const googleButtonStyles = StyleSheet.create({
  googleButton: {
    paddingVertical: 10,
    backgroundColor: COLORS.purple,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.9, // 90% of screen width
    gap: 20,
  },

  googleImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  googleButtonText: {
    fontFamily: "secondaryFont",
    color: COLORS.white,
    fontSize: FONTSIZE.secondaryFont.small,
  },
});

export default googleButtonStyles;
