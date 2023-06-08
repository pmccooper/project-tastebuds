import React, { useState } from "react";
import CarouselTile from "./CarouselTile";
import { Button, ScrollView, StyleSheet, View } from "react-native";

const Carousel = (props) => {
  const [index, setIndex] = useState(0);
  const length = props.data.length;
  const items = props.data;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <View style={styles.carouselContainer}>
      <Button onPress={handlePrevious}>Previous</Button>
      <View style={styles.carousel}>
        {items.map((item, idx) => (
          <CarouselTile data={item} focused={idx === index} key={item.id} />
        ))}
      </View>
      <Button onPress={handleNext}>Next</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  carousel: {
    flex: 3,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    width: 60,
  },
  carouselButton: {
    flex: 1,
    position: "absolute",
    width: 20,
  },
});

export default Carousel;
