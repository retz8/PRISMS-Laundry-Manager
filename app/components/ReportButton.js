import { Pressable, StyleSheet, Text } from "react-native";
import { openURL } from "../helpers/openURL";
import { machineWidth } from "../helpers/getMachineSize";

export default function ReportButton() {
  return (
    <Pressable onPress={() => openURL()} style={styles.pressable}>
      <Text style={styles.pressableText}>Report Issue</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    position: "absolute",
    backgroundColor: "#bf0000",
    height: (1 / 4) * 2 * machineWidth,
    width: 2 * machineWidth,
    transform: [{ rotate: "90deg" }],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  pressableText: {
    fontSize: 22,
    color: "#ffffff",
    fontWeight: "bold",
  },
});
