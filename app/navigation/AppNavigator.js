import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "../screens/Main";
import NewMain from "../screens/NewMain";

const AppNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Main"
        component={NewMain}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
