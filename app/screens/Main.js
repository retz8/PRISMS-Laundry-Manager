import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../api/firebaseConfig";
import Constants from "expo-constants";
import { ref, onValue } from "firebase/database";
import MachineItem from "../components/MachineItem";
import SchoolLogoItem from "../components/SchoolLogoItem";
import InstructionItem from "../components/InstructionItem";
import ReportButton from "../components/ReportButton";

export default function Main() {
  const [machines, setMachines] = useState([]);

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
      <SchoolLogoItem />
      <InstructionItem />
      <ReportButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    position: "relative",
  },
});
