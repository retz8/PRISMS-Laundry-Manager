import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { getMachineImage } from "../helpers/getMachineImage";
import { machineWidth } from "../helpers/getMachineSize";

export default function SecondMachineItem({ machines }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>{/* <ReportButton /> */}</View>

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
    //flexDirection: "row",
    flexWrap: "wrap",
    height: 3 * machineWidth,
    justifyContent: "center",
  },
  buttonContainer: {
    //flex: 1,
    flexDirection: "column",
    width: 1 * machineWidth,
    height: 3 * machineWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    flexDirection: "column",
    height: 3 * machineWidth,
  },
  machineContainer: {
    justifyContent: "center",
    height: 1 * machineWidth,
    alignItems: "center",
  },
  machine: {
    width: 1 * machineWidth,
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }],
  },
});
