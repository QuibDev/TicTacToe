import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./screens/gameScreen/styles";
import bg from "./assets/bg.jpeg";

export default function gameScreen() {
  const [map, setMap] = useState([
    ["o", "x", ""], // 1st row
    ["", "x", "x"], // 2nd row
    ["o", "", ""], // 3rd row
  ]);

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <View style={styles.map}>
          {map.map((row) => (
            <View style={styles.row}>
              {row.map((cell) => (
                <View style={styles.cell}>
                  {cell == "o" && <View style={styles.circle} />}
                  {cell == "x" && (
                    <View style={styles.cross}>
                      <View style={styles.crossline} />
                      <View
                        style={[styles.crossline, styles.crosslineReversed]}
                      />
                    </View>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}
