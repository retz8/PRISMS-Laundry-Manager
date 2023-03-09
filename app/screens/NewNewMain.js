import { StyleSheet, View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../api/firebaseConfig";
import Constants from "expo-constants";
import { ref, onValue } from "firebase/database";
import { Dimensions } from "react-native";
import { getMachineImage } from "../helpers/getMachineImage";
import { getMachineRotation } from "../helpers/getMachineRotation";
// import ReportButton from "../components/ReportButton";
//import { machineHeight, machineWidth } from "../helpers/getMachineSize";
import { gheight, gwidth } from "../helpers/globalStyles";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const windowRatio = windowWidth / windowHeight;

export default function NewNewMain() {
  const machineHeight = (windowHeight / 5).toFixed(2);
  const machineWidth = ((machineHeight * 585) / 721).toFixed(2);
  console.log(`machine: ${machineHeight} by ${machineWidth}`);

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
    // Re-제로 부터 시작하는 코딩생활

    <View style={styles.container}>
      <View style={{ height: "20%", backgroundColor: "orange" }}>
        {machines.map((machine, index) => {
          if (index === 0) {
            return (
              <View key={index}>
                <Image
                  source={getMachineImage(machine.type, machine.status)}
                  style={{
                    height: 0.8 * machineHeight,
                    width: 0.8 * machineWidth,
                    resizeMode: "contain",
                    transform: [getMachineRotation(index)],
                  }}
                />
              </View>
            );
          }
        })}
      </View>
      <View style={{ height: "20%", backgroundColor: "blue" }}></View>
      <View style={{ height: "20%", backgroundColor: "red" }}></View>
      <View style={{ height: "20%", backgroundColor: "green" }}></View>
      <View style={{ height: "20%", backgroundColor: "blue" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#ffffff",
    width: "100%",
    height: "100%",
  },
});
