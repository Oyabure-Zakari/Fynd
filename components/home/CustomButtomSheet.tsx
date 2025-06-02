import styles from "@/app/styles/home.styles";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import React, { useMemo } from "react";
import { Text } from "react-native";

export default function CustomBottomSheet() {
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
      <BottomSheet
        snapPoints={snapPoints}
        index={0}
        handleIndicatorStyle={styles.bottomSheetIndicator}
        backgroundStyle={{ borderRadius: 0 }}
      >
        <BottomSheetView style={styles.bottomSheetViewContentContainer}>
          <Text>Bottom sheet</Text>
        </BottomSheetView>
      </BottomSheet>
  );
}
