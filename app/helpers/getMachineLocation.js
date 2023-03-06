import { gheight, gwidth } from "./globalStyles";

export function getMachineLocation(num) {
  const middleGap = 15;
  if (num === 0) {
    return { machineTop: 0 * gheight, machineRight: 323 * gwidth };
  } else if (num === 1) {
    return { machineTop: 0 * gheight, machineRight: 213 * gwidth };
  } else if (num === 2) {
    return { machineTop: 0 * gheight, machineRight: 10 * gwidth };
  } else if (num === 3) {
    return { machineTop: 110 * gheight - 5, machineRight: 10 * gwidth };
  } else if (num === 4) {
    return {
      machineTop: (110 * 2 + middleGap) * gheight,
      machineRight: 10 * gwidth,
    };
  } else if (num === 5) {
    return {
      machineTop: (110 * 3 + middleGap - 5) * gheight,
      machineRight: 10 * gwidth,
    };
  } else if (num === 6) {
    return {
      machineTop: (110 * 4 + middleGap - 10) * gheight,
      machineRight: 10 * gwidth,
    };
  } else if (num === 7) {
    return {
      machineTop: (392 + 10) * gheight,
      machineRight: 220 * gwidth,
    };
  } else if (num === 8) {
    return {
      machineTop: (502 + 5) * gheight,
      machineRight: 220 * gwidth,
    };
  } else {
    return {
      machineTop: 612 * gheight,
      machineRight: 220 * gwidth,
    };
  }
}
