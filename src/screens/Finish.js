import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { ButtonAction, TabLeaderboard } from "../components";
import theme from "../../theme";
import parseSecond from "../helpers/parseSecond";
import { clearLeaderboard } from "../store/actions/leaderboard";

export default function Finish({ route, navigation }) {
  const { leaderboard } = useSelector((state) => state.leaderboard);
  const dispatch = useDispatch();

  const { name, difficulty, second } = route.params;

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.congrats}>Congratulation</Text>
          <Text style={{ fontSize: 16, color: theme.color.font }}>
            {name} - {difficulty[0].toUpperCase()}
            {difficulty.slice(1)} - {parseSecond(second)}
          </Text>
        </View>
        <TabLeaderboard
          style={{ marginTop: 32 }}
          leaderboard={leaderboard}
          routes={[
            { key: "easy", title: "Easy" },
            { key: "medium", title: "Medium" },
            { key: "hard", title: "Hard" },
          ]}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ButtonAction
            width={125}
            text={"Clear Board"}
            textColor="red"
            onPress={() => dispatch(clearLeaderboard())}
          />
          <ButtonAction
            width={125}
            text={"Go Home"}
            textColor="green"
            onPress={() => navigation.replace("Home")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: theme.color.background,
  },
  innerContainer: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "space-between",
    paddingTop: 24,
    paddingBottom: 40,
    marginHorizontal: 32,
  },
  congrats: {
    fontFamily: "caligraph",
    fontSize: 48,
    letterSpacing: 3,
    color: theme.color.font,
    marginTop: 20,
    marginBottom: 5,
  },
});
