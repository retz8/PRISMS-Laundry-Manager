import { Dimensions } from "react-native";
import { gheight, gwidth } from "./globalStyles";

const windowWidth = Dimensions.get("window").width;

export function getMachineSize() {
  const machineWidth = gwidth * 110;
  const machineHeight = gheight * 140;
  return { machineWidth, machineHeight };
}
