import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "./constants/colors";

const Cross = () => {
  return (
    <View style={styles.cross}>
      <View style={styles.crossline} />
      <View style={[styles.crossline, styles.crosslineReversed]} />
    </View>
  );
};

const styles = StyleSheet.create({
  cross: {
    flex: 1,
  },
  crossline: {
    position: "absolute",
    left: "48%",
    width: 10,
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    transform: [
      {
        rotate: "45deg",
      },
    ],
  },
  crosslineReversed: {
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
});

export default Cross;
