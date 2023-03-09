import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { getMachineImage } from "../helpers/getMachineImage";
import { machineWidth } from "../helpers/getMachineSize";

export default function SecondRightMachineItem({ machines }) {
  return (
    <View style={styles.container}>
      {machines.map((machine, index) => {
        if (index === 4 || index === 5 || index === 6) {
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
    flexDirection: "column",
    justifyContent: "space-between",
    height: 3 * machineWidth + (1 / 2) * machineWidth,
    paddingTop: (1 / 2) * machineWidth,
  },
  machineContainer: {
    justifyContent: "center",
    height: 1 * machineWidth,
    alignItems: "flex-end",
  },
  machine: {
    width: 1 * machineWidth,
    transform: [{ rotate: "90deg" }],
    resizeMode: "contain",
  },
});
