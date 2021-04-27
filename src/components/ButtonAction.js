import React from "react";
import { Text, StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import NeuMorph from "./NeuMorph";
import theme from "../../theme";

export default function ButtonAction({ onPress, text, width, textColor }) {
  return (
    <NeuMorph height={50} width={width}>
      <BorderlessButton
        style={{ width: 250, alignItems: "center" }}
        onPress={onPress}
      >
        <Text style={{ fontSize: 20, color: textColor || theme.color.font }}>
          {text}
        </Text>
      </BorderlessButton>
    </NeuMorph>
  );
}
