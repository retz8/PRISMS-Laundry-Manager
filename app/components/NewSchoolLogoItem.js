import { Image, StyleSheet, View } from "react-native";
import { gheight, gwidth } from "../helpers/globalStyles";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function NewSchoolLogoItem() {
  return (
    <View
      style={{
        flex: 2.2,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Image
        source={require("../../assets/images/instruction.png")}
        style={{
          width: ((windowHeight * 2.2) / 6.2) * 0.9,
          transform: [{ rotate: "90deg" }],
          resizeMode: "contain",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  schoolLogoImage: {
    // width: (100 - 5 * rat - middleGap).toString() + "%",
    width: "90%",
    height: "60%",
    resizeMode: "contain",
    transform: [{ rotate: "90deg" }],
    position: "absolute",
    top: 622 * gheight,
    right: -20 * gwidth,

    // top: (rat * 4 + middleGap).toString() + "%",
    // right: "50%",
  },
});
