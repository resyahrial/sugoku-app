import React from "react";
import { TextInput } from "react-native";

export default function InputText({ input, onChangeText }) {
  return (
    <TextInput
      value={input}
      onChangeText={(text) => onChangeText(text)}
      placeholder="Enter your name"
      style={{
        width: 250,
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
        fontSize: 20,
      }}
    />
  );
}
