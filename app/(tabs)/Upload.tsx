import { COLORS } from '@/constants/Colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Upload() {
  return (
    <View style={styles.container}>
      <Text>Upload</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
})