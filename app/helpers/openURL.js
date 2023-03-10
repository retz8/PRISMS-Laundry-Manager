import { Linking } from "react-native";

export function openURL() {
  console.log("openurl");
  Linking.openURL("https://forms.gle/1R1MNiZeH2Km1xnb8");
}
