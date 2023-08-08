import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SplashScreen from "./screens/auth/SplashScreen";
import SignUpScreen from "./screens/auth/SignUpScreen";
import SignInScreen from "./screens/auth/SignInScreen";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <SafeAreaView style={styles.container}>
      {/* <SplashScreen /> */}
      {/* <SignUpScreen /> */}
      <SignInScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
  },
});
