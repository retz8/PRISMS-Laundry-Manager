import { Dimensions } from "react-native";

export const machineHeight = (Dimensions.get("screen").height / 7).toFixed(2);

export const machineWidth = (
  ((Dimensions.get("screen").height / 7) * 585) /
  721
).toFixed(2);
