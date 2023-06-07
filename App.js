import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to TasteBuds</Text>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 72,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
