import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { getMachineImage } from "../helpers/getMachineImage";
import { getMachineRotation } from "../helpers/getMachineRotation";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function FirstMachineItem({ machines }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      {machines.map((machine, index) => {
        if (index === 0) {
          return (
            <View key={index} style={{ alignItems: "center", width: "40%" }}>
              <Image
                source={getMachineImage(machine.type, machine.status)}
                style={{
                  height: "100%",
                  resizeMode: "contain",
                  transform: [getMachineRotation(index)],
                }}
              />
            </View>
          );
        } else if (index === 1) {
          return (
            <View key={index} style={{ alignItems: "center", width: "40%" }}>
              <Image
                source={getMachineImage(machine.type, machine.status)}
                style={{
                  height: "100%",
                  resizeMode: "contain",
                  transform: [getMachineRotation(index)],
                }}
              />
            </View>
          );
        }
      })}
      {/* <View style={{ height: "100%", backgroundColor: "red" }} />
          <View style={{ backgroundColor: "purple" }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  machine: {},
});
