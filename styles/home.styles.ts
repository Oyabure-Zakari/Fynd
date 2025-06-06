import { COLORS } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //? main container
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },

  //? bottom sheet indicator
  bottomSheetIndicator: {
    backgroundColor: COLORS.tertiaryGrey,
  },

  //? bottomSheet view content container
  bottomSheetViewContentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});

export default styles;
