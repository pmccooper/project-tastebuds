import React, { useState } from "react";
import CarouselTile from "./CarouselTile";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Carousel = (props) => {
  const items = props.items;

  return (
    <View>
      <Text style={styles.header}>{props.title}</Text>
      <View style={styles.carouselContainer}>
        <ScrollView style={styles.carousel} horizontal={true}>
          {items.length ? (
            items.map((item) => <CarouselTile data={item} key={item.id} />)
          ) : (
            <Text>No recipes found.</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
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
  header: {
    fontWeight: "bold",
  },
});

export default Carousel;
