import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import theme from "../../theme";
import parseSecond from "../helpers/parseSecond";

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={[styles.itemText, { alignItems: "flex-end" }]}>
      {item.name}
    </Text>
    <Text style={[styles.itemText, { alignItems: "flex-end" }]}>
      {parseSecond(item.second)}
    </Text>
  </View>
);

export default function TabItem({ itemList }) {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
    fontSize: 20,
  },
  itemText: {
    color: theme.color.font,
    fontSize: 20,
    marginVertical: 4,
  },
  itemName: {
    alignItems: "flex-start",
  },
  itemSecond: {
    alignItems: "flex-end",
  },
});
