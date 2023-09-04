import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";

export default function ListItem({ title, subtitle, onPress, style }) {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <Image
        style={styles.arrow}
        source={require("../assets/arrowRight.png")}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
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
  content: {},
  title: {
    color: Colors.blue,
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 6,
    color: Colors.grey,
    fontSize: 12,
  },
  arrow: {
    width: 32,
    height: 32,
  },
});
