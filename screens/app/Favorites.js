import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../data/products";
import FavoriteItem from "../../components/FavoriteItem";
import Header from "../../components/Header";

export default function Favorites({ navigation }) {
  function renderItem({ item }) {
    function onProductPress() {
      navigation.navigate("ProductDetails", { product: item });
    }
    return <FavoriteItem onPress={onProductPress} {...item} />;
  }
  return (
    <SafeAreaView>
      <Header title="Favorites" />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => String(item?.id)}
      />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
// });
