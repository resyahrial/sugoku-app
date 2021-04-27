import React, { useState, useEffect } from "react";
import { View, StyleSheet, ToastAndroid } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";

import theme from "../../theme";
import { NeuMorph, InputText, HomeLogo, ButtonAction } from "../components";
import { clearBoard } from "../store/actions/board";

const dropdownItems = [
  {
    label: "-- Choose Difficulty --",
    value: "default",
    hidden: true,
  },
  {
    label: "Easy",
    value: "easy",
  },
  {
    label: "Medium",
    value: "medium",
  },
  {
    label: "Hard",
    value: "hard",
  },
];

export default function Home({ navigation }) {
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("default");

  const dispatch = useDispatch();

  const startGame = () => {
    if (name === "" || difficulty === "default") {
      ToastAndroid.show("Please fill all fields", ToastAndroid.SHORT);
      return;
    }

    dispatch(clearBoard());
    navigation.navigate("Game", {
      name,
      difficulty,
    });

    setName("");
    setDifficulty("default");
  };

  return (
    <View style={styles.container}>
      <View>
        <HomeLogo style={{ marginBottom: 50 }} />
        <NeuMorph width={250} height={50}>
          <InputText input={name} onChangeText={(value) => setName(value)} />
        </NeuMorph>
        <DropDownPicker
          items={dropdownItems}
          defaultValue={difficulty}
          containerStyle={{ height: 50, width: 250, marginTop: 16 }}
          labelStyle={{ fontSize: 16 }}
          itemStyle={{
            justifyContent: "flex-start",
          }}
          dropDownStyle={{ backgroundColor: "#fafafa" }}
          onChangeItem={(item) => setDifficulty(item.value)}
        />
      </View>
      <ButtonAction
        width={250}
        text={"Start Game"}
        textColor="green"
        onPress={startGame}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.background,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 24,
    paddingBottom: 40,
  },
});
