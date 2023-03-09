import { StyleSheet, View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../api/firebaseConfig";
import Constants from "expo-constants";
import { ref, onValue } from "firebase/database";
import { Dimensions } from "react-native";
import FirstMachineItem from "../components/FirstMachineItem";
import NewSchoolLogoItem from "../components/NewSchoolLogoItem";
import SecondMachineItem from "../components/SecondMachineItem";
import { getMachineImage } from "../helpers/getMachineImage";
import { getMachineRotation } from "../helpers/getMachineRotation";
import ReportButton from "../components/ReportButton";
import {
  machineWidth,
  machineHeight,
  getMachineSize,
} from "../helpers/getMachineSize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function NewMain() {
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
    getMachineSize();
    fetchMachines();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        {/* <FirstMachineItem /> */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            height: "100%",
            width: "100%",
            justifyContent: "space-between",
            paddingLeft: "5%",
            paddingRight: "5%",
          }}
        >
          {machines.map((machine, index) => {
            if (index === 0) {
              return (
                <View
                  key={index}
                  style={{ alignItems: "center", width: "50%" }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      height: 111,
                      resizeMode: "contain",
                      transform: [getMachineRotation(index)],
                    }}
                  />
                </View>
              );
            } else if (index === 1) {
              return (
                <View
                  key={index}
                  style={{ alignItems: "center", width: "50%" }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      height: 111,
                      resizeMode: "contain",
                      transform: [getMachineRotation(index)],
                    }}
                  />
                </View>
              );
            }
          })}
          {/* <View style={{ height: "100%", backgroundColor: "red" }} />
          <View style={{ backgroundColor: "purple" }} /> */}
        </View>
        {/* <NewSchoolLogoItem /> */}
        <View
          style={{
            flex: 2.2,
            alignItems: "flex-start",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Image
            source={require("../../assets/images/instruction2.png")}
            style={{
              width: "100%",
              transform: [{ rotate: "90deg" }],
              resizeMode: "contain",
              //left: "0%",
            }}
          />
        </View>
        {/* <SecondMachineItem /> */}
        <View
          style={{
            flex: 2.7,
            flexDirection: "row",
            height: "100%",
            width: "100%",
          }}
        >
          <View
            style={{
              flex: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ReportButton />
          </View>

          <View
            style={{
              flex: 6.5,
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              //paddingTop: "10%",
              //paddingBottom: "10%",
            }}
          >
            {machines.map((machine, index) => {
              if (index === 7) {
                return (
                  <View
                    key={index}
                    style={{
                      justifyContent: "center",
                      height: "33%",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={getMachineImage(machine.type, machine.status)}
                      style={{
                        width: 90,
                        resizeMode: "contain",
                        transform: [getMachineRotation(index)],
                      }}
                    />
                  </View>
                );
              } else if (index === 8) {
                return (
                  <View
                    key={index}
                    style={{
                      justifyContent: "center",
                      height: "33%",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={getMachineImage(machine.type, machine.status)}
                      style={{
                        width: 90,
                        resizeMode: "contain",
                        transform: [getMachineRotation(index)],
                      }}
                    />
                  </View>
                );
              } else if (index === 9) {
                return (
                  <View
                    key={index}
                    style={{
                      justifyContent: "center",
                      height: "33%",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={getMachineImage(machine.type, machine.status)}
                      style={{
                        width: 90,
                        transform: [getMachineRotation(index)],
                        resizeMode: "contain",
                      }}
                    />
                  </View>
                );
              }
            })}
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flex: 2,
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            paddingRight: "10%",
          }}
        >
          {machines.map((machine, index) => {
            if (index === 2) {
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: "center",
                    height: "50%",
                    alignItems: "flex-end",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      width: 90,
                      transform: [getMachineRotation(index)],
                      resizeMode: "contain",
                    }}
                  />
                </View>
              );
            } else if (index === 3) {
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: "center",
                    height: "50%",
                    alignItems: "flex-end",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      width: 90,
                      transform: [getMachineRotation(index)],
                      resizeMode: "contain",
                    }}
                  />
                </View>
              );
            }
          })}
        </View>
        <View
          style={{
            flex: 3.3,
            flexDirection: "column",
            justifyContent: "space-between",
            paddingRight: "10%",
            height: "100%",
            paddingTop: "10%",
          }}
        >
          {machines.map((machine, index) => {
            if (index === 4) {
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: "center",
                    height: "33%",
                    alignItems: "flex-end",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      width: 90,
                      transform: [getMachineRotation(index)],
                      resizeMode: "contain",
                    }}
                  />
                </View>
              );
            } else if (index === 5) {
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: "center",
                    height: "33%",
                    alignItems: "flex-end",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      width: 90,
                      transform: [getMachineRotation(index)],
                      resizeMode: "contain",
                    }}
                  />
                </View>
              );
            } else if (index === 6) {
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: "center",
                    height: "33%",
                    alignItems: "flex-end",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      width: 90,
                      transform: [getMachineRotation(index)],
                      resizeMode: "contain",
                    }}
                  />
                </View>
              );
            }
          })}
        </View>
        <View
          style={{
            flex: 2,
            position: "relative",
            justifyContent: "space-between",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              height: "100%",
              alignItems: "flex-end",
            }}
          >
            <Image
              source={require("../../assets/images/PRISMS-logo.png")}
              style={{
                resizeMode: "contain",
                width: "80%",
                transform: [{ rotate: "90deg" }],
                position: "absolute",
                left: "20%",
              }}
            />
          </View>
        </View>
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
});
