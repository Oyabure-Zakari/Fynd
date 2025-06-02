import { COLORS } from "@/constants/Colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

    bottomSheetIndicator: {
    backgroundColor: COLORS.tertiaryGrey,
  },

  bottomSheetViewContentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});

export default styles;
