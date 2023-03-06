import { StyleSheet, View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../api/firebaseConfig";
import Constants from "expo-constants";
import { ref, onValue } from "firebase/database";
import MachineItem from "../components/MachineItem";
import SchoolLogoItem from "../components/SchoolLogoItem";
import InstructionItem from "../components/InstructionItem";
import ReportButton from "../components/ReportButton";
import { Dimensions } from "react-native";
import { getMachineSize } from "../helpers/getMachineSize";
import { gheight, gwidth } from "../helpers/globalStyles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Main() {
  const [machines, setMachines] = useState([]);
  console.log(`${windowHeight} by ${windowWidth}`);

  const fetchMachines = async () => {
    console.log("fetching...");
    const machinesRef = ref(db, "machines");
    onValue(machinesRef, (snapshot) => {
      let allMachines = [];
      snapshot.forEach((snap) => {
        allMachines.push(snap.val());
      });
      setMachines([...allMachines]);
    });
  };

  useEffect(() => {
    fetchMachines();
  }, []);

  return (
    <View style={styles.container}>
      <SchoolLogoItem />
      <InstructionItem />
      <ReportButton />

      {machines.map((machine, index) => {
        return (
          <MachineItem
            key={index}
            num={index}
            type={machine.type}
            status={machine.status}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "90%",
  },
});
