import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { getMachineImage } from "../helpers/getMachineImage";
import { machineHeight, machineWidth } from "../helpers/getMachineSize";

export default function FirstMachineItem({ machines }) {
  return (
    <View style={styles.container}>
      {machines.map((machine, index) => {
        if (index === 0 || index === 1) {
          return (
            <View key={index} style={styles.machineContainer}>
              <Image
                source={getMachineImage(machine.type, machine.status)}
                style={styles.machine}
              />
            </View>
          );
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 2 * machineWidth + 5,
    justifyContent: "space-between",
  },
  machineContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 1 * machineWidth,
  },
  machine: {
    height: 1 * machineHeight,
    transform: [{ rotate: "0deg" }],

    resizeMode: "contain",
  },
});
