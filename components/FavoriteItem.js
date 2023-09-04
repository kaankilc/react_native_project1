import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "../utils/colors";

export default function FavoriteItem({ title, price, image, onPress, icon }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Image
        source={icon || require("../assets/close.png")}
        style={styles.icon}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
  title: {
    color: Colors.textGrey,
    paddingVertical: 8,
  },
  price: {
    color: Colors.black,
    paddingBottom: 8,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
  content: {
    flex: 1,
  },
});
