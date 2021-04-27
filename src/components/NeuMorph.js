import React from "react";
import { View, StyleSheet } from "react-native";

import theme from "../../theme";

export default function NeuMorph({ children, width, height, style, isCircle }) {
  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.inner,
          {
            width: width || 40,
            height: height || 40,
            borderRadius: isCircle ? 50 : 10,
          },
        ]}
      >
        {children}
      </View>
      <View
        style={[
          styles.topShadow,
          {
            borderRadius: isCircle ? 50 : 10,
            width: width + 1 || 41,
            height: height + 1 || 41,
          },
        ]}
      ></View>
      <View
        style={[
          styles.bottomShadow,
          {
            borderRadius: isCircle ? 50 : 10,
            width: width + 1 || 41,
            height: height + 1 || 41,
          },
        ]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  inner: {
    backgroundColor: theme.color.background,
    alignItems: "center",
    justifyContent: "center",
  },
  topShadow: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    zIndex: -1,
    marginLeft: -4,
    marginTop: -2,
    opacity: 0.5,
  },
  bottomShadow: {
    position: "absolute",
    backgroundColor: theme.color.darkerBg,
    zIndex: -1,
    marginLeft: 3,
    marginTop: 3,
    opacity: 0.5,
  },
});
