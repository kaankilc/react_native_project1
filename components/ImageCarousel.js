import { StyleSheet, FlatList, Image, Dimensions, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../utils/colors";

const { width, height } = Dimensions.get("window");

export default function ImageCarousel({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  function handleScrollEnd(e) {
    const horizontalOffset = e.nativeEvent.contentOffset.x;
    const index = Math.round(horizontalOffset / width);
    setActiveIndex(index);
  }
  function renderImage({ item }) {
    return <Image style={styles.image} source={{ uri: item }} />;
  }
  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        data={images}
        renderItem={renderImage}
        style={styles.list}
        onMomentumScrollEnd={handleScrollEnd}
      />
      <View style={styles.pagination}>
        {images?.map((_, i) => (
          <View
            key={i}
            style={[
              styles.paginationLine,
              i === activeIndex ? styles.activeLine : {},
            ]}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.45,
  },
  list: {},
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
  paginationLine: {
    height: 4,
    width: 20,
    borderRadius: 10,
    backgroundColor: Colors.white,
    margin: 5,
  },
  activeLine: {
    width: 30,
    backgroundColor: Colors.black,
  },
});
