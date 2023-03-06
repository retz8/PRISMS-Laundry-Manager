import { Dimensions } from "react-native";
export const basicDimensions = {
  height: 816,
  width: 432,
};

export const gheight = (
  Dimensions.get("screen").height *
  (1 / basicDimensions.height)
).toFixed(2);

export const gwidth = (
  Dimensions.get("screen").width *
  (1 / basicDimensions.width)
).toFixed(2);
