import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import { machineWidth } from "../helpers/getMachineSize";

const windowHeight = Dimensions.get("window").height;

export default function SchoolLogoItem() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/PRISMS-logo.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: windowHeight - 6 * machineWidth,
  },
  logo: {
    resizeMode: "contain",
    width: windowHeight - 6 * machineWidth,
    transform: [{ rotate: "90deg" }],
  },
});
