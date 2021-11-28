import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Pressable, Alert } from "react-native";
import styles from "./screens/gameScreen/styles";
import bg from "./assets/bg.jpeg";
import Cell from "./Cell";

const emptyMap = [
  ["", "", ""], // 1st row
  ["", "", ""], // 2nd row
  ["", "", ""], // 3rd row
];

const copyArray = (original) => {
  const copy = original.map((arr) => {
    return arr.slice();
  });
  //console.log("\n\n\ncopy: ", copy);
  return copy;
};
export default function gameScreen() {
  const [map, setMap] = useState(emptyMap);
  const [currentTurn, setCurrentTurn] = useState("x");
  const [gameMode, setGameMode] = useState("BOT_MEDIUM"); // LOCAL, BOT_EASY, BOT_MEDIUM

  useEffect(() => {
    if (currentTurn === "o" && gameMode !== "LOCAL") {
      botTurn();
    }
  }, [currentTurn, gameMode]);

  useEffect(() => {
    // in react the map updates every other frame.
    // so we're calling a useEffect to make sure.
    // that the mapcheckes (wins and ties) are in sync with the board on screen.
    // fixes the delayed win state message for bot.

    const winner = getWinner(map);

    if (winner) {
      gameWon(winner);
    } else {
      checkTieState();
    }
  }, [map]);

  const onPress = (rowIndex, columnIndex) => {
    if (map[rowIndex][columnIndex] !== "") {
      Alert.alert("Position already occupied");
      return;
    }
    setMap((existingMap) => {
      const updatedArray = [...existingMap];
      updatedArray[rowIndex][columnIndex] = currentTurn;
      return updatedArray;
    });
    setCurrentTurn(currentTurn === "x" ? "o" : "x");
    const winner = getWinner();
    if (winner) {
      gameWon(winner);
    } else {
      checkTieState();
    }
  };

  const checkTieState = () => {
    if (!map.some((row) => row.some((ceil) => ceil === ""))) {
      Alert.alert(`Ooohh`, `It's a tie`, [
        {
          text: "Restart",
          onPress: resetGame,
        },
      ]);
    }
  };

  const getWinner = () => {
    // check rows
    for (let i = 0; i < 3; i++) {
      const isRowXWinning = map[i].every((cell) => cell === "x");
      const isRowOWinning = map[i].every((cell) => cell === "o");

      if (isRowXWinning) {
        return "x";
      }
      if (isRowOWinning) {
        return "o";
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
        return "x";
        break;
      }
      if (isColumnOWinning) {
        return "o";
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

    if (isDiagonal1XWinning || isDiagonal2XWinning) {
      return "x";
    }
    if (isDiagonal1OWinning || isDiagonal2OWinning) {
      return "o";
    }
  };

  const gameWon = (player) => {
    if (gameMode === "LOCAL") {
      Alert.alert(`Huraaay`, `Player ${player} won the match!`, [
        {
          text: "Restart",
          onPress: resetGame,
        },
      ]);
    } else {
      if (getWinner(map) === "x") {
        Alert.alert(`Huraaay!`, `Player ${player} won the match!`, [
          {
            text: "Restart",
            onPress: resetGame,
          },
        ]);
      } else {
        Alert.alert(`Booooo!`, `Bot ${player} won the match!`, [
          {
            text: "Restart",
            onPress: resetGame,
          },
        ]);
      }
    }
  };

  const resetGame = () => {
    setMap([
      ["", "", ""], // 1st row
      ["", "", ""], // 2nd row
      ["", "", ""], // 3rd row
    ]);
    setCurrentTurn("x");
  };

  const botTurn = () => {
    // collect all possible options
    const possiblePositions = [];
    map.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        if (cell === "") {
          possiblePositions.push({ row: rowIndex, col: columnIndex });
        }
      });
    });

    let chosenOption;

    if (gameMode === "BOT_MEDIUM") {
      // Attack
      possiblePositions.forEach((possiblePosition) => {
        const mapCopy = copyArray(map);

        mapCopy[possiblePosition.row][possiblePosition.col] = "o";

        const winner = getWinner(mapCopy);
        if (winner === "o") {
          // Attack that position
          chosenOption = possiblePosition;
        }
      });

      if (!chosenOption) {
        // Defend
        // Check if the opponent WINS if it takes one of the possible Positions
        possiblePositions.forEach((possiblePosition) => {
          const mapCopy = copyArray(map);

          mapCopy[possiblePosition.row][possiblePosition.col] = "x";

          const winner = getWinner(mapCopy);
          if (winner === "x") {
            // Defend that position
            chosenOption = possiblePosition;
          }
        });
      }
    }

    // choose random
    if (!chosenOption) {
      chosenOption =
        possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
    }

    if (chosenOption) {
      onPress(chosenOption.row, chosenOption.col);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bg} resizeMode="contain">
        <Text
          style={{
            fontSize: 24,
            color: "white",
            position: "absolute",
            top: 50,
          }}
        >
          Current Turn: {currentTurn.toUpperCase()}
        </Text>
        <View style={styles.map}>
          {map.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={styles.row}>
              {row.map((cell, columnIndex) => (
                <Cell
                  key={`row-${rowIndex}-col-${columnIndex}`}
                  cell={cell}
                  onPress={() => onPress(rowIndex, columnIndex)}
                />
              ))}
            </View>
          ))}
        </View>

        <View style={styles.buttonRow}>
          <Text
            onPress={() => setGameMode("LOCAL")}
            style={
              gameMode === "LOCAL" ? styles.buttonActive : styles.buttonInActive
            }
          >
            Local
          </Text>
          <Text
            onPress={() => setGameMode("EASY_BOT")}
            style={
              gameMode === "EASY_BOT"
                ? styles.buttonActive
                : styles.buttonInActive
            }
          >
            Easy Bot
          </Text>
          <Text
            onPress={() => setGameMode("MEDIUM_BOT")}
            style={
              gameMode === "MEDIUM_BOT"
                ? styles.buttonActive
                : styles.buttonInActive
            }
          >
            Medium Bot
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
