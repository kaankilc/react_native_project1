import { View, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/Header";
import { categories } from "../../data/categories";
import CategoryBox from "../../components/CategoryBox";
import { products } from "../../data/products";
import ProductHomeItem from "../../components/ProductHomeItem";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [keyword, setKeyword] = useState();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        (product) => product?.category === selectedCategory
      );
      setFilteredProducts(updatedProducts);
    } else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(
        (product) =>
          product?.category === selectedCategory &&
          product?.title?.toLowerCase().includes(keyword?.toLowerCase())
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter((product) =>
        product?.title?.toLowerCase().includes(keyword?.toLowerCase())
      );
      setFilteredProducts(updatedProducts);
    } else if (!keyword && !selectedCategory) {
      setFilteredProducts(products);
    }
  }, [selectedCategory, keyword]);

  function renderCategoryItem({ item, index }) {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  }
  function renderProductItem({ item }) {
    return <ProductHomeItem {...item} />;
  }
  return (
    <SafeAreaView>
      <Header
        showSearch={true}
        onSearch={setKeyword}
        keyword={keyword}
        title="Find All You Need"
      />
      <FlatList
        style={styles.list}
        data={categories}
        horizontal
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        style={styles.productsList}
        numColumns={2}
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => String(item.id)}
        ListFooterComponent={<View style={{ height: 200 }}></View>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  list: {
    paddingVertical: 24,
  },
  productsList: {
    paddingHorizontal: 16,
  },
});
