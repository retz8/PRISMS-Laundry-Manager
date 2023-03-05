import { getMachineSize } from "./getMachineSize";
import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export function getMachineLocation(num) {
  const { machineWidth, machineHeight } = getMachineSize();
  const middleGap = 2 * machineWidth + machineWidth / 4;
  const topGap = 10;
  const bottomGap = machineWidth / 2;
  if (num === 0) {
    return { machineTop: 0, machineRight: "75%" };
  } else if (num === 1) {
    return { machineTop: 0, machineRight: "50%" };
  } else if (num === 2) {
    return { machineTop: 0, machineRight: "2%" };
  } else if (num === 3) {
    return { machineTop: machineWidth, machineRight: "2%" };
  } else if (num === 4) {
    return {
      machineTop: middleGap,
      machineRight: "2%",
    };
  } else if (num === 5) {
    return {
      machineTop: middleGap + machineWidth,
      machineRight: "2%",
    };
  } else if (num === 6) {
    return {
      machineTop: middleGap + 2 * machineWidth,
      machineRight: "2%",
    };
  } else if (num === 7) {
    return {
      machineTop: windowHeight - 4 * machineWidth + bottomGap,
      machineRight: (3 * machineHeight) / 2,
    };
  } else if (num === 8) {
    return {
      machineTop: windowHeight - 3 * machineWidth + bottomGap,
      machineRight: (3 * machineHeight) / 2,
    };
  } else if (num === 9) {
    return {
      machineTop: windowHeight - 2 * machineWidth + bottomGap,
      machineRight: (3 * machineHeight) / 2,
    };
  } else {
    return { machineTop: 500, machineRight: "10%" };
  }
}
