import { Pressable, StyleSheet, Text } from "react-native";
import { Dimensions } from "react-native";
import { gheight, gwidth } from "../helpers/globalStyles";
import { openURL } from "../helpers/openURL";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

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
    height: 40 * gheight,
    width: 200 * gwidth,
    top: 560 * gheight,
    right: 285 * gwidth,
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
