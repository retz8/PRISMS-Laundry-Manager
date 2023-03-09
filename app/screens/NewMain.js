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
import { machineWidth, machineHeight } from "../helpers/getMachineSize";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const windowRatio = windowWidth / windowHeight;

export default function NewMain() {
  const [machines, setMachines] = useState([]);
  console.log(`machine: ${machineHeight} by ${machineWidth}`);
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
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        {/* <FirstMachineItem /> */}
        <View
          style={{
            //flex: 1,
            flexDirection: "row",
            //height: "100%",
            width: 2 * machineWidth,
            justifyContent: "space-between",
          }}
        >
          {machines.map((machine, index) => {
            if (index === 0) {
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50%",
                    //paddingRight: "5%",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      height: 1 * machineHeight,
                      width: 1 * machineWidth,
                      //resizeMode: "contain",
                      transform: [getMachineRotation(index)],
                    }}
                  />
                </View>
              );
            } else if (index === 1) {
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50%",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      height: 1 * machineHeight,
                      width: 1 * machineWidth,
                      //resizeMode: "contain",
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
            //flex: 2.2,
            //alignItems: "flex-start",
            justifyContent: "center",
            height: windowHeight - 1 * machineHeight - 3 * machineWidth - 120,

            // paddingTop: 1 * machineHeight,
            // paddingBottom: 1 * machineWidth,
          }}
        >
          <Image
            source={require("../../assets/images/instruction2.png")}
            style={{
              width: windowHeight - 1 * machineHeight - 3 * machineWidth - 120,
              transform: [{ rotate: "90deg" }],
              resizeMode: "contain",
              //left: "0%",
            }}
          />
        </View>
        {/* <SecondMachineItem /> */}
        <View
          style={{
            // flex: 2.7,
            flexDirection: "row",
            height: 3 * machineWidth,
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
              height: 3 * machineWidth,
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
                        width: 1 * machineWidth,
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
                        width: 1 * machineWidth,
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
                        width: 1 * machineWidth,
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
      <View style={{ flex: 1, flexDirection: "column", paddingRight: "5%" }}>
        <View
          style={{
            //flex: 2,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",

            height: 2 * machineWidth,
          }}
        >
          {machines.map((machine, index) => {
            if (index === 2) {
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: "center",
                    height: 1 * machineWidth,
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      width: 1 * machineWidth,
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
                    height: 1 * machineWidth,
                    alignItems: "flex-end",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      width: 1 * machineWidth,
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
            //flex: 3.3,
            flexDirection: "column",
            justifyContent: "space-between",
            height: 3 * machineWidth,
            paddingTop: (1 / 2) * machineWidth,
          }}
        >
          {machines.map((machine, index) => {
            if (index === 4) {
              return (
                <View
                  key={index}
                  style={{
                    justifyContent: "center",
                    height: 1 * machineWidth,
                    alignItems: "flex-end",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      width: 1 * machineWidth,
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
                    height: 1 * machineWidth,
                    alignItems: "flex-end",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      width: 1 * machineWidth,
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
                    height: 1 * machineWidth,
                    alignItems: "flex-end",
                  }}
                >
                  <Image
                    source={getMachineImage(machine.type, machine.status)}
                    style={{
                      width: 1 * machineWidth,
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
            justifyContent: "center",

            flexDirection: "column",
            height:
              windowHeight - 5 * machineWidth - (1 / 2) * machineWidth - 120,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              height:
                windowHeight - 5 * machineWidth - (1 / 2) * machineWidth - 120,
              alignItems: "flex-end",
              paddingTop: 1 * machineWidth,
            }}
          >
            <Image
              source={require("../../assets/images/PRISMS-logo.png")}
              style={{
                resizeMode: "contain",
                width:
                  windowHeight -
                  5 * machineWidth -
                  (1 / 2) * machineWidth -
                  120,
                transform: [{ rotate: "90deg" }],
                // position: "absolute",
                // left: "20%",
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
