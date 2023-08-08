import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

export default function CheckBox({ checked, onCheck }) {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.container}
      onPress={() => onCheck(!checked)}
    >
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require("../assets/checkmark.png")}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    width: 22,
    height: 22,
  },
  innerContainer: {
    backgroundColor: Colors.grey,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  checkIcon: {
    width: 12,
    height: 9,
  },
});
