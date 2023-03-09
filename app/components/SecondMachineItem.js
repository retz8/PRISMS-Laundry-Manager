import { View, Image } from "react-native";
import { getMachineImage } from "../helpers/getMachineImage";
import { getMachineRotation } from "../helpers/getMachineRotation";
import { ReportButton } from "./ReportButton";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SecondMachineItem({ machines }) {
  return (
    <View
      style={{
        flex: 3,
        flexDirection: "row",
        height: "100%",
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 3.5,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReportButton />
      </View>

      <View
        style={{
          flex: 6.5,
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          paddingTop: "10%",
          paddingBottom: "10%",
        }}
      >
        {machines.map((machine, index) => {
          if (index === 7) {
            return (
              <View
                key={index}
                style={{
                  justifyContent: "center",
                  height: "30%",
                  alignContent: "center",
                }}
              >
                <Image
                  source={getMachineImage(machine.type, machine.status)}
                  style={{
                    width: "60%",
                    resizeMode: "contain",
                    transform: [getMachineRotation(index)],
                    left: "20%",
                  }}
                />
              </View>
            );
          } else if (index === 8) {
            return (
              <View
                key={index}
                style={{
                  justifyContent: "center",
                  height: "30%",
                }}
              >
                <Image
                  source={getMachineImage(machine.type, machine.status)}
                  style={{
                    width: "60%",
                    resizeMode: "contain",
                    transform: [getMachineRotation(index)],
                    left: "20%",
                  }}
                />
              </View>
            );
          } else if (index === 9) {
            return (
              <View
                key={index}
                style={{ justifyContent: "center", height: "30%" }}
              >
                <Image
                  source={getMachineImage(machine.type, machine.status)}
                  style={{
                    width: "60%",
                    transform: [getMachineRotation(index)],
                    resizeMode: "contain",
                    left: "20%",
                  }}
                />
              </View>
            );
          }
        })}
      </View>
    </View>
  );
}
