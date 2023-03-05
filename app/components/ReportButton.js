import { Pressable, StyleSheet, Text } from "react-native";
import { Dimensions } from "react-native";
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
    height: windowHeight / 20,
    width: windowHeight / 4,
    top: (7 * windowHeight) / 9,
    right: (9 * windowWidth) / 14,
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
