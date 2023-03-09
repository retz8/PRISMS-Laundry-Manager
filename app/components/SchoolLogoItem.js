import { Dimensions, Image, StyleSheet, View } from "react-native";
import React from "react";
import { machineWidth } from "../helpers/getMachineSize";

const windowHeight = Dimensions.get("window").height;

export default function SchoolLogoItem() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/PRISMS-logo.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
    height: windowHeight - 5 * machineWidth - (1 / 2) * machineWidth - 130,
  },
  logoContainer: {
    justifyContent: "center",
    height: windowHeight - 5 * machineWidth - (1 / 2) * machineWidth - 130,
    alignItems: "flex-end",
    paddingTop: 1 * machineWidth,
  },
  logo: {
    resizeMode: "contain",
    width: windowHeight - 5 * machineWidth - (1 / 2) * machineWidth - 130,
    transform: [{ rotate: "90deg" }],
  },
});
