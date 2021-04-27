import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";

import theme from "../../theme";
import { updateBoard } from "../store/actions/board";

export default function InputBoard({ cell, onFocus, currentCell, index }) {
  const dispatch = useDispatch();

  const isCurrentRow = currentCell.row === cell.row;
  const isCurrentCol = currentCell.col === cell.col;
  const isCurrentCell = isCurrentRow && isCurrentCol;

  const handleChange = (text) => {
    const reg = new RegExp("^\\d+");
    if (!reg.test(text)) {
      return;
    }

    text = text.length > 1 ? text.slice(1) : text;
    dispatch(
      updateBoard({
        index,
        cell: {
          ...cell,
          value: +text,
        },
      })
    );
  };

  return (
    <TextInput
      style={[
        styles.inputBoard,
        {
          backgroundColor: isCurrentCell
            ? "white"
            : isCurrentRow || isCurrentCol
            ? "#B1CBFA"
            : "#DEE9FD",
          color: cell.initialValue === 0 ? theme.color.font : "grey",
          fontWeight: cell.initialValue === 0 ? "bold" : "100",
          borderTopLeftRadius: cell.row === 0 && cell.col === 0 ? 10 : 0,
          borderTopRightRadius: cell.row === 0 && cell.col === 8 ? 10 : 0,
          borderBottomLeftRadius: cell.row === 8 && cell.col === 0 ? 10 : 0,
          borderBottomRightRadius: cell.row === 8 && cell.col === 8 ? 10 : 0,
          borderRightWidth: [2, 5].includes(cell.col) ? 4 : 1,
          borderBottomWidth: [2, 5].includes(cell.row) ? 4 : 1,
        },
      ]}
      value={cell.value === 0 ? "" : `${cell.value}`}
      maxLength={2}
      editable={cell.initialValue === 0}
      keyboardType="number-pad"
      onChangeText={(text) => handleChange(text)}
      onFocus={() => onFocus({ row: cell.row, col: cell.col })}
    />
  );
}

const styles = StyleSheet.create({
  inputBoard: {
    borderColor: theme.color.darkerBg,
    borderWidth: 1,
    textAlign: "center",
    alignSelf: "stretch",
    height: 35,
    width: 35,
    fontSize: 22,
  },
});
