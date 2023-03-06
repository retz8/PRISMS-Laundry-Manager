import { Image, StyleSheet } from "react-native";
import React from "react";
import { gheight, gwidth } from "../helpers/globalStyles";

export default function SchoolLogoItem() {
  return (
    <Image
      source={require("../../assets/images/PRISMS-logo.png")}
      style={styles.schoolLogoImage}
    />
  );
}

const styles = StyleSheet.create({
  schoolLogoImage: {
    width: 189 * gwidth,
    height: 63 * gheight,
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }],
    marginBottom: 10,
    position: "absolute",
    top: 622 * gheight,
    right: -20 * gwidth,
  },
});
