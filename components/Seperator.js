import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

export default function Seperator({ text }) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    height: 1,
    backgroundColor: Colors.lightGrey,
    flex: 1,
  },
  text: {
    fontWeight: 500,
    color: Colors.blue,
    marginHorizontal: 8,
  },
});
