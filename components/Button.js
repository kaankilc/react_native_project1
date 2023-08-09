import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

export default function Button({ title, onPress, style }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.75}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 8,
    flex: 1,
    
  },
  text: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
