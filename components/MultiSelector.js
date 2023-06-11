import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import SelectableItem from "./SelectableItem";

const MultiSelector = (props) => {
  return (
    <ScrollView
      style={styles.div}
      contentContainerStyle={styles.container}
      horizontal={true}
    >
      {props.items.map((item, idx) => (
        <SelectableItem item={item} key={idx} handler={props.handler} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  div: {
    maxHeight: 50,
  },
  container: {
    maxHeight: 50,
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

export default MultiSelector;
