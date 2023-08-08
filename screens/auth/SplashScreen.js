import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import Button from "../../components/Button";
import { Colors } from "../../utils/colors";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        resizeMethod="contain"
        style={styles.image}
        source={require("../../assets/100501.png")}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All You Need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button title="Sign Up" />
      <Pressable hitSlop={20}>
        <Text style={styles.signIn}>Sign In</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  titleContainer: {
    marginVertical: 54,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  innerTitle: {
    color: Colors.orange,
    textDecorationLine: "underline",
  },
  signIn: {
    paddingHorizontal: 8,
    paddingVertical: 20,
    color: Colors.blue,
    textAlign: "center",
    marginTop: 24,
    fontSize: 16,
    fontWeight: "bold",
    width: '100%'
  },
});
