import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

export default function EditableBox({
  label,
  editable,
  value,
  onPress,
  onChangeText,
  style,
}) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={editable}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect="false"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.white,
    marginVertical: 12,
    borderRadius: 4,
  },
  label: {
    color: Colors.grey,
    fontSize: 12,
    marginBottom: 6,
  },
  input: {
    color: Colors.blue,
    fontSize: 14,
    fontWeight: "500",
  },
});
