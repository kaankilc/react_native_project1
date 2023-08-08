import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

export default function AuthHeader({ title, onBackPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress} hitSlop={20}>
        <Image style={styles.image} source={require("../assets/arrow.png")} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 54,
  },
  image: {
    width: 18,
    height: 18,
  }, 
  title: {
    color: Colors.blue,
    fontSize: 26,
    fontWeight: "500",
    paddingHorizontal: 16,
  },
});
