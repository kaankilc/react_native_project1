import { ScrollView, Text, StyleSheet} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favorites() {
  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
      <Text>Favorites</Text>
    </ScrollView>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
container: {
    padding: 24,
},
})
