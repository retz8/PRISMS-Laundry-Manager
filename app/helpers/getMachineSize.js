import { gheight, gwidth } from "./globalStyles";

export function getMachineSize() {
  const machineWidth = gwidth * 110;
  const machineHeight = gheight * 140;
  return { machineWidth, machineHeight };
}
