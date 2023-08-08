import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../utils/colors";

export default function Input({ label, placeholder, isPassword }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function onEyePress() {
    setIsPasswordVisible(!isPasswordVisible);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={isPassword && !isPasswordVisible}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image style={styles.eye} source={isPasswordVisible ? require("../assets/eye.png") : require('../assets/eye_closed.png')} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    marginBottom: 8,
    color: Colors.blue,
    fontSize: 14,
    fontWeight: "500",
  },
  input: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    flex: 1,
  },
  eye: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
  }
  
});
