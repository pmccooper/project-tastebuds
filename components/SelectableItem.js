import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const SelectableItem = (props) => {
  const [selected, setSelected] = useState(false);
  return (
    <View style={styles.container}>
      <Text
        style={selected ? styles.selected : styles.tags}
        onPress={(e) => {
          setSelected(!selected);
          props.handler(e.target.innerText);
        }}
      >
        {props.item}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "fit-content",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    borderStyle: "solid",
  },
  tags: {
    padding: 10,
  },
  selected: {
    padding: 10,
    backgroundColor: "coral",
  },
});

export default SelectableItem;
