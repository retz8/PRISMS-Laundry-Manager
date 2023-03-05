import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { getMachineSize } from "../helpers/getMachineSize";

const { machineWidth, machineHeight } = getMachineSize();

export default function InstructionItem() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/instruction.png")}
        style={styles.instructionImage}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { position: "relative" },
  instructionImage: {
    width: machineWidth * 2.9,
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }],
    position: "absolute",
    top: (4 * machineHeight) / 9,
    right: machineWidth,
  },
});
