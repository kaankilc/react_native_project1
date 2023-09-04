import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { Colors } from "../../utils/colors";
import ListItem from "../../components/ListItem";
import Button from "../../components/Button";

export default function Profile({ navigation }) {
  function onLogout() {}
  const num = 10;
  function onSettingsPress() {
    navigation.navigate("Settings");
  }
  function onNewListingPress() {
    navigation.navigate("CreateListing");
  }
  const onMyListingsPress = () => {
    navigation.navigate("MyListings");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Profile" showLogout onLogout={onLogout} />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>User Name</Text>
          <Text style={styles.email}>User Email</Text>
          <ListItem
            title="My Listings"
            onPress={onMyListingsPress}
            subtitle={`You have ${num} listings`}
          />
          <ListItem
            onPress={onSettingsPress}
            title="Settings"
            subtitle={`Accout, FAQ, Contact`}
          />
        </View>
        <Button
          onPress={onNewListingPress}
          style={{ flex: 0 }}
          title="Add a new listing"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
    marginBottom: 12,
  },
  email: {
    fontSize: 14,
    color: Colors.grey,
    marginBottom: 16,
  },
});
