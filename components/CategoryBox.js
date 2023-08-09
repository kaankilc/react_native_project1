import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import { Colors } from "../utils/colors";
import Input from "./Input";

export default function CategoryBox({
  title,
  image,
  onPress,
  isFirst,
  isSelected,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, isFirst ? { marginLeft: 24 } : {}]}
    >
      <View
        style={[
          styles.imageContainer,
          isSelected ? { backgroundColor: Colors.black } : {},
        ]}
      >
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text
        style={[
          styles.title,
          isSelected ? { color: Colors.blue, fontWeight: "500" } : {},
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.grey,
  },
  imageContainer: {
    backgroundColor: Colors.lightGrey,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  image: {
    width: 24,
    height: 24,
  },
});
