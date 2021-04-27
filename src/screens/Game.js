import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import theme from "../../theme";
import { InputBoard, ButtonAction } from "../components";
import { fetchBoard, solveBoard, validateBoard } from "../store/actions/board";
import { addLeaderboard } from "../store/actions/leaderboard";
import parseSecond from "../helpers/parseSecond";

export default function App({ route, navigation }) {
  const [currentCell, setCurrentCell] = useState("");
  const [second, setSecond] = useState(0);

  const dispatch = useDispatch();
  const { data: board, isLoading, status } = useSelector(
    (state) => state.board
  );

  const { name, difficulty } = route.params;

  useEffect(() => {
    dispatch(fetchBoard(difficulty));
  }, []);

  useEffect(() => {
    const counter = setInterval(() => {
      setSecond(second + 1);
    }, 1000);
    return () => {
      clearInterval(counter);
    };
  }, [second]);

  useEffect(() => {
    if (status === "solved") {
      const playerData = {
        name,
        difficulty,
        second,
      };
      dispatch(addLeaderboard(playerData));
      navigation.replace("Finish", playerData);
    }
  }, [status]);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View>
          <Text
            style={{
              fontSize: 28,
              color: theme.color.font,
              fontWeight: "bold",
            }}
          >
            {difficulty[0].toUpperCase() + difficulty.slice(1)}
          </Text>
          <Text>{status !== "solved" ? "unsolved" : ""}</Text>
        </View>
        <View>
          <Text style={styles.counter}>{parseSecond(second)}</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        {isLoading && (
          <ActivityIndicator
            style={{ marginBottom: 10 }}
            size="large"
            color="#00ff00"
          />
        )}
        <View style={styles.board}>
          {board &&
            board.map((cell, idx) => {
              return (
                <InputBoard
                  key={idx}
                  index={idx}
                  cell={cell}
                  onFocus={(position) => setCurrentCell(position)}
                  currentCell={currentCell}
                />
              );
            })}
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <ButtonAction
          width={125}
          text={"Solve"}
          textColor={theme.color.icon}
          onPress={() => dispatch(solveBoard(board))}
        />
        <ButtonAction
          width={125}
          text={"Check"}
          textColor={theme.color.icon}
          onPress={() => dispatch(validateBoard(board))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingVertical: 48,
  },
  topContainer: {
    flexDirection: "row",
    marginHorizontal: 32,
    justifyContent: "space-between",
    alignItems: "center",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 345,
  },
  counter: {
    fontFamily: "digital",
    fontSize: 32,
    color: theme.color.font,
  },
});
