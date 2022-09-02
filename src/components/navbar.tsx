import React from "react";
// eslint-disable-next-line import/namespace
import { View, StyleSheet } from "react-native";

import { AppTextBold } from "./UI/appTextBold";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>DO IT NOW</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "black",
    paddingBottom: 5,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "OpenSans-Bold",
  },
});
