import { COLORS } from "@/constants/Colors";
import { FONTSIZE } from "@/constants/FontSize";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  onboardImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  onboardTitleContainer: {
    width: "60%",
  },

  onboardTitleText: {
    color: COLORS.blackGrey,
    fontFamily: "primaryFont",
    fontSize: FONTSIZE.primaryFont.large,
    textAlign: "center",
  },

  onboardSubtitleContainer: {
    width: "90%",
    marginTop: 20,
  },

  onboardSubtitleText: {
    fontFamily: "secondaryFont",
    fontSize: FONTSIZE.secondaryFont.small,
    color: COLORS.tertiaryGrey,
    textAlign: "center",
  },

  onboardButton: {
    paddingRight: 16,
  },
});

export default styles;
