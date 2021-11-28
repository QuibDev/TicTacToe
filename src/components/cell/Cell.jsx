import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../../constants/colors";
import Cross from "../cross";

const Cell = (props) => {
  const { cell, onPress } = props;
  return (
    <Pressable
      onPress={() => onPress(rowIndex, columnIndex)}
      style={styles.cell}
    >
      {cell == "o" && <View style={styles.circle} />}
      {cell == "x" && <Cross />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    width: 100,
    height: 100,
    margin: 4,
  },
  circle: {
    width: 75,
    height: 75,
    borderColor: colors.white,
    borderRadius: 50,
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});

export default Cell;
