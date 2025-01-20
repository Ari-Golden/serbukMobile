import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import React from "react";

const headerHome = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/serbuk-logo.png")}
        style={styles.logo}
      />

      <Text>header</Text>
    </View>
  );
};

export default headerHome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "#f01d7a",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
