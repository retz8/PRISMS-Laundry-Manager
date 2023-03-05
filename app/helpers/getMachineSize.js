import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export function getMachineSize() {
  const machineWidth = windowWidth / 4;
  const machineHeight = windowWidth / 3;
  return { machineWidth, machineHeight };
}
