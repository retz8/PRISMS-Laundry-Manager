import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../api/firebaseConfig";
import { ref, onValue } from "firebase/database";
import FirstMachineItem from "../components/FirstMachineItem";
import SecondMachineItem from "../components/SecondMachineItem";
import FirstRightMachineItem from "../components/FirstRightMachineItem";
import SecondRightMachineItem from "../components/SecondRightMachineItem";
import SchoolLogoItem from "../components/SchoolLogoItem";
import InstructionItem from "../components/InstructionItem";
import ReportButton from "../components/ReportButton";
import Constants from "expo-constants";

export default function Main() {
  const [machines, setMachines] = useState([]);

  const fetchMachines = async () => {
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
      <View style={styles.leftContainer}>
        <FirstMachineItem machines={machines} />
        <InstructionItem />
        <SecondMachineItem machines={machines} />
        <ReportButton />
      </View>

      <View style={styles.rightContainer}>
        <FirstRightMachineItem machines={machines} />
        <SecondRightMachineItem machines={machines} />
        <SchoolLogoItem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    alignContent: "center",
    marginTop: Constants.statusBarHeight,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  leftContainer: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: "2%",
  },
  rightContainer: { flex: 1, flexDirection: "column", paddingRight: "3%" },
});
