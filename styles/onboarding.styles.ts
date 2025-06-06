import { COLORS } from "@/constants/Colors";
import { FONTSIZE } from "@/constants/FontSize";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //? onboard image
  onboardImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  //? onboard title container
  onboardTitleContainer: {
    width: "60%",
  },

  //? onboard title text
  onboardTitleText: {
    color: COLORS.blackGrey,
    fontFamily: "primaryFont",
    fontSize: FONTSIZE.primaryFont.large,
    textAlign: "center",
  },

  //? onboard subtitle container
  onboardSubtitleContainer: {
    width: "90%",
    marginTop: 20,
  },

  //? onboard subtitle text
  onboardSubtitleText: {
    fontFamily: "secondaryFont",
    fontSize: FONTSIZE.secondaryFont.small,
    color: COLORS.tertiaryGrey,
    textAlign: "center",
  },

  //? onboard buttons
  onboardButton: {
    paddingRight: 16,
  },
});

export default styles;
