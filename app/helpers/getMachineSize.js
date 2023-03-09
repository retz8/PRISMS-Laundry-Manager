import { gheight, gwidth } from "./globalStyles";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export function getMachineSize() {
  const machineWidth = windowWidth / 4;
  const machineHeight = (machineWidth / 585) * 721;
  console.log(`machineWidth: ${machineWidth}`);
  return { machineWidth, machineHeight };
}
