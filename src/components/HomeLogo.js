import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function HomeLogo({ style }) {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.logoImage}
        source={{
          uri: "https://static.thenounproject.com/png/2039559-200.png",
        }}
      />
      <Text style={styles.logoTitle}>Sugoku</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  logoTitle: {
    marginTop: -40,
    fontSize: 32,
    fontFamily: "zcool",
  },
});
