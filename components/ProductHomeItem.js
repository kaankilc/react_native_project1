import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../utils/colors";

const { width } = Dimensions.get("window");

export default function ProductHomeItem({ title, price, image, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  title: {
    color: Colors.textGrey,
    paddingVertical: 8,
  },
  price: {
    color: Colors.black,
    paddingBottom: 8,
  },
  image: {
    width: (width - 64) / 2,
    height: 220,
    borderRadius: 8,
  },
});
