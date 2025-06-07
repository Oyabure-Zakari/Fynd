import { COLORS } from "@/constants/Colors";
import { FONTSIZE } from "@/constants/FontSize";
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //? main container
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

  // select user type
  title: {
    fontFamily: "primaryFont",
    fontSize: FONTSIZE.primaryFont.medium,
    color: COLORS.blackGrey,
  },

  // Picker for user type selection
  picker: {
    backgroundColor: COLORS.primaryGrey,
  },

  bottomContainer: {
    height: Dimensions.get("window").height * 0.8,
    width: Dimensions.get("window").width * 0.9,
    // backgroundColor: "pink",
    alignItems: "center",
  },

  //? user component
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
    fontSize: FONTSIZE.secondaryFont.small,
  },

  //? admin component
  adminContainer: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    // backgroundColor: "red"
  },

  adminImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },

  inputFieldContainer: {
    width: Dimensions.get("window").width * 0.9, // 90% of screen width
    // height: "auto",
    borderRadius: 10,
    // backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.tertiaryGrey,
    // paddingHorizontal: 10,
  },

  userName: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    gap: 10,
  },

  password: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    gap: 10,
  },

  divider: {
    height: 1,
    backgroundColor: COLORS.tertiaryGrey,
    width: "100%",
  },

  loginButton: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  loginButtonText: {
    fontFamily: "secondaryFont",
    color: COLORS.greenishBlue,
    fontSize: FONTSIZE.secondaryFont.small,
  },

  adminWriteUp: {
    textAlign: "center",
    fontFamily: "secondaryFont",
    color: COLORS.tertiaryGrey,
    fontSize: FONTSIZE.secondaryFont.small,
  },
});

export default styles;
