import { StyleSheet, View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../api/firebaseConfig";
import Constants from "expo-constants";
import { ref, onValue } from "firebase/database";
import { Dimensions } from "react-native";
import FirstMachineItem from "../components/FirstMachineItem";
import SecondMachineItem from "../components/SecondMachineItem";
import { machineWidth, machineHeight } from "../helpers/getMachineSize";
import FirstRightMachineItem from "../components/FirstRightMachineItem";
import SecondRightMachineItem from "../components/SecondRightMachineItem";
import SchoolLogoItem from "../components/SchoolLogoItem";
import InstructionItem from "../components/InstructionItem";

const windowHeight = Dimensions.get("window").height;

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
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#ffffff",
    alignContent: "center",
    width: "100%",
    height: "90%",
  },
  leftContainer: {
    flex: 1,
    flexDirection: "column",
  },
  rightContainer: { flex: 1, flexDirection: "column", paddingRight: "5%" },
});
