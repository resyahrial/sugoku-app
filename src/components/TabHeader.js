import React from "react";
import { Animated, View, TouchableOpacity, StyleSheet } from "react-native";

export default function TabHeader({ props, setIndex }) {
  const inputRange = props.navigationState.routes.map((x, i) => i);

  return (
    <View style={styles.tabBar}>
      {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex) =>
            inputIndex === i ? 1 : 0.5
          ),
        });

        return (
          <TouchableOpacity style={styles.tabItem} onPress={() => setIndex(i)}>
            <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});
