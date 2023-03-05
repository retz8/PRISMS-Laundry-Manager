import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { getMachineImage } from "../helpers/getMachineImage";
import { getMachineSize } from "../helpers/getMachineSize";
import { getMachineRotation } from "../helpers/getMachineRotation";
import { getMachineLocation } from "../helpers/getMachineLocation";

export default function MachineItem({ num, type, status }) {
  // num: machine number
  // type: machine type from db
  // status: machine status from db
  const { machineWidth, machineHeight } = getMachineSize();
  const { machineTop, machineRight } = getMachineLocation(num);
  return (
    <View key={num} style={styles.container}>
      <Image
        source={getMachineImage(type, status)}
        style={{
          width: machineWidth,
          height: machineHeight,
          resizeMode: "contain",
          transform: [getMachineRotation(num)],
          position: "absolute",
          top: machineTop,
          right: machineRight,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
});
