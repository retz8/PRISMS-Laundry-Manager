import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { getMachineImage } from "../helpers/getMachineImage";
import { machineWidth } from "../helpers/getMachineSize";
import ReportButton from "./ReportButton";

export default function FirstMachineItem({ machines }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <ReportButton />
      </View>

      <View style={styles.itemContainer}>
        {machines.map((machine, index) => {
          if (index === 7 || index === 8 || index === 9) {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 3 * machineWidth,
  },
  buttonContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flex: 6.5,
    flexDirection: "column",
    height: 3 * machineWidth,
  },
  machineContainer: {
    justifyContent: "center",
    height: "33%",
    alignItems: "center",
  },
  machine: {
    width: 1 * machineWidth,
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }],
  },
});
