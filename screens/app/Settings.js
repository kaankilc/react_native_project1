import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Linking,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import { Colors } from "../../utils/colors";
import EditableBox from "../../components/EditableBox";
import Button from "../../components/Button";

export default function Settings({navigation}) {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({name: 'User', email: 'user@mail.com'})
  function onEditPress() {
    setEditing(true)
  }
  function onSave() {
    setEditing(false)
  }
  function onChange(key, value) {
    setValues(v=> ({...v,[key]: value}))
  }
  function onItemPress() {
    Linking.openURL("https://google.com");
  }
  function onBackPress() {
    navigation.goBack()
  }
  return (
    <SafeAreaView>
      <Header showBack={true} onBackPress={onBackPress} title="Settings" />
      <ScrollView style={styles.container}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={onEditPress}>
            <Image
              style={styles.icon}
              source={require("../../assets/edit-2.png")}
            />
          </Pressable>
        </View>
        <EditableBox label="Name" onChangeText={(v) => onChange('name', v)} value={values.name} editable={editing} />
        <EditableBox label="Email" onChangeText={(v) => onChange('email', v)} value={values.email} editable={editing} />
        {
          editing  ?  <Button style={styles.button} onPress={onSave} title='Save' /> : null 
        }
        
        <Text style={[styles.sectionTitle, { marginTop: 40 }]}>
          Help Center
        </Text>
        <ListItem onPress={onItemPress} style={styles.item} title="FAQ" />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Contact Us"
        />
        <ListItem
          onPress={onItemPress}
          style={styles.item}
          title="Privacy & Terms"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  sectionTitle: {
    fontWeight: "500",
    fontSize: 16,
    color: Colors.grey,
    marginBottom: 16,
  },
  item: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    paddingVertical: 12,
    marginTop: 16,
  }
});
