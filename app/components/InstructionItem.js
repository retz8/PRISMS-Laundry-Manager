import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { getMachineSize } from "../helpers/getMachineSize";
import { gheight, gwidth } from "../helpers/globalStyles";

const { machineWidth, machineHeight } = getMachineSize();

export default function InstructionItem() {
  return (
    <Image
      source={require("../../assets/images/instruction.png")}
      style={styles.instructionImage}
    />
  );
}

const styles = StyleSheet.create({
  instructionImage: {
    width: gwidth * 300,
    height: gheight * 240,
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }],
    position: "absolute",
    top: gheight * 155,
    right: gwidth * 140,
  },
});
