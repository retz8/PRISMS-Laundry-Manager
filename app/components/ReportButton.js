import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { openURL } from "../helpers/openURL";
import { machineHeight, machineWidth } from "../helpers/getMachineSize";

const windowHeight = Dimensions.get("window").height;

export default function ReportButton() {
  return (
    <TouchableOpacity
      onPress={() => {
        openURL();
      }}
      style={styles.pressable}
    >
      <Text style={styles.pressableText}>Report Issue</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: "#bf0000",
    aspectRatio: 4,
    width: 2 * machineWidth,
    transform: [{ rotate: "90deg" }],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "absolute",
    top:
      2 * machineHeight +
      (windowHeight - 1 * machineHeight - 3 * machineWidth - 50),
    left: -0.5 * machineWidth,
  },
  pressableText: {
    fontSize: 22 * ((1 * machineWidth) / 100),
    color: "#ffffff",
    fontWeight: "bold",
  },
});
