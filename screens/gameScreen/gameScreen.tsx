import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import bg from "../../assets/bg.jpeg";
import colors from "../../constants/colors";

export default function gameScreen() {
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
