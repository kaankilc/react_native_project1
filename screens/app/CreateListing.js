import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Pressable,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import Header from "../../components/Header";
import { Colors } from "../../utils/colors";
import Input from "../../components/Input";
import { categories } from "../../data/categories";
import Button from "../../components/Button";

export default function CreateListing({ navigation }) {
  const [images, setImages] = useState([]);
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  function goBack() {
    navigation.goBack();
  }

  function onDeleteImage(image) {
    setImages((list) => {
      const filteredImages = list.filter(
        (img) => img?.fileName !== image?.fileName
      );
      return filteredImages;
    });
  }

  const uploadNewImage = async () => {
    setLoading(true);
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });
    if (result?.assets?.length) {
      console.log("Selected images:", result.assets);
      setImages((list) => [...list, ...result?.assets]);
      setLoading(false);
    }
  };

  function onChange(value, key) {
    setValues((val) => ({ ...val, [key]: value }));
  }

  return (
    <SafeAreaView>
      <Header
        showBack={true}
        onBackPress={goBack}
        title="Create a New Listing"
      />
      <ScrollView>
        <KeyboardAvoidingView behavior="position">
          <ScrollView style={styles.container}>
            <Text style={styles.sectionTitle}>Upload Photos</Text>
            <View style={styles.imageRow}>
              <TouchableOpacity
                disabled={loading}
                style={styles.uploadContainer}
                onPress={uploadNewImage}
              >
                <View style={styles.uploadCircle}>
                  <Text style={styles.uploadPlus}>+</Text>
                </View>
              </TouchableOpacity>

              {images?.map((image) => (
                <View key={image?.uri} style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: image?.uri }}
                    onError={(error) =>
                      console.log("Image loading error:", error)
                    }
                  />
                  <Pressable hitSlop={20} onPress={() => onDeleteImage(image)}>
                    <Image
                      style={styles.delete}
                      source={require("../../assets/close.png")}
                    />
                  </Pressable>
                </View>
              ))}
              {loading ? <ActivityIndicator /> : null}
            </View>
            <Input
              placeholder="Listing Title"
              label="Title"
              value={values.title}
              onChangeText={(v) => onChange(v, "title")}
            />
            <Input
              placeholder="Select the category"
              label="Category"
              value={values.category}
              onChangeText={(v) => onChange(v, "category")}
              type="picker"
              options={categories}
            />
            <Input
              placeholder="Enter Price in USD"
              label="Price"
              value={values.price}
              keyboardType="numeric"
              onChangeText={(v) => onChange(v, "price")}
            />
            <Input
              style={styles.textArea}
              placeholder="Tell Us More..."
              label="Description"
              value={values.description}
              onChangeText={(v) => onChange(v, "description")}
              multiline
            />
          </ScrollView>
        </KeyboardAvoidingView>
        <Button title="Submit" style={styles.button} />
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
    fontSize: 14,
    color: Colors.blue,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
    marginRight: 8,
  },
  uploadContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.grey,
    borderStyle: "dotted",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    marginTop: 8,
  },
  uploadCircle: {
    width: 32,
    height: 32,
    borderRadius: 20,
    backgroundColor: Colors.lightGrey,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadPlus: {
    color: Colors.white,
    fontSize: 28,
    marginTop: -3,
    marginLeft: 2,
  },
  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    paddingBottom: 16,
  },
  imageContainer: {
    flexDirection: "row",
    marginTop: 8,
    marginRight: 8,
  },
  delete: {
    width: 24,
    height: 24,
    marginLeft: -20,
    marginTop: -8,
  },
  textArea: {
    minHeight: 150,
    paddingTop: 16,
  },
  button: {
    marginBottom: 160,
    marginHorizontal: 20
  },
});
