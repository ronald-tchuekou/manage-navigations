import {StatusBar} from "expo-status-bar";
import React from "react"
import {StyleSheet, Text, View} from "react-native";

export default function InputsScreen () {
  return (
    <View style={styles.container}>
      <Text>Input screen</Text>
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
