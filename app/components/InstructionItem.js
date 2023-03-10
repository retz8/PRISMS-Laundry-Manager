import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import { machineHeight, machineWidth } from "../helpers/getMachineSize";

const windowHeight = Dimensions.get("window").height;

export default function InstructionItem() {
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
    alignItems: "center",
    height: windowHeight - 1 * machineHeight - 3 * machineWidth - 50,
  },
  instruction: {
    width: windowHeight - 1 * machineHeight - 4 * machineWidth,
    transform: [{ rotate: "90deg" }],
    resizeMode: "contain",
  },
});
