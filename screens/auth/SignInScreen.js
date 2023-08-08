import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../utils/colors";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";
import GoogleLogin from "../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen({ navigation }) {
  function onSignUp() {
    navigation.navigate("SignUp");
  }
  function onBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign In" />
        <Input label="Email" placeholder="example@gmail.com" />
        <Input label="Password" placeholder="********" isPassword={true} />

        <Button style={styles.button} title="Sign In!" />
        <Seperator text="Or sign up with" />
        <GoogleLogin />
        <View style={styles.footer}>
          <Text style={styles.checkText}>
            Don't have an account?
            <Text onPress={onSignUp} style={styles.checkTextBold}>
              {" "}
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  checkTerms: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkText: {
    color: Colors.blue,
    marginHorizontal: 16,
  },
  checkTextBold: {
    fontWeight: "bold",
  },
  button: {
    marginVertical: 20,
  },
  footer: {
    alignItems: "center",
    marginVertical: 45,
    fontWeight: "bold",
  },
});
