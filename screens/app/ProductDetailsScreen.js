import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../utils/colors";
import Button from "../../components/Button";
import ImageCarousel from "../../components/ImageCarousel";

const { height } = Dimensions.get("window");

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route?.params || {};
  function onBackPress() {
    navigation.goBack();
  }
  const onContact = () => {
    // Make a phone call
    const phone = "127282827";
    Linking.openURL(`tel:${phone}`);

    // Send an Email
    const email = "support@mail.com";
    Linking.openURL(`mailto:${email}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {product?.images?.length ? (
          <ImageCarousel images={product?.images} />
        ) : (
          <Image style={styles.image} source={{ uri: product?.image }} />
        )}
        <View style={styles.content}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
        <Pressable onPress={onBackPress} style={styles.backContainer}>
          <Image
            style={styles.backIcon}
            source={require("../../assets/back.png")}
          />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.bookmarkContainer}>
          <Image
            style={styles.bookmarkIcon}
            source={require("../../assets/bookmark.png")}
          />
        </Pressable>
        <Button onPress={onContact} title="Contact Seller" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  // container: {
  //   borderWidth: 1,
  // },
  image: {
    width: "100%",
    height: height * 0.45,
  },
  content: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 8,
  },
  description: {
    color: Colors.textGrey,
    fontWeight: "300",
    marginVertical: 8,
  },
  footer: {
    padding: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  bookmarkContainer: {
    backgroundColor: Colors.lightGrey,
    padding: 18,
    borderRadius: 8,
    marginRight: 16,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
  },
  backContainer: {
    backgroundColor: Colors.white,
    padding: 18,
    margin: 24,
    borderRadius: 8,
    marginRight: 16,
    position: "absolute",
  },
  backIcon: { width: 20, height: 20 },
});
