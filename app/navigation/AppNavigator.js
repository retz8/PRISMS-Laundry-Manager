import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={Main}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
