import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Cell from "./Cell";

const Row = (props) => {
  const { row, rowIndex, onPress } = props;
  return (
    <View>
      {row.map((cell, columnIndex) => (
        <Cell
          key={`row-${rowIndex} column-${columnIndex}`}
          cell={cell}
          onPress={() => onPress(columnIndex)}
        />
      ))}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
  },
});
