import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CarouselTile = (props) => {
  const data = props.data;
  const focused = props.focused;

  return (
    <View style={styles.carouselTile}>
      <Image
        source={require(`../assets/${data.image}`)}
        style={{ width: 80, height: 80 }}
      />
      <Text
        style={{
          width: 80,
          fontSize: 10,
        }}
      >
        {data.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselTile: {
    display: "flex",
    paddingHorizontal: 5,
  },
});

export default CarouselTile;
