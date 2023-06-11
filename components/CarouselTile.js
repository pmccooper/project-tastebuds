import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const CarouselTile = (props) => {
  const data = props.data;

  return (
    <View style={styles.carouselTile}>
      <Image
        source={require(`../assets/${data.image}`)}
        style={{ width: 100, height: 100 }}
      />
      <Text
        style={{
          width: 100,
          fontSize: 10,
        }}
      >
        {data.name}
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
