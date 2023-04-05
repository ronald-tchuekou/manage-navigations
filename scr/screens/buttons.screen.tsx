import {StatusBar} from "expo-status-bar";
import React from "react"
import {StyleSheet, Text, View} from "react-native";

export default function ButtonsScreen () {
  return (
    <View style={styles.container}>
      <Text>Buttons screen</Text>
      <StatusBar style="dark"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
