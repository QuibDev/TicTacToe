import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, ImageBackground, Pressable, Alert } from "react-native";
import styles from "./screens/gameScreen/styles";
import bg from "./assets/bg.jpeg";

export default function gameScreen() {
  const [map, setMap] = useState([
    ["", "", ""], // 1st row
    ["", "", ""], // 2nd row
    ["", "", ""], // 3rd row
  ]);

  const [currentTurn, setCurrentTurn] = useState("x");

  const onPress = (rowIndex, columnIndex) => {
    if (map[rowIndex][columnIndex] !== "") {
      Alert.alert("Position already occupied");
    }
    setMap((existingMap) => {
      const updatedArray = [...existingMap];
      updatedArray[rowIndex][columnIndex] = currentTurn;
      return updatedArray;
    });
    setCurrentTurn(currentTurn === "x" ? "o" : "x");
    checkWinningState();
  };

  const checkWinningState = () => {
    // check rows
    for (let i = 0; i < 3; i++) {
      const isRowXWinning = map[i].every((cell) => cell === "x");
      const isRowOWinning = map[i].every((cell) => cell === "o");
      if (isRowXWinning) {
        Alert.alert(`X won. Row: ${i}`);
      }
      if (isRowOWinning) {
        Alert.alert(`O won. Row: ${i}`);
      }
    }

    // check columns
    for (let col = 0; col < 3; col++) {
      let isColumnXWinning = true;
      let isColumnOWinning = true;

      for (let row = 0; row < 3; row++) {
        if (map[row][col] !== "x") {
          isColumnXWinning = false;
        }
        if (map[row][col] !== "o") {
          isColumnOWinning = false;
        }
      }

      if (isColumnXWinning) {
        Alert.alert(`X won. Column ${col}`);
        break;
      }
      if (isColumnOWinning) {
        Alert.alert(`O won. Column ${col}`);
        break;
      }
    }

    // check diagonals
    let isDiagonal1OWinning = true;
    let isDiagonal1XWinning = true;
    let isDiagonal2OWinning = true;
    let isDiagonal2XWinning = true;

    for (let i = 0; i < 3; i++) {
      if (map[i][i] !== "o") {
        isDiagonal1OWinning = false;
      }
      if (map[i][i] !== "x") {
        isDiagonal1XWinning = false;
      }

      if (map[i][2 - i] !== "o") {
        isDiagonal2OWinning = false;
      }
      if (map[i][2 - i] !== "x") {
        isDiagonal2XWinning = false;
      }
    }

    if (isDiagonal1XWinning) {
      Alert.alert(`X won. Diagonal left to right`);
    }
    if (isDiagonal1OWinning) {
      Alert.alert(`O won. Diagonal left to right`);
    }

    if (isDiagonal2XWinning) {
      Alert.alert(`X won. Diagonal right to left`);
    }
    if (isDiagonal2OWinning) {
      Alert.alert(`O won. Diagonal right to left`);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <View style={styles.map}>
          {map.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.row}>
              {row.map((cell, columnIndex) => (
                <Pressable
                  key={`row-${rowIndex}-col-${columnIndex}`}
                  onPress={() => onPress(rowIndex, columnIndex)}
                  style={styles.cell}
                >
                  {cell == "o" && <View style={styles.circle} />}
                  {cell == "x" && (
                    <View style={styles.cross}>
                      <View style={styles.crossline} />
                      <View
                        style={[styles.crossline, styles.crosslineReversed]}
                      />
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}
