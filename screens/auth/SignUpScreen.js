import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../utils/colors";
import AuthHeader from "../../components/AuthHeader";
import Input from "../../components/Input";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import Seperator from "../../components/Seperator";
import GoogleLogin from "../../components/GoogleLogin";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen({ navigation }) {
  const [checked, setChecked] = useState(false);
  function onSignIn() {
    navigation.navigate("SignIn");
  }
  function onBack() {
    navigation.goBack();
  }
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title="Sign Up" />
        <Input label="Name" placeholder="John Doe" />
        <Input label="Email" placeholder="example@gmail.com" />
        <Input label="Password" placeholder="********" isPassword={true} />
        <View style={styles.checkTerms}>
          <CheckBox checked={checked} onCheck={() => setChecked(!checked)} />
          <Text style={styles.checkText}>
            I agree with <Text style={styles.checkTextBold}>Terms</Text> &{" "}
            <Text style={styles.checkTextBold}>Privacy</Text>.
          </Text>
        </View>
        <Button style={styles.button} title="Sign Up!" />
        <Seperator text="Or sign up with" />
        <GoogleLogin />
        <View style={styles.footer}>
          <Text style={styles.checkText}>
            Already have an account?
            <Text onPress={onSignIn} style={styles.checkTextBold}>
              {" "}
              Sign In
            </Text>
          </Text>
        </View>
      </ScrollView>
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
