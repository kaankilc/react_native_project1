import { TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

export default function GoogleLogin() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.75}>
      <Image
        style={styles.image}
        source={require("../assets/white-google-logo.png")}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGrey,
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "40%",
  },
  image: {
    width: 28,
    height: 28,
  },
});
