import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import bg from "./assets/bg.jpeg";
import colors from "./constants/colors";

export default function App() {
  const [map, setMap] = useState([
    ["", "", ""], // 1st row
    ["", "", ""], // 2nd row
    ["", "", ""], // 3rd row
  ]);

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <View style={styles.map}>
          {map.map((row) => {
            row.map((cell) => {
              <View style={styles.cell}></View>;
            });
          })}
          {/*
          <View style={styles.circle} />
          <View style={styles.cross}>
            <View style={styles.crossline} />
            <View style={[styles.crossline, styles.crosslineReversed]} />
          </View>
          */}
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  bg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15,
  },
  map: {
    borderWidth: 1,
    borderColor: colors.white,
    width: "80%",
    aspectRatio: 1,
  },
  circle: {
    position: "absolute",
    left: 2 * 108,
    top: 2 * 108,
    width: 75,
    height: 75,
    borderColor: colors.white,
    borderRadius: 50,
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  cross: {
    width: 75,
    height: 75,
    position: "absolute",
  },
  crossline: {
    position: "absolute",
    width: 10,
    height: 75,
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
