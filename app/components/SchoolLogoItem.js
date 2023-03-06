import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { getMachineSize } from "../helpers/getMachineSize";
import { gheight, gwidth } from "../helpers/globalStyles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const { machineWidth, machineHeight } = getMachineSize();
const middleGap = 5;
const rat = (machineWidth / windowHeight) * 100;

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
    // width: (100 - 5 * rat - middleGap).toString() + "%",
    width: 189 * gwidth,
    height: 63 * gheight,
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }],
    marginBottom: 10,
    position: "absolute",
    top: 622 * gheight,
    right: -20 * gwidth,

    // top: (rat * 4 + middleGap).toString() + "%",
    // right: "50%",
  },
});
