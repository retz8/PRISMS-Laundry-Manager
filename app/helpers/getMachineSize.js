import { Dimensions } from "react-native";

export const machineHeight = // 높이 변환 작업
  (Dimensions.get("screen").height / 7).toFixed(2);

export const machineWidth = // 가로 변환 작업
  (((Dimensions.get("screen").height / 7) * 585) / 721).toFixed(2);
