import {StyleSheet, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "../../data/products";
import FavoriteItem from "../../components/FavoriteItem";
import Header from "../../components/Header";

export default function MyListings({ navigation }) {
  function renderItem({ item }) {
    function onProductPress() {
      navigation.navigate("ProductDetails", { product: item });
    }
    return <FavoriteItem onPress={onProductPress} icon={require("../../assets/edit-2.png")} {...item}/>;
  }
  const goBack = () => navigation.goBack();
  return (
    <SafeAreaView>
      <Header title="My Listings" showBack onBackPress={goBack} />

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => String(item?.id)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
