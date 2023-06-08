import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Carousel from "./components/Carousel";

const recipes = [
  { id: 1, title: "Spaghetti Bolognese", image: "spag.jpg" },
  { id: 2, title: "Fettucine Bolognese", image: "spag.jpg" },
  { id: 3, title: "Rigatoni Bolognese", image: "spag.jpg" },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to TasteBuds</Text>
      <Carousel data={recipes} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  ...Platform.select({
    ios: {
      fontFamily: "Arial",
    },
    android: {
      fontFamily: "Roboto",
    },
  }),
});

export default App;
