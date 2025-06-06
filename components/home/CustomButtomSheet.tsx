import React, { useMemo } from "react";
import { Text } from "react-native";

import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

import { COLORS } from "@/constants/Colors";
import styles from "@/styles/home.styles";

export default function CustomBottomSheet() {
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <BottomSheet
      snapPoints={snapPoints}
      index={0}
      handleIndicatorStyle={styles.bottomSheetIndicator}
      backgroundStyle={{
        borderRadius: 0,
        backgroundColor: COLORS.white,
        elevation: 20,
      }}
    >
      <BottomSheetView style={styles.bottomSheetViewContentContainer}>
        <Text>Bottom sheet</Text>
      </BottomSheetView>
    </BottomSheet>
  );
}
