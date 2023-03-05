import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { getMachineSize } from "../helpers/getMachineSize";

const windowHeight = Dimensions.get("window").height;
const { machineWidth, machineHeight } = getMachineSize();

export default function SchoolLogoItem() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/PRISMS-logo.png")}
        style={styles.schoolLogoImage}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { position: "relative" },
  schoolLogoImage: {
    height: windowHeight / 11,
    width: windowHeight / 4,
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }],
    position: "absolute",
    top: machineWidth * 6,
    right: -machineHeight / 5,
  },
});
