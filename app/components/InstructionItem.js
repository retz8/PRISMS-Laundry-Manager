import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import { machineHeight, machineWidth } from "../helpers/getMachineSize";

const windowHeight = Dimensions.get("window").height;

export default function InstructionItem({ machines }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/instruction.png")}
        style={styles.instruction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: windowHeight - 1 * machineHeight - 3 * machineWidth - 130,
  },
  instruction: {
    width: windowHeight - 1 * machineHeight - 3 * machineWidth - 130,
    transform: [{ rotate: "90deg" }],
    resizeMode: "contain",
  },
});
