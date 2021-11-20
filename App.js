import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import bg from "./assets/bg.jpeg";
import colors from "./constants/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <View style={styles.circle}>
          <View style={styles.innerCircle}></View>
        </View>
        <View style={styles.crossline} />
        <View style={styles.crossline} />
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
  circle: {
    width: 75,
    height: 75,
    backgroundColor: colors.white,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  innerCircle: {
    width: 50,
    height: 50,
    backgroundColor: colors.background,
    borderRadius: 50,
  },
  crossline: {
    width: 10,
    height: 50,
    backgroundColor: "white",
    transform: [
      {
        rotate: 45,
      },
    ],
  },
});
